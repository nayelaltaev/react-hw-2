import "../Main/Main.css";

import jersey from "../../img/jersey.png";
import footer from "../../img/footer-logo.png";
import line from "../../img/Line.png";

function Main() {
  return (
    <main className="main">
      <div className="content">
        <h2 className="jersey">Jerseys bestsellers</h2>
        <hr className="hr1" />
        <h1>bestsellers</h1>
        <hr className="hr2" />
        <h2 className="collection">Collection</h2>
        <hr className="hr3" />
        <p>The jerseys of the best nba players of the regular seasons.</p>
      </div>

      <div className="products">
        <div className="product1">
          <div className="img1">
            <img src={jersey} alt="" />
          </div>
          <div className="main-title1">
            <p className="title1">LeBron James Lakers City Edition</p>
            <p className="description1">Nike NBA Swingman Jersey</p>
            <p className="price1">$290</p>
          </div>
        </div>

        <div className="product2">
          <div className="img2">
            <img src={jersey} alt="" />
          </div>
          <div className="main-title2">
            <p className="title2">LeBron James Lakers City Edition</p>
            <p className="description2">Nike NBA Swingman Jersey</p>
            <p className="price2">$290</p>
          </div>
        </div>

        <div className="product3">
          <div className="img3">
            <img src={jersey} alt="" />
          </div>
          <div className="main-title3">
            <p className="title3">LeBron James Lakers City Edition</p>
            <p className="description3">Nike NBA Swingman Jersey</p>
            <p className="price3">$290</p>
          </div>
        </div>
      </div>

      <div className="footer">
        <div className="line">
          <span>View all</span>
          <img src={line} alt="" />
        </div>

        <div className="footer-logo">
          <img src={footer} alt="" />
        </div>
      </div>
    </main>
  );
}

export default Main;
