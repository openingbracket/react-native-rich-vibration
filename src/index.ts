import {
  NativeModulesProxy,
  EventEmitter,
  Subscription,
} from "expo-modules-core";

// Import the native module. On web, it will be resolved to ReactNativeRichVibration.web.ts
// and on native platforms to ReactNativeRichVibration.ts
import ReactNativeRichVibrationModule from "./ReactNativeRichVibrationModule";
import ReactNativeRichVibrationView from "./ReactNativeRichVibrationView";
import {
  ChangeEventPayload,
  ReactNativeRichVibrationViewProps,
} from "./ReactNativeRichVibration.types";

// Get the native constant value.
export const PI = ReactNativeRichVibrationModule.PI;

export function hello(): string {
  return ReactNativeRichVibrationModule.hello();
}

export async function setValueAsync(value: string) {
  return await ReactNativeRichVibrationModule.setValueAsync(value);
}

const emitter = new EventEmitter(
  ReactNativeRichVibrationModule ?? NativeModulesProxy.ReactNativeRichVibration
);

export function addChangeListener(
  listener: (event: ChangeEventPayload) => void
): Subscription {
  return emitter.addListener<ChangeEventPayload>("onChange", listener);
}

export {
  ReactNativeRichVibrationView,
  ReactNativeRichVibrationViewProps,
  ChangeEventPayload,
};
