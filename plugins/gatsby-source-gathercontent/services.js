const {get} = require('./api')


/**
 * @typedef Template
 * @type {object}
 * @property {number} id - an ID.
 * @property {string} name - Name.
 * @property {number} number_of_items_using - Number of published elements.
 * @property {string} structure_uuid - ID of set of fields.
 */

/**
 * @param {string} userName
 * @param {string} apiKey
 * @param {string} projectId
 * @return {Promise<Template[]>}
 */

exports.getAllTemplates =  async (userName, apiKey, projectId) => {
   return get(`projects/${projectId}/templates`, {userName, apiKey})
      .then(async res => {
         if(res.data) {
            return res.data
         }
         return []
      })
      .catch(err => console.log("THIS IS ERR FROM TEMPLATES REQ", err))
}

/**
 * @typedef Field
 * @type {object}
 * @property {string} uuid - an ID.
 * @property {string} label - Name of field.
 * @property {"text"} field_type - Type of field.
 * @property {{is_plain: boolean}} metadata - Type of field.
 * /

/**
 * @typedef Structure
 * @type {object}
 * @property {string} id - ID of Data Model.
 * @property {string} name - Name of Data Model.
 * @property {Field[]} fields - Fields from data-model.
 */

/**
 * @param {string} userName
 * @param {string} apiKey
 * @param {Template} template
 * @return {Promise<Structure>}
 */

exports.getStructure =  async (userName, apiKey, template) => {
   return get(`structures/${template.structure_uuid}`, {userName, apiKey})
      .then(async res => {
         if(res.data) {
            return ({
               id: template.id,
               name: template.name,
               fields: res.data.groups.reduce((acc, item) => acc.concat(item.fields), [])
            })
         }
         return
      })
      .catch(err => console.log("THIS IS ERR FROM STRUCTURES REQ", err))
}

/**
 * @typedef UpdatedItem
 * @type {object}
 * @property {string} id - ID of item.
 * @property {number} template_id - Id of DataModel.
 * @property {{[key: string]: string}} content - fields with content of Item.
 */

/**
 * @param {ContentItem} item
 * @param {string} userName
 * @param {string} apiKey
 * @return {Promise<UpdatedItem>}
 */

exports.getItemData = async (userName, apiKey, item) => {
   return get(`items/${item.id}`, {userName, apiKey})
      .then(res => {
         if(res.data) {
            return res.data
         }
         return
      })
      .catch(err => console.log("THIS IS ERR FROM GET ITEM REQ", err))
}


/**
 * @typedef ContentItem
 * @type {object}
 * @property {string} id - ID of item.
 * @property {number} template_id - Id of DataModel.
 */

/**
 * @param {string} userName
 * @param {string} apiKey
 * @param {string} projectId
 * @return {Promise<ContentItem[]>}
 */

exports.getAllItems =  async (userName, apiKey, projectId)  => {
   const items = await get(`projects/${projectId}/items`, {userName, apiKey})
      .then(res => {
         if(res.data) {
            return res.data
         }
         return []
      })
      .catch(err => console.log( "THIS IS ERROR FROM GET ALL ITEMS REQ", err))

      return items
}





