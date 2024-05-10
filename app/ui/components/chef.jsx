export default function Chefs() {
  return (
    <div className="chefs section-space">
      <div className="chefs-title">
        <h3>Meet Our Chefs</h3>
        <p>They are nice and friendly</p>
      </div>

      <div className="chefs-row row">
        <ChefOverlay imgPath="images/team-image1.jpg" />
        <ChefOverlay imgPath="images/team-image2.jpg" />
        <ChefOverlay imgPath="images/team-image3.jpg" />
      </div>
    </div>
  );
}

function ChefOverlay({ imgPath }) {
  return (
    <div className="overlay-small-space">
      <div className="chef-overlay full-width">
        <img src={imgPath}  alt="chef" />
        <div className="overlay">
          <h5>Duis vel lacus id</h5>
          <h6>magna mattis</h6>
          <h6>vehicula</h6>
          <i className="fa fa-instagram"></i>
          <i className="fa fa-envelope"></i>
        </div>
      </div>
      <h5>New Catherine</h5>
      <p>Kitchen Officer</p>
    </div>
  );
}
