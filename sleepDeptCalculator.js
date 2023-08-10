//First we declare the sleep hours per/day in a function
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

//Second, we some the total sleep hours in a week
const getActualSleepHours = () => 8 + 7 + 6 + 6.5 + 9 + 9.5 + 8.5;

//Third, we apply the needed sleep hours multiplied by 7 days a week. You can pass an argument in getIdealSleepHours function call
const getIdealSleepHours = (idealHours) => idealHours * 7;

//The below function calculates the sleeping hours in a week subtracted by the ideal sleep hours a week, to get the perfect amount of sleep
const calculateSleepDept = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours(9);

//Using an if/else... statement to pass the arguments below
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

//function call
calculateSleepDept();
