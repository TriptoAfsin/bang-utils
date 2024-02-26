//examples
const dayjs = require("dayjs");
const bangUtils = require("../dist/index");

const {
  dateBang,
  numBang,
  monthBang,
  numToBanglaWords,
  dayBang,
  currencyToBang,
  timeBang,
} = bangUtils;

console.log("number: ", numBang()); //number: ২১
console.log("decimal number: ", numBang(21.21)); //decimal number: ২১.২১
console.log("to Bangla  words: ", numToBanglaWords(50.25)); //to Bangla  words: পঞ্চাশ দশমিক দুই পাঁচ

console.log("month: ", monthBang("2024-05-02")); //month: মে
console.log("day: ", dayBang("2024-02-26")); //day: সোমবার
console.log("date: ", dateBang("2-5-2024", ",", "D M, YYYY")); //date: ৫ ফেব্রুয়ারি, ২০২৪

console.log("detailed time: ", timeBang(new Date())); //দুপুর ৩ টা ৪৮ মিনিট
console.log("normal time: ", timeBang(new Date(), "normal")); // দুপুর ৩.৫০ মিনিট
console.log("short time: ", timeBang(new Date(), "short")); //৩.৫০ মিনিট

console.log("currency: ", currencyToBang()); //currency: ৫০ টাকা
console.log("currency: ", currencyToBang(125.58)); //currency: ১২৫ টাকা ৫৮ পয়সা
