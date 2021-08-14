import Booklist from "./comp/Booklist";
import Navbar from "./comp/Navbar";
import ThemeToggle from "./comp/Themetoggle";
import AuthContextProvider from "./context/Authcontext";
import BookContextProvider from "./context/BookContext";
import Theme from "./context/Themecontext";


function App() {
  return (
    <div className="App">
      <Theme>
        <AuthContextProvider>
        <Navbar />
        <BookContextProvider>
          <Booklist/>
        </BookContextProvider>  
        <ThemeToggle/>
        </AuthContextProvider>
      </Theme>
      
    </div> 
  );
}

export default App;
