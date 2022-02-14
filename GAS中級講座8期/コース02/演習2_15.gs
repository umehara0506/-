/**
 * 演習２－15
 * 
 * 演習２-10のクラスOnigiriをライブラリ化しましょう。
*/

/**
 * ライブラリID
 * 1sOnXVLvPw21rh1H1M-k8ZSsXs2vfuGEwjLtwmryIaqGvncz6unqkz4pJ
 */

function myFunction2_15() {

  const umeOnigiri = MyOnigiri.createOnigiri('梅', 110, 7);
  console.log(umeOnigiri);
  console.log(umeOnigiri.getTaxIncluded());
  console.log(umeOnigiri.isSoldOut());

  const kanimisoOnigiri = MyOnigiri.createOnigiri('かにみそ', 180, 2);
  console.log(kanimisoOnigiri);
  console.log(kanimisoOnigiri.getTaxIncluded());
  console.log(kanimisoOnigiri.isSoldOut());

  const umemisoOnigiri = MyOnigiri.createOnigiri('うめみそ', 140, 0);
  console.log(umemisoOnigiri);
  console.log(umemisoOnigiri.getTaxIncluded());
  console.log(umemisoOnigiri.isSoldOut());
}
