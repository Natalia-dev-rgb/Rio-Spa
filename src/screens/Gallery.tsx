import React, { useState } from 'react';
import { GalleryImages } from '../components/layout/GalleryImages';
import { GalleryModal } from '../components/layout/GalleryModal';
import { Header } from '../components/layout/header';
import { Footer } from '../components/layout/footer';

export const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <Header />
      <div>
        <section className="gallery-section">
          <div className="section-header">
            <h1>Gallery</h1>
            <p>
              Discover our wellness space and the unique experiences we offer in every session.
            </p>
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