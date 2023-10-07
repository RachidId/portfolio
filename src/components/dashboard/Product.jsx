import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import {MdOutlineCancel} from "react-icons/md";
import { toggleAdd } from "../../features/functionsSlice";

const Product = () => {
  const products = useSelector((state) => state.products.products);
  const addingProd = useSelector((state) => state.functions.functions.addingProd);
  const dispatch = useDispatch();
  useEffect(()=>{
    console.log(addingProd)
  }, [])
  const [data, setData] = useState(products);
  // const [addingProd, setAddingProd] = useState(true);
  const getStatusClassName = (status) => {
    switch (status) {
      case "live":
        return "border-[green] bg-transparent text-[green]";
      case "no-stock":
        return "border-[red] bg-transparent text-[red]";
      default:
        return "border-[orange] bg-transparent text-[orange]";
    }
  };

  return (
    <div>
      <div className="w-[90%] mx-auto mt-6 py-4">
        <div className={`w-full ${addingProd ? '-z-10 opacity-20': 'z-10'}`}>
          <div className="flex items-center justify-between mb-2 font-bold">
            <h2 className="ms-4">Products</h2>
            <h3 className="me-4">10/07/2023</h3>
          </div>
          <div>
            <form className="flex justify-end items-center">
              <input
                type="text"
                className="border w-[20%] py-2 rounded-md px-2"
                placeholder="Search Product"
              />
              <select className="ms-5 w-[20%] py-2 rounded-md px-2">
                <option value="">Filter By Category</option>
              </select>
              <button className="bg-main ms-5 flex items-center justify-evenly w-[20%] rounded-md py-2 text-[#fff]" onClick={()=>dispatch(toggleAdd)}>
                Add new product <FaPlus />
              </button>
            </form>
          </div>
        </div>

        <div className={`${addingProd ? '-z-10 opacity-20': 'z-10'}`}>
          <div class="relative overflow-x-auto">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" class="px-6 py-3">
                    Product ID
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Product Name
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Category
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Quantity
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Per Price
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {products.map((e, index) => {
                  return (
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <th
                        scope="row"
                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {e.id}
                      </th>
                      <td class="px-6 py-4">{e.name}</td>
                      <td class="px-6 py-4">{e.category}</td>
                      <td class="px-6 py-4">{e.quantity}</td>
                      <td class="px-6 py-4">{e.price}</td>
                      <td class="px-6 py-4 w-[200px] text-center">
                        <p
                          className={`border ${getStatusClassName(
                            e.status
                          )} border  py-2 rounded-md font-semibold w-[80%]`}
                        >
                          {e.status}
                        </p>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {addingProd && <div className="bg-[white] border absolute transform left-1/2 top-1/2 -translate-x-1/2 translate-y-[-50%] p-6 rounded-xl w-[50%]">
        <div className="flex items-center justify-between">
          <h1>Add product</h1>
          <button> <MdOutlineCancel /> </button>
        </div>
        <div className="flex items-center justify-between">
          <div className="grid grid-cols-1">
            <button className="border border-dashed">add</button>
            <input type="text" className="border rounded-md p-1 py-1 mb-3" placeholder="Quantity"/>
            <input type="text" className="border rounded-md p-1 py-1 mb-3" placeholder="Per Price"/>
            <div>
                <input type="checkbox" id="active"/>
                <label htmlFor="active">Active</label>
                <input type="checkbox" id="draft"/>
                <label htmlFor="draft">Draft</label>
            </div>
          </div>
          <div className="text-start">
            <input type="text" placeholder="Product Name" className="border rounded-md p-1 py-1 mb-3"/>
            <div className="flex items-center justify-around mb-3">
              <select name="" id="" className="border rounded-md p-1 py-1">
                <option value="" >Product Category</option>
              </select>
              <select name="" id="" className="border rounded-md p-1 py-1">
                <option value="">Sub Category</option>
              </select>
            </div>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Product Description"
              className="border rounded-md p-1 py-1 mb-3"
            ></textarea>
            <div>
              <button className="bg-main px-2 rounded-md py-2 me-20">Publish</button>
              <button className="px-2 rounded-md py-2 border">Cancel</button>
            </div>
          </div>
        </div>
      </div>}
    </div>
  );
};

export default Product;
