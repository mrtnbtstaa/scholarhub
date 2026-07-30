"use client";

import Card from "@/components/shared/Card/Card";
import LineChart from "@/components/shared/LineChart/LineChart";
import { HiDocumentCheck } from "react-icons/hi2";
import { IoMdCalendar, IoMdEye } from "react-icons/io";
import { MdBookmark } from "react-icons/md";

const data = {
  labels: ["1", "2", "3", "4", "5", "6", "7"],
  datasets: [
    {
      data: [12, 14, 13, 17, 15, 19, 22],
      borderColor: "#22c55e", // Green line color
      borderWidth: 2,
      tension: 0.4, // Smooth curved line
      pointRadius: 0, // Hides data points
      fill: true,
    },
  ],
};

const ScholarshipCards = () => {
  return (
    <div className="mt-4 grid lg:grid-cols-4 md:grid-cols-2 grid-rows-1 gap-4 overflow-hidden">
      <Card className="p-4">
        <div className="flex items-center justify-between">
          <div className="bg-btn-primary p-2 rounded-lg">
            <IoMdEye className="text-2xl text-white" />
          </div>
          <span className="text-green-500 text-xs tracking-wider">+12%</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-semibold tracking-wider">8,426</span>
          <LineChart width="80px" height="40px" data={data} />
        </div>
        <h4 className="text-md tracking-wider">Student Views</h4>
        <p className="text-sm text-gray-600 tracking-wider">
          Total visibility metric
        </p>
      </Card>
      <Card className="p-4">
        <div className="flex items-center justify-between">
          <div className="bg-btn-primary p-2 rounded-lg">
            <MdBookmark className="text-2xl text-white" />
          </div>
          <span className="text-green-500 text-xs tracking-wider">+12%</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-semibold tracking-wider">8,426</span>
          <LineChart width="80px" height="40px" data={data} />
        </div>
        <h4 className="text-md tracking-wider">Saved</h4>
        <p className="text-sm text-gray-600 tracking-wider">
          Saved bookmarks for application shortlisting
        </p>
      </Card>
      <Card className="p-4">
        <div className="flex flex-col items-start gap-2">
          <div className="bg-btn-primary p-2 rounded-lg">
            <HiDocumentCheck className="text-2xl text-white" />
          </div>
          <span className="text-2xl font-semibold tracking-wider">8,426</span>
        </div>
        <h4 className="text-md tracking-wider">Apps Tracked</h4>
        <p className="text-sm text-gray-600 tracking-wider">
          Totat applications currently being monitored
        </p>
      </Card>
      <Card className="p-4">
        <div className="flex flex-col items-start justify-between">
          <div className="bg-btn-primary p-2 rounded-lg">
            <IoMdCalendar className="text-2xl text-white" />
          </div>
          <div className="flex items-center">
            <div className="text-lg tracking-wider font-medium text-gray-800">
              00:
            </div>
            <div className="text-lg tracking-wider font-medium text-gray-800">
              15:
            </div>
            <div className="text-lg tracking-wider font-medium text-gray-800">
              30
            </div>
          </div>
        </div>
        <span className="text-2xl font-semibold tracking-wider">
          Sept 30, 2026
        </span>
        <p className="text-sm text-gray-600 tracking-wider">
          5 days remainining
        </p>
      </Card>
    </div>
  );
};

export default ScholarshipCards;
