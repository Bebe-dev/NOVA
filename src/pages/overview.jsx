import SideNav from "../components/sidenav";
import DashboardHeader from "../components/dashHeader";
import { GoArrowUpRight } from "react-icons/go";
import { PiDotsThree } from "react-icons/pi";
import { CircularProgress, CircularProgressLabel } from "@chakra-ui/react";
import LineGraph from "../components/lineGraph";

const Overview = () => {
  return (
    <div>
      <div>
        <DashboardHeader />
      </div>
      <div className="border-r-2 border-[c9ccd1] w-1/5 float-left mr-4">
        <SideNav />
      </div>
      <div className="mt-10 ml-1/2">
        <h3 className="text-2xl font-semibold text-[#3a404b]">Overview</h3>
        <div className="flex gap-8">
          <p className="text-[#4b5260]">All data</p>
          <p className="text-[#007bff]">+ Add view</p>
        </div>
        {/* FOUR CARDS WITH CIRCULAR PROGRESS */}
        <div className="flex gap-6 mt-12">
          <div className="border border-[#c9ccd1] rounded-xl p-4">
            <PiDotsThree />
            <div className="flex gap-4 items-end">
              <div className="flex flex-col gap-4">
                <div>
                  <h3 className="font-semibold text-md">Number of issues</h3>
                  <p className="text-sm text-[#858d9d]">This month</p>
                </div>
                <div className="flex gap-4">
                  <h3>102</h3>
                  <div className=" text-[#007bff] flex gap-2 items-center">
                    <GoArrowUpRight /> +14% inc
                  </div>
                </div>
              </div>
              <div>
                <CircularProgress color="#007bff" value={74} size="60px">
                  <CircularProgressLabel>74%</CircularProgressLabel>
                </CircularProgress>
              </div>
            </div>
          </div>

          {/* BAR TWO */}
          <div className="border border-[#c9ccd1] rounded-xl p-4">
            <PiDotsThree />
            <div className="flex gap-4 items-end">
              <div className="flex flex-col gap-4">
                <div>
                  <h3 className="font-semibold text-md">Issues Solved</h3>
                  <p className="text-sm text-[#858d9d]">This month</p>
                </div>
                <div className="flex gap-4">
                  <h3>72</h3>
                  <div className="text-[#00b087] flex gap-2 items-center">
                    <GoArrowUpRight /> +10% inc
                  </div>
                </div>
              </div>
              <div>
                <CircularProgress color="#00b087" value={74} size="60px">
                  <CircularProgressLabel>74%</CircularProgressLabel>
                </CircularProgress>
              </div>
            </div>
          </div>

          {/* BAR THREE */}
          <div className="border border-[#c9ccd1] rounded-xl p-4">
            <PiDotsThree />
            <div className="flex gap-4 items-end">
              <div className="flex flex-col gap-4">
                <div>
                  <h3 className="font-semibold text-md">Avg. Resolution Time</h3>
                  <p className="text-sm text-[#858d9d]">In the last 7 days</p>
                </div>
                <div className="flex gap-4">
                  <h3>72h 14m</h3>
                  <div className=" text-[#f64b4b] flex gap-2 items-center">
                    <GoArrowUpRight /> +14% inc
                  </div>
                </div>
              </div>
              {/* <div>
                <CircularProgress value={74} size="60px">
                  <CircularProgressLabel>74%</CircularProgressLabel>
                </CircularProgress>
              </div> */}
            </div>
          </div>

          {/* BAR FOUR */}
          <div className="border border-[#c9ccd1] rounded-xl p-4">
            <PiDotsThree />
            <div className="flex gap-4 items-end">
              <div className="flex flex-col gap-4">
                <div>
                  <h3 className="font-semibold text-md">Client Satisfaction</h3>
                  <p className="text-sm text-[#858d9d]">In the last 7 days</p>
                </div>
                <div className="flex gap-4">
                  <h3>14</h3>
                  <div className="text-[#9747ff] flex gap-2 items-center">
                    <GoArrowUpRight /> +20% inc
                  </div>
                </div>
              </div>
              <div>
                <CircularProgress color="#9747ff" value={84} size="60px">
                  <CircularProgressLabel>84%</CircularProgressLabel>
                </CircularProgress>
              </div>
            </div>
          </div>
          {/* END OF BAR FOUR */}
        </div>

        <div className="flex justify-start mt-8">
          <LineGraph />
        </div>
      </div>
    </div>
  );
};

export default Overview;
