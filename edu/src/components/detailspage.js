import React, {useState,useEffect} from 'react';
import { ImCross } from 'react-icons/im'
import { BiArrowBack } from 'react-icons/bi'
import {  BsFacebook } from "react-icons/bs";
// import { SiGmail } from 'react-icons/Si/index.esm'
// import { FaLeaf } from 'react-icons/Fa/fa';
import { AiFillCreditCard, AiTwotoneCreditCard } from 'react-icons/ai';
import { RiWallet3Fill } from 'react-icons/ri'
       import  { HiCreditCard} from 'react-icons/hi'
      import {Grid, makeStyles} from '@material-ui/core'
       import image from './homepage/Background.png'
       import { useParams } from "react-router-dom";


   

const use = makeStyles({
  login: {
    background: 'rgba(0, 0, 0, 0)',
    width: '89px',
    height: '46px',
    color:'white',
    border: '1px solid #FFFFFF',
    borderRadius: '3px',
    opacity: '1',
    margin:10,
  },
  signup: {
    background: 'rgba(0, 0, 0, 0)',
    width: '151px',
    height: '46px',
    color:'white',
    border: '1px solid #FFFFFF',
    borderRadius: '3px',
    opacity: '1',
    margin:10,
  },
})
// const Signup = () =>{
//    const [span1Content, setSpan1Content] = useState('Sign Up');
//   const [span2Content, setSpan2Content] = useState(' Already have a account?');
//   const [showBlack,setShowBlack] = useState(true)
//   const [span3Content, setSpan3Content] = useState('Login');
//   const [show,setShow] = useState(true)
//   const handleClick = () => {
//     setSpan1Content('Login');
//     setSpan2Content('Dont have a account?');
//     setSpan3Content('Signup');
//   };const hideAllClick = () => {
//     setShow(false);setShowBlack(false)
//   }
//   return( <>
//    {showBlack && ( <Grid container >
//        <Grid item xs={12} style={{position:'absolute',top:0,left:0,width:"1515px",height:"900px",backgroundColor:"black",opacity:0.6,zIndex: 2,}}></Grid></Grid>)}
//      {show && (<div
//       style={{
//         width: 350,
//         height: 300,
//         backgroundColor: "#fbfbfb",
//         position: "absolute",
//         top: 170,
//         zIndex:3,borderRadius: 5,
//       }}
//     ><div style={{cursor:"pointer",position:'absolute',top:'10px'}}><ImCross onClick={hideAllClick} size={24} color="#333" /></div>
//       <span
//         style={{
//           position: "absolute",
//           top: 12,
//           left: 34,
//           fontSize: 25,
//           color: "#192f60",
//         }}
//       >
//          {span1Content}
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
//          {span3Content}
//       </button>
       
//     </div>)}</>
//      )
// }
// const Login = () => {
//  const [span1Content, setSpan1Content] = useState('Login');
//   const [span2Content, setSpan2Content] = useState(' Dont have an account?');
//   const [span3Content, setSpan3Content] = useState('Sign Up');
//   const [c,setC]= useState(0)
//   const handleClick = () => {
//     if(c%2==0){
//     setSpan1Content('Sign up');
//     setSpan2Content('Already have a account?');
//     setSpan3Content('Login');}
//     else{setSpan1Content('Login');
//     setSpan2Content('Dont have a account?');
//     setSpan3Content('Sign up');

//     }
//     setC(c+1)

//   };
//   return (
//     <div
//       style={{
//         width: 350,
//         height: 300,
//         backgroundColor: "#fbfbfb",
//         position: "absolute",
//         top: 170,
//         zIndex:3,borderRadius: 5,
//       }}
//     >
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
//     </div>
//   );
// };

