import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import Navbar from './components/NavBar';
import { Home } from './components/pages/Home';
import { NewPost } from './components/pages/NewPost';
import { SinglePost} from './components/pages/SinglePost';
import NotFound from './components/NotFound';

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
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </main>
    
    </div>
    </BrowserRouter>
    
    </>
  )
}

export default App;