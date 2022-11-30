let eventGuid = 0;
let todayStr = new Date().toISOString().replace(/T.*$/, ""); // YYYY-MM-DD of today

export const INITIAL_EVENTS = [
  // {
  //   id: createEventId(),
  //   title: "All-day event",
  //   start: todayStr,
  // },
  {
    id: createEventId(),
    title: "Name 1",
    start: todayStr + "T10:00:00",
    end: todayStr + "T16:00:00",
  },
  {
    id: createEventId(),
    title: "Name 2",
    start: todayStr + "T10:00:00",
    end: todayStr + "T16:00:00",
  },
  {
    id: createEventId(),
    title: "Name 3",
    start: todayStr + "T10:00:00",
    end: todayStr + "T16:00:00",
  },
  {
    id: createEventId(),
    title: "Name 4",
    start: todayStr + "T10:00:00",
    end: todayStr + "T16:00:00",
  },
  {
    id: createEventId(),
    title: "Name 5",
    start: todayStr + "T15:30:00",
    end: todayStr + "T21:00:00",
  },
  {
    id: createEventId(),
    title: "Name 6",
    start: todayStr + "T15:30:00",
    end: todayStr + "T21:00:00",
  },
  {
    id: createEventId(),
    title: "Name 7",
    start: todayStr + "T15:30:00",
    end: todayStr + "T21:00:00",
  },
  {
    id: createEventId(),
    title: "Name 8",
    start: todayStr + "T15:30:00",
    end: todayStr + "T21:00:00",
  },
];

export function createEventId() {
  return String(eventGuid++);
}
