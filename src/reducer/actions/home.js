import * as type from './../type.js';
import { apis, GetData} from './../fetch.js';

export const getIndexEntry = (params) => dispatch => {
  GetData(apis.getIndexEntry.url, params ? params : null, (data) => {
    if(data) {
      dispatch ({
        type: type.GET_INDEX_ENTRY,
        index_entry: data
      })
    }
  })
};

export const getMerchantList = (params) => dispatch => {
  GetData(apis.getMerchantList.url, params, (data) => {
    if(data) {
      dispatch ({
        type: type.GET_MERCHANT_LIST,
        merchant_list: data
      })
    }
  })
};
