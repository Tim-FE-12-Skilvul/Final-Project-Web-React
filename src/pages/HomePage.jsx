import { Container, Row, Col } from "react-bootstrap";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import HeroImage from "../assets/img/hero.png";

import { artikelTerbaru, dataSwiper, faq } from "../data/index";
import { useNavigate, Link } from "react-router-dom";
import FaqComponent from "../components/FaqComponent";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const HomePage = () => {
  let naviget = useNavigate();
  const [articles, setArticles] = useState([]);
  // const { userType } = useContext(AuthContext); // Get the isLoggedIn and userType values from the AuthContext

  useEffect(() => {
    fetch("https://64550ab8a74f994b33505ccc.mockapi.io/articles")
      .then(response => response.json())
      .then(data => {
        // Mengurutkan data berdasarkan tanggal terbaru
        data.sort((a, b) => b.id - a.id);
  
        // Mengambil 3 data teratas
        const filteredData = data.slice(0, 3);
  
        // Menyimpan data ke state articles
        setArticles(filteredData);
  
        // Lakukan tindakan lain yang diinginkan dengan data ini
        filteredData.forEach(item => {
          console.log(item);
        });
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.substr(0, maxLength) + "...";
  };

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
              <button className="btn btn-outline-primary btn-lg rounded-1 me-2 mb-xs-0 mb-2 animate__animated animate__fadeInUp animate__delay-1s"
              onClick={() => naviget("/cek")}
              >
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
            {articles.map((article) => {
              return (
                <Col
                  key={article.id}
                  className="shadow rounded"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay={article.delay}
                >
                  <img
                    src={article.urlToImage}
                    alt="artikel-terbaru"
                    className="w-100 mb-5 rounded-top"
                  />
                  <h5 className="mb-5 px-3">{truncateText(article.title, 85)}</h5>

                  <div className="ket d-flex justify-content-between align-items-center px-3 pb-3">
                  <Link
                        to={`/Artikel/${article.title}`}
                        state={{ id: article.id }}
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                    <button className="btn btn-primary rounded-1 ">
                        Baca Artikel
                    </button>
                      </Link>
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

export default HomePage;