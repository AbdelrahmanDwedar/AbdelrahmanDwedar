---
title: JavaScript Struggles - Part 5 - Data Types
description: Discussing the issue of data types in JavaScript
pubDate: Jun 29, 2022
tags:
  - JavaScript
  - beginners
  - data
  - types
group: JavaScript Struggles
part: 5
heroImage: "../js-data-types.webp"
---

# JavaScript Struggles - Part 5 - Data Types

We're now going to explain the data types of JavaScript, I'm only going to talk this time about the data types itself, ⚠️ **I'm not going to explain the (truthy & false) subject now** ⚠️.

**This's just a basic view of the data types of ==JavaScript==.**

---

## Data types:-

- [Undefined](#undefined)
- [Null](#null)
- [Number](#number)
- [String](#string)
- [NaN](#nan)

---

## Undefined

`undefined` is actually a **data type** in ==JavaScript==.
Even though that is weird, but you'll get used to it.

It's the **default** data type if you haven't assigned anything in the variable.

```js
var varName;

console.log(typeof varName); // outputs: undefined
```

---

## Null

Null is a data type that have to be assigned.
The best use of it is to find the [`undefined`](#undefined) variables.

> Also important to know that null is an `object` so whenever you want to check the data type of a variable that contains a `null` it'll return "object".

```js
var nullVariable = null;
var nothingHere;

console.log(nullVariable == nothingHere); // that will output true
```

But the confusing sometimes, but no worries I covered it already on a [previous post](https://dev.to/abdelrahman_dwedar/javascript-struggles-part-2-numbers-4f2l#null)

---

## Number

The data type `number` is so familiar for most developers, it have a number.

Simple right?

But sometimes JavaScript has to be JavaScript, and add some weird things around it.
It's considered **bad at math**, or to be more specific; it's actually _bad at float-points_.

**Which I'll cover in upcoming post, so ==stay tuned==.**

---

## Strings

`String` is actually so simple.

It's just like the string of any other language but with some characteristics.

There's 3 ways of using string in JavaScript:

- [Single quote](#Single quote) (`'`)
- [Double quote](#double) (`"`)
- [Back-ticks](#back-ticks) (\`)

### Single quote (`'`)

The single quotes is used just as the normal string.

```js
let stringVar = "Hello world!";
```

### Double quote `"string"` <a name="#double"></a>

This is the normal string itself!!
I think it doesn't need an explanation.

### Back-ticks (\`)

What is even back-ticks?
It's the string that uses \` instead of " or '

It's actually the best practice in my opinion for ==JavaScript== at it provides the formatted string feature with it as you use it, also enables using multiple lines (it doesn't apply on web as you need to use `<br />`).

```js
let furmattedString = `the answer is ${5 + 5}`;

console.log(furmattedString); // the answer is 10

let multilineString = `Hello there!
I'm Abdelrahman!`;
console.log(multilineString);
/*
Hello there!
I'm Abdelrahman!
*/
```

---

## NaN <a name="#nan"></a>

I've already explained `NaN` in [previous post](https://dev.to/abdelrahman_dwedar/javascript-struggles-part-2-numbers-4f2l#nan)
So let me be the lazy developer I am and not repeat that again :yawning_face:
