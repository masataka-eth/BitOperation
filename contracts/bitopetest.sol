// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.9.0;

import { BitOpe } from './libs/BitOpe.sol';
//import "hardhat/console.sol"; // Hardhat console log

contract bitcalctest{
    using BitOpe for uint256;
    using BitOpe for uint64;

    // GasCheck
    mapping (address => uint256) public mplist1;
    mapping (address => uint256) mplist2;
    mapping (address => uint256) mplist3;
    mapping (address => uint256) mplist4;
    mapping (address => uint256) mplist5;
    mapping (address => uint256) mplist6;
    mapping (address => uint256) mplist7;
    mapping (address => uint256) mplist8;
    address public setAddress = 0x6A1Ebf8f64aA793b4113E9D76864ea2264A5d482;

    function test_128(uint256 _index) public pure returns(uint256){
        uint256  testval = 0; 
        for(uint256 i = 0;i<2;i++){
            testval = testval.set128(i,0x12 + i);
        }
        uint256 res = testval.get128(_index);
        return res;
    }

    function test_64(uint256 _index) public pure returns(uint256){
        uint256  testval = 0; 
        for(uint256 i = 0;i<4;i++){
            testval = testval.set64(i,0x12 + i);
        }
        uint256 res = testval.get64(_index);
        return res;
    }

    function test_32(uint256 _index) public pure returns(uint256){
        uint256  testval = 0; 
        for(uint256 i = 0;i<8;i++){
            testval = testval.set32(i,0x12 + i);
        }
        uint256 res = testval.get32(_index);
        return res;
    }

    function test_16(uint256 _index) public pure returns(uint256){
        uint256  testval = 0; 
        for(uint256 i = 0;i<16;i++){
            testval = testval.set16(i,0x12 + i);
        }
        uint256 res = testval.get16(_index);
        return res;
    }

    function test_8(uint256 _index) public pure returns(uint256){
        uint256  testval = 0; 
        for(uint256 i = 0;i<32;i++){
            testval = testval.set8(i,0x12 + i);
        }
        uint256 res = testval.get8(_index);
        return res;
    }

    // Aux
    function test_32_forAux(uint256 _index) public pure returns(uint64){
        uint64  testval = 0; 
        for(uint64 i = 0;i<2;i++){
            testval = testval.set32_forAux(uint64(i),0x12 + i);
        }
        uint64 res = testval.get32_forAux(_index);
        return res;
    }

    function test_16_forAux(uint256 _index) public pure returns(uint64){
        uint64  testval = 0; 
        for(uint64 i = 0;i<4;i++){
            testval = testval.set16_forAux(uint64(i),0x12 + i);
        }
        uint64 res = testval.get16_forAux(_index);
        return res;
    }

    function test_8_forAux(uint256 _index) public pure returns(uint64){
        uint64  testval = 0; 
        for(uint64 i = 0;i<8;i++){
            testval = testval.set8_forAux(uint64(i),0x12 + i);
        }
        uint64 res = testval.get8_forAux(_index);
        return res;
    }

    // GasCheck
    function test_mapping() public returns(uint256){
        mplist1[setAddress] = 0;
        mplist2[setAddress] = 1;
        mplist3[setAddress] = 2;
        mplist4[setAddress] = 3;
        mplist5[setAddress] = 4;
        mplist6[setAddress] = 5;
        mplist7[setAddress] = 6;
        mplist8[setAddress] = 7;
        return 1;
    }

    function test_bitmanage() public returns(uint256){
        uint256  testval = 0; 

        for(uint256 i = 0;i<8;i++){
            testval = testval.set32(i,i);
            mplist1[setAddress] = testval;
        }
        return 1;
    }
}