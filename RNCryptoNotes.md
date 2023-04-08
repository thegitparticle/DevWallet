## Notes about crypto support, external libs, etc.

### To get ethers working

1. Install `ethers`
2. Install `@ethersproject/shims`
3. Install `expo-crypto` (new alternative to expo-random and tries to do all of crypto, random generation work needed)

### To get walletconnect working

1. `yarn add @walletconnect/web3wallet @walletconnect/react-native-compat`
2. Need AsyncStorage, Random Values (react-native-get-random-values), `fast-text-encoding`
3. If typescript, add this `@walletconnect/jsonrpc-types` & `@walletconnect/types`

Put the below imports on top of App.tsx

```
import "@ethersproject/shims";
import "fast-text-encoding";
import "@walletconnect/react-native-compat";
```
