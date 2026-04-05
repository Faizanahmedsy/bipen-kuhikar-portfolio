import { defineConfig } from "sanity"
import { structureTool } from "sanity/structure"
import { visionTool } from "@sanity/vision"
import { schemaTypes } from "./sanity/schemaTypes"

export default defineConfig({
  name: "bipen-kuhikar-portfolio",
  title: "Bipen Kuhikar — Site Admin",

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production",

  basePath: "/admin",

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Content")
          .items([
            S.listItem()
              .title("Home Page Content")
              .id("siteContent")
              .child(
                S.document()
                  .schemaType("siteContent")
                  .documentId("siteContent")
              ),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
