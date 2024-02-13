import styles from "./auth-context.module.css";

import { useState, useEffect, createContext } from "react"

import axios from "axios";

export const AuthContext = createContext();


export default function AuthContextProvider({children}) {
  const [reload, setReload] = useState(false);  
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleGithubLogin = () => {
    const clientID = import.meta.env.VITE_CLIENT_ID
    window.location.assign(
      `https://github.com/login/oauth/authorize?client_id=${clientID}`
    );
  };

  useEffect(() => {
    const url = new URL(window.location.href);
    const searchParams = new URLSearchParams(url.search);
    const githubCode = searchParams.get("code");

    if (githubCode) {
      const fetchAccessToken = async () => {
        const apiURL =  `${import.meta.env.VITE_SERVER_URL}/authUser`;
        const params = `?code=${githubCode}`;
        const response = await axios.get(`${apiURL}${params}`);
        const responseData = await response.data;
        const accessToken = await responseData.access_token
        console.log(responseData);

        localStorage.setItem("accessToken", accessToken)
        setIsLoggedIn(true)

      };

      fetchAccessToken();
      setReload(!reload);
    }

    const remainLoggedIn = () => {
      const accessToken = localStorage.getItem("accessToken");

      accessToken ? setIsLoggedIn(true) : setIsLoggedIn(false)
    }

    remainLoggedIn();

    console.log(githubCode);

  }, []);


  const handleLogout = () => {
    localStorage.removeItem("accessToken")
    setIsLoggedIn(false)
  }

  return (
    <>
      <AuthContext.Provider value={{ isLoggedIn, handleLogout }}>
      {isLoggedIn ? children : (
        <main className={styles.container}>
          <div className={styles.notAuth} onClick={handleGithubLogin}>
            <h3> To continue to R24</h3>
            <button>Log in with GitHub</button>
          </div>
        </main>
      )}
      </AuthContext.Provider>
    </>
  );
}