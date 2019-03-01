const assert = require("assert");

try {
    //correct
    assert.equal(1,"1");
    //incorrect
    assert.equal(1,2);
}
catch(err){
    console.log(err)
}

try {
    //correct
    assert.deepStrictEqual(7, 7);
    //incorrect
    assert.deepStrictEqual(3, "3");
}
catch(err){
    console.log(err);
}

try {
    assert.fail("Let's fail the test...");
}
catch(err){
    console.log(err)
}

try {
    //correct
    assert.ok(true);
    assert.ok("expects not falsy value");
    assert.ok(1)

    //incorrect
    assert.ok(false)
}
catch(err) {
    console.log(err);
}

//next assert.rejects