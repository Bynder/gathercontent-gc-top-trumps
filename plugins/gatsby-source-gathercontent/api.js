const axios = require('axios')
/**
 * @param {string} url
 * @param {{userName: string, apiKey: string}} options
 */

 exports.get = async (url, options) => {
  let credentials = `${options.userName}:${options.apiKey}`;
  let base64credentials = Buffer.from(credentials).toString('base64');

  const response = await axios.get(`https://api.gathercontent.com/${url}`, {
    headers: {
      Accept: 'application/vnd.gathercontent.v2+json',
      Authorization: `Basic ${base64credentials}`,
    },
  });

  return response.data
};
