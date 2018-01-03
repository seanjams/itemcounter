class ItemCounter {
  constructor(rides = []) {
    this.rides = rides;
    this.itemCounts = {};
    this.generateCounts();
  }

  addRide(ride) {
    this.rides.push(ride);
    this.generateCounts();
  }

  removeRide(ride) {
    this.rides.splice(this.rides.indexOf(ride), 1);
    this.generateCounts();
  }

  printSummary() {
    let date, hours, minutes;
    const times = Object.keys(this.itemCounts).sort(),
    timeStr = times.map(time => {
      date = new Date(parseInt(time));
      hours = date.getHours();
      minutes = date.getMinutes();
      minutes = minutes < 10 ? `0${minutes}` : minutes;
      return `${hours}:${minutes}`;
    });

    for (let i = 0; i < times.length - 1; i++) {
      let items = this.itemCounts[times[i]];
      let itemStr = Object.keys(items).sort().map(name => {
        return `${name}: ${items[name]}`;
      }).join(', ');
      console.log(`${timeStr[i]}-${timeStr[i + 1]} -> ${itemStr}`);
    }
  }

  // helper methods

  generateCounts() {
    this.itemCounts = {};
    this.rides.forEach(ride => this.getTimes(ride));
    this.rides.forEach(ride => {
      this.updateItemCounts(
        ride.startTime.getTime(),
        ride.endTime.getTime(),
        ride.items
      );
    });
  }

  getTimes(ride) {
    const startTime = ride.startTime.getTime(),
          endTime = ride.endTime.getTime();
    this.itemCounts[startTime] = this.itemCounts[startTime] || {};
    this.itemCounts[endTime] = this.itemCounts[endTime] || {};
  }

  updateItemCounts(startTime, endTime, newItems) {
    const time = Object.keys(this.itemCounts),
          name = Object.keys(newItems);
    let counts;

    for (let i = 0; i < time.length; i++) {
      counts = this.itemCounts[time[i]];
      if (startTime <= time[i] && time[i] < endTime) {
        for (let j = 0; j < name.length; j++) {
          if (!counts[name[j]]) counts[name[j]] = 0;
          counts[name[j]] += newItems[name[j]];
        }
      }
    }
  }
}

const ride1 = {
  startTime: new Date("Mon, 25 Dec 1995 7:00:00"),
  endTime: new Date("Mon, 25 Dec 1995 7:30:00"),
  items: {
    apple: 2,
    brownie: 1
  }
};

const ride2 = {
  startTime: new Date("Mon, 25 Dec 1995 7:10:00"),
  endTime: new Date("Mon, 25 Dec 1995 8:00:00"),
  items: {
    apple: 1,
    carrot: 3
  }
};

const ride3 = {
  startTime: new Date("Mon, 25 Dec 1995 7:20:00"),
  endTime: new Date("Mon, 25 Dec 1995 7:45:00"),
  items: {
    apple: 1,
    brownie: 2,
    diamond: 4
  }
};

const itemCounter = new ItemCounter([ride1, ride2, ride3]);
itemCounter.printSummary();

export default ItemCounter;
