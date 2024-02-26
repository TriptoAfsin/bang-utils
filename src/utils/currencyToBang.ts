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

const currencyToBang = (num: string = "09"): string => {
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
        throw new Error("Invalid number");
      }
    }

    const result =
      integerBnNums.join("") +
      " টাকা" +
      (decimalBnNums ? ` ${decimalBnNums} পয়সা` : " ");
    return result;
  } catch (error) {
    console.error("Error converting currency to Bangla:", error);
    return "";
  }
};

export default currencyToBang;
