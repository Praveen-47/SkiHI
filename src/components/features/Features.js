import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Features.css";

export const Features = () => {
  return (
    <div className="features pd-b-100 pd-t-80" id="features">
      <Container>
        <Row>
          <Col md={12}>
            <h2>Features</h2>
          </Col>
          <Col md={6}>
            <div className="feature">
              <h3>BENEFITS</h3>
              <p>
                Ownership of an Awakened Human Thoth will help to Awaken your
                DNA and cellular structure in one of the 14 template programs.
                If you own all 14, you will awaken all 14 templates. These are
                in the form of Energetic Elixirs and Remembrance. This is done
                through the morphic field connection of you to your Awakened
                Human NFT. Your Awakening is for your benefit and the worlds, as
                we actively help raise the vibration of ourselves, which then
                assists the raising of the vibration on Earth.
              </p>
            </div>
          </Col>
          <Col md={6}>
            <div className="feature">
              <h3>PHILOSOPHY</h3>
              <p>
                To assist in Awakening humans to their full potential;
                empowering with the use of technology and the blockchain,
                programming and energy healing, and DNA activation and teachings
                for self- empowerment and enlightenment. Assist in awakening
                individuals, so they in turn create a higher vibrational
                reality. We utilize pure source, light and unity (Christ)
                consciousness.
              </p>
            </div>
          </Col>
          <Col md={6}>
            <div className="feature last">
              <h3>COMMON OBJECTIVE</h3>
              <p>
                Through NFT’s, teachings, gaming/metaverse: bring in source
                knowing’s, and activate cellular DNA to connect humans to their
                highest vibrational and enlightened sovereign state. In turn
                create a better, more loving world where we are awakened to live
                in harmony with all.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
