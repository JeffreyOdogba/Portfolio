import React from "react";
import "./main.css";
import FooterName from "./footer";

class BeerStore extends React.Component {
  render() {
    const BoxParentDetails = props => {
      return (
        <div className="container">
          <br />
          <div>
            <h2>{props.project_title}</h2>
            <br />
          </div>

          <div>
            <a
              href={props.link_Porfolio}
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <b style={{ fontSize: "20px" }}> {props.link_Name} </b>{" "}
            </a>
          </div>

          <div className="card-deck">
            <div className="card">
              <img
                className="card-img-top"
                src={props.projectImage1}
                alt="Cardimg"
              />
              <div className="card-body">
                <h5 className="card-title">{props.Page_Name}</h5>
              </div>
            </div>
            <div className="card">
              <img
                className="card-img-top"
                src={props.projectImage2}
                alt="Cardimg"
              />
              <div className="card-body">
                <h5 className="card-title">{props.Page_Name2}</h5>
              </div>
            </div>
            <div className="card">
              <img
                className="card-img-top"
                src={props.projectImage3}
                alt="Cardimg"
              />
              <div className="card-body">
                <h5 className="card-title">{props.Page_Name3}</h5>
              </div>
            </div>
            <div style={{ fontSize: "19px", textAlign: "center" }}>
              <p>{props.description}</p>
            </div>
          </div>
        </div>
      );
    };

    var description =
      " The team project in Mobile Web-Based Application Development class Languages- HTML, CSS, Javascript, Bootstrap," +
      "JQuery Mobile, Ajax, Json, google map API Features- Shopping, Cart check out, My order list " +
      "Main page illustrates the catchphrase and the location of the offline shop. About page explains about the brand.";
    const description2 =
      "There are three subcategories of beer type. A customer can add items to their cart by just tapping beer on the screen." +
      " The number on the cart icon shows the number of beers which a customer has chosen. " +
      "The mobile store provides the cart function. Before checkout, customers can adjust quantities of each of the beers." +
      "My order page shows each customer’s order information. By clicking red “Order details”, a customer can see the beer they ordered listed.";

    return (
      <div>
        <BoxParentDetails
          link_Name="Live Site"
          project_title="Beer Store(Team Project Mobile)"
          link_Porfolio="http://odogba.dev.fast.sheridanc.on.ca/portfolio/Beer%20Store/beerstore.html"
          projectImage1="https://wonechoi.github.io/img/BeerMore/Main1.jpg"
          projectImage2="https://wonechoi.github.io/img/BeerMore/Main2.jpg"
          projectImage3="https://wonechoi.github.io/img/BeerMore/About.jpg"
          Page_Name="Main Page"
          Page_Name2=" Google Map Api"
          Page_Name3="About Page"
          description={description}
        />

        <BoxParentDetails
          projectImage1="https://wonechoi.github.io/img/BeerMore/Shop1.jpg"
          projectImage2="https://wonechoi.github.io/img/BeerMore/MyOrder.jpg"
          Page_Name="Shop with various beer collection"
          projectImage3="https://wonechoi.github.io/img/BeerMore/Cart1.jpg"
          Page_Name2="Order Details"
          Page_Name3="Cart"
          description={description2}
        />

        <br />
        <br />
        <FooterName />
      </div>
    );
  }
}

export default BeerStore;
