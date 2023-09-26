import React, { useState } from "react";
import styles from "./Navbar.module.css";

const Navbar = (props) => {
  const [search, setSearch] = useState("");

//   console.log(search);
  return (
    <nav className={styles.nav}>
      <div className={styles.text}>
        <i class="fa-solid fa-champagne-glasses"></i>
        <h1>
          <a href="https://thebeerhop.com/">BeerShop</a>
        </h1>
      </div>
      <div className={styles.search}>
        <input
          type="text"
          placeholder="Enter Keywords..."
          onChange={(e) => {
            setSearch(e.target.value);
            props.onEnterData(e.target.value)
          }}
        />
        <i className="fa-solid fa-magnifying-glass"></i>
      </div>
    </nav>
  );
};

export default Navbar;
