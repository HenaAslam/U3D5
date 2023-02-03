import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Footer from './Components/Footer';
import GalleryComponent from './Components/GalleryComponent';
import NavbarComponent from './Components/NavbarComponent';
import NavbarTwo from './Components/NavbarTwo';
import Profile from './Components/Profile';


function App() {
  return (
    <div>
     <NavbarComponent />
     <NavbarTwo />
     <GalleryComponent saga="harry potter"/>
     <GalleryComponent saga="lord of the rings"/>
     <GalleryComponent saga="avengers" />
     <Profile />
     <Footer />
     
    </div>
  );
}

export default App;


