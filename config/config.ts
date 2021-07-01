/*
 * @Author: xpy
 * @Description: 配置文件
 * @Date: 2021-06-29 10:58:43
 * @LastEditTime: 2021-07-01 19:10:29
 */
import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    // { path: '/', component: '@/pages/index' },
    { path: '/', component: '@/pages/welcome/index' },
    { path: '/aa', component: '@/pages/index' },
    { component: '@/pages/404' },
  ],
  fastRefresh: {},
  history: {
    type: 'hash',
  },
  outputPath: 'dist', // default "dist"
  proxy: {
    '/api': {
      target: 'https://park.elascloud.com/',
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    },
  },
});
