import Link from "next/link"
import getMockUsers from "../utils/mock"

export default async function Auditors() {
const mockUsers  = await getMockUsers()
  return (
    <main className="flex gap-4 m-4 flex-wrap  ">

      {mockUsers.map((profile, i) => {
        return (
          <Link href={`/auditors/${profile.id}`} key={i} className="h-48 aspect-video flex bg-purple-500 p-4 cursor-pointer hover:brightness-105 rounded-lg hover:translate-x-1 hover:-translate-y-1 duration-100 ease-out">
            <span className="text-2xl font-bold text-white">{profile.id}</span>
          </Link>
        )
      })}




    </main>
  )
}

