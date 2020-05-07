# blogsauce :spaghetti:

**Personal blog building tool.**

[![CircleCI](https://circleci.com/gh/developextra/blogsauce.svg?style=shield)](https://circleci.com/gh/developextra/blogsauce)
[![npm version](https://img.shields.io/npm/v/blogsauce.svg?style=flat)](https://www.npmjs.com/package/blogsauce) 
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/developextra/blogsauce/blob/master/LICENSE.md)

I'm currently working on this tool to use for my
personal blog `Develop Extra`. Once it's at a "stable" stage 
I'll begin to use it for [developextra.com](https://github.com/developextra/developextra.com)
to host my blog posts using Netlify.

## Install
```
npm install blogsauce --save-dev
```

## Usage
```js
const blog = require('blogsauce')

console.log(blog.config)

blog.setConfig({ options })
blog.build()
```

## Documentation

Coming soon...

## License

MIT License

Copyright (c) 2020 Michael Arakilian

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.