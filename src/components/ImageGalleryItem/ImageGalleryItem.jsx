import React from "react";
import styles from './ImageGalleryItem.module.css'
import PropTypes from 'prop-types';

function ImageGalleryItem ({image, openModal}) {

    const handleClickImg = () => {
        // this.props.openModal(this.props.image);
        openModal(image);
      };
    
        return(
            <>
            <img src={image.webformatURL}
             alt={image.tags} 
             loading='lazy' 
             className={styles.itemsImg}
              onClick={handleClickImg}/>
            </>
        );
    };
ImageGalleryItem.propTypes = {
    image: PropTypes.shape({
        tags: PropTypes.string.isRequired,
        webformatURL: PropTypes.string.isRequired,
    }).isRequired
};
export default ImageGalleryItem;
