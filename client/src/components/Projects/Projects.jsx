import styles from "./projects.module.css";
import { getProjects } from "@api/projects";


import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { Icon } from "@iconify/react";

export default function Projects() {
  const [projects, setProjects] = useState([]);


  useEffect(() => {
    const fetchProjects = async () => {
      const projects = await getProjects();
      setProjects(projects);
    };
    fetchProjects();
  }, []);

  return (
    <>
      <main className={styles.container}>
        {projects.map((x) => {
          return (
            <>
              <Link to={`/project/${x._id}`} className={styles.projectContainer}>
                <div className={styles.imgContainer}>
                  <img src={x.image} className={styles.img} />
                </div>

                <div className={styles.detailsContainer}>
                  <h3>{x.user.name}</h3>
                  <h3>{x.title}</h3>
                  <div className={styles.likesContainer}>
                          <Icon
                              icon="mdi:heart"
                              color="gray"
                              width="16"
                              height="16"
                              className={styles.likeIcon}
                            />
                        <p> 444 </p>
                  </div>
                </div>
              </Link>
            </>
          );
        })}
      </main>
    </>
  );
}
