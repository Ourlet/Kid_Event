import { withTheme } from '@emotion/react';
import React from 'react';

const Email_template_list = ({ name, email, events }) => {
    return (
      <section className="section-center" style={{display: "grid",
        gap: "2rem"}}>
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <h1 style={{ textAlign: 'center', fontSize: '24px', marginBottom: '30px' }}>Your Event List</h1>
        <p style={{ fontSize: '16px', lineHeight: '1.5', marginBottom: '20px' }}>Hello {name},</p>
      </div>

      {events.map((event) => {
        const { id: id, title: title, date: date, location: location, link: link, image:image } = event

        return <article key={id} style={{
          background: "white",
          color: "black",
        }}>
          <footer>
            <img src={image} className="img"/>
            <h5>{title}</h5>
            <p>{location}</p>
            <p>{date}</p>
            <a href={link} target="_blank">Original Source</a>
            <button className="like-btn">Like</button>
          </footer>
        </article>
      })}
      </section>
    );
  };
  
  export default Email_template_list;