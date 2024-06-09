import React from "react";
import { Formik,  Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Button } from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { GoogleLogin } from 'react-google-login';

const Login = () => {
  const navigate = useNavigate();

  const handleGoogleSuccess = (response) => {
    console.log('Google login success:', response);
    navigate('/dashboard'); 
  };

  const handleGoogleFailure = (response) => {
    console.error('Google login failure:', response);
  };

  return (
    <div className="flex flex-col md:flex-row gap-12 p-4 md:p-12">
      <img
        src=".\public\images\login-bg.png"
        className="hidden md:block h-screen w-2/5"
        alt="Login Background"
      />
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={Yup.object({
          email: Yup.string().email("Invalid email address").required("Required"),
          password: Yup.string().min(8, "Must be more than 7 characters").required("Required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            console.log(values);
            navigate("/dashboard");
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form className="flex flex-col gap-4 mt-16 w-full md:w-1/2">
          <div className="">
            <h2 className="font-bold text-xl text-[#3A404B]">Glad to have you back!</h2>
           
          </div>

          <div className="flex flex-col gap-3">
            <label htmlFor="email" className="text-[#3A404B]">
              Work Email
            </label>
            <Field
              name="email"
              type="email"
              placeholder="Enter your email"
              className="border border-[#3A404B] rounded p-2 outline-none w-full"
            />
            <ErrorMessage name="email">
              {(message) => <div className="text-red-500">{message}</div>}
            </ErrorMessage>
          </div>

          <div className="flex flex-col gap-3">
            <label htmlFor="password" className="text-[#3A404B]">
              Password
            </label>
            <Field
              name="password"
              type="password"
              placeholder="Enter your password"
              className="border border-[#3A404B] rounded p-2 outline-none w-full"
            />
            <ErrorMessage name="password">
              {(message) => <div className="text-red-500">{message}</div>}
            </ErrorMessage>
            <Link
              to="/forgot-password"
              className="text-blue-700 hover:bg-blue-100 p-1 rounded self-end mt-2"
            >
              Forgot Password?
            </Link>
          </div>

          <Button type="submit" colorScheme="blue" size="lg" className="mt-3 w-full">
            Log In
          </Button>

          <h2 className="text-center my-4">OR</h2>

          <GoogleLogin
            clientId="82292926425-baeffrenmlc6bepg8dg83vb0o754fq1a.apps.googleusercontent.com"
            onSuccess={handleGoogleSuccess}
            onFailure={handleGoogleFailure}
            render={(renderProps) => (
              <Button
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                leftIcon={<FcGoogle />}
                colorScheme="blue"
                variant="outline"
                size="lg"
                className="w-full"
              >
                Sign in with Google
              </Button>
            )}
          />

          <p className="text-center mt-4">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="text-blue-700 hover:bg-blue-100 p-1 rounded"
            >
              Sign Up
            </Link>
          </p>
        </Form>
      </Formik>
    </div>
  );
};

export default Login;
