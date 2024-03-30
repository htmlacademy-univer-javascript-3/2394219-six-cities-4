import { Offer } from '../types/offer';
import { reviews } from './reviews';

export const offers: Offer[] = [
  {
    id: '1',
    title: 'Penthouse, 4-5 rooms + 5 balconies',
    type: 'apartment',
    price: 405,
    previewImage:'https://14.design.htmlacademy.pro/static/hotel/1.jpg',
    city:{
      name:'Paris',
      location:{
        latitude:48.85661,
        longitude:2.351499,
        zoom:13
      }
    },
    location:{
      latitude:48.868610000000004,
      longitude:2.342499,
      zoom:16
    },
    isFavorite:true,
    isPremium:false,
    rating:1.6,
    photos: ['https://14.design.htmlacademy.pro/static/hotel/1.jpg', 'https://14.design.htmlacademy.pro/static/hotel/2.jpg'],
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of city. The building is green and from 18th century.',
    reviews: [reviews[0], reviews[4]]
  },
  {
    id: '2',
    title: 'Penthouse, 4-5 rooms + 5 balconies',
    type: 'room',
    price: 106,
    previewImage: 'https://14.design.htmlacademy.pro/static/hotel/10.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.85861,
      longitude: 2.330499,
      zoom: 16
    },
    isFavorite: true,
    isPremium: false,
    rating: 4.8,
    photos: ['https://14.design.htmlacademy.pro/static/hotel/3.jpg', 'https://14.design.htmlacademy.pro/static/hotel/4.jpg'],
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of city. The building is green and from 18th century.',
    reviews: [reviews[1], reviews[2]]
  },
  {
    id: '3',
    title: 'House in countryside',
    type: 'hotel',
    price: 460,
    previewImage: 'https://14.design.htmlacademy.pro/static/hotel/3.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.83461,
      longitude: 2.335499,
      zoom: 16
    },
    isFavorite: false,
    isPremium: false,
    rating: 3.1,
    photos: ['https://14.design.htmlacademy.pro/static/hotel/5.jpg', 'https://14.design.htmlacademy.pro/static/hotel/6.jpg'],
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of city. The building is green and from 18th century.',
    reviews: [reviews[0], reviews[2]]
  },
  {
    id: '4',
    title: 'Amazing and Extremely Central Flat',
    type: 'house',
    price: 626,
    previewImage: 'https://14.design.htmlacademy.pro/static/hotel/3.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.85761,
      longitude: 2.358499,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 3.7,
    photos: ['https://14.design.htmlacademy.pro/static/hotel/7.jpg', 'https://14.design.htmlacademy.pro/static/hotel/10.jpg'],
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of city. The building is green and from 18th century.',
    reviews: [reviews[3], reviews[4]]
  }
];
