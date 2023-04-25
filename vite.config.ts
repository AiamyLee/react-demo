import { defineConfig } from 'vite';

import react from '@vitejs/plugin-react';
import path from 'path';
import autoprefixer from 'autoprefixer';
import pxtovw from 'postcss-px-to-viewport';
import legacy from '@vitejs/plugin-legacy';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    process.env.NODE_ENV === 'production' &&
      legacy({
        targets: [
          'Android > 39',
          'Chrome >= 60',
          'Safari >= 10.1',
          'iOS >= 10.3',
          'Firefox >= 54',
          'Edge >= 15',
          'ie >= 11',
        ],
        additionalLegacyPolyfills: ['regenerator-runtime/runtime'],
      }),
  ],
  css: {
    postcss: {
      plugins: [
        pxtovw({
          viewportWidth: 375,
          viewportUnit: 'vw',
        }),
        autoprefixer(),
      ],
    },
  },

  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
});
// 如ts提示错误是无法识别类型，需要安装一下node的类型定义文件
// yarn add -D "@types/node"
// 添加下面配置
