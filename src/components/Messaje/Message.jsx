import React from "react";
import styles from './Messaje.module.css';
import { IoMdImages } from "react-icons/io";
import { motion } from "framer-motion";

function Messaje () {
        const text = "Welcome! Let's start searching!".split(" ");
        return(
            <>
            <div className={styles.containerMessage}>
            <IoMdImages className={styles.iconMessage} />
            <div className={styles.App}>
                {text.map((el, i) => (
                    <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        duration: 1,
                        delay: i / 10
                    }}
                    key={i}
                    >
                    {el}{" "}
                    </motion.span>
                ))}
                </div>
            </div>
            </>
        );
    };

export default Messaje;


