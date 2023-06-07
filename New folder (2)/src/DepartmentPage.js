import axios from "axios";
import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";

const DepartmentPage = () => {
  const [dataEmp, setDataEmp] = useState([]);
  useEffect(() => {
    document.title = "Department Page";
    axios.get("http://localhost:8080/getDepartment").then((response) => {
      let i = 1;
      const data = response.data.map((data) => ({
        ...data,
        index: i++,
        date: new Date(data.hiredate).toLocaleDateString(),
      }));

      setDataEmp(data);
      console.log(data);
    });
  }, []);
  return (
    <>
      <Sidebar />
      <div className="p-4 sm:ml-64 dark:bg-gray-900 h-screen">
        <div className="py-5 bg-slate-100 px-7 dark:bg-gray-800 dark:text-white  text-3xl font-semibold">
          {document.title}
        </div>
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg pt-10">
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="pl-3 py-3">
                  #
                </th>
                <th scope="col" class="pr-3 py-3">
                  deptno
                </th>
                <th scope="col" class="px-6 py-3">
                  Job
                </th>
                <th scope="col" class="px-6 py-3">
                  Manager NO.
                </th>
              </tr>
            </thead>
            <tbody>
              {dataEmp.map((data) => (
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <th
                    scope="row"
                    class="pl-3 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {data.index}
                  </th>
                  <td class="pr-3 py-4">{data.deptno}</td>
                  <td class="px-6 py-4">{data.dname}</td>
                  <td class="px-6 py-4">{data.loc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default DepartmentPage;
