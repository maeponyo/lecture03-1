describe("getMinute: 分を求める関数", function(){
  it("第1引数に指定した分から、第2引数に指定した分が経過したのちの分を計算する", function(){
    getMinute(0, 0).should.equal(0);
    getMinute(60, 0).should.equal(0);
    getMinute(40, 30).should.equal(10);
    getMinute(10, 30).should.equal(40);
  });
});

describe("getHour: 経過後の時間を求める関数", function(){
  it("第1引数に指定した時間から、第2引数に指定した時間が経過したのちの時間を計算する", function(){
    getHour(0, 0).should.equal(0);
    getHour(1, 0).should.equal(1);
    getHour(23, 1).should.equal(0);
    getHour(2, 4).should.equal(6);
  });
});
