use solarsystem;
db.dropDatabase();

db.planets.insertMany([
  {
    name: "Mercury",
    size: "small",
  },
  {
    name: "Venus",
    size: "big",
  },
  {
    name: "Earth",
    size: "medium",
  }
]);
