module.exports = {
  /**
   * Function to create a query query string from a javascript object
   * @param {Object} obj {Required} The javascript object
   * @return {String} The formatted query param
   */
  queryString: (obj) => {
    if (!Object.keys(obj).length) return null;
    return `?${Object.keys(obj).map(key => `${key}=${obj[key]}`).join('&')}`;
  },
};
