import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to NoKotlinUint.web.ts
// and on native platforms to NoKotlinUint.ts
import NoKotlinUintModule from './NoKotlinUintModule';

export function input(name: string): string {
  return NoKotlinUintModule.input(name);
}

export function output(): string {
  return NoKotlinUintModule.output();
}

