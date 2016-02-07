# btype-hook

A way to use BType seamlessly in your Node project.


## Installing

```bash
npm install --save btype-hook
```

```js
require('btype-hook');
```


## Usage

Just `require()` BType files from your JavaScript.

```btype
# fib.bt
func int:main() {
    func int:fib(int:n) {
        if (n < 2) {
            return n;
        } else {
            return fib(n - 1) + fib(n - 2);
        }
    }

    return fib(10);
}
export main;

```

```js
// index.js

// You only need to do this once.
require('btype-hook');

// Require a .bt file
var module = require('./myBTypeModule.bt');
// All of the exports are available on the module.
module.main(); // 55
```
