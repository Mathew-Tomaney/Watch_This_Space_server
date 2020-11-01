use planets;
db.dropDatabase();

db.planets.insertMany([
  {
    planet: "Mercury",
    size: "small"
  },
  {
    planet: "Jupiter",
    size: "big"
  },
  {
    planet: "Earth",
    size: "medium"
  }
]);