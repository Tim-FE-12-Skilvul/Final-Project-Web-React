import React, { useState } from 'react';
import {Row, Col} from 'react-bootstrap';

function NewArticle() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');
  const [url, setUrl] = useState('');
  const [urlToImage, setUrlToImage] = useState('');
  const [publishedAt, setPublishedAt] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const articleData = {
      title,
      author,
      content,
      url,
      urlToImage,
      publishedAt,
    };

    fetch('https://64550ab8a74f994b33505ccc.mockapi.io/articles', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(articleData),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Article successfully created:', data);
        // Perform any necessary actions after successfully creating the article
      })
      .catch(error => {
        console.error('Error creating article:', error);
        // Handle the error if creating the article fails
      });

    // Reset the form fields
    setTitle('');
    setAuthor('');
    setContent('');
    setUrl('');
    setUrlToImage('');
    setPublishedAt('');
  };

  return (
    <>
    <div className="faq">
    <Row className="fw-bold animate__animated animate__fadeInUp animate__delay-1s justify-content-center align-items-center">
      <Col lg={5}>
      <h2 className='card-title fw-bold mb-3 text-center'>Create New Article</h2>
      <form onSubmit={handleSubmit}>
        <div className='mb-2'>
          <input
            type="text"
            id="title"
            placeholder='Title'
            className='form-control'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className='mb-2'>
        <input
            type="text"
            id="author"
            placeholder='Author'
            className='form-control'
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <div className='mb-2'>
          <textarea
            id="content"
            placeholder='Content'
            className='form-control'
            rows="2"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>
        <div className='mb-2'>
          <input
            type="text"
            placeholder='URL'
            className='form-control'
            id="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </div>
        <div className='mb-2'>
          <input
            type="text"
            placeholder='URL Image'
            className='form-control'
            id="urlToImage"
            value={urlToImage}
            onChange={(e) => setUrlToImage(e.target.value)}
          />
        </div>
        <div className='mb-4'>
          <input
            type="text"
            placeholder='Published At'
            className='form-control'
            id="publishedAt"
            value={publishedAt}
            onChange={(e) => setPublishedAt(e.target.value)}
          />
        </div>
        <button type="submit" className='btn btn-dark d-flex justify-content-center mx-auto'>Submit</button>
      </form>
      </Col>
    </Row>
    </div>
    </>
  );
}

export default NewArticle;
