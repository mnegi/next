import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();

export const API_URL = publicRuntimeConfig.API_URL;
export const API_KEY_NAME = publicRuntimeConfig.API_KEY_NAME;
export const API_KEY_VALUE = publicRuntimeConfig.API_KEY_VALUE;
export const APP_NAME = publicRuntimeConfig.APP_NAME;
