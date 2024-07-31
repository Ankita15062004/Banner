import React, { useState } from 'react';
import Banner from '../components/Banner';
import EditBanner from '../components/EditBanner';
import bannersData from '../../public/banners.json';
import '../../styles/globals.css';

const Home: React.FC = () => {
  const [banners, setBanners] = useState(bannersData);
  const [selectedBanner, setSelectedBanner] = useState<number | null>(null);

  const handleEdit = (index: number) => {
    setSelectedBanner(index);
  };

  const handleSave = (index: number, updatedBanner: any) => {
    const updatedBanners = [...banners];
    updatedBanners[index] = updatedBanner;
    setBanners(updatedBanners);
    setSelectedBanner(null);
  };

  return (
    <div>
      {banners.map((banner, index) => (
        <Banner
          key={index}
          title={banner.title}
          description={banner.description}
          cta={banner.cta}
          image={banner.image}
          background={banner.background}
          onEdit={() => handleEdit(index)}
        />
      ))}
      {selectedBanner !== null && (
        <EditBanner
          banner={banners[selectedBanner]}
          onSave={(updatedBanner) => handleSave(selectedBanner, updatedBanner)}
          onClose={() => setSelectedBanner(null)}
        />
      )}
    </div>
  );
};

export default Home;