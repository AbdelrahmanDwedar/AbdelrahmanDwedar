---
title: JavaScript struggles - part 6 - truthy & falsy values
description: Discussing the issue of truthy and falsy values in JavaScript
pubDate: Jul 21, 2022
tags:
  - JavaScript
  - beginners
  - booleans
group: JavaScript Struggles
part: 6
heroImage: "../js-truthy-falsy.webp"
---

# JavaScript Struggles - part 6 - truthy & falsy values

When we use most of programming languages or scripting languages we have some values that <u>isn't</u> a boolean valaue but it works as so.  
We mostly call it truthy & falsy values.

## Content table

- [Truthy values](#thruthy)
- [falsy](#falsy)

## Truthy Values <a name="#truthy"></a>

Personally I like to think of truthy values as a variable that have an actual value in it.

Sort of messy?
Think of it like that:

- A value that isn't empty is a valuable value, but when it's empty it's **not**.

Let's see some examples

###### We'll use the `!!` keyword to turn the value into boolean value t check what is the output.

---

### String

```js
console.log(!!"Hello"); // true

let text = "Hi there";
console.log(!!text); // true
```

---

### Number

```js
console.log(!!18); // true

let num = 88;
console.log(!!num);
```

---

### Other

Any object (`{}`) or Array (`[]`) are truthy values, <u>even if they were empty</u>!!
So be aware if you want to use an object or array for storing, you have to get the values inside of the array or object.

---

## Falsy Values

A falsy value is the opposite of the truthy values.

### String

```js
console.log(!!""); // false
```

---

### Number

```js
console.log(!!0); // false

console.log(!!NaN); // false
```

###### To know more about NaN check out the [article about numbers](https://dev.to/abdelrahman_dwedar/javascript-struggles-part-2-numbers-4f2l)

---

### Other

The `null` object is also falsy value.

```js
console.log(!!null); // false
```

---

## Use Cases

There's of cause some amazing use cases of knowing this, you can stop a process if the value wasn't a number like so, as if you turned a text into number it turn into `NaN` and it's a falsy value.

```js
if (inputValue) {
  ... // Actions
}
```
