import React, { useEffect, useState } from 'react'

import Toast from './components/Toast'
import Header from './components/Header'
import SummaryCard from './components/SummaryCard'
import AddExpensesForm from './components/AddExpensesForm'
import FilterTab from './components/FilterTab'
import ExpensesList from './components/ExpensesList'
import { Type } from 'lucide-react'

const App = () => {
  const [formData, setFormData] = useState({
  description: "",
  amount: "",
  category: "",
  date: "",
  type: "income",
});
  const [editingId, setEditingId] = useState(null); 
  const [expenses,setExpenses] = useState([]); 
  const [filter,setFilter] = useState("all"); 
  const [toast,setToasts] = useState([]);



useEffect(()=>{
  const savedExpenses = JSON.parse(localStorage.getItem("expenses")); 
  if(savedExpenses){
    setExpenses(savedExpenses);
  }
},[])

useEffect(()=>{
   if(expenses.length > 0 ){
    localStorage.setItem("expenses", JSON.stringify(expenses))
   }
},[expenses]);


// toast notification logic
  const showToast = (message, type="success")=>{
    const id = Date.now(); 
    const toast = {id, message, type}; 
    setToasts((prev)=>[...prev,toast])

    setTimeout(()=>{
      setToasts((prev) => prev.filter((t) => t.id !== id))
    },4000)
  }

  const RemoveToast = (id) =>{
    setToasts((prev)=>prev.filter((t) => t.id !== id));
  };

  //Calculate total income: 
const totalIncome = expenses
  .filter((exp) => exp.type === "income")
  .reduce((acc, exp) => acc + exp.amount, 0);

  //Total Expenses: 
  const totalExpenses = expenses
  .filter((exp) => exp.type === "expense")
  .reduce((acc,exp) => acc+ exp.amount, 0); 

  const balance = totalIncome - totalExpenses;

  // filter expenses
  const filteredExpenses = expenses.filter((exp)=> {
    if(filter === "all") return true; 
    return exp.type === filter;
  }); 

  const handleEdit = (expense) => {
    setFormData({
          description: expense.description,
    amount: expense.amount.toString(),
    category: expense.category,
    date: expense.date,
    type: expense.type, 
    }); 
    setEditingId(expense.id); 
    showToast("Entry Loaded for editing", "info");
  }; 
  const handleDelete = (id) => {
    const expeseToDelete = expenses.find((exp)=>exp.id === id); 
    setExpenses(expenses.filter((exp)=>exp.id != id));
    showToast(`${expeseToDelete.type === "income" ? "income" : "Expense"} deleted successfully`, "error")

  }

  return (
    <div className='min-h-screen bg-linear-to-br from-slate-900 via-purple-900 to-slate-900 p-4'>
    {/* Toast */}
   <Toast toasts={toast} removeToast={RemoveToast} />
     
     <div className='max-w-7xl mx-auto'>
       {/* Header */}
       <Header/>
       {/* Summary card */}
       <SummaryCard 
        totalIncome = {totalIncome} 
        totalExpenses = {totalExpenses}
        balance = {balance}
        />
         
         <div className='grid grid-cols-1 xl:grid-cols-5 gap-8'>
         {/* Add Expenses Form */}
         <div className='xl:col-span-2'>
         <AddExpensesForm 
         formData = {formData}
         setFormData = {setFormData}
         editingId = {editingId}
         setEditingId = {setEditingId}
         expenses = {expenses}
         setExpenses= {setExpenses}
         showToast = {showToast}
         
         />
         </div>
         <div className="xl:col-span-3">
          <div className='bg-white/5 backdrop-blur-lg rounded-3xl border border-white/10 shadow-2xl overflow-hidden'>
           <FilterTab filter={filter} setFilter = {setFilter} />
           {/* Expenses List */}
           <ExpensesList filteredExpenses = {filteredExpenses} handleEdit= {handleEdit} handleDelete={handleDelete} />
          </div>
         </div>
         </div>
     </div>
    </div>
  )
}

export default App
