// src/utils/dateBang.ts
import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";

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
dayjs.extend(utc);
dayjs.extend(timezone);
var dateBang = (engDate = "2023-07-03", separator = "/") => {
  try {
    if (dayjs(engDate).isValid()) {
      const engYear = dayjs(engDate).get("year");
      const engMonth = dayjs(engDate).get("month");
      const engDay = dayjs(engDate).tz("Asia/Dhaka").get("date");
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
export {
  dateBang_default as dateBang,
  numBang_default as numBang
};
//# sourceMappingURL=index.mjs.map