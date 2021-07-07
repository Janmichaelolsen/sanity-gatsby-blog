export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "60e565ae99f6631c98cb9512",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-m63h6kfy",
                  apiId: "75086b82-6a57-47f2-aa77-a468ac9b7b95",
                },
                {
                  buildHookId: "60e565ae88c0511ca70e5530",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-1mbdv3ah",
                  apiId: "95e0ee76-0e1f-4d09-afea-15faf2717ed7",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/Janmichaelolsen/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-1mbdv3ah.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
