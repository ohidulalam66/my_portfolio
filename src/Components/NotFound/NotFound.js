import React from 'react';
import { Container, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <>
            <Container className="extraMargin">
                <div className="d-flex justify-content-center">
                    <Image src="https://i.ibb.co/B4gXfpz/6-M513-removebg-preview.png" />
                </div>
                <Link to='/home'>
                    <button className="btnContactMe px-3 py-2 text-uppercase"><i className="fas fa-paper-plane"></i> Home
                    </button>
                </Link>
            </Container>
        </>
    );
};

export default NotFound;