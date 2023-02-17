const keys = {
  port: import.meta.env.VITE_PORT || 5000,
  get server_url() {
    return import.meta.env.VITE_AXIOS_URL || `http://localhost:${this.port}`;
  },
};

export default keys;
