import { InjectionToken } from "@angular/core";

export interface AppConfig {
  apiEndpoint: string;
  title: string;
}

export let APP_CONFIG = new InjectionToken<AppConfig>('app.config');

export const GLOBAL_APP_CONFIG: AppConfig = {
  apiEndpoint: '/api',
  title: 'VWC Revisited'
};