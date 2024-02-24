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
  dateBang: () => dateBang_default,
  numBang: () => numBang_default
});
module.exports = __toCommonJS(src_exports);

// src/utils/dateBang.ts
var import_dayjs = __toESM(require("dayjs"));
var import_timezone = __toESM(require("dayjs/plugin/timezone"));
var import_utc = __toESM(require("dayjs/plugin/utc"));

// src/utils/numBang.ts
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
var numBang = (num = "09") => {
  try {
    const splitNums = num == null ? void 0 : num.toString().split("");
    if (!splitNums)
      throw new Error("Invalid input");
    const splitBnNums = [];
    for (let i = 0; i < splitNums.length; i++) {
      const bnNum = numMap[parseInt(splitNums[i])];
      if (bnNum) {
        splitBnNums.push(bnNum);
      } else {
        throw new Error("Invalid number");
      }
    }
    return splitBnNums.join("");
  } catch (error) {
    console.error("Error converting number to Bangla:", error);
    return "";
  }
};
var numBang_default = numBang;

// src/utils/dateBang.ts
import_dayjs.default.extend(import_utc.default);
import_dayjs.default.extend(import_timezone.default);
var dateBang = (engDate = "2023-07-03", separator = "/") => {
  try {
    if ((0, import_dayjs.default)(engDate).isValid()) {
      const engYear = (0, import_dayjs.default)(engDate).get("year");
      const engMonth = (0, import_dayjs.default)(engDate).get("month");
      const engDay = (0, import_dayjs.default)(engDate).tz("Asia/Dhaka").get("date");
      const bdDate = `${numBang_default(
        String(parseInt(engDay))
      )}${separator}${numBang_default(
        String(parseInt(engMonth) + 1)
      )}${separator}${numBang_default(String(engYear))}`;
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  dateBang,
  numBang
});
//# sourceMappingURL=index.js.map