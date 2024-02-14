import styles from "./authContext.module.css";

import { useState, useEffect, createContext } from "react";

import axios from "axios";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [reload, setReload] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [jwt, setJwt] = useState("")

  const handleGithubLogin = () => {
    const clientID = import.meta.env.VITE_CLIENT_ID;
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
        const serverUrl = import.meta.env.VITE_SERVER_URL;
        const authApiUrl = `${serverUrl}/users/auth`;
        const response = await axios.post(authApiUrl, { code: githubCode });
        const responseData = await response.data;
        const r24Token = responseData 
        
        setJwt(responseData)
        localStorage.setItem("r24Token", r24Token);
        setIsLoggedIn(true);
      };

      fetchAccessToken();
      setReload(!reload);
    }

    const remainLoggedIn = () => {
      const accessToken = localStorage.getItem("r24Token");

      accessToken ? setIsLoggedIn(true) : setIsLoggedIn(false);
    };

    remainLoggedIn();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("r24Token");
    setIsLoggedIn(false);
  };

  return (
    <>
      <AuthContext.Provider value={{ isLoggedIn, handleLogout, jwt }}>
        {isLoggedIn ? (
          children
        ) : (
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
