import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AtlasBlog, GiftTablePage, HomePage, ParentBlog } from './pages';
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
            <Route path="*" element={<HomePage />} />
          </Routes>
        </div>
      </Router>
    </GuestProvider>
  );
}

export default App;
