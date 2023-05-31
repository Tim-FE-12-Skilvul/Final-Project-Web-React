import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function ArticleDetails() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    axios
      .get(`https://64550ab8a74f994b33505ccc.mockapi.io/articles/${id}`)
      .then(response => setArticle(response.data))
      .catch(error => console.log(error));
  }, [id]);

  if (!article) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <div className="card">
      <h2 className="mt-4 mb-4">{article.title}</h2>
        <img
          src={article.urlToImage}
          className="card-img-top"
          alt={article.title}
          style={{ objectFit: 'cover', height: '500px' }}
        />
        <div className="card-body">
          <p className="card-text">{article.content}</p>
          <small className="text-muted">{article.publishedAt}</small>
        </div>
      </div>
    </div>
  );
}

export default ArticleDetails;
