---
title: JavaScript Struggles - Part 4 - Comparing
description: Discussing the issue of comparision in JavaScript
pubDate: Nov 28, 2021
tags:
  - JavaScript
  - beginners
  - conditions
  - comparing
group: JavaScript Struggles
part: 4
heroImage: "../js-comparing.webp"
---

# JavaScript Struggles - Part 4 - Comparing

This one is very easy but we all have to know it, you may already heard about it somewhere else too.
If you weren't familiar with JavaScript's comparing way keep going. If you're then this post is not for you.

---

There's two ways of comparing variables in ==JavaScript==:

- [Equality](#equality) (`==`)
- [Strict Equality](#strict) (`===`)

---

### Equality (`==`)

Most majority of programming languages uses `==` as the one and only comparing operator, but in ==JavaScript== we're special.

`==` is only comparing the value of the variable, ignoring the data type of it; so if there's a number that is equal to a number **inside the string** it'll always be true.

E.g.

```js
console.log("0" == 0); // Outputs: true

console.log(1 == true); // Outputs: true
```

**The data type of the variable will not be changed after the comparison**

We can use it to check if the number is not `0` or an empty string.

```js
let num = 0;
let word = "";

console.log(num == true); // Outputs: false
console.log(word == true); // Outputs: false

num = 5;
word = "Hey!";

console.log(num == true); // Outputs: true
console.log(word == true); // Outputs: true
```

---

### Strict Equality (`===`)

We use this as the normal comparing operator, that's only working with **JavaScript**, **TypeScript**, **PHP**.

What `===` actually does is that it compares the value **and the data type**.

E.g.

```js
console.log("0" === 0); // Outputs: false

/* They must be of the same data type. */
console.log("0" === "0"); // Outputs: true
```

`===` is the most used one. Probably because it's the easy way of conparing and we all understand it even if JavaScript wasn't your first language.
