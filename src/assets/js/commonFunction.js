export const GetQueryString = (name) => {
  let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", 'i');
  let r = window.location.search.substr(1).match(reg);
  if (r != null) {
    return decodeURI(r[2]);
  }
  return null;
}
