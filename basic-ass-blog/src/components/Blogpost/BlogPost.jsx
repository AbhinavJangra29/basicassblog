import React from 'react';
import './BlogPost.css'; // You can create a CSS file for BlogPost styles

const BlogPost = ({ title, author, date, content }) => {
    return (
        <div className="blog-post">
            <h2 className="blog-post-title">{title}</h2>
            <div className="blog-post-meta">
                <span className="blog-post-author">By {author}</span>
                <span className="blog-post-date">{date}</span>
            </div>
            <p className="blog-post-content">{content}</p>
            {/* Additional components or elements can be added here */}
        </div>
    );
};

export default BlogPost;
