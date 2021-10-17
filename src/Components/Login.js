import {Form, Button} from 'react-bootstrap'
import firebase from 'firebase'
// import firebaseConfig from './firebase'
import './Login.css'
const Signin =()=>{
  let handle=(event) =>{
    console.log('event',event)
    event.preventDefault()
    const {email, password}=event.target.elements
    console.log('email :', email.value)
    console.log('password :', password.value)
    firebase.auth().signInWithEmailAndPassword(email.value, password.value)
        .then((userCredential) => {
          // Signed in
          const loguser = userCredential.user;
          console.log('currentUser', loguser)
          console.log('useradded')
          // swal({
          //     title:'Good Job',
          //     text:'Signed in Successfull',
          //     icon:'success'
          // })
          // .then((value)=>{
          //   console.log('accountLogin')
          //     location.href = "../dashboard/addItem.html" 
          // })


          // ...
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          // console.log(errorMessage)
          // swal({
          //     title:'Login Failed',
          //     text:errorCode,
          //     icon:'error'
          // })
        });
  }
    return(
        <div className="signbox mx-auto">
        <p className="h1 text-center mt-5">Login</p>
        <Form onSubmit={handle}>
  <Form.Group className=" mb-3" controlId="formBasicEmail">
    <Form.Label className="h4">Email address</Form.Label>
    <Form.Control type="email" name ='email' placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label className="h4">Password</Form.Label>
    <Form.Control type="password" name ='password' placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Signin
  </Button>
</Form>
        </div>
    )
}
export default Signin;