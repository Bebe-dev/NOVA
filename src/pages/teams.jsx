import {
  Button,
  Stack,
  Input,
  InputGroup,
  InputLeftElement,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import DashboardHeader from "../components/dashHeader";
import SideNav from "../components/sidenav";
import { CiSearch } from "react-icons/ci";
import newAgents from "../utils/data/newagents.json";
import { CgProfile } from "react-icons/cg";

const Teams = () => {
  return (
    <div>
      <div>
        <DashboardHeader />
      </div>
      <div className="border-r-2 border-[c9ccd1] w-1/5 float-left mr-4">
        <SideNav />
      </div>

      <div className="flex flex-col gap-6 m-4">
        <h3 className="text-2xl font-semibold text-[#3a404b]">Team</h3>
        <Button width="10%" color="#007bff" size="sm" variant="outline">
          + Add member
        </Button>
      </div>

      <Stack
        direction="row"
        border="1px solid #eeeff0"
        p="3"
        borderRadius="md"
        w="70%"
      >
        <InputGroup display="flex">
          <InputLeftElement>
            <CgProfile />
          </InputLeftElement>
          <Input variant="unstyled" placeholder="Enter name" />
        </InputGroup>
        <Input variant="unstyled" placeholder="Enter email" />
        <Input variant="unstyled" placeholder="Enter role" />
        <Input variant="unstyled" placeholder="Company ID" />
      </Stack>

      <div className="inline-block mt-6 w-3/5">
        <InputGroup>
          <InputLeftElement>
            <CiSearch />
          </InputLeftElement>
          <Input border="1px solid #c9ccd1" placeholder="Search for ticket" />
        </InputGroup>
      </div>

      <div>
        <Grid
          templateColumns="repeat(5, 1fr)"
          textColor="#757B88"
          m="6"
          mb="0"
          rounded="lg"
          boxShadow="lg"
          className="divide-x-2 divide-[#757b88]"
        >
          <GridItem bg="#eeeff0" h="10" w="100%" p="2" textAlign="center">
            Name
          </GridItem>
          <GridItem bg="#eeeff0" h="10" w="100%" p="2" textAlign="center">
            Email
          </GridItem>
          <GridItem bg="#eeeff0" h="10" w="100%" p="2" textAlign="center">
            Role
          </GridItem>
          <GridItem bg="#eeeff0" h="10" w="100%" p="2" textAlign="center">
            ID
          </GridItem>
          <GridItem bg="#eeeff0" h="10" w="100%" p="2" textAlign="center">
            Status
          </GridItem>
        </Grid>

        <Grid templateColumns="repeat(5, 1fr)" textColor="#757b88" m="6">
          {newAgents.agents.map((agent) => {
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
                >
                  <img src={agent.src} />
                  {agent.name}
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
                  {agent.email}
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
                  {agent.role}
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
                  {agent.id}
                </GridItem>

                <GridItem
                  h="10"
                  w="100%"
                  borderBottom="1px solid #eeeff0"
                  borderRight="1px solid #eeeff0"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  gap="4"
                >
                  <button
                    className={` p-[1] px-2 rounded-md ${
                      agent.status == "ONLINE"
                        ? "bg-[#00B08766] text-[#00B08766]"
                        : "bg-[#eeeff0]"
                    }`}
                  >
                    {agent.status}
                  </button>
                  {/* <Button size="sm" colorScheme="green">{agent.status}</Button> */}
                </GridItem>
              </>
            );
          })}
        </Grid>
      </div>
    </div>
  );
};

export default Teams;
