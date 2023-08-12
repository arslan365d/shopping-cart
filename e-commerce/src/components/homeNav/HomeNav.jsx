import React, { useEffect, useState } from 'react'
import "./homeNav.css"
import GoogleImg from "../../assets/google.png"
import {useNavigate} from "react-router-dom"
import {GoogleAuthProvider,getAuth,signInWithPopup} from 'firebase/auth'
import app from "../../firebase/FireBase"
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

const HomeNav = () => {
  const navigate = useNavigate();
  const [userAuth,setUserAuth] = useState();

  const signInGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        console.log(credential.idToken);
        setUserAuth(credential.idToken)
      //   const token = credential.accessToken;
      //   const user = result.user;
      })
      .catch((error) => {
          console.log(error);
      //   const errorCode = error.code;
      //   const errorMessage = error.message;
      //   const email = error.customData.email;
      //   const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };
  useEffect(()=>{
    if(userAuth){
       navigate("/products");
    }
    else{
      console.log("you are not authorized to access this page");
    }
  },[userAuth])
  return (
    <section className='bg-homeNav'>
    <div className='homeNav-container'>
      <div className="homeNav-left">
        <h2>Arslan<span className='text-blue'>Baba</span></h2>
      </div>
      <div className="homeNav-right">
      <button className='login-button' onClick={signInGoogle}>Login <img src={GoogleImg} alt="" /></button>
      </div>
    </div>
    </section>
  )
}

export default HomeNav
