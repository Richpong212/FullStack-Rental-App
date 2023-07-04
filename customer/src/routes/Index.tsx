import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home/Home";
import Error from "../pages/Error/Error";
import Properties from "../pages/Properties/Properties";
import Property from "../pages/Property/Property";
import Navbar from "../components/layout/Navbar/Navbar";
import AddProperty from "../pages/Add-Property/AddProperty";
import Contact from "../pages/Contact/Contact";
import Registration from "../pages/Registration/Registration";
import Footer from "../components/layout/Footer/Footer";
import Verification from "../pages/Verification/Verification";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import SearchResults from "../pages/Search-Results/SearchResults";

const Index = () => {
  // isloggedin from redux
  const isLoggedin = useSelector(
    (state: RootState) => state.customer.data.isLoggedIn
  );

  return (
    <BrowserRouter>
      <nav>
        <Navbar />
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          {
            // if the user is logged in, go to add property
            isLoggedin ? (
              <Route path="/create-property" element={<AddProperty />} />
            ) : (
              <Route path="/create-property" element={<Navigate to="/" />} />
            )
          }
          <Route path="/contact" element={<Contact />} />
          {
            // if the user is not registered in, got to login
            !isLoggedin ? (
              <Route path="/register" element={<Registration />} />
            ) : (
              <Route path="/register" element={<Navigate to="/" />} />
            )
          }

          {
            // if the user is not logged in, go to login
            !isLoggedin ? (
              <Route path="/login" element={<Registration />} />
            ) : (
              <Route path="/login" element={<Navigate to="/" />} />
            )
          }

          <Route path="/properties" element={<Properties />} />
          <Route path="/search" element={<SearchResults />} />
          {
            // if the user is not logged in, go to home
            !isLoggedin ? (
              <Route path="/property/:slug" element={<Home />} />
            ) : (
              // if the user is logged in, go to property
              <Route path="/property/:slug" element={<Property />} />
            )
          }
          <Route path="/activate/:id" element={<Verification />} />

          {/* Route for  Blogs Below */}

          {/* Route for  Jobs Below */}

          {/* Route for  Cookies Below */}

          {/* Route for  Terms & Conditions Below */}

          {/* Route for  FAQ Below */}

          <Route path="*" element={<Error />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </BrowserRouter>
  );
};

export default Index;
