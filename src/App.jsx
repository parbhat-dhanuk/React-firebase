
import {getAuth,createUserWithEmailAndPassword} from 'firebase/auth'
import {app} from './firebase'

const auth=getAuth(app)

function App() {
 
  const signupUser=()=>{
 createUserWithEmailAndPassword(auth, 'parbhat@gmail.com',
   'parbhat123').then(value=>console.log(value))
  }
  return (
   <>
   <h1>Hello firebase</h1>
   <button onClick={signupUser} >create User</button>
   
   </>
  )
}

export default App
