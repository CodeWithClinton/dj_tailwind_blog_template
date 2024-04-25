

module.exports = {
  content: [
      './templates/**/*.html',
      './node_modules/flowbite/**/*.js'
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
]
}


// module.exports = {
//   content: [
//       './templates/**/*.html',
//       './node_modules/flowbite/**/*.js'
//   ],
//   theme: {
//     extend: {
//       fontFamily: {
//         'sans': ['Arial', 'sans-serif']
//       }
//     },
//   },
//   plugins: [
//     require('flowbite/plugin')
//   ]
// }
