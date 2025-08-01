import React from 'react';

const images = import.meta.glob('../../assets/gallery/*.{jpg,jpeg}', {
    eager: true,
    as: 'url'
});

const imageUrls: string[] = Object.values(images);

interface GalleryImagesProps {
    onSelect: (src: string) => void;
}

export const GalleryImages: React.FC<GalleryImagesProps> = ({ onSelect }) => {
    return (
        <>
            {imageUrls.map((src, idx) => (
                <div className="gallery-item" key={idx} onClick={() => onSelect(src)}>
                    <img src={src} alt={`Imagen ${idx + 1}`} />
                    <div className="gallery-overlay">
                        <i className="fas fa-search-plus"></i>
                    </div>
                </div>
            ))}
        </>
    );
};
