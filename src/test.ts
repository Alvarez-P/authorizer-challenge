import { authorizer } from './main'

authorizer([
  { account: { 'active-card': true, 'available-limit': 100 } },
  { account: { 'active-card': true, 'available-limit': 100 } },
  {
    transaction: {
      merchant: 'Burger King',
      amount: 190,
      time: new Date('2019-02-13T11:00:22.000Z'),
    },
  },
])
