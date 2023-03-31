import React, { SyntheticEvent, useState } from 'react'
import { BsFillShieldLockFill, BsTelephoneFill } from "react-icons/bs";
import { CgSpinner } from "react-icons/cg";

import OtpInput, { OtpInputType } from "otp-input-react";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { auth } from '../firebase.config';
import {signInWithPhoneNumber } from "firebase/auth";
import { RecaptchaVerifier } from 'firebase/auth';
import { toast, Toaster } from "react-hot-toast";

declare global {
  interface Window { recaptchaVerifier: any;
    confirmationResult: any;
   }
}

const RegisterPage = () => {

  interface IUserData {
    phoneNumber: string,
    // password: string
  }

  const [userData, setUserData] = useState<IUserData>({
    phoneNumber: '',
    // password:''
  } as IUserData);

  const [OTP, setOTP]: any = useState();
  const [loading, setLoading] = useState<boolean>(false);
  const [showOTP, setShowOTP] = useState<boolean>(false);
  // const [phoneNumber, setPhoneNumer] = useState<string>('');

  const handleRegister = async (e:SyntheticEvent<HTMLButtonElement>) => {
    e.preventDefault();

    // const appVerifier = (window as any).recaptchaVerifier = new RecaptchaVerifier(
    //   "recaptcha-container",
    //   {
    //     size: "invisible",
    //     callback: () => {
    //     },
    //     "expired-callback": () => {},
    //   },
    //   auth
    // );

  const recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
  size: 'invisible',
  }, auth);

    const formatPh = "+" + userData.phoneNumber;

    console.log(userData.phoneNumber);
    // const appVerifier = window.recaptchaVerifier

    try {
      signInWithPhoneNumber(auth, formatPh, recaptchaVerifier) 
      .then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
        setLoading(false);
        setShowOTP(true);
        toast.success("OTP sended successfully!");

      }).catch((error) => {
        console.log(error);
        setLoading(false);
      });
    } catch (error) {
      // error.message && console.log(error.message)
      console.log(error);
    }

    // setUserData({
    //   phoneNumber: '',
    //   password:''
    // })
  }

  function onOTPVerify() {
    setLoading(true);
    window.confirmationResult
      .confirm(OTP)
      .then(async (res: any) => {
        console.log(res);
        setUserData(res.user);
        setLoading(false);
      })
      .catch((err: any) => {
        console.log(err);
        setLoading(false);
      });
  }

  return (
    <section className="bg-emerald-500 flex items-center justify-center h-screen">
    <div>
      <Toaster toastOptions={{ duration: 4000 }} />
      <div id="recaptcha-container"></div>
      {userData ? (
        <h2 className="text-center text-white font-medium text-2xl">
          👍Login Success
        </h2>
      ) : (
        <div className="w-80 flex flex-col gap-4 rounded-lg p-4">
          <h1 className="text-center leading-normal text-white font-medium text-3xl mb-6">
            Welcome to <br /> CODE A PROGRAM
          </h1>
          {showOTP ? (
            <>
              <div className="bg-white text-emerald-500 w-fit mx-auto p-4 rounded-full">
                <BsFillShieldLockFill size={30} />
              </div>
              <label
                htmlFor="otp"
                className="font-bold text-xl text-white text-center"
              >
                Enter your OTP
              </label>
              <OtpInput
                value={OTP}
                onChange={setOTP}
                OTPLength={6}
                otpType="number"
                disabled={false}
                autoFocus
                className="opt-container "
              ></OtpInput>
              <button
                onClick={onOTPVerify}
                className="bg-emerald-600 w-full flex gap-1 items-center justify-center py-2.5 text-white rounded"
              >
                {loading && (
                  <CgSpinner size={20} className="mt-1 animate-spin" />
                )}
                <span>Verify OTP</span>
              </button>
            </>
          ) : (
            <>
              <div className="bg-white text-emerald-500 w-fit mx-auto p-4 rounded-full">
                <BsTelephoneFill size={30} />
              </div>
              <label
                htmlFor=""
                className="font-bold text-xl text-white text-center"
              >
                Verify your phone number
              </label>
              <PhoneInput country={"in"} onChange={phone => {setUserData({phoneNumber: phone})} }/>
              <button
                onClick={handleRegister}
                className="bg-emerald-600 w-full flex gap-1 items-center justify-center py-2.5 text-white rounded"
              >
                {loading && (
                  <CgSpinner size={20} className="mt-1 animate-spin" />
                )}
                <span>Send code via SMS</span>
              </button>
            </>
          )}
        </div>
      )}
    </div>
  </section>
  )
}

export default RegisterPage
// value={userData?.phoneNumber}
{/* <div>
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
</div> */}