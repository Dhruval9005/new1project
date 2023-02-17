/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_AXIOS_URL: string;
  readonly VITE_PORT: number;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
