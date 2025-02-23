/// <reference types="vite/client" />

declare interface ImportMetaEnv {
  readonly VITE_TMDB_API_KEY: string
}

declare module "*.svg" {
  const content: any;
  export default content;
}