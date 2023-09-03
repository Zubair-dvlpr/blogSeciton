import React from 'react';
import './BlogSection.css'; // Import your CSS file

const blogPosts = [
  {
    id: 1,
    imageSrc: 'path/to/image1.jpg',
    date: 'September 1, 2023',
    title: 'Blog Post 1',
    shortDescription: 'Short description of the first blog post...',
    content: 'Content of the first blog post goes here...'
  },
  {
    id: 2,
    imageSrc: 'path/to/image2.jpg',
    date: 'August 25, 2023',
    title: 'Blog Post 2',
    shortDescription: 'Short description of the second blog post...',
    content: 'Content of the second blog post goes here...'
  },
  {
    id: 3,
    imageSrc: 'path/to/image2.jpg',
    date: 'August 25, 2023',
    title: 'Blog Post 3',
    shortDescription: 'Short description of the second blog post...',
    content: 'Content of the second blog post goes here...'
  },
  {
    id: 4,
    imageSrc: 'path/to/image2.jpg',
    date: 'August 25, 2023',
    title: 'Blog Post 4',
    shortDescription: 'Short description of the second blog post...',
    content: 'Content of the second blog post goes here...'
  },
  {
    id: 5,
    imageSrc: 'path/to/image2.jpg',
    date: 'August 25, 2023',
    title: 'Blog Post 5',
    shortDescription: 'Short description of the second blog post...',
    content: 'Content of the second blog post goes here...'
  },
  // Add more blog posts as needed
];

const BlogSection = () => {
  return (
    <div className="blog-section">
      <h2 className="main-heading">Luxelocker News</h2>
      <h3 className="sub-heading">Investing in Storage Units Blog - RV &amp; Boat Storage at Luxelocker</h3>
      <div className="blog-row">
        {blogPosts.map((blogPost) => (
          <div className="blog" key={blogPost.id}>
            <img src={blogPost.imageSrc} alt={blogPost.title} className="blog-image" />
            <div className="blog-details">
              <span className="blog-date">{blogPost.date}</span>
              <h4>{blogPost.title}</h4>
              <p className="short-description">{blogPost.shortDescription}</p>
              <div className="buttons">
                <button className="read-more-button">Read More</button>
                <button className="share-button">Share</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogSection;

