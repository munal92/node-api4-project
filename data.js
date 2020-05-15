const shortid = require("shortid");
data = [
{
    id: shortid.generate(),
    todo: "Buy milk"
}
,
{
    id: shortid.generate(),
    todo: "Buy apple"
},
{
    id: shortid.generate(),
    todo: "Buy bread"
}



]


module.exports = data;