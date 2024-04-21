import React from "react";
import styles from './Button.module.css';
import PropTypes from 'prop-types';

function Button ({onLoadMore}){
        return(
            <>
            <div className={styles.containerBtn}>
            <button type="button" 
            className={styles.loadMore}
            onClick={onLoadMore}>
                Load More</button>
            </div>
            </>
        );
    };
Button.propTypes = {
    onLoadMore: PropTypes.func.isRequired,
};


export default Button;