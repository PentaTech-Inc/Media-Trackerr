/**
 * Media Information
 * @summary Displays information about TV shows and movies.
 */

import React from 'react';
import Layout from '../components/Layout';
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button'
import TitlesCarousel from '../components/TitlesCarousel';
import TitlesList from '../components/TitlesList';
import 'bootstrap/dist/css/bootstrap.min.css';

import { FaStar } from 'react-icons/fa';

/* Test image */
import testBanner from '../assets/The_Office_Cover.png';


const body = {
    paddingTop: 30,
    paddingBottom: 100,
    paddingRight: '2.5%',
    paddingLeft: '2.5%',
    textAlign: 'center'
};

const colStyle = {
    paddingLeft: '2.5%',
    paddingRight: '2.5%'
};

const mediaCard = {
    display: 'block',
    width: '500px',    
};

const mediaBanner = {
    width: '500px',
};

const addButton = {
    display: 'block',
};

const mediaTitle = {
    color: 'black',
    textAlign: 'left'
}

const mediaDetails = {
    color: 'black',
    opacity: '.7',
    textAlign: 'left'
};

const mediaRating = {
    textAlign: 'left',
    fontSize: '20pt',
    marginTop: 10
};

const icon = {
    color: 'gold',
    width: 25,
    marginTop: '-5'
};

const votes = {
    color: 'black',
    opacity: '0.7',
    fontSize: '10pt',
};

const mediaSummary = {
    textAlign: 'left'
};


const MediaInfo = () => {
    
    return (
        <Layout fluid={true} style={body}>
            <Row>
                <Col style={colStyle}>
                    <div style={mediaCard}>
                        <img style={mediaBanner} src={testBanner} alt="banner"></img> 
                    </div>
                    <br />
                    <Button variant="primary" type="submit" style={addButton}>+&nbsp;&nbsp;Add to List</Button>
                </Col>
                <Col style={colStyle}>
                    <div>
                        <h3 style={mediaTitle}><strong>The Office</strong></h3>
                        <h6 style={mediaDetails}>
                            <span>TV Series</span>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;<span>2005 - 2013</span>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;<span>Comedy</span>
                        </h6>
                        
                        <div style={mediaRating}>
                            <FaStar size="xs" style={icon} />&nbsp;<span>8.8</span>&nbsp;&nbsp;
                            <span style={votes}>1,248,360 votes</span>
                        </div>

                        <hr />

                        <p style={mediaSummary}>
                            A mockumentary on a group of typical office workers, where the workday consists of ego clashes, inappropriate behavior, and tedium. A mediocre paper company in the hands of Scranton, PA branch manager Michael Scott. This mockumentary follows the everyday lives of the manager and the employees he "manages."
                        </p>
                        
                        <br /><hr />

                        <div>
                            <h4><strong>Details</strong></h4>
                            <p>
                                <strong>Creator:&nbsp;&nbsp;</strong>Blah <br />
                                <strong>Cast:&nbsp;&nbsp;</strong>Blah
                            </p>
                        </div>

                    </div>
                </Col>
            </Row>
        </Layout>
    );
};

export default MediaInfo;