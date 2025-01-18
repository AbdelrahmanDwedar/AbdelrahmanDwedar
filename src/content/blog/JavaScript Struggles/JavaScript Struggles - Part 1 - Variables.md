---
title: JavaScript Struggles - Part 1 - Variables
description: Get an overview of variables and things that makes no sense for other developers in variables in JavaScript.
pubDate: Oct 27, 2021
tags:
  - JavaScript
  - beginners
  - variables
group: JavaScript Struggles
part: 1
heroImage: "../js-variables.webp"
---

# JavaScript Struggles - Part 1 - Variables

## Defending Variables

We have three keywords to defend a variable [`let`](#let), [`var`](#var), [`const`](#const).

|              | Var | Let | Const |
| :----------: | :-: | :-: | :---: |
|  Changeable  | ✔  | ✔  |       |
| Block Scope  |     | ✔  |  ✔   |
| Global Scope | ✔  |     |       |
| Make Arrays  | ✔  | ✔  |  ✔   |

> We mostly use `let` because of the block scope which I'll explain in the below.

---

## let <a name="let"></a>

The keyword `let` makes a variable only usable within the scope it made in, **you can't use it outside that scope**.

E.g.

```js
{
  let num = 10;
  console.log(num); // Outputs: 10
}
console.log(num); // ERROR
```

---

## Var <a name="var"></a>

The keyword `var` makes a global variable, **you can use it everywhere in the code**.

E.g.

```js
{
  var num = 10;
  console.log(num); // Outputs: 10
}
console.log(num); // Outputs: 10
```

---

## Const <a name="const"></a>

The keyword `const` makes an unchangeable variable, **you can't change its value**.

E.g.

```js
const pi = 3.14159265359;
pi = 4; // ERROR
```
