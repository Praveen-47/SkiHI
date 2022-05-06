import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./About.css";
import NFT11 from "../../assets/images/nft7.jpeg";
import NFT8 from "../../assets/images/nft8.jpeg";
import NFT3 from "../../assets/images/nft3.jpeg";
import NFT5 from "../../assets/images/nft5.jpeg";

export const About = () => {
  return (
    <div className="about pd-b-100 pd-t-80" id="about">
      <Container>
        <Row>
          <Col md={6}>
            <div className="about__content">
              <h2>About</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non
                mi lacinia, mollis mauris sed, finibus lectus. Cras sit amet
                condimentum neque. Sed varius urna ante, eget euismod risus
                tristique eget. Maecenas vehicula massa sit amet tristique
                pellentesque.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non
                mi lacinia, mollis mauris sed, finibus lectus. Cras sit amet
                condimentum neque. Sed varius urna ante, eget euismod risus
                tristique eget. Maecenas vehicula massa sit amet tristique
                pellentesque.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non
                mi lacinia, mollis mauris sed, finibus lectus. Cras sit amet
                condimentum neque. Sed varius urna ante, eget euismod risus
                tristique eget. Maecenas vehicula massa sit amet tristique
                pellentesque.
              </p>
            </div>
          </Col>
          <Col md={6}>
            <div className="about__img">
              <Row>
                <Col md={6}>
                  <img src={NFT11} alt="" />
                </Col>
                <Col md={6}>
                  <img src={NFT8} alt="" />
                </Col>
                <Col md={6}>
                  <img src={NFT3} alt="" />
                </Col>
                <Col md={6}>
                  <img src={NFT5} alt="" />
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
