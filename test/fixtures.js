const faker = require('faker');

const oldList = [
  {
    id: 1,
    name: 'Michael',
    quantity: 9
  },
  {
    id: 2,
    name: 'Charlie',
    quantity: 8
  },
  {
    id: 3,
    name: 'Robert',
    quantity: 7
  }
];

const updatedList = [
  {
    id: 1,
    name: 'Michael',
    quantity: 8
  },
  {
    id: 3,
    name: 'Peter',
    quantity: 99
  },
  {
    id: 4,
    name: 'Ashley',
    quantity: 6
  }
];

const oldListTwo = [
  {
    id: 896344,
    name: 'Mohamed',
    quantity: 53040
  },
  {
    id: 25675436,
    name: 'Gennaro',
    quantity: 9336
  }
];

const updatedListTwo = [
  {
    id: 896344,
    name: 'Mohamed',
    quantity: 10848
  },
  {
    id: 25675436,
    name: 'Terrell',
    quantity: 9336
  },
  {
    id: 83254,
    name: 'Javier',
    quantity: 60072
  }
];

const updatedListThree = [
  {
    id: 896344,
    name: 'Mohamed',
    quantity: 10848
  },
  {
    id: 25675436,
    name: 'Terrell',
    quantity: 9336
  },
  {
    id: 83254,
    name: 'Javier',
    quantity: 60072
  },
  {
    id: 83253,
    name: 'Zoe',
    quantity: 600
  }
];

const randomOldList = [
  {
    id: parseInt(faker.random.number()),
    name: faker.name.firstName(),
    quantity: parseInt(faker.random.number())
  },
  {
    id: parseInt(faker.random.number()),
    name: faker.name.firstName(),
    quantity: parseInt(faker.random.number())
  }
];

const randomUpdatedList = [
  {
    id: parseInt(faker.random.number()),
    name: faker.name.firstName(),
    quantity: parseInt(faker.random.number())
  },
  {
    id: parseInt(faker.random.number()),
    name: faker.name.firstName(),
    quantity: parseInt(faker.random.number())
  },
  {
    id: parseInt(faker.random.number()),
    name: faker.name.firstName(),
    quantity: parseInt(faker.random.number())
  },
  {
    id: parseInt(faker.random.number()),
    name: faker.name.firstName(),
    quantity: parseInt(faker.random.number())
  }
];

const noChangeOld = [
  {
    id: 1,
    name: 'Mike',
    quantity: 1
  }
];

const noChangeNew = [
  {
    id: 1,
    name: 'Mike',
    quantity: 1
  }
];

module.exports = {
  oldList,
  updatedList,
  oldListTwo,
  updatedListTwo,
  updatedListThree,
  randomOldList,
  randomUpdatedList,
  noChangeOld,
  noChangeNew
};
