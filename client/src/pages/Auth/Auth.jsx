
import { AuthContext } from "../../contexts/AuthContext";

import { useEffect, useContext } from "react";

import { useNavigate } from "react-router-dom";

export default function Auth () {
  const { isLoggedIn } = useContext(AuthContext);

  const navigate = useNavigate();

  useEffect( () => {
    if (isLoggedIn) {
    }
  }, [isLoggedIn] )

  return (
    <>
    </>
  );
};
