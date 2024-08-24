// {
//     '0': { week: 'Wed', day: '21' },
//     '1': { week: 'Thu', day: '22' },
//     '2': { week: 'Fri', day: '23' },
//     '3': { week: 'Sat', day: '24' },
//     '4': { week: 'Sun', day: '25' },
//     '5': { week: 'Mon', day: '26' },
//     '6': { week: 'Tue', day: '27' }
// }

const dayjs = require("dayjs");

const dayOfTheWeek = {
  0: "Sun",
  1: "Mon",
  2: "Tue",
  3: "Wed",
  4: "Thu",
  5: "Fri",
  6: "Sat",
};

function getWeekDayRoulette(weekOffset = 0) {
  let weekDays = [];
  for (let i = weekOffset * 7; i < weekOffset * 7 + 7; i++) {
    if (i - 3 < 0) {
      weekDays.push({
        week: dayOfTheWeek[
          dayjs()
            .subtract(Math.abs(i - 3), "days")
            .day()
            .toString()
        ],
        day: dayjs()
          .subtract(Math.abs(i - 3), "days")
          .date()
          .toString(),
        today: false,
      });
    } else if (i - 3 > 0) {
      weekDays.push({
        week: dayOfTheWeek[
          dayjs()
            .add(Math.abs(i - 3), "days")
            .day()
            .toString()
        ],
        day: dayjs()
          .add(Math.abs(i - 3), "days")
          .date()
          .toString(),
        today: false,
      });
    } else {
      weekDays[i] = {
        week: dayOfTheWeek[dayjs().day().toString()],
        day: dayjs().date().toString(),
        today: true,
      };
    }
  }
  return weekDays;
}

module.exports = getWeekDayRoulette;
