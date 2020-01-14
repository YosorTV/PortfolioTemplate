import Card from './mainCard';

const card1 = new Card({
  link: './photo.html',
  img1: '/assets/img/model-left.jpg',
  img2: '/assets/img/model-right.jpg',
  name: 'Elena Morell',
  title: 'Photographer',
  date: '02/08/2018',
  classType: 'photographer'
})

card1.render('#main');

const card2 = new Card({
  link: './chef.html',
  img1: '/assets/img/chef-left.jpg',
  img2: '/assets/img/chef-right.jpg',
  name: 'John Savos',
  title: 'Pro Chef',
  date: '15/05/2015',
  classType: 'chef'
})

card2.render('#main');

const card3 = new Card({
  link: './barber.html',
  img1: '/assets/img/hair-left.jpg',
  img2: '/assets/img/hair-right.jpg',
  name: 'Andrew Mayer',
  title: 'Pro Hairstylist',
  date: '06/04/2018',
  classType: 'barber'
})

card3.render('#main');
