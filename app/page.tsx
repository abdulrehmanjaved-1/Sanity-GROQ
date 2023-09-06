import { getProjects } from "@/sanity/sanity-utils"

export default async function Home() {
  const timestamp = Date.now(); // Generate a unique timestamp
  const projects = await getProjects(`?timestamp=${timestamp}`);
  
  return (
    <div>{projects.map((p)=>(
      <div>{p.name}</div>
    ))}</div>
  )

}
