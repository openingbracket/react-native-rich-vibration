import { Platform } from "react-native";

import ReactNativeRichVibrationModule from "./ReactNativeRichVibrationModule";

export function hasHaptics(): boolean {
  return ReactNativeRichVibrationModule.hasHaptics();
}

/**
 * Vibrates the device with a specified duration and intensity.
 * @param duration The duration of the vibration in milliseconds (minimum 100ms).
 * @param intensity The intensity of the vibration, ranging from 0 to 100.
 */
export function vibrate(duration: number = 400, intensity: number = 50): void {
  // Ensure duration is a number and within the valid range
  if (typeof duration !== "number" || duration < 100) {
    console.error("Duration must be a number and at least 100ms.");
    return;
  }

  // Ensure intensity is a number and within the valid range
  if (typeof intensity !== "number" || intensity < 0 || intensity > 100) {
    console.error("Intensity must be a number between 0 and 100.");
    return;
  }

  // Normalize intensity to range [0, 1]
  let adjustedIntensity = intensity;
  if (Platform.OS === "android") {
    adjustedIntensity = (intensity * 255) / 100; // Scale intensity for Android
  } else if (Platform.OS === "ios") {
    adjustedIntensity = intensity / 100; // Scale intensity for iOS
  }

  // Pass the adjusted intensity and duration to the native module
  ReactNativeRichVibrationModule.vibrate(duration, adjustedIntensity);
}

export function cancelVibration() {
  return ReactNativeRichVibrationModule.cancelVibration();
}
