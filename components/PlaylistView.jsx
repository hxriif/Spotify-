import { useSession } from 'next-auth/react'
import React, { useEffect, useState } from 'react'

function PlaylistView({ globalPlaylistId }) {

  const { data: session } = useSession()
  const [playlistData, setPlayistData] = useState(null)
 console.log(playlistData,'pla');

  useEffect(() => {

    async function f() {
      if (session && session.accessToken) {
        const response = await fetch(`https://api.spotify.com/v1/playlists/${globalPlaylistId}`, {
          headers: {
            Authorization: `Bearer ${session.accessToken}`
          }
        })
        const data = response.json()
        setPlayistData(data)
      }
    }
f()
  }, [session,globalPlaylistId])

  return (
    <div className='flex-grow h-screen  bg-neutral-800'>
      <header className='text-white sticky top-0 h-20  z-10 text-4xl bg-neutral-800 p-8 flex  items-center font-bold'>
        <div></div>
      </header>
    </div>
  )
}

export default PlaylistView
