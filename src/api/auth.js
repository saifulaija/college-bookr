// save user to database
export const saveUser = user=>{
      const currentUser = {
            email: user.email,
            name: user.displayName,
            image: user.photoURL,
            
      }
      fetch(`https://assignment-server-12-indol.vercel.app/users/${user?.email}`,{
            method: 'PUT',
            headers:{
                  'content-type':'application/json'
            },
            body:JSON.stringify(currentUser)
      })
      .then(res=> res.json())
      .then(data=> console.log(data))
}