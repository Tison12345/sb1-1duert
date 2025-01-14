import { NativeScriptConfig } from '@nativescript/core';

export default {
  id: 'org.nativescript.fitnessapp',
  appPath: 'src',
  appResourcesPath: '../../tools/assets/App_Resources',
  android: {
    v8Flags: '--expose_gc',
    markingMode: 'none'
  }
} as NativeScriptConfig;