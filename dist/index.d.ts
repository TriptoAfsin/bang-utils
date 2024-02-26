type DateFormatType = "D/M/YY" | "M/D/YY" | "D/M/YYYY" | "M/D/YYYY" | "D M, YYYY" | "D M, YY";
declare const dateBang: (engDate?: string, separator?: string, format?: DateFormatType) => string | void;

declare const monthBang: (date?: string) => string;

declare const numBang: (num?: string) => string;

declare const numToBanglaWords: (number: number) => string;

export { dateBang, monthBang, numBang, numToBanglaWords };
