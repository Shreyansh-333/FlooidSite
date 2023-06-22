import React from 'react';

const Card = ({ title, body }) => {
  const cardStyle = {
    width: '30%',
    margin: '0 auto',
    backgroundColor: '#f8f9fa',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    marginBottom: '20px',
    display: 'flex',
    justifyContent: 'center',
    borderRadius: '20px',
  };

  const contentStyle = {
    display: 'flex',
    alignItems: 'center',
  };

  const leftColumnStyle = {
    flex: 1,
  };

  const rightColumnStyle = {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end',
  };

  const titleStyle = {
    marginTop: '0',
  };

  const textStyle = {
    marginBottom: '0',
  };

  const imageStyle = {
    width: '100%',
    height: 'auto',
    maxWidth: '200px',
    maxHeight: '200px',
    objectFit: 'cover',
    borderRadius: '20px',
  };

  return (
    <div style={cardStyle}>
      <div style={contentStyle}>
        <div style={leftColumnStyle}>
          <h5 style={titleStyle}>{title}</h5>
          <p style={textStyle}>{body}</p>
        </div>
        <div style={rightColumnStyle}>
          <img src="https://placeimg.com/200/200/cats" alt="Superhero" style={imageStyle} />
        </div>
      </div>
    </div>
  );
};

export default Card;
