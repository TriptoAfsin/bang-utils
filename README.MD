## bang-utils

## Description

bang-utils is a lightweight utility library for converting English numerals and dates to Bengali in TypeScript/ JavaScript. It provides functions to convert numbers, dates, and months from English to Bengali script.

### Features -

1. Full TypeScript Support
1. English Number to Bangla Number(21.21 -> ২১.২১)
1. English Date to Bangla Date(2-5-2024 -> ৫ ফেব্রুয়ারি, ২০২৪)
1. English Number to Bangla In Words(50.25 -> পঞ্চাশ দশমিক দুই পাঁচ)

## Installation

You can install bang-utils via npm or yarn:

```bash
npm install bang-util
```

## Usage

### Importing

You can import the functions from bang-utils using ES6 import syntax:

```javascript
import { numBang, dateBang, monthBang, numToBanglaWords } from "bang-utils";
```

### Converting English Numerals to Bengali

```javascript
console.log("number: ", numBang(21)); // Output: number: ২১
console.log("decimal number: ", numBang(21.21)); // Output: decimal number: ২১.২১
```

### Converting Dates to Bengali

```javascript
console.log("month: ", monthBang("2024-05-02")); // Output: month: মে
console.log("date: ", dateBang("2-5-2024", ",", "D M, YYYY")); // Output: date: ৫ ফেব্রুয়ারি, ২০২৪
```

### Converting Numbers to Bengali Words

```javascript
console.log("to Bangla words: ", numToBanglaWords(50.25)); // Output: to Bangla words: পঞ্চাশ দশমিক দুই পাঁচ
```

### Inspirations & Credits

The `numToBanglaWords()` was based on a open source project by [MAHMUDUL HASSAN](https://github.com/maruf571) named `number-to-bengali-words`

### Contributing

Contributions are welcome! Feel free to open issues or submit pull requests on the GitHub repository.

### License

This project is licensed under the GPL License - see the LICENSE file for details.
