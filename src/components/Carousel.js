import React from "react";

import Card from "../components/Card";

import drewbeskin from "../images/drewbeskin.png";
import nickmallis from "../images/nickmallis.png";
import grandvapids from "../images/grandvapids.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 0,
          title: "Drew Beskin",
          subTitle: "Website for Drew Beskin",
          subInfo: "Built using HTML and CSS",
          imgSrc: drewbeskin,
          link: "https://www.drewbeskin.com",
          selected: false,
        },
        {
          id: 1,
          title: "Nicholas Malllis",
          subTitle: "Website for Nicholas Mallis",
          subInfo: "Built using HTML and CSS",
          imgSrc: nickmallis,
          link: "https://www.nicholasmallis.com",
          selected: false,
        },
        {
          id: 2,
          title: "Grand Vapids",
          subTitle: "Website for Grand Vapids",
          subInfo: "Built using HTML and CSS",
          imgSrc: grandvapids,
          link: "https://grandvapids.com",
          selected: false,
        },
      ],
    };
  }

  handleCardClick = (id, card) => {
    let items = [...this.state.items];

    items[id].selected = items[id].selected ? false : true;

    items.forEach((item) => {
      if (item.id !== id) {
        item.selected = false;
      }
    });

    this.setState({
      items,
    });
  };

  makeItems = (items) => {
    return items.map((item) => {
      return (
        <Card
          item={item}
          click={(e) => this.handleCardClick(item.id, e)}
          key={item.id}
        />
      );
    });
  };

  render() {
    return (
      <Container fluid={true}>
        <Row className="justify-content-around">
          {this.makeItems(this.state.items)}
        </Row>
      </Container>
    );
  }
}

export default Carousel;
