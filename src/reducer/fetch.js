const baseUrl = 'https://elm.cangdu.org/';

export const apis = {
  // 获取定位城市
  getGuessCity: {
    url: baseUrl + 'v1/cities?type=guess'
  },
  // 获取食品分类列表-home
  getIndexEntry: {
    url: baseUrl + 'v2/index_entry'
  },
  // 获取商铺列表
  getMerchantList: {
    url: baseUrl + 'shopping/restaurants'
  }
}

export const PostData = (url, params, cb) => {
  return fetch(url, {
    body: JSON.stringify(params), // must match 'Content-Type' header
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, same-origin, *omit
    headers: {
      'user-agent': 'Mozilla/4.0 MDN Example',
      'content-type': 'application/json'
    },
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, cors, *same-origin
    redirect: 'follow', // manual, *follow, error
    referrer: 'no-referrer', // *client, no-referrer
  })
  .then(response => response.json()) // parses response to JSON
  .then(function(myJson) {
    cb && cb(myJson);
  });
}

export const GetData = (url, params, cb) => {
  if (params) {  
    let paramsArray = [];  
    //拼接参数  
    Object.keys(params).forEach(key => paramsArray.push(key + '=' + params[key]))  
    if (url.search(/\?/) === -1) {  
        url += '?' + paramsArray.join('&')  
    } else {  
        url += '&' + paramsArray.join('&')  
    }  
  }

  return fetch(url, cb)
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      cb && cb(myJson);
    });
}
