import React from 'react';

interface GalleryModalProps {
    image: string | null;
    onClose: () => void;
}

export const GalleryModal: React.FC<GalleryModalProps> = ({ image, onClose }) => {
    if (!image) return null;

    return (
        <div className="modal active" id="imageModal" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <span className="modal-close" id="modalClose" onClick={onClose}>
                    <i className="fas fa-times"></i>
                </span>
                <img id="modalImage" src={image} alt="Imagen ampliada" />
            </div>
        </div>
    );
};
