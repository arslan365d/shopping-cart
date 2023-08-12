
import {GoogleAuthProvider,getAuth,signInWithPopup} from 'firebase/auth'
import app from "./FireBase"

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

export const signInGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      console.log(credential.idToken);
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
