const { showHelp } = require('./messaging');
const { prepareString } = require('./formatting');
const { getTimeData } = require('./client');

const args = process.argv.slice(2);
/*args.forEach(arg => console.log(arg));*/

if (args.includes('--help')) {
  showHelp();
}

if (args.includes('--option')) {
  getTimeData()
    .then(data => {
      return data.reduce((acc, curr) => {
        const [area, city] = curr.split("/");
        acc.push({ area, city });
        return acc;
      }, []);
    })
    .then(data => {
      data.forEach(entry => {
        console.log(entry);
      });
      process.exit();
    });
}

if (args.length >= 2) {
  const continent = prepareString(args[0]);
  const city = prepareString(args[1]);

  getTimeData(continent, city).then(data => {
    switch (args[2]) {
      case "--unix":
        return console.log(data["unixtime"]);
      case "--currentWeek":
        return console.log(data["week_number"]);
      case "--dayOfTheYear":
        return console.log(data["day_of_year"]);
      default:
        const datetime = data["datetime"].substr(0, 19);
        const [date, time] = datetime.split("T");
        const [year, month, day] = date.split("-");
        return console.log(`${day}.${month}.${year} ${time}`);
    }
    process.exit()
  });
}
