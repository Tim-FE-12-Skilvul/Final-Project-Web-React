import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { Link } from "react-router-dom";

function Article() {
  const [articles, setArticles] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(true); // State untuk status login

  useEffect(() => {
    axios
      .get("https://64550ab8a74f994b33505ccc.mockapi.io/articles")
      .then((response) => setArticles(response.data))
      .catch((error) => console.log(error));
  }, []);

  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.substr(0, maxLength) + "...";
  };

  return (
    <div className="container">
      <h2 className="mt-4 mb-4">News</h2>
      <div className="row">
        {articles.map((article) => (
          <div className="col-md-4 mb-4" key={article.id}>
            <Link
              to={`/article/${article.title}`}
              state={{ id: article.id }}
              style={{ textDecoration: "none" }}
            >
              <div className="card p-3">
                <img
                  src={article.urlToImage}
                  className="card-img-top"
                  alt={article.title}
                  style={{ objectFit: "cover", height: "200px" }}
                />
                <div className="card-body">
                  <h5 className="card-title" style={{ fontSize:'18px' }}>
                    {truncateText(article.title, 60)}
                  </h5>
                  <p className="card-text" style={{ textAlign: 'justify' }}>
                    {truncateText(article.content, 90)}
                  </p>
                </div>
                <div className="card-footer">
                  <small className="text-muted">{article.publishedAt}</small>
                </div>
              </div>
            </Link>
          </div>
        ))}
        {isLoggedIn && (
            <Link to="/newarticle" className="btn btn-dark">Create New Article</Link>
        )}
      </div>
    </div>
  );
}

export default Article;
