
import {app} from './firebase'
import {GoogleAuthProvider,signInWithPopup,getAuth} from 'firebase/auth'
const auth=getAuth(app)

const googleProvider= new GoogleAuthProvider()


function App() {
 
  const signupWithGoogle=()=>{
    signInWithPopup(auth,googleProvider)
  }

  return (
   <>
   <h1>Hello firebase</h1>
   <br />
   <button className="bg-blue-600" onClick={signupWithGoogle}>Signin with google</button>
  
   
   </>
  )
}

export default App
