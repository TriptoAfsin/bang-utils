declare const currencyToBang: (num?: string) => string;

type DateFormatType = "D/M/YY" | "M/D/YY" | "D/M/YYYY" | "M/D/YYYY" | "D M, YYYY" | "D M, YY";
declare const dateBang: (engDate?: string, separator?: string, format?: DateFormatType) => string | void;

declare const dayBang: (date?: string) => string;

declare const monthBang: (date?: string) => string;

declare const numBang: (num?: string) => string;

declare const numToBanglaWords: (number: number) => string;

type TimeFormat = "detailed" | "short" | "normal";
declare const timeBang: (date?: string, format?: TimeFormat) => string;

export { currencyToBang, dateBang, dayBang, monthBang, numBang, numToBanglaWords, timeBang };
