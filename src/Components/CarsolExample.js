import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';
const items = [
  {
    src:'/assets/carsolimge/fashionlarg3.jpg ',
    altText: 'Fashion ',
    caption: 'Fashion ',
    header: 'Slide 1 Header',
    key: '1',
    style: '100%' 
    
  },
  {
    src: '/assets/carsolimge/technologymid2.jpg',
    altText: 'Technology',
    caption: 'Technology',
    header: 'Slide 2 Header',
    key: '2'
  
  },
  {
    src: '/assets/carsolimge/artcullcar1.jpg',
    altText: 'Art',
    caption: 'Art ',
    header: 'Slide 3 Header',
    key: '3'
  
  }
];

const Example = () => <div className="slider "><UncontrolledCarousel items={items}  /></div>;

export default Example;