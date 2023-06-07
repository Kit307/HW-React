import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Profile = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    axios.get("http://localhost:8080/getTime").then((response) => {
      let d = new Date(response.data);
      const options = { year: "numeric", month: "long", day: "numeric" };
      const formattedDate = d.toLocaleDateString("th-TH", options);
      const formattedTime = d.toLocaleTimeString("th-TH", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
      setTime(`${formattedDate}, ${formattedTime}`);

      // get drak mode or light mode
    });
  }, []);

  return (
    <>
      <div>
        <div className="flex min-h-screen bg-slate-100 dark:bg-gray-700  items-center justify-center">
          <div className="min-h-1/2 bg-white shadow-xl dark:bg-gray-900  border dark:border-gray-900 rounded-2xl">
            <div className="mx-4 sm:mx-24 md:mx-34 lg:mx-56 mx-auto  flex items-center space-y-4 py-16 font-semibold dark:text-gray-500 flex-col">
              <h1 className="dark:text-white text-2xl">Welcome</h1>
              <h1 className="dark:text-white text-2xl">Name: kit kit</h1>
              <h1 className="dark:text-white text-2xl">{time}</h1>
              <Link
                to="/homepage"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
              >
                Go to Homepage
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
