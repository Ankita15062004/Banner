import React, { useState } from 'react';

interface EditBannerProps {
  banner: any;
  onSave: (updatedBanner: any) => void;
  onClose: () => void;
}

const backgroundTemplates = [
  "https://bannerbot-public.s3.ap-south-1.amazonaws.com/templates/5/square.png",
  "https://bannerbot-public.s3.ap-south-1.amazonaws.com/templates/9/square.png",
  "https://bannerbot-public.s3.ap-south-1.amazonaws.com/templates/1/square.png",
  "https://bannerbot-public.s3.ap-south-1.amazonaws.com/templates/15/square.png"
];

const EditBanner: React.FC<EditBannerProps> = ({ banner, onSave, onClose }) => {
  const [title, setTitle] = useState(banner.title);
  const [description, setDescription] = useState(banner.description);
  const [cta, setCta] = useState(banner.cta);
  const [image, setImage] = useState(banner.image);
  const [background, setBackground] = useState(banner.background);

  const handleSave = () => {
    onSave({ title, description, cta, image, background });
  };

  return (
    <div className="edit-banner">
      <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
      <input value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
      <input value={cta} onChange={(e) => setCta(e.target.value)} placeholder="CTA" />
      <input value={image} onChange={(e) => setImage(e.target.value)} placeholder="Image URL" />
      <select value={background} onChange={(e) => setBackground(e.target.value)}>
        {backgroundTemplates.map((template, index) => (
          <option key={index} value={template}>{template}</option>
        ))}
      </select>
      <button onClick={handleSave}>Save</button>
      <button onClick={onClose}>Cancel</button>
    </div>
  );
};

export default EditBanner;