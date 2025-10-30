import dotenv from 'dotenv';
dotenv.config();
export const CONFIG = {
  PORT: process.env.PORT || 3000,
  SESSION_SECRET: process.env.SESSION_SECRET || 'change_me_secret',
  PLUGINS_DIR: process.env.PLUGINS_DIR || './plugins',
  DATA_DIR: process.env.DATA_DIR || './data'
};
