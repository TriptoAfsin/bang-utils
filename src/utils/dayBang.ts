import dayjs from "dayjs";

const numDayMap: { [key: number]: string } = {
  0: `রবিবার `,
  1: `সোমবার`,
  2: `মঙ্গলবার`,
  3: "বুধবার",
  4: "বৃহস্পতিবার",
  5: "শুক্রবার",
  6: "শনিবার",
};

const dayBang = (date: string = ""): string => {
  const dayNum = dayjs(date).get("day");
  try {
    const splitDayNums: string[] | undefined = dayNum?.toString().split("");
    if (!splitDayNums) throw new Error("Invalid input");

    const splitBnDays: string[] = [];
    for (let i = 0; i < splitDayNums.length; i++) {
      const bnDay = numDayMap[parseInt(splitDayNums[i])];
      if (bnDay) {
        splitBnDays.push(bnDay);
      } else {
        throw new Error("Invalid day");
      }
    }
    return splitBnDays.join("");
  } catch (error) {
    console.error("Error converting day to Bangla:", error);
    return "";
  }
};

export default dayBang;
