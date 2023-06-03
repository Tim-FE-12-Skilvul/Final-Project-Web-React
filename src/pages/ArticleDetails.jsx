import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useLocation, useParams, Link } from 'react-router-dom';

function ArticleDetails() {
  const [article, setArticle] = useState(null);
  const [relatedArticles, setRelatedArticles] = useState([]);
  const location = useLocation();

  useEffect(() => {
    axios
      .get(`https://64550ab8a74f994b33505ccc.mockapi.io/articles/${location.state.id}`)
      .then(response => setArticle(response.data))
      .catch(error => console.log(error));
  }, [location.state.id]);

  useEffect(() => {
    axios
      .get('https://64550ab8a74f994b33505ccc.mockapi.io/articles')
      .then(response => {
        const filteredArticles = response.data.filter(art => art.id !== location.state.id);
        setRelatedArticles(filteredArticles);
      })
      .catch(error => console.log(error));
  }, [location.state.id]);

  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.substr(0, maxLength) + "...";
  };

  if (!article) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-9">
          <div className="card">
            <h2 className="mt-2 mb-2" style={{ fontSize: '25px' }}>{article.title}</h2>
            <small className="mt-4 mb-2 " style={{ display: 'flex', justifyContent: 'start' }}> ▪️ {article.publishedAt}</small>
            <img
              src={article.urlToImage}
              className="card-img"
              alt={article.title}
              style={{ objectFit: 'cover', height: '250px' }}
            />
            <div className="card-body">
              <p className="card-text" style={{ textAlign: 'justify' }}>{article.content}</p>
            </div>
            <div className="card-footer">
              <small className=" " style={{ display: 'flex', justifyContent: 'center' }}>Sumber dari
                <a className="link-class" href={article.url} style={{ textDecoration: 'none', color: 'orange', marginLeft: '4px' }}>
                  {article.author}
                </a>
              </small>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          {relatedArticles.map(relatedArticle => (
            <div className="card mb-2 p-2" key={relatedArticle.id} style={{ display: 'flex', alignItems: 'center' }}>
              <Link
                to={`/article/${relatedArticle.title}`}
                state={{ id: relatedArticle.id }}
                style={{ textDecoration: "none", color: 'black' }}
              >
                <img
                  src={relatedArticle.urlToImage}
                  className="card-img"
                  alt={relatedArticle.title}
                  style={{ objectFit: 'cover', height: '100px' }}
                />
                <div className="card-body p-1">
                  <h5 className="card-title fs-6">{truncateText(relatedArticle.title, 65)}</h5>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ArticleDetails;
