import { StyleSheet, Text, View, Button } from "react-native";

import * as ReactNativeRichVibration from "react-native-rich-vibration";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{ReactNativeRichVibration.hello()}</Text>
      <Text>
        {ReactNativeRichVibration.hasHaptics() ? "has haptics" : "No haptics"}
      </Text>
      <Button
        title="Press"
        onPress={() => ReactNativeRichVibration.vibrate(4000, 0.4)}
      />
      <View />
      <Button
        title="Cancel"
        onPress={() => ReactNativeRichVibration.cancelVibration()}
      />
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
