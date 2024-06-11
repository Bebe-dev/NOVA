import { Input, InputGroup, InputLeftElement } from "@chakra-ui/input";
import DashboardHeader from "../components/dashHeader";
import SideNav from "../components/sidenav";
import { CiSearch } from "react-icons/ci";
import { TbFilterSearch } from "react-icons/tb";
import { Grid, GridItem } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { Checkbox } from "@chakra-ui/checkbox";

const Dashboard = () => {
  const UserDetails = [
    {
      name: "Jacob Jones",
      id: "#GSW123",
      subject: "Payment Failure",
      type: "Support",
      status: "Open",
      agent: "Fahtymah Abdul",
    },
    {
      name: "Devon Lane",
      id: "#WDG345",
      subject: "Payment Inquiry",
      type: "Support",
      status: "Closed",
      agent: "Precious Ken",
    },
    {
      name: "Jacob Jones",
      id: "#GSW123",
      subject: "Payment Failure",
      type: "Support",
      status: "Open",
      agent: "Fahtymah Abdul",
    },
      {
        name: "Jacob Jones",
        id: "#GSW123",
        subject: "Payment Failure",
        type: "Support",
        status: "On hold",
        agent: "Fahtymah Abdul",
      },
      {
        name: "Devon Lane",
        id: "#WDG345",
        subject: "Payment Inquiry",
        type: "Support",
        status: "Resolved",
        agent: "Precious Ken",
      }

  ];


  return (
    <div>
      <div className="border-r-2 border-[c9ccd1] w-1/5 float-left mr-4">
        <SideNav />
      </div>
      <div>
        <DashboardHeader />
        <div className="mt-8 pl-4 flex justify-between items-center">
          <h3 className="font-semibold">All Tickets</h3>
          <div className="inline-block flex gap-4">
            <InputGroup>
              <InputLeftElement>
                <CiSearch />
              </InputLeftElement>
              <Input placeholder="Search for ticket" width="50" />
            </InputGroup>

            <InputGroup marginRight={10}>
              <InputLeftElement>
                <TbFilterSearch />
              </InputLeftElement>
              <Input placeholder="Filter" width="40" />
            </InputGroup>
          </div>
        </div>

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
            <GridItem
              bg="#eeeff0"
              h="10"
              w="100%"
              p="2"
              textAlign="center"
            >
              Requester
            </GridItem>
            <GridItem
              bg="#eeeff0"
              h="10"
              w="100%"
              p="2"
              textAlign="center"
            >
              Ticket ID
            </GridItem>
            <GridItem
              bg="#eeeff0"
              h="10"
              w="100%"
              p="2"
              textAlign="center"
            >
              Subject
            </GridItem>
            <GridItem
              bg="#eeeff0"
              h="10"
              w="100%"
              p="2"
              textAlign="center"
            >
              Type
            </GridItem>
            <GridItem
              bg="#eeeff0"
              h="10"
              w="100%"
              p="2"
              textAlign="center"
            >
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
            // border="1px solid #757b88"
          >
            {UserDetails.map((user) => {
              return (
                <>
                  <GridItem h="10" w="100%" borderBottom="1px solid #757b88" borderLeft="1px solid #757b88" display="flex" justifyContent="center" alignItems="center" gap="4">
                    <Checkbox size="md" />
                    {user.name}
                  </GridItem>
                  <GridItem h="10" w="100%" borderBottom="1px solid #757b88" display="flex" justifyContent="center" alignItems="center">{user.id}</GridItem>
                  <GridItem h="10" w="100%" borderBottom="1px solid #757b88" display="flex" justifyContent="center" alignItems="center">{user.subject}</GridItem>
                  <GridItem h="10" w="100%" borderBottom="1px solid #757b88" display="flex" justifyContent="center" alignItems="center" gap="4"><img src=".\public\images\Ellipse-icon.png"/>{user.type}</GridItem>
                  <GridItem h="10" w="100%" borderBottom="1px solid #757b88" display="flex" justifyContent="center" alignItems="center"><Button size="xs">{user.status}</Button></GridItem>
                  <GridItem h="10" w="100%" borderBottom="1px solid #757b88" borderRight="1px solid #757b88" display="flex" justifyContent="center" alignItems="center">{user.agent}</GridItem>
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
