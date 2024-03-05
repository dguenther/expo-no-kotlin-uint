import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to NoKotlinUint.web.ts
// and on native platforms to NoKotlinUint.ts
import NoKotlinUintModule from './NoKotlinUintModule';
import NoKotlinUintView from './NoKotlinUintView';
import { ChangeEventPayload, NoKotlinUintViewProps } from './NoKotlinUint.types';

// Get the native constant value.
export const PI = NoKotlinUintModule.PI;

export function hello(): string {
  return NoKotlinUintModule.hello();
}

export async function setValueAsync(value: string) {
  return await NoKotlinUintModule.setValueAsync(value);
}

const emitter = new EventEmitter(NoKotlinUintModule ?? NativeModulesProxy.NoKotlinUint);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { NoKotlinUintView, NoKotlinUintViewProps, ChangeEventPayload };
