

import Sidebar from "@/components/Sidebar";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";


export default function Home() {
  const { data: session } = useSession()
  const [X, setX] = useState('')
  const [playlists, setplaylists] = useState([])

  useEffect(() => {
    async function f() {
      if (session && session.accessToken) {
        setX(session.accessToken)
        const response=await fetch("https://api.spotify.com/v1/me/playlists",{
          headers:{
            Authorization:`Bearer ${session.accessToken}`
          }
        })
        const data= await response.json()
        setplaylists(data.items)
      }
    }
    f()
  }, [session])



  return (
    <>
    <main className="flex w-full  h-screen overflow-hidden  bg-black ">
     <Sidebar/>
     <div>
      </div>
    </main>
    <div className="bg-white sticky bottom-0 w-full h-16 z-20 ">
  <p>player</p>
    </div>
    </>
  )
}
