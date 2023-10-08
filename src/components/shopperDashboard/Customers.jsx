import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import {AiFillCaretRight} from "react-icons/ai";

const Customers = () => {
  const customers = useSelector((state) => state.data.customers);
    const dispatch = useDispatch();
    const totalEarning = useSelector((state) => state.functions.totalEarning);
  return (
    <div>
      <div className="w-[90%] mx-auto mt-6 py-4">
          <div className={`w-full ${totalEarning ? '-z-10 opacity-20': 'z-10'}`}>
            <div className="flex items-center justify-between mb-2 font-bold">
              <h2 className="ms-4">Products</h2>
              <h3 className="me-4">10/07/2023</h3>
            </div>
            <div>
              <div className="flex justify-end items-center">
                <input
                  type="text"
                  className="border w-[20%] py-2 rounded-md px-2"
                  placeholder="Search Customer"
                />
                <select className="ms-5 w-[20%] py-2 rounded-md px-2 border">
                  <option value="">Filter By Category</option>
                </select>
              </div>
            </div>
          </div>

          <div className={`${totalEarning ? '-z-10 opacity-20': 'z-10'}`}>
            <div class="relative overflow-x-auto">
              <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" class="px-6 py-3">
                      Customer NAme
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Customer Email
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Order Count
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Successful Deliveries
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Total Incomes 
                    </th>
                    <th>

                    </th>
                  </tr>
                </thead>
                <tbody>
                  {customers.map((e, index) => {
                    return (
                      <tr class="bg-white border-b text-start dark:bg-gray-800 dark:border-gray-700">
                        <th
                          scope="row"
                          class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          {e.id}
                        </th>
                        <td class="px-6 py-4">{e.customerName}</td>
                        <td class="px-6 py-4">{e.customerEmail}</td>
                        <td class="px-6 py-4">{e.orderCount}</td>
                        <td class="px-6 py-4">
                          {e.successfullDeliveries}
                        </td>
                        <td class="px-6 py-4">
                          {e.totalIncome}
                        </td>
                        <td>
                              <AiFillCaretRight />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Customers