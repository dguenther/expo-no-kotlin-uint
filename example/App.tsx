import { StyleSheet, Text, View } from 'react-native';

import * as NoKotlinUint from 'no-kotlin-uint';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{NoKotlinUint.output()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
