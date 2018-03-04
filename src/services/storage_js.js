/* eslint-disable */
//
//////////////////////
// PLEASE TAKE NOTE:
//////////////////////
//
// Since this is an online example, we're using
// windowDriver instead of this Blockstack driver.
// This is just here for an example of how you might
// design your Blockstack driver.
//

/* eslint-disable */
import * as blockstack from "blockstack";

function defaultReplacer(key) {
  return `${key}.json`;
}

export default function createBlockstackDriver(config = {}) {
  const replacer = config.replacer || defaultReplacer;

  // if we pass an options object into either getItem or setItem,
  // the values there will override the value set in defaultOptions on the driver.
  const useOptions = (options = {}) => ({
    ...options,
    ...(config.defaultOptions || {})
  });

  return {
    getItem: async (key, options) => {
      const result = await blockstack.getFile(
        replacer(key),
        useOptions(options)
      );
      return JSON.parse(result);
    },
    setItem: async (key, value, options) => {
      return await blockstack.putFile(
        replacer(key),
        JSON.stringify(value),
        useOptions(options)
      );
    }
  };
}
