import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AtlasBlog, GalleryPage, GiftTablePage, HomePage, ParentBlog } from './pages';
import { GuestProvider } from './context/GuestContext';


function App() {
  return (
    <GuestProvider>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/babyshower" element={<GiftTablePage />} />
            <Route path="/parent-blog" element={<ParentBlog />} />
            <Route path="/atlas-blog" element={<AtlasBlog />} />
            <Route path='/gallery' element={<GalleryPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </div>
      </Router>
    </GuestProvider>
  );
}

export default App;
