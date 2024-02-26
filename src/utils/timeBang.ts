import dayjs from "dayjs";

const numMap: { [key: number]: string } = {
  0: "০",
  1: "১",
  2: "২",
  3: "৩",
  4: "৪",
  5: "৫",
  6: "৬",
  7: "৭",
  8: "৮",
  9: "৯",
};

const getShokalBikal = (num: number) => {
  const mapping: { [key: number]: string } = {
    0: "দিবাগত রাত",
    1: "দিবাগত রাত",
    2: "দিবাগত রাত",
    3: "দিবাগত রাত",
    4: "ভোর",
    5: "ভোর",
    6: "সকাল",
    7: "সকাল",
    8: "সকাল",
    9: "সকাল",
    10: "সকাল",
    11: "সকাল",
    12: "দুপুর",
    13: "দুপুর",
    14: "দুপুর",
    15: "দুপুর",
    16: "বিকেল",
    17: "বিকেল",
    18: "সন্ধ্যা",
    19: "সন্ধ্যা",
    20: "রাত",
    21: "রাত",
    22: "রাত",
    23: "রাত",
    24: "রাত",
  };
  return mapping[num];
};

type TimeFormat = "detailed" | "short" | "normal";

const timeBang = (
  date: string = new Date().toString(),
  format: TimeFormat = "detailed"
): string => {
  const hour =
    dayjs(date).get("hour") > 12
      ? dayjs(date).get("hour") - 12
      : dayjs(date).get("hour") === 0
      ? 12
      : dayjs(date).get("hour");
  const minute = dayjs(date).get("minute");
  const num = `${hour}.${minute}`;
  try {
    const splitNums: string[] | undefined = num?.toString().split(".");
    if (!splitNums) throw new Error("Invalid input");

    const integerPart = splitNums[0].split("");
    const decimalPart = splitNums[1] ? splitNums[1].split("") : [];

    const integerBnNums: string[] = [];
    for (let i = 0; i < integerPart.length; i++) {
      const bnNum = numMap[parseInt(integerPart[i])];
      if (bnNum) {
        integerBnNums.push(bnNum);
      } else {
        throw new Error("Invalid number");
      }
    }

    let decimalBnNums: string = "";
    for (let i = 0; i < decimalPart.length; i++) {
      const bnNum = numMap[parseInt(decimalPart[i])];
      if (bnNum) {
        decimalBnNums += bnNum;
      } else {
        throw new Error("Invalid time");
      }
    }

    const formatWiseRes = {
      detailed:
        `${getShokalBikal(dayjs(date).get("hour"))} ` +
        integerBnNums.join("") +
        " টা" +
        (decimalBnNums ? ` ${decimalBnNums} মিনিট` : " "),
      normal:
        `${getShokalBikal(dayjs(date).get("hour"))} ` +
        integerBnNums.join("") +
        "." +
        (decimalBnNums ? `${decimalBnNums} মিনিট` : "০০ "),
      short:
        integerBnNums.join("") +
        "." +
        (decimalBnNums ? `${decimalBnNums} মিনিট` : "০০ "),
    };

    const result = formatWiseRes[format];
    return result;
  } catch (error) {
    console.error("Error converting time to Bangla:", error);
    return "";
  }
};

export default timeBang;
