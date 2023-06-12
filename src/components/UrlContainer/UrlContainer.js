import React from 'react';
import Card from '../../components/card/Card'
import './UrlContainer.css';

const UrlContainer = ({ urls }) => {
  const urlEls = urls.map(url => {
    return (
      <Card 
      title={url.title}
      shortUrl={url.short_url}
      longUrl={url.long_url}
      key={url.id}
    />
    )
  });

  return (
    <section>
      { !urlEls.length && <p>No urls yet! Find some to shorten!</p> } 
      {urlEls}
    </section>
  )
};

export default UrlContainer;
