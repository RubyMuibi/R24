import styles from "./header.module.css";
import { UserContext } from "@contexts/UserContext";
import { useState, useEffect, createContext, useContext } from "react";



import { Link, NavLink } from "react-router-dom";
import { Icon } from "@iconify/react";

export default function Header() {
  const { user } = useContext(UserContext); 

  return (
    <>
      <header className={styles.container}>
        <Link to="/" className={styles.logo}>
          R24
        </Link>

        <div className={styles.headerOptions}>
          <NavLink
            exact to="/"
            className={( {isActive} ) => !isActive ? styles.noStyle : styles.stylish}
          >
            <p> Projects </p>
          </NavLink>

          <NavLink
            to={user.name}
            className={( {isActive} ) => !isActive ? styles.noStyle : styles.stylish}
          >
            <p> Center </p>
          </NavLink>

          <div className={styles.icon}>
            <Icon
              icon="pepicons-pencil:line-y"
              color="white"
              width="20"
              height="20"
            />
            <Link to="/auth">
              <Icon
                icon="ri:github-fill"
                color="white"
                width="20"
                height="20"
                className={styles.githubIcon}
              />
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}
