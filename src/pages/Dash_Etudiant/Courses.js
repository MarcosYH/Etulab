import React from 'react'
import Sidebar from '../../components/Dash_Etudiant/Sidebar'
import Navbar from '../../components/Dash_Etudiant/Navbar'

export default function Courses() {
  return (
    <div>
     <Sidebar />
      <Navbar />
      <div className="p-4 lg:ml-64">
      Cours
      </div>
    </div>
  )
}
