import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas";

const config=defineConfig({
    projectId: "d14f0w8j",
    dataset:"production",
    title: "my sanity project latest",
    useCdn: false,

    apiVersion: "2023-09-05",
    basePath: "/admin",
    plugins: [deskTool()],
    schema:{types:schemas}
});

export default config;