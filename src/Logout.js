import { getAuth, signOut } from "firebase/auth";
import { useEffect } from "react";
import { logout } from "./firebase";
import './Login.js';

function Logout() {
    const auth = getAuth();
    return (
        <IonButton onClick={async () => {
            await signOut(auth);
            history.replaceState("/Login");
        }}></IonButton>
    );
}
export default Logout;