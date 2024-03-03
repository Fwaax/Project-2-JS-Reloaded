var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function GetTime(url) {
    return __awaiter(this, void 0, void 0, function* () {
        const time_data = yield fetch(url);
        if (!time_data.ok) {
            return null;
        }
        const time_json = yield time_data.json();
        return time_json.datetime;
    });
}
export function TimezoneFormatter(tz) {
    const formatter = new Intl.DateTimeFormat('en-US', {
        timeZone: tz,
        weekday: 'long',
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: false,
    });
    return formatter;
}
export function IsraelTime() {
    return __awaiter(this, void 0, void 0, function* () {
        const time_data = yield GetTime("https://worldtimeapi.org/api/timezone/Asia/Jerusalem");
        const tz = 'Asia/Jerusalem';
        const formatter = TimezoneFormatter(tz);
        const adjusted_time = formatter.format(new Date(time_data));
        return adjusted_time;
    });
}
export function BerlinTime() {
    return __awaiter(this, void 0, void 0, function* () {
        const time_data = yield GetTime("https://worldtimeapi.org/api/timezone/Europe/Berlin");
        const tz = 'Europe/Berlin';
        const formatter = TimezoneFormatter(tz);
        const adjusted_time = formatter.format(new Date(time_data));
        return adjusted_time;
    });
}
