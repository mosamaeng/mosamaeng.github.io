import React, { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

interface Screenshot {
  src: string;
  caption: string;
}

interface ProjectGalleryProps {
  screenshots: Screenshot[];
}

export const ProjectGallery: React.FC<ProjectGalleryProps> = ({ screenshots }) => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const isOpen = lightboxIndex !== null;

  const openLightbox = (idx: number) => setLightboxIndex(idx);
  const closeLightbox = () => setLightboxIndex(null);

  const goNext = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % screenshots.length);
  }, [lightboxIndex, screenshots.length]);

  const goPrev = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + screenshots.length) % screenshots.length);
  }, [lightboxIndex, screenshots.length]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handler);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handler);
    };
  }, [isOpen, goNext, goPrev]);

  if (!screenshots || screenshots.length === 0) return null;

  return (
    <>
      {/* Thumbnail Grid */}
      <div className="gallery-grid">
        {screenshots.map((shot, idx) => (
          <button
            key={idx}
            className="gallery-thumb"
            onClick={() => openLightbox(idx)}
            aria-label={`View ${shot.caption}`}
          >
            <img
              src={shot.src}
              alt={shot.caption}
              loading="lazy"
              className="gallery-thumb-img"
            />
            <div className="gallery-thumb-overlay">
              <ZoomIn className="w-6 h-6" />
            </div>
            <div className="gallery-thumb-caption">
              {shot.caption}
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox Modal */}
      {isOpen && lightboxIndex !== null && (
        <div
          className="gallery-lightbox"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            className="gallery-lightbox-close"
            onClick={closeLightbox}
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Counter */}
          <div className="gallery-lightbox-counter">
            {lightboxIndex + 1} / {screenshots.length}
          </div>

          {/* Previous */}
          {screenshots.length > 1 && (
            <button
              className="gallery-lightbox-nav gallery-lightbox-prev"
              onClick={(e) => { e.stopPropagation(); goPrev(); }}
              aria-label="Previous image"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
          )}

          {/* Image */}
          <div
            className="gallery-lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={screenshots[lightboxIndex].src}
              alt={screenshots[lightboxIndex].caption}
              className="gallery-lightbox-img"
            />
            <div className="gallery-lightbox-caption">
              {screenshots[lightboxIndex].caption}
            </div>
          </div>

          {/* Next */}
          {screenshots.length > 1 && (
            <button
              className="gallery-lightbox-nav gallery-lightbox-next"
              onClick={(e) => { e.stopPropagation(); goNext(); }}
              aria-label="Next image"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
          )}
        </div>
      )}
    </>
  );
};
