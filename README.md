# React Native Rich Vibration

React Native Rich Vibration is a simple module that allows you to incorporate haptic feedback into your React Native applications. Supports both Android and IOS.

## Installation

1. Install the module using npm or yarn:

   ```bash
   npx expo install react-native-rich-vibration
   ```

## Demo

Watch the demo video below to see the React Native Rich Vibration module in action:

<video width="320" height="240" controls>
  <source src="https://raw.githubusercontent.com/openingbracket/react-native-rich-vibration/main/example/assets/demo-video.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

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
