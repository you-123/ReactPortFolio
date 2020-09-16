import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';
const items = [
  {
    src:'/assets/carsolimge/fashionlarg3.jpg ',
    altText: 'Slide ',
    caption: 'Slide 1',
    header: 'Slide 1 Header',
    key: '1',
    style: '100%' 
    
  },
  {
    src: '/assets/carsolimge/artcullcar1.jpg',
    altText: 'Slide 2',
    caption: 'Slide 2',
    header: 'Slide 2 Header',
    key: '2'
  
  },
  {
    src: '/assets/carsolimge/artcullarge2.jpg',
    altText: 'Slide 3',
    caption: 'Slide 3',
    header: 'Slide 3 Header',
    key: '3'
  
  }
];

const Example = () => <div className="slider "><UncontrolledCarousel items={items}  /></div>;

export default Example;