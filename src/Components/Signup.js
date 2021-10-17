import {Form, Button} from 'react-bootstrap'
import './Signup.css'
import  firebase from 'firebase'
import {createUserWithEmailAndPassword } from "firebase/auth";
import db from'./firebase';
function Signup(){
  // const firebaseConfig= {
  //   apiKey: "AIzaSyAB7ZdtLidS2ZWYV44lrp4M3bapZCrHAbc",
  //   authDomain: "quiz-app-prac.firebaseapp.com",
  //   projectId: "quiz-app-prac",
  //   storageBucket: "quiz-app-prac.appspot.com",
  //   messagingSenderId: "629548735132",
  //   appId: "1:629548735132:web:eab25600619635e095ab59"
  // };
  // const firebase=initializeApp(firebaseConfig);
    // console.log(firebase)
    const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");
      const handleSubmit = (e)=>{
          e.preventDefault();
          const {email, password}=e.target.elements
          console.log('email', email.value)
          console.log('password', password.value)
          
          // const auth = getAuth();
// createUserWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in 
//     const user = userCredential.user.uid;
//     console.log('user: ',user)
//     // ....
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // ..
//   });
firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    // ...
    console.log('user: ', user)
    console.log('userEmail: ', user.email)
    db.collection("users").set({
      userId: user.uid,
      // first: username.value,
      last: email.value,
      password: password.value
  })
  .then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
  })
  
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
  });
    }
return(
    <div className="signbox mx-auto">
        <p className="h1 text-center mt-5">Sign Up</p>
        <Form onSubmit={handleSubmit}>
  <Form.Group className=" mb-3" controlId="formBasicusername">
    <Form.Label className="h4">User Name</Form.Label>
    <Form.Control type="text" name='username' placeholder="Enter UserName" />
    
  </Form.Group>
  <Form.Group className=" mb-3" controlId="formBasicEmail">
    <Form.Label className="h4">Email address</Form.Label>
    <Form.Control type="email" name='email' placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label className="h4">Password</Form.Label>
    <Form.Control type="password" name='password' placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Signup
  </Button>
</Form>
        </div>
)
}
export default Signup;