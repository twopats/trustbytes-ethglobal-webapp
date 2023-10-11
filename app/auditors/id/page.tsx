
import getMockUsers from '@/app/utils/mock'
import React from 'react'

type AuditorPageParams = {
  id: string
}

export async function generateStaticParams() {
  const mockUsers = await getMockUsers()
  console.log(mockUsers)
  return mockUsers.map((user) => ({
    id: user.id,
  }))
}


const page = ({ params }: { params: AuditorPageParams }) => {
  const { id } = params;
  return (
    <div>{id}</div>
  )
}

export default page
