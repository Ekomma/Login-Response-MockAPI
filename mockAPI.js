const data = [
  {
    id: 1,
    firstname: "Paul",
    lastname: "Jones",
  },
  {
    id: 2,
    firstname: "Lucy",
    lastname: "Riches",
  },
];

function mockData() {
  return new Promise((resolve) => {
    setTimeout(()=> resolve(data), 2000);
  });
}

module.exports = mockData