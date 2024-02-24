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

const numBang = (num: string = "09"): string => {
  try {
    const splitNums: string[] | undefined = num?.toString().split("");
    if (!splitNums) throw new Error("Invalid input");

    const splitBnNums: string[] = [];
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

export default numBang;
