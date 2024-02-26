"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  currencyToBang: () => currencyToBang_default,
  dateBang: () => dateBang_default,
  dayBang: () => dayBang_default,
  monthBang: () => monthBang_default,
  numBang: () => numBang_default,
  numToBanglaWords: () => numToBanglaWords_default,
  timeBang: () => timeBang_default
});
module.exports = __toCommonJS(src_exports);

// src/utils/currencyToBang.ts
var numMap = {
  0: "\u09E6",
  1: "\u09E7",
  2: "\u09E8",
  3: "\u09E9",
  4: "\u09EA",
  5: "\u09EB",
  6: "\u09EC",
  7: "\u09ED",
  8: "\u09EE",
  9: "\u09EF"
};
var currencyToBang = (num = "09") => {
  try {
    const splitNums = num == null ? void 0 : num.toString().split(".");
    if (!splitNums)
      throw new Error("Invalid input");
    const integerPart = splitNums[0].split("");
    const decimalPart = splitNums[1] ? splitNums[1].split("") : [];
    const integerBnNums = [];
    for (let i = 0; i < integerPart.length; i++) {
      const bnNum = numMap[parseInt(integerPart[i])];
      if (bnNum) {
        integerBnNums.push(bnNum);
      } else {
        throw new Error("Invalid number");
      }
    }
    let decimalBnNums = "";
    for (let i = 0; i < decimalPart.length; i++) {
      const bnNum = numMap[parseInt(decimalPart[i])];
      if (bnNum) {
        decimalBnNums += bnNum;
      } else {
        throw new Error("Invalid number");
      }
    }
    const result = integerBnNums.join("") + " \u099F\u09BE\u0995\u09BE" + (decimalBnNums ? ` ${decimalBnNums} \u09AA\u09DF\u09B8\u09BE` : " ");
    return result;
  } catch (error) {
    console.error("Error converting currency to Bangla:", error);
    return "";
  }
};
var currencyToBang_default = currencyToBang;

// src/utils/dateBang.ts
var import_dayjs2 = __toESM(require("dayjs"));
var import_timezone = __toESM(require("dayjs/plugin/timezone"));
var import_utc = __toESM(require("dayjs/plugin/utc"));

// src/utils/monthBang.ts
var import_dayjs = __toESM(require("dayjs"));
var numMonthMap = {
  1: "\u099C\u09BE\u09A8\u09C1\u09DF\u09BE\u09B0\u09BF",
  2: "\u09AB\u09C7\u09AC\u09CD\u09B0\u09C1\u09DF\u09BE\u09B0\u09BF",
  3: "\u09AE\u09BE\u09B0\u09CD\u099A",
  4: "\u098F\u09AA\u09CD\u09B0\u09BF\u09B2",
  5: "\u09AE\u09C7",
  6: "\u099C\u09C1\u09A8",
  7: "\u099C\u09C1\u09B2\u09BE\u0987",
  8: "\u0985\u0997\u09BE\u09B8\u09CD\u099F",
  9: "\u09B8\u09C7\u09AA\u09CD\u099F\u09C7\u09AE\u09CD\u09AC\u09B0",
  10: "\u0985\u0995\u09CD\u099F\u09C7\u09BE\u09AC\u09B0",
  11: "\u09A8\u09AD\u09C7\u09AE\u09CD\u09AC\u09B0",
  12: "\u09A1\u09BF\u09B8\u09C7\u09AE\u09CD\u09AC\u09B0"
};
var monthBang = (date = "9") => {
  const monthNum = (0, import_dayjs.default)(date).get("month") + 1;
  try {
    const splitMonthNums = monthNum == null ? void 0 : monthNum.toString().split("");
    if (!splitMonthNums)
      throw new Error("Invalid input");
    const splitBnMonths = [];
    for (let i = 0; i < splitMonthNums.length; i++) {
      const bnMonth = numMonthMap[parseInt(splitMonthNums[i])];
      if (bnMonth) {
        splitBnMonths.push(bnMonth);
      } else {
        throw new Error("Invalid number");
      }
    }
    return splitBnMonths.join("");
  } catch (error) {
    console.error("Error converting month to Bangla:", error);
    return "";
  }
};
var monthBang_default = monthBang;

