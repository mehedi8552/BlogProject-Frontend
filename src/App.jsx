import { BrowserRouter, Route, Routes } from "react-router-dom"
import NavBar from "./Layout/NavBar"
import BloggerSignUp from "./Component/BloggerSignUp"
import BloggerLogin from "./Component/BloggerLogin"
import HomePage from "./Page/HomePage"
import ContactPage from "./Page/ContactPage"
import AbouPage from "./Page/AbouPage"
import ManageBlogPage from "./Page/ManageBlogPage"
import CreateProduct from "./Component/CreateProduct"
import CreateProductPage from "./Page/CreateProductPage.jsx"
import UpdateProductPage from "./Page/UpdateProductPage"
import BloggerLoginPage from "./Page/BloggerLoginPage.jsx"
import BlogDetailsPage from "./Page/BlogDetailsPage.jsx"
import BloggerSignUpPage from "./Page/BloggerSignUpPage.jsx"
import AdminLoginPage from "./Page/AdminLoginPage.jsx"

function App() {

  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<HomePage/>}/>

    <Route path="/contacts" element={<ContactPage/>}/>

    <Route path="/About-us" element={<AbouPage/>}/>

    <Route path="/ccc" element={<ManageBlogPage/>}/> on going
    
    <Route path="/create-product" element={<CreateProductPage/>}/>
    <Route path="/update-product" element={<UpdateProductPage/>}/>
    <Route path="/blogger-login" element={<BloggerLoginPage/>}/>
    <Route path="/blogger-signup" element={<BloggerSignUpPage/>}/>
    <Route path="/admin-login" element={<AdminLoginPage/>}/>
    <Route path="/blog-details/:id" element={<BlogDetailsPage/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
