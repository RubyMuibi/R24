import styles from "./center.module.css";
import { UserContext } from "@contexts/UserContext";



import { useState, useEffect, useContext } from "react";


import { Icon } from "@iconify/react";

export default function Center() {
 const { user } = useContext(UserContext);


  const stacks = ["Next.js", "React", "JavaScript"];

  return (
    <>
      <div className={styles.editContainer}>
        <button> Add a Project </button>
        <button> Edit Profile </button>
      </div>

      <main className={styles.container}>
        <>
          <section className={styles.imgContainer}>
            <img src={user.name} className={styles.projectImage} />
          </section>

          <section className={styles.detailsContainer}>
            <h1> {user.name} </h1>
            <h3> About {user.name} </h3>
            <p> {user.bio && user.bio} </p>

            <h3> {user.name} Stack </h3>
            <div className={styles.stackContainer}>
              {stacks.map((x) => {
                return (
                  <>
                    <button> {x} </button>
                  </>
                );
              })}
            </div>

            <div className={styles.linkContainer}>
              <a href={user.website && user.website} target="_blank" className={styles.link}>
                <h4> Website</h4>
                  <Icon
                    icon="fluent-mdl2:go"
                    color="black"
                    width="20"
                    height="20"
                  />
              </a>

              <a href={user.github && user.github} target="_blank" className={styles.link}>
                <h4>GitHub</h4>
                <Icon
                  icon="fluent-mdl2:go"
                  color="black"
                  width="20"
                  height="20"
                />
              </a>

            </div>
          </section>
        </>
      </main>
    </>
  );
}
