import React from 'react'
import prisma from '../../../lib/prisma'

// export const allPosts = async () => {
//     const feed = await prisma.post.findMany();
//     console.log(feed)
//   return {
//     props: { feed }
//   };
// };

const Page = async () => {
     const feed = await prisma.post.findMany();
  return (
    <div className='flex justify-center w-full mt-6'>
          {
              feed.map((post: any) => (
                  <div key={post.id} className='flex flex-col w-80 bg-green-300 p-5 gap-4'>
                      <span>{post.published}</span>
                      <span>{post.title}</span>
                      <span>{post.content}</span>
                      <span>{post.auther}</span>
                  </div>
              ))
      }
    </div>
  )
}

export default Page
