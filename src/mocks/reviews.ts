import { Review } from '../types/review';
import { User } from '../types/review';

export const Users: User[] = [
  {
    id: 1,
    name: 'Max',
    avatarUrl: 'img/avatar-max.jpg',
    isPro: false
  },
  {
    id: 2,
    name: 'Angelina',
    avatarUrl: 'img/avatar-angelina.jpg',
    isPro: true
  }
];

export const reviews: Review[] = [
  {
    id: '1',
    user: Users[0],
    rating: 5,
    comment: 'Awesome place!',
    date: new Date('2024-02-23')
  },
  {
    id: '2',
    user: Users[0],
    rating: 1,
    comment: 'Worst place and time I remember',
    date: new Date('2022-02-24')
  },
  {
    id: '3',
    user: Users[1],
    rating: 4,
    comment: 'Good place to stand for a couple days!',
    date: new Date('2003-09-02')
  },
  {
    id: '4',
    user: Users[0],
    rating: 5,
    comment: 'Another awesome place! Good time to visit!',
    date: new Date('2024-03-21')
  },
  {
    id: '5',
    user: Users[1],
    rating: 3,
    comment: 'Meh...',
    date: new Date('2023-12-31')
  }
];
