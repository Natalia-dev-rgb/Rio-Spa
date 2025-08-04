import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { GalleryImages } from '../components/layout/GalleryImages';
import { GalleryModal } from '../components/layout/GalleryModal';
import { Header } from '../components/layout/header';
import { Footer } from '../components/layout/footer';

export const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const { t } = useTranslation();

  return (
    <>
      <Header />
      <div>
        <section className="gallery-section">
          <div className="section-header">
            <h1>{t('Gallery.Title')}</h1>
            <p>{t('Gallery.Description')}</p>
          </div>

          <div className="gallery-grid" id="galleryGrid">
            <GalleryImages onSelect={setSelectedImage} />
          </div>
        </section>
        <GalleryModal image={selectedImage} onClose={() => setSelectedImage(null)} />
      </div>
      <Footer />
    </>
  );
};
