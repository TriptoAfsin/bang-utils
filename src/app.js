//examples

const bangUtils = require("../dist/index");

const { dateBang, numBang, monthBang, numToBanglaWords } = bangUtils;

console.log("number: ", numBang(21)); //number: ২১
console.log("decimal number: ", numBang(21.21)); //decimal number: ২১.২১

console.log("month: ", monthBang("2024-05-02")); //month: মে

console.log("date: ", dateBang("2-5-2024", ",", "D M, YYYY")); //date: ৫ ফেব্রুয়ারি, ২০২৪
console.log("to Bangla  words: ", numToBanglaWords(50.25)); //to Bangla  words: পঞ্চাশ দশমিক দুই পাঁচ
