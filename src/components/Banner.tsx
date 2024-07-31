import React from 'react';

interface BannerProps {
  title: string;
  description: string;
  cta: string;
  image: string;
  background: string;
  onEdit: () => void;
}

const Banner: React.FC<BannerProps> = ({ title, description, cta, image, background, onEdit }) => {
  return (
    <div style={{ backgroundImage: `url(${background})` }} className="banner">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
      <button>{cta}</button>
      <button onClick={onEdit} className="edit-button">Edit</button>
    </div>
  );
};

export default Banner;