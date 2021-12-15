import { getAuth, signOut, Auth } from "firebase/auth";
import { useFirebaseApp } from "reactfire";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  return (
    <button
      onClick={async () => {
        await buttonSignOut(auth);
        navigate("/");
      }}
      className="text-indigo-600 hover:bg-gray-300 px-1 py-2 ml-2 rounded-md text-sm font-medium"
    >
      Sign Out
    </button>
  );
};
