import React, { SyntheticEvent, useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


const RegisterPage = () => {

  interface IUserData {
    phoneNumber: string,
    password: string
  }

  const [userData, setUserData] = useState<IUserData>({
    phoneNumber:'',
    password:''
  } as IUserData)

  const handleRegister = (e:SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()
   
    console.log(userData.phoneNumber, userData.password);

    setUserData({
      phoneNumber: '',
      password:''
    })
  }

  return (
    <div>
      <form action="" noValidate autoComplete='on' onSubmit={handleRegister}>
        <TextField type='phoneNumber'
          id="standard-basic"
          label="Phone number"
          variant="standard"
          value={userData.phoneNumber}
          onChange={e => setUserData({ ...userData, phoneNumber: e.target.value })}
          required
        />
        
        <TextField type='password'
          id="standard-basic"
          label="Password"
          variant="standard"
          value={userData.password}
          onChange={e => setUserData({ ...userData, password: e.target.value })}
          required
        />
        <Button variant="contained" type='submit'>Register</Button>
      </form>
      </div>
  )
}

export default RegisterPage