import { Container, Row, Col } from "react-bootstrap";
import { semuaArtikel } from "../data/index";

const ArtikelPage = () => {
  return (
    <div className="artikel-page">
      <div className="artikel min-vh-100">
        <Container>
          <Row>
            <Col>
              <h1 className="fw-bold text-center animate__animated animate__fadeInUp animate__delay-1s">
                Semua Artikel
              </h1>
            </Col>
          </Row>
          <Row>
            {semuaArtikel.map((artikelTerbaru) => {
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
        </Container>
      </div>
    </div>
  );
};

export default ArtikelPage;
