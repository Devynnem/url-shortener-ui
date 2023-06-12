import React from 'react';
import Card from '../../components/card/Card'
import './UrlContainer.css';

const UrlContainer = props => {
  const urlEls = props.urls.map(url => {
    console.log(props.urls)
    return (
      <Card 
      title={url.title}
      shortUrl={url.short_url}
      longUrl={url.long_url}
      key={url.key}
    />
      // <div className="url">
      //   <h3>{url.title}</h3>
      //   <a href={url.short_url} target="blank">{url.short_url}</a>
      //   <p>{url.long_url}</p>
      // </div>
    )
  });

  return (
    <section>
      {/* { !urlEls.length ? urlEls : <p>No urls yet! Find some to shorten!</p> } */}
      { !urlEls.length && <p>No urls yet! Find some to shorten!</p> } 
      {urlEls}
    </section>
  )
}

export default UrlContainer;
