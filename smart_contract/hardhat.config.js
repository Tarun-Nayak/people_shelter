require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/z4WpA8UKgqnwbTYmrZu15yCOiijBKaRv",
      accounts: [
        "2962b18968fadf4bd1a640ad76f511536bce9e1af44419743ab3e7a51862027f",
      ],
    },
  },
};
