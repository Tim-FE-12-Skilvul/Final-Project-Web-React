import React, { useEffect, useState } from 'react';
import { Row, Col } from "react-bootstrap";
import { useParams, useLocation } from 'react-router-dom';

function EditArticle() {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');
  const [url, setUrl] = useState('');
  const [urlToImage, setUrlToImage] = useState('');
  const [notification, setNotification] = useState('');

  const location = useLocation();

  useEffect(() => {
    fetch(`https://64550ab8a74f994b33505ccc.mockapi.io/articles/${location.state.id}`)
      .then(response => response.json())
      .then(data => {
        const { title, author, content, url, urlToImage } = data;
        setTitle(title);
        setAuthor(author);
        setContent(content);
        setUrl(url);
        setUrlToImage(urlToImage);
      })
      .catch(error => console.log(error));
  }, [id]);

  const handleEdit = () => {
    const articleData = {
      title,
      author,
      content,
      url,
      urlToImage,
    };

    fetch(`https://64550ab8a74f994b33505ccc.mockapi.io/articles/${location.state.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(articleData),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Article successfully updated:', data);
        setNotification('Article successfully updated');
        // Perform any necessary actions after successfully updating the article
      })
      .catch(error => {
        console.error('Error updating article:', error);
        setNotification('Error updating article');
        // Handle the error if updating the article fails
      });
  };

  const handleUrlToImageChange = e => {
    setUrlToImage(e.target.value);

    // Preview the image in real-time
    const img = new Image();
    img.src = e.target.value;
    img.onload = () => {
      if (img.width > 0 && img.height > 0) {
        // Set the image size
        const aspectRatio = img.width / img.height;
        const width = 200; // Set the desired width
        const height = width / aspectRatio;
        img.width = width;
        img.height = height;

        // Append the image preview to the document
        const previewContainer = document.getElementById('image-preview');
        previewContainer.innerHTML = '';
        previewContainer.appendChild(img);
      }
    };
  };

  return (
    <div className="faq">
      <Row className="fw-bold animate__animated animate__fadeInUp animate__delay-1s justify-content-center align-items-center">
<Col lg={5}>

      <h2 className="card-title fw-bold mb-3 text-center">Edit Artikel</h2>
      <form>
        <div className="mb-2">
          <input
            type="text"
            id="title"
            placeholder="Title"
            className="form-control"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-2">
          <input
            type="text"
            id="author"
            placeholder="Author"
            className="form-control"
            value={author}
            onChange={e => setAuthor(e.target.value)}
          />
        </div>
        <div className="mb-2">
          <textarea
            id="content"
            placeholder="Content"
            className="form-control"
            rows="4"
            value={content}
            onChange={e => setContent(e.target.value)}
          ></textarea>
        </div>
        <div className="mb-2">
          <input
            type="text"
            id="url"
            placeholder="URL"
            className="form-control"
            value={url}
            onChange={e => setUrl(e.target.value)}
          />
        </div>
        <div className="mb-2">
          <div id="image-preview" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            {urlToImage && (
              <img
                src={urlToImage}
                alt="Article"
                style={{width: '30%', height: 'auto', border: '2px solid black', marginBottom: '10px' }}
              />
            )}
          </div>
          <input
            type="text"
            id="urlToImage"
            placeholder="URL To Image"
            className="form-control"
            value={urlToImage}
            onChange={handleUrlToImageChange}
          />
        </div>
        {notification && <div className="alert alert-success text-center">{notification}</div>}
        <button type="button" className='btn btn-dark d-flex justify-content-center mx-auto' onClick={handleEdit}>
          Save Changes
        </button>
      </form>
</Col>
      </Row>
    </div>
  );
}

export default EditArticle;
