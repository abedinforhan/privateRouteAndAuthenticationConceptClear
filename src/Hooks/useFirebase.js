import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { useEffect, useState } from "react";
import initializeAuthentication from '../../src/Firebase/firebase.init';
initializeAuthentication();

const useFirebase = () => {
  
 const [user , setUser]=useState({})
const [isLoading , setIsLoading] =useState(true)
 const auth = getAuth()
  const googleProvider= new GoogleAuthProvider()


useEffect(() =>{
     const unsubscribe = onAuthStateChanged(auth , (user)=> {
        console.log(user);
          if(user){
               
              setUser(user)
          } else{
              setUser({})
          }
          setIsLoading(false)
     })
      return ()=> unsubscribe()
},[])
 

  const signInWithGoogle=()=> {
   return  signInWithPopup(auth, googleProvider)
 
  }


const  createAccountWithGoogle =(email , password)=> {

    return createUserWithEmailAndPassword(auth, email, password)
}


const loginWithEmailAndPassword =(email,password)=> {
    return signInWithEmailAndPassword(auth, email, password)
}
    

const updateName= (name)=> {
  updateProfile(auth.currentUser, {
    displayName: name
  }).then(() => {
    const newUser={...user, displayName: name} // recommend
   setUser(newUser)
    
    // ...
  }).catch((error) => {
    // An error occurred
    // ...
  });
}

 const logOut=()=> {
     console.log("logouttttt");
    signOut(auth).then(() => {
        setUser({})
      }).catch((error) => {
        // An error happened.
      });
 }

    return {
       user,setUser,
       signInWithGoogle,
       createAccountWithGoogle,
       loginWithEmailAndPassword,
       isLoading,
       setIsLoading,
       logOut,
       updateName
       
    }
}

export default useFirebase;






