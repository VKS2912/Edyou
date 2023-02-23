// import React from 'react';
// import {useState, useEffect, useRef} from 'react'
// import { useParams } from "react-router-dom";
// const FilterPage = () => {
//  const [location, setLocation] = useState("");
//   const [selectedCusine, setSelectedCusine] = useState([]);
//   const [selectedCostForTwo, setSelectedCostForTwo] = useState("");
//   const [sort, setSort] = useState("");
//   const [restaurantData, setRestaurantData] = useState([]);
//   const radioRef = useRef(null); 
//   let { value } = useParams();

//   const fetchRestaurantData = async () => {
//      const response = await fetch(`/restdata?location=${location}&cusine=${selectedCusine}&costForTwo=${selectedCostForTwo}&sort=${sort}`);
//      const data = await response.json();
//      setRestaurantData(data);
//      // store the returned data in a json file
//     // you can use a library like 'file-saver' or 'jsonfile'
//    }
   
//   const handleInputChange = event => {
//     setLocation(event.target.value);
//     fetchRestaurantData();
//     console.log(location)
//   };

//   const handleCheckboxChange = event => {
//     if (event.target.checked) {
//       setSelectedCusine([...selectedCusine, event.target.value]);
//       fetchRestaurantData();
//     } else {
//       setSelectedCusine(
//         selectedCusine.filter(item => item !== event.target.value)
       
//       );
//        fetchRestaurantData();
//     }
//     console.log(selectedCusine)
//   };

//   const handleRadioChange = event => {
//     if (event.target.name === "costForTwo") {
//       setSelectedCostForTwo(event.target.value);
//       fetchRestaurantData();
//       console.log(selectedCostForTwo);
//     } else {
//       setSort(event.target.value);
//       fetchRestaurantData();
//       console.log(sort)
//     }
    
    
//   };

//   // const handleSubmit = event => {
//   //   event.preventDefault();
//   //   fetchRestaurantData();
//   // };

   

//    useEffect(() => {
//      fetchRestaurantData();
//    }, []);
//   return (
//     <div>
//     <div style={{ height: '65px', width:'1519px', backgroundColor: '#ce0505' }}>
//       <div style={{ 
//        backgroundColor: '#ffffff',
//         width: '52px', 
//         height: '52px', 
//         borderRadius: '50%', 
//         position: 'absolute', 
//         top: '5px', 
//         left: '102px' 
//       }}>
//         <span style={{
//           position: 'absolute',
//           top: '1px',
//           left: '16px',
//           width: '32px',
//           height: '47px',
//           textAlign: 'left',
//           font: 'normal normal 600 33px/50px Poppins',
//           letterSpacing: '0px',
//           color: '#EB2929',
//           opacity: '1',
//         }}>
//           e!
//         </span>
//       </div>
//       <button style={{
//        backgroundColor: '#ce0505',
//         position: 'absolute',
//         top: '7px',
//         left: '1084px',
//         width: '111px',
//         height: '46px',
//         border: '1px solid #FFFFFF',
//         borderRadius: '3px',
//         opacity: '1',
//       }}>
//         <span style={{top: '29px',
//                  left: '1015px',
//                  width: '43px',
//                  height: '23px',
//                  textAlign: 'left',
//                  font: 'normal normal medium 16px/25px Poppins',
//                  letterSpacing: '0px',
//                  color: '#FFFFFF',
//                  opacity: '1'}}>Login</span>
//       </button>
//        <button style={{
//        backgroundColor: '#ce0505',
//         position: 'absolute',
//         top: '7px',
//         left: '1204px',
//         width: '151px',
//         height: '46px',
//         border: '1px solid #FFFFFF',
//         borderRadius: '3px',
//         opacity: '1',
//       }}>
//         <span style={{top: '29px',
//                  left: '1015px',
//                  width: '43px',
//                  height: '23px',
//                  textAlign: 'left',
//                  font: 'normal normal medium 16px/25px Poppins',
//                  letterSpacing: '0px',
//                  color: '#FFFFFF',
//                  opacity: '1'}}>Create an account</span>
//       </button>
//     </div>
//       <div style={{ backgroundColor: "#FAFBFC" }}>
//         <h1 style={{ position: "absolute", top: "85px", left: "113px", font: "normal normal bold 36px/55px Poppins", letterSpacing: "0px", color: "#192F60" }}>
//           Restaurants in location {value}
//         </h1>
//       </div>
//       <div style={{ display: "grid", gridTemplateColumns: "5fr 7fr" }}>
//         <div style={{ position: "relative", background: "#FFFFFF 0% 0% no-repeat padding-box", boxShadow: "0px 3px 6px #00000029", opacity: 1, top: "90px", left: "113px", width: "260px", height: "605px" }}>
//           <h2 style={{ position: "absolute", top: "10px", left: "25px", textAlign: "left", font: "normal normal 600 18px/27px Poppins", letterSpacing: "0px", color: "#192F60", opacity: 1 }}>
//             Filters
//           </h2>
//           <h4 style={{ position: "absolute", top: "38px", left: "35px", textAlign: "left", font: "normal normal normal 14px/21px Poppins", letterSpacing: "0px", color: "#192F60", opacity: 1 }}>
//             Select Location
//           </h4>
//           <input type="text" placeholder="Select location" onChange={handleInputChange} style={{ position: "absolute", top: "60px", left: "35px", width: "208px", height: "30px", border: "1px solid #8C96AB", borderRadius: "3px", opacity: 1 }} />
//           <h4 style={{ position: "absolute", top: "100px", left: "35px", textAlign: "left", font: "normal normal normal 14px/21px Poppins", letterSpacing: "0px", color: "#192F60", opacity: 1 }}>
//             Cuisine
//           </h4>
//           <input type="checkbox" name="cuisine" value="north indian" onChange={handleCheckboxChange} style={{ position: "absolute", top: "125px", left: "5px", width: "86px", height: "20px", textAlign: "left", font: "normal normal normal 14px/21px Poppins", letterSpacing: "0px", color: "#8C96AB", opacity: 1 }} /> <span style={{ position: "absolute", top: "125px", left: "65px", width: "86px", height: "20px", textAlign: "left", font: "normal normal normal 14px/21px Poppins", letterSpacing: "0px", color: "#8C96AB", opacity: 1 }}>North Indian</span>
//            <input type="checkbox" name="cuisine" value="north indian" onChange={handleCheckboxChange}  style={{ position: "absolute", top: "155px", left: "5px", width: "86px", height: "20px", textAlign: "left", font: "normal normal normal 14px/21px Poppins", letterSpacing: "0px", color: "#8C96AB", opacity: 1 }} /> <span style={{ position: "absolute", top: "155px", left: "65px", width: "86px", height: "20px", textAlign: "left", font: "normal normal normal 14px/21px Poppins", letterSpacing: "0px", color: "#8C96AB", opacity: 1 }}>South Indian</span>
//             <input type="checkbox" name="cuisine" value="north indian" onChange={handleCheckboxChange}  style={{ position: "absolute", top: "185px", left: "5px", width: "86px", height: "20px", textAlign: "left", font: "normal normal normal 14px/21px Poppins", letterSpacing: "0px", color: "#8C96AB", opacity: 1 }} /> <span style={{ position: "absolute", top: "185px", left: "65px", width: "86px", height: "20px", textAlign: "left", font: "normal normal normal 14px/21px Poppins", letterSpacing: "0px", color: "#8C96AB", opacity: 1 }}>Chinese</span>
//              <input type="checkbox" name="cuisine" value="north indian" onChange={handleCheckboxChange}  style={{ position: "absolute", top: "215px", left: "5px", width: "86px", height: "20px", textAlign: "left", font: "normal normal normal 14px/21px Poppins", letterSpacing: "0px", color: "#8C96AB", opacity: 1 }} /> <span style={{ position: "absolute", top: "215px", left: "65px", width: "86px", height: "20px", textAlign: "left", font: "normal normal normal 14px/21px Poppins", letterSpacing: "0px", color: "#8C96AB", opacity: 1 }}>Fast Food</span>
//               <input type="checkbox" name="cuisine" value="north indian" onChange={handleCheckboxChange}  style={{ position: "absolute", top: "245px", left: "5px", width: "86px", height: "20px", textAlign: "left", font: "normal normal normal 14px/21px Poppins", letterSpacing: "0px", color: "#8C96AB", opacity: 1 }} /> <span style={{ position: "absolute", top: "245px", left: "65px", width: "86px", height: "20px", textAlign: "left", font: "normal normal normal 14px/21px Poppins", letterSpacing: "0px", color: "#8C96AB", opacity: 1 }}>Street Food</span>
//           <h3 style={{
//                 position: 'absolute',
//                 top: '280px',
//                 left: '35px',
//                 textAlign: 'left',
//                 font: 'normal normal normal 14px/21px Poppins',
//                 letterSpacing: '0px',
//                 color: '#192F60',
//                 opacity: '1'
//             }}>Cost For Two</h3>
//             <input type="radio" name="costForTwo" value="lessthan500" checked={selectedCostForTwo === 'lessthan500'} onChange={handleRadioChange} style={{
//                 position: 'absolute',
//                 top: '310px',
//                 left: '1px',
//                 width: '104px',
//                 height: '20px',
//                 textAlign: 'left',
//                 letterSpacing: '0px',
//                 color: '#8C96AB',
//                 opacity: '1'
//             }} /><span style={{
//                 position: 'absolute',
//                 top: '308px',
//                 left: '70px',
//                 width: '104px',
//                 height: '20px',
//                 textAlign: 'left',
//                 letterSpacing: '0px',
//                 color: '#8C96AB',
//                 opacity: '1'
//             }}>less than 500</span>
//              <input type="radio" name="costForTwo" value="500-1000" checked={selectedCostForTwo === '500-1000'} onChange={handleRadioChange} style={{
//                 position: 'absolute',
//                 top: '335px',
//                 left: '1px',
//                 width: '104px',
//                 height: '20px',
//                 textAlign: 'left',
//                 letterSpacing: '0px',
//                 color: '#8C96AB',
//                 opacity: '1'
//             }} /><span style={{
//                 position: 'absolute',
//                 top: '333px',
//                 left: '70px',
//                 width: '104px',
//                 height: '20px',
//                 textAlign: 'left',
//                 letterSpacing: '0px',
//                 color: '#8C96AB',
//                 opacity: '1'
//             }}>500-1000</span>
//              <input type="radio" name="costForTwo" value="1000-1500" checked={selectedCostForTwo === '1000-1500'} onChange={handleRadioChange} style={{
//                 position: 'absolute',
//                 top: '362px',
//                 left: '1px',
//                 width: '104px',
//                 height: '20px',
//                 textAlign: 'left',
//                 letterSpacing: '0px',
//                 color: '#8C96AB',
//                 opacity: '1'
//             }} /><span style={{
//                 position: 'absolute',
//                 top: '358px',
//                 left: '70px',
//                 width: '104px',
//                 height: '20px',
//                 textAlign: 'left',
//                 letterSpacing: '0px',
//                 color: '#8C96AB',
//                 opacity: '1'
//             }}>1000-1500</span>
//              <input type="radio" name="costForTwo" value="1500-2000" checked={selectedCostForTwo === '1500-2000'} onChange={handleRadioChange} style={{
//                 position: 'absolute',
//                 top: '388px',
//                 left: '1px',
//                 width: '104px',
//                 height: '20px',
//                 textAlign: 'left',
//                 letterSpacing: '0px',
//                 color: '#8C96AB',
//                 opacity: '1'
//             }} /><span style={{
//                 position: 'absolute',
//                 top: '385px',
//                 left: '70px',
//                 width: '104px',
//                 height: '20px',
//                 textAlign: 'left',
//                 letterSpacing: '0px',
//                 color: '#8C96AB',
//                 opacity: '1'
//             }}>1500-2000</span>
//              <input type="radio" name="costForTwo" value="Morethan2000" checked={selectedCostForTwo === 'Morethan2000'} onChange={handleRadioChange} style={{
//                 position: 'absolute',
//                 top: '414px',
//                 left: '1px',
//                 width: '104px',
//                 height: '20px',
//                 textAlign: 'left',
//                 letterSpacing: '0px',
//                 color: '#8C96AB',
//                 opacity: '1'
//             }} /><span style={{
//                 position: 'absolute',
//                 top: '410px',
//                 left: '70px',
//                 width: '104px',
//                 height: '20px',
//                 textAlign: 'left',
//                 letterSpacing: '0px',
//                 color: '#8C96AB',
//                 opacity: '1'
//             }}>More than 2000</span>

