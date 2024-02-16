"use client"

import Sidebar from "@/components/Sidebar"
import Wrapper from "@/components/Wrapper"

export default function Setting(){
    return(
        <>
        <Sidebar />
        <Wrapper childrenElement={<>
        <h1>Setting Page</h1>
        </>} />
        </>
    )
}