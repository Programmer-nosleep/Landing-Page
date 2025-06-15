const BASE = process.env.REACT_APP_DEPLOY_URL || `${process.env.REACT_APP_LOCAL_URL}:${process.env.REACT_APP_PORT}`;
export const BASE_URL = BASE;

export const API_PATHS = {
  AUTH: {
    REGISTER: `/api/`,
  },

  USER: {
    CREATE_USER: `/api/users`,
  },

  IMAGE: {
    UPLOAD_IMAGE: `/api/auth/upload-image`,
  }
};

