---
title: JavaScript Struggles - Part 3 - String Auto Converting
description: Discussing the issue of JavaScript converting strings automatically to numbers in some cases.
pubDate: Nov 28, 2021
tags:
  - JavaScript
  - beginners
  - strings
  - converting
  - strings
group: JavaScript Struggles
part: 3
heroImage: "../js-string-converting.webp"
---

# JavaScript Struggles - Part 3 - String Auto Converting

One of the weirdest things that <abbr title="JavaScript">JS</abbr> do is converting string variable to numbers by itself.

## When does it convert string to number?

We have 4 operators that can turn the string to number **when the string value is numbers**:

- [Plus (+)](#plus)
- [Minus (-)](#minus)
- [Multiply (\*)](#multiply)
- [Divide (/)](#divide)

---

## Plus (+) <a name="plus"></a>

In ==JavaScript== the plus operator have **two** cases.

1. When you use the <kbd>+</kbd> with a `string` that **only have numbers** it'll be converted automatically to `number`.

```js
console.log("1" + "2"); // Outputs: 3
```

2. When you use the <kbd>+</kbd> with a `string` that **contains text**, it'll not be converted to number; it'll be added to the text.

```js
console.log("Hey" + "There"); // Outputs: HeyThere
```

---

## Minus (-) <a name="minus"></a>

Whenever we use <kbd>-</kbd> in our code the string automatically get converted to number.

E.g.

```js
console.log("5" - 1); // Outputs: 4
console.log("5" - "2"); // Outputs: 3
```

---

## Multiply (\*) <a name="multiply"></a>

Whenever we use <kbd>\*</kbd> in our code the string automatically get converted to number.

```js
console.log("5" * 3); // Outputs: 15
console.log("5" * "2"); // Outputs: 10
```

---

## Divide (/) <a name="divide"></a>

Whenever we use <kbd>/</kbd> in our code the string automatically get converted to number.

```js
console.log("6" / 2); // Outputs: 3
console.log("9" / "3"); // Outputs: 3
```
