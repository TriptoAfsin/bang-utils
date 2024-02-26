import dayjs from "dayjs";

const numMonthMap: { [key: number]: string } = {
  1: "জানুয়ারি",
  2: "ফেব্রুয়ারি",
  3: "মার্চ",
  4: "এপ্রিল",
  5: "মে",
  6: "জুন",
  7: "জুলাই",
  8: "অগাস্ট",
  9: "সেপ্টেম্বর",
  10: "অক্টোবর",
  11: "নভেম্বর",
  12: "ডিসেম্বর",
};

const monthBang = (date: string = ""): string => {
  const monthNum = dayjs(date).get("month") + 1;
  try {
    const splitMonthNums: string[] | undefined = monthNum?.toString().split("");
    if (!splitMonthNums) throw new Error("Invalid input");

    const splitBnMonths: string[] = [];
    for (let i = 0; i < splitMonthNums.length; i++) {
      const bnMonth = numMonthMap[parseInt(splitMonthNums[i])];
      if (bnMonth) {
        splitBnMonths.push(bnMonth);
      } else {
        throw new Error("Invalid month");
      }
    }
    return splitBnMonths.join("");
  } catch (error) {
    console.error("Error converting month to Bangla:", error);
    return "";
  }
};

export default monthBang;