// src/utils/numBang.ts
var numMap2 = {
  0: "\u09E6",
  1: "\u09E7",
  2: "\u09E8",
  3: "\u09E9",
  4: "\u09EA",
  5: "\u09EB",
  6: "\u09EC",
  7: "\u09ED",
  8: "\u09EE",
  9: "\u09EF"
};
var numberParser = (num = "09") => {
  try {
    const splitNums = num == null ? void 0 : num.toString().split(".");
    if (!splitNums)
      throw new Error("Invalid input");
    const integerPart = splitNums[0].split("");
    const decimalPart = splitNums[1] ? splitNums[1].split("") : [];
    const integerBnNums = [];
    for (let i = 0; i < integerPart.length; i++) {
      const bnNum = numMap2[parseInt(integerPart[i])];
      if (bnNum) {
        integerBnNums.push(bnNum);
      } else {
        throw new Error("Invalid number");
      }
    }
    let decimalBnNums = "";
    for (let i = 0; i < decimalPart.length; i++) {
      const bnNum = numMap2[parseInt(decimalPart[i])];
      if (bnNum) {
        decimalBnNums += bnNum;
      } else {
        throw new Error("Invalid number");
      }
    }
    const result = integerBnNums.join("") + (decimalBnNums ? "." + decimalBnNums : "");
    return result;
  } catch (error) {
    console.error("Error converting number to Bangla:", error);
    return "";
  }
};
var numBang = (num = "09") => {
  var _a, _b;
  if (!((_a = num == null ? void 0 : num.toString()) == null ? void 0 : _a.includes("-"))) {
    return numberParser(num);
  } else {
    let posNum = (_b = num == null ? void 0 : num.toString()) == null ? void 0 : _b.replace("-", "");
    return `- ${numberParser(posNum)}`;
  }
};
var numBang_default = numBang;

// src/utils/dateBang.ts
import_dayjs2.default.extend(import_utc.default);
import_dayjs2.default.extend(import_timezone.default);
var getFormatted = (format, separator, date) => {
  const year = (0, import_dayjs2.default)(date).get("year");
  const sYear = (0, import_dayjs2.default)(date).get("y");
  const month = (0, import_dayjs2.default)(date).get("month");
  const day = (0, import_dayjs2.default)(date).tz("Asia/Dhaka").get("date");
  const mapping = {
    "D/M/YY": `${numBang_default(String(parseInt(day)))}${separator}${numBang_default(
      String(parseInt(month) + 1)
    )}${separator}${numBang_default(String(sYear).slice(-2))}`,
    "D/M/YYYY": `${numBang_default(String(parseInt(day)))}${separator}${numBang_default(
      String(parseInt(month) + 1)
    )}${separator}${numBang_default(String(year))}`,
    "M/D/YY": `${numBang_default(String(parseInt(month) + 1))}${separator}${numBang_default(
      String(parseInt(day))
    )}${separator}${numBang_default(String(sYear).slice(-2))}`,
    "M/D/YYYY": `${numBang_default(String(parseInt(month) + 1))}${separator}${numBang_default(
      String(parseInt(day))
    )}${separator}${numBang_default(String(year))}`,
    "D M, YYYY": `${numBang_default(String(parseInt(day)))} ${monthBang_default(
      date
    )}${separator}${numBang_default(String(year))}`,
    "D M, YY": `${numBang_default(String(parseInt(day)))} ${monthBang_default(
      date
    )}${separator}${numBang_default(String(year).slice(-2))}`
  };
  return mapping[format];
};
var dateBang = (engDate = "2023-07-03", separator = "/", format = "D/M/YY") => {
  try {
    if ((0, import_dayjs2.default)(engDate).isValid()) {
      const bdDate = getFormatted(format, separator, engDate);
      return bdDate;
    } else {
      console.error("Invalid date");
      return;
    }
  } catch (error) {
    console.error("Error converting date to Bangla:", error);
    return;
  }
};
var dateBang_default = dateBang;

