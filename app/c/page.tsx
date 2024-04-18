import React from 'react'
import {CardStack} from '@/components/c'


export default function page() {
    const items = [
        {
          id: 1,
          name: "John Doe",
          designation: "Developer",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        // Add more card items as needed
      ];
  return (
    <CardStack items={items} />
  )
}
