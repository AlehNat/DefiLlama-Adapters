const { sumTokensExport } = require("../helper/chain/ton");
const ADDRESSES = require("../helper/coreAssets.json");

const tsTON6mSyMinter = "EQDEi341S6JqvaZ3IsWaw9pSvVSMyZ_80nd3Qyur7Pt94hSf"


module.exports = {
  methodology: 'Counts FIVA smartcontract balance as TVL.',
  ton: {
    tvl: sumTokensExport({ owners: [tsTON6mSyMinter], tokens: [ADDRESSES.null]}),
  }
}
