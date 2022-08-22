import React from "react";
import EventCards from "./eventCards";
import {eventsNational,eventsInterational} from "../data/eventsData";

const Events = () => {
  return (
    <section>
      <div>
        <div className="flex flex-col text-center w-full mb-20 ">
          {/* <h1 className="sm:text-3xl text-3xl font-medium title-font mb-4 mt-5 text-white font-head">
            COMPUFEST 2k22
          </h1> */}
          <p className="px-4 lg:w-2/5 mx-auto text-gray-600 leading-relaxed text-base text-center z-50">
            <span className="block text-indigo-500 text-xl mb-4 font-semibold z-50">
              Celebrating 27 years of excellence!
            </span>
            An International level Technical Symposium of the Dept. of Computer
            Technology, YCCE Nagpur. Many workshops are organized in which
            students learn about new technologies and then take part in a
            competition that follows.
          </p>
        </div>
      </div>
      <p className="pt-4 text-3xl mx-auto text-gray-700 text-center z-50 font-semibold">National Events</p>
      <div
        className="text-gray-900 body-font overflow-hidden"
        id="events"
        style={{backgroundColor: "#c9c9c9"}}
      >
        {eventsNational
          ? eventsNational.map((event) => <EventCards key={event.title} {...event} />)
          : null}
      </div>
      <p className="pt-4 text-3xl mx-auto text-gray-700 text-center z-50 font-semibold">International Events</p>
      <div
        className="text-gray-900 body-font overflow-hidden"
        id="events"
        style={{backgroundColor: "#c9c9c9"}}
      >
        {eventsInterational
          ? eventsInterational.map((event) => <EventCards key={event.title} {...event} />)
          : null}
      </div>
    </section>
  );
};

export default Events;