import React, { useState } from 'react';
import './../../App.css';

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

    fetch('https://645611f25f9a4f23613a06ba.mockapi.io/news', {
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
    <div className='card col-lg-10 mx-auto bg-secondary-subtle text-light-emphasis' >
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
        <button type="submit" className='btn btn-dark'>Submit</button>
      </form>
    </div>
  );
}

export default NewArticle;
