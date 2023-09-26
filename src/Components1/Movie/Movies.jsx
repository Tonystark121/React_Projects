import React from "react";
import styles from "./Movies.module.css";
const Movies = (props) => {
  return (
    <section className={styles.container}>
      {props.data
        .filter((item) => {
          return props.input.toLowerCase() === ''
            ? item
            : item.tagline.toLowerCase().includes(props.input);
        })
        .map((item) => (
          <div className={styles.items} key={item.id}>
            <img src={item.image_url} alt="logo" />
            <div className={styles.description}>
              <h3>{item.tagline}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
    </section>
  );
};

export default Movies;
