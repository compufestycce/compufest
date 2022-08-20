import React from "react";
import EventCards from "./eventCards";
import events from "../data/eventsData";

const Events = () => {
  return (
    <section>
      <div>
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-3xl font-medium title-font mb-4 mt-5 text-white font-head">
            COMPUFEST 2k22
          </h1>
          <p className="px-4 lg:w-2/5 mx-auto leading-relaxed text-base text-center">
            <span className="block text-indigo-400 text-xl mb-4 font-semibold">
              Celebrating 26 years of excellence!
            </span>
            A National level Technical Symposium of the Dept. of Computer
            Technology, YCCE Nagpur. Many workshops are organized in which
            students learn about new technologies and then take part in a
            competition that follows.
          </p>
        </div>
      </div>
      <div
        className="text-gray-400 bg-gray-900 body-font overflow-hidden"
        id="events"
      >
        {events
          ? events.map((event) => <EventCards key={event.title} {...event} />)
          : null}
      </div>
    </section>
  );
};

export default Events;
