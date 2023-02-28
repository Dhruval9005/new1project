const keys = {
  port: import.meta.env.VITE_PORT || 5000,
  get server_url() {
    return import.meta.env.VITE_AXIOS_URL || `http://localhost:${this.port}`;
  },
  token: {
    customer: import.meta.env.VITE_CUSTOMER_JWT,
    admin: import.meta.env.VITE_ADMIN_JWT,
    seller: import.meta.env.VITE_SELLER_JWT,
  },
};

export default keys;
