import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import {AiFillCaretRight} from "react-icons/ai";


const Orders = () => {
    const orders = useSelector((state) => state.data.orders);
    const dispatch = useDispatch();
    const detailOrder = useSelector((state) => state.functions.detailOrder);
    
    // const [addingProd, setAddingProd] = useState(true);
    const getStatusClassName = (status) => {
      switch (status) {
        case "new":
          return "border-[blue] bg-transparent text-[blue]";
        case "lose":
          return "border-[red] bg-transparent text-[red]";
        case "on process":
          return "border-[orange] bg-transparent text-[orange]";
        default:
          return "border-[green] bg-transparent text-[green]"
      }
    };
  return (
      <div>
        <div className="w-[90%] mx-auto mt-6 py-4">
          <div className={`w-full ${detailOrder ? '-z-10 opacity-20': 'z-10'}`}>
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

          <div className={`${detailOrder ? '-z-10 opacity-20': 'z-10'}`}>
            <div class="relative overflow-x-auto">
              <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" class="px-6 py-3">
                      Order ID
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Customer Name
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Ordered Date
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Amount
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Status
                    </th>
                    <th>

                    </th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((e, index) => {
                    return (
                      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th
                          scope="row"
                          class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          {e.id}
                        </th>
                        <td class="px-6 py-4">{e.customerName}</td>
                        <td class="px-6 py-4">{e.date}</td>
                        <td class="px-6 py-4">{e.amount}</td>
                        <td class="px-6 py-4 w-[200px] text-center">
                          <p
                            className={`border ${getStatusClassName(
                              e.status
                            )} border  py-2 rounded-md font-semibold w-[80%]`}
                          >
                            {e.status}
                          </p>
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

export default Orders