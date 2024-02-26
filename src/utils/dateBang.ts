import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
import monthBang from "./monthBang";
import numBang from "./numBang";

dayjs.extend(utc);
dayjs.extend(timezone);

type DateFormatType =
  | "D/M/YY"
  | "M/D/YY"
  | "D/M/YYYY"
  | "M/D/YYYY"
  | "D M, YYYY"
  | "D M, YY";

const getFormatted = (
  format: DateFormatType,
  separator: string,
  date: string
) => {
  const year: any = dayjs(date).get("year");
  const sYear: any = dayjs(date).get("y");
  const month: any = dayjs(date).get("month");
  const day: any = dayjs(date).tz("Asia/Dhaka").get("date");
  const mapping: any = {
    "D/M/YY": `${numBang(String(parseInt(day)))}${separator}${numBang(
      String(parseInt(month) + 1)
    )}${separator}${numBang(String(sYear).slice(-2))}`,
    "D/M/YYYY": `${numBang(String(parseInt(day)))}${separator}${numBang(
      String(parseInt(month) + 1)
    )}${separator}${numBang(String(year))}`,
    "M/D/YY": `${numBang(String(parseInt(month) + 1))}${separator}${numBang(
      String(parseInt(day))
    )}${separator}${numBang(String(sYear).slice(-2))}`,
    "M/D/YYYY": `${numBang(String(parseInt(month) + 1))}${separator}${numBang(
      String(parseInt(day))
    )}${separator}${numBang(String(year))}`,
    "D M, YYYY": `${numBang(String(parseInt(day)))} ${monthBang(
      date
    )}${separator}${numBang(String(year))}`,
    "D M, YY": `${numBang(String(parseInt(day)))} ${monthBang(
      date
    )}${separator}${numBang(String(year).slice(-2))}`,
  };

  return mapping[format];
};

const dateBang = (
  engDate: string = "",
  separator: string = "/",
  format: DateFormatType = "D/M/YY"
): string | void => {
  try {
    if (dayjs(engDate).isValid()) {
      const bdDate: string = getFormatted(format, separator, engDate);
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

export default dateBang;
