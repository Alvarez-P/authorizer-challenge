import { authorizer } from './main'

authorizer([
  {
    transaction: {
      merchant: 'Burger King',
      amount: 190,
      time: new Date('2019-02-13T11:00:22.000Z'),
    },
  },
  { account: { 'active-card': false, 'available-limit': 100 } },
  {
    transaction: {
      merchant: 'Burger King',
      amount: 190,
      time: new Date('2019-02-13T11:00:22.000Z'),
    },
  },
  { account: { 'active-card': true, 'available-limit': 100 } },
])
