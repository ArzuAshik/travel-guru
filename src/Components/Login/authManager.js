import * as firebase from "firebase/app";
import "firebase/auth";
import { firebaseConfig } from '../../firebaseConfig/firebaseConfig';


if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}

const googleProvider = new firebase.auth.GoogleAuthProvider();
const facebookProvider = new firebase.auth.FacebookAuthProvider();


export const firebaseEmailSignIn = (email, password) => {
    if (email && password) {
        return firebase.auth().signInWithEmailAndPassword(email, password)
            .then((res) => {
                return { email: res.user.email };
                // setLoggedInUser({ email: formInput.email });
                // history.replace(from);
            })
            .catch(function (error) {
                var errorMessage = error.message;
                return { err: errorMessage };
            });
    } else {
        console.log('login form else');
    }
}


export const firebaseCreateUser = (email, password, confirmPassword, name) => {
    if (email && password && confirmPassword && name) {
        return firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(() => {
                return { success: true };
            })
            .catch(function (error) {
                var errorMessage = error.message;
                return { success: false, msg: errorMessage };
            });
    }
}


export const firebaseFacebookLogin = () => {
    return firebase.auth().signInWithPopup(facebookProvider)
        .then(result => {
            const email = result.user.email;
            return { success: true, email: email };

            // setLoggedInUser({ email: user });
            // history.replace(from);
        })
        .catch(error => {
            const errorMessage = error.message;
            return { success: false, msg: errorMessage };
        });

}

export const firebaseGoogleLogin = () => {
    return firebase.auth().signInWithPopup(googleProvider)
        .then(result => {
            const email = result.user.email;
            return { success: true, email: email };
        })
        .catch(error => {
            const errorMessage = error.message;
            return { success: false, msg: errorMessage };
        });

}