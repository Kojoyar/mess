// import { SyntheticEvent, useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { getAuth, signInWithPhoneNumber, RecaptchaVerifier } from 'firebase/auth';
// import { setUser } from '../store/slices/userSlice';

// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button'

// interface IUserData {
//   phoneNumber: string,
//   appVerifier: string
// }

// const RegisterPage = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [appVerifier, setAppVerifier] = useState('');

//    const handleRegister = (e: SyntheticEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     const auth = getAuth();
//     const recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
//       size: 'invisible',
//     }, auth);

//     signInWithPhoneNumber(auth, phoneNumber, recaptchaVerifier)
//       .then((confirmationResult) => {
//         const verificationCode = prompt('Please enter the verification code sent to your phone');

//         if (verificationCode) {
//           confirmationResult.confirm(verificationCode)
//             .then((userCredential) => {
//               const user = userCredential.user;
//               console.log(user);
//               user.getIdToken()
//                 .then((token) => {
//                   dispatch(setUser({
//                     phoneNumber: user.phoneNumber,
//                     id: user.uid,
//                     token: token,
//                   }));
//                   navigate('/');
//                 })
//                 .catch(console.error);
//             })
//             .catch(console.error);
//         }
//       })
//       .catch(console.error);
//   };

//   return (
//     <form onSubmit={handleRegister}>
//       <form action="" noValidate autoComplete='on' onSubmit={handleRegister}>
//         <TextField type='phoneNumber'
//           id="standard-basic"
//           label="Phone number"
//           variant="standard"
//           value={phoneNumber}
//           onChange={(e) => setPhoneNumber(e.target.value)}
//           required
//           autoFocus
//         />
        
//         {/* <TextField type='password'
//           id="standard-basic"
//           label="Password"
//           variant="standard"
//           value={appVerifier}
//           onChange={(e) => setAppVerifier(e.target.value)}
//           required
//         /> */}
//         <Button variant="contained" type='submit'>Register</Button>
//       </form>

//       {/* <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
//       <button type="submit">Register</button> */}
//     </form>
//   );
// };

// export default RegisterPage;

// import OtpInputType  from "otp-input-react";
// const myOtpType: OtpInputType = "number";
import React from 'react'

const tests = () => {
  return (
    <div>tests</div>
  )
}

export default tests