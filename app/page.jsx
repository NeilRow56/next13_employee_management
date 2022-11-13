import { BiUserPlus, BiX, BiCheck } from "react-icons/bi";
import Form from "./Form";
import Table from "./Table";

export default function Home() {
  return (
    <div >
      <main className="py-5">
        <h1 className=" text-xl md:text-5xl font-bold text-red-600 text-center py-10">
          Employee Management
        </h1>
      <div className="container mx-auto flex justify-between py-5 border-b">
        <div className="left flex-gap-3">
          <button className="flex bg-indigo-500 text-white px-4 py-2 border rounded-md hover:bg-gray-50 hover:text-gray-800 hover:border-indigo-500">
            Add Employee
            <span className='px-2'><BiUserPlus size={23}></BiUserPlus></span>
          </button>
        </div>       

      </div>
       {/* Collapsable Form */}
       <div className="container mx-auto">
          <Form />
       </div>
      
        

        {/* Table */}
        <div className="container mx-auto">
               <Table />
        </div>
        
      </main>
 
     
    </div>
  )
}
