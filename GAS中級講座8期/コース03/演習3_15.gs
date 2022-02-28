/**
 * 演習３－15
 * 
 * 以下の機能を持つクラスDateObjectを作成してください。
 * 
 * コンストラクタDateObject: Dateオブジェクトを渡すとインスタンスを生成する
 * valueプロパティ: Dateオブジェクト
 * addDateメソッド: valueプロパティの日付に指定した整数分の「日」を加算して、Dateオブジェクトを返すメソッド
 */
function myFunction3_15() {
  
  class DateObject {
    
    constructor(date) {
      this.value = date;
    }

    addDate(days) {
      const addedDate = new Date(
        this.value.getFullYear(),
        this.value.getMonth(),
        this.value.getDate() + days,
      );
      return addedDate;
    }
  }

  const d = new DateObject(new Date());
  const addedDate = d.addDate(4);

  console.log(d);
  console.log(addedDate);

}