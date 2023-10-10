import {  Header,Home,Footer,Contact, Service } from "./components";
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'


function App() {
  return (
    <>
         
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/services" element={<Service/>}/>
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