// src/utils/dayBang.ts
var import_dayjs3 = __toESM(require("dayjs"));
var numDayMap = {
  0: `\u09B0\u09AC\u09BF\u09AC\u09BE\u09B0 `,
  1: `\u09B8\u09C7\u09BE\u09AE\u09AC\u09BE\u09B0`,
  2: `\u09AE\u0999\u09CD\u0997\u09B2\u09AC\u09BE\u09B0`,
  3: "\u09AC\u09C1\u09A7\u09AC\u09BE\u09B0",
  4: "\u09AC\u09C3\u09B9\u09B8\u09CD\u09AA\u09A4\u09BF\u09AC\u09BE\u09B0",
  5: "\u09B6\u09C1\u0995\u09CD\u09B0\u09AC\u09BE\u09B0",
  6: "\u09B6\u09A8\u09BF\u09AC\u09BE\u09B0"
};
var dayBang = (date = "1") => {
  const dayNum = (0, import_dayjs3.default)(date).get("day");
  try {
    const splitDayNums = dayNum == null ? void 0 : dayNum.toString().split("");
    if (!splitDayNums)
      throw new Error("Invalid input");
    const splitBnDays = [];
    for (let i = 0; i < splitDayNums.length; i++) {
      const bnDay = numDayMap[parseInt(splitDayNums[i])];
      if (bnDay) {
        splitBnDays.push(bnDay);
      } else {
        throw new Error("Invalid number");
      }
    }
    return splitBnDays.join("");
  } catch (error) {
    console.error("Error converting day to Bangla:", error);
    return "";
  }
};
var dayBang_default = dayBang;

