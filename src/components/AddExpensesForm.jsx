import { TrendingDown, Plus, TrendingUp, AlertCircle } from 'lucide-react'
import React, { useState } from 'react'

const AddExpensesForm = ({
  formData, 
  setFormData,
  editingId, 
  setEditingId, 
  expenses, 
  setExpenses, 
  showToast
  }) => {
  const [errors, setErrors] = useState({})
  return (
    <div className='bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white shadow-2xl'>
      <h2>
       <div className='text-2xl font-bold text-white mb-8 flex items-center'>
         <div className='p-2 bg-linear-to-r from-purple-500 to-pink-500 rounded-xl mr-3'>
            <Plus className="w-6 h-6 text-white" />
         </div>

         {/* conditional Rendering Text */}
         {
          editingId ? "Edit Entry" : "Add New Entry"
         }
       </div>
      </h2>

      <div className='space-y-6'>
        <div>
            <label className='block text-gray-300 text-sm font-semibold mb-3 uppercase tracking-wide'>
            Entry Type
            </label>
            <div className='flex  space-x-4'>
             <label className={`flex-1 flex  items-center justify-center p-4 rounded-2xl border-2 cursor-pointer transition-all ${
                formData.type === "expense"
                 ?  "border-red-500 bg-red-500/10" 
                 : "border-transparent hover:border-gray-600 hover:bg-gray-800/50"
               }`}>

             <input 
             type="radio" 
             name = "type" 
             className="sr-only" 
             value="expense" />
             <TrendingDown className='w-5 h-6 mr-2' />
             <span className='font-medium'>Expense</span>
             </label>
              <label className={`flex-1 flex  items-center justify-center p-4 rounded-2xl border-2 cursor-pointer transition-all ${
                formData.type === "income"
                ? "border-green-500 bg-green-500/10"
                : "border-transparent hover:border-gray-600 hover:bg-gray-800/50"
              } `}>

             <input type="radio" name = "type" className="sr-only" value="Income" />
             <TrendingUp className='w-5 h-6 mr-2' />
             <span className='font-medium'>Income</span>
             </label>
            </div>
           
        </div>
        <div>
            <label className='block text-gray-300 text-sm font-semibold mb-3 uppercase tracking-wide'>
            Description
            </label>
           <input type='text' 
           value={formData.description}
           placeholder='What is this for' 
           className={`w-full px-6 py-4 bg-gray-800/50 border-2 rounded-2xl text-white placeholder-gray-500 focus:ring-2 focus-purple-500 focus:border-purple-500 transition-all`}/>

          {/* conditional Rendering */}
           <p className='text-red-400 text-sm mt-2 flex items-center'>
            <AlertCircle className='w-4 h-4 mr-1'/>
            Error Message</p>
           
        </div>
        <div>
            <label className='block text-gray-300 text-sm font-semibold mb-3 uppercase tracking-wide'>
            Amount
            </label>
              <div className='relative'>
                <span className='absolute lef-6 top-1/2 transform -traslate-y-1/2 text-gray-400 text-lg'>$</span>

                <input
                 type='number'
                 step="0.01"
                 className={`w-full pl-12 pr-6 py-4 bg-gray-800/50 border-2 rounded-2xl text-white placeholder-gray-500 focus:ring-2 focus:ring-purple-500 focus: border-purple-500 transition-all `}
                 placeholder='0.00'
                />
              </div>

              {/* conditional rendering */}
               <p className='text-red-400 text-sm mt-2 flex items-center'>
            <AlertCircle className='w-4 h-4 mr-1'/>
            Error Message</p>                         
        </div>
        <div>
             <label className='block text-gray-300 text-sm font-semibold mb-3 uppercase tracking-wide'>
              Category
            </label>
            <select className={`w-full px-6 py-4 bg-gray-800/50 border-2 rounded-2xl text-white ring-0 focus:ring-purple-500 focus:border-purple-500 transition-all`}>
            <option className=''>Choose Category</option>
            <p className='text-red-400 text-sm mt-2 flex items-center'>
            <AlertCircle className='w-4 h-4 mr-1'/>
            Error Message</p> 
            </select>
        </div>

        <div>
             <label className='block text-gray-300 text-sm font-semibold mb-3 uppercase tracking-wide'>
              Date
            </label>
            <input type='date' className={`w-full px-6 py-4 bg-gray-800/50 border-2 rounded-2xl text-white focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all`} />

            {/* Conditional Rendering */}
             <p className='text-red-400 text-sm mt-2 flex items-center'>
            <AlertCircle className='w-4 h-4 mr-1'/>
            Error Message</p>
        </div>

        <div>
           <button type='button' className='flex-1 bg-linear-to-r from-purple-600 to-pink-600 text-white py-4 px-6 rounded-2xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105'>
            {/*  conditional rendering text */}
            Add Entry
           </button>

{/* conditional rendering */}
           <button 
           type='button' 
           className='px-6 py-4 border-2 border-gray-600 text-gray-300 rounded-2xl hover:bg-gray-800/50 hover:border-gray-500 transition-all duration-200'>
            {/*  conditional rendering text */}
            Cancel
           </button>
        </div>
      </div>
    </div>
  )
}

export default AddExpensesForm
