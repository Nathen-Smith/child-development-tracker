import { useEffect, useState } from "react";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  User,
} from "firebase/auth";
import { useFirebaseApp, useSigninCheck } from "reactfire";

export const Login = () => {
  const app = useFirebaseApp();
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const [signedInUser, setSignedInUser] = useState<User>();
  useEffect(() => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        if (!credential) throw new Error();
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        setSignedInUser(user);
        console.log(user);
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  }, []);
  const { status, data: signInCheckResult } = useSigninCheck();
  if (signInCheckResult && signInCheckResult.signedIn === true) {
    return <div>Signed in!</div>;
  }
  return <div>Not signed in</div>;
};
