import { UserConfigExport, ConfigEnv } from 'vite'
import { createVuePlugin } from 'vite-plugin-vue2'
import viteSvgIcons from 'vite-plugin-svg-icons'
import legacy from '@vitejs/plugin-legacy'
// import htmlPlugin from './htmlPlugin'

import path from 'path'

// https://vitejs.dev/config/
export default ({ command }: ConfigEnv): UserConfigExport => {
  return {
    define: {
      'process.env': process.env
    },
    base: '/',
    plugins: [
      createVuePlugin({
        jsx: true,
        vueTemplateOptions: { compilerOptions: { whitespace: 'condense' } },
        jsxOptions: {
          //jsx 配置
          compositionAPI: true
        }
      }),
      // htmlPlugin(),
      legacy({
        targets: ['ie >= 11', 'chrome >= 49'],
        additionalLegacyPolyfills: ['regenerator-runtime/runtime']
      }),
      viteSvgIcons({
        iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
        symbolId: 'icon-[name]'
      })
    ],
    resolve: {
      alias: [
        {
          find: /^~/,
          replacement: ''
        },
        {
          find: '@',
          replacement: path.resolve(__dirname, './src')
        },
        {
          find: '~assets',
          replacement: path.resolve(__dirname, './src/assets')
        }
      ]
    },
    css: {
      preprocessorOptions: {
        scss: {
          charset: false
        }
      }
    }
  }
}
