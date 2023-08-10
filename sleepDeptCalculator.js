function getSleepHours(day) {
  switch (day) {
    case "monday":
      return 8;
      break;
    case "tuesday":
      return 7;
      break;
    case "wednesday":
      return 6;
      break;
    case "thursday":
      return 6.5;
      break;
    case "friday":
      return 9;
      break;
    case "saturday":
      return 9.5;
      break;
    case "sunday":
      return 8.5;
      break;
  }
}

const getActualSleepHours = () => 8 + 7 + 6 + 6.5 + 9 + 9.5 + 8.5;

const getIdealSleepHours = idealHours => idealHours * 7;


const calculateSleepDept = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours(9);

  if (actualSleepHours === idealSleepHours) {
    console.log("You got the perfect amount of sleep");
  } else if (actualSleepHours > idealSleepHours) {
    console.log(
      `You got ${
        actualSleepHours - idealSleepHours
      } hour(s) more sleep than you needed this week.`
    );
  } else if (actualSleepHours < idealSleepHours) {
    console.log(
      `You got ${
        idealSleepHours - actualSleepHours
      } hour(s) less sleep than you needed this week. Get some rest.`
    );
  }
};
calculateSleepDept();



