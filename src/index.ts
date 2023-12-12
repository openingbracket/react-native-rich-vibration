import ReactNativeRichVibrationModule from "./ReactNativeRichVibrationModule";

export function hello(): string {
  return ReactNativeRichVibrationModule.hello();
}

export function hasHaptics(): boolean {
  return ReactNativeRichVibrationModule.hasHaptics();
}

export function vibrate(duration: number = 400, intensity: number = 1): void {
  intensity = Math.max(0, Math.min(1, intensity));
  ReactNativeRichVibrationModule.vibrate(duration, intensity);
}

export function cancelVibration() {
  return ReactNativeRichVibrationModule.cancelVibration();
}
