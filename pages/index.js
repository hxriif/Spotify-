import PlaylistView from "@/components/PlaylistView";
import Sidebar from "@/components/Sidebar";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import Search from "@/components/Search";
import Artist from "@/components/Artist";
import Library from "@/components/Library";


export default function Home() {
  const [view, setView] = useState("search")  //["search,library,playlist,artist"]
  const [globalPlaylistId, setGloabalPlaylistId] = useState(null)
  const [globalArtistId, setGlobalArtistId] = useState(null)
  return (
    <>
      <main className="flex w-full h-screen overflow-hidden bg-black">
        <Sidebar
          view={view}
          setView={setView}
          setGloabalPlaylistId={setGloabalPlaylistId}
        />
        {view === "playlist" && <PlaylistView
          globalPlaylistId={globalPlaylistId}
        />}
        {view === "search" && <Search />}
        {view === "library" && <Library />}
        {view === "artist" && <Artist />}
      </main>
      <div className="sticky z-20 bottom-0 h-[3rem] w-full bg-red-900">
        <h1>hii this is player </h1>
      </div>
    </>
  )
}
