import React from 'react';
import { Card, Container, Row } from 'react-bootstrap';
import Flip from 'react-reveal/Flip';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';
import './MyProjects.css';

// Import Swiper styles
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';

import { Swiper, SwiperSlide } from 'swiper/react';

const MyProjects = () => {

    return (
        <Container>
            <h3 className="my-5 text-center text-danger mb-4 underLine">
                <Flip top cascade>
                    <span>
                        <i className="fab fa-staylinked"></i> All Projects
                    </span>
                </Flip>
            </h3>
            <Row className="my-5">
                <Fade bottom>
                    <Swiper
                        // install Swiper modules
                        spaceBetween={50}
                        slidesPerView={3}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                    >
                        <SwiperSlide>
                            <Card.Img variant="top" src="https://i.ibb.co/p0y0FgQ/juno.png" />
                            <Card.Body>
                                <Card.Title>
                                    <h6>Miniature Things Related - Find Your Baby Toy</h6>
                                </Card.Title>
                                <Card.Text>
                                    <div className="text-center pb-5">
                                        <Link to="/projects">
                                            <button className="btnContactMe text-decoration-none mx-2 px-3 py-2">
                                                Detail
                                            </button>
                                        </Link>
                                    </div>
                                </Card.Text>
                            </Card.Body>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card.Img variant="top" src="https://i.ibb.co/d4fb69d/travel.png" />
                            <Card.Body>
                                <Card.Title>
                                    <h6>Tourism Related - Travel to places in Bangladesh</h6>
                                </Card.Title>
                                <Card.Text>
                                    <div className="text-center pb-5">
                                        <Link to="/projects">
                                            <button className="btnContactMe text-decoration-none mx-2 px-3 py-2">
                                                Detail
                                            </button>
                                        </Link>
                                    </div>
                                </Card.Text>
                            </Card.Body>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card.Img variant="top" src="https://i.ibb.co/c2b83Kk/discover.png" />
                            <Card.Body>
                                <Card.Title>
                                    <h6>Healthcare Related - Diagnostic Laboratory</h6>
                                </Card.Title>
                                <Card.Text>
                                    <div className="text-center pb-5">
                                        <Link to="/projects">
                                            <button className="btnContactMe text-decoration-none mx-2 px-3 py-2">
                                                Detail
                                            </button>
                                        </Link>
                                    </div>
                                </Card.Text>
                            </Card.Body>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card.Img variant="top" src="https://i.ibb.co/dDFBy84/draw.png" />
                            <Card.Body>
                                <Card.Title>
                                    <h6>EveryOne Can Draw - Drawspace</h6>
                                </Card.Title>
                                <Card.Text>
                                    <div className="text-center pb-5">
                                        <Link to="/projects">
                                            <button className="btnContactMe text-decoration-none mx-2 px-3 py-2">
                                                Detail
                                            </button>
                                        </Link>
                                    </div>
                                </Card.Text>
                            </Card.Body>
                        </SwiperSlide>
                    </Swiper>
                </Fade>
            </Row>
            <div className="text-center">
                <Link to="/projects">
                    <button className="btnContactMe text-decoration-none mx-2 px-3 py-2">
                        See All Projects
                    </button>
                </Link>
            </div>
        </Container >
    );
};

export default MyProjects;

/*

*/