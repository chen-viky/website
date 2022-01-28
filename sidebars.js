/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  Vue:[
    {
      type:'autogenerated',
      dirName:'vue'
    }
  ],
  React:[
    'react/index'
  ],
  Golang:[
    'golang/index'
  ],
  English:[
    'english/index'
  ],
  Math:[
    'math/index'
  ],
  Framework:[
    {
      type:'autogenerated',
      dirName:'framework'
    }
  ]

};

'4a90f3f30f165e69c9dd6f3cd3c5ff61'.toUpperCase()
module.exports = sidebars;