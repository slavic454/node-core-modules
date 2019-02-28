const assert = require("assert");

try {
    assert.equal(1,1);
    assert.equal(1,2);
}
catch(err){
    console.log(err)
}