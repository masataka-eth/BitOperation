# Library for Solidity bit operation

## Why
Solidity for easy bit operations!

## How to
Import into YourContracts

```Solidity
import { BitCalc } from './libs/BitCalc.sol';
```

using

```Solidity
using BitCalc for uint256;
using BitCalc for uint64;
```

access

```Solidity
uint256 testval,res;
testval = testval.set128(0,123);
testval = testval.set128(1,456);
res = testval.get128(0);    // res = 123
res = testval.get128(1);    // res = 456
```

## Functions
### for uint256

| bit | pack | max vaslue |
|:-----------|:------------|:-------------|
|128|2|340,282,366,920,938,463,463,374,607,431,768,211,455|
|64|4|18,446,744,073,709,551,615|
|32|8|4,294,967,295|
|16|16|65,535|
|8|32|255|

### for uint64
| bit | pack | max vaslue |
|:-----------|:------------|:-------------|
|32|2|4,294,967,295|
|16|4|65,535|
|8|8|255|

