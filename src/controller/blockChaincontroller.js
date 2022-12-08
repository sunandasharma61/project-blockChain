let axios = require("axios");
const blockChainModel = require('../model/blockChainModel')

let getblockChain = async function (req, res) {
  try {
    let options = {
      method: "get",
      url: "https://api.coincap.io/v2/assets",
      headers: {
        Authorization: "Bearer  5a3c9f61-7b40-4b2c-812c-e3dd9828c119",
      }
    };
    let result = await axios(options);
    console.log(result);
    let data = result.data.data;
       
     const sortVal = data.sort((a, b)=> {return a.changePercent24Hr - b.changePercent24Hr})
    await blockChainModel.deleteMany()
  const saveData = await blockChainModel.insertMany(sortVal)

    res.status(200).send({ msg:sortVal, status: true });
  } 
  catch (err) {
    res.status(500).send({ msg: err.message });
  }
};
module.exports.getblockChain = getblockChain