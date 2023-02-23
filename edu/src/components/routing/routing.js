import {
  BrowserRouter as Router,
  Routes,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Homepage from "../homepage/homepage";
import FilterPage from "../filters.js/filterpage";
import Details from '../detailspage'

const Routing = () =>{
return (
<Routes>
       
          <Route exact path="/" element={<Homepage />} />
          <Route path="/filter" element={<FilterPage />}/>
          <Route path="/details/:restaurantName/:cuisine/:costfortwo" element={<Details />}/>
    </Routes>)
    }
    export default Routing;