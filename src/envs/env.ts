declare global {
  interface Window {
    env: any;
  }
}

// change with your own variables
type EnvType = {
  REACT_APP_AUTH_URL: string;
  REACT_APP_API_URL: string;
  REACT_APP_GRAPHQL_URL: string;
};

export const env: EnvType = { ...process.env, ...window.env };
