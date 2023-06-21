import { Container, Row, Col } from "react-bootstrap";
import { testimonial } from "../data/index";

const TestimonialPage = () => {
  // Urutkan testimonial berdasarkan jumlah kata dalam desc secara descending
  const sortedTestimonials = testimonial.sort((a, b) => {
    const wordCountA = a.desc.split(" ").length;
    const wordCountB = b.desc.split(" ").length;
    return wordCountA - wordCountB;
  });

  return (
    <div className="testimonial-page">
      <div className="testimonial">
        <Container>
          <Row className="mb-5">
            <Col>
              <h1 className="text-center fw-bold animate__animated animate__fadeInUp animate__delay-1s">
                Semua Testimonial
              </h1>
            </Col>
          </Row>
          <Row className="row-cols-lg-3 row-cols-1">
            {sortedTestimonials.map((data) => {
              return (
                <Col key={data.id} className="mb-5">
                  <div className="card h-100 p-3">
                    <p className="card-text desc">{data.desc}</p>
                    <div className="card-body d-flex align-items-end">
                      <img
                        src={data.image}
                        alt=""
                        className="rounded-circle me-3"
                        style={{ width: "70px", height: "70px" }}
                      />
                      <div>
                        <h5 className="card-title mb-1">{data.name}</h5>
                        <p className="card-text fw-bold">{data.status}</p>
                      </div>
                    </div>
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

export default TestimonialPage;
