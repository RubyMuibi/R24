import styles from "./notFound.module.css"

import { Link } from "react-router-dom";

export default function NotFound () {
  return (
    <>
      <div className={ styles.container }>
        <h1> 404 Error </h1>
        <h2> Page Not Found</h2>
        <Link to="/">
         <button> R24 </button>
        </Link>
      </div>
    </>
  );
};
