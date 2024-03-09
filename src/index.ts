import { Platform } from "react-native";

import ReactNativeRichVibrationModule from "./ReactNativeRichVibrationModule";

export function hasHaptics(): boolean {
  return ReactNativeRichVibrationModule.hasHaptics();
}

/**
 * Vibrates the device with a specified duration and intensity.
 * @param duration The duration of the vibration in milliseconds (minimum 100ms).
 * @param intensity The intensity of the vibration, ranging from 0 to 100.
 * @param {number} [sharpness] - (iOS only) The sharpness of the vibration, ranging from 0 to 100.
 */
export function vibrate(
  duration: number = 400,
  intensity: number = 50,
  sharpness?: number
): void {
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

  if (
    sharpness !== undefined &&
    (typeof sharpness !== "number" || sharpness < 0 || sharpness > 100)
  ) {
    throw new Error("Sharpness must be a number between 0 and 100.");
  }

  // Normalize intensity and sharpness based on platform
  let adjustedIntensity = intensity;
  let adjustedSharpness = sharpness;

  if (Platform.OS === "android") {
    // Scale intensity for Android
    adjustedIntensity = (intensity * 255) / 100;
    // Pass the adjusted intensity and duration to the native module for Android
    ReactNativeRichVibrationModule.vibrate(duration, adjustedIntensity);
  } else if (Platform.OS === "ios") {
    // Scale intensity for iOS
    adjustedIntensity = intensity / 100;
    // Default sharpness for iOS if not provided
    adjustedSharpness = sharpness ?? 100;
    // Scale sharpness for iOS
    adjustedSharpness = adjustedSharpness / 100;
    // Pass the adjusted intensity, duration, and sharpness to the native module for iOS
    ReactNativeRichVibrationModule.vibrate(
      duration,
      adjustedIntensity,
      adjustedSharpness
    );
  }
}

export function cancelVibration() {
  return ReactNativeRichVibrationModule.cancelVibration();
}
