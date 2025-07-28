import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import firebaseConfig from "../credentials"; // Adjust the path as necessary

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

function loginComGoogle() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
        .then(result => result.user.getIdToken())
        .then(idToken => {
            console.log("ID Token:", idToken);
            document.getElementById("token").textContent = idToken;
        })
        .catch(error => {
            console.error("Erro no login:", error);
        });
}

function copyToken() {
    const token = document.getElementById("token").textContent;
    if (token) {
        navigator.clipboard.writeText(token)
            .then(() => alert("Token copied!"))
            .catch(err => alert("Failed to copy token."));
    } else {
        alert("No token to copy.");
    }
}

window.copiarToken = copyToken;
window.loginComGoogle = loginComGoogle;