// src/utils/numToBanglaWords.ts
var NEGATIVE = "\u098B\u09A3\u09BE\u09A4\u09CD\u09AE\u0995";
var DECIMAL = " \u09A6\u09B6\u09AE\u09BF\u0995";
var ONE_HUNDRED = 100;
var ONE_THOUSAND = 1e3;
var ONE_LAC = 1e5;
var ONE_CORE = 1e7;
var ONE_BILLION = 1e9;
var ONE_TRILLION = 1e12;
var ONE_QUADRILLION = 1e15;
var MAX = 9007199254740992;
var MAX_SAFE_INTEGER = 9007199254740991;
var number2WordMap = {
  0: `\u09B6\u09C2\u09A8\u09CD\u09AF`,
  1: `\u098F\u0995`,
  2: `\u09A6\u09C1\u0987`,
  3: `\u09A4\u09BF\u09A8`,
  4: `\u099A\u09BE\u09B0`,
  5: `\u09AA\u09BE\u0981\u099A`,
  6: `\u099B\u09AF\u09BC`,
  7: `\u09B8\u09BE\u09A4`,
  8: `\u0986\u099F`,
  9: `\u09A8\u09AF\u09BC`,
  10: `\u09A6\u09B6`,
  11: `\u098F\u0997\u09BE\u09B0\u09CB`,
  12: `\u09AC\u09BE\u09B0\u09CB`,
  13: `\u09A4\u09C7\u09B0\u09CB`,
  14: `\u099A\u09CC\u09A6\u09CD\u09A6`,
  15: `\u09AA\u09A8\u09C7\u09B0`,
  16: `\u09B7\u09CB\u09B2`,
  17: `\u09B8\u09A4\u09C7\u09B0`,
  18: `\u0986\u09A0\u09BE\u09B0`,
  19: `\u0989\u09A8\u09BF\u09B6`,
  20: `\u09AC\u09BF\u09B6`,
  21: `\u098F\u0995\u09C1\u09B6`,
  22: `\u09AC\u09BE\u0987\u09B6`,
  23: `\u09A4\u09C7\u0987\u09B6`,
  24: `\u099A\u09AC\u09CD\u09AC\u09BF\u09B6`,
  25: `\u09AA\u0981\u099A\u09BF\u09B6`,
  26: `\u099B\u09BE\u09AC\u09CD\u09AC\u09BF\u09B6`,
  27: `\u09B8\u09BE\u09A4\u09BE\u09B6`,
  28: `\u0986\u099F\u09BE\u09B6`,
  29: `\u098A\u09A8\u09A4\u09CD\u09B0\u09BF\u09B6`,
  30: `\u09A4\u09CD\u09B0\u09BF\u09B6`,
  31: `\u098F\u0995\u09A4\u09CD\u09B0\u09BF\u09B6`,
  32: `\u09AC\u09A4\u09CD\u09B0\u09BF\u09B6`,
  33: `\u09A4\u09C7\u09A4\u09CD\u09B0\u09BF\u09B6`,
  34: `\u099A\u09CC\u09A4\u09CD\u09B0\u09BF\u09B6`,
  35: `\u09AA\u0981\u09AF\u09BC\u09A4\u09CD\u09B0\u09BF\u09B6`,
  36: `\u099B\u09A4\u09CD\u09B0\u09BF\u09B6`,
  37: `\u09B8\u09BE\u0981\u0987\u09A4\u09CD\u09B0\u09BF\u09B6`,
  38: `\u0986\u099F\u09A4\u09CD\u09B0\u09BF\u09B6`,
  39: `\u098A\u09A8\u099A\u09B2\u09CD\u09B2\u09BF\u09B6`,
  40: `\u099A\u09B2\u09CD\u09B2\u09BF\u09B6`,
  41: `\u098F\u0995\u099A\u09B2\u09CD\u09B2\u09BF\u09B6`,
  42: `\u09AC\u09BF\u09AF\u09BC\u09BE\u09B2\u09CD\u09B2\u09BF\u09B6`,
  43: `\u09A4\u09C7\u09A4\u09BE\u09B2\u09CD\u09B2\u09BF\u09B6`,
  44: `\u099A\u09C1\u09AF\u09BC\u09BE\u09B2\u09CD\u09B2\u09BF\u09B6`,
  45: `\u09AA\u0981\u09AF\u09BC\u09A4\u09BE\u09B2\u09CD\u09B2\u09BF\u09B6`,
  46: `\u099B\u09BF\u099A\u09B2\u09CD\u09B2\u09BF\u09B6`,
  47: `\u09B8\u09BE\u09A4\u099A\u09B2\u09CD\u09B2\u09BF\u09B6`,
  48: `\u0986\u099F\u099A\u09B2\u09CD\u09B2\u09BF\u09B6`,
  49: `\u098A\u09A8\u09AA\u099E\u09CD\u099A\u09BE\u09B6`,
  50: `\u09AA\u099E\u09CD\u099A\u09BE\u09B6`,
  51: `\u098F\u0995\u09BE\u09A8\u09CD\u09A8`,
  52: `\u09AC\u09BE\u09B9\u09BE\u09A8\u09CD\u09A8`,
  53: `\u09A4\u09C7\u09AA\u09CD\u09AA\u09BE\u09A8\u09CD\u09A8`,
  54: `\u099A\u09C1\u09AF\u09BC\u09BE\u09A8\u09CD\u09A8`,
  55: `\u09AA\u099E\u09CD\u099A\u09BE\u09A8\u09CD\u09A8`,
  56: `\u099B\u09BE\u09AA\u09CD\u09AA\u09BE\u09A8\u09CD\u09A8`,
  57: `\u09B8\u09BE\u09A4\u09BE\u09A8\u09CD\u09A8`,
  58: `\u0986\u099F\u09BE\u09A8\u09CD\u09A8`,
  59: `\u098A\u09A8\u09B7\u09BE\u099F`,
  60: `\u09B7\u09BE\u099F`,
  61: `\u098F\u0995\u09B7\u099F\u09CD\u099F\u09BF`,
  62: `\u09AC\u09BE\u09B7\u099F\u09CD\u099F\u09BF`,
  63: `\u09A4\u09C7\u09B7\u099F\u09CD\u099F\u09BF`,
  64: `\u099A\u09CC\u09B7\u099F\u09CD\u099F\u09BF`,
  65: `\u09AA\u0981\u09AF\u09BC\u09B7\u099F\u09CD\u099F\u09BF`,
  66: `\u099B\u09C7\u09B7\u099F\u09CD\u099F\u09BF`,
  67: `\u09B8\u09BE\u09A4\u09B7\u099F\u09CD\u099F\u09BF`,
  68: `\u0986\u099F\u09B7\u099F\u09CD\u099F\u09BF`,
  69: `\u0989\u09A8\u09B8\u09A4\u09CD\u09A4\u09C1\u09B0`,
  70: `\u09B8\u09A4\u09CD\u09A4\u09B0`,
  71: `\u098F\u0995\u09BE\u09A4\u09CD\u09A4\u09B0`,
  72: `\u09AC\u09BE\u09B9\u09BE\u09A4\u09CD\u09A4\u09B0`,
  73: `\u09A4\u09C7\u09B9\u09BE\u09A4\u09CD\u09A4\u09C1\u09B0`,
  74: `\u099A\u09C1\u09AF\u09BC\u09BE\u09A4\u09CD\u09A4\u09B0`,
  75: `\u09AA\u0981\u099A\u09BE\u09A4\u09CD\u09A4\u09B0`,
  76: `\u099B\u09BF\u09AF\u09BC\u09BE\u09A4\u09CD\u09A4\u09B0`,
  77: `\u09B8\u09BE\u09A4\u09BE\u09A4\u09CD\u09A4\u09B0`,
  78: `\u0986\u099F\u09BE\u09A4\u09CD\u09A4\u09B0`,
  79: `\u098A\u09A8\u0986\u09B6\u09BF`,
  80: `\u0986\u09B6\u09BF`,
  81: `\u098F\u0995\u09BE\u09B6\u09BF`,
  82: `\u09AC\u09BF\u09B0\u09BE\u09B6\u09BF`,
  83: `\u09A4\u09BF\u09B0\u09BE\u09B6\u09BF`,
  84: `\u099A\u09C1\u09B0\u09BE\u09B6\u09BF`,
  85: `\u09AA\u0981\u099A\u09BE\u09B6\u09BF`,
  86: `\u099B\u09BF\u09AF\u09BC\u09BE\u09B6\u09BF`,
  87: `\u09B8\u09BE\u09A4\u09BE\u09B6\u09BF`,
  88: `\u0986\u099F\u09BE\u09B6\u09BF`,
  89: `\u0989\u09A8\u09A8\u09AC\u09CD\u09AC\u0987`,
  90: `\u09A8\u09AC\u09CD\u09AC\u0987`,
  91: `\u098F\u0995\u09BE\u09A8\u09AC\u09CD\u09AC\u0987`,
  92: `\u09AC\u09BF\u09B0\u09BE\u09A8\u09AC\u09CD\u09AC\u0987`,
  93: `\u09A4\u09BF\u09B0\u09BE\u09A8\u09AC\u09CD\u09AC\u0987`,
  94: `\u099A\u09C1\u09B0\u09BE\u09A8\u09AC\u09CD\u09AC\u0987`,
  95: `\u09AA\u0981\u099A\u09BE\u09A8\u09AC\u09CD\u09AC\u0987`,
  96: `\u099B\u09BF\u09AF\u09BC\u09BE\u09A8\u09AC\u09CD\u09AC\u0987`,
  97: `\u09B8\u09BE\u09A4\u09BE\u09A8\u09AC\u09CD\u09AC\u0987`,
  98: `\u0986\u099F\u09BE\u09A8\u09AC\u09CD\u09AC\u0987`,
  99: `\u09A8\u09BF\u09B0\u09BE\u09A8\u09AC\u09CD\u09AC\u0987`,
  100: `\u09B6\u09A4`,
  1e3: `\u09B9\u09BE\u099C\u09BE\u09B0`,
  1e5: `\u09B2\u0995\u09CD\u09B7`,
  1e7: `\u0995\u09CB\u099F\u09BF`,
  1e9: `\u09AC\u09BF\u09B2\u09BF\u09DF\u09A8`,
  1e12: `\u099F\u09CD\u09B0\u09BF\u09B2\u09BF\u09DF\u09A8`,
  1e15: `\u0995\u09CB\u09DF\u09BE\u09A1\u09CD\u09B0\u09BF\u09B2\u09BF\u09DF\u09A8`
};
var numToBanglaWords = (number) => {
  try {
    let words;
    if (!isValidNumber(number)) {
      throw new TypeError(
        "Not a finite number: " + number + " (" + typeof number + ")"
      );
    }
    if (!isSafeNumber(number)) {
      throw new RangeError(
        "Input is not a safe number, it\u2019s either too large or too small."
      );
    }
    const num = parseInt(number.toString(), 10);
    words = generateWords(num);
    if (!isInt(number)) {
      const points = number.toString().split(`.`)[1];
      words += DECIMAL;
      for (let i = 0; i < points.length; i++) {
        words += " " + number2WordMap[parseInt(points[i], 10)];
      }
    }
    return words;
  } catch (e) {
    return number.toString();
  }
};
function generateWords(number, ...args) {
  let remainder = 0, word = "", words = args[0];
  if (number === 0) {
    return !words ? number2WordMap[0] : words.join(" ").replace(/,$/, "");
  }
  if (!words) {
    words = [];
  }
  if (number < 0) {
    words.push(NEGATIVE);
    number = Math.abs(number);
  }
  if (number < ONE_HUNDRED) {
    remainder = 0;
    word = number2WordMap[number];
  } else if (number < ONE_THOUSAND) {
    remainder = number % ONE_HUNDRED;
    word = number2WordMap[Math.floor(number / ONE_HUNDRED)] + number2WordMap[ONE_HUNDRED];
  } else if (number < ONE_LAC) {
    remainder = number % ONE_THOUSAND;
    word = number2WordMap[Math.floor(number / ONE_THOUSAND)] + " " + number2WordMap[ONE_THOUSAND];
  } else if (number < ONE_CORE) {
    remainder = number % ONE_LAC;
    word = number2WordMap[Math.floor(number / ONE_LAC)] + " " + number2WordMap[ONE_LAC];
  } else if (number < ONE_BILLION) {
    remainder = number % ONE_CORE;
    word = generateWords(Math.floor(number / ONE_CORE)) + " " + number2WordMap[ONE_CORE];
  } else if (number < ONE_TRILLION) {
    remainder = number % ONE_BILLION;
    word = generateWords(Math.floor(number / ONE_BILLION)) + " " + number2WordMap[ONE_BILLION];
  } else if (number < ONE_QUADRILLION) {
    remainder = number % ONE_TRILLION;
    word = generateWords(Math.floor(number / ONE_TRILLION)) + " " + number2WordMap[ONE_TRILLION];
  } else if (number <= MAX) {
    remainder = number % ONE_QUADRILLION;
    word = generateWords(Math.floor(number / ONE_QUADRILLION)) + " " + number2WordMap[ONE_QUADRILLION];
  }
  words.push(word);
  return generateWords(remainder, ...[words]);
}
function isValidNumber(value) {
  return !(typeof value !== "number" || Number.isNaN(value) || value === Infinity || value === -Infinity);
}
function isSafeNumber(value) {
  return typeof value === "number" && Math.abs(value) <= MAX_SAFE_INTEGER;
}
function isInt(n) {
  return n % 1 === 0;
}
var numToBanglaWords_default = numToBanglaWords;

