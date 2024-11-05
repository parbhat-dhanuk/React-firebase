
import {getDatabase,ref,set} from 'firebase/database'
import {app} from './firebase'

const db=getDatabase(app)

function App() {
  const putData=()=>{
    set(ref(db,'users/parbhat'),{
      id:1,
      name:"parbhat dhanuk",
      age:27
    })
  }
  return (
   <>
   <h1>Hello firebase</h1>
   <button className='bg-red-500' onClick={putData}>Put data</button>
   </>
  )
}

export default App
