import React from 'react';
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import Header from '../Header';
import AddBook from '../AddBook';
import BooksList from '../BookList';
import useLocalStorage from '../Hooks/useLocalStorage';
import EditBook from '../EditBook';
import BooksContext from '../Context/BooksContext';

const AppRouter = () => {
  const [books, setBooks] = useLocalStorage('books', []);

  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="main-content">
          <BooksContext.Provider value={{ books, setBooks }}>
            <Routes>
              <Route component={BooksList} path="/" exact={true} />
              <Route component={AddBook} path="/add" />
              <Route component={EditBook} path="/edit/:id" />
              <Route component={() => <Navigate to="/" />} />
            </Routes>
          </BooksContext.Provider>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;