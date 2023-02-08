import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Footer from './Components/Footer';
import Details from './Components/Details'
import GalleryComponent from './Components/GalleryComponent';
import NavbarComponent from './Components/NavbarComponent';
//  import NavbarTwo from './Components/NavbarTwo';
import Profile from './Components/Profile';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import TVShows from './Components/TVShows';
import Movies from './Components/Movies'

function App() {
  return (
    <BrowserRouter>
    <div>
     <NavbarComponent />

     <Routes>
     <Route element={<GalleryComponent saga="lord of the rings"/>} path="/" />
            
              <Route element={<TVShows />} path="/tv-shows" />
              <Route element={<Profile />} path="/profile" />
              <Route element={<Movies />} path="/movies" />
              
              <Route element={<Details />} path="details/:imdbid" />
              <Route element={<h2 className="text-white text-center my-5">Page not found</h2>} path="*" />
      </Routes>
     {/* <Routes>
             
     <Route element={ <NavbarTwo />} path="/" />
      </Routes> */}
      {/* 
    
      <Routes>
              <Route element={   <GalleryComponent saga="star wars" /> } path="/" />
      </Routes> */}
     
     
    
     <Footer />

=
     
     
    </div>
    </BrowserRouter>
  );
}

export default App;


