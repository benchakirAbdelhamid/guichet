import React from 'react';

const Slide = () => {
  // slide image
    return (
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://gcdn.imgix.net/campaigns/discours-de-hytem.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://gcdn.imgix.net/campaigns/cartes-abonnement-netflix-2.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://gcdn.imgix.net/campaigns/pubg-mobile-2.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://gcdn.imgix.net/campaigns/sweat-shirt-champions-league.jpeg" className="d-block w-100" alt="..."/>
    </div>
  </div>
        </div>
    );
}

export default Slide;
