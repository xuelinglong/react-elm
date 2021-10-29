import * as type from './../type.js';
import { apis, GetData} from './../fetch.js';

export const getGuessCity = () => dispatch => {
  GetData(apis.getGuessCity.url, (data) => {
    if(data) {
      dispatch ({
        type: type.GET_GUESS_CITY,
        guessCity: data
      })
    }
  })
};

export const changeFooterSelect = (tab, title) => dispatch => {
  dispatch ({
    type: type.CHANGE_FOOTER_SELECT,
    activeFooter: tab,
    title: title
  })
};

export const changeTabLevel = (tabLevel) => dispatch => {
  dispatch ({
    type: type.CHANGE_TAB_LEVEL,
    tabLevel: tabLevel
  })
};
