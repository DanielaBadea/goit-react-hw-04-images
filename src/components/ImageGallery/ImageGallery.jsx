import React, { forwardRef } from "react";
import styles from './ImageGallery.module.css'
import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem";
import PropTypes from 'prop-types';

const ImageGallery = forwardRef(({ images, openModal }, ref) => {
  if (images.length === 0) {
    return null;
  }

  return (
    <ul ref={ref} className={styles.gallery}>
      {images.map((image,id) => (
        <li key={id}>
          <ImageGalleryItem image={image} openModal={openModal} />
        </li>
      ))}
    </ul>
  );
});

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  openModal: PropTypes.func.isRequired,
};

export default ImageGallery;
