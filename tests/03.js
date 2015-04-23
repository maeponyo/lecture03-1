describe("getHour: 経過後の時間を求める関数", function(){
  it("第1引数に指定した時間から、第2引数に指定した時間が経過したのちの時間を計算する", function(){
    getHour(0, 0).should.equal(0);
    getHour(1, 0).should.equal(0);
    getHour(23, 1).should.equal(0);
    getHour(2, 4).should.equal(6);
    getHour(26, 4).should.equal(null);
  });
});

describe("showTestResult: 経過後の時間を求める関数", function(){
  it("第1引数に指定した時間から、第2引数に指定した時間が経過したのちの時間を計算する", function(){
    showTestResult(null).should.equal("fail");
    showTestResult(1).should.equal("success");
    showTestResult(true).should.equal("success");
  });
});
