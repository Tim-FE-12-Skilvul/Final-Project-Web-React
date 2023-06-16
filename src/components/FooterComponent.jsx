import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const FooterComponent = () => {
  return (
    <div className="footer py-5">
      <Container>
        <Row className="d-flex justify-content-between">
          <Col lg="5">
            <h3 className="fw-bold">SIMAS</h3>
            <p className="desc">
              Sistem Informasi Stunting memberikan layanan informasi, melakukan
              cek, dan memberikan konsultasi dengan dokter ahli untuk mengatasi
              masalah stunting.
            </p>
            <div className="no mb-1 mt-4">
              <Link className="text-decoration-none">
                <i className="fa-brands fa-whatsapp"></i>
                <p className="m-0">+62 123-4567-0412</p>
              </Link>
            </div>
            <div className="mail">
              <Link className="text-decoration-none">
                <i className="fa-regular fa-envelope"></i>
                <p className="m-0">simasbyfe12@gmail.com</p>
              </Link>
            </div>
          </Col>
          <Col className="d-flex flex-column col-lg-2 col mt-lg-0 mt-5 ">
            <h5 className="fw-bold">Menu</h5>
            <Link to="/">Home</Link>
            <Link to="Artikel">Artikel</Link>
            <Link to="testimonial">Testimonial</Link>
            <Link to="faq">FAQ</Link>
            <Link to="cek">Cek Stunting</Link>
            <Link to="konsul">Konsultasi</Link>
          </Col>
          <Col lg="4" className="mt-lg-0 mt-5">
            <h5 className="fw-bold mb-3">Ikuti Untuk Informasi Terbaru</h5>
            <div className="ikut">
              <input type="text" placeholder="Email..." />
              <button className="btn btn-primary rounded-end rounded-0">
                Ikuti Sekarang
              </button>
            </div>
            <div className="social mt-3">
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-youtube"></i>
              <i className="fa-brands fa-instagram"></i>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="text-center px-md-0 px-3">
              &copy; Copyright {new Date().getFullYear()} by
              <span className="fw-bold"> SIMAS FE-12</span> , All Right Reserved
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FooterComponent;
