import React from "react";
import {Carousel} from 'react-bootstrap';
import ad1 from '../images/ad1.jpg';
import ad2 from '../images/ad2.jpg';
import ad3 from '../images/ad3.jpg';

const Ads = () => {
  return (
 <>
 <Carousel>
 
  <Carousel.Item interval={3000}>
  <a href="https://www.visa.co.in/pay-with-visa/find-a-card/debit-cards.html"  rel="noreferrer" target="_blank">
    <img
          width="100%"
          height="700"
      src={ad1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Click to view AD</h3>
    </Carousel.Caption></a>
  </Carousel.Item>
  <Carousel.Item interval={3000}>
  <a href="https://www.airtel.in/"  rel="noreferrer" target="_blank">
    <img
      src={ad2}
      alt="second slide"
      width="100%"
      height="700"
    />
    <Carousel.Caption>
      <h3>Click to view AD</h3>
    </Carousel.Caption></a>
  </Carousel.Item>
  <Carousel.Item interval={2000}>
  <a href="https://en.parisinfo.com/" rel="noreferrer" target="_blank">
    <img
        width="100%"
        height="700"
      src={ad3}
      alt="third slide"
    />
    <Carousel.Caption>
      <h3>Click to view AD</h3>
    </Carousel.Caption></a>
  </Carousel.Item>
</Carousel>
    </>

  );
};

export default Ads;