---
title: JavaScript Struggles - Part 2 - Numbers
description: Numbers related issues that might be not understood by a developer coming from another language
pubDate: Oct 30, 2021
tags:
  - JavaScript
  - beginners
  - numbers
  - integers
  - float
group: JavaScript Struggles
part: 2
heroImage: "../js-numbers.webp"
---

# JavaScript Struggles - Part 2 - Numbers

I personally didn't understand how do <abbr title="JavaScript">JS</abbr> act with number, but after I learnt about it.

We have to understand what's the data types of JavaScript, and how to use them. Let me help you with it.

## Numbering Related Data Types

- [`Number`](#number): The main Number data type.
- [`null`](#null): intentional absence of any object value.
- [`NaN`](#nan): Not a Number.

---

## Number

Whether it's integer like: `1`
or float like: `1.3`

**It is number, if there was a decimal number it'll add it, if not it'll sow up as normal integer.**

```js
console.log(5 / 2); // Outputs: 2.5
console.log(4 / 2); /// Outputs: 2
```

> We usually use `Number()` to turn the variable to number.

---

### NULL

Null basically is none. If you made undefended variable it'll equal `null`.

And **it doesn't mean that it's an empty string or 0**.

```js
let nothing; // This variable is undefined.

console.log(null == nothing); // Outputs: true
console.log(null == 0); // Outputs: false
console.log(null == ""); // Outputs: false
```

> That happens because `null` only equals the undefined variable. `null` and `undefined` are equal but **not identical**.

We can use null data type as 0, since **it's an object**.
Let's try it:

```js
the_number = null;
the_number++; // Add 1 to the null variable

console.log(the_number); // Outputs: 1
```

So we can use `null` it instead of 0.

> We can add that `null` is an object data type

---

### NaN

`NaN` stands for **Not a Number**, and it appears if you you have a **filled string** and converted it to number.

```js
let thing = "Something";

console.log(Number(thing)); // Outputs: NaN
```

But if you compared `NaN` with other `NaN` it'll return **false**.

```js
let thing = "Something";

console.log(Number(thing)); // NaN
console.log(Number(thing) == NaN); // false
```

Use the `isNaN()` method instead.

```js
let something = "Value";

console.log(isNaN(something)); // True
console.log(isNaN(Number(something))); // True
```
