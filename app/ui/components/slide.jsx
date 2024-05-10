export default function Slide() {
  return (
    <div className="slides">
      <SlideItem
        slideTitle="Eatery Cafe and Restaurant"
        slideDesc="Our Mission is to provide an unforgettable experience"
        slideAnchor="Meet Our Chef"
        slideClass="item-one"
      />

      {/* <SlideItem
        slideTitle="Your Perfect Break-feast"
        slideDesc="The Best Dinning Quality can be here too"
        slideAnchor="Discover Menu"
        slideClass="item-two"
      />
      <SlideItem
        slideTitle="New Restaurant in Town"
        slideDesc="Enjoy your special menu every Sunday and Friday"
        slideAnchor="Reservation"
        slideClass="item-three"
      /> */}
    </div>
  );
}

function SlideItem({ slideTitle, slideDesc, slideAnchor, slideClass }) {
  return (
    <div className={`slide-item ${slideClass}`}>
      <div className="slide-content">
        <h4>{slideTitle}</h4>
        <p>{slideDesc}</p>
        <a href="" className="custom-btn">
          {slideAnchor}
        </a>
      </div>
    </div>
  );
}
