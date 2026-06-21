import React from 'react'

import Toast from './components/Toast'
import Header from './components/Header'
import SummaryCard from './components/SummaryCard'



const App = () => {
  return (
    <div className='min-h-screen bg-linear-to-br from-slate-900 via-purple-900 to-slate-900 p-4'>
    {/* Toast */}
    {/* <Toast/> */}
     
     <div className='max-w-7xl mx-auto'>
       {/* Header */}
       <Header/>
       {/* Summary card */}
       <SummaryCard/>
     </div>

    </div>
  )
}

export default App
