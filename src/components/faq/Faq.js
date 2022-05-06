import React from "react";
import "./Faq.css";
import { Col, Container, Row } from "react-bootstrap";
import Plus from "../../assets/images/plus.svg";
import $ from "jquery";

export const Faq = () => {
  const showAnswerHandler = (e) => {
    const id = e.target.id;
    const answers = [...$(".answer")];
    const answer = answers.find((el) => el.id === id);
    $(answer).toggleClass("show-answer");
    const images = [...$(".question img")];
    const img = images.find((el) => el.id === id);
    $(img).toggleClass("rotate-icon");
    const questions = [...$(".question")];
    const question = questions.find((el) => el.id === id);
    $(question).toggleClass("question-bg");
    const buttons = [...$(".question button")];
    const button = buttons.find((el) => el.id === id);
    $(button).toggleClass("button-color")
  };

  return (
    <div className="faq pd-b-100 pd-t-80" id="faq">
      <Container>
        <Row>
          <Col md={12}>
            <h2>FAQ</h2>
          </Col>
          <Col md={12}>
            <div className="question" id="1">
              <h3 onClick={showAnswerHandler} id="1">
                <img src={Plus} alt="" id="1" />
                <button id="1">Lorem ipsum dolor sit amet?</button>
              </h3>

              <div className="answer" id="1">
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non
                mi lacinia, mollis mauris sed, finibus lectus. Cras sit amet
                condimentum neque. Sed varius urna ante, eget euismod risus
                tristique eget. Maecenas vehicula massa sit amet tristique
                pellentesque.
                </p>
              </div>
            </div>
          </Col>

          <Col md={12}>
            <div className="question" id="2">
              <h3 onClick={showAnswerHandler} id="2">
                <img src={Plus} alt="" id="2" />
                <button id="2">Lorem ipsum dolor sit amet?</button>
              </h3>

              <div className="answer" id="2">
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non
                mi lacinia, mollis mauris sed, finibus lectus. Cras sit amet
                condimentum neque. Sed varius urna ante, eget euismod risus
                tristique eget. Maecenas vehicula massa sit amet tristique
                pellentesque.
                </p>
              </div>
            </div>
          </Col>

          {/* <Col md={12}>
            <div className="question" id="2">
              <h3 onClick={showAnswerHandler} id="2">
                <img src={Plus} alt="" id="2" />
                <button id="2">
                  What are the benefits of owning an Awakened Human Thoth NFT?
                </button>
              </h3>

              <div className="answer" id="2">
                <p>
                  Raise your vibration. Each NFT is coded with one of the 14
                  codes mentioned. Depending on the NFT, you will awaken one of
                  the following for each of the NFT’s you purchase.
                </p>
                <Row>
                  <Col md={6}>
                    <ul>
                      <li> ‘I AM’ PEACE/BLISS </li>
                      <li>WISDOM OF ALL</li>
                      <li>MANIFESTATION STIMULATOR</li>
                      <li>TRUTH SEER/NO FEAR</li>
                      <li>‘I AM ‘ABUNDANCE </li>
                      <li>STATE OF WHY THINGS ARE</li>
                      <li>ACCESS ALL TIMELINES-DIMENSIONS</li>
                    </ul>
                  </Col>

                  <Col md={6}>
                    <ul>
                      <li>FOUNTAIN OF YOUTH STIMULATOR</li>
                      <li>CHRISTED CONSCIOUSNESS</li>
                      <li>ASTRAL TRAVEL</li>
                      <li>ATLANTIAN PAST LIVES</li>
                      <li>EGYPTIAN PAST LIVES</li>
                      <li>AKASHIC RECORDS</li>
                      <li>GALACTIC</li>
                    </ul>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>

          <Col md={12}>
            <div className="question" id="3">
              <h3 onClick={showAnswerHandler} id="3">
                <img src={Plus} alt="" id="3" />
                <button id="3">When will it launch?</button>
              </h3>

              <div className="answer" id="3">
                <p>July 1, 2022</p>
              </div>
            </div>
          </Col>

          <Col md={12}>
            <div className="question" id="4">
              <h3 onClick={showAnswerHandler} id="4">
                <img src={Plus} alt="" id="4" />
                <button id="4">How many can you mint?</button>
              </h3>

              <div className="answer" id="4">
                <p>
                  Up to 14. This covers one for each of the programs that have
                  been embedded into the Awakened Human Thoth NFT’s.
                </p>
              </div>
            </div>
          </Col>

          <Col md={12}>
            <div className="question" id="5">
              <h3 onClick={showAnswerHandler} id="5">
                <img src={Plus} alt="" id="5" />
                <button id="5">What is the Supply?</button>
              </h3>

              <div className="answer" id="5">
                <p>2800</p>
              </div>
            </div>
          </Col>

          <Col md={12}>
            <div className="question" id="6">
              <h3 onClick={showAnswerHandler} id="6">
                <img src={Plus} alt="" id="6" />
                <button id="6">How much does minting cost?</button>
              </h3>

              <div className="answer" id="6">
                <p>0.2 Ethereum</p>
              </div>
            </div>
          </Col>

          <Col md={12}>
            <div className="question" id="7">
              <h3 onClick={showAnswerHandler} id="7">
                <img src={Plus} alt="" id="7" />
                <button id="7">
                  How and where can I mint an Awakened Human Thoth?
                </button>
              </h3>

              <div className="answer" id="7">
                <p>On this website.</p>
              </div>
            </div>
          </Col>

          <Col md={12}>
            <div className="question" id="8">
              <h3 onClick={showAnswerHandler} id="8">
                <img src={Plus} alt="" id="8" />
                <button id="8">
                  What if I have questions around my integration of the energies
                  after I purchase?
                </button>
              </h3>

              <div className="answer" id="8">
                <p>
                  We will have weekly calls on our forum where the founding team
                  will be available to answer questions, discuss downloads and
                  bring in channeling around these programs, as well as share
                  their personal experiences in sacred sites in this world and
                  beyond, which led to sharing this gift with humanity.
                </p>
              </div>
            </div>
          </Col>

          <Col md={12}>
            <div className="question" id="9">
              <h3 onClick={showAnswerHandler} id="9">
                <img src={Plus} alt="" id="9" />
                <button id="9">What is the Awakened-Human Community?</button>
              </h3>

              <div className="answer" id="9">
                <p>
                  You will automatically be part of the Community when you
                  purchase your Thoth. In addition to the weekly calls,
                  described above, we will also have a private platform, where
                  you can ask questions from the founders and share your
                  experiences in regards to your Awakening and the Thoth NFT’s.
                </p>
              </div>
            </div>
          </Col>

          <Col md={12}>
            <div className="question" id="10">
              <h3 onClick={showAnswerHandler} id="10">
                <img src={Plus} alt="" id="10" />
                <button id="10">
                  What are possible energetic experiences from purchasing?
                </button>
              </h3>

              <div className="answer" id="10">
                <p>
                  Thoth NFT’s are energy elixirs with energy healing properties.
                  Like a spiritual healing journey, they may awaken feelings,
                  past remembrance, locked abilities, visions, etc. As energies
                  shift and rise, you may release feelings such as sadness,
                  anger. You may experience healing. You may have past life
                  remembrance, and you may release past life energies through
                  your physical body as the stuck energies release. As these
                  uniquely connect with you and Source, they will be different
                  for each person as for that person’s highest. Check out our
                  Discord for more on this topic.
                </p>
              </div>
            </div>
          </Col> */}
        </Row>
      </Container>
    </div>
  );
};
