import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Roadmap.css";
import Arrow from "../../assets/images/arrow.png";

export const Roadmap = () => {
  return (
    <div className="roadmap pd-b-100 pd-t-80" id="roadmap">
      <Container>
        <Row>
          <Col md={12}>
            <h2>Roadmap</h2>
          </Col>
          <Col md={6}></Col>
          <Col md={6} className="sec-1">
            <div className="roadmap__content">
              <h2>10%</h2>
              <p>
                This project has been in creation for over 3 months. 7,777
                computer generated Rare High Quality 3D Project Cat NFT’s made
                up of over 130 traits that will soon be taking over the meta
                verse. 200 random Project Cats will be held in the treasury
                wallet for marketing and giveaways. Special announcements will
                be made along the way.
              </p>
              <img src={Arrow} alt="" />
            </div>
          </Col>
          <Col md={6} className="sec-2">
            <div className="roadmap__content">
              <h2>20%</h2>
              <p>
                Build the community on twitter and discord. Daily Giveaways &
                more! Continue to market The Project Cats brand. Announce mint
                information. We will always be and stay transparent with our
                community. We take pride in the quality of work we give the
                community
              </p>
              <img src={Arrow} className="arrow-2" alt="" />
            </div>
          </Col>
          <Col md={6} className="sec-3">
            <div className="roadmap__content">
              <h2>35%</h2>
              <p>
                The Project Cats will have a whitelist mint for their loyal
                members. The first 500 discord members and 500 twitter followers
                will get this. A discounted mint price to show some love. We
                will begin the public mint soon after.
              </p>
              <img src={Arrow} alt="" />
            </div>
          </Col>
          <Col md={6} className="sec-4">
            <div className="roadmap__content">
              <h2>50%</h2>
              <p>
                Once every Project Cat has been minted and is chillin in the
                home of its new owner, we will begin our entrance into the meta
                verse. Will will purchase a meta verse property and build a
                corner for The Project Cats to chill & wreck havoc on. The first
                2000 wallet addresses who mint a Project Cat will get a free NFT
                from the next 3D project by SkyHiLabs. This is currently is
                development and we will release updates along the way for our
                community to see.
                <br />
                <strong>
                  A bonus to those who supported The Project Cats:
                </strong>
                <br />
                After selling out & revealing, the top ten (Epic) rarity ranked
                project cats will each get 2 ETH. We will announce those wallet
                address winners on our discord 1 week after the reveal is
                completed.
              </p>
              <img src={Arrow} alt="" className="arrow-2" />
            </div>
          </Col>
          <Col md={6} className="sec-5">
            <div className="roadmap__content">
              <h2>75%</h2>
              <p>
                We will be donating 20% of mint funds to a charitable
                organization. We have a few non-profits in mind and will allow
                our community to vote on which we will donate the 20% to. 50% of
                all royalties will be given back to The Project Cat Holders
                monthly!
              </p>
              <img src={Arrow} alt="" />
            </div>
          </Col>
          <Col md={6} className="sec-6">
            <div className="roadmap__content">
              <h2>100%</h2>
              <p>
                There has been something on the black market that has been
                making the project cats feel very unlike they have ever felt. A
                project cat said he was turning green, one said he was growing a
                3rd arm, and another said he felt like a zombie. Your not going
                to want to miss out on this!
              </p>
              <img src={Arrow} className="arrow-2" alt="" />
            </div>
          </Col>
          <Col md={6} className="sec-7">
            <div className="roadmap__content">
              <h2>SkiHiLabs <br/> Continues</h2>
              <p>
                SkiHiLabs will continue to support our community with future
                giveaways, airdrops, and much more. SkiHiLabs NFT owners will
                get access to future drops before the public mint. This is just
                the beginning of our meta verse journey! Stay tuned for more
                information & exciting news!
              </p>
              {/* <img src={Arrow} alt="" /> */}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