//             <h4 style={{
//                 position: 'absolute',
//                 top: '470px',
//                 left: '35px',
//                 width: '37px',
//                 height: '25px',
//                 textAlign: 'left',
//                 font: 'normal normal 600 18px/27px Poppins',
//                 letterSpacing: '0px',
//                 color: '#192F60',
//                 opacity: '1'
//             }}>Sort</h4>
//             <input type="radio" name="sort" value="pricehightolow" checked={selectedCostForTwo === 'pricehightolow'} onChange={handleRadioChange} style={{
//                 position: 'absolute',
//                 top: '500px',
//                 left: '1px',
//                 width: '114px',
//                 height: '20px',
//                 textAlign: 'left',
//                 font: 'normal normal normal 14px/21px Poppins',
//                 letterSpacing: '0px',
//                 color: '#8C96AB',
//                 opacity: '1'
//             }} /><span style={{
//                 position: 'absolute',
//                 top: '500px',
//                 left: '75px',
//                 width: '114px',
//                 height: '20px',
//                 textAlign: 'left',
//                 font: 'normal normal normal 14px/21px Poppins',
//                 letterSpacing: '0px',
//                 color: '#8C96AB',
//                 opacity: '1'
//             }}>Price High to Low</span>
//             <input type="radio" name="sort" value="pricelowtohigh" checked={selectedCostForTwo === 'pricelowtohigh'} onChange={handleRadioChange} style={{
//                 position: 'absolute',
//                 top: '525px',
//                 left: '1px',
//                 width: '114px',
//                 height: '20px',
//                 textAlign: 'left',
//                 font: 'normal normal normal 14px/21px Poppins',
//                 letterSpacing: '0px',
//                 color: '#8C96AB',
//                 opacity: '1'
//             }} /><span style={{
//                 position: 'absolute',
//                 top: '525px',
//                 left: '75px',
//                 width: '114px',
//                 height: '20px',
//                 textAlign: 'left',
//                 font: 'normal normal normal 14px/21px Poppins',
//                 letterSpacing: '0px',
//                 color: '#8C96AB',
//                 opacity: '1'
//             }}>Price Low to High</span>
//             </div>
        //     <div> <div className="restdet" style={{ position: "absolute", top: "170px", left: "430px", width: "794px", height: "291px", background: "#FFFFFF 0% 0% no-repeat padding-box", boxShadow: "0px 3px 6px #00000029", opacity: 1 }}>
        //     <div className="image" style={{ position: "absolute", top: "30px", left: "30px", width: "120px", height: "120px", borderRadius: "9px", opacity: 1, backgroundColor:"red" }}>
        //     </div>
        //     <span style={{ position: "absolute", top: "38px", left: "194px", width: "303px", height: "43px", textAlign: "left", font: "normal normal 600 30px/46px Poppins", letterSpacing: "0px", color: "#192F60", opacity: 1 }}>
        //         The Big Chill Cakery
        //     </span>
        //     <span style={{ position: "absolute", top: "75px", left: "209px", width: "370px", height: "48px", textAlign: "left", font: "normal normal medium 16px/30px Poppins", letterSpacing: "0px", color: "#636F88", opacity: 1 }}>fort</span>
        //     <span  style={{ position: "absolute", top: "99px", left: "200px", width: "370px", height: "23px", textAlign: "left", font: "normal normal normal 16px/30px Poppins", letterSpacing: "0px", color: "#636F88", opacity: 1 }}>
        //         shop1,plotd,andlawdalasan
        //     </span>
        //     <div style={{ position: "absolute", top: "189px", left: "10px", width: "726px", height: "0px", border: "1px solid #DEDFE5", opacity: 1 }}>
        //     </div>
        //     <span style={{ position: "absolute", top: "200px", left: "45px", width: "140px", height: "118px", textAlign: "left", font: "normal normal normal 16px/30px Poppins", letterSpacing: "0px", color: "#636F88", opacity: 1 }}>
        //         cusines
        //     </span>
        //     <span style={{ position: "absolute", top: "200px", left: "164px", width: "251px", height: "69px", textAlign: "left", font: "normal normal normal 16px/30px Poppins", letterSpacing: "0px", color: "#192F60", opacity: 1 }}>
        //         Bakery
        //     </span>
        // </div></div>
//     </div><div></div></div>)}
//             export default FilterPage;


import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { ImCross } from 'react-icons/im'
   import {  BsFacebook } from "react-icons/bs";

const useStyles = makeStyles({
  headerContainer: {
    height: '65px', 
    backgroundColor: '#ce0505', 
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  logoContainer: {
    backgroundColor: '#ffffff',
    width: '52px', 
    height: '52px', 
    borderRadius: '50%', 
    position: 'relative',
    '& span': {
      position: 'absolute',
      top: '1px',
      left: '16px',
      width: '32px',
      height: '47px',
      textAlign: 'left',
      font: 'normal normal 600 33px/50px Poppins',
      letterSpacing: '0px',
      color: '#EB2929',
      opacity: '1',
    }
  },
  buttonContainer: {
    '& button': {
      backgroundColor: '#ce0505',
      width: '89px',
      height: '46px',
      
      border: '1px solid #FFFFFF',
      borderRadius: '3px',
      opacity: '1',
      '& span': {
        textAlign: 'left',
        font: 'normal normal medium 16px/25px Poppins',
        letterSpacing: '0px',
        color: '#FFFFFF',
        opacity: '1'
      }
    }
  },
  titleContainer: {
    backgroundColor: "#FAFBFC",
    display: 'flex',flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'center',
    '& h1': {
      font: "normal normal bold 36px/55px Poppins", 
      letterSpacing: "0px", 
      color: "#192F60",
    }
  },
  filtersContainer: {
    position: "relative", 
    background: "#FFFFFF 0% 0% no-repeat padding-box", 
    boxShadow: "0px 3px 6px #00000029", 
    opacity: 1,margin:15,
    height: "605px",
    '& h2': {
      textAlign: "left", 
      font: "normal normal 600 18px/27px Poppins", 
      letterSpacing: "0px", 
      color: "#192F60", 
      opacity: 1
    },
    '& h4': {
      textAlign: "left", 
      font: "normal normal normal 14px/21px Poppins", 
      letterSpacing: "0px", 
      color: "#192F60", 
      opacity: 1
    },
    '& input[type="text"]': {
      width: "208px", 
      height: "30px", 
      border: "1px solid #8C96AB"
    }
  }
});

const FilterPage = () => {
const classes = useStyles();
const navigate = useNavigate();

  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const handleLoginClick = () => {
   
    setShowLogin(true);
  };

  const handleSignupClick = () => {
    setShowSignup(true);
  };

  const handleCloseClick = () => {
   
    setShowLogin(false);
    setShowSignup(false);
  };

  const handleSwitchToSignup = () => {
    setShowLogin(false);
    setShowSignup(true);
  };

  const handleSwitchToLogin = () => {
    setShowSignup(false);
    setShowLogin(true);
  };

const [restaurants, setRestaurants] = useState([]); 


const [currentPage, setCurrentPage] = useState(1);
const [searchQuery, setSearchQuery] = useState('');
  // const [cuisines, setCuisines] = useState([]);
  const [selectedCuisines, setSelectedCuisines] = useState([]);
  const [selectedCost, setSelectedCost] = useState('');
  
  // Calculate the range of divs to display on the current page
  const startIndex = (currentPage - 1) * 2;
  const endIndex = startIndex + 2;
  const currentPageDivs = restaurants.slice(startIndex, endIndex);

  // Calculate the range of buttons to display
  const totalPages = Math.ceil(restaurants.length / 2);
  let startButton = Math.max(1, currentPage - 2);
  let endButton = Math.min(totalPages, startButton + 4);
  if (endButton - startButton < 4) {
    startButton = Math.max(1, endButton - 4);
  }

  // Handle page navigation
  function handlePageChange(page) {
    setCurrentPage(page);
  }
   useEffect(() => {
    const filterBy = new URLSearchParams(window.location.search).get('filterBy');
    const filterByrest = new URLSearchParams(window.location.search).get('filterByrest');
    const filterByloc = new URLSearchParams(window.location.search).get('filterByloc');
    console.log(filterBy)
    if (filterBy) {
      fetchRestaurantDetails(filterBy);
    }else if(filterByrest){
      fetchRestaurantDetailsbyrest(filterByrest);
    }else{
      fetchRestaurantDetailsbyloc(filterByloc);
    }
  }, []);
  useEffect(() => {
   console.log(restaurants)
  }, [restaurants]);
  async function fetchRestaurantDetailsbyrest(filterByrest) {
    console.log(filterByrest, "ll");
    const response = await fetch(`http://localhost:3001/restaurants/rest/${filterByrest}`);
    const data = await response.json();
    setRestaurants(data);
  }
  async function fetchRestaurantDetailsbyloc(filterByloc) {
    console.log(filterByloc, "ll");
    const response = await fetch(`http://localhost:3001/restaurants/location/${filterByloc}`);
    const data = await response.json();
    setRestaurants(data);
  }
  async function fetchRestaurantDetails(filterBy) {
    console.log(filterBy, "ll");
    const response = await fetch(`http://localhost:3001/restaurants/mealType/${filterBy}`);
    const data = await response.json();
    setRestaurants(data);
  }
  // useEffect(() => {
  //   fetch('http://localhost:3000/cuisines')
  //     .then(response => response.json())
  //     .then(data => setCuisines(data))
  //     .catch(error => console.error(error));
  // }, []);

  const handleSearch = () => {
    const encodedLocation = encodeURIComponent(searchQuery);
    fetch(`http://localhost:3001/restaurants/location/${encodedLocation}`)
      .then(response => response.json())
      .then(data => setRestaurants(data))
      .catch(error => console.error(error));
  };

  const handleCuisineChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedCuisines([...selectedCuisines, value]);
    } else {
      setSelectedCuisines(selectedCuisines.filter(cuisine => cuisine !== value));
    }
  };
   const [userData, setUserData] = useState(null);

  const handleGoogleLogin = () => {
    window.location.href = 'https://accounts.google.com/signup';
  };

  const handleFacebookLogin = () => {
    window.location.href = 'https://www.facebook.com/login.php';
  };

  const handleAuthData = (data) => {
    setUserData(data);
  };
   window.addEventListener('message', (event) => {
    if (event.origin !== window.location.origin) {
      const authData = event.data;
      handleAuthData(authData);
    }
  });
  const handleCostChange = (event) => {
    setSelectedCost(event.target.value);
  };
   const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  useEffect(() => {
    const encodedCuisines = encodeURIComponent(selectedCuisines.join(','));
    fetch(`http://localhost:3001/restaurants/cuisine/${encodedCuisines}`)
      .then(response => response.json())
      .then(data => setRestaurants(data))
      .catch(error => console.error(error));
  }, [selectedCuisines]);

  useEffect(() => {
    fetch(`http://localhost:3001/restaurants/cost/${selectedCost}`)
      .then(response => response.json())
      .then(data => setRestaurants(data))
      .catch(error => console.error(error));
  }, [selectedCost]);


