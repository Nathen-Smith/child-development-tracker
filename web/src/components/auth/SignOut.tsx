import { getAuth, signOut, Auth } from "firebase/auth";
import { useFirebaseApp } from "reactfire";

async function buttonSignOut(auth: Auth) {
  try {
    signOut(auth);
    // Sign-out successful.
  } catch (err) {
    // An error happened.
  }
}

export const SignOut = () => {
  const app = useFirebaseApp();
  const auth = getAuth(app);
  return (
    <button
      onClick={async () => {
        await buttonSignOut(auth);
      }}
    >
      Sign Out
    </button>
  );
};
