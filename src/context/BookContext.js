import { createContext, useState } from 'react';

export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books, setBooks] = useState([
        {title: 'The Hard way', id:1},
        {title: 'Scorpion Revenge', id: 2},
        {title: 'Cobra King I', id:3},
        {title: 'The Mad goat', id:4}
    ])
    return (  
        <BookContext.Provider value = {{ books }}>
            {props.children}
        </BookContext.Provider>
    );
}
 
export default BookContextProvider;

