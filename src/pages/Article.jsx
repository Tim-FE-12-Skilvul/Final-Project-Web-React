import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Article() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios
      .get('https://64550ab8a74f994b33505ccc.mockapi.io/articles')
      .then(response => setArticles(response.data))
      .catch(error => console.log(error));
  }, []);

  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.substr(0, maxLength) + '...';
  };

  return (
    <div className="container">
      <h2 className="mt-4 mb-4">News</h2>
      <div className="row">
        {articles.map(article => (
          <div className="col-md-4 mb-4" key={article.id}>
            <Link to={`/article/${article.id}`} style={{ textDecoration: 'none' }}>
              <div className="card">
                <img
                  src={article.urlToImage}
                  className="card-img-top"
                  alt={article.title}
                  style={{ objectFit: 'cover', height: '200px' }}
                />
                <div className="card-body">
                  <h5 className="card-title">{truncateText(article.title, 60)}</h5>
                  <p className="card-text">{truncateText(article.description, 100)}</p>
                </div>
                <div className="card-footer">
                  <small className="text-muted">{article.publishedAt}</small>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Article;
