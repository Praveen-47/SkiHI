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
            {/* <h3>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non
              mi lacinia, mollis mauris sed, finibus lectus. Cras sit amet
              condimentum neque. Sed varius urna ante, eget euismod risus
              tristique eget. Maecenas vehicula massa sit amet tristique
              pellentesque.
            </h3> */}
          </Col>
          <Col md={12}>
            <div className="single__benefit">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non
                mi lacinia, mollis mauris sed, finibus lectus. Cras sit amet
                condimentum neque. Sed varius urna ante, eget euismod risus
                tristique eget. Maecenas vehicula massa sit amet tristique
                pellentesque.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non
                mi lacinia, mollis mauris sed, finibus lectus. Cras sit amet
                condimentum neque. Sed varius urna ante, eget euismod risus
                tristique eget. Maecenas vehicula massa sit amet tristique
                pellentesque.
              </p>
            </div>
          </Col>
          <Col md={12}>
            <div className="single__benefit">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non
                mi lacinia, mollis mauris sed, finibus lectus. Cras sit amet
                condimentum neque. Sed varius urna ante, eget euismod risus
                tristique eget. Maecenas vehicula massa sit amet tristique
                pellentesque.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
