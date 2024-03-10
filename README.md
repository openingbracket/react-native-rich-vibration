# React Native Rich Vibration

This React Native library provides an alternative to the standard vibrations API, integrating haptic feedback for a more immersive user experience. With customizable options for intensity, duration, and sharpness, you have greater control over how vibrations feel in your application.

⚠️ This library requires your mobile device to have a haptic engine.

## Installation

1. Install the module using npm or yarn:

   ```bash
   npx expo install react-native-rich-vibration
   ```

## Demo

Watch the demo video below to see the React Native Rich Vibration module in action:

https://github.com/openingbracket/react-native-rich-vibration/assets/9054649/35f55ed6-f3b0-4d23-9d4d-74ae94693d42

## Usage

```bash
import * as ReactNativeRichVibration from "react-native-rich-vibration";

// Check for Haptics Support
ReactNativeRichVibration.hasHaptics()

// Vibrate with Custom Duration and Intensity (Sharpness for iOS)
// For Android: vibrate(duration: number, intensity: number)
// For iOS: vibrate(duration: number, intensity: number, sharpness?: number)
ReactNativeRichVibration.vibrate(400, 50); // For Android
ReactNativeRichVibration.vibrate(400, 50, 40); // For iOS


// Cancel Ongoing Vibration
ReactNativeRichVibration.cancelVibration();
```
