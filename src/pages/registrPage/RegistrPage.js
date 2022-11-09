import React from 'react'
import {useState} from 'react'

function RegistrPage() {
const [user,setUser]=useState({
    username:'',
    email:'',
    age:0
})
const ChangeInp=(e)=>{
    setUser({
        ...user,
        [e.target.name]:e.target.value.trim()
    })
}
const regIn=()=>{
    user.username ==='' || user.email ==='' || user.age ===''
    ? alert('Заполните анкету')
    : alert('Зарегистрован')
    ClearAll()
}
const ClearAll=()=>{
    setUser({
        username:'',
        email:'',
        age:''
    })
}

return (
    <>
        <input type="text" placeholder='username' name='username' onChange={ChangeInp} value={user.username}/>
        <input type="text" placeholder='email' name='email' onChange={ChangeInp} value={user.email}/>
        <input type="number" placeholder='age' name='age' onChange={ChangeInp} value={user.age}/>
        <button onClick={regIn}>register user</button>
        <button onClick={ClearAll}>clear all</button>
    </>
  )
}

export default RegistrPage