import React, {useState,useEffect}from "react";
import image from './Background.png'
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { ImCross } from 'react-icons/im'
   import {  BsFacebook } from "react-icons/bs";

const useStyles = makeStyles({
root: {
    width: '100%',
    height: '150%',
    display: 'flex', flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding:0,
    margin:0
  },
  topdiv: {
    flex: 1,
    width: '100%',
    height: 'auto',
    overflow: "auto",
    padding:20,
    position:'absolute',top:0,left:0,
    borderBottom:'5px solid black',background: `linear-gradient(to bottom, rgba(0, 0, 0, 0.7), transparent), url(${image})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    zIndex:'-1',
  },
  login: {
    background: 'rgba(0, 0, 0, 0)',
    width: '89px',
    height: '46px',cursor:'pointer',color:'white',
    border: '1px solid #FFFFFF',
    borderRadius: '3px',
    opacity: '1',
    margin:10,
  },
  signup: {
    background: 'rgba(0, 0, 0, 0)',
    width: '151px',cursor:'pointer',color:'white',
    height: '46px',
    border: '1px solid #FFFFFF',
    borderRadius: '3px',
    opacity: '1',
    margin:10,
  },
  e: {
    width: '147px',
    height: '147px',
    background: '#FFFFFF 0% 0% no-repeat padding-box',
    borderRadius: '50%',
    opacity: 1,
  display: "flex",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
    margin:10,
  },
  heading1: {
    width: '758px',
    height: '51px',
    textAlign: 'left',
    font: 'normal normal 600 50px Poppins',
    letterSpacing: '0px',
    color: '#FFFFFF',
    opacity: 1,
    margin:10,
  },
  input1: {
    width: '275px',
    height: '60px',
    background: '#FFFFFF 0% 0% no-repeat padding-box',
    opacity: 1,
    margin:20,fontFamily:'poppins',fontSize:22,fontColor:'#192f60'
  },
  restaurantSearch: {
    width: '477px',
    height: '60px',
    background: '#FFFFFF 0% 0% no-repeat padding-box',
    opacity: 1,
    margin:20,
    fontFamily:'poppins',fontSize:22,fontColor:'#192f60'
  },
  root: {
    height: '100vh',
  },
bottomDiv: {
    flex:2,position:'relative',width:'100%',
   height: '80vh',zIndex:'2'
  },
  quickSearch: {
    width: '360px',
    height: '160px',
    margin: '30px',
    background: '#FFFFFF 0% 0% no-repeat padding-box',
    boxShadow: '0px 3px 6px #00000029',
    position: 'relative',top:115,
    '& img': {
      position: 'absolute',
      top: '1px',
      left: '1px',
      width: '160px',
      height: '160px',
    },
    '& span': {
      position: 'absolute',
      font: 'normal normal normal 14px/21px Poppins',
      letterSpacing: '0px',
      color: '#8C96AB',
    },
    '& span:first-child': {
      font: 'normal normal 600 18px/27px Poppins',
      color: '#192F60',
      top: '12px',
      left: '189px',
      width: '88px',
      height: '25px',
      textAlign: 'left',
    },
    '& span:last-child': {
      top: '39px',
      left: '189px',
      width: '138px',
      height: '62px',
      textAlign: 'left',
    },
  },
  header: {
    position:'absolute',top:15,margin:10,left:95,
    font: 'normal normal bold 30px/35px Poppins',
    letterSpacing: '0px',
    color: '#fbfbfb',
    opacity: 1,
  },
  subheader: {
    font: 'normal normal normal 18px/27px Poppins',
    letterSpacing: '0px',
    color: '#fbfbfb',
    opacity: 1,
    position:'absolute',top:75,left:95
  }})
  
//   return (<>
//    { showBlack && ( <Grid container >
//        <Grid item xs={12} style={{position:'absolute',top:0,left:0,width:"1515px",height:"900px",backgroundColor:"black",opacity:0.6,zIndex: 2,}}></Grid></Grid>)}
//        {show && (
//     <div
//       style={{
//         width: 350,
//         height: 300,
//         backgroundColor: "#fbfbfb",
//         position: "absolute",
//         top: 170,
//         zIndex:3,borderRadius: 5,
//       }}
//     ><div style={{cursor:"pointer",position:'absolute',top:'10px',left:200}}><ImCross onClick={hideAllClick} size={24} color="#333" /></div>
//       <span
//         style={{
//           position: "absolute",
//           top: 12,
//           left: 34,
//           fontSize: 25,
//           color: "#192f60",
//         }}
//       >
//         {span1Content}
//       </span>
//       <button
//         style={{
//           width: 300,
//           height: 40,
//           position: "absolute",
//           top: 70, fontSize: 19,
//           fontFamily: "Poppins",
//           color: "#192f60",
//           left: 20,border: "1px lightgrey solid",
//           borderRadius: 5,
//         }}
//       >
//          Continue with Gmail
//       </button>
//       <button
//         style={{
//           width: 300,
//           height: 40,
//           position: "absolute",
//           top: 120,
//           left: 20, fontSize: 19,
//           fontFamily: "Poppins",
//           color: "#192f60",
//           border: "1px lightgrey solid",
//           borderRadius: 5,
//         }}
//       >
//         <BsFacebook />
//         Continue with Facebook
//       </button>
//       <div
//         style={{
//           width: 300,
//           height: 0,
//           border: "1px solid lightgrey",
//           position: "absolute",
//           top: 250,
//           left: 20,
//         }}
//       />
//       <span
//         style={{
//           position: "absolute",
//           bottom: 17,
//           left: 61,
//           fontSize: 17,
//           fontFamily: "Poppins",
//           color: "#192f60",
//         }}
//       >
//         {span2Content}
//       </span>
//       <button onClick={handleClick}
//         style={{
//           color: "#ce0505",cursor:'pointer',
//           fontFamily: "Poppins",
//           fontSize: 14,
//           position: "absolute",
//           bottom: 17,backgroundColor:'#fbfbfb',
//           right: 71,border:0,
//         }}
//       >
//         {span3Content}
//       </button>
//     </div>)}</>
//   );
// };
const TopDiv = () => {
   const classes = useStyles()
   const [location, setLocation] = useState('');
   const [showBlack,setShowBlack] = useState(false)
 const handleClick = () => {}
 

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

   const [restInputValue, setRestInputValue] = useState('');
  const [restMatches, setRestMatches] = useState([]);
  const [noRestMatches, setNoRestMatches] = useState(false);
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
  useEffect(() => {
    const fetchRestMatches = async () => {
      const response = await fetch(`http://localhost:3001/restaurants/rest/${restInputValue}`);
      const data = await response.json();
      console.log(data,"ll")
      if (data.length > 0) {
        setRestMatches(data);
        console.log(restMatches,"yy")
        setNoRestMatches(false);
      } else {
        setRestMatches([]);
        setNoRestMatches(true);
      }
    };

    if (restInputValue.length > 0) {
      fetchRestMatches();
    } else {
      setRestMatches([]);
      setNoRestMatches(false);
    }
  }, [restInputValue]);

    const handleRestItemClick = (item) => {
    setRestInputValue(item.restaurantName);
    setRestMatches([]);
    setNoRestMatches(false);
  };
  const handleRestInputChange = (event) => {
   

    setRestInputValue(event.target.value);
    console.log(restInputValue)
  };

  const [inputValue, setInputValue] = useState('');
  const [locationMatches, setLocationMatches] = useState([]);
  const [noMatches, setNoMatches] = useState(false);
  const [locat2,setLocat2] = useState([])
  
  useEffect(() => {
    const fetchLocationMatches = async () => {
       fetch(`http://localhost:3001/restaurants/location/${inputValue}`)
      .then(response => response.json())
      .then(data => {  if (data.length > 0) {console.log(data)
        setLocationMatches(data);
        console.log(locationMatches,"locmatches")
        setNoMatches(false);
      } else {
        setLocationMatches([]);
        setNoMatches(true);
      }})
      .catch(error => console.error(error));
    };

    if (inputValue.length > 0) {
      fetchLocationMatches();
    } else {
      setLocationMatches([]);
      setNoMatches(false);
    }
  }, [inputValue]);
   
