import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { AuthContext } from "../context/AuthContext";

const ArtikelPage = () => {
  const [articles, setArticles] = useState([]);
  const { userType } = useContext(AuthContext); // Get the isLoggedIn and userType values from the AuthContext

  useEffect(() => {
    fetch("https://64550ab8a74f994b33505ccc.mockapi.io/articles")
      .then((response) => response.json())
      .then((data) => setArticles(data))
      .catch((error) => console.log(error));
  }, []);

  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.substr(0, maxLength) + "...";
  };

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
                  <h5 className="mb-5 px-3">
                    {truncateText(article.title, 43)}
                  </h5>
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
          {userType === "admin" && (
            <Row className="mt-2 justify-content-center">
              <Link to="/Artikel/newarticle" className=" btn btn-dark">
                Tambah Artikel Baru
              </Link>
            </Row>
          )}
        </Container>
      </div>
    </div>
  );
};

export default ArtikelPage;
