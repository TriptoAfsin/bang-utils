import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
import numBang from "./numBang";

dayjs.extend(utc);
dayjs.extend(timezone);

const dateBang = (
  engDate: string = "2023-07-03",
  separator: string = "/"
): string | void => {
  try {
    if (dayjs(engDate).isValid()) {
      const engYear: any = dayjs(engDate).get("year");
      const engMonth: any = dayjs(engDate).get("month");
      const engDay: any = dayjs(engDate).tz("Asia/Dhaka").get("date");
      // console.log('engDay', engDay)
      const bdDate: string = `${numBang(
        String(parseInt(engDay))
      )}${separator}${numBang(
        String(parseInt(engMonth) + 1)
      )}${separator}${numBang(String(engYear))}`;

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
