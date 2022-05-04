import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Utility.css";

export const Utility = () => {
  return (
    <div className="utility pd-b-100 pd-t-80" id="utility">
      <Container>
        <Row>
          <Col md={12}>
            <h2>Benefits and Utilities</h2>
            <h3>
              When you purchase a Thoth NFT, you are not only getting access to
              an Awakening at your cellular level, you are also joining a
              community of Awakened humans.
            </h3>
          </Col>
          <Col md={12}>
            <div className="single__benefit">
              <p>
                THANK YOU to our community for investing in us and making this
                possible. This investment enables us to create products
                fulltime. More NFT collections, both the paid and free ones just
                for our collective: a Metaverse World "bring IN the light"
                world. A digital light world filled with meditation buildings
                and objects programmed with energy elixirs. a lot of free
                giveaways, to give back to our community and show our
                appreciation.
              </p>
            </div>
          </Col>
          <Col md={12}>
            <div className="single__benefit">
              <p>
                We will continue to access galactic energy and bring it into a
                form that is comprehended by your spirits and we thank you for
                your show of support.
              </p>
            </div>
          </Col>
          <Col md={12}>
            <div className="single__benefit">
              <p>
                All holders of an Awakened Human token automatically join the
                collective. This collective will receive remote group healing
                once per week. This remote group healing session will be done
                over a voice chat and participants are encouraged to discuss
                their experiences and to receive downloads from Awakened Human.
              </p>
            </div>
          </Col>
          <Col md={12}>
            <div className="single__benefit">
              <p>
                The reason our holding time is short is because we want our
                users to trade their NFT once the programming sets in, so the
                next member can receive the energetic gifts. That is why we
                offer you private NFTs that keep your wallet a member of our
                collective. This way you can work through Thoth's Emerald Tablet
                collection and then pass them on, still receiving the collective
                utility.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
