import { useSession } from "next-auth/react";


export default function Home() {
  const{data:session}=useSession()
  
  return (
    <>
   <main className="flex w-full  h-screen overflow-hidden  bg-black">
     <div>sidebar</div>
     <div>menu</div>
   </main>
   <div className="sticky bottom-0 h-24 w-full bg-red-200"></div>
   </>
  )
}