//  const [restaurantData, setRestaurantData] = useState([]);
// const [filter, setFilter] = useState([]);
//  const [checkedValues, setCheckedValues] = useState([]);
//   const [selectedCostForTwo, setSelectedCostForTwo] = useState("");
//   const [sort, setSort] = useState("");
 
//   const [locPrev,setLocPrev] = useState()
//    const [costPrev,setSelectedCostPrev] = useState()
//    const [checkPrev,setCheckPrev] = useState()


//  const [location, setLocation] = useState("");
//   const [selectedCuisine, setSelectedCuisine] = useState([]);

//   useEffect(() => {
//     const fetchRestaurants = async () => {
//       const url = `http://localhost:3000/restaurants/cost/${selectedCostForTwo}`;
//       const response = await fetch(url);
//       const data = await response.json();
//        // check if any fetched data is already present in restaurantData array
//        const nonDuplicateData = data.filter(newItem => {
//         return !restaurantData.some(oldItem => oldItem.id === newItem.id);
//       });

//        if (nonDuplicateData.length > 0) {
//         setRestaurantData((prevData) => [...prevData, ...nonDuplicateData]);
//       }
// setRestaurantData(prevData => [...prevData, ...nonDuplicateData]);
//     // add only non-duplicate items to restaurantData array
    

//     console.log(data);
//     console.log(restaurantData);
//     };

//     fetchRestaurants();
//   }, [selectedCostForTwo]);

//   const handleRadioChange = (event) => {
//     setSelectedCostForTwo(event.target.value);
//      setRestaurantData([]); // clear restaurantData when cost selection changes
//   };
  
//   useEffect(() => {
//   const fetchCuisineData = async () => {
//     console.log(selectedCuisine);
//     const encodedCuisine = encodeURIComponent(selectedCuisine.join(","));
//     const url = `http://localhost:3000/restaurants/cuisine/${encodedCuisine}`;
//     const response = await fetch(url);
//     const data = await response.json();
    
//     // check if any fetched data is already present in restaurantData array
//     const filteredData = data.filter(newItem => {
//       return restaurantData.some(oldItem => oldItem.id === newItem.id);
//     });

//     // add only non-duplicate items to restaurantData array
//     if (filteredData.length > 0) {
//         setRestaurantData((prevData) => [...prevData, ...filteredData]);
//       }

//     console.log(data);
//     console.log(restaurantData,"rd");
//   };

//   fetchCuisineData();
// }, [selectedCuisine]);

 
//   const handleCheckboxChange = (event) => {
//      const value = event.target.value;
//     const checked = event.target.checked;
//     if (checked) {
//       setSelectedCuisine([...selectedCuisine, value]);setRestaurantData([]);
//     } else {
//       setSelectedCuisine(selectedCuisine.filter((cuisine) => cuisine !== value));
//     }
//   };
   
//    const fetchLoData = async () => {
//     console.log(selectedCuisine,"khjg")
//     console.log(checkedValues,"khjg")
//      const newArray = restaurantData.filter((object) => object.location !== locPrev);
//     setRestaurantData(newArray);
//      const encodedLocation = encodeURIComponent(location);
  
//   const url = `http://localhost:3000/restaurants/location/${encodedLocation}`;
// const response = await fetch(url);
//      const data = await response.json();
    
//      setRestaurantData([...restaurantData,data]);
//      console.log(restaurantData)
//      // store the returned data in a json file
    
//    }
//   const handleInputChange = event => {
//     setLocation(event.target.value);
//     fetchLoData();
//     setLocPrev(location);
//     console.log(location)
//   };
    const sortDesc = (restaurants) => {
    // Add costLevel attribute to each restaurant object
    console.log(restaurants)
    const updatedRestaurants = restaurants.map((restaurants) => {
      const costfortwo = restaurants.costfortwo;
      let costLevel = 0;
      if (costfortwo < 500) {
        costLevel = 1;
      } else if (costfortwo >= 500 && costfortwo < 1000) {
        costLevel = 2;
      } else if (costfortwo >= 1000 && costfortwo < 1500) {
        costLevel = 3;
      } else if (costfortwo >= 1500 && costfortwo < 2000) {
        costLevel = 4;
      } else if (costfortwo >= 2000) {
        costLevel = 5;
      }
      return { ...restaurants, costLevel };
    });

    // Sort restaurants in descending order of costLevel attribute
    updatedRestaurants.sort((a, b) => b.costLevel - a.costLevel);
    return updatedRestaurants;
  };

   

    const sortAsc = (restaurants) => {
    // Add costLevel attribute to each restaurant object
    const updatedRestaurants = restaurants.map((restaurants) => {
      const costfortwo = restaurants.costfortwo;
      let costLevel = 0;
      if (costfortwo < 500) {
        costLevel = 1;
      } else if (costfortwo >= 500 && costfortwo < 1000) {
        costLevel = 2;
      } else if (costfortwo >= 1000 && costfortwo < 1500) {
        costLevel = 3;
      } else if (costfortwo >= 1500 && costfortwo < 2000) {
        costLevel = 4;
      } else if (costfortwo >= 2000) {
        costLevel = 5;
      }
      return { ...restaurants, costLevel };
    });
     console.log(restaurants)
    // Sort restaurants in ascending order of costLevel attribute
    updatedRestaurants.sort((a, b) => a.costLevel - b.costLevel);
    return updatedRestaurants;
  };
return (
<div>
<Grid container>
<Grid item xs={12}>
<div className={classes.headerContainer}>
  <Grid item xs={1}><div className={classes.logoContainer}>
<span>e!</span>
</div></Grid>
  <Grid item xs={1}></Grid>
  <Grid item xs={1}>
</Grid><Grid item xs={1}></Grid><Grid item xs={1}></Grid>
<Grid item xs={1} ></Grid><Grid item xs={1}>
<div className={classes.buttonContainer}>
<button>
<span onClick={()=>{handleLoginClick()}}>Login</span>
</button>
</div></Grid><Grid item xs={1} style={{marginRight:'20px'}}></Grid><Grid item xs={1}>
<div style={{marginRight:'20px',width:'110px'}}className={classes.buttonContainer}  >
<button>
<span onClick={()=>{handleSignupClick()}}>Create an account</span>
</button>
</div></Grid>
</div>
</Grid>

          {showLogin && (
            <Grid container style={{position:'absolute',top:0,left:0, height: "100%"}}>
          <Grid item xs={4}></Grid>
          <Grid item xs={4}>
          <div className="form"   style={{
        width: 350,
        height: 300,
        backgroundColor: "#fbfbfb",
        position: "absolute",
        top: 170,
        zIndex:22,borderRadius: 10,border:'5px solid black', background:`linear-gradient(to bottom, rgba(0, 0, 0, 0.7)`,
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)'
      }}>
            <div className="close" onClick={handleCloseClick} style={{cursor:"pointer",position:'absolute',top:'10px',left:299}}>
              <ImCross size={24} color="#333" />
            </div>
            <h2  style={{
          position: "absolute",
          top: 12,
          left: 34,
          fontSize: 25,
          color: "#192f60",
        }}>Login</h2>
            <button  onClick={()=>{ handleGoogleLogin()}} style={{
          width: 300,
          height: 40,
          position: "absolute",
          top: 70, fontSize: 19,
          fontFamily: "Poppins",
          color: "#192f60",
          left: 20,border: "1px lightgrey solid",
          borderRadius: 5,
        }}>Continue with Gmail</button>
            <button  style={{
          width: 300,
          height: 40,
          position: "absolute",
          top: 120,
          left: 20, fontSize: 19,
          fontFamily: "Poppins",
          color: "#192f60",
          border: "1px lightgrey solid",
          borderRadius: 5,
        }} onClick={()=>{ handleFacebookLogin()}}>
              <BsFacebook />
              Continue with Facebook
            </button>
            <div />
            <span  style={{
          width: 300,
          height: 0,
          border: "1px solid lightgrey",
          position: "absolute",
          top: 250,
          left: 20,
        }}>Don't have an account?</span>
            <button onClick={handleSwitchToSignup}  style={{
          color: "#ce0505",cursor:'pointer',
          fontFamily: "Poppins",
          fontSize: 14,
          position: "absolute",
          bottom: 17,backgroundColor:'#fbfbfb',
          right: 71,border:0,
        }}>Signup</button>
          </div>
          </Grid>
          <Grid item xs={4}></Grid>
        </Grid>
      )} 
      
      {showSignup && (
        <Grid container>
          <Grid item xs={4}></Grid> <Grid item xs={4}><div className="form" style={{
        width: 350,
        height: 300,
        backgroundColor: "#fbfbfb",
        position: "absolute",
        top: 170,
        zIndex:27,borderRadius:10,border:'5px solid black', background:`linear-gradient(to bottom, rgba(0, 0, 0, 0.7)`,
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)'
      }}>
            <div className="close" onClick={handleCloseClick} style={{cursor:"pointer",position:'absolute',top:'10px',left:299}}>
              <ImCross size={24} color="#333" />
            </div>
            <h2 style={{
          position: "absolute",
          top: 12,
          left: 34,
          fontSize: 25,
          color: "#192f60",
        }}>Signup</h2>
            <button onClick={()=>{ handleGoogleLogin()}} style={{
          width: 300,
          height: 40,
          position: "absolute",
          top: 70, fontSize: 19,
          fontFamily: "Poppins",
          color: "#192f60",
          left: 20,border: "1px lightgrey solid",
          borderRadius: 5,
        }}>Continue with Gmail</button>
            <button style={{
          width: 300,
          height: 40,
          position: "absolute",
          top: 120,
          left: 20, fontSize: 19,
          fontFamily: "Poppins",
          color: "#192f60",
          border: "1px lightgrey solid",
          borderRadius: 5,
        }} onClick={()=>{ handleFacebookLogin()}}>
              <BsFacebook />
              Continue with Facebook
            </button>
            <div />
            <span  style={{
          width: 300,
          height: 0,
          border: "1px solid lightgrey",
          position: "absolute",
          top: 250,
          left: 20,
        }} >Already have an account?</span>
            <button onClick={handleSwitchToLogin} style={{
          color: "#ce0505",cursor:'pointer',
          fontFamily: "Poppins",
          fontSize: 14,
          position: "absolute",
          bottom: 17,backgroundColor:'#fbfbfb',
          right: 71,border:0,
        }}>Login</button>
          </div>
         </Grid>
          <Grid item xs={4}></Grid>
        </Grid>
      )}
