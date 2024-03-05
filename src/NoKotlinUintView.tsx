import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { NoKotlinUintViewProps } from './NoKotlinUint.types';

const NativeView: React.ComponentType<NoKotlinUintViewProps> =
  requireNativeViewManager('NoKotlinUint');

export default function NoKotlinUintView(props: NoKotlinUintViewProps) {
  return <NativeView {...props} />;
}
