# React Native Rich Vibration

React Native Rich Vibration is a simple module that allows you to incorporate haptic feedback into your React Native applications. It currently supports iOS, and Android support is a work in progress. The module utilizes iOS CoreHaptics for generating vibrations.

## Installation

1. Install the module using npm or yarn:

   ```bash
   npx expo install react-native-rich-vibration
   ```

## Usage

```bash
import * as ReactNativeRichVibration from "react-native-rich-vibration";

// Check for Haptics Support
ReactNativeRichVibration.hasHaptics()

// Vibrate with Custom Duration and Intensity
ReactNativeRichVibration.vibrate(400, 0.4);

// Cancel Ongoing Vibration
ReactNativeRichVibration.cancelVibration();
```
