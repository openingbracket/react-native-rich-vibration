import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { ReactNativeRichVibrationViewProps } from './ReactNativeRichVibration.types';

const NativeView: React.ComponentType<ReactNativeRichVibrationViewProps> =
  requireNativeViewManager('ReactNativeRichVibration');

export default function ReactNativeRichVibrationView(props: ReactNativeRichVibrationViewProps) {
  return <NativeView {...props} />;
}
