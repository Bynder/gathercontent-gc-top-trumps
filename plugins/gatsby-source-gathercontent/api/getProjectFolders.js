const { get } = require('../api');

async function getProjectFolders(userName, apiKey, projectId) {
   try {
      const { data } = await get(`projects/${projectId}/folders`, { userName, apiKey });
      return data || [];
   } catch(err) {
      console.log(err);
   }
}

exports.getProjectFolders = getProjectFolders;
