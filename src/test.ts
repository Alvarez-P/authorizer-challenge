import { authorizer } from './main'

authorizer([
  { account: { 'active-card': true, 'available-limit': 100 } },
  {
    transaction: {
      merchant: "McDonald's",
      amount: 10,
      time: new Date('2019-02-13T11:00:01.000Z'),
    },
  },
  {
    transaction: {
      merchant: 'Burger King',
      amount: 20,
      time: new Date('2019-02-13T11:00:02.000Z'),
    },
  },
  {
    transaction: {
      merchant: 'Burger King',
      amount: 5,
      time: new Date('2019-02-13T11:00:07.000Z'),
    },
  },
  {
    transaction: {
      merchant: 'Burger King',
      amount: 5,
      time: new Date('2019-02-13T11:00:08.000Z'),
    },
  },
  {
    transaction: {
      merchant: 'Burger King',
      amount: 150,
      time: new Date('2019-02-13T11:00:18.000Z'),
    },
  },
  {
    transaction: {
      merchant: 'Burger King',
      amount: 190,
      time: new Date('2019-02-13T11:00:22.000Z'),
    },
  },
  {
    transaction: {
      merchant: 'Burger King',
      amount: 15,
      time: new Date('2019-02-13T12:00:27.000Z'),
    },
  },
])
