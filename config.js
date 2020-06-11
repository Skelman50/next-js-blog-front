import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();

export const APP_NAME = publicRuntimeConfig.APP_NAME;
export const API = publicRuntimeConfig.PRODUCTION
  ? publicRuntimeConfig.API_PROD
  : publicRuntimeConfig.API_DEV;
