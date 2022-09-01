import React from "react";
import { upDateTimeSocket, highLight } from "../../helper/helper";
import styles from "./Header.module.css";

const Header = () => {
 
  const changeTime = (e) => {
    upDateTimeSocket(e.target.value);
    let target = e.target;
    if (target.tagName !== "LI") return;
    highLight(target);
  };
 
  return (
    <div className={styles.headerMain}>
      <div className={styles.headerText}>FINANSE NASDAQ</div>
      <nav className={styles.menuContainer}>
        <ul className={styles.topmenu}>
          <li className={styles.listUpdate}>
            <a href="/#">Time update</a>
            <ul className={styles.submenu}>
              <li
                value={5000}
                onClick={(event) => {
                  changeTime(event);
                }}
              >
                5 second
              </li>
              <li
                value={15000}
                onClick={(event) => {
                  changeTime(event);
                }}
              >
                15 second
              </li>
              <li
                value={30000}
                onClick={(event) => {
                  changeTime(event);
                }}
              >
                30 second
              </li>
              <li
                value={60000}
                onClick={(event) => {
                  changeTime(event);
                }}
              >
                1 minute
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
