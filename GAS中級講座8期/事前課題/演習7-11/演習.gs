function myFunction7_11() {

  console.log(getAddress('1820022'));

}

/**
 * 郵便番号から住所(町域名まで)を返す関数
 * @params {string} postcode - 郵便番号
 * @return {string} 住所(町域名まで)
 */
function getAddress(postcode) {

  const POST_URL = 'https://zipcloud.ibsnet.co.jp/api/search';
  const params = {
    method: 'post',
    payload: { zipcode: postcode }
  }

  const response = UrlFetchApp.fetch(POST_URL, params);
  const text = response.getContentText();
  const result = JSON.parse(text).results[0];

  const address = result.address1 + result.address2 + result.address3
  return address;

}