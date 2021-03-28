module.exports = {
    plugins: [
      require('postcss-import'),
      require('tailwindcss'),
      require('autoprefixer'),
      require('postcss-preset-env')({ stage: 1 })
    ]
  }
  

//   // postcss.config.js
// module.exports = {
//   plugins: {
//     tailwindcss: {},
//     autoprefixer: {},
//   }
// }