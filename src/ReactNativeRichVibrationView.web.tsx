import * as React from 'react';

import { ReactNativeRichVibrationViewProps } from './ReactNativeRichVibration.types';

export default function ReactNativeRichVibrationView(props: ReactNativeRichVibrationViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
