import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Button, Checkbox } from '@chakra-ui/react'
import {  useNavigate } from "react-router-dom";

const SetUp = () => {

    const navigate = useNavigate()

  return (
    <>
      <div className="flex gap-12">
        <img src=".\public\images\signup bg.png" className="h-screen w-2/5" />
        <Formik
          initialValues={{ fullName: "", company: "", industry: "", companySize: "" }}
          validationSchema={Yup.object({
            fullName: Yup.string()
              .required("Required"),
            company: Yup.string()
              .required("Required"),
            industry: Yup.string()
              .required("Required"),
            companySize: Yup.string()
              .required("Required")
          })}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              //alert(JSON.stringify(values, null, 2));
              navigate('/emailverification');
              setSubmitting(false);
            }, 400);
          }}
        >
          <Form className="flex flex-col gap-4 mt-16">
            <div className="">
              <h2 className="font-bold text-xl text-[#3A404B]">
                Complete account setup
              </h2>
              <p className="text-md">
                Customize your getting started experience to fulfill your needs
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <label htmlFor="fullName" className="text-[#3A404B]">
                Full Name
              </label>
              <Field
                name="fullName"
                type="text"
                placeholder="Enter your full name"
                className="border border-[#3A404B] rounded p-2 outline-none"
              />
              <ErrorMessage name="fullName">
                {(message) => <div className="text-red-500">{message}</div>}
              </ErrorMessage>
            </div>

            <div className="flex flex-col gap-3">
              <label htmlFor="company" className="text-[#3A404B]">
                Company
              </label>
              <Field
                name="company"
                type="text"
                placeholder="Enter your Company name"
                className="border border-[#3A404B] rounded p-2 outline-none"
              />
              <ErrorMessage name="company">
                {(message) => <div className="text-red-500">{message}</div>}
              </ErrorMessage>
            </div>

            <div className="flex flex-col gap-3">
              <label htmlFor="industry" className="text-[#3A404B]">
                Industry
              </label>
              <Field
                name="industry"
                type="text"
                placeholder="Enter Industry"
                className="border border-[#3A404B] rounded p-2 outline-none"
              />
              <ErrorMessage name="industry">
                {(message) => <div className="text-red-500">{message}</div>}
              </ErrorMessage>
            </div>

            <div className="flex flex-col gap-3">
              <label htmlFor="companySize" className="text-[#3A404B]">
                Company Size
              </label>
              <Field
                name="companySize"
                type="text"
                as="select"
                placeholder="Select Company Size"
                className="border border-[#3A404B] rounded p-2 outline-none"
              >
                <option value=""></option>
                <option value="small">small</option>
                <option value="big">big</option>
              </Field>
              <ErrorMessage name="companySize">
                {(message) => <div className="text-red-500">{message}</div>}
              </ErrorMessage>
            </div>

            <Checkbox size="sm">Creating an account means you're okay with our <small>Terms of Service, Privacy Policy</small> , and our <small>Notification Settings</small></Checkbox>

            <Button type="submit" colorScheme="blue" size="lg" className="mt-3">
              Start Free Trial
            </Button>

            {/* <button type="submit">Next</button>#007BFF */}
          </Form>
        </Formik>
      </div>
    </>
  );
};

export default SetUp;
