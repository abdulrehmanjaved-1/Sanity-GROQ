import { project } from "@/types/project";
import { createClient, groq } from "next-sanity";

export async function getProjects():Promise<project[]> {
  const client = createClient({
    projectId: "d14f0w8j",
    dataset: "production",
    apiVersion: "2023-09-05",
    useCdn: false
  });

  return client.fetch(
    groq`*[_type == "project"{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      url,
      content
    }`
  )
}