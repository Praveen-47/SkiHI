import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './Team.css'
import NFT1 from '../../assets/images/nft1.jpeg'
import NFT11 from '../../assets/images/nft11.jpeg'
import NFT9 from '../../assets/images/nft9.jpeg'

export const Team = () => {
  return (
    <div className="team pd-b-100 pd-t-80" id="team">
        <Container>
            <Row>
                <Col md={12}>
                    <h2>Team</h2>
                </Col>
                <Col md={4}>
                    <div className="team__member">
                        <img src={NFT9} alt="" />
                        <div className="member__details">
                        <h3>Thoth</h3>
                        <p>Co-Founder, Blockchain & Technology mastermind</p>
                        </div>
                    </div>
                </Col>

                <Col md={4}>
                    <div className="team__member">
                        <img src={NFT1} alt="" />
                        <div className="member__details">
                        <h3>Awakened Human- Agar</h3>
                        <p>Co-founder and Energy Coder</p>
                        </div>
                        
                    </div>
                </Col>

                <Col md={4}>
                    <div className="team__member">
                        <img src={NFT11} alt="" />
                        <div className="member__details">
                        <h3>Social Media Coordinator</h3>
                        </div>
                        
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}
