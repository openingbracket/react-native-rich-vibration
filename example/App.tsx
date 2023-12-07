import { StyleSheet, Text, View } from "react-native";

import * as ReactNativeRichVibration from "react-native-rich-vibration";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{ReactNativeRichVibration.hello()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
