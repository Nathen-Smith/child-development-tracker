import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  Auth,
} from "firebase/auth";
import { useFirebaseApp } from "reactfire";
import axios from "../../axios";

async function buttonSignIn(auth: Auth) {
  const provider = new GoogleAuthProvider();

  try {
    const result = await signInWithPopup(auth, provider);
    const credential = GoogleAuthProvider.credentialFromResult(result);
    if (!credential) throw new Error();
    const user = result.user;

    // post regardless if exists or not
    await axios.post("/user", {
      email: user?.email,
      name: user?.displayName,
    });
    return;
  } catch (err) {
    console.log(err);
  }
}

export const SignIn = () => {
  const app = useFirebaseApp();
  const auth = getAuth(app);
  return (
    <button
      onClick={async () => {
        await buttonSignIn(auth);
      }}
      className="text-gray-400 hover:bg-gray-300 hover:text-black px-3 py-2 rounded-md text-sm font-medium"
    >
      Sign In
    </button>
  );
};
