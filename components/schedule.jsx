import React from "react";

const ScheEvent = ({ date, time, name }) => {
  return (
    <div className="py-8 flex flex-col flex-wrap md:flex-nowrap md:flex-row lg:items-center">
      <div className="md:w-64 md:mb-0 mb-1 flex-shrink-0 flex flex-col">
        <span className="font-medium title-font text-white lg:text-lg">
          {date}
        </span>
        <span className="mt-0 text-gray-500 lg:text-base">{time}</span>
      </div>
      <div className="md:flex-grow">
        <h2 className="text-lg lg:text-xl font-medium text-white title-font mb-2">
          {name}
        </h2>
      </div>
    </div>
  );
};

const allEvents = [
  {
    date: "30th Sept.",
    time: "10 am",
    name: "Inauguration",
  },
  {
    date: "30th Sept.",
    time: "11 am to 2 pm",
    name: "Get-Set-Code",
  },
  {
    date: "30th Sept.",
    time: "11 am to 4 pm",
    name: "ReactJS HeadStart by building a Portfolio Website",
  },
  {
    date: "01st Oct.",
    time: "10 am",
    name: "S.M.A.R.T KIDS",
  },
  {
    date: "01st Oct.",
    time: "12 pm to 1:30 pm",
    name: "Graphix",
  },
  {
    date: "01st Oct.",
    time: "2 pm",
    name: "Be-the-One",
  },
  {
    date: "01st Oct.",
    time: "4 pm",
    name: "Closing Ceremony",
  },
];

const Schedule = () => {
  return (
    <section
      id="schedule"
      className="text-gray-400 bg-gray-900 body-font overflow-hidden"
    >
      <div className="container px-8 lg:px-20 py-24 mx-auto lg:w-2/3">
        <h2 className="text-indigo-400 text-3xl lg:text-4xl mb-8 font-semibold">
          Schedule
        </h2>
        <div className="-my-8 divide-y-2 divide-gray-800">
          {allEvents &&
            allEvents.map((event) => <ScheEvent key={event.name} {...event} />)}
        </div>
      </div>
    </section>
  );
};

export default Schedule;
