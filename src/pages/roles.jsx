import { Button, Center, Input } from "@chakra-ui/react";
import { PiHandWavingFill } from "react-icons/pi";
import { Link } from "react-router-dom/dist";

const Roles = () => {
  return (
    <div>
      <div className="text-center my-10 flex justify-center items-center">
        <h2 className="font-bold text-xl text-[#3A404B]">Welcome </h2>
        <PiHandWavingFill />
      </div>

      <div className="text-center">
        <h2 className="font-bold text-xl text-[#3A404B] mb-2">
          What is Your Role ?
        </h2>
        <p className="text-md">Choose a role let's set up your profile</p>
      </div>

      <div className="flex flex-col justify-center items-center">
        <div className="flex gap-8 mt-10">
          <Button
            size="lg"
            variant="outline"
            borderColor="#c9ccd1"
            textColor="#3a404b"
          >
            Product Manager
          </Button>
          <Button
            size="lg"
            variant="outline"
            borderColor="#c9ccd1"
            textColor="#3a404b"
          >
            Marketing Officer
          </Button>
          <Button
            size="lg"
            variant="outline"
            borderColor="#c9ccd1"
            textColor="#3a404b"
          >
            Director of Operations
          </Button>
          <Button
            size="lg"
            variant="outline"
            borderColor="#c9ccd1"
            textColor="#3a404b"
          >
            Accountant
          </Button>
        </div>
        <div className="flex gap-8 mt-10">
          <Button
            size="lg"
            variant="outline"
            borderColor="#c9ccd1"
            textColor="#3a404b"
          >
            Sales Manager
          </Button>
          <Button
            size="lg"
            variant="outline"
            borderColor="#c9ccd1"
            textColor="#3a404b"
          >
            Content Strategies
          </Button>
          <Button
            size="lg"
            variant="outline"
            borderColor="#c9ccd1"
            textColor="#3a404b"
          >
            Technical Specialist
          </Button>
        </div>
        <div className="flex gap-8 my-10">
          <Button
            size="lg"
            variant="outline"
            borderColor="#c9ccd1"
            textColor="#3a404b"
          >
            Customer Service Manager
          </Button>
          {/* <Button colorScheme="blue" size="lg" variant="outline">
            Others
          </Button> */}
          <Input
            htmlSize={4}
            width="auto"
            placeholder="Others"
            borderColor="#c9ccd1"
            textColor="#3a404b"
            _placeholder={{ color: "#3a404b" }}
            className="p-6"
          />
        </div>

        <Link to="/login">
          <Button colorScheme="blue" size="lg" className="mt-3">
            Done
          </Button>
        </Link>
      </div>

      <div className="flex justify-center items-end gap-14">
        <Center className="mt-8 flex flex-col gap-8">
          <img src=".\public\images\LOGO.png" />
          <img src=".\public\images\Slider.png" />
        </Center>
      </div>
    </div>
  );
};

export default Roles;
