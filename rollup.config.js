import vueplugin from "rollup-plugin-vue";
import resolve from "rollup-plugin-node-resolve";
import babel from "rollup-plugin-babel";
import uglify from "rollup-plugin-uglify-es";
const json = require("./package.json");
const { name, version } = json;
let baseconfig = (format) => {
  return {
    input: "./src/index.js",
    output: {
      name,
      globals: {
        vue: "Vue"
      },
      extend: true,
      format,
      // sourceMap: true,
      file: format === "iife" ? `dist/${name}.js` : `dist/${name}.${format}.js`,
      banner: "/* library version " + version + " */",
      footer: "/* @author xubowen */"
    },
    external: ["vue"],
    plugins: [
      resolve(),
      babel({
        exclude: "node_modules/**" // 只编译我们的源代码
      }),
      vueplugin({ css: true }),
      uglify()
    ]
  };
};
export default [baseconfig("esm"), baseconfig("cjs"), baseconfig("iife")];
