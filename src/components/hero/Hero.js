import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Hero.css";
import NFT12 from "../../assets/images/nft1.jpeg";
import Minus from "../../assets/images/minus.svg";
import Plus from "../../assets/images/plus.svg";
import $ from "jquery";
import Modal from "@mui/material/Modal";

var Web3 = require("web3");

export const Hero = ({
  mint,
  decrementMintAmount,
  incrementMintAmount,
  getData,
  config,
  mintAmount,
  dispatch,
  connect,
  data,
  blockchain,
}) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const displayMintModalHandler = (e) => {
    e.preventDefault();
    $(".mint__modal").addClass("show__modal");
    $(".backdrop").addClass("show-backdrop");
  };

  const removeModalHandler = () => {
    $(".mint__modal").removeClass("show__modal");
    $(".backdrop").removeClass("show-backdrop");
  };

  console.log(blockchain);
  return (
    <div className="hero pd-t-80 pd-b-100">
      <Container>
        <Row>
          <Col md={12}>
            <div className="hero__content">
              <h2>THE PROJECT CATS</h2>
              <img src={NFT12} alt="" width="300px" />
              <h3>Thoth's Emerald Tablet Collection</h3>
              <p className="p1">
                Awaken your cellular DNA: your power/abilities. More than
                digital art. Energetic codes are embedded into each of the 2800
                Thoth's. This is more than owning an NFT. It is empowering you
                to awaken. Enter the world of Thoth with your very own Energy
                Elixir- Thoth NFT.
              </p>
              <h4>
                If you are called to these, you are called for a reason. You are
                called to remember and awaken.
              </h4>
              <a href="" className="whitepaper">
                Join Our Discord
              </a>

              {blockchain.account === "" ||
              blockchain.smartContract === null ? (
                <>
                  <a
                    className="whitepaper mint"
                    onClick={(e) => {
                      e.preventDefault();
                      dispatch(connect());
                      getData();
                    }}
                  >
                    Connect
                  </a>
                </>
              ) : (
                <a className="whitepaper mint" onClick={handleOpen}>
                  Mint
                </a>
              )}
            </div>
          </Col>
        </Row>
      </Container>
      <Modal open={open} onClose={handleClose}>
        <div className="mint__modal">
          <h3>Mint NFT</h3>
          <p>10,000 NFTs</p>
          <div className="balance modal__flex">
            <h5>Total Supply </h5>
            <p>{data.totalSupply}</p>
          </div>
          <hr />
          <div className="amount modal__flex">
            <h5>Amount</h5>
            <div className="amount__buttons">
              <img src={Minus} onClick={decrementMintAmount} alt="" />
              <h5>{mintAmount}</h5>
              <img src={Plus} onClick={incrementMintAmount} alt="" />
            </div>
            <a className="whitepaper">Max</a>
          </div>
          <hr />
          <div className="total modal__flex">
            <h5>Total</h5>
            <p>
              {Web3.utils.fromWei(String(data.publicCost), "ether") *
                mintAmount}{" "}
              ETH
            </p>
          </div>
          <hr />
          <button onClick={mint}>MINT</button>
          <p>{blockchain.account ? blockchain.account : "Not connected"}</p>
        </div>
      </Modal>
    </div>
  );
};
