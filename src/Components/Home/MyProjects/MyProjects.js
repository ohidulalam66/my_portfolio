import React from 'react';
import { Card, Container, Row } from 'react-bootstrap';
import Flip from 'react-reveal/Flip';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';
import './MyProjects.css';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, { EffectCoverflow, Navigation, Pagination, Autoplay } from "swiper";

SwiperCore.use([EffectCoverflow, Navigation, Pagination, Autoplay]);

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
                        // style={{ padding: 50 }}
                        navigation={true}
                        effect={"coverflow"}
                        grabCursor={true}
                        // centeredSlides={true}
                        autoplay={{
                            "delay": 3000,
                            "disableOnInteraction": false
                        }}
                        slidesPerView={"auto"}
                        // loop={true}
                        coverflowEffect={{
                            "rotate": 50,
                            "stretch": 0,
                            "depth": 100,
                            "modifier": 1,
                            "slideShadows": true
                        }} pagination={true} className="mySwiper">
                        <SwiperSlide>
                            <Card.Img variant="top" className="w-100 img-fluid" src="https://i.ibb.co/TBt841d/juno1.png" />
                            <Card.Body>
                                <Card.Title>
                                    <h5>Miniature Things Related - Find Your Baby Toy</h5>
                                </Card.Title>
                                <Card.Text>
                                    <div className="text-center pb-5">
                                        <Link to={`/projects/1`}>
                                            <button className="btnContactMe text-decoration-none mx-2 my-5 px-3 py-2">
                                                <i className="fas fa-info-circle"></i> Detail
                                            </button>
                                        </Link>
                                    </div>
                                </Card.Text>
                            </Card.Body>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card.Img variant="top" className="w-100 img-fluid" src="https://i.ibb.co/gM0VRVc/travele2.png" />
                            <Card.Body>
                                <Card.Title>
                                    <h5>Tourism Related - Travel to places in Bangladesh</h5>
                                </Card.Title>
                                <Card.Text>
                                    <div className="text-center pb-5">
                                        <Link to={`/projects/2`}>
                                            <button className="btnContactMe text-decoration-none mx-2 my-5 px-3 py-2">
                                                <i className="fas fa-info-circle"></i> Detail
                                            </button>
                                        </Link>
                                    </div>
                                </Card.Text>
                            </Card.Body>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card.Img variant="top" className="w-100 img-fluid" src="https://i.ibb.co/5LcpkWQ/discover3.png" />
                            <Card.Body>
                                <Card.Title>
                                    <h5>Healthcare Related - Diagnostic Laboratory</h5>
                                </Card.Title>
                                <Card.Text>
                                    <div className="text-center pb-5">
                                        <Link to={`/projects/3`}>
                                            <button className="btnContactMe text-decoration-none mx-2 my-5 px-3 py-2">
                                                <i className="fas fa-info-circle"></i> Detail
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
                        <i className="fas fa-project-diagram"></i> See All Projects
                    </button>
                </Link>
            </div>
        </Container >
    );
};

export default MyProjects;

/*

*/