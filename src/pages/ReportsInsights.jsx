import React from "react";
import profile1 from "../images/image_search_1608801931558.jpg";
import { BiChevronDown } from "react-icons/bi";
import PieChart from "../components/PieChart";

const ReportsInsights = () => {
  const firstHalfInfo = [
    {
      id: 1,
      color: "bg-HomeReportColor_1",
      value: "DUNNO",
    },
    {
      id: 2,
      color: "bg-HomeReportColor_2",
      value: "I'm Boring",
    },
    {
      id: 3,
      color: "bg-HomeReportColor_3",
      value: "Money",
    },
    {
      id: 4,
      color: "bg-HomeReportColor_4",
      value: "Fun",
    },
  ];

  const dashboredTH = ["Employee", "Last login", "Department", "Status"];

  const dashboredTD = [
    {
      id: 1,
      employee: {
        img: profile1,
        fullName: "Logan Henderson",
        email: "Logan@gmail.com",
      },
      lastLogin: { date: "September 20, 2019", dateFromNow: "2 days ago" },
      department: "Acounting",
      status: "Active",
    },
    {
      id: 2,
      employee: {
        img: profile1,
        fullName: "Logan Henderson",
        email: "Logan@gmail.com",
      },
      lastLogin: { date: "September 20, 2019", dateFromNow: "2 days ago" },
      department: "Acounting",
      status: "Inactive",
    },
    {
      id: 3,
      employee: {
        img: profile1,
        fullName: "Logan Henderson",
        email: "Logan@gmail.com",
      },
      lastLogin: { date: "September 20, 2019", dateFromNow: "2 days ago" },
      department: "Acounting",
      status: "Active",
    },
    {
      id: 4,
      employee: {
        img: profile1,
        fullName: "Logan Henderson",
        email: "Logan@gmail.com",
      },
      lastLogin: { date: "September 20, 2019", dateFromNow: "2 days ago" },
      department: "Acounting",
      status: "Active",
    },
    {
      id: 5,
      employee: {
        img: profile1,
        fullName: "Logan Henderson",
        email: "Logan@gmail.com",
      },
      lastLogin: { date: "September 20, 2019", dateFromNow: "2 days ago" },
      department: "Acounting",
      status: "Active",
    },
    {
      id: 6,
      employee: {
        img: profile1,
        fullName: "Logan Henderson",
        email: "Logan@gmail.com",
      },
      lastLogin: { date: "September 20, 2019", dateFromNow: "2 days ago" },
      department: "Acounting",
      status: "Active",
    },
  ];

  return (
    <div className="mt-6">
      <h1 className="mb-6 pl-6 text-PathColor font-medium">Home</h1>
      <div className="grid grid-cols-HomeGrid gap-7 col-span-1 TabletDashBoard:grid-cols-TabletHomeGrid  max-h-[70vh]">
        <div className="rounded-lg shadow-GridShadow p-4">
          <h1>Why do you create a startup?</h1>
          <p className="text-sm text-PathColor">Trends</p>
          <PieChart />
          <div className="flex items-center gap-4">
            {firstHalfInfo.map((item) => (
              <div key={item.id} className="flex flex-col items-start gap-2">
                <div className={`${item.color} w-4 h-4 rounded-full`}></div>
                <p>{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-lg p-4 shadow-GridShadow max-h-[70vh] pb-10">
          <h1 className="w-full text-xl text-GridTableTitle bg-inherit ">
            Employee
          </h1>
          <div className="overflow-y-auto">
            <table className="w-full h-full border rounded-xl text-sm ">
              <thead className="">
                <tr className="">
                  {dashboredTH.map((item, i) => (
                    <th
                      key={i}
                      className="text-GridTableHeader text-sm font-semibold text-left p-4"
                    >
                      {item}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="">
                {dashboredTD.map((item) => (
                  <tr key={item.id} className="p-4">
                    <td className="flex items-center p-4 justify-start gap-2">
                      <figure className="w-6 h-6 rounded-full border">
                        <img
                          src={item.employee.img}
                          alt="profilePic"
                          className="w-full h-full"
                        />
                      </figure>
                      <div>
                        <p className="font-semibold">
                          {item.employee.fullName}
                        </p>
                        <p className=" text-GridTableHeader">
                          {item.employee.email}
                        </p>
                      </div>
                    </td>
                    <td className="p-4">
                      <p>{item.lastLogin.date}</p>
                      <p className="text-GridTableHeader">
                        {item.lastLogin.dateFromNow}
                      </p>
                    </td>
                    <td className="p-4">{item.department}</td>
                    <td
                      className={`p-4 font-semibold flex items-center justify-between`}
                    >
                      <p
                        className={`${
                          item.status === "Active"
                            ? "text-ActiveGreen"
                            : "text-ActiveRed"
                        } `}
                      >
                        {item.status}
                      </p>
                      <p>
                        <BiChevronDown size={24} className={`text-gray-400`} />
                      </p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportsInsights;
