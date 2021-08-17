import { authorizer } from './main'

authorizer([
  { account: { 'active-card': true, 'available-limit': 1000 } },
  {
    transaction: {
      merchant: 'Vivara',
      amount: 1250,
      time: new Date('2019-02-13T11:00:00.000Z'),
    },
  },
  {
    transaction: {
      merchant: 'Samsung',
      amount: 2500,
      time: new Date('2019-02-13T11:00:01.000Z'),
    },
  },
  {
    transaction: {
      merchant: 'Nike',
      amount: 800,
      time: new Date('2019-02-13T11:01:01.000Z'),
    },
  },
  {
    transaction: {
      merchant: 'Uber',
      amount: 80,
      time: new Date('2019-02-13T11:01:31.000Z'),
    },
  },
  // { account: { 'active-card': true, 'available-limit': 100 } },
  // {
  //   transaction: {
  //     merchant: "McDonald's",
  //     amount: 10,
  //     time: new Date('2019-02-13T11:00:01.000Z'),
  //   },
  // },
  // {
  //   transaction: {
  //     merchant: 'Burger King',
  //     amount: 20,
  //     time: new Date('2019-02-13T11:00:02.000Z'),
  //   },
  // },
  // {
  //   transaction: {
  //     merchant: 'Burger King',
  //     amount: 5,
  //     time: new Date('2019-02-13T11:00:07.000Z'),
  //   },
  // },
  // {
  //   transaction: {
  //     merchant: 'Burger King',
  //     amount: 5,
  //     time: new Date('2019-02-13T11:00:08.000Z'),
  //   },
  // },
  // {
  //   transaction: {
  //     merchant: 'Burger King',
  //     amount: 150,
  //     time: new Date('2019-02-13T11:00:18.000Z'),
  //   },
  // },
  // {
  //   transaction: {
  //     merchant: 'Burger King',
  //     amount: 190,
  //     time: new Date('2019-02-13T11:00:22.000Z'),
  //   },
  // },
  // {
  //   transaction: {
  //     merchant: 'Burger King',
  //     amount: 15,
  //     time: new Date('2019-02-13T12:00:27.000Z'),
  //   },
  // },
])
