"use client";
import React, { useEffect, useState } from "react";
import { GoClock, GoLocation } from "react-icons/go";
import { motion, AnimatePresence } from "framer-motion";

const DummyData = [
  {
    id: 1,
    userProfileImageURL: "https://randomuser.me/api/portraits/men/75.jpg",
    userName: "Isabella Valce",
    userDesignation: "Property Viewing",
    time: "15m",
    location: "New York, NY, USA",
    dateRange: {
      startDate: 2,
      endDate: 21,
    },
  },
  {
    id: 2,
    userProfileImageURL: "https://randomuser.me/api/portraits/women/65.jpg",
    userName: "Johnathan Bell",
    userDesignation: "House Inspection",
    time: "30m",
    location: "Los Angeles, CA, USA",
    dateRange: {
      startDate: 18,
      endDate: 22,
    },
  },
  {
    id: 3,
    userProfileImageURL: "https://randomuser.me/api/portraits/women/75.jpg",
    userName: "Emily Stone",
    userDesignation: "Apartment Tour",
    time: "45m",
    location: "Chicago, IL, USA",
    dateRange: {
      startDate: 3,
      endDate: 7,
    },
  },
  {
    id: 4,
    userProfileImageURL: "https://randomuser.me/api/portraits/men/85.jpg",
    userName: "Marcus Lee",
    userDesignation: "Commercial Visit",
    time: "1hr",
    location: "San Francisco, CA, USA",
    dateRange: {
      startDate: 25,
      endDate: 28,
    },
  },
];

function CalendarDEMO1() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentUser = DummyData[currentIndex];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % DummyData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-row border border-[#e1e2e3] rounded-[12px] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentUser.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col flex-[1_0_0px] items-start gap-[6px] max-w-[280px] p-[20px]"
        >
          {/* User Image */}
          <div className="w-[30px] h-[30px] rounded-full overflow-hidden">
            <img
              src={currentUser.userProfileImageURL}
              alt={currentUser.userName}
            />
          </div>

          {/* User Details */}
          <div>
            <span className="secondaryFont text-[#999999]">
              {currentUser.userName}
            </span>
            <h3 className="text-[18px] text-[#141414]">
              {currentUser.userDesignation}
            </h3>
            <p className="secondaryFont text-[#999999] text-[12px]">
              {currentUser.location}
            </p>
          </div>

          {/* Info Section */}
          <div className="flex flex-col justify-start items-start gap-2">
            <div className="flex flex-row items-center gap-2">
              <GoClock />
              <div className="flex bg-gray-200 p-1 rounded-[10px] gap-1">
                {["15m", "30m", "45m", "1hr"].map((time, idx) => (
                  <div
                    key={idx}
                    className={`w-[45px] text-center py-[3px] px-2 rounded-[8px] text-[14px] secondaryFont ${
                      currentUser.time === time ? "bg-white text-[#141414]" : ""
                    }`}
                  >
                    {time}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <GoLocation />
              <span className="secondaryFont text-[14px] text-[#242424]">
                Pine Realty Office
              </span>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Calendar Panel */}
      <div className="p-[20px] border-l border-[#e1e2e3]">
        <FadeCalendar
          key={currentUser.id}
          startDate={currentUser.dateRange.startDate}
          endDate={currentUser.dateRange.endDate}
        />
      </div>
    </div>
  );
}

const FadeCalendar = ({
  startDate,
  endDate,
}: {
  startDate: number;
  endDate: number;
}) => {
  const today = new Date();
  const currentMonth = today.getMonth();
  const year = today.getFullYear();

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const daysInMonth = new Date(year, currentMonth + 1, 0).getDate();
  const startDayOfWeek = new Date(year, currentMonth, 1).getDay();

  const calendarCells = [
    ...Array(startDayOfWeek).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];

  const isInRange = (day: number) =>
    startDate && endDate
      ? day >= startDate && day <= endDate
      : day === startDate;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="h-min"
    >
      <div className="flex flex-row items-end gap-1 mb-2">
        <h4 className="text-[16px] font-medium">{months[currentMonth]}</h4>
        <span className="text-[14px] text-gray-500">{year}</span>
      </div>

      <div className="grid grid-cols-7 gap-1 mb-2 text-[12px] text-center text-gray-500 font-semibold">
        {daysOfWeek.map((day) => (
          <div key={day}>{day}</div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1">
        {calendarCells.map((day, idx) => (
          <div
            key={idx}
            className={`w-[50px] h-[50px] flex items-center justify-center rounded text-[16px] secondaryFont ${
              day && isInRange(day)
                ? "bg-gray-300 text-black"
                : "bg-white text-black"
            } ${!day ? "invisible" : ""}`}
          >
            {day}
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default CalendarDEMO1;
