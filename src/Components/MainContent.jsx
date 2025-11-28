import React from 'react'
// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer } from "recharts";


export const MainContent = () => {
    const data = [
  { department: "HR", count: 10 },
  { department: "Development", count: 25 },
  { department: "Marketing", count: 8 },
  { department: "Sales", count: 14 }
];
const COLORS = ["#6366F1", "#22C55E", "#F97316", "#E11D48"];
  return (
    <>   
     <div className='bg-white rounded-md  grid  gird-col-1 md:grid-cols-4 gap-5 px-3 py-8'>
        <div className='rounded-md bg-white flex flex-col border-2 border-purple-500  justify-center px-5 py-3 lg:py-0 gap-5'>
            <h1 className=' text-2xl  lg:text-5xl font-medium '>150</h1>
            <h1 className=' text-2xl md:text-xl lg:text-3xl font-medium '>Toatal Employee</h1>
        </div>

        <div className='rounded-md bg-white flex flex-col border-2 border-purple-500  justify-center px-5 py-3 lg:py-0 gap-5'>
            <h1 className=' text-2xl  lg:text-5xl font-medium '>130</h1>
            <h1 className=' text-2xl md:text-xl lg:text-3xl font-medium '>Present Today</h1>
        </div>

        <div className='rounded-md bg-white flex flex-col border-2 border-purple-500  justify-center px-5 py-3 lg:py-0 gap-5'>
            <h1 className=' text-2xl  lg:text-5xl font-medium '>20</h1>
            <h1 className=' text-2xl md:text-xl lg:text-3xl font-medium '>Absent Today</h1>
        </div>

       <div className='rounded-md bg-white flex flex-col border-2 border-purple-500  justify-center px-5 py-3 lg:py-0 gap-5'>
            <h1 className=' text-2xl  lg:text-5xl font-medium '>150</h1>
            <h1 className=' text-2xl md:text-xl lg:text-3xl font-medium '>Upcoming birthday</h1>
        </div>

     </div>
     <div className="bottom row-span-2 flex flex-col md:flex-row ">
     <div className='bg-red-400 w-[100%] md:w-[50%] flex flex-col justify-center px-8 gap-5'>
        <h1 className='text-3xl font-semibold'>Department wise Chart</h1>
          <div className="w-full h-80 md:h-[400px]">
  <ResponsiveContainer width="100%" height="100%">
    <PieChart>
      <Pie
        dataKey="count"
        data={data}
        nameKey="department"
        cx="50%"
        cy="50%"
        outerRadius="80%"   // responsive
        label
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index]} />
        ))}
      </Pie>

      <Tooltip />
    </PieChart>
  </ResponsiveContainer>
</div>

        </div>
        
       <div class='bg-red-600 w-full md:w-1/2 flex flex-col justify-start py-8 px-6 md:px-10 gap-10'>
  
  <h1 class='text-2xl md:text-3xl font-semibold text-white'>
    Recent Added Employees
  </h1>

  {/* <!-- Responsive Table Wrapper --> */}
  <div class="w-full overflow-x-auto rounded-lg ">
    <table class="min-w-max w-full border-collapse text-center">

      <thead>
        <tr class="border-b border-gray-300 ">
          <th class="p-4 whitespace-nowrap">Name</th>
          <th class="p-4 whitespace-nowrap">Department</th>
          <th class="p-4 whitespace-nowrap">Position</th>
          <th class="p-4 whitespace-nowrap">Date</th>
        </tr>
      </thead>

      <tbody>

        <tr class="border-b border-gray-300">
          <td class="p-4 whitespace-nowrap">1</td>
          <td class="p-4 whitespace-nowrap">Huzaifa</td>
          <td class="p-4 whitespace-nowrap">Developer</td>
          <td class="p-4 whitespace-nowrap">Active</td>
        </tr>

        <tr class="border-b border-gray-300">
          <td class="p-4 whitespace-nowrap">2</td>
          <td class="p-4 whitespace-nowrap">Dipesh</td>
          <td class="p-4 whitespace-nowrap">Designer</td>
          <td class="p-4 whitespace-nowrap">Active</td>
        </tr>

        <tr class="border-b">
          <td class="p-4 whitespace-nowrap">3</td>
          <td class="p-4 whitespace-nowrap">Rahul</td>
          <td class="p-4 whitespace-nowrap">Tester</td>
          <td class="p-4 whitespace-nowrap">Active</td>
        </tr>

      </tbody>
    </table>
  </div>

</div>

        
     </div>
    </>
  )
}
