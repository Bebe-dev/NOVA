import { Input, InputGroup, InputLeftElement } from "@chakra-ui/input";
import DashboardHeader from "../components/dashHeader";
import SideNav from "../components/sidenav";
import { CiSearch } from "react-icons/ci";
import { TbFilterSearch } from "react-icons/tb";
import { Grid, GridItem } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { Checkbox } from "@chakra-ui/checkbox";
import userDetails from "../utils/data/userdetails.json";

const Dashboard = () => {
  
  return (
    <div>
      <div>
        <DashboardHeader />
      </div>
      <div className="border-r-2 border-[c9ccd1] w-1/5 float-left mr-4">
        <SideNav />
      </div>
      <div>
      <h3 className="text-2xl font-semibold mt-6">All Tickets</h3>
        {/* <div className="mt-8 pl-4 flex justify-between items-center"> */}
          
          <div className="flex gap-4 mt-6">
            <InputGroup>
              <InputLeftElement>
                <CiSearch />
              </InputLeftElement>
              <Input placeholder="Search for ticket" width="100" />
            </InputGroup>

            <InputGroup>
              <InputLeftElement>
                <TbFilterSearch />
              </InputLeftElement>
              <Input placeholder="Filter" width="40" />
            </InputGroup>
          </div>
        {/* </div> */}

        <div>
          <Grid
            templateColumns="repeat(6, 1fr)"
            textColor="#757B88"
            m="6"
            mb="0"
            rounded="lg"
            boxShadow="lg"
            className="divide-x-2 divide-[#757b88]"
          >
            <GridItem bg="#eeeff0" h="10" w="100%" p="2" textAlign="center">
              Requester
            </GridItem>
            <GridItem bg="#eeeff0" h="10" w="100%" p="2" textAlign="center">
              Ticket ID
            </GridItem>
            <GridItem bg="#eeeff0" h="10" w="100%" p="2" textAlign="center">
              Subject
            </GridItem>
            <GridItem bg="#eeeff0" h="10" w="100%" p="2" textAlign="center">
              Type
            </GridItem>
            <GridItem bg="#eeeff0" h="10" w="100%" p="2" textAlign="center">
              Status
            </GridItem>
            <GridItem bg="#eeeff0" h="10" w="100%" p="2" textAlign="center">
              Agent
            </GridItem>
          </Grid>

          <Grid
            templateColumns="repeat(6, 1fr)"
            textColor="#757B88"
            m="6"
          >
            {userDetails.users.map((user) => {
              return (
                <>
                  <GridItem
                    h="10"
                    w="100%"
                    borderBottom="1px solid #eeeff0"
                    borderLeft="1px solid #eeeff0"
                    display="flex"
                    justifyContent="start"
                    alignItems="center"
                    gap="4"
                    pl="2"
                  >
                    <Checkbox size="md" />
                    {user.name}
                  </GridItem>
                  <GridItem
                    h="10"
                    w="100%"
                    borderBottom="1px solid #eeeff0"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    {user.id}
                  </GridItem>
                  <GridItem
                    h="10"
                    w="100%"
                    borderBottom="1px solid #eeeff0"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    {user.subject}
                  </GridItem>
                  <GridItem
                    h="10"
                    w="100%"
                    borderBottom="1px solid #eeeff0"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    gap="4"
                  >
                    <img src=".\public\images\Ellipse-icon.png" />
                    {user.type}
                  </GridItem>
                  <GridItem
                    h="10"
                    w="100%"
                    borderBottom="1px solid #eeeffo"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Button size="xs">{user.status}</Button>
                  </GridItem>
                  <GridItem
                    h="10"
                    w="100%"
                    borderBottom="1px solid #eeeff0"
                    borderRight="1px solid #eeeff0"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    gap="2"
                  >
                    <img src={user.src} alt="profile-pic"/>
                    {user.agent}
                  </GridItem>
                </>
              );
            })}
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

{
  /* <InputGroup>
    <InputLeftElement pointerEvents='none'>
      <PhoneIcon color='gray.300' />
    </InputLeftElement>
    <Input type='tel' placeholder='Phone number' />
  </InputGroup> */
}
