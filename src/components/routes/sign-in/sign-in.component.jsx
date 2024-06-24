import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import {
  auth,
  createUserDocumentFromAuth,
  // sinInWithGooglePopup,
  signInWithGoogleRedirect,
} from "../../../utils/firebase/firebase.utils";

const SignIn = () => {
  useEffect(() => {
    const fetchUserRedirectResult = async () => {
      const response = await getRedirectResult(auth);
      if (response) {
        const { user } = response;
        const userDocRef = await createUserDocumentFromAuth(user);
      }
    };
    fetchUserRedirectResult();
  }, []);

  const logGoogleUser = async () => {
    const { user } = await signInWithGoogleRedirect();
    // console.log(user);
    // const userDocRef = await createUserDocumentFromAuth(user);
    // console.log(userDocRef);
  };

  return (
    <div>
      <h1>Sign In page</h1>
      <button onClick={logGoogleUser}>Sign in with Google Redirect</button>
    </div>
  );
};

export default SignIn;
