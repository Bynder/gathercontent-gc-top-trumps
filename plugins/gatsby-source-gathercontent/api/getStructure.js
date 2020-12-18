const { get } = require('../api');

async function getStructure(userName, apiKey, structureUuid) {
   try {
      const { data } = await get(`structures/${structureUuid}`, { userName, apiKey });
      return data || [];
   } catch(err) {
      console.log(err);
   }
}

exports.getStructure = getStructure;
