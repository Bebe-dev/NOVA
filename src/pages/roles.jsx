import { Button, Center } from "@chakra-ui/react";
import { PiHandWavingFill } from "react-icons/pi";

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
          <Button colorScheme="blue" size="lg" variant="outline">
            Product Manager
          </Button>
          <Button colorScheme="blue" size="lg" variant="outline">
            Marketing Officer
          </Button>
          <Button colorScheme="blue" size="lg" variant="outline">
            Director of Operations
          </Button>
          <Button colorScheme="blue" size="lg" variant="outline">
            Accountant
          </Button>
        </div>
        <div className="flex gap-8 mt-10">
          <Button colorScheme="blue" size="lg" variant="outline">
            Sales Manager
          </Button>
          <Button colorScheme="blue" size="lg" variant="outline">
            Content Strategies
          </Button>
          <Button colorScheme="blue" size="lg" variant="outline">
            Technical Specialist
          </Button>
        </div>
        <div className="flex gap-8 my-10">
          <Button colorScheme="blue" size="lg" variant="outline">
            Customer Service Manager
          </Button>
          <Button colorScheme="blue" size="lg" variant="outline">
            Others
          </Button>
        </div>
      </div>

      <Center className="my-8 flex flex-col gap-8">
        <img src=".\public\images\LOGO.png" />
        <img src=".\public\images\Slider.png"/>
      </Center>
    </div>
  );
};

export default Roles;
