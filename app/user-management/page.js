"use client"

import Sidebar from "@/components/Sidebar"
import Wrapper from "@/components/Wrapper"

export default function UserManagement(){
    return(
        <>
        <Sidebar />
        <Wrapper childrenElement={<>
            <h1>Ini halaman User Management</h1>
        </>}
         />
        </>
    )
}