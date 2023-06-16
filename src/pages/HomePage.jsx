import { Container, Row, Col } from "react-bootstrap";
import { AuthContext } from "../context/AuthContext";
import HeroImage from "../assets/img/hero.png";

import { artikelTerbaru, dataSwiper, faq } from "../data/index";
import { useNavigate } from "react-router-dom";
import FaqComponent from "../components/FaqComponent";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const Homepage = () => {
  let naviget = useNavigate();
  return (
    <div className="homepage">
      <header className="w-100 min-vh-100 d-flex align-items-center overflow-hidden">
        <Container>
          <Row className="header-box d-flex align-items-center pt-lg-5">
            <Col lg="6">
              <h1 className="mb-4 animate__animated animate__fadeInUp animate__delay-1s">
                SIMAS <br />
                Sistem Informasi <span>Stunting</span>
              </h1>

              <p className="mb-4 animate__animated animate__fadeInUp animate__delay-1s">
                Sistem Informasi Stunting memberikan informasi, melakukan cek,
                dan memberikan konsultasi dengan dokter ahli untuk mengatasi
                masalah stunting.
              </p>
              <button
                className="btn btn-primary btn-lg rounded-1 me-2 mb-xs-0 mb-2 animate__animated animate__fadeInUp animate__delay-1s"
                onClick={() => naviget("/artikel")}
              >
                Lihat Selengkapnya
              </button>
              <button className="btn btn-outline-primary btn-lg rounded-1 me-2 mb-xs-0 mb-2 animate__animated animate__fadeInUp animate__delay-1s">
                Cek Stunting
              </button>
            </Col>

            <Col lg="6" className="pt-lg-0 pt-5">
              <img
                src={HeroImage}
                alt="hero-img"
                className="animate__animated animate__fadeInUp"
              />
            </Col>
          </Row>
        </Container>
      </header>

      <div className="artikel w-100 min-vh-100">
        <Container>
          <Row>
            <Col>
              <h1 className="text-center fw-bold">Artikel Terbaru</h1>
            </Col>
          </Row>
          <Row>
            {artikelTerbaru.map((artikelTerbaru) => {
              return (
                <Col
                  key={artikelTerbaru.id}
                  className="shadow rounded"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay={artikelTerbaru.delay}
                >
                  <img
                    src={artikelTerbaru.image}
                    alt="artikel-terbaru"
                    className="w-100 mb-5 rounded-top"
                  />
                  <h5 className="mb-5 px-3">{artikelTerbaru.title}</h5>

                  <div className="ket d-flex justify-content-between align-items-center px-3 pb-3">
                    <button className="btn btn-primary rounded-1 ">
                      {artikelTerbaru.baca}
                    </button>
                  </div>
                </Col>
              );
            })}
          </Row>
          <Row>
            <Col className="text-center">
              <button
                className="btn btn-primary rounded-5 btn-lg "
                onClick={() => naviget("/Artikel")}
                data-aos="fadeUp"
                data-aos-duration="1000"
              >
                Lihat Semua Artikel
                <i className="fa-solid fa-chevron-right ms-1"></i>
              </button>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="testimonial py-5">
        <Container>
          <Row>
            <Col>
              <h1 className="text-center fw-bold my-5">Testimonial</h1>
            </Col>
          </Row>
          <Row>
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                992: {
                  slidesPerView: 2,
                  spaceBetween: 50,
                },
                1200: {
                  slidesPerView: 3,
                  spaceBetween: 50,
                },
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              {dataSwiper.map((data) => {
                return (
                  <SwiperSlide key={data.id} className="shadow-sm">
                    <p className="desc">{data.desc}</p>
                    <div className="people">
                      <img src={data.image} alt="" />
                      <div>
                        <h5 className="mb-1">{data.name}</h5>
                        <p className="m-0 fw-bold">{data.status}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </Row>
        </Container>
      </div>
      {/* bagian FAQ */}
      <FaqComponent />
    </div>
  );
};

export default Homepage;
