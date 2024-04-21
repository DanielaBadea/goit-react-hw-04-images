import React from "react";
import styles from './ImageGallery.module.css'
import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem";
import PropTypes from 'prop-types';

function ImageGallery ({images, openModal}) {

        if (images.length === 0) {
            return null;
        }

        return(
            <>
            <ul className={styles.gallery}>
                {
                    images.map((image) => (
                        <li key={image.id}>
                            <ImageGalleryItem image={image} openModal={openModal} />
                        </li>
                    ))
                }
            </ul>
            </>
        );
    };
ImageGallery.propTypes = {
    images: PropTypes.array.isRequired,
    openModal: PropTypes.func.isRequired,
};
export default ImageGallery;