<Grid container style={{backgroundColor:"#fbfbfb"}} >
  <Grid item xs={1} ></Grid>
  <Grid item xs={8} className={classes.titleContainer}>
<h1>{searchQuery.length>0?<>Restaurants at location {searchQuery} </>:<> Restaurants</>}</h1>
</Grid> <Grid item xs={2}><div className={classes.titleContainer}>
</div></Grid>
</Grid>
{windowWidth>'1450' ?  (<>
<Grid item xs={1} style={{backgroundColor:"#fbfbfb"}}></Grid>
<Grid item xs={2} className={classes.filtersContainer}>

<h3 style={{ position: "absolute", top:-10, left: "25px", textAlign: "left", fontFamily: " Poppins",fontSize:"22px", letterSpacing: "0px", color: "#192F60", opacity: 1 }}>Filter</h3>

<h4 style={{ position: "absolute", top: "18px", left: "25px", textAlign: "left", font: "normal normal normal 16px/21px Poppins", letterSpacing: "0px", color: "#192F60", opacity: 1 }}>
            Select Location
          </h4>
          <input type="text" placeholder="Select location" onChange={(event) => setSearchQuery(event.target.value)} style={{ position: "absolute", top: "63px", left: "25px", width: "208px", height: "30px", border: "1px solid #8C96AB", borderRadius: "3px", opacity: 1 }} /><button onClick={handleSearch} style={{ position: "absolute", top: "65px", left: "172px", width: "60px", height: "30px",border:0, opacity: 1,cursor:'pointer',backgroundColor:'white',fontFamily:'poppins',fontSize:16,color:'#192f60' }}>Search</button>
          <h4 style={{ position: "absolute", top: "90px", left: "35px", textAlign: "left", fontFamily: " Poppins",fontSize:'17px',fontWeight:'bold', letterSpacing: "0px", color: "#192F60", opacity: 1 }}>
            Cuisine
          </h4>
          <input type="checkbox" name="Northindian" value="Northindian" onChange={handleCuisineChange} style={{ position: "absolute", top: "135px", left: "5px", width: "86px", height: "20px", textAlign: "left", font: "normal normal normal 14px/21px Poppins", letterSpacing: "0px", color: "#8C96AB", opacity: 1 }} /> <span style={{ position: "absolute", top: "135px", left: "65px", width: "86px", height: "20px", textAlign: "left", font: "normal normal normal 14px/21px Poppins", letterSpacing: "0px", color: "#8C96AB", opacity: 1 }}>North Indian</span>
           <input type="checkbox" name="Southindian" value="Southindian" onChange={handleCuisineChange}  style={{ position: "absolute", top: "165px", left: "5px", width: "86px", height: "20px", textAlign: "left", font: "normal normal normal 14px/21px Poppins", letterSpacing: "0px", color: "#8C96AB", opacity: 1 }} /> <span style={{ position: "absolute", top: "165px", left: "65px", width: "86px", height: "20px", textAlign: "left", font: "normal normal normal 14px/21px Poppins", letterSpacing: "0px", color: "#8C96AB", opacity: 1 }}>South Indian</span>
            <input type="checkbox" name="Chinese" value="Chinese" onChange={handleCuisineChange} style={{ position: "absolute", top: "195px", left: "5px", width: "86px", height: "20px", textAlign: "left", font: "normal normal normal 14px/21px Poppins", letterSpacing: "0px", color: "#8C96AB", opacity: 1 }} /> <span style={{ position: "absolute", top: "195px", left: "65px", width: "86px", height: "20px", textAlign: "left", font: "normal normal normal 14px/21px Poppins", letterSpacing: "0px", color: "#8C96AB", opacity: 1 }}>Chinese</span>
             <input type="checkbox" name="Fastfood" value="FastFood" onChange={handleCuisineChange}  style={{ position: "absolute", top: "225px", left: "5px", width: "86px", height: "20px", textAlign: "left", font: "normal normal normal 14px/21px Poppins", letterSpacing: "0px", color: "#8C96AB", opacity: 1 }} /> <span style={{ position: "absolute", top: "225px", left: "65px", width: "86px", height: "20px", textAlign: "left", font: "normal normal normal 14px/21px Poppins", letterSpacing: "0px", color: "#8C96AB", opacity: 1 }}>Fast Food</span>
              <input type="checkbox" name="Streetfood" value="Streetfood" onChange={handleCuisineChange}  style={{ position: "absolute", top: "255px", left: "5px", width: "86px", height: "20px", textAlign: "left", font: "normal normal normal 14px/21px Poppins", letterSpacing: "0px", color: "#8C96AB", opacity: 1 }} /> <span style={{ position: "absolute", top: "255px", left: "65px", width: "86px", height: "20px", textAlign: "left", font: "normal normal normal 14px/21px Poppins", letterSpacing: "0px", color: "#8C96AB", opacity: 1 }}>Street Food</span>
          <h3 style={{
                position: 'absolute',
                top: '275px',
                left: '35px',
                textAlign: 'left',
                fontFamily: 'poppins',
                fontSize: '16px',
                letterSpacing: '0px',
                color: '#192F60',
                opacity: '1'
            }}>Cost For Two</h3>
            <input type="radio" name="costForTwo" value="lessthan500" onChange={handleCostChange} style={{
                position: 'absolute',
                top: '310px',
                left: '1px',
                width: '104px',
                height: '20px',
                textAlign: 'left',
                letterSpacing: '0px',
                color: '#8C96AB',
                opacity: '1'
            }} /><span style={{
                position: 'absolute',
                top: '308px',
                left: '70px',
                width: '104px',
                height: '20px',
                textAlign: 'left',
                letterSpacing: '0px',
                color: '#8C96AB',
                opacity: '1'
            }}>less than 500</span>
             <input type="radio" name="costForTwo" value="500-1000" onChange={handleCostChange} style={{
                position: 'absolute',
                top: '335px',
                left: '1px',
                width: '104px',
                height: '20px',
                textAlign: 'left',
                letterSpacing: '0px',
                color: '#8C96AB',
                opacity: '1'
            }} /><span style={{
                position: 'absolute',
                top: '333px',
                left: '70px',
                width: '104px',
                height: '20px',
                textAlign: 'left',
                letterSpacing: '0px',
                color: '#8C96AB',
                opacity: '1'
            }}>500-1000</span>
             <input type="radio" name="costForTwo" value="1000-1500" onChange={handleCostChange} style={{
                position: 'absolute',
                top: '362px',
                left: '1px',
                width: '104px',
                height: '20px',
                textAlign: 'left',
                letterSpacing: '0px',
                color: '#8C96AB',
                opacity: '1'
            }} /><span style={{
                position: 'absolute',
                top: '358px',
                left: '70px',
                width: '104px',
                height: '20px',
                textAlign: 'left',
                letterSpacing: '0px',
                color: '#8C96AB',
                opacity: '1'
            }}>1000-1500</span>
             <input type="radio" name="costForTwo" value="1500-2000" onChange={handleCostChange} style={{
                position: 'absolute',
                top: '388px',
                left: '1px',
                width: '104px',
                height: '20px',
                textAlign: 'left',
                letterSpacing: '0px',
                color: '#8C96AB',
                opacity: '1'
            }} /><span style={{
                position: 'absolute',
                top: '385px',
                left: '70px',
                width: '104px',
                height: '20px',
                textAlign: 'left',
                letterSpacing: '0px',
                color: '#8C96AB',
                opacity: '1'
            }}>1500-2000</span>
             <input type="radio" name="costForTwo" value="Morethan2000" onChange={handleCostChange} style={{
                position: 'absolute',
                top: '414px',
                left: '1px',
                width: '104px',
                height: '20px',
                textAlign: 'left',
                letterSpacing: '0px',
                color: '#8C96AB',
                opacity: '1'
            }} /><span style={{
                position: 'absolute',
                top: '410px',
                left: '70px',
                width: '104px',
                height: '20px',
                textAlign: 'left',
                letterSpacing: '0px',
                color: '#8C96AB',
                opacity: '1'
            }}>More than 2000</span>

            <h4 style={{
                position: 'absolute',
                top: '450px',
                left: '35px',
                width: '37px',
                height: '25px',
                textAlign: 'left',
                font: 'normal normal 600 18px/27px Poppins',
                letterSpacing: '0px',
                color: '#192F60',
                opacity: '1'
            }}>Sort</h4>
            <input type="radio" name="sort" value="pricehightolow" onChange={()=>{sortDesc()}} style={{
                position: 'absolute',
                top: '500px',
                left: '1px',
                width: '114px',
                height: '20px',
                textAlign: 'left',
                font: 'normal normal normal 14px/21px Poppins',
                letterSpacing: '0px',
                color: '#8C96AB',
                opacity: '1'
            }} /><span style={{
                position: 'absolute',
                top: '500px',
                left: '75px',
                width: '114px',
                height: '20px',
                textAlign: 'left',
                font: 'normal normal normal 14px/21px Poppins',
                letterSpacing: '0px',
                color: '#8C96AB',
                opacity: '1'
            }}>Price High to Low</span>
            <input type="radio" name="sort" value="pricelowtohigh" onChange={()=>{sortAsc()}} style={{
                position: 'absolute',
                top: '525px',
                left: '1px',
                width: '114px',
                height: '20px',
                textAlign: 'left',
                font: 'normal normal normal 14px/21px Poppins',
                letterSpacing: '0px',
                color: '#8C96AB',
                opacity: '1'
            }} /><span style={{
                position: 'absolute',
                top: '525px',
                left: '75px',
                width: '114px',
                height: '20px',
                textAlign: 'left',
                font: 'normal normal normal 14px/21px Poppins',
                letterSpacing: '0px',
                color: '#8C96AB',
                opacity: '1'
            }}>Price Low to High</span>

</Grid>
<Grid item xs={8} style={{position:'relative',top:'10px',left:'30px'}}>
  <Grid container >
   
      {restaurants.length>0?<>   {currentPageDivs.map((restaurants) => ( 
            <Grid key={restaurants._id} item xs={12} className="restdet"  style={{ position:'relative',margin:10, height: "291px", background: "#FFFFFF 0% 0% no-repeat padding-box", boxShadow: "0px 3px 6px #00000029", opacity: 1 }}>
              <Link to={`/details/${restaurants.restaurantName}/${restaurants.cuisine}/${restaurants.costfortwo}`}>
            <div className="image" style={{ position: "absolute", top: "30px", left: "30px", width: "120px", height: "120px", borderRadius: "9px", opacity: 1, backgroundColor:"red" }}>
            </div>
            <span style={{ position: "absolute", top: "38px", left: "194px", width: "303px", height: "43px", textAlign: "left", font: "normal normal 600 30px/46px Poppins", letterSpacing: "0px", color: "#192F60", opacity: 1 }}>
                {restaurants.restaurantName}
            </span>
            <span style={{ position: "absolute", top: "75px", left: "209px", width: "370px", height: "48px", textAlign: "left", font: "normal normal medium 16px/30px Poppins", letterSpacing: "0px", color: "#636F88", opacity: 1 }}>fort</span>
            <span  style={{ position: "absolute", top: "99px", left: "200px", width: "370px", height: "23px", textAlign: "left", font: "normal normal normal 16px/30px Poppins", letterSpacing: "0px", color: "#636F88", opacity: 1 }}>
                shop1,plotd,andlawdalasan
            </span>
               <Grid container style={{position: 'absolute',
    top: '182px',}}>
      <Grid item xs={1}></Grid>
      <Grid item xs={9} style={{
    height: '3px',
    backgroundColor:'#DEDFD5',
    border: '2px solid #D2D9E6',
    opacity: 1}}></Grid><Grid item xs={1}></Grid>
   </Grid>
            <span style={{ position: "absolute", top: "200px", left: "45px", width: "140px", height: "118px", textAlign: "left", font: "normal normal normal 16px/30px Poppins", letterSpacing: "0px", color: "#636F88", opacity: 1 }}>
                {restaurants.cuisine}
            </span>
            <span style={{ position: "absolute", top: "200px", left: "164px", width: "251px", height: "69px", textAlign: "left", font: "normal normal normal 16px/30px Poppins", letterSpacing: "0px", color: "#192F60", opacity: 1 }}>
                {restaurants.costfortwo}
            </span></Link>
          </Grid>
          ))}
        <Grid item xs={12}>
           {currentPage < totalPages && (
        <button style={{cursor:'pointer',width:'50px',height:'30px',margin:"5px",background:" #8C96AB 0% 0% no-repeat padding-box",
border: "1px solid #8C96AB",
borderRadius: "7px",color:'white',
opacity: 0.9}} onClick={() => handlePageChange(currentPage - 1)}> <span style={{cursor:'pointer',fontSize:19,fontFamily:'poppins',fontWeight:"bold"}}>-</span></button>
      )}
        {startButton > 1 && <span>...</span>}
        {Array.from({ length: endButton - startButton + 1 }, (_, i) => startButton + i).map(
          (page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
               disabled={page === currentPage}
               style={{cursor:'pointer',width: 32,height: 32,margin:'5px',color:'white',
/* UI Properties */
background:" #8C96AB 0% 0% no-repeat padding-box",
border: "1px solid #8C96AB",
borderRadius: "7px",
opacity: 0.9}}
            >
              <span  onClick={() => handlePageChange(page)} style={{cursor:'pointer',color:"white"}}>{page}</span>
            </button>
          )
        )}
        {endButton < totalPages && <span>...</span>}
      
      {currentPage < totalPages && (
        <button style={{cursor:'pointer',width:'50px',height:'30px',margin:"5px",background:" #8C96AB 0% 0% no-repeat padding-box",
border: "1px solid #8C96AB", color:'white',
borderRadius: "7px",
opacity: 0.9}} onClick={() => handlePageChange(currentPage + 1)}><span style={{cursor:'pointer',fontSize:19,fontFamily:'poppins',fontWeight:"bold"}}>+</span></button>
      )}</Grid>
    </>:<>  <Grid item xs={12} style={{position:'relative',margin:10, height: "291px", background: "#FFFFFF 0% 0% no-repeat padding-box", boxShadow: "0px 3px 6px #00000029", opacity: 1,fontSize:35,padding:95,color:"#192f60",fontFamily:'poppins',fontWeight:'bold'}}>Sorry, No result found</Grid></>}
   
    
        </Grid>
{/* Content goes here */}
</Grid>

</>): windowWidth>1010?(<><Grid item xs={1} style={{backgroundColor:"#fbfbfb"}}></Grid>
<Grid item xs={3} className={classes.filtersContainer}>

<h3 style={{ position: "absolute", top:-10, left: "25px", textAlign: "left", fontFamily: " Poppins",fontSize:"22px", letterSpacing: "0px", color: "#192F60", opacity: 1 }}>Filter</h3>

<h4 style={{ position: "absolute", top: "18px", left: "25px", textAlign: "left", font: "normal normal normal 16px/21px Poppins", letterSpacing: "0px", color: "#192F60", opacity: 1 }}>
            Select Location
          </h4>
          <input type="text" placeholder="Select location" onChange={(event) => setSearchQuery(event.target.value)} style={{ position: "absolute", top: "63px", left: "25px", width: "208px", height: "30px", border: "1px solid #8C96AB", borderRadius: "3px", opacity: 1 }} /><button onClick={handleSearch} style={{ position: "absolute", top: "65px", left: "172px", width: "60px", height: "30px",border:0, opacity: 1,cursor:'pointer',backgroundColor:'white',fontFamily:'poppins',fontSize:16,color:'#192f60' }}>Search</button>
          <h4 style={{ position: "absolute", top: "90px", left: "35px", textAlign: "left", fontFamily: " Poppins",fontSize:'17px',fontWeight:'bold', letterSpacing: "0px", color: "#192F60", opacity: 1 }}>
            Cuisine
          </h4>
          <input type="checkbox" name="Northindian" value="Northindian" onChange={handleCuisineChange} style={{ position: "absolute", top: "135px", left: "5px", width: "86px", height: "20px", textAlign: "left", font: "normal normal normal 14px/21px Poppins", letterSpacing: "0px", color: "#8C96AB", opacity: 1 }} /> <span style={{ position: "absolute", top: "135px", left: "65px", width: "86px", height: "20px", textAlign: "left", font: "normal normal normal 14px/21px Poppins", letterSpacing: "0px", color: "#8C96AB", opacity: 1 }}>North Indian</span>
           <input type="checkbox" name="Southindian" value="Southindian" onChange={handleCuisineChange}  style={{ position: "absolute", top: "165px", left: "5px", width: "86px", height: "20px", textAlign: "left", font: "normal normal normal 14px/21px Poppins", letterSpacing: "0px", color: "#8C96AB", opacity: 1 }} /> <span style={{ position: "absolute", top: "165px", left: "65px", width: "86px", height: "20px", textAlign: "left", font: "normal normal normal 14px/21px Poppins", letterSpacing: "0px", color: "#8C96AB", opacity: 1 }}>South Indian</span>
            <input type="checkbox" name="Chinese" value="Chinese" onChange={handleCuisineChange} style={{ position: "absolute", top: "195px", left: "5px", width: "86px", height: "20px", textAlign: "left", font: "normal normal normal 14px/21px Poppins", letterSpacing: "0px", color: "#8C96AB", opacity: 1 }} /> <span style={{ position: "absolute", top: "195px", left: "65px", width: "86px", height: "20px", textAlign: "left", font: "normal normal normal 14px/21px Poppins", letterSpacing: "0px", color: "#8C96AB", opacity: 1 }}>Chinese</span>
             <input type="checkbox" name="Fastfood" value="FastFood" onChange={handleCuisineChange}  style={{ position: "absolute", top: "225px", left: "5px", width: "86px", height: "20px", textAlign: "left", font: "normal normal normal 14px/21px Poppins", letterSpacing: "0px", color: "#8C96AB", opacity: 1 }} /> <span style={{ position: "absolute", top: "225px", left: "65px", width: "86px", height: "20px", textAlign: "left", font: "normal normal normal 14px/21px Poppins", letterSpacing: "0px", color: "#8C96AB", opacity: 1 }}>Fast Food</span>
              <input type="checkbox" name="Streetfood" value="Streetfood" onChange={handleCuisineChange}  style={{ position: "absolute", top: "255px", left: "5px", width: "86px", height: "20px", textAlign: "left", font: "normal normal normal 14px/21px Poppins", letterSpacing: "0px", color: "#8C96AB", opacity: 1 }} /> <span style={{ position: "absolute", top: "255px", left: "65px", width: "86px", height: "20px", textAlign: "left", font: "normal normal normal 14px/21px Poppins", letterSpacing: "0px", color: "#8C96AB", opacity: 1 }}>Street Food</span>
          <h3 style={{
                position: 'absolute',
                top: '275px',
                left: '35px',
                textAlign: 'left',
                fontFamily: 'poppins',
                fontSize: '16px',
                letterSpacing: '0px',
                color: '#192F60',
                opacity: '1'
            }}>Cost For Two</h3>
            <input type="radio" name="costForTwo" value="lessthan500" onChange={handleCostChange} style={{
                position: 'absolute',
                top: '310px',
                left: '1px',
                width: '104px',
                height: '20px',
                textAlign: 'left',
                letterSpacing: '0px',
                color: '#8C96AB',
                opacity: '1'
            }} /><span style={{
                position: 'absolute',
                top: '308px',
                left: '70px',
                width: '104px',
                height: '20px',
                textAlign: 'left',
                letterSpacing: '0px',
                color: '#8C96AB',
                opacity: '1'
            }}>less than 500</span>
             <input type="radio" name="costForTwo" value="500-1000" onChange={handleCostChange} style={{
                position: 'absolute',
                top: '335px',
                left: '1px',
                width: '104px',
                height: '20px',
                textAlign: 'left',
                letterSpacing: '0px',
                color: '#8C96AB',
                opacity: '1'
            }} /><span style={{
                position: 'absolute',
                top: '333px',
                left: '70px',
                width: '104px',
                height: '20px',
                textAlign: 'left',
                letterSpacing: '0px',
                color: '#8C96AB',
                opacity: '1'
            }}>500-1000</span>
             <input type="radio" name="costForTwo" value="1000-1500" onChange={handleCostChange} style={{
                position: 'absolute',
                top: '362px',
                left: '1px',
                width: '104px',
                height: '20px',
                textAlign: 'left',
                letterSpacing: '0px',
                color: '#8C96AB',
                opacity: '1'
            }} /><span style={{
                position: 'absolute',
                top: '358px',
                left: '70px',
                width: '104px',
                height: '20px',
                textAlign: 'left',
                letterSpacing: '0px',
                color: '#8C96AB',
                opacity: '1'
            }}>1000-1500</span>
             <input type="radio" name="costForTwo" value="1500-2000" onChange={handleCostChange} style={{
                position: 'absolute',
                top: '388px',
                left: '1px',
                width: '104px',
                height: '20px',
                textAlign: 'left',
                letterSpacing: '0px',
                color: '#8C96AB',
                opacity: '1'
            }} /><span style={{
                position: 'absolute',
                top: '385px',
                left: '70px',
                width: '104px',
                height: '20px',
                textAlign: 'left',
                letterSpacing: '0px',
                color: '#8C96AB',
                opacity: '1'
            }}>1500-2000</span>
             <input type="radio" name="costForTwo" value="Morethan2000" onChange={handleCostChange} style={{
                position: 'absolute',
                top: '414px',
                left: '1px',
                width: '104px',
                height: '20px',
                textAlign: 'left',
                letterSpacing: '0px',
                color: '#8C96AB',
                opacity: '1'
            }} /><span style={{
                position: 'absolute',
                top: '410px',
                left: '70px',
                width: '104px',
                height: '20px',
                textAlign: 'left',
                letterSpacing: '0px',
                color: '#8C96AB',
                opacity: '1'
            }}>More than 2000</span>

            <h4 style={{
                position: 'absolute',
                top: '450px',
                left: '35px',
                width: '37px',
                height: '25px',
                textAlign: 'left',
                font: 'normal normal 600 18px/27px Poppins',
                letterSpacing: '0px',
                color: '#192F60',
                opacity: '1'
            }}>Sort</h4>
            <input type="radio" name="sort" value="pricehightolow" onChange={()=>{sortDesc()}} style={{
                position: 'absolute',
                top: '500px',
                left: '1px',
                width: '114px',
                height: '20px',
                textAlign: 'left',
                font: 'normal normal normal 14px/21px Poppins',
                letterSpacing: '0px',
                color: '#8C96AB',
                opacity: '1'
            }} /><span style={{
                position: 'absolute',
                top: '500px',
                left: '75px',
                width: '114px',
                height: '20px',
                textAlign: 'left',
                font: 'normal normal normal 14px/21px Poppins',
                letterSpacing: '0px',
                color: '#8C96AB',
                opacity: '1'
            }}>Price High to Low</span>
            <input type="radio" name="sort" value="pricelowtohigh" onChange={()=>{sortAsc()}} style={{
                position: 'absolute',
                top: '525px',
                left: '1px',
                width: '114px',
                height: '20px',
                textAlign: 'left',
                font: 'normal normal normal 14px/21px Poppins',
                letterSpacing: '0px',
                color: '#8C96AB',
                opacity: '1'
            }} /><span style={{
                position: 'absolute',
                top: '525px',
                left: '75px',
                width: '114px',
                height: '20px',
                textAlign: 'left',
                font: 'normal normal normal 14px/21px Poppins',
                letterSpacing: '0px',
                color: '#8C96AB',
                opacity: '1'
            }}>Price Low to High</span>

</Grid>
<Grid item xs={7} style={{position:'relative',top:'10px',left:'30px'}}>
        <Grid container >
      {restaurants.length>0? <>{currentPageDivs.map((restaurants) => (
         
          <Grid key={restaurants._id} item xs={12} className="restdet" style={{ position:'relative',margin:10, height: "291px", background: "#FFFFFF 0% 0% no-repeat padding-box", boxShadow: "0px 3px 6px #00000029", opacity: 1 }}>
                 <Link to={`/details/${restaurants.restaurantName}/${restaurants.cuisine}/${restaurants.costfortwo}`}>
            <div className="image" style={{ position: "absolute", top: "30px", left: "30px", width: "120px", height: "120px", borderRadius: "9px", opacity: 1, backgroundColor:"red" }}>
            </div>
            <span style={{ position: "absolute", top: "38px", left: "194px", width: "303px", height: "43px", textAlign: "left", font: "normal normal 600 30px/46px Poppins", letterSpacing: "0px", color: "#192F60", opacity: 1 }}>
                {restaurants.restaurantName}
            </span>
            <span style={{ position: "absolute", top: "75px", left: "209px", width: "370px", height: "48px", textAlign: "left", font: "normal normal medium 16px/30px Poppins", letterSpacing: "0px", color: "#636F88", opacity: 1 }}>fort</span>
            <span  style={{ position: "absolute", top: "99px", left: "200px", width: "370px", height: "23px", textAlign: "left", font: "normal normal normal 16px/30px Poppins", letterSpacing: "0px", color: "#636F88", opacity: 1 }}>
                shop1,plotd,andlawdalasan
            </span>
               <Grid container style={{position: 'absolute',
    top: '182px',}}>
      <Grid item xs={1}></Grid>
      <Grid item xs={9} style={{
    height: '3px',
    backgroundColor:'#DEDFD5',
    border: '2px solid #D2D9E6',
    opacity: 1}}></Grid><Grid item xs={1}></Grid>
   </Grid>
            <span style={{ position: "absolute", top: "200px", left: "45px", width: "140px", height: "118px", textAlign: "left", font: "normal normal normal 16px/30px Poppins", letterSpacing: "0px", color: "#636F88", opacity: 1 }}>
                {restaurants.cuisine}
            </span>
            <span style={{ position: "absolute", top: "200px", left: "164px", width: "251px", height: "69px", textAlign: "left", font: "normal normal normal 16px/30px Poppins", letterSpacing: "0px", color: "#192F60", opacity: 1 }}>
                {restaurants.cost}
            </span></Link>
            </Grid>
          ))}
        <Grid item xs={12}>
           {currentPage < totalPages && (
        <button style={{cursor:'pointer',width:'50px',height:'30px',margin:"5px",background:" #8C96AB 0% 0% no-repeat padding-box",
border: "1px solid #8C96AB",
borderRadius: "7px",color:'white',
opacity: 0.9}} onClick={() => handlePageChange(currentPage - 1)}> <span style={{cursor:'pointer',fontSize:19,fontFamily:'poppins',fontWeight:"bold"}}>-</span></button>
      )}
        {startButton > 1 && <span>...</span>}
        {Array.from({ length: endButton - startButton + 1 }, (_, i) => startButton + i).map(
          (page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
               disabled={page === currentPage}
               style={{cursor:'pointer',width: 32,height: 32,margin:'5px',color:'white',
/* UI Properties */
background:" #8C96AB 0% 0% no-repeat padding-box",
border: "1px solid #8C96AB",
borderRadius: "7px",
opacity: 0.9}}
            >
              <span  onClick={() => handlePageChange(page)} style={{cursor:'pointer',color:"white"}}>{page}</span>
            </button>
          )
        )}
        {endButton < totalPages && <span>...</span>}
      
      {currentPage < totalPages && (
        <button style={{cursor:'pointer',width:'50px',height:'30px',margin:"5px",background:" #8C96AB 0% 0% no-repeat padding-box",
border: "1px solid #8C96AB", color:'white',
borderRadius: "7px",
opacity: 0.9}} onClick={() => handlePageChange(currentPage + 1)}><span style={{cursor:'pointer',fontSize:19,fontFamily:'poppins',fontWeight:"bold"}}>+</span></button>
      )}</Grid></>:<> <Grid item xs={12} style={{position:'relative',margin:10, height: "291px", background: "#FFFFFF 0% 0% no-repeat padding-box", boxShadow: "0px 3px 6px #00000029", opacity: 1,fontSize:35,padding:95,color:"#192f60",fontFamily:'poppins',fontWeight:'bold'}}>Sorry, No result found</Grid></>}
    </Grid>
{/* Content goes here */}
</Grid> </>): windowWidth>788 ?(<><Grid item xs={1} style={{backgroundColor:"#fbfbfb"}}></Grid>
<Grid item xs={4} className={classes.filtersContainer}>

<h3 style={{ position: "absolute", top:-10, left: "25px", textAlign: "left", fontFamily: " Poppins",fontSize:"22px", letterSpacing: "0px", color: "#192F60", opacity: 1 }}>Filter</h3>

<h4 style={{ position: "absolute", top: "18px", left: "25px", textAlign: "left", font: "normal normal normal 16px/21px Poppins", letterSpacing: "0px", color: "#192F60", opacity: 1 }}>
            Select Location
          </h4>
          <input type="text" placeholder="Select location" onChange={(event) => setSearchQuery(event.target.value)} style={{ position: "absolute", top: "63px", left: "25px", width: "208px", height: "30px", border: "1px solid #8C96AB", borderRadius: "3px", opacity: 1 }} /><button onClick={handleSearch} style={{ position: "absolute", top: "65px", left: "172px", width: "60px", height: "30px",border:0, opacity: 1,cursor:'pointer',backgroundColor:'white',fontFamily:'poppins',fontSize:16,color:'#192f60' }}>Search</button>
          <h4 style={{ position: "absolute", top: "90px", left: "35px", textAlign: "left", fontFamily: " Poppins",fontSize:'17px',fontWeight:'bold', letterSpacing: "0px", color: "#192F60", opacity: 1 }}>
            Cuisine
          </h4>
          <input type="checkbox" name="Northindian" value="Northindian" onChange={handleCuisineChange} style={{ position: "absolute", top: "135px", left: "5px", width: "86px", height: "20px", textAlign: "left", font: "normal normal normal 14px/21px Poppins", letterSpacing: "0px", color: "#8C96AB", opacity: 1 }} /> <span style={{ position: "absolute", top: "135px", left: "65px", width: "86px", height: "20px", textAlign: "left", font: "normal normal normal 14px/21px Poppins", letterSpacing: "0px", color: "#8C96AB", opacity: 1 }}>North Indian</span>
           <input type="checkbox" name="Southindian" value="Southindian" onChange={handleCuisineChange}  style={{ position: "absolute", top: "165px", left: "5px", width: "86px", height: "20px", textAlign: "left", font: "normal normal normal 14px/21px Poppins", letterSpacing: "0px", color: "#8C96AB", opacity: 1 }} /> <span style={{ position: "absolute", top: "165px", left: "65px", width: "86px", height: "20px", textAlign: "left", font: "normal normal normal 14px/21px Poppins", letterSpacing: "0px", color: "#8C96AB", opacity: 1 }}>South Indian</span>
            <input type="checkbox" name="Chinese" value="Chinese" onChange={handleCuisineChange} style={{ position: "absolute", top: "195px", left: "5px", width: "86px", height: "20px", textAlign: "left", font: "normal normal normal 14px/21px Poppins", letterSpacing: "0px", color: "#8C96AB", opacity: 1 }} /> <span style={{ position: "absolute", top: "195px", left: "65px", width: "86px", height: "20px", textAlign: "left", font: "normal normal normal 14px/21px Poppins", letterSpacing: "0px", color: "#8C96AB", opacity: 1 }}>Chinese</span>
             <input type="checkbox" name="Fastfood" value="FastFood" onChange={handleCuisineChange}  style={{ position: "absolute", top: "225px", left: "5px", width: "86px", height: "20px", textAlign: "left", font: "normal normal normal 14px/21px Poppins", letterSpacing: "0px", color: "#8C96AB", opacity: 1 }} /> <span style={{ position: "absolute", top: "225px", left: "65px", width: "86px", height: "20px", textAlign: "left", font: "normal normal normal 14px/21px Poppins", letterSpacing: "0px", color: "#8C96AB", opacity: 1 }}>Fast Food</span>
              <input type="checkbox" name="Streetfood" value="Streetfood" onChange={handleCuisineChange}  style={{ position: "absolute", top: "255px", left: "5px", width: "86px", height: "20px", textAlign: "left", font: "normal normal normal 14px/21px Poppins", letterSpacing: "0px", color: "#8C96AB", opacity: 1 }} /> <span style={{ position: "absolute", top: "255px", left: "65px", width: "86px", height: "20px", textAlign: "left", font: "normal normal normal 14px/21px Poppins", letterSpacing: "0px", color: "#8C96AB", opacity: 1 }}>Street Food</span>
          <h3 style={{
                position: 'absolute',
                top: '275px',
                left: '35px',
                textAlign: 'left',
                fontFamily: 'poppins',
                fontSize: '16px',
                letterSpacing: '0px',
                color: '#192F60',
                opacity: '1'
            }}>Cost For Two</h3>
            <input type="radio" name="costForTwo" value="lessthan500" onChange={handleCostChange} style={{
                position: 'absolute',
                top: '310px',
                left: '1px',
                width: '104px',
                height: '20px',
                textAlign: 'left',
                letterSpacing: '0px',
                color: '#8C96AB',
                opacity: '1'
            }} /><span style={{
                position: 'absolute',
                top: '308px',
                left: '70px',
                width: '104px',
                height: '20px',
                textAlign: 'left',
                letterSpacing: '0px',
                color: '#8C96AB',
                opacity: '1'
            }}>less than 500</span>
             <input type="radio" name="costForTwo" value="500-1000" onChange={handleCostChange} style={{
                position: 'absolute',
                top: '335px',
                left: '1px',
                width: '104px',
                height: '20px',
                textAlign: 'left',
                letterSpacing: '0px',
                color: '#8C96AB',
                opacity: '1'
            }} /><span style={{
                position: 'absolute',
                top: '333px',
                left: '70px',
                width: '104px',
                height: '20px',
                textAlign: 'left',
                letterSpacing: '0px',
                color: '#8C96AB',
                opacity: '1'
            }}>500-1000</span>
             <input type="radio" name="costForTwo" value="1000-1500" onChange={handleCostChange} style={{
                position: 'absolute',
                top: '362px',
                left: '1px',
                width: '104px',
                height: '20px',
                textAlign: 'left',
                letterSpacing: '0px',
                color: '#8C96AB',
                opacity: '1'
            }} /><span style={{
                position: 'absolute',
                top: '358px',
                left: '70px',
                width: '104px',
                height: '20px',
                textAlign: 'left',
                letterSpacing: '0px',
                color: '#8C96AB',
                opacity: '1'
            }}>1000-1500</span>
             <input type="radio" name="costForTwo" value="1500-2000" onChange={handleCostChange} style={{
                position: 'absolute',
                top: '388px',
                left: '1px',
                width: '104px',
                height: '20px',
                textAlign: 'left',
                letterSpacing: '0px',
                color: '#8C96AB',
                opacity: '1'
            }} /><span style={{
                position: 'absolute',
                top: '385px',
                left: '70px',
                width: '104px',
                height: '20px',
                textAlign: 'left',
                letterSpacing: '0px',
                color: '#8C96AB',
                opacity: '1'
            }}>1500-2000</span>
             <input type="radio" name="costForTwo" value="Morethan2000" onChange={handleCostChange} style={{
                position: 'absolute',
                top: '414px',
                left: '1px',
                width: '104px',
                height: '20px',
                textAlign: 'left',
                letterSpacing: '0px',
                color: '#8C96AB',
                opacity: '1'
            }} /><span style={{
                position: 'absolute',
                top: '410px',
                left: '70px',
                width: '104px',
                height: '20px',
                textAlign: 'left',
                letterSpacing: '0px',
                color: '#8C96AB',
                opacity: '1'
            }}>More than 2000</span>

            <h4 style={{
                position: 'absolute',
                top: '450px',
                left: '35px',
                width: '37px',
                height: '25px',
                textAlign: 'left',
                font: 'normal normal 600 18px/27px Poppins',
                letterSpacing: '0px',
                color: '#192F60',
                opacity: '1'
            }}>Sort</h4>
            <input type="radio" name="sort" value="pricehightolow" onChange={()=>{sortDesc()}} style={{
                position: 'absolute',
                top: '500px',
                left: '1px',
                width: '114px',
                height: '20px',
                textAlign: 'left',
                font: 'normal normal normal 14px/21px Poppins',
                letterSpacing: '0px',
                color: '#8C96AB',
                opacity: '1'
            }} /><span style={{
                position: 'absolute',
                top: '500px',
                left: '75px',
                width: '114px',
                height: '20px',
                textAlign: 'left',
                font: 'normal normal normal 14px/21px Poppins',
                letterSpacing: '0px',
                color: '#8C96AB',
                opacity: '1'
            }}>Price High to Low</span>
            <input type="radio" name="sort" value="pricelowtohigh" onChange={()=>{sortAsc()}} style={{
                position: 'absolute',
                top: '525px',
                left: '1px',
                width: '114px',
                height: '20px',
                textAlign: 'left',
                font: 'normal normal normal 14px/21px Poppins',
                letterSpacing: '0px',
                color: '#8C96AB',
                opacity: '1'
            }} /><span style={{
                position: 'absolute',
                top: '525px',
                left: '75px',
                width: '114px',
                height: '20px',
                textAlign: 'left',
                font: 'normal normal normal 14px/21px Poppins',
                letterSpacing: '0px',
                color: '#8C96AB',
                opacity: '1'
            }}>Price Low to High</span>

</Grid>
<Grid item xs={6} style={{position:'relative',top:'10px',left:'30px'}}>
       <Grid container >
      {restaurants.length>0 ? <>{currentPageDivs.map((restaurants) => (
            <Grid key={restaurants._id} item xs={12} className="restdet"  style={{ position:'relative',margin:10, height: "291px", background: "#FFFFFF 0% 0% no-repeat padding-box", boxShadow: "0px 3px 6px #00000029", opacity: 1 }}>
             <Link to={`/details/${restaurants.restaurantName}/${restaurants.cuisine}/${restaurants.costfortwo}`}>
            <div className="image" style={{ position: "absolute", top: "30px", left: "30px", width: "120px", height: "120px", borderRadius: "9px", opacity: 1, backgroundColor:"red" }}>
            </div>
            <span style={{ position: "absolute", top: "38px", left: "194px", width: "303px", height: "43px", textAlign: "left", font: "normal normal 600 30px/46px Poppins", letterSpacing: "0px", color: "#192F60", opacity: 1 }}>
                {restaurants.restaurantName}
            </span>
            <span style={{ position: "absolute", top: "75px", left: "209px", width: "370px", height: "48px", textAlign: "left", font: "normal normal medium 16px/30px Poppins", letterSpacing: "0px", color: "#636F88", opacity: 1 }}>fort</span>
            <span  style={{ position: "absolute", top: "99px", left: "200px", width: "370px", height: "23px", textAlign: "left", font: "normal normal normal 16px/30px Poppins", letterSpacing: "0px", color: "#636F88", opacity: 1 }}>
                shop1,plotd,andlawdalasan
            </span>
               <Grid container style={{position: 'absolute',
    top: '182px',}}>
      <Grid item xs={1}></Grid>
      <Grid item xs={9} style={{
    height: '3px',
    backgroundColor:'#DEDFD5',
    border: '2px solid #D2D9E6',
    opacity: 1}}></Grid><Grid item xs={1}></Grid>
   </Grid>
            <span style={{ position: "absolute", top: "200px", left: "45px", width: "140px", height: "118px", textAlign: "left", font: "normal normal normal 16px/30px Poppins", letterSpacing: "0px", color: "#636F88", opacity: 1 }}>
                {restaurants.cuisine}
            </span>
            <span style={{ position: "absolute", top: "200px", left: "164px", width: "251px", height: "69px", textAlign: "left", font: "normal normal normal 16px/30px Poppins", letterSpacing: "0px", color: "#192F60", opacity: 1 }}>
                {restaurants.cost}
            </span></Link>
            </Grid>
          ))}
        <Grid item xs={12}>
           {currentPage < totalPages && (
        <button style={{cursor:'pointer',width:'50px',height:'30px',margin:"5px",background:" #8C96AB 0% 0% no-repeat padding-box",
border: "1px solid #8C96AB",
borderRadius: "7px",color:'white',
opacity: 0.9}} onClick={() => handlePageChange(currentPage - 1)}> <span style={{cursor:'pointer',fontSize:19,fontFamily:'poppins',fontWeight:"bold"}}>-</span></button>
      )}
        {startButton > 1 && <span>...</span>}
        {Array.from({ length: endButton - startButton + 1 }, (_, i) => startButton + i).map(
          (page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
               disabled={page === currentPage}
               style={{cursor:'pointer',width: 32,height: 32,margin:'5px',color:'white',
/* UI Properties */
background:" #8C96AB 0% 0% no-repeat padding-box",
border: "1px solid #8C96AB",
borderRadius: "7px",
opacity: 0.9}}
            >
              <span  onClick={() => handlePageChange(page)} style={{cursor:'pointer',color:"white"}}>{page}</span>
            </button>
          )
        )}
        {endButton < totalPages && <span>...</span>}
      
      {currentPage < totalPages && (
        <button style={{cursor:'pointer',width:'50px',height:'30px',margin:"5px",background:" #8C96AB 0% 0% no-repeat padding-box",
border: "1px solid #8C96AB", color:'white',
borderRadius: "7px",
opacity: 0.9}} onClick={() => handlePageChange(currentPage + 1)}><span style={{cursor:'pointer',fontSize:19,fontFamily:'poppins',fontWeight:"bold"}}>+</span></button>
      )}</Grid>
    </>:(<> <Grid item xs={12} style={{position:'relative',margin:10, height: "291px", background: "#FFFFFF 0% 0% no-repeat padding-box", boxShadow: "0px 3px 6px #00000029", opacity: 1,fontSize:35,padding:95,color:"#192f60",fontFamily:'poppins',fontWeight:'bold'}}>Sorry, No result found</Grid></>)}
</Grid></Grid>
</>):(<><Grid item xs={3} style={{backgroundColor:"#fbfbfb"}}></Grid>
<Grid item xs={7} className={classes.filtersContainer}>

<h3 style={{ position: "absolute", top:-10, left: "25px", textAlign: "left", fontFamily: " Poppins",fontSize:"22px", letterSpacing: "0px", color: "#192F60", opacity: 1 }}>Filter</h3>

<h4 style={{ position: "absolute", top: "18px", left: "25px", textAlign: "left", font: "normal normal normal 16px/21px Poppins", letterSpacing: "0px", color: "#192F60", opacity: 1 }}>
            Select Location
          </h4>
          <input type="text" placeholder="Select location" onChange={(event) => setSearchQuery(event.target.value)} style={{ position: "absolute", top: "63px", left: "25px", width: "208px", height: "30px", border: "1px solid #8C96AB", borderRadius: "3px", opacity: 1 }} /><button onClick={handleSearch} style={{ position: "absolute", top: "65px", left: "172px", width: "60px", height: "30px",border:0, opacity: 1,cursor:'pointer',backgroundColor:'white',fontFamily:'poppins',fontSize:16,color:'#192f60' }}>Search</button>
          <h4 style={{ position: "absolute", top: "90px", left: "35px", textAlign: "left", fontFamily: " Poppins",fontSize:'17px',fontWeight:'bold', letterSpacing: "0px", color: "#192F60", opacity: 1 }}>
            Cuisine
          </h4>
          <input type="checkbox" name="Northindian" value="Northindian" onChange={handleCuisineChange} style={{ position: "absolute", top: "135px", left: "5px", width: "86px", height: "20px", textAlign: "left", font: "normal normal normal 14px/21px Poppins", letterSpacing: "0px", color: "#8C96AB", opacity: 1 }} /> <span style={{ position: "absolute", top: "135px", left: "65px", width: "86px", height: "20px", textAlign: "left", font: "normal normal normal 14px/21px Poppins", letterSpacing: "0px", color: "#8C96AB", opacity: 1 }}>North Indian</span>
           <input type="checkbox" name="Southindian" value="Southindian" onChange={handleCuisineChange}  style={{ position: "absolute", top: "165px", left: "5px", width: "86px", height: "20px", textAlign: "left", font: "normal normal normal 14px/21px Poppins", letterSpacing: "0px", color: "#8C96AB", opacity: 1 }} /> <span style={{ position: "absolute", top: "165px", left: "65px", width: "86px", height: "20px", textAlign: "left", font: "normal normal normal 14px/21px Poppins", letterSpacing: "0px", color: "#8C96AB", opacity: 1 }}>South Indian</span>
            <input type="checkbox" name="Chinese" value="Chinese" onChange={handleCuisineChange} style={{ position: "absolute", top: "195px", left: "5px", width: "86px", height: "20px", textAlign: "left", font: "normal normal normal 14px/21px Poppins", letterSpacing: "0px", color: "#8C96AB", opacity: 1 }} /> <span style={{ position: "absolute", top: "195px", left: "65px", width: "86px", height: "20px", textAlign: "left", font: "normal normal normal 14px/21px Poppins", letterSpacing: "0px", color: "#8C96AB", opacity: 1 }}>Chinese</span>
             <input type="checkbox" name="Fastfood" value="FastFood" onChange={handleCuisineChange}  style={{ position: "absolute", top: "225px", left: "5px", width: "86px", height: "20px", textAlign: "left", font: "normal normal normal 14px/21px Poppins", letterSpacing: "0px", color: "#8C96AB", opacity: 1 }} /> <span style={{ position: "absolute", top: "225px", left: "65px", width: "86px", height: "20px", textAlign: "left", font: "normal normal normal 14px/21px Poppins", letterSpacing: "0px", color: "#8C96AB", opacity: 1 }}>Fast Food</span>
              <input type="checkbox" name="Streetfood" value="Streetfood" onChange={handleCuisineChange}  style={{ position: "absolute", top: "255px", left: "5px", width: "86px", height: "20px", textAlign: "left", font: "normal normal normal 14px/21px Poppins", letterSpacing: "0px", color: "#8C96AB", opacity: 1 }} /> <span style={{ position: "absolute", top: "255px", left: "65px", width: "86px", height: "20px", textAlign: "left", font: "normal normal normal 14px/21px Poppins", letterSpacing: "0px", color: "#8C96AB", opacity: 1 }}>Street Food</span>
          <h3 style={{
                position: 'absolute',
                top: '275px',
                left: '35px',
                textAlign: 'left',
                fontFamily: 'poppins',
                fontSize: '16px',
                letterSpacing: '0px',
                color: '#192F60',
                opacity: '1'
            }}>Cost For Two</h3>
            <input type="radio" name="costForTwo" value="lessthan500" onChange={handleCostChange} style={{
                position: 'absolute',
                top: '310px',
                left: '1px',
                width: '104px',
                height: '20px',
                textAlign: 'left',
                letterSpacing: '0px',
                color: '#8C96AB',
                opacity: '1'
            }} /><span style={{
                position: 'absolute',
                top: '308px',
                left: '70px',
                width: '104px',
                height: '20px',
                textAlign: 'left',
                letterSpacing: '0px',
                color: '#8C96AB',
                opacity: '1'
            }}>less than 500</span>
             <input type="radio" name="costForTwo" value="500-1000" onChange={handleCostChange} style={{
                position: 'absolute',
                top: '335px',
                left: '1px',
                width: '104px',
                height: '20px',
                textAlign: 'left',
                letterSpacing: '0px',
                color: '#8C96AB',
                opacity: '1'
            }} /><span style={{
                position: 'absolute',
                top: '333px',
                left: '70px',
                width: '104px',
                height: '20px',
                textAlign: 'left',
                letterSpacing: '0px',
                color: '#8C96AB',
                opacity: '1'
            }}>500-1000</span>
             <input type="radio" name="costForTwo" value="1000-1500" onChange={handleCostChange} style={{
                position: 'absolute',
                top: '362px',
                left: '1px',
                width: '104px',
                height: '20px',
                textAlign: 'left',
                letterSpacing: '0px',
                color: '#8C96AB',
                opacity: '1'
            }} /><span style={{
                position: 'absolute',
                top: '358px',
                left: '70px',
                width: '104px',
                height: '20px',
                textAlign: 'left',
                letterSpacing: '0px',
                color: '#8C96AB',
                opacity: '1'
            }}>1000-1500</span>
             <input type="radio" name="costForTwo" value="1500-2000" onChange={handleCostChange} style={{
                position: 'absolute',
                top: '388px',
                left: '1px',
                width: '104px',
                height: '20px',
                textAlign: 'left',
                letterSpacing: '0px',
                color: '#8C96AB',
                opacity: '1'
            }} /><span style={{
                position: 'absolute',
                top: '385px',
                left: '70px',
                width: '104px',
                height: '20px',
                textAlign: 'left',
                letterSpacing: '0px',
                color: '#8C96AB',
                opacity: '1'
            }}>1500-2000</span>
             <input type="radio" name="costForTwo" value="Morethan2000" onChange={handleCostChange} style={{
                position: 'absolute',
                top: '414px',
                left: '1px',
                width: '104px',
                height: '20px',
                textAlign: 'left',
                letterSpacing: '0px',
                color: '#8C96AB',
                opacity: '1'
            }} /><span style={{
                position: 'absolute',
                top: '410px',
                left: '70px',
                width: '104px',
                height: '20px',
                textAlign: 'left',
                letterSpacing: '0px',
                color: '#8C96AB',
                opacity: '1'
            }}>More than 2000</span>

            <h4 style={{
                position: 'absolute',
                top: '450px',
                left: '35px',
                width: '37px',
                height: '25px',
                textAlign: 'left',
                font: 'normal normal 600 18px/27px Poppins',
                letterSpacing: '0px',
                color: '#192F60',
                opacity: '1'
            }}>Sort</h4>
            <input type="radio" name="sort" value="pricehightolow" onChange={()=>{sortDesc()}} style={{
                position: 'absolute',
                top: '500px',
                left: '1px',
                width: '114px',
                height: '20px',
                textAlign: 'left',
                font: 'normal normal normal 14px/21px Poppins',
                letterSpacing: '0px',
                color: '#8C96AB',
                opacity: '1'
            }} /><span style={{
                position: 'absolute',
                top: '500px',
                left: '75px',
                width: '114px',
                height: '20px',
                textAlign: 'left',
                font: 'normal normal normal 14px/21px Poppins',
                letterSpacing: '0px',
                color: '#8C96AB',
                opacity: '1'
            }}>Price High to Low</span>
            <input type="radio" name="sort" value="pricelowtohigh" onChange={()=>{sortAsc()}} style={{
                position: 'absolute',
                top: '525px',
                left: '1px',
                width: '114px',
                height: '20px',
                textAlign: 'left',
                font: 'normal normal normal 14px/21px Poppins',
                letterSpacing: '0px',
                color: '#8C96AB',
                opacity: '1'
            }} /><span style={{
                position: 'absolute',
                top: '525px',
                left: '75px',
                width: '114px',
                height: '20px',
                textAlign: 'left',
                font: 'normal normal normal 14px/21px Poppins',
                letterSpacing: '0px',
                color: '#8C96AB',
                opacity: '1'
            }}>Price Low to High</span>

</Grid>
<Grid item xs={11} style={{position:'relative',top:'10px',left:'30px'}}>
        <Grid container >
          {restaurants.length>0? <>{restaurants.map(restaurant => (
            <Grid item xs={12} className="restdet" key={restaurant.id}  style={{ position:'relative', margin:10, height: "291px", background: "#FFFFFF 0% 0% no-repeat padding-box", boxShadow: "0px 3px 6px #00000029",border:'2px solid lightgrey', opacity: 1 }}>
           <Link to={`/details/${restaurants.restaurantName}/${restaurants.cuisine}/${restaurants.costfortwo}`}>
            <div className="image" style={{ position: "absolute", top: "30px", left: "30px", width: "120px", height: "120px", borderRadius: "9px", opacity: 1, backgroundColor:"red" }}>
            </div>
            <span style={{ position: "absolute", top: "38px", left: "194px", width: "303px", height: "43px", textAlign: "left", font: "normal normal 600 30px/46px Poppins", letterSpacing: "0px", color: "#192F60", opacity: 1 }}>
                {restaurant.restaurantName}
            </span>
            <span style={{ position: "absolute", top: "75px", left: "209px", width: "370px", height: "48px", textAlign: "left", font: "normal normal medium 16px/30px Poppins", letterSpacing: "0px", color: "#636F88", opacity: 1 }}>fort</span>
            <span  style={{ position: "absolute", top: "99px", left: "200px", width: "370px", height: "23px", textAlign: "left", font: "normal normal normal 16px/30px Poppins", letterSpacing: "0px", color: "#636F88", opacity: 1 }}>
                shop1,plotd,andlawdalasan
            </span>
              <Grid container style={{position: 'absolute',
    top: '182px',}}>
      <Grid item xs={1}></Grid>
      <Grid item xs={9} style={{
    height: '3px',
    backgroundColor:'#DEDFD5',
    border: '2px solid #D2D9E6',
    opacity: 1}}></Grid><Grid item xs={1}></Grid>
   </Grid>
            <span style={{ position: "absolute", top: "200px", left: "45px", width: "140px", height: "118px", textAlign: "left", font: "normal normal normal 16px/30px Poppins", letterSpacing: "0px", color: "#636F88", opacity: 1 }}>
                {restaurant.cuisine}
            </span>
            <span style={{ position: "absolute", top: "200px", left: "164px", width: "251px", height: "69px", textAlign: "left", font: "normal normal normal 16px/30px Poppins", letterSpacing: "0px", color: "#192F60", opacity: 1 }}>
                {restaurant.cost}
            </span></Link>
            </Grid>
          ))}
        </>:(<> <Grid item xs={12} style={{position:'relative',margin:10, height: "291px", background: "#FFFFFF 0% 0% no-repeat padding-box", boxShadow: "0px 3px 6px #00000029", opacity: 1,fontSize:35,padding:95,color:"#192f60",fontFamily:'poppins',fontWeight:'bold'}}>Sorry, No result found</Grid></>) }

</Grid></Grid>
</>)}

</Grid></div>
);
};
export default FilterPage;