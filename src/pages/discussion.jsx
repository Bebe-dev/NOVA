import { Button, Card } from "@chakra-ui/react";
import DashboardHeader from "../components/dashHeader";
import SideNav from "../components/sidenav";
import { Link } from "react-router-dom";

const Discussion = () => {
  return (
    <div>
      <div>
        <DashboardHeader />
      </div>
      <div className="border-r-2 border-[c9ccd1] w-1/5 float-left mr-4">
        <SideNav />
      </div>
      <Card className="flex flex-col justify-center items-center gap-14 bg-[#F5F7F9] w-1/2" backgroundColor="#F5F7F9" marginTop="3%" marginLeft="30%">
        <img src=".\public\images\discuss-header.png" alt="discuss-header" />
        <img src=".\public\images\discuss-image.png" alt="image" />
        <div className="flex flex-col justify-center items-center gap-4 ">
          <h3 className="text-2xl font-semibold text-[#3a404b]">Keep up the good Job</h3>
          <div>
            <p>You do not have new Discussion</p>
            <p>Your inbox is clear!</p>
          </div>
          <Button colorScheme="blue">
            <Link to="/ticket">Go back to home page</Link>
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default Discussion;
