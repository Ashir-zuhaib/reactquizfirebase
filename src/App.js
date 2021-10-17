import Signup from './Components/Signup'
import Signin from './Components/Login'

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import firebase from 'firebase'
import firebaseConfig from './Components/firebase'
function App() {
  
  return (
    <>
    <Signup />
    {/* <Signin /> */}
    </>
  );
}

export default App;
