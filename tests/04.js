function len(n){
  return n.length;
}

describe("one", function(){
  it("長さ1の配列を作る", function(){
    len(one()).should.equal(1);
  });
});

describe("two", function(){
  it("長さ2の配列を作る", function(){
    len(two()).should.equal(2);
  });
});

describe("three", function(){
  it("長さ3の配列を作る", function(){
    len(three()).should.equal(3);
  });
});
