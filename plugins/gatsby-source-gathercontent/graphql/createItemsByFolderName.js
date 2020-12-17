const camelcaseKeys = require('camelcase-keys');
const { getAllTemplates, getAllItems, getItemData } = require('../services');
const { getProjectFolders } = require('../api/getProjectFolders');
const { getStructure } = require('../api/getStructure');

async function createItemsByFolderName({
  actions,
  createContentDigest,
  createNodeId,
  options,
}) {
   const { createNode } = actions
   const { userName, apiKey, projectId } = options

   const folders = await getProjectFolders(userName, apiKey, projectId);
   const items = await getAllItems(userName, apiKey, projectId);

   await Promise.all(items.map(async i => {
      const itemRes = await getItemData(userName, apiKey, i);
      const structure = await getStructure(userName, apiKey, itemRes.structure_uuid);

      const folder = folders.filter(f => f.uuid === itemRes.folder_uuid)[0];
      const folderName = folder.name.replace(/\s/g, "");

      const fields = structure.groups.reduce((acc, group) => {
         return [...acc, ...group.fields];
      }, []);

      const allContent = fields.reduce((acc, field) => {
         const normalisedKey = Object.keys(camelcaseKeys({ [field.label]: field.label }))[0];

         return {
            ...acc,
            [normalisedKey]: itemRes.content[field.uuid],
         }
      }, {});

      createNode({
         id: createNodeId(`folders-items-${i.id}`),
         parent: null,
         children: [],
         internal: {
            type: `GatherContentItemsByFolder${folderName}`,
            content: JSON.stringify(itemRes),
            contentDigest: createContentDigest(itemRes),
         },
         name: itemRes.name,
         ...allContent,
      })

      return itemRes;
   }));
}

exports.createItemsByFolderName = createItemsByFolderName;
