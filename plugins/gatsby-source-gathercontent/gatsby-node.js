const { createItemsByTemplateName } = require('./graphql/createItemsByTemplateName');
const { createItemsByFolderName } = require('./graphql/createItemsByFolderName');

exports.onPreInit = () => console.log("Loaded gatsby-starter-plugin")

exports.sourceNodes = async ({
  actions,
  createContentDigest,
  createNodeId,
  getNodesByType,
  reporter,
}, { plugins, ...options }) => {
   const args = {
      actions,
      createContentDigest,
      createNodeId,
      options,
   }

   await createItemsByFolderName(args);
}
