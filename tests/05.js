function len(n){
  return n.length;
}

describe("ten", function(){
  it("長さ10の配列を作る", function(){
    len(ten()).should.equal(10);
  });
});

describe("naturalNumber", function(){
  it("第1引数で指定した長さの配列を作る", function(){
    len(naturalNuber(0)).should.equal(0);
    len(naturalNuber(1)).should.equal(1);
    len(naturalNuber(10)).should.equal(10);
  });
});
