import Header from "@layouts/Header/Header";
import Footer from "@layouts/Footer/Footer";
import Home from "@pages/Home/Home";
import Project from "@pages/Project/Project";
import Center from "@pages/Center/Center";
import NotFound from "@components/NotFound/NotFound";

import Auth from "@pages/Auth/Auth";
import AuthContextProvider from "@contexts/AuthContext";
import UserContextProvider from "@contexts/UserContext";


import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
      <UserContextProvider> <Header /> </UserContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:id" element={<Project />} />
          <Route
            path="/auth"
            element={
              <AuthContextProvider>
                <UserContextProvider>
                  <Auth />
                </UserContextProvider>
              </AuthContextProvider>
            }
          />
          <Route
            path="/:id"
            element={
              <AuthContextProvider>
                <UserContextProvider>
                  <Center />
                </UserContextProvider>
              </AuthContextProvider>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
