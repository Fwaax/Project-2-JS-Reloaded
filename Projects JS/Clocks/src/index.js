var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { IsraelTime, BerlinTime } from './timezones.js';
let israel_offset;
let berlin_offset;
function RunAtPageLoad() {
    return __awaiter(this, void 0, void 0, function* () {
        const api_israel = yield IsraelTime();
        const api_berlin = yield BerlinTime();
        const local_time = new Date();
        console.log(api_israel);
        if (api_israel) {
            const is_time = new Date(api_israel);
            israel_offset = is_time.getTime() - local_time.getTime();
            console.log(`Setting offset for Israel: ${israel_offset}`);
        }
        console.log(api_berlin);
        if (api_berlin) {
            const be_time = new Date(api_berlin);
            berlin_offset = be_time.getTime() - local_time.getTime();
            console.log(`Setting offset for Berlin: ${berlin_offset}`);
        }
    });
}
function calculateTime(offset) {
    const local_time = new Date();
    const time = new Date(local_time.getTime() + offset);
    return `${time.getDate()}/${((time.getMonth() + 1) < 10 ? '0' : '') + (time.getMonth() + 1)}/${time.getFullYear()} - ${time.getHours()}:${(time.getMinutes() < 10 ? '0' : '') + time.getMinutes()}:${(time.getSeconds() < 10 ? '0' : '') + time.getSeconds()}`;
}
function updateTime() {
    const is_time = calculateTime(israel_offset);
    const be_time = calculateTime(berlin_offset);
    const clock1 = document.getElementById('clock1');
    const clock2 = document.getElementById('clock2');
    if (clock1) {
        clock1.innerHTML = be_time.toLocaleString();
    }
    if (clock2) {
        clock2.innerHTML = is_time.toLocaleString();
    }
}
function main() {
    console.log("Loading main()");
    RunAtPageLoad();
    setInterval(updateTime, 1000);
}
main();
