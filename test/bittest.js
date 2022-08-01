const { expect } = require("chai");
const { loadFixture } = require("@nomicfoundation/hardhat-network-helpers");

describe("bitcalctest", function () {
    async function deployFixture() {  
        const [owner, ...rest] = await ethers.getSigners();
        const getcontract = await ethers.getContractFactory("bitcalctest");
        const myContract = await getcontract.connect(owner).deploy();
    
        return { myContract, owner, rest };
      }

    describe("test_128", function () {
        it("index 0", async function () {
            const { myContract, owner } = await loadFixture(deployFixture);
            var val = await myContract.connect(owner).test_128(0);
            expect(val).to.equal(0x12);
          });
          
          it("index 1", async function () {
            const { myContract, owner } = await loadFixture(deployFixture);
            var val = await myContract.connect(owner).test_128(1);
            expect(val).to.equal(0x13);
          });
    });

    describe("test_64", function () {
        it("set index 0", async function () {
        const { myContract, owner } = await loadFixture(deployFixture);
        var val = await myContract.connect(owner).test_64(0);
        expect(val).to.equal(0x12);
        });

        it("set index 1", async function () {
        const { myContract, owner } = await loadFixture(deployFixture);
        var val = await myContract.connect(owner).test_64(1);
        expect(val).to.equal(0x13);
        });

        it("get index 2", async function () {
        const { myContract, owner } = await loadFixture(deployFixture);
        var val = await myContract.connect(owner).test_64(2);
        expect(val).to.equal(0x14);
        });

        it("get index 3", async function () {
        const { myContract, owner } = await loadFixture(deployFixture);
        var val = await myContract.connect(owner).test_64(3);
        expect(val).to.equal(0x15);
        });        
    });

    describe("test_32", function () {
        it("set index 0", async function () {
        const { myContract, owner } = await loadFixture(deployFixture);
        var val = await myContract.connect(owner).test_32(0);
        expect(val).to.equal(0x12);
        });

        it("set index 1", async function () {
        const { myContract, owner } = await loadFixture(deployFixture);
        var val = await myContract.connect(owner).test_32(1);
        expect(val).to.equal(0x13);
        });

        it("get index 2", async function () {
        const { myContract, owner } = await loadFixture(deployFixture);
        var val = await myContract.connect(owner).test_32(2);
        expect(val).to.equal(0x14);
        });

        it("get index 3", async function () {
        const { myContract, owner } = await loadFixture(deployFixture);
        var val = await myContract.connect(owner).test_32(3);
        expect(val).to.equal(0x15);
        });
        
        it("get index 4", async function () {
            const { myContract, owner } = await loadFixture(deployFixture);
            var val = await myContract.connect(owner).test_32(4);
            expect(val).to.equal(0x16);
        });

        it("get index 5", async function () {
            const { myContract, owner } = await loadFixture(deployFixture);
            var val = await myContract.connect(owner).test_32(5);
            expect(val).to.equal(0x17);
        }); 

        it("get index 6", async function () {
            const { myContract, owner } = await loadFixture(deployFixture);
            var val = await myContract.connect(owner).test_32(6);
            expect(val).to.equal(0x18);
        }); 

        it("get index 7", async function () {
            const { myContract, owner } = await loadFixture(deployFixture);
            var val = await myContract.connect(owner).test_32(7);
            expect(val).to.equal(0x19);
        });
    });

    describe("test_16", function () {
        it("set index 0", async function () {
        const { myContract, owner } = await loadFixture(deployFixture);
        var val = await myContract.connect(owner).test_16(0);
        expect(val).to.equal(0x12);
        });

        it("set index 1", async function () {
        const { myContract, owner } = await loadFixture(deployFixture);
        var val = await myContract.connect(owner).test_16(1);
        expect(val).to.equal(0x13);
        });

        it("get index 2", async function () {
        const { myContract, owner } = await loadFixture(deployFixture);
        var val = await myContract.connect(owner).test_16(2);
        expect(val).to.equal(0x14);
        });

        it("get index 3", async function () {
        const { myContract, owner } = await loadFixture(deployFixture);
        var val = await myContract.connect(owner).test_16(3);
        expect(val).to.equal(0x15);
        });
        
        it("get index 4", async function () {
            const { myContract, owner } = await loadFixture(deployFixture);
            var val = await myContract.connect(owner).test_16(4);
            expect(val).to.equal(0x16);
        });

        it("get index 5", async function () {
            const { myContract, owner } = await loadFixture(deployFixture);
            var val = await myContract.connect(owner).test_16(5);
            expect(val).to.equal(0x17);
        }); 

        it("get index 6", async function () {
            const { myContract, owner } = await loadFixture(deployFixture);
            var val = await myContract.connect(owner).test_16(6);
            expect(val).to.equal(0x18);
        }); 

        it("get index 7", async function () {
            const { myContract, owner } = await loadFixture(deployFixture);
            var val = await myContract.connect(owner).test_16(7);
            expect(val).to.equal(0x19);
        });

        it("get index 8", async function () {
            const { myContract, owner } = await loadFixture(deployFixture);
            var val = await myContract.connect(owner).test_16(8);
            expect(val).to.equal(0x1A);
        });

        it("get index 9", async function () {
            const { myContract, owner } = await loadFixture(deployFixture);
            var val = await myContract.connect(owner).test_16(9);
            expect(val).to.equal(0x1B);
        });

        it("get index 10", async function () {
            const { myContract, owner } = await loadFixture(deployFixture);
            var val = await myContract.connect(owner).test_16(10);
            expect(val).to.equal(0x1C);
        });

        it("get index 11", async function () {
            const { myContract, owner } = await loadFixture(deployFixture);
            var val = await myContract.connect(owner).test_16(11);
            expect(val).to.equal(0x1D);
        });

        it("get index 12", async function () {
            const { myContract, owner } = await loadFixture(deployFixture);
            var val = await myContract.connect(owner).test_16(12);
            expect(val).to.equal(0x1E);
        });

        it("get index 13", async function () {
            const { myContract, owner } = await loadFixture(deployFixture);
            var val = await myContract.connect(owner).test_16(13);
            expect(val).to.equal(0x1F);
        });

        it("get index 14", async function () {
            const { myContract, owner } = await loadFixture(deployFixture);
            var val = await myContract.connect(owner).test_16(14);
            expect(val).to.equal(0x20);
        });

        it("get index 15", async function () {
            const { myContract, owner } = await loadFixture(deployFixture);
            var val = await myContract.connect(owner).test_16(15);
            expect(val).to.equal(0x21);
        });
    });

    describe("test_8", function () {
        it("set index 0", async function () {
            const { myContract, owner } = await loadFixture(deployFixture);
            var val = await myContract.connect(owner).test_8(0);
            expect(val).to.equal(0x12);
        });

        it("set index 16", async function () {
            const { myContract, owner } = await loadFixture(deployFixture);
            var val = await myContract.connect(owner).test_8(16);
            expect(val).to.equal(0x22);
        });

        it("get index 31", async function () {
            const { myContract, owner } = await loadFixture(deployFixture);
            var val = await myContract.connect(owner).test_8(31);
            expect(val).to.equal(0x31);
        });
    });

    // Aux
    describe("test_32_forAux", function () {
        it("index 0", async function () {
            const { myContract, owner } = await loadFixture(deployFixture);
            var val = await myContract.connect(owner).test_32_forAux(0);
            expect(val).to.equal(0x12);
          });
          
          it("index 1", async function () {
            const { myContract, owner } = await loadFixture(deployFixture);
            var val = await myContract.connect(owner).test_32_forAux(1);
            expect(val).to.equal(0x13);
          });
    });
    describe("test_16_forAux", function () {
        it("index 0", async function () {
            const { myContract, owner } = await loadFixture(deployFixture);
            var val = await myContract.connect(owner).test_16_forAux(0);
            expect(val).to.equal(0x12);
          });
          it("index 1", async function () {
            const { myContract, owner } = await loadFixture(deployFixture);
            var val = await myContract.connect(owner).test_16_forAux(1);
            expect(val).to.equal(0x13);
          });
          it("index 2", async function () {
            const { myContract, owner } = await loadFixture(deployFixture);
            var val = await myContract.connect(owner).test_16_forAux(2);
            expect(val).to.equal(0x14);
          });
          it("index 3", async function () {
            const { myContract, owner } = await loadFixture(deployFixture);
            var val = await myContract.connect(owner).test_16_forAux(3);
            expect(val).to.equal(0x15);
          });
    });
    describe("test_8_forAux", function () {
        it("index 0", async function () {
            const { myContract, owner } = await loadFixture(deployFixture);
            var val = await myContract.connect(owner).test_8_forAux(0);
            expect(val).to.equal(0x12);
          });
          it("index 1", async function () {
            const { myContract, owner } = await loadFixture(deployFixture);
            var val = await myContract.connect(owner).test_8_forAux(1);
            expect(val).to.equal(0x13);
          });
          it("index 2", async function () {
            const { myContract, owner } = await loadFixture(deployFixture);
            var val = await myContract.connect(owner).test_8_forAux(2);
            expect(val).to.equal(0x14);
          });
          it("index 3", async function () {
            const { myContract, owner } = await loadFixture(deployFixture);
            var val = await myContract.connect(owner).test_8_forAux(3);
            expect(val).to.equal(0x15);
          });
          it("index 4", async function () {
            const { myContract, owner } = await loadFixture(deployFixture);
            var val = await myContract.connect(owner).test_8_forAux(4);
            expect(val).to.equal(0x16);
          });
          it("index 5", async function () {
            const { myContract, owner } = await loadFixture(deployFixture);
            var val = await myContract.connect(owner).test_8_forAux(5);
            expect(val).to.equal(0x17);
          });
          it("index 6", async function () {
            const { myContract, owner } = await loadFixture(deployFixture);
            var val = await myContract.connect(owner).test_8_forAux(6);
            expect(val).to.equal(0x18);
          });
          it("index 7", async function () {
            const { myContract, owner } = await loadFixture(deployFixture);
            var val = await myContract.connect(owner).test_8_forAux(7);
            expect(val).to.equal(0x19);
          });
    });
    describe("test_manual_forAux", function () {
      // it("one test", async function () {
      //     const { myContract, owner } = await loadFixture(deployFixture);
      //     var val = await myContract.connect(owner).test_manual_forAux();
      //     expect(val).to.equal(true);
      //   });
      it("1bit test", async function () {
        const { myContract, owner } = await loadFixture(deployFixture);
        var val = await myContract.connect(owner).test_manual_forAux_detail(0,1);
        expect(val).to.equal(1);
      });
      it("2bit test", async function () {
        const { myContract, owner } = await loadFixture(deployFixture);
        var val = await myContract.connect(owner).test_manual_forAux_detail(1,3);
        expect(val).to.equal(3);
      });
      it("3bit test", async function () {
        const { myContract, owner } = await loadFixture(deployFixture);
        var val = await myContract.connect(owner).test_manual_forAux_detail(3,6);
        expect(val).to.equal(7);
      });
      it("4bit test", async function () {
        const { myContract, owner } = await loadFixture(deployFixture);
        var val = await myContract.connect(owner).test_manual_forAux_detail(6,10);
        expect(val).to.equal(15);
      });
      it("5bit test", async function () {
        const { myContract, owner } = await loadFixture(deployFixture);
        var val = await myContract.connect(owner).test_manual_forAux_detail(10,15);
        expect(val).to.equal(31);
      });
      it("6bit test", async function () {
        const { myContract, owner } = await loadFixture(deployFixture);
        var val = await myContract.connect(owner).test_manual_forAux_detail(15,21);
        expect(val).to.equal(63);
      });
      it("7bit test", async function () {
        const { myContract, owner } = await loadFixture(deployFixture);
        var val = await myContract.connect(owner).test_manual_forAux_detail(21,28);
        expect(val).to.equal(127);
      });
      it("8bit test", async function () {
        const { myContract, owner } = await loadFixture(deployFixture);
        var val = await myContract.connect(owner).test_manual_forAux_detail(28,36);
        expect(val).to.equal(255);
      });
      it("other bit test", async function () {
        const { myContract, owner } = await loadFixture(deployFixture);
        var val = await myContract.connect(owner).test_manual_forAux_detail(36,61);
        expect(val).to.equal(123456);
      });
      it("last 3 bit test", async function () {
        const { myContract, owner } = await loadFixture(deployFixture);
        var val = await myContract.connect(owner).test_manual_forAux_detail(61,64);
        expect(val).to.equal(7);
      });

        
    });
});