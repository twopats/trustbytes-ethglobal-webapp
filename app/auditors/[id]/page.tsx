
import getMockUsers from '@/app/utils/mock'
import React from 'react'

type AuditorPageParams = {
  id: string
}

export async function generateStaticParams() {
  const mockUsers = await getMockUsers()
  console.log(mockUsers)
  return mockUsers.map((user) => ({
    id: String(user.id),
  }))
}


const page = ({ params }: { params: AuditorPageParams }) => {
  const { id } = params;
  return (
    <div className='m-4'>User {id}</div>
  )
}

export default page
