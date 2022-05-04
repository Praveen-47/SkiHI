import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./About.css";
import NFT11 from '../../assets/images/nft7.jpeg'
import NFT8 from '../../assets/images/nft8.jpeg'
import NFT3 from '../../assets/images/nft3.jpeg'
import NFT5 from '../../assets/images/nft5.jpeg'


export const About = () => {
  return (
    <div className="about pd-b-100 pd-t-80" id="about">
      <Container>
        <Row>
          <Col md={6}>
              <div className="about__content">
              <h2>About</h2>
            <p>
              In ancient Atlantis, knowledge was embedded within the human
              cellular structure: DNA.
              <strong>
                {" "}
                A Thoth NFT will help to Awaken your potential, dormant DNA{" "}
              </strong>
              . The Emerald Tablets of Thoth are one of the portals for
              Awakening.
            </p>
            <p>
              Through sound, sacred numbers, light codes and more, these NFT’s
              have been embedded with the keys to unlock YOU. Through what we
              know today as morphic fields, your Thoth NFT will connect to your
              energy field and help awaken the locked potential within YOU. When
              viewing the Thoth NFT, prior to purchasing a Thoth NFT, you will
              have up to 24 hours where it will connect to your field. When you
              purchase the Thoth NFT, it will exclusively connect to your energy
              field /body for the Awakening properties as long as you own it.
            </p>
            <p>
              By owning a Thoth NFT, you will have access to exclusive member
              only perks like giveaways, future drops and weekly member calls
              including vibrational increase channelings, member questions on
              Awakening, and all things Awakened.
            </p>
              </div>
            
          </Col>
          <Col md={6}>
              <div className="about__img">
                  <Row>
                      <Col md={6}>
                          <img src={NFT11} alt=""/>
                      </Col>
                      <Col md={6}>
                          <img src={NFT8} alt="" />
                      </Col>
                      <Col md={6}>
                          <img src={NFT3} alt=""/>
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