useEffect(()=>{
   const uniqueLocations = [...new Set(locationMatches.map((restaurant) => restaurant.location))];
    setLocat2(uniqueLocations);
},[locationMatches])
  
  
  const handleInputChange = (event) => {
    console.log('lawda')
    setInputValue(event.target.value);
    console.log(inputValue)
  };

  const handleItemClick = (item) => {
    setInputValue(item.location);
    setLocationMatches([]);
    setNoMatches(false);
  };
   const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const handleLoginClick = () => {
    setShowBlack(true)
    setShowLogin(true);
  };

  const handleSignupClick = () => {
    setShowSignup(true);setShowBlack(true)
  };

  const handleCloseClick = () => {
    setShowBlack(false);
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
  return (
      
      <Grid container className={classes.topdiv} >

         <Grid item xs={12}>
        <div className={classes.image} />
      </Grid>
        {windowWidth > 1000 ? (
        <>
        <Grid container spacing={8}>
         <Grid item xs={1}>
        </Grid> <Grid item xs={1}>
        </Grid>
         <Grid item xs={1}>
        </Grid> <Grid item xs={1}>
        </Grid>
         <Grid item xs={1}>
        </Grid> <Grid item xs={1}>
        </Grid>
         <Grid item xs={1}>
        </Grid> <Grid item xs={1}>
        </Grid>
           <Grid item xs={1}>
          <button className={classes.login} onClick={()=>{handleLoginClick()}}>
            <span>Login</span>
          </button>
        </Grid>
        <Grid item xs={1}>
          <button className={classes.signup} onClick={()=>{handleSignupClick()}}>
            <span>Create an account</span>
          </button>
        </Grid>
        <Grid item xs={1}>
        </Grid>
         <Grid item xs={1}>
        </Grid> </Grid>
        </>
      ) : (
        <>
         <Grid item xs={1}>
        </Grid> <Grid item xs={1}>
        </Grid>
         <Grid item xs={1}>
        </Grid> <Grid item xs={1}>
        </Grid>
         <Grid item xs={1}>
        </Grid> <Grid item xs={1}>
        </Grid> <Grid item xs={1}>
          <button className={classes.login} onClick={()=>{handleLoginClick()}}>
            <span>Login</span>
          </button>
        </Grid>
         <Grid item xs={1}>
        </Grid> <Grid item xs={1}>
        </Grid>  
            <Grid item xs={1}>
          <button className={classes.signup} onClick={()=>{handleSignupClick()}}>
            <span>Create an account</span>
          </button>
        </Grid>
       <Grid item xs={1}>
        </Grid><Grid item xs={1}>
        </Grid>
      
        </>
      )} 

       
      
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
            <button onClick={()=>{ handleFacebookLogin()}} style={{
          width: 300,
          height: 40,
          position: "absolute",
          top: 120,
          left: 20, fontSize: 19,
          fontFamily: "Poppins",
          color: "#192f60",
          border: "1px lightgrey solid",
          borderRadius: 5,
        }}>
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
        zIndex:27,border:'5px solid black',borderRadius:10, background:`linear-gradient(to bottom, rgba(0, 0, 0, 0.7)`,
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
            <button onClick={()=>{ handleFacebookLogin()}} style={{
          width: 300,
          height: 40,
          position: "absolute",
          top: 120,
          left: 20, fontSize: 19,
          fontFamily: "Poppins",
          color: "#192f60",
          border: "1px lightgrey solid",
          borderRadius: 5,
        }}>
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

          <Grid container justifyContent="center">
           <Grid item xs={1}>
        </Grid><Grid item xs={1}>
        </Grid><Grid item xs={1}>
        </Grid><Grid item xs={1}>
        </Grid><Grid item xs={1}>
        </Grid>
            <Grid item xs={2}>
              <div className={classes.e}>
            <span  style={{
            font: "normal normal 600 114px Poppins",
            color: "#EB2929",
            opacity: 1
          }}>e!</span>
        </div>
            </Grid>
            <Grid item xs={1}>
        </Grid><Grid item xs={1}>
        </Grid><Grid item xs={1}>
        </Grid><Grid item xs={1}>
        </Grid><Grid item xs={1}>
        </Grid>
          </Grid>
        <Grid item xs={12}>
          <Grid container justify="center">
            <Grid item xs={6}>
              <span className={classes.heading1}>
                Find the best restaurants, cafés, and bars
              </span>
            </Grid>
          </Grid>
        </Grid>

        {windowWidth>1200 ? (<><Grid container justify="center">
            <Grid item xs={3}>
              <input
                placeholder="Enter Location"
                className={classes.input1}
                value={inputValue}
                 onChange={(event)=>{handleInputChange(event)}}
              /> {noMatches ? (
        <div style={{backgroundColor:'#fbfbfb',width:250,position:'relative',top:-20,left:29,zIndex:3,border:'1px solid lightgrey',borderRadius:9,fontFamily:'poppins',color:'#192f60',fontSize:19}}>No matching locations</div>
      ) : (
        <div style={{backgroundColor:'#fbfbfb',width:250,position:'relative',top:-20,left:29,zIndex:13,border:'1px solid lightgrey',borderRadius:9,fontFamily:'poppins',color:'#192f60',fontSize:19,textAlign:'left'}}>
          { 
          locat2.map((item) => (
            <div>
              <Link to={`/filter?filterByloc=${item}`}  style={{borderBottom:'0.5px solid lightgrey',marginBottom:5,textDecoration:'none',
  color: '#192f60'}} key={item.id} >
             {item}
            </Link></div>
          ))}
        </div>
      )}
            </Grid>
            <Grid item xs={3}>
              
                 <input type="text"  className={classes.input1}  placeholder="Enter Restaurant Name" style={{width:400}}value={restInputValue} onChange={handleRestInputChange} />
      {noRestMatches ? (
        <div style={{backgroundColor:'#fbfbfb',width:250,position:'relative',top:-20,left:29,zIndex:3,border:'1px solid lightgrey',borderRadius:9,fontFamily:'poppins',color:'#192f60',fontSize:19}}>No matching Restaurants</div>
      ) : (
        <div style={{backgroundColor:'#fbfbfb',width:250,position:'relative',top:-20,left:29,zIndex:3,border:'1px solid lightgrey',borderRadius:9,fontFamily:'poppins',color:'#192f60',fontSize:19,textAlign:'left'}}>
          {restMatches.map((item) => (<div>
            <Link to={`/filter?filterByrest=${item.restaurantName}`}  style={{borderBottom:'0.5px solid lightgrey',marginBottom:5,textDecoration:'none',
  color: '#192f60'}} key={item.id} onClick={() => handleRestItemClick(item)}>
             {item.restaurantName}
            </Link></div>
          ))}
        </div>
      )}
            </Grid>
          </Grid>
        </>):(<>
             <Grid item xs={12}>
          <Grid container justify="center">
            <Grid item xs={6}>
            <input
                value={inputValue}
                placeholder="Enter Location"
                className={classes.input1}
                 onChange={handleInputChange}
              /> {noMatches ? (
        <div style={{backgroundColor:'#fbfbfb',width:250,position:'relative',top:-20,left:29,zIndex:3,border:'1px solid lightgrey',borderRadius:9,fontFamily:'poppins',color:'#192f60',fontSize:19}}>No matching locations</div>
      ) : (
        <div style={{backgroundColor:'#fbfbfb',width:250,position:'relative',top:-20,left:149,zIndex:3,border:'1px solid lightgrey',borderRadius:9,fontFamily:'poppins',color:'#192f60',fontSize:19,textAlign:'left'}}>
          { 
          locat2.map((item) => (
            <div>
              <Link to={`/filter?filterByloc=${item}`} style={{borderBottom:'0.5px solid lightgrey',marginBottom:5,textDecoration:'none',
  color: '#192f60'}} key={item.id} onClick={() => handleRestItemClick(item)}>
             {item}
            </Link></div>
          ))}
        </div>
      )}
            </Grid>
          </Grid>
        </Grid>
          <Grid container justify="center">
            <Grid item xs={1}>
            </Grid><Grid item xs={1}>1
            </Grid><Grid item xs={1}>2
            </Grid>
            <Grid item xs={6}  >
               <input type="text"  className={classes.input1}  placeholder="Enter Restaurant Name" style={{width:400}}value={restInputValue} onChange={handleRestInputChange} />
      {noRestMatches ? (
        <div style={{backgroundColor:'#fbfbfb',width:250,position:'relative',top:-20,left:29,zIndex:3,border:'1px solid lightgrey',borderRadius:9,fontFamily:'poppins',color:'#192f60',fontSize:19}}>No matching Restaurants</div>
      ) : (
        <div style={{backgroundColor:'#fbfbfb',width:250,position:'relative',top:-20,left:29,zIndex:3,border:'1px solid lightgrey',borderRadius:9,fontFamily:'poppins',color:'#192f60',fontSize:19,textAlign:'left',textDecoration:'none',
  color: '#192f60'}}>
          {restMatches.map((item) => (
              <Link to={`/filter?filterByrest=${item.restaurantName}`} style={{textDecoration:'none',
  color: '#192f60'}} >
             <div style={{borderBottom:'0.5px solid lightgrey',marginBottom:5}} key={item.id} onClick={() => handleRestItemClick(item)} >
             {item.restaurantName} </div>
            </Link>
          ))}
        </div>
      )}
            </Grid><Grid item xs={1}>2
            </Grid><Grid item xs={1}>1
            </Grid><Grid item xs={1}>3
            </Grid>
          </Grid>
        
        </>)}
        
        
       <div className={classes.bottomDiv}>
      <span className={classes.header}>Quick Searches</span>
      <span className={classes.subheader}>Discover restaurants by type of meal</span>
       {windowWidth > '1120' ? (
        <>
        <Grid container >
              <Grid item xs={3}   >
                <div className={classes.quickSearch} onClick={() => handleClick('breakfast')} ><Link style={{width:360,height:160}} to="/filter?filterBy=breakfast">
            <img src="" alt="" />
            <span>Breakfast</span>
            <span>Start your day with exclusive breakfast options</span></Link>
            </div>
        </Grid><Grid item xs={1}></Grid>
           <Grid item xs={3}   >
              
            <div className={classes.quickSearch} onClick={() => handleClick('breakfast')} ><Link style={{width:360,height:160}} to="/filter?filterBy=lunch">
            <img src="" alt="" />
            <span>Lunch</span>
            <span>Start your day with exclusive breakfast options</span></Link></ div>
        </Grid><Grid item xs={1}></Grid>
           <Grid item xs={3}   >
              
            <div className={classes.quickSearch} onClick={() => handleClick('breakfast')} ><Link style={{width:360,height:160}} to="/filter?filterBy=snacks"><img src="" alt="" />
            <span>Snacks</span>
            <span>Start your day with exclusive breakfast options</span></Link></div>
        </Grid><Grid item xs={1}></Grid>
              <Grid item xs={3}   >
                
            <div className={classes.quickSearch} onClick={() => handleClick('breakfast')} ><Link style={{width:360,height:160}} to="/filter?filterBy=dinner">
            <img src="" alt="" />
            <span>Dinner</span>
            <span>Start your day with exclusive breakfast options</span></Link></ div>
        </Grid><Grid item xs={1}></Grid>
           <Grid item xs={3}   >
              
            <div className={classes.quickSearch} onClick={() => handleClick('breakfast')} ><Link style={{width:360,height:160}} to="/filter?filterBy=nightlife">
            <img src="" alt="" />
            <span>Nightlife</span>
            <span>Start your day with exclusive breakfast options</span></Link></div>
        </Grid><Grid item xs={1}></Grid>
             <Grid item xs={3}  >
             
            <div className={classes.quickSearch} onClick={() => handleClick('breakfast')} > <Link style={{width:360,height:160}} to="/filter?filterBy=fastfood">
            <img src="" alt="" />
            <span>Drinks</span>
            <span>Start your day with exclusive breakfast options</span></Link></div>
        </Grid><Grid item xs={1}></Grid>
          </Grid>
        </>
      ) :  windowWidth > '900' ? (

        <>

         <Grid container >
          
                <Grid item xs={5}  >
                   
            <div className={classes.quickSearch} onClick={() => handleClick('breakfast')} ><Link style={{width:360,height:160}} to="/filter?filterBy=breakfast">
            <img src="" alt="" />
            <span>Breakfast</span>
            <span>Start your day with exclusive breakfast options</span></Link></div>
        </Grid>
             <Grid item xs={3}  >
              
            <div className={classes.quickSearch} onClick={() => handleClick('lunch')} > <Link style={{width:360,height:160}} to="/filter?filterBy=lunch">
            <img src="" alt="" />
            <span>Lunch</span>
            <span>Start your day with exclusive breakfast options</span></Link></div>
        </Grid>
         <Grid item xs={2}>
          </Grid>
             <Grid item xs={5}  >
               
            <div className={classes.quickSearch} onClick={() => handleClick('dinner')} ><Link style={{width:360,height:160}} to="/filter?filterBy=dinner">
            <img src="" alt="" />
            <span>Dinner</span>
            <span>Start your day with exclusive breakfast options</span></Link></div>
        </Grid>
         
                <Grid item xs={3}  >
                  
            <div className={classes.quickSearch} onClick={() => handleClick('snacks')} > <Link style={{width:360,height:160}} to="/filter?filterBy=snacks">
            <img src="" alt="" />
            <span>Snacks</span>
            <span>Start your day with exclusive breakfast options</span></Link></div>
        </Grid>
         <Grid item xs={2}>
          </Grid>
              <Grid item xs={5}  >
                 
            <div className={classes.quickSearch} onClick={() => handleClick('nightlife')} ><Link style={{width:360,height:160}} to="/filter?filterBy=nightlife">
            <img src="" alt="" />
            <span>Nightlife</span>
            <span>Start your day with exclusive breakfast options</span></Link></div>
        </Grid>
         
              <Grid item xs={3}  >
                 
            <div className={classes.quickSearch} onClick={() => handleClick('drinks')} ><Link style={{width:360,height:160}} to="/filter?filterBy=drinks">
            <img src="" alt="" />
            <span>Drinks</span>
            <span>Start your day with exclusive breakfast options</span></Link></div>
        </Grid><Grid item xs={2}>
          </Grid>
          </Grid>

        </>
      ) : (
        <>
        <Grid container >
           <Grid item xs={7}  >
             
            <div className={classes.quickSearch} onClick={() => handleClick('breakfast')} ><Link style={{width:360,height:160}} to="/filter?filterBy=breakfast">
            <img src="" alt="" />
            <span>Breakfast</span>
            <span>Start your day with exclusive breakfast options</span></Link></div>
        </Grid> <Grid item xs={7}  >
          
            <div className={classes.quickSearch}  > <Link style={{width:360,height:160}} to="/filter?filterBy=lunch">
            <img src="" alt="" />
            <span>Lunch</span>
            <span>Start your day with exclusive breakfast options</span></Link></div>
        </Grid> <Grid item xs={7}  >
          
            <div className={classes.quickSearch}  > <Link style={{width:360,height:160}} to="/filter?filterBy=dinner">
            <img src="" alt="" />
            <span>Dinner</span>
            <span>Start your day with exclusive breakfast options</span></Link></div>
        </Grid> <Grid item xs={7}  >
           
            <div className={classes.quickSearch}  ><Link style={{width:360,height:160}} to="/filter?filterBy=snacks">
            <img src="" alt="" />
            <span>Snacks</span>
            <span>Start your day with exclusive breakfast options</span></Link></div>
        </Grid> <Grid item xs={7}  >
          
            <div className={classes.quickSearch}  > <Link style={{width:360,height:160}} to="/filter?filterBy=nightlife">
            <img src="" alt="" />
            <span>Nightlife</span>
            <span>Start your day with exclusive breakfast options</span></Link></div>
        </Grid> <Grid item xs={7}  >
          
            <div className={classes.quickSearch}  > <Link style={{width:360,height:160}} to="/filter?filterBy=drinks">
            <img src="" alt="" />
            <span>Drinks</span>
            <span>Start your day with exclusive breakfast options</span></Link></div>
        </Grid>
        </Grid>
        </>
      )}
     
   
    </div>
    </Grid>)}
    
       const Homepage = () => {
        return(
         <>
         <TopDiv />
        
         </>
        )
       }
      export default Homepage;

