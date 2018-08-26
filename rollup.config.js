import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import vueplugin from 'rollup-plugin-vue'
let version = '1.0.0'
let configCjs = {
  input: 'src/main.js',
  output: {
    file: 'dist/index.cjs.js',
    format: 'cjs',
    globals: {
      vue: 'Vue'
    },
    sourcemap: true
  },
  plugins: [
    vueplugin(),
    resolve(),
    babel({
      exclude: 'node_modules/**' // 只编译我们的源代码
    })
  ],
  banner: '/* library version ' + version + ' */',
  footer: '/* @author xubowen */',
  //外部模块
  external: ['vue']
}
let configUmd = {
  input: 'src/main.js',
  output: {
    file: 'dist/index.js',
    format: 'iife',
    name: 'mybunlde',
    globals: {
      vue: 'Vue'
    },
    sourcemap: true
  },
  plugins: [
    vueplugin(),
    resolve(),
    babel({
      exclude: 'node_modules/**' // 只编译我们的源代码
    })
  ],
  banner: '/* library version ' + version + ' */',
  footer: '/* @author xubowen */',
  //外部模块
  external: ['vue']
}
export default [configCjs, configUmd]
