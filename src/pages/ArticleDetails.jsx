import React, { useEffect, useState, useContext } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

function ArticleDetails() {
  const [article, setArticle] = useState(null);
  const [relatedArticles, setRelatedArticles] = useState([]);
  const { userType } = useContext(AuthContext);
  const location = useLocation();

  useEffect(() => {
    fetch(`https://64550ab8a74f994b33505ccc.mockapi.io/articles/${location.state.id}`)
      .then(response => response.json())
      .then(data => {
      setArticle(data);
      console.log(data);
    })
      .catch(error => console.log(error));
  }, [location.state.id]);

  useEffect(() => {
    fetch('https://64550ab8a74f994b33505ccc.mockapi.io/articles')
      .then(response => response.json())
      .then(data => {
        const filteredArticles = data.filter(art => art.id !== location.state.id);
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
    <div className="article-container" style={{ maxWidth: "1280px", margin: "0 auto", padding: "2rem", textAlign: "center" }}>
      <div className="row">
        <div className="col-lg-9">
          <div className="card" style={{ padding: "2em" }}>
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
          {userType === "admin" && (
            <Link to={`/article/editarticle/${article.title}`}
              state={{ id: article.id }}
              style={{ textDecoration: "none" }}
              className="btn btn-dark mt-2 mx-3">
              Edit Article
            </Link>
          )}
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