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

    // uint256 index bit
    function test_256_bit_set(uint256 _src,uint256 _index,bool _value) public pure returns(uint256){
        return _src.set256bit(_index,_value);
    }

    function test_256_bit_get(uint256 _src,uint256 _index) public pure returns(bool){
        return _src.get256bit(_index);
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

    // Options for advanced users
    function test_manual_forAux_detail(uint256 _startbit,uint256 _endbit) public pure returns(uint64){
        // sample map  
        // 1bit-data     0-1
        // 2bit-data     1-3
        // 3bit-data     3-6
        // 4bit-data     6-10
        // 5bit-data     10-15
        // 6bit-data     15-21
        // 7bit-data     21-28
        // 8bit-data     28-36
        // 48bit-data    36-61
        // 3bit-data     61-64
        uint64  testval = 0; 
        testval = testval.set_manual_forAux(0,1,1);         //1bit
        testval = testval.set_manual_forAux(1,3,3);         //2bit
        testval = testval.set_manual_forAux(3,6,7);         //3bit
        testval = testval.set_manual_forAux(6,10,15);       //4bit
        testval = testval.set_manual_forAux(10,15,31);      //5bit
        testval = testval.set_manual_forAux(15,21,63);      //6bit
        testval = testval.set_manual_forAux(21,28,127);     //7bit
        testval = testval.set_manual_forAux(28,36,255);     //8bit
        testval = testval.set_manual_forAux(36,61,123456);  //other bit
        testval = testval.set_manual_forAux(61,64,7);       //last 3bit

        uint64 res = testval.get_manual_forAux(_startbit,_endbit);
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