const DetailsDiv = () => {

   const { restaurantName, cuisine, costfortwo } = useParams();
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
  console.log(restaurantName)
  console.log(cuisine)
  console.log(costfortwo)
  const [count, setCount] = useState(0);
  const [showDiv, setShowDiv] = useState(true);
  const [name,setName] = useState("")
  const [mno,setMno] = useState("")
  const [address,setAddress] = useState("")
const [selectedButton, setSelectedButton] = useState(null);
 const classes = use()
  const [showlog,setShowLog] = useState(false)
  const [validThrough, setValidThrough] = useState("");
  const [nameOnCard, setNameOnCard] = useState("");
  const [isChecked, setIsChecked] = useState(false);
 const [windowWidth, setWindowWidth] = useState(window.innerWidth);
   const [selected, setSelected] = useState(1);
  const [showFirstDiv, setShowFirstDiv] = useState(false);
  const [showSecondDiv, setShowSecondDiv] = useState(false);
  const [showThirdDiv, setShowThirdDiv] = useState(false);
  const [showBlack,setShowBlack] = useState(false)
  const [showSig,setShowSig] = useState(false)
 const [showSpans, setShowSpans] = useState(true);
  const [selectedDiv, setSelectedDiv] = useState(null);
   const [menuData, setMenuData] = useState([].map(item => ({ ...item, count: 0 })));

  useEffect(() => {
    const fetchData = async () => {
      try {
        fetch(`http://localhost:3001/menuDetails/${restaurantName}`)
          .then(response => response.json())
      .then(data => setMenuData(data))
      .catch(error => console.error(error));
        console.log(menuData)
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  },[restaurantName]);
 
 

  const buttonTexts = [   { name:"Credit/Debit Cards",c:<AiFillCreditCard size={30}/>},   { name:"Wallets",c:<RiWallet3Fill size={30}/>},   {name: "UPI",c:<AiTwotoneCreditCard size={30}/>},{name:    "Credit",c: <HiCreditCard size={30}/>},   {name:"NetBanking",c:<AiFillCreditCard size={30}/>},{name:    "Food Cards",c:<HiCreditCard size={30}/>}  ];
  
  
  const handleValidThroughChange = (event) => {
   setValidThrough(event.target.value);
  };

  const handleNameOnCardChange = (event) => {
    setNameOnCard(event.target.value);
  };

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const handleSubmit = () => {
    if (isChecked) {
      fetch("YOUR_BACKEND_URL", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          validThrough: validThrough,
          nameOnCard: nameOnCard,
        }),
      })
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((error) => console.error(error));
    } else {
      alert("Please check the checkbox to save the details.");
    }
  };
  const [c, setC] = useState(0);
  const increment = (index,price) => {
     const newValue = parseInt(price)
    setC(c+newValue)
     const newItems = [...menuData];
    newItems[index].count++;
    newItems[index].visible = false;
    setMenuData(newItems);
  };
  
  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  const decrement = (index,price) => {
    const newValue = parseInt(price)
    setC(c-newValue)
     const newItems = [...menuData];
    newItems[index].count--;
    setMenuData(newItems);
    if (newItems[index].count === 0) {
      newItems[index].visible = true;
    }
  };
  const handleDivClick = (div) => {
    setSelectedDiv(div);
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
  const handleFirstButtonClick1 = () => { fetch(`http://localhost:3001/menuDetails/${restaurantName}`)
          .then(response => response.json())
      .then(data => setMenuData(data))
      .catch(error => console.error(error));
         
        console.log(menuData,"tormaika") 
        setShowFirstDiv(true);setShowBlack(true)}
  const handleFirstButtonClick = () => {
    if(c==0){
    alert('select food item to proceed');}
    else{
    setShowFirstDiv(false);
    setShowSecondDiv(true);}
  };
  const handleSecondButtonOneClick = () => {
    setShowSecondDiv(false);
    setShowFirstDiv(true);
  };
  const handleSecondButtonTwoClick = () => {
    if(name.length==0||mno.length==0||address.length==0){alert('Enter complete Details to proceed');}else{
    setShowSecondDiv(false);
    setShowThirdDiv(true);}
  };
  const handleThirdButtonOneClick = () => {
    setShowThirdDiv(false);
    setShowSecondDiv(true);
  };
  const handlePayClick = () => {
    if (!selectedDiv) {
      alert('Please select a UPI option.');
      return;
    }
  switch (selectedDiv) {
      case 'Paytm':
        window.location.href = 'https://paytm.com';
        break;
      case 'PhonePe':
        window.location.href = 'https://phonepe.com';
        break;
      case 'GooglePay':
        window.location.href = 'https://googlepay.com';
        break;
      default:
        break;
    }
  };
  const handleHideAllClick = () => {
    setShowFirstDiv(false);
    setShowSecondDiv(false);
    setShowThirdDiv(false);
    setShowBlack(false)
  };
   const handleFirstButtonOneClick = () => {
    setShowFirstDiv(false);setShowBlack(false)
  };
  const handleClick = id => {
    
    setSelected(id);
  };

  return (
    <Grid container className="detailsdiv" style={{backgroundColor: '#fbfbfb',position:'absolute',top:'0px',height:"900px",width:"100%",zIndex: 1}}>
      
     {windowWidth > 1000 ? (
        <>
        <Grid container style={{backgroundColor:'#ce0505',height:'75px',border:'.2px solid black'}}>
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
          <button className={classes.login} style={{cursor:'pointer'}} onClick={()=>{handleLoginClick()}}>
            <span>Login</span>
          </button>
        </Grid>
        <Grid item xs={1}>
          <button className={classes.signup} style={{cursor:'pointer'}} onClick={()=>{handleSignupClick()}}>
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
        <Grid container style={{backgroundColor:'#ce0505',height:'75px',border:'.2px solid black'}}>
         <Grid item xs={1}>
        </Grid> <Grid item xs={1}>
        </Grid>
         <Grid item xs={1}>
        </Grid> <Grid item xs={1}>
        </Grid>
         <Grid item xs={1}>
        </Grid> <Grid item xs={1}>
        </Grid> <Grid item xs={1}>
          <button className={classes.login} style={{cursor:'pointer'}} onClick={handleLoginClick()}>
            <span>Login</span>
          </button>
        </Grid>
         <Grid item xs={1}>
        </Grid> <Grid item xs={1}>
        </Grid>  
            <Grid item xs={1}>
          <button className={classes.signup} style={{cursor:'pointer'}}  onClick={handleSignupClick()}>
            <span>Create an account</span>
          </button>
        </Grid>
       <Grid item xs={1}>
        </Grid><Grid item xs={1}>
        </Grid></Grid>
      
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
            <button   style={{
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
            <button  style={{
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
      {/* {showlog && (<Grid container><Grid item xs={4}></Grid><Grid item xs={2}><Login /></Grid><Grid item xs={4}></Grid></Grid>)}
      {showSig && (<Grid container><Grid item xs={4}></Grid><Grid item xs={2}><Signup /></Grid><Grid item xs={4}></Grid></Grid>)}
       */}
      <Grid container style={{position:'absolute',top:75,margin:10}}>
     <Grid item xs={2}></Grid>
      <Grid item xs={8}  className="images" style={{background: `linear-gradient(to bottom, rgba(0, 0, 0, 0.7), transparent), url(${image})`,position:'relative',   width: 1130,
            height: 370,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',border:'3px solid black',borderRadius:'7px'}}>
      <Grid container ><Grid item xs={1} style={{height:270}}></Grid></Grid>
      <Grid container spacing={1} >
        <Grid item xs={1}></Grid><Grid item xs={1}></Grid><Grid item xs={1}></Grid><Grid item xs={1}></Grid><Grid item xs={1}></Grid><Grid item xs={1}></Grid><Grid item xs={1}></Grid><Grid item xs={1}></Grid>
         <Grid item xs={3} style={{background: '#FFFFFF 0% 0% no-repeat padding-box',
            borderRadius: 7,
            borderColor: '#ffffff',position:'relative',
            opacity: 0.8,height:'auto', font: 'normal normal 600 16px/30px Poppins',
              letterSpacing: 0,
              color: '#192F60',
              opacity: 0.8}}>
        
            Click to see Image Gallery
          </Grid><Grid item xs={1}></Grid></Grid>
        </Grid><Grid item xs={2}>1</Grid></Grid>
        <Grid container style={{position:'absolute',top:470}}>
          <Grid item xs={2}>1</Grid>
          <Grid item xs={6} style={{
            height: 'auto',
            textAlign: 'left',
            font: 'normal normal 600 35px Poppins',
            letterSpacing: 0,
            color: '#192F60',
            opacity: 1,
          }}>{restaurantName}</Grid>
        </Grid>
        <Grid container style={{position:'absolute',top:520}}>
          <Grid item xs={1}></Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={2}></Grid>
          <Grid item xs={2}></Grid>
          <Grid item xs={2}></Grid>
          <Grid item xs={2}  style={{
              
          }}><div  style={{fontSize: 19,
              fontStyle:'Poppins',
              color:'#ffffff',
              width:'151px',
            height: 'auto',
            background: '#CE0505 0% 0% no-repeat padding-box',
            borderRadius: 6,
            borderColor:"#CE0505",
            opacity: 1,}} onClick={()=>{handleFirstButtonClick1()}}>Place Online Order</div></Grid>
       
            
          </Grid>
          <Grid container spacing={8} style={{
              position: 'absolute',
              top: 626,
              textAlign: 'left',
              font: 'normal normal 600 20px Poppins',
    letterSpacing: '0px',
    color: '#192F60',
    opacity: 1}}>
      {windowWidth>'1000' ? (<><Grid item xs={2}></Grid>
            <Grid item xs={1}><span className="span1" onClick={(e) => {
              if(e.target.className=="span1")
              setShowSpans(true)
              handleClick(1)}}
            style={{
              position: 'absolute',
              cursor: "pointer",
              width: 8,
              height: 2,
              textAlign: 'left',
              font: 'normal normal 600 20px Poppins',
    letterSpacing: '0px',
    color: selected == 1 ? "#ce0505" : "#192f60",
    opacity: 1}}>Overview</span></Grid>
    <Grid item xs={1}><span className='span2' onClick={(e) => {handleClick(2) 
    if(e.target.className=="span2")
              setShowSpans(false)}} style={{
    cursor: "pointer",
    left: '339px',
    width: '74px',
    height: '25px',
    textAlign: 'left',
    font: 'normal normal 600 20px Poppins',
    letterSpacing: '0px',
    color: selected == 2 ? "#ce0505" : "#192f60",
    opacity: 1}}>Contact</span></Grid></>):(<><Grid item xs={2}></Grid>
            <Grid item xs={2}><span className="span1" onClick={(e) =>   {if(e.target.className=="span1")
              setShowSpans(true)
              handleClick(1)}}
            style={{
              position: 'absolute',
              cursor: "pointer",
              marginRight: "5px",
              width: 8,
              height: 2,
              textAlign: 'left',
              font: 'normal normal 600 20px Poppins',
    letterSpacing: '0px',
    color: selected == 1 ? "#ce0505" : "#192f60",
    opacity: 1}}>Overview</span></Grid>
    <Grid item xs={2}><span className='span2' onClick={(e) =>   {if(e.target.className=="span2")
              setShowSpans(false)
              handleClick(2)}} style={{
    cursor: "pointer",
    left: '339px',
    width: '74px',
    height: '25px',
    textAlign: 'left',
    font: 'normal normal 600 20px Poppins',
    letterSpacing: '0px',
    color: selected == 2 ? "#ce0505" : "#192f60",
    opacity: 1}}>Contact</span></Grid></>)}
            
    </Grid>
    <Grid container style={{position: 'absolute',
    top: '662px',}}>
      <Grid item xs={2}></Grid>
      <Grid item xs={9} style={{
    height: '3px',
    backgroundColor:'#D2D9E6',
    border: '2px solid #D2D9E6',
    opacity: 1}}></Grid><Grid item xs={1}></Grid>
   </Grid>

      {showSpans ? (<> <Grid container style={{
        position: 'absolute',
        top: '671px',
        textAlign: 'left',
        font: 'normal normal 600 22px/33px Poppins',
        letterSpacing: '0px',
        color: '#192F60',
        opacity: 1,
      }}>
        <Grid item xs={2}></Grid>
        <Grid item xs={3}> About this place</Grid>
       </Grid>
      <Grid container style={{
        position: 'absolute',
        top: '742px',
        height: '25px',
        textAlign: 'left',
        font: 'normal normal 600 18px/27px Poppins',
        letterSpacing: '0px',
        color: '#192F60',
        opacity: 1,
      }}><Grid item xs={2}></Grid>
        <Grid item xs={3}> Cuisine</Grid></Grid>
      <Grid container style={{
        position: 'absolute',
        top: '768px',
        height: '30px',
        textAlign: 'left',
        font: 'normal normal normal 16px/30px Poppins',
        letterSpacing: '0px',
        color: '#192F60',
        opacity: 1,
      }}><Grid item xs={2}></Grid>
        <Grid item xs={3}> {cuisine}</Grid></Grid>
      <Grid container style={{
        position: 'absolute',
        top: '803px',
        height: '25px',
        textAlign: 'left',
        font: 'normal normal 600 18px/27px Poppins',
        letterSpacing: '0px',
        color: '#192F60',
        opacity: 1,
      }}><Grid item xs={2}></Grid>
        <Grid item xs={3}> Average Cost </Grid></Grid>
      <Grid container style={{
        position: 'absolute',
        top: '834px',
        height: '28px',
        textAlign: 'left',
        font: 'normal normal normal 16px/26px Poppins',
        letterSpacing: '0px',
        color: '#192F60',
        opacity: 1,
      }}><Grid item xs={2}></Grid>
        <Grid item xs={3}> {costfortwo} </Grid></Grid></>):(<>
       <Grid container style={{position:'absolute',top: '687px',textAlign: 'left', height: 25,font: "normal normal normal 18px/27px Poppins",color: "#192f60",opacity: 1}} ><Grid item xs={2}></Grid><Grid item xs={3}>Phone Number</Grid></Grid>
       <Grid container style={{position:'absolute',top: 723,
height: 25,
textAlign: 'left',
font: 'normal normal normal 18px/27px Poppins',
color: '#F67082'}}><Grid item xs={2}></Grid><Grid item xs={3}>+91 114004566</Grid></Grid>
       <Grid container style={{position:'absolute',top: 763,
height: 25,
textAlign: 'left',
font: 'normal normal normal 18px/27px Poppins',
color: '#192f60',}}><Grid item xs={2}></Grid><Grid item xs={3}>{restaurantName}</Grid></Grid>
<Grid container style={{position:'absolute',top: 809,
height: 25,
textAlign: 'left',
font: 'normal normal normal 16px/25px Poppins',
color: '#636F88',}}><Grid item xs={2}></Grid><Grid item xs={3}>Shop 1, Plot D, Samruddhi Complex, Chincholi, Mumbai-400002, Maharashtra</Grid></Grid>
      </>)}
     {showBlack? ( <Grid container >
       <Grid item xs={12} style={{position:'absolute',top:0,width:"1515px",height:"900px",backgroundColor:"black",opacity:0.6,zIndex: 2,}}></Grid></Grid>):null}
      { /* first pageover  */}
      {showFirstDiv? ( windowWidth >=1150 ? (<>
        <Grid container style={{position:'absolute',top:65,left:0,zIndex:3,borderRadius: 10}}>
          <Grid item xs={4}></Grid>
          <Grid item xs={4} style={{backgroundColor:'#fbfbfb',height:"400px"}}>
            <Grid container style={{height:40,position:'relative',top:10}}>
              <Grid item xs={2}><BiArrowBack size={22}  onClick={()=>handleFirstButtonOneClick()}  style={{cursor:'pointer'}} /></Grid>
              <Grid item xs={8}></Grid>
              <Grid item xs={2}><ImCross size={22}  onClick={()=>handleHideAllClick()} style={{cursor:'pointer'}} /></Grid>
            </Grid>
            <Grid container style={{height:80,position:'relative',top:10,left:-30}}>
              <Grid item xs={2}></Grid>
              <Grid item xs={8} style={{ color: '#192f60',textAlign:'left', fontFamily: 'poppins', fontSize:'35px',opacity:1,position:'relative'}}>{restaurantName}</Grid>
              <Grid item xs={2}></Grid>
            </Grid>

            <Grid container style={{position:'relative',backgroundColor:"#ffffff",height:'525px',borderRadius: 6,overflow:'scroll' }}>
              
              <Grid item xs={8}>
              
                {menuData.map((item,index)=>{
                  return(
                  <Grid container style={{position:"relative",margin:7,borderBottom:'2px solid lightGrey',minHeight: "150px",borderRadius: 10}}>
                    <Grid item xs={12} style={{position:'relative',color:"#192f60",textAlign:'left',fontFamily:"poppins",fontWeight:'bold',fontSize:19}}>{item.dishName}
                    </Grid>
                    <Grid item xs={12}  style={{position:'relative',color:"#192f60",textAlign:'left',fontFamily:"poppins",fontSize:19,fontWeight:'bold'}}>{item.dishcategory}</Grid>
  
                    <Grid item xs={12} className={index} style={{position:'relative',color:"#192f60",textAlign:'left',fontFamily:"poppins",fontSize:19,fontWeight:'bold'}}>{item.price}</Grid>
                    <Grid item xs={12} style={{position:'relative',color:"#192f60",textAlign:'left',fontFamily:"poppins",fontSize:15}}>{item.dishinfo}</Grid>
                   </Grid>
                    )
                })}
                
              </Grid>
              <Grid item xs={4}> 
              {menuData.map((item,index)=>{return( <Grid container style={{position:"relative",margin:7,borderBottom:'2px solid lightGrey',borderRadius: 10,minHeight: "150px"}}><Grid style={{ width: '112px', height: '112px', backgroundColor: '#192f60', position: 'relative',top:10, left: '12px',opacity:1 }}>{item.count==0 ?  (<button onClick={()=>increment(index,item.price)} style={{ width: '92px', height: '32px',fontSize:20, color: '#61B246', fontFamily: 'poppins', backgroundColor: 'white', borderRadius: '3px', position: 'absolute', top: '99px', left: '12px',cursor:'pointer' }}>Add</button>):(
               
        <div className="b2" style={{ width: "92px", height: "52px",position:'relative',top:99,left:12 }}>
          <button onClick={()=>decrement(index,item.price)}  style={{fontSize:20,cursor:'pointer',color:"black",opacity:'0.8'}}>-</button>
          <span style={{ width: "10px", height:"10px",color:'Black',margin:10 }}className={index}>{item.count}</span>
          <button onClick={()=>increment(index,item.price)}  style={{fontSize:20,cursor:'pointer',color:"black",opacity:'0.8'}}>+</button>
        </div>)}</Grid></Grid>
           )})}</Grid>
               </Grid>

            <Grid container style={{position:'relative',backgroundColor:"#fbfbfb",height:'75px',borderRadius: 10 }}>
            
                  <Grid item xs={1}></Grid>
      <Grid item xs={2} style={{position:'relative',top:20,fontFamily:"poppins",fontSize:25}}>Subtotal</Grid>
      <Grid item xs={2}style={{position:'relative',top:20,fontFamily:"poppins",fontSize:25,marginLeft:16}}>{c}</Grid><Grid item xs={2}></Grid>
      <Grid item xs={3} style={{position:'relative',top:20,fontFamily:"poppins",fontSize:25,height:'40px',borderRadius:7,backgroundColor:"#Ce0505",borderColor:'#ce0505',color:'white',cursor:'pointer'}} onClick={()=>handleFirstButtonClick()}>Pay Now</Grid>
              
            </Grid>
          </Grid>
          <Grid item xs={4}></Grid>
        </Grid>
     </>):(<>  <Grid container style={{position:'absolute',top:65,left:0,zIndex:3,borderRadius: 10}}>
          <Grid item xs={2}></Grid>
          <Grid item xs={8} style={{backgroundColor:'#fbfbfb',height:"400px"}}>
            <Grid container style={{height:40,position:'relative',top:10}}>
              <Grid item xs={2}><BiArrowBack size={22}  onClick={()=>handleFirstButtonOneClick()}  style={{cursor:'pointer'}} /></Grid>
              <Grid item xs={8}></Grid>
              <Grid item xs={2}><ImCross size={22}  onClick={()=>handleHideAllClick()} style={{cursor:'pointer'}} /></Grid>
            </Grid>
            <Grid container style={{height:80,position:'relative',top:10,left:-30}}>
              <Grid item xs={2}></Grid>
              <Grid item xs={8} style={{ color: '#192f60',textAlign:'left', fontFamily: 'poppins', fontSize:'35px',opacity:1,position:'relative'}}>{restaurantName}</Grid>
              <Grid item xs={2}></Grid>
            </Grid>

            <Grid container style={{position:'relative',backgroundColor:"#ffffff",height:'525px',borderRadius: 6,overflow:'scroll' }}>
              
              <Grid item xs={8}>
              
                {menuData.map((item,index)=>{
                  return(
                  <Grid container style={{position:"relative",margin:7,borderBottom:'2px solid lightGrey',minHeight: "150px",borderRadius: 10}}>
                    <Grid item xs={12} style={{position:'relative',color:"#192f60",textAlign:'left',fontFamily:"poppins",fontWeight:'bold',fontSize:19}}>{item.dishName}
                    </Grid>
                    <Grid item xs={12}  style={{position:'relative',color:"#192f60",textAlign:'left',fontFamily:"poppins",fontSize:19,fontWeight:'bold'}}>{item.dishcategory}</Grid>
  
                    <Grid item xs={12} className={index} style={{position:'relative',color:"#192f60",textAlign:'left',fontFamily:"poppins",fontSize:19,fontWeight:'bold'}}>{item.price}</Grid>
                    <Grid item xs={12} style={{position:'relative',color:"#192f60",textAlign:'left',fontFamily:"poppins",fontSize:15}}>{item.dishinfo}</Grid>
                   </Grid>
                    )
                })}
                
              </Grid>
              <Grid item xs={4}> 
              {menuData.map((item,index)=>{return( <Grid container style={{position:"relative",margin:7,borderBottom:'2px solid lightGrey',borderRadius: 10,minHeight: "150px"}}><Grid style={{ width: '112px', height: '112px', backgroundColor: '#192f60', position: 'relative',top:10, left: '12px',opacity:1 }}>{item.count==0 ?  (<button onClick={()=>increment(index,item.price)} style={{ width: '92px', height: '32px',fontSize:20, color: '#61B246', fontFamily: 'poppins', backgroundColor: 'white', borderRadius: '3px', position: 'absolute', top: '99px', left: '12px',cursor:'pointer' }}>Add</button>):(
               
        <div className="b2" style={{ width: "92px", height: "52px",position:'relative',top:99,left:12 }}>
          <button onClick={()=>decrement(index,item.price)}  style={{fontSize:20,cursor:'pointer',color:"black",opacity:'0.8'}}>-</button>
          <span style={{ width: "10px", height:"10px",color:'Black',margin:10 }}className={index}>{item.count}</span>
          <button onClick={()=>increment(index,item.price)}  style={{fontSize:20,cursor:'pointer',color:"black",opacity:'0.8'}}>+</button>
        </div>)}</Grid></Grid>
           )})}</Grid>
               </Grid>

            <Grid container style={{position:'relative',backgroundColor:"#fbfbfb",height:'75px',borderRadius: 10 }}>
            
                  <Grid item xs={1}></Grid>
      <Grid item xs={2} style={{position:'relative',top:20,fontFamily:"poppins",fontSize:25}}>Subtotal</Grid>
      <Grid item xs={2}style={{position:'relative',top:20,fontFamily:"poppins",fontSize:25,marginLeft:16}}>{c}</Grid><Grid item xs={2}></Grid>
      <Grid item xs={3} style={{position:'relative',top:20,fontFamily:"poppins",fontSize:25,height:'40px',borderRadius:7,backgroundColor:"#Ce0505",borderColor:'#ce0505',color:'white',cursor:'pointer'}} onClick={()=>handleFirstButtonClick()}>Pay Now</Grid>
              
            </Grid>
          </Grid>
          <Grid item xs={2}></Grid>
        </Grid></>)):null
      }
      
      {/*third page*/}
      { showSecondDiv && (  windowWidth > '1000' ? (<>
      <Grid container > 
       <Grid item xs={3} ></Grid>
       <Grid item xs={6}
      style={{
        position: "relative",
        height: 707,
        background: "#fbfbfb 0% 0% no-repeat padding-box",
        borderRadius: 6,
        opacity: 1,
        zIndex: 20,
      }}
    >
       <span style={{ position: "absolute",
          top: "8px",
          left: 47,cursor:'pointer'}}
          onClick={()=>handleSecondButtonOneClick()}
          ><BiArrowBack size={29} /></span> 
      <Grid container>
        <Grid item xs={1}></Grid>
      <Grid item xs={10}
        style={{
          height: "25px",
          color: "#192f60",
          fontFamily: "poppins",
          fontSize: "39px",
          position: "relative",top:30,
          opacity: 1,
        }}
      >
        {restaurantName}
      </Grid></Grid>
      <Grid container>
      <Grid item xs={10}
        style={{
          position: "absolute",
          top:100,left:50,
          color: "#192f60",
          fontFamily: "poppins",
          fontSize: 29,
        }}
      >
        Name
      </Grid></Grid>
      <Grid container>
        <Grid item xs={12}>
      <input
        placeholder="Enter Your Name"
        style={{
          height: "35px",
          width:"80%",
          color: "#192f60",
          fontFamily: "poppins",
          position: "absolute",
          top: "150px",
          left: 45,
          opacity: 1,
        }}onChange={(e)=>{setName(e.target.value)}}
      /></Grid></Grid>
      <Grid container>
      <Grid item xs={10}
        style={{
          position: "absolute",
          top:220,left:50,
          color: "#192f60",
          fontFamily: "poppins",
          fontSize: 29,
        }}
      >
        Mobile Number
      </Grid></Grid>
       <Grid container>
        <Grid item xs={12}>
      <input
        placeholder="Enter Your Mobile Number"
        style={{
          height: "35px",
          width:"80%",
          color: "#192f60",
          fontFamily: "poppins",
          position: "absolute",
          top: "270px",
          left: 45,
          opacity: 1,
        }}onChange={(e)=>{setMno(e.target.value)}}
      /></Grid></Grid>
      <Grid container>
      <Grid item xs={10}
        style={{
          position: "absolute",
          top:320,left:50,
          color: "#192f60",
          fontFamily: "poppins",
          fontSize: 29,
        }}
      >
        Address
      </Grid></Grid>
       <Grid container>
        <Grid item xs={12}>
      <input
        placeholder="Enter Your Address"
        style={{
          height: "35px",
          width:"80%",
          color: "#192f60",
          fontFamily: "poppins",
          position: "absolute",
          top: "370px",
          left: 45,
          opacity: 1,
        }}
        onChange={(e)=>{setAddress(e.target.value)}}
      />
      </Grid></Grid>
      <Grid container style={{position:'relative',top:564,backgroundColor:'#f5f8ff',height:110}}>
        <Grid item xs={1}></Grid>
      <Grid item xs={2} style={{position:'relative',top:40,fontFamily:"poppins",fontSize:25}}>Subtotal</Grid>
      <Grid item xs={2}style={{position:'relative',top:40,fontFamily:"poppins",fontSize:25,marginLeft:16}}>{c}</Grid><Grid item xs={2}></Grid>
      <Grid item xs={3} style={{position:'relative',top:30,fontFamily:"poppins",fontSize:25,height:'60px',borderRadius:7,backgroundColor:"#Ce0505",borderColor:'#ce0505',color:'white',cursor:'pointer'}} onClick={()=>handleSecondButtonTwoClick()}>Proceed</Grid>
      </Grid>
      </Grid>
      <Grid item xs={3}></Grid>
    </Grid></>):(<>
    <Grid container > 
       <Grid item xs={2} ></Grid>
       <Grid item xs={8}
      style={{
        position: "relative",
        height: 707,
        background: "#fbfbfb 0% 0% no-repeat padding-box",
        borderRadius: 6,
        opacity: 1,
        zIndex: 20,
      }}
    > <span style={{ position: "absolute",
          top: "8px",
          left: 47,cursor:'pointer'}}
          onClick={()=>handleSecondButtonOneClick()}
          ><BiArrowBack size={29} /></span> 
      <Grid container>
        <Grid item xs={1}></Grid>
      <Grid item xs={10}
        style={{
          height: "18px",
          color: "#192f60",
          fontFamily: "poppins",
          fontSize: "39px",
          position: "relative",top:25,
          opacity: 1,
        }}
      >
        {restaurantName}
      </Grid></Grid>
      <Grid container>
      <Grid item xs={10}
        style={{
          position: "absolute",
          top:100,left:50,
          color: "#192f60",
          fontFamily: "poppins",
          fontSize: 29,
        }}
      >
        Name
      </Grid></Grid>
      <Grid container>
        <Grid item xs={12}>
      <input
        placeholder="Enter Your Name"
        style={{
          height: "35px",
          width:"80%",
          color: "#192f60",
          fontFamily: "poppins",
          position: "absolute",
          top: "150px",
          left: 45,
          opacity: 1,
        }}
      /></Grid></Grid>
      <Grid container>
      <Grid item xs={10}
        style={{
          position: "absolute",
          top:220,left:50,
          color: "#192f60",
          fontFamily: "poppins",
          fontSize: 29,
        }}
      >
        Mobile Number
      </Grid></Grid>
       <Grid container>
        <Grid item xs={12}>
      <input
        placeholder="Enter Your Mobile Number"
        style={{
          height: "35px",
          width:"80%",
          color: "#192f60",
          fontFamily: "poppins",
          position: "absolute",
          top: "270px",
          left: 45,
          opacity: 1,
        }}
      /></Grid></Grid>
      <Grid container>
      <Grid item xs={10}
        style={{
          position: "absolute",
          top:320,left:50,
          color: "#192f60",
          fontFamily: "poppins",
          fontSize: 29,
        }}
      >
        Address
      </Grid></Grid>
       <Grid container>
        <Grid item xs={12}>
      <input
        placeholder="Enter Your Address"
        style={{
          height: "35px",
          width:"80%",
          color: "#192f60",
          fontFamily: "poppins",
          position: "absolute",
          top: "370px",
          left: 45,
          opacity: 1,
        }}
      />
      </Grid></Grid>
      <Grid container style={{position:'relative',top:564,backgroundColor:'#f5f8ff',height:110}}>
        <Grid item xs={1}></Grid>
      <Grid item xs={2} style={{position:'relative',top:40,fontFamily:"poppins",fontSize:25}}>Subtotal</Grid>
      <Grid item xs={2}style={{position:'relative',top:40,fontFamily:"poppins",fontSize:25,marginLeft:16}}>{c}</Grid><Grid item xs={2}></Grid>
      <Grid item xs={3} style={{position:'relative',top:30,fontFamily:"poppins",fontSize:25,height:'60px',borderRadius:7,backgroundColor:"#Ce0505",borderColor:'#ce0505',color:'white',cursor:'pointer'}} onClick={()=>handleSecondButtonTwoClick()}>Proceed</Grid>
      </Grid>
      </Grid>
      <Grid item xs={2}></Grid>
    </Grid></>))}
     
    {/* 4th div */}
      {showThirdDiv && (  <div
   style={{ width:'760px',height: '709px', backgroundColor:"white",position:"absolute",zIndex:30,top:'130px',left:'400px',borderRadius:10 }}
    > 
    <span style={{ position: "absolute",
          top: "8px",
          left: 47,cursor:'pointer'}}
          onClick={()=>handleThirdButtonOneClick()}
          ><BiArrowBack size={29} /></span> 
      <span
        style={{
          height: "25px",
          color: "#192f60",
          fontFamily: "poppins",
          fontSize: "39px",
          position: "absolute",
          top: "48px",
          left: 47,
          opacity: 1,
        }}
      >
        Choose payment method
      </span>
      <div
        style={{
          height: 475,
          width: 200,
          backgroundColor: "#d2d9e6",
          position: "absolute",
          top: 114,
          left: 33,
          borderRadius:10
        }}
      >
        {buttonTexts.map((text, index) => (
          <button
            key={index}
            style={{
              position: "absolute",
              top: 30 + index * 70,
              left: 15,
              width: 185,
              height: 55,
              border:0,
              fontSize: 19,cursor:'pointer',
              fontFamily: "poppins",
              color: "#192f60",
              borderTopLeftRadius:10,
              borderBottomLeftRadius:10,
              backgroundColor: selectedButton === index ? "#ffffff" : "#d2d9e6",
            }}
            onClick={() => {setSelectedButton(index);console.log(selectedButton);handleClick(index) 
              }}
          >
            <span style={{position:'absolute',left:2,top:12}}>{text.c}</span><span style={{position:'absolute',left:35,top:17}}>{text.name}</span>
          </button>
        ))}
      </div>
       {selectedButton == 0 ? (
  <div id="div1"><div style={{
      width: '500px',
      height: '400px',
      position: 'absolute',
      top: '110px',
      left: '250px',
      backgroundColor: 'white'
    }}>
      <span style={{
        position: 'absolute',
        top: '20px',
        left: '15px',
        fontSize: '20px',
        fontFamily: 'Poppins',
        color: '#192f60'
      }}>
        Pay with NetBanking
      </span>
    </div></div>
) : selectedButton == 1 ? (
  <div id="div2" style={{position:'absolute',top:'45px',left:'240px',width:'200px',height:'360px'}}> 
     <span style={{
        position: 'absolute',
        top: '75px',
        left: '15px',
        fontSize: '23px',
        fontFamily: 'Poppins',
        width:'190px',
        color: '#192f60'
      }}>
        Payment By Wallets
      </span>
  <div style={{
      width: '400px',
      height: '40px',
      position: 'absolute',borderRadius:7,border:"2px solid lightgrey",
      top: '120px',
      left: '14px',
      backgroundColor: selectedDiv === 'Paytm' ? 'green' : ''
    }} onClick={() => handleDivClick('Paytm')}>
      <span style={{
        position: 'absolute',
        top: '10px',
        left: '10px',
        fontSize: '16px',
        fontFamily: 'Poppins',
        color: '#192f60'
      }}>
        Paytm Wallet
      </span>
    </div>
  <div style={{
      width: '400px',
      height: '40px',
      position: 'absolute',borderRadius:7,border:"2px solid lightgrey",
      top: '190px',
      left: '14px',
      backgroundColor: selectedDiv === 'PhonePe' ? 'green' : ''
    }} onClick={() => handleDivClick('PhonePe')}>
      <span style={{
        position: 'absolute',
        top: '10px',
        left: '10px',
        fontSize: '16px',
        fontFamily: 'Poppins',
        color: '#192f60'
      }}>
        PhonePe Wallet
      </span>
    </div>
    <div style={{
      width: '400px',
      height: '40px',
      position: 'absolute',border:"2px solid lightgrey",borderRadius:7,
      top: '260px',
      left: '14px',
      backgroundColor: selectedDiv === 'GooglePay' ? 'green' : ''
    }} onClick={() => handleDivClick('GooglePay')}>
      <span style={{
        position: 'absolute',
        top: '10px',
        left: '10px',
        fontSize: '16px',
        fontFamily: 'Poppins',
        color: '#192f60'
      }}>
        GooglePay Wallet
      </span>
    </div>
    <button style={{
      position: 'absolute',
      top: '330px',
      left: '14px',
      width: '100px',
      height: '30px',
      fontSize: '16px',
      fontFamily: 'Poppins',borderRadius:7,border:"2px solid black",
      color: 'white',
      backgroundColor: '#192f60'
    }} onClick={()=>handlePayClick}>
      Pay 23
    </button></div>
) : selectedButton == 2 ? (
   <div id="div2" style={{position:'absolute',top:'45px',left:'240px',width:'200px',height:'360px'}}> 
     <span style={{
        position: 'absolute',
        top: '75px',
        left: '15px',
        fontSize: '23px',
        fontFamily: 'Poppins',
        width:'190px',
        color: '#192f60'
      }}>
        Payment By UPI
      </span>
  <div style={{
      width: '400px',
      height: '40px',
      position: 'absolute',borderRadius:7,border:"2px solid lightgrey",
      top: '120px',
      left: '14px',
      backgroundColor: selectedDiv === 'Paytm' ? 'green' : ''
    }} onClick={() => handleDivClick('Paytm')}>
      <span style={{
        position: 'absolute',
        top: '10px',
        left: '10px',
        fontSize: '16px',
        fontFamily: 'Poppins',
        color: '#192f60'
      }}>
        Paytm UPI
      </span>
    </div>
  <div style={{
      width: '400px',
      height: '40px',
      position: 'absolute',borderRadius:7,border:"2px solid lightgrey",
      top: '190px',
      left: '14px',
      backgroundColor: selectedDiv === 'PhonePe' ? 'green' : ''
    }} onClick={() => handleDivClick('PhonePe')}>
      <span style={{
        position: 'absolute',
        top: '10px',
        left: '10px',
        fontSize: '16px',
        fontFamily: 'Poppins',
        color: '#192f60'
      }}>
        PhonePe UPI
      </span>
    </div>
    <div style={{
      width: '400px',
      height: '40px',
      position: 'absolute',border:"2px solid lightgrey",borderRadius:7,
      top: '260px',
      left: '14px',
      backgroundColor: selectedDiv === 'GooglePay' ? 'green' : ''
    }} onClick={() => handleDivClick('GooglePay')}>
      <span style={{
        position: 'absolute',
        top: '10px',
        left: '10px',
        fontSize: '16px',
        fontFamily: 'Poppins',
        color: '#192f60'
      }}>
        GooglePay UPI
      </span>
    </div>
    <button style={{
      position: 'absolute',
      top: '330px',
      left: '14px',
      width: '100px',
      height: '30px',
      fontSize: '16px',
      fontFamily: 'Poppins',borderRadius:7,border:"2px solid black",
      color: 'white',
      backgroundColor: '#192f60'
    }} onClick={()=>handlePayClick}>
      Pay 23
    </button></div>
) : selectedButton == 3 ? (
  <div>
      <div style={{
        position: "absolute",
        backgroundColor:'#fbfbfb',
        top: 200,
        left: 280,
        width: 120,
        height: 30,
        border: "1px solid grey",
      }}>
        <input
          style={{
            width: 100,
            height: 20,
            border: 0,
            padding: 5,
          }}
          placeholder="Valid Through(MM/YY)"
          value={validThrough}
          onChange={()=>handleValidThroughChange}
        />
      </div>
      <div style={{
        position: "absolute",
        top: 270,
        left: 270,
        width: 210,
        height: 100,
        border: "1px solid grey",
      }}>
        <input
          style={{
            position: "absolute",
            top: 5,
            left: 5,
            width: 100,
            height: 20,
            border: 0,
            padding: 5,
          }}
          placeholder="Name on card"
          value={nameOnCard}
          onChange={()=>handleNameOnCardChange}
        />
      </div>
      <input
        style={{
          position: "absolute",
          top: 400,
          left: 270,
          width: 17,
          height: 17,
        }}
        type="checkbox"
        checked={isChecked}
        onChange={()=>handleCheckboxChange}
      /> <span  style={{
          position: "absolute",
          top: 398,
          left: 270,
          width: 188,
          height: 10,
        }}>Save the card details</span>
      <button onClick={()=>handleSubmit} style={{width:'77px',height:'27px',backgroundColor:'#ce0505',border:'2px solid #ce0505',position:'absolute',top:430,right:350}}>Submit</button>
    </div>
) : selectedButton == 4 ? (
  <div id="div5">Div 5</div>
) : selectedButton == 5 ? (
  <div id="div6">Div 6</div>
) : null}
      
      </div>)}
     
      
    

    </Grid>  )}



  



    export default DetailsDiv;