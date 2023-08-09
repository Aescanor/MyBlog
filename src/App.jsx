import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header/Header';
import Navbar from './components/NavBar';
import { Home } from './components/pages/Home/Home';
import { NewPost } from './components/pages/NewPost';
import {SinglePost} from './components/pages/SinglePost';
import EditPost from './components/pages/EditPost';
import DeletePost from './components/pages/DeletePost';
import CreateAccount from './components/pages/CreateAccount';
import LogInLogOut from './components/pages/LogInLogOut';
import NotFound from './components/NotFound';
import Footer from './components/Footer/Footer';

export const App = () => {
  return (
    <>
    <BrowserRouter>
    <div className="wrapper">
    <Navbar />
    <Header />
    <main>
      <Routes> 
        <Route path="/" element={<Home/>}/> 
        <Route path="/post/:id" element={<SinglePost />} />
        <Route path="/newPost" element={<NewPost />} />
        <Route path="/createAccount" element={<CreateAccount />} />
        <Route path="/loginlogout" element={<LogInLogOut />} />
        <Route path="/editPost/:id" element={<EditPost />} />
        <Route path ="/deletePost/:id" element={<DeletePost/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </main>
    
    <Footer />
    </div>
    </BrowserRouter>
    
    </>
  )
}

export default App;