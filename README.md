# LimeBike Coding Challenge

Thank you for the opportunity to complete this challenge!

To create a new ItemCounter instance, import the `ItemCounter` class into your project from `itemcounter.js`. The ItemCounter constructor takes an array of rides as an argument...

```javascript
//with rides
const itemCounter = new ItemCounter([ride1, ride2, ride3])
//or
const itemCounter = new ItemCounter()
```

or can be left blank and used with calls to the following API methods:

1. `addRide(ride)` - Takes a single ride argument, adds to list, and updates internal item counts according to startTime and endTime;
2. `removeRide(ride)` - Takes a single ride argument, removes ride from list, and updates internal item counts according to startTime and endTime;
3. `printSummary()` - Generates summary of items in transit and their counts, sorted by time. Prints to stdout.

Rides are understood by the ItemCounter class in the following format:

```javascript
{
  startTime: Date,
  endTime: Date,
  items: {
    apple: 1,
    banana: 2
  }
}
```

A test call to printSummary has been included in `itemcounter.js`, and can be run from the terminal.
To do so, navigate to this directory and run `node itemcounter.js`.
