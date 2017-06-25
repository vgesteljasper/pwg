# pwg

**Generate secure passwords with options**

_check [pwg-cli](https://github.com/vgesteljasper/pwg-cli) for the command line tool_

## Installation

install with yarn:

```Shell
$ yarn add pwg
```

or with npm:

```Shell
$ npm install pwg --save
```

## Options

parameter | default | required | description
--- | --- | --- | ---
**1** (length) | `20` | false | **length** of the password to be generated
**2** (digits) | `0` | false | amount of **digits** for the password
**3** (symbols) | `0` | false | amount of **symbols** for the password

## Usage

pwd exports a Password class.

```JavaScript
const Password = require('pwg')
```

There are two methods for generating passwords:
1. use the `create` function on an instance of the Password class
2. use an instance of the Password class in a string context

**(1)** execute the `craete` function on the Password instance

```JavaScript
const password = new Password() // no parameters will fallback to default params

console.log(password.create()) // result: zoGuwqLvsEKpJEFqzsKx
```

or **(2)** use the instance in a string context

_In this example, each usage of `password` in a string context creates a new password. So you only need one instance of Password_

```JavaScript
const password = new Password() // no parameters will fallback to default params

console.log(String(password)) // result: JACAHrtoHEnDKJqrHJon
console.log(`${password}`) // result: FIqFnAIvHpGMKnBtonIE
```

## Examples

### 30 characters long, 10 digits, 10 symbols

```JavaScript
// 30 length, 10 digits, 10 symbols
const password = new Password(30, 10, 10)
console.log(password.generate()) // result: ;^4[}0v7668}sGGAv^F4>M!8^y8#1G
```

### 8 characters long, only digits

```JavaScript
// 8 length, 8 digits, symbols = 0 by default
const password = new Password(8, 8)
console.log(String(password)) // result: 44863517
```

### 4 passwords, 20 characters long, only symbols

```JavaScript
// 30 length, 0 digits, 30 symbols
const password = new Password(20, 0, 20)

for (let i = 0; i < 4; i++) {
  console.log(`${password}`)
}

// result:
// !/^.<.+}(+<?<#<(:^>$
// $.&*]<=§/?#).-§}}[=.
// ^=@?#^^]/]@-=*?}]$/.
// >]@:!/^+*:/^.&]$:);}
```
