import Aboutus from "./Aboutus";
import HomePage from "./HomePage";
import HomePage1 from "./Home";
import Sermons from "./Sermons";
import Stream from "./Stream";
import ContactPage from "./contact_us";
import EventPage from "./event";
import Gallery from "./gallery";

const AppRoutes = [
    {
      path: "/",
      element: <><HomePage1 /></>,
    },
    {
      path: "/home",
      element: <HomePage />
    },
    {
      path: "/stream",
      element: <Stream />
    },
    {
      path: "/post/:slug",
      element: <EventPage /> 
    },
    {
      path: "/category/:slug",
      element: <Sermons />
    },
    {
      path: "/about",
      element: <Aboutus />
    },
    {
      path: "/event",
      element: <EventPage />
    },
    {
      path: "/sermon",
      element: <Sermons />
    },
    {
      path: "/gallery",
      element: <Gallery />
    },
    {
      path: "/contact",
      element: <ContactPage />
    }
  ];
  
  export default AppRoutes;
  

