import { hours } from "@/config";

const TZ = "Africa/Addis_Ababa";

const toMinutes = (t) => {
  const [h, m] = t.split(":").map(Number);
  return h * 60 + m;
};

function now() {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: TZ,
    weekday: "long",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(new Date());
  const get = (type) => parts.find((p) => p.type === type)?.value;
  return {
    day: get("weekday"),
    minutes: Number(get("hour")) * 60 + Number(get("minute")),
  };
}

export function getTodayStatus() {
  const { day, minutes } = now();
  const row = hours.find((h) => h.day === day);

  if (!row || !row.open) {
    return { day, isOpen: false, label: "Closed today (by appointment)" };
  }
  const openAt = toMinutes(row.open);
  const closeAt = toMinutes(row.close);

  if (minutes >= openAt && minutes < closeAt) {
    return { day, isOpen: true, label: `Open today until ${row.close}` };
  }
  if (minutes < openAt) {
    return { day, isOpen: false, label: `Opens today at ${row.open}` };
  }
  return { day, isOpen: false, label: "Closed for today" };
}
