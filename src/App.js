import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TodoList from './pages/TodoList';
import About from './pages/About';
import Header from './Header';
import GalleryItems from './GalleryItems';
import TestPage from './pages/TestPage';

function App() {
    return (
       <Router>
            <div className="App">
                <div className="HeaderWrap">
                    <Header />
                </div>
                <Routes>
                    <Route path="pages/TodoList" element={<TodoList />} />
                    <Route path="pages/About" element={<About />} />
                    <Route path="/" element={<GalleryItems />} />
                    <Route path="pages/TestPage" element={<TestPage />} />
                </Routes>
            </div>
       </Router>
    );
}

export default App;
