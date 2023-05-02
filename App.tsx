import React from 'react';
import {View, Text, StyleSheet, NativeModules, Button} from 'react-native';

console.log(NativeModules.Counter);

// console.log(NativeModules.Counter.getContants());

const App = () => {
  const increment = () => {
    NativeModules.Counter.increment((value: any) => {
      console.log('the count is ' + value);
    });
  };

  const decrement = () => {
    NativeModules.Counter.decrement()
      .then((result: any) => console.log(result))
      .catch((error: any) => console.log(error));
  };
  return (
    <View style={styles.container}>
      <Text>App</Text>

      <Button title="Increment Count" onPress={() => increment()} />
      <Button title="Decrease Count" onPress={() => decrement()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {justifyContent: 'center', alignItems: 'center', flex: 1},
});

export default App;
