import React from 'react'
import {CardStack} from '@/components/c'


export default function page() {
    const items = [
      {
        id: 1,
        name: "whisper",
        designation: "karim el assali and m.izoda",
        content: "whisper.rf.gd",
      },{
        id: 1,
        name: "kaka",
        designation: "mnox",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },{
        id: 1,
        name: "karim el assali",
        designation: "witwave",
        content: "witwave.rf.gd",
      },
      {
        id: 1,
        name: "John Doe",
        designation: "Developer",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
        // Add more card items as needed
      ];
  return (
    <main className='bg-gray-800  flex h-screen W-screen justify-center items-center' >
      <CardStack items={items} />
    </main>
  )
}
