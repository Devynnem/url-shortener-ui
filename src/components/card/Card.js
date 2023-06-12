import React from 'react';

const Card = ({ title, shortUrl, longUrl, id }) => {
  return (
    <div className="url">
        <h3>{title}</h3>
        <p>Original URL:  {longUrl}</p>
        <a>Shortened URL:  {shortUrl}</a>
    </div>
  )
};

export default Card;