import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import Navbar from './components/NavBar';
import { Home } from './components/pages/Home';
import { NewPost } from './components/pages/NewPost';
import { SinglePost} from './components/pages/SinglePost';

export const App = () => {
  return (
    <>
    <BrowserRouter>
    <div className="wrapper">

    <Navbar />
    <Header />
    <main>
      <Routes> 
        <Route path="/" element={<Home/>} />
        <Route path="/newPost" element={<NewPost />} />
        <Route path="/singlePost" element={<SinglePost />} />
      </Routes>
    </main>
    
    </div>
    </BrowserRouter>
    
    </>
  )
}

export default App;