import Header from "@layouts/Header/Header"
import Footer from "@layouts/Footer/Footer"
import Home from "@pages/Home/Home"
import Project from "@pages/Project/Project"
import Center from "@pages/Center/Center"
import NotFound from "@components/NotFound/NotFound"

import Auth from "@pages/Auth/Auth"
import AuthContextProvider from "@contexts/AuthContext"

import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {

  return (
    <>
    <BrowserRouter>
     <Header/>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/:id" element={<AuthContextProvider><Project/></AuthContextProvider>}/>
      <Route path="/auth" element={<AuthContextProvider><Auth/></AuthContextProvider>} />
      <Route path="/center/:id" element={<AuthContextProvider><Center/></AuthContextProvider>}/>
      <Route path="*" element={<NotFound/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
