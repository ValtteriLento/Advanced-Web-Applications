import './App.css';
import Index from "./components/Index"
import Book from "./components/Book"
import NotFound from "./components/NotFound"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {

    return (
        <Router>
            <div className="App">
                <h1>Books</h1>
                <Routes>
                    <Route path="/" element={ <Index /> } />
                    <Route path="/book/:name" element={ <Book /> } />
                    <Route path="*" element={ <NotFound /> } />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
