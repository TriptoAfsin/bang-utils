## bang-utils

<p align="center"><img src="https://raw.githubusercontent.com/TriptoAfsin/bang-utils/main/bang-utils-logo.png" width="256px" alt="Logo"></img></p>

**Made in 🇧🇩(Bangladesh) with 💖**

## Description

bang-utils is a lightweight utility library for converting English numerals and dates to Bengali in TypeScript/ JavaScript. It provides functions to convert numbers, dates, and months from English to Bengali script.

### Features -

1. Full TypeScript Support
1. English Number to Bangla Number(21.21 -> ২১.২১)
1. English Date to Bangla Date(2-5-2024 -> ৫ ফেব্রুয়ারি, ২০২৪)
1. English Time to Bangla Time (15:48 -> দুপুর ৩ টা ৪৮ মিনিট)
1. English Number to Bangla In Words(50.25 -> পঞ্চাশ দশমিক দুই পাঁচ)
1. Currency Number to Bangla Currency(125.58 -> ১২৫ টাকা ৫৮ পয়সা)

## Installation

You can install bang-utils via npm or yarn:

```bash
npm install bang-utils
```

or

```bash
yarn add bang-utils
```

## Usage

### Importing

You can import the functions from bang-utils using ES6 import syntax:

```javascript
import {
  numBang,
  dateBang,
  monthBang,
  numToBanglaWords,
  dayBang,
  currencyToBang,
  timeBang,
} from "bang-utils";
```

### Converting English Numerals to Bengali

```javascript
console.log("number: ", numBang(21)); // Output: number: ২১
console.log("decimal number: ", numBang(21.21)); // Output: decimal number: ২১.২১
```

### Converting Dates to Bengali

```javascript
console.log("month: ", monthBang("2024-05-02")); // Output: month: মে
console.log("day: ", dayBang("2024-02-26")); //day: সোমবার
console.log("date: ", dateBang("2-5-2024", ",", "D M, YYYY")); // Output: date: ৫ ফেব্রুয়ারি, ২০২৪
```

### Converting Numbers to Bengali Words

```javascript
console.log("to Bangla words: ", numToBanglaWords(50.25)); // Output: to Bangla words: পঞ্চাশ দশমিক দুই পাঁচ
```

### Converting Currency Numbers to Bengali Currency

```javascript
console.log("currency: ", currencyToBang(50)); //currency: ৫০ টাকা
console.log("currency: ", currencyToBang(125.58)); //currency: ১২৫ টাকা ৫৮ পয়সা
```

### Converting Date Time to Bengali Time

```javascript
console.log("detailed time: ", timeBang(new Date())); //দুপুর ৩ টা ৪৮ মিনিট
console.log("normal time: ", timeBang(new Date(), "normal")); // দুপুর ৩.৫০ মিনিট
console.log("short time: ", timeBang(new Date(), "short")); //৩.৫০ মিনিট
```

### Inspirations & Credits

The `numToBanglaWords()` was based on a open source project by [MAHMUDUL HASSAN](https://github.com/maruf571) named `number-to-bengali-words`

### Contributing

Contributions are welcome! Feel free to open issues or submit pull requests on the GitHub repository.

### License

This project is licensed under the GPL License - see the LICENSE file for details.
