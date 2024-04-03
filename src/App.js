import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Main";
import {useState} from "react";

function App() {
    const [books, setBooks] = useState([]);
    const [authors, setAuthors] = useState([]);
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />}/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
