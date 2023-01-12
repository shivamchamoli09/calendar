// import styles from "rollup-plugin-styles";
// const autoprefixer = require('autoprefixer');
// import { terser } from 'rollup-plugin-terser'
// import babel from '@rollup/plugin-babel';

// // the entry point for the library
// const input = './index.tsx'

// // 
// var MODE = [
//     {
//         fomart: 'cjs'
//     },
//     {
//         fomart: 'esm'
//     },
//     {
//         fomart: 'umd'
//     }
// ]

// var config = []


// MODE.map((m) => {
//     var conf = {
//         input: input,
//         output: {
//             // then name of your package
//             name: "react-awesome-buttons",
//             file: `dist/index.${m.fomart}.js`,
//             format: m.fomart,
//             exports: "auto"
//         },
//         // this externelizes react to prevent rollup from compiling it
//         external: ["react", /@babel\/runtime/],
//         plugins: [
//             // these are babel comfigurations
//             babel({
//                 exclude: 'node_modules/**',
//                 plugins: ['@babel/transform-runtime'],
//                 babelHelpers: 'runtime'
//             }),
//             // this adds sourcemaps
//             // sourcemaps(),
//             // this adds support for styles
//             styles({
//                 postcss: {
//                     plugins: [
//                         autoprefixer()
//                     ]
//                 }
//             })
//         ],
//     }
//     config.push(conf)
// })

// export default [
//     ...config,
// ]


import typescript from "@rollup/plugin-typescript";

export default {
    input: "./index.tsx",
    output: {
        dir: 'dist',
        // file: `dist/main.esm.js`,
        format: "esm",
    },
    plugins: [
        typescript({
            tsconfig: "tsconfig.json",
            module: "esnext"
        }),
    ]
}