import React from 'react'
import { LiaFileImportSolid } from "react-icons/lia";
import { LuSendHorizonal } from "react-icons/lu";
import { MdOutlinePrint } from "react-icons/md";
import { IoMdRefresh } from "react-icons/io";
import { RiExpandUpDownFill } from "react-icons/ri";
import { MdFilterListAlt } from "react-icons/md";
import { CiSearch } from "react-icons/ci";

import { SingleOrderJson } from '../Constants/SingleOrderJson';

const OrdersHistory = () => {
  return (
    <div style={{height:'400px'}} className='bg-light py-3 px-2   '>
       <div className='d-flex justify-content-between'>

    <div>

    <button style={{border:'1.5px solid ',marginRight:'15px'}} className=' border-secondary px-4 bg-transparent'>
        <span><LiaFileImportSolid/> Import</span>
    </button>
    <button disabled style={{border:'1.5px solid',marginRight:'15px'}} className='mr-3 border-secondary px-4 bg-transparent'>
        <span><LuSendHorizonal/> Accept</span>
    </button>
    <button disabled style={{border:'1.5px solid',marginRight:'15px'}} className='border-secondary px-4 bg-transparent'>
        <span><MdOutlinePrint/> Print</span>
    </button>
    </div>
    <button className='btn btn-primary'>
        <span><IoMdRefresh/></span>
<span className='px-1'>Refresh</span>
    </button>
</div>
<table className="table table-striped table-bordered">
      <thead>
        <tr>
          <th className='-primary'></th>
          <th>  <input className="form-check-input" type="checkbox" value="" id="checkbox1"/></th>
          <th>Channel</th>
          <th><span><RiExpandUpDownFill/></span> <span><MdFilterListAlt/></span> Order</th>
          <th><span><RiExpandUpDownFill/></span> <span><CiSearch/></span> Order Date</th>
          <th><span><RiExpandUpDownFill/></span> <span><CiSearch/></span> City</th>
          <th> <span><RiExpandUpDownFill/></span> Customer Name</th>
          <th> <span><CiSearch/></span> Order Value</th>
          <th> <span><RiExpandUpDownFill/></span> Status</th>

        </tr>
      </thead>
      <tbody>
        {SingleOrderJson?.map((item)=>{
            return(
                <tr key={item.id}>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>{item.orderNo}</td>
                    <td>{item.orderDate}</td>
                    <td>{item.city}</td>
                    <td>{item.customerName}</td>
                    <td>{item.orderValue}</td>
                    <td>{item.status}</td>
                </tr>
            )
        })}
      
      </tbody>
    </table>
    </div>
  )
}

export default OrdersHistory