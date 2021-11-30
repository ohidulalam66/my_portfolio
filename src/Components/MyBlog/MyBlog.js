import React from 'react';
import { Container, Image } from 'react-bootstrap';
import Flip from 'react-reveal/Flip';

const MyBlog = () => {
    return (
        <>
            <Container className="extraMargin">
                <h3 className="py-4 text-center text-danger">
                    <Flip top cascade>
                        <span>
                            <i className="fab fa-blogger-b"></i> My Blog
                        </span>
                    </Flip>
                </h3>
                <div className="d-flex justify-content-center">
                    <Image className="w-50" src="https://i.ibb.co/tD7XVdn/abstract-grunge-style-coming-soon-with-black-splatter-1017-26690.webp"></Image>
                </div>
            </Container>
        </>
    );
};

export default MyBlog;