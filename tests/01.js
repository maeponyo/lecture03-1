describe("add: 加算を行う関数", function(){
  it("二つの数値の和を返す", function(){
    add(0, 0).should.equal(0);
    add(1, 0).should.equal(1);
    add(1, -1).should.equal(0);
    add(1.0, 0).should.equal(1.0);
    add(1.0, -1.0).should.equal(0);
    add(1, 3.14159).should.equal(4.14159);
  });
});

describe("subtract: 減算を行う関数", function(){
  it("第1引数に指定した数値から、第2引数に指定した数値を引く", function(){
    subtract(0, 0).should.equal(0);
    subtract(1, 0).should.equal(1);
    subtract(1, 1).should.equal(0);
    subtract(10, 2).should.equal(8);
  });
});

describe("multiply: 乗算を行う関数", function(){
  it("二つの数値の積を返す", function(){
    multiply(0, 0).should.equal(0);
    multiply(1, 0).should.equal(0);
    multiply(1, 1).should.equal(1);
    multiply(10, 2).should.equal(20);
  });
});

describe("calc: 3a + 2b - cを計算する関数", function(){
  it("第1から第3までの引数に指定した数値をそれぞれ、a, b, cとして計算する", function(){
    calc(0, 0, 0).should.equal(0);
    calc(1, 0, 0).should.equal(3);
    calc(0, 1, 0).should.equal(2);
    calc(0, 0, 1).should.equal(-1);
    calc(1, 1, 1).should.equal(4);
  });
});

