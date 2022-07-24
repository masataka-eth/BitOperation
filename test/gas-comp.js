const { expect } = require("chai");
const { loadFixture } = require("@nomicfoundation/hardhat-network-helpers");

describe("bitcalctest", function () {
    async function deployFixture() {  
        const [owner, ...rest] = await ethers.getSigners();
        const getcontract = await ethers.getContractFactory("bitcalctest");
        const myContract = await getcontract.connect(owner).deploy();
    
        return { myContract, owner, rest };
      }

    describe("test_mapping", function () {
        it("gas check only", async function () {
            const { myContract, owner } = await loadFixture(deployFixture);
            var val = await myContract.connect(owner).test_mapping();
            expect(0).to.equal(0);
          });   
    });

    describe("test_bitmanage", function () {
        it("gas check only", async function () {
            const { myContract, owner } = await loadFixture(deployFixture);
            var val = await myContract.connect(owner).test_bitmanage();
            expect(0).to.equal(0);
          });   
    });
});