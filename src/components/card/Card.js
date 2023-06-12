import React from 'react';
import './Card.css'

const Card = ({ title, shortUrl, longUrl, id }) => {
  return (
    <div className="url">
        <h3>{title}</h3>
        <a>Shortened URL:  {shortUrl}</a>
        <p>Original URL:  {longUrl}</p>
    </div>
  )
}

export default Card;