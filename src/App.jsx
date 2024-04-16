import { BrowserRouter, Route, Routes } from "react-router-dom"
import NavBar from "./Layout/NavBar"
import BloggerSignUp from "./Component/BloggerSignUp"
import BloggerLogin from "./Component/BloggerLogin"
import Layout from '../src/Layout/Layout'
import HomePage from "./Page/HomePage"
import ContactPage from "./Page/ContactPage"
import AbouPage from "./Page/AbouPage"
import ManageBlogPage from "./Page/ManageBlogPage"
import SignUpPage from "./Page/SignUpPage"
function App() {

  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path="/contacts" element={<ContactPage/>}/>
    <Route path="/About-us" element={<AbouPage/>}/>
    <Route path="/ccc" element={<ManageBlogPage/>}/>
    <Route path="/hello" element={<SignUpPage/>}/>
    <Route path="/hello" element={<ContactPage/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
