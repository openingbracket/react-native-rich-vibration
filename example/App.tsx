import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Platform,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import * as ReactNativeRichVibration from "react-native-rich-vibration";
import { Slider } from "@miblanchard/react-native-slider";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function App() {
  const [intensity, setIntensity] = useState(40);
  const [sharpness, setSharpness] = useState(80);
  const [duration, setDuration] = useState(1000);

  function calculateWidth(minValue = 1000, maxValue = 5000) {
    // Normalize the slider value between 0 and 1
    const normalizedValue = (duration - minValue) / (maxValue - minValue);

    // Convert the normalized value to a percentage between 0 and 100
    const height = normalizedValue * 100;

    return height;
  }

  function vibrationStart() {
    ReactNativeRichVibration.vibrate(duration, intensity, sharpness);
  }

  function vibrationStop() {
    ReactNativeRichVibration.cancelVibration();
  }

  const durationWidth = calculateWidth();

  return (
    <View style={styles.container}>
      <View style={styles.barContainer}>
        <View style={[styles.barBackground, { width: `${durationWidth}%` }]}>
          <View style={[styles.barForeground, { height: `${intensity}%` }]} />
        </View>
      </View>

      <View style={styles.controllerContainer}>
        {Platform.OS === "ios" ? (
          <>
            <View style={styles.titleContainer}>
              <Text style={styles.titleText}>Sharpness</Text>
              <Text style={styles.maxVal}>{sharpness.toFixed(0)}</Text>
            </View>
            <Slider
              value={sharpness}
              minimumValue={10}
              maximumValue={100}
              minimumTrackTintColor="#00d592"
              maximumTrackTintColor="#c5c5c5"
              thumbTintColor="#fff"
              containerStyle={styles.sliderContainer}
              onValueChange={(value) => setSharpness(value[0])}
            />
          </>
        ) : null}

        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Intensity</Text>
          <Text style={styles.maxVal}>{intensity.toFixed(0)}</Text>
        </View>
        <Slider
          value={intensity}
          minimumValue={0}
          maximumValue={100}
          thumbTintColor="#fff"
          minimumTrackTintColor="#00d592"
          maximumTrackTintColor="#c5c5c5"
          containerStyle={styles.sliderContainer}
          onValueChange={(value) => setIntensity(value[0])}
        />
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Duration</Text>
          <Text style={styles.maxVal}>{duration.toFixed(0)}</Text>
        </View>
        <Slider
          value={duration}
          minimumValue={1000}
          maximumValue={5000}
          thumbTintColor="#fff"
          minimumTrackTintColor="#00d592"
          maximumTrackTintColor="#c5c5c5"
          containerStyle={styles.sliderContainer}
          onValueChange={(value) => setDuration(value[0])}
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={vibrationStart}>
          <Text style={styles.buttonText}>start</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={vibrationStop}>
          <Text style={styles.buttonText}>stop</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
  },
  barContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: windowWidth * 0.01,
    paddingVertical: windowHeight * 0.04,
  },
  barBackground: {
    height: "80%",
    width: "100%", // Duration
    backgroundColor: "#d4fcf0",
    justifyContent: "flex-end",
  },
  barForeground: {
    height: "80%", // Intensity
    width: "100%",
    backgroundColor: "#00d592",
  },
  controllerContainer: {
    height: 320,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#f1f1f1",
    paddingVertical: windowHeight * 0.03,
    marginBottom: windowHeight * 0.05,
  },
  sliderContainer: {
    width: "80%",
  },
  titleContainer: {
    width: "80%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  titleText: { fontSize: 13, color: "#000" },
  maxVal: {
    fontSize: 12,
    color: "#c0c0c0",
  },
  buttonContainer: {
    marginBottom: windowHeight * 0.05,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttonText: {
    fontSize: 13,
    color: "#00d592",
  },
  button: {
    backgroundColor: "#f1f1f1",
    width: windowWidth * 0.3,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#00d592",
    borderWidth: 0.8,
    marginHorizontal: 10,
    padding: 15,
    borderRadius: 5,
  },
});
