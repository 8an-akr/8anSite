import React, { useState, useEffect } from "react";
import "./Calendar.css";

function Calendar() {
  const [date, setDate] = useState(null);
  const [days, setDays] = useState(null);

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

  useEffect(() => {
    console.log(date);
  }, [date]);

  useEffect(() => {
    setDate(new Date());
  }, []);

  useEffect(() => {
    //     const month = Date.getMonth();

    //     const monthDays = document.querySelector(".days");

    const lastDay = new Date(
      date?.getFullYear(),
      date?.getMonth() + 1,
      0
    ).getDate();

    const prevLastDay = new Date(
      date?.getFullYear(),
      date?.getMonth(),
      0
    ).getDate();

    const firstDayIndex = date?.getDay();

    const lastDayIndex = new Date(
      date?.getFullYear(),
      date?.getMonth() + 1,
      0
    ).getDay();

    const nextDays = 7 - lastDayIndex - 1;

    console.log(lastDayIndex);

    let days = "";
    for (let x = firstDayIndex; x > 0; x--) {
      days += `<div className="prev-date">${prevLastDay - x + 1}</div>`;
    }

    //     for (let i = 1; i <= lastDay; i++) {
    //       if (
    //         i === new Date().getDate() &&
    //         date.getMonth() === new Date().getMonth()
    //       ) {
    //         days += `<div className="today">${i}</div>`;
    //       } else {
    //         days += `<div>${i}</div>`;
    //       }
    //     }

    //     for (let j = 1; j <= nextDays; j++) {
    //       days += `<div className="next-date">${j}</div>`;
    //       monthDays.innerHTML = days;
    //     }
    //   });

    //   document.querySelector(".prev").addEventListener("click", () => {
    //     date.setMonth(date.getMonth() - 1);
    //     renderCalnendar();
    //   });

    //   document.querySelector(".next").addEventListener("click", () => {
    //     date.setMonth(date.getMonth() + 1);
    //     renderCalnendar();
  }, [date]);
  return (
    <div className="calendar">
      <div className="month">
        <i
          className="fas fa-angle-left"
          onClick={() => {
            date.setMonth(date.getMonth() - 1);
          }}
        ></i>
        <div className="date">
          <h1>{months[date?.getMonth()]}</h1>
          <p>{new Date().toDateString()}</p>
        </div>
        <i
          className="fas fa-angle-right"
          onClick={() => {
            date?.setMonth(date?.getMonth() + 1);
          }}
        ></i>
      </div>
      <div className="weekdays">
        <div>Sun</div>
        <div>Mon</div>
        <div>Tue</div>
        <div>Wed</div>
        <div>Thu</div>
        <div>Fri</div>
        <div>Sat</div>
      </div>
      <div className="days"></div>
    </div>
  );
}

export default Calendar;
