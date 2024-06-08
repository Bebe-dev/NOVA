import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Button } from '@chakra-ui/react'
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {

    const navigate = useNavigate()

  return (
    <div className="flex gap-12">
      <img src=".\public\images\signup bg.png" className="h-screen w-2/5" />
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
          password: Yup.string()
            .min(8, "Must be more than 7 characters")
            .required("Required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            //alert(JSON.stringify(values, null, 2));
            navigate('/setup')
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form className="flex flex-col gap-4 mt-16">
          <div className="">
            <h2 className="font-bold text-xl text-[#3A404B]">
              Create your account
            </h2>
            <p className="text-md">
              You're one step closer to providing exceptional Customer Services
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <label htmlFor="email" className="text-[#3A404B]">
              Work Email
            </label>
            <Field
              name="email"
              type="email"
              placeholder="Enter your work email"
              className="border border-[#3A404B] rounded p-2 outline-none"
            />
            <ErrorMessage name="email" >
                {message => <div className="text-red-500">{message}</div>}
            </ErrorMessage>
          </div>

          <div className="flex flex-col gap-3">
            <label htmlFor="password" className="text-[#3A404B]">
              Password
            </label>
            <Field
              name="password"
              type="text"
              placeholder="Enter your password"
              className="border border-[#3A404B] rounded p-2 outline-none"
            />
            <small>8 characters minimum, 1 uppercase letter and 1 Number</small>
            <ErrorMessage name="password" >
                {message => <div className="text-red-500">{message}</div>}
            </ErrorMessage>
          </div>

          <Button type="submit" colorScheme="blue" size="lg" className="mt-3">Next</Button>

          <h2 className="text-center my-4">OR</h2>

          <Button leftIcon={<FcGoogle/>} colorScheme="blue" variant="outline" size="lg">Sign Up with Google</Button>

          {/* <button type="submit">Next</button>#007BFF */}
        </Form>
      </Formik>
    </div>
  );
};

export default SignUp;