// src/utils/timeBang.ts
var import_dayjs4 = __toESM(require("dayjs"));
var numMap3 = {
  0: "\u09E6",
  1: "\u09E7",
  2: "\u09E8",
  3: "\u09E9",
  4: "\u09EA",
  5: "\u09EB",
  6: "\u09EC",
  7: "\u09ED",
  8: "\u09EE",
  9: "\u09EF"
};
var getShokalBikal = (num) => {
  const mapping = {
    0: "\u09A6\u09BF\u09AC\u09BE\u0997\u09A4 \u09B0\u09BE\u09A4",
    1: "\u09A6\u09BF\u09AC\u09BE\u0997\u09A4 \u09B0\u09BE\u09A4",
    2: "\u09A6\u09BF\u09AC\u09BE\u0997\u09A4 \u09B0\u09BE\u09A4",
    3: "\u09A6\u09BF\u09AC\u09BE\u0997\u09A4 \u09B0\u09BE\u09A4",
    4: "\u09AD\u09CB\u09B0",
    5: "\u09AD\u09CB\u09B0",
    6: "\u09B8\u0995\u09BE\u09B2",
    7: "\u09B8\u0995\u09BE\u09B2",
    8: "\u09B8\u0995\u09BE\u09B2",
    9: "\u09B8\u0995\u09BE\u09B2",
    10: "\u09B8\u0995\u09BE\u09B2",
    11: "\u09B8\u0995\u09BE\u09B2",
    12: "\u09A6\u09C1\u09AA\u09C1\u09B0",
    13: "\u09A6\u09C1\u09AA\u09C1\u09B0",
    14: "\u09A6\u09C1\u09AA\u09C1\u09B0",
    15: "\u09A6\u09C1\u09AA\u09C1\u09B0",
    16: "\u09AC\u09BF\u0995\u09C7\u09B2",
    17: "\u09AC\u09BF\u0995\u09C7\u09B2",
    18: "\u09B8\u09A8\u09CD\u09A7\u09CD\u09AF\u09BE",
    19: "\u09B8\u09A8\u09CD\u09A7\u09CD\u09AF\u09BE",
    20: "\u09B0\u09BE\u09A4",
    21: "\u09B0\u09BE\u09A4",
    22: "\u09B0\u09BE\u09A4",
    23: "\u09B0\u09BE\u09A4",
    24: "\u09B0\u09BE\u09A4"
  };
  return mapping[num];
};
var timeBang = (date = "2024-02-26T09:23:05.589Z", format = "detailed") => {
  const hour = (0, import_dayjs4.default)(date).get("hour") > 12 ? (0, import_dayjs4.default)(date).get("hour") - 12 : (0, import_dayjs4.default)(date).get("hour") === 0 ? 12 : (0, import_dayjs4.default)(date).get("hour");
  const minute = (0, import_dayjs4.default)(date).get("minute");
  const num = `${hour}.${minute}`;
  try {
    const splitNums = num == null ? void 0 : num.toString().split(".");
    if (!splitNums)
      throw new Error("Invalid input");
    const integerPart = splitNums[0].split("");
    const decimalPart = splitNums[1] ? splitNums[1].split("") : [];
    const integerBnNums = [];
    for (let i = 0; i < integerPart.length; i++) {
      const bnNum = numMap3[parseInt(integerPart[i])];
      if (bnNum) {
        integerBnNums.push(bnNum);
      } else {
        throw new Error("Invalid number");
      }
    }
    let decimalBnNums = "";
    for (let i = 0; i < decimalPart.length; i++) {
      const bnNum = numMap3[parseInt(decimalPart[i])];
      if (bnNum) {
        decimalBnNums += bnNum;
      } else {
        throw new Error("Invalid number");
      }
    }
    const formatWiseRes = {
      detailed: `${getShokalBikal((0, import_dayjs4.default)(date).get("hour"))} ` + integerBnNums.join("") + " \u099F\u09BE" + (decimalBnNums ? ` ${decimalBnNums} \u09AE\u09BF\u09A8\u09BF\u099F` : " "),
      normal: `${getShokalBikal((0, import_dayjs4.default)(date).get("hour"))} ` + integerBnNums.join("") + "." + (decimalBnNums ? `${decimalBnNums} \u09AE\u09BF\u09A8\u09BF\u099F` : "\u09E6\u09E6 "),
      short: integerBnNums.join("") + "." + (decimalBnNums ? `${decimalBnNums} \u09AE\u09BF\u09A8\u09BF\u099F` : "\u09E6\u09E6 ")
    };
    const result = formatWiseRes[format];
    return result;
  } catch (error) {
    console.error("Error converting time to Bangla:", error);
    return "";
  }
};
var timeBang_default = timeBang;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  currencyToBang,
  dateBang,
  dayBang,
  monthBang,
  numBang,
  numToBanglaWords,
  timeBang
});
//# sourceMappingURL=index.js.map