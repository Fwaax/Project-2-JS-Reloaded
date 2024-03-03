async function GetTime(url: string) {
    const time_data = await fetch(url)
    if (!time_data.ok) {
        return null
    }
    const time_json = await time_data.json()

    return time_json.datetime
}

export function TimezoneFormatter(tz: string) {
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
    return formatter
}


export async function IsraelTime() {
    const time_data = await GetTime("https://worldtimeapi.org/api/timezone/Asia/Jerusalem")
    const tz = 'Asia/Jerusalem'
    const formatter = TimezoneFormatter(tz);
    const adjusted_time = formatter.format(new Date(time_data))
    return adjusted_time
}

export async function BerlinTime() {
    const time_data = await GetTime("https://worldtimeapi.org/api/timezone/Europe/Berlin")
    const tz = 'Europe/Berlin'
    const formatter = TimezoneFormatter(tz);
    const adjusted_time = formatter.format(new Date(time_data))
    return adjusted_time
}