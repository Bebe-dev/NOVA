import { useState } from "react";
import React from "react";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import { Button, Center } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import Countdown from "react-countdown";

const EmailVerification = () => {
  const [otp, setOtp] = useState(new Array(4).fill(""));
  const [timer, setTimer] = useState(30);

  const handleChange = (e, index) => {
    if(isNaN(e.target.value)){return false}

    setOtp([
      ...otp.map((data, num) => (num === index ? e.target.value : data)),
    ]);

    if (e.target.value && e.target.nextSibling) {
      e.target.nextSibling.focus();
    }
  };

  const navigate = useNavigate();

  const TimerButton = () => {
    return (
      <Button colorScheme="blue" size="lg" className="mt-3">
        Resend
      </Button>
    );
  };

  const renderer = ({ seconds, completed }) => {
    if (completed) {
      // Render a complete state
      return <TimerButton />;
    } else {
      // Render a countdown
      return <span>{seconds}s</span>;
    }
  };

  return (
    <div>
      <div className="flex gap-20">
        <img src=".\public\images\signup bg.png" className="h-screen w-2/5" />
        <Formik
          initialValues={{ otp: "" }}
          validationSchema={Yup.object({
            otp: Yup.string()
            //   .email("Invalid email address")
            //   .required("Required"),
          })}
          onSubmit={(values, { setSubmitting }) => {
            values = otp.join("");
            setTimeout(() => {
              //alert(JSON.stringify(values, null, 2));
              //alert(values)
              navigate("/roles");
              setSubmitting(false);
            }, 400);
          }}
        >
          <Form className="flex flex-col gap-4 mt-16 w-2/5">
            <div className="">
              <h2 className="font-bold text-xl text-[#3A404B]">
                Email verification
              </h2>
              <p className="text-md">
                Customize your workflow and integrations
              </p>
              <Center>
                <img src=".\public\images\postal letter.png" className="m-12" />
              </Center>

              <p className="text-center">
                A 4-digit confirmation code has been sent to your email. It will
                expire in 20 minutes. Please enter code correctly
              </p>
            </div>

            <Center>
              <div className="flex gap-4">
                {otp.map((data, i) => {
                  return (
                    <input
                      type="text"
                      value={data}
                      maxLength={1}
                      onChange={(e) => handleChange(e, i)}
                      className="border border-[#3A404B] rounded p-2 outline-none w-10 mb-8"
                    />
                  );
                })}
              </div>
            </Center>

            <Center>
              <div>                
                {<Countdown date={Date.now() + 30000} renderer={renderer} />}
              </div>
            </Center>

            <Button type="submit" colorScheme="blue" size="lg" className="mt-3">
              Verify
            </Button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default EmailVerification;
