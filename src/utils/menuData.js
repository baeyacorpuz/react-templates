export const menuList = [
  {
    label: "Dashboard",
    items: [
      { label: "App", key: "home" },
    ],
    activePath: [
      "d/home"
    ]
  },
  {
    label: "Management",
    items: [
      {
        label: "Books", key: "books", items: [
          { label: "Book List", key: "books" },
          { label: "Category", key: "category" },
          { label: "Authors", key: "author" },
        ],
        activePath: ["d/books/list", "d/books/category", "author", "books", "category"]
      },
      { label: "Users", key: "users", },
      { label: "Articles", key: "articles" }
    ],
    activePath: [
      "d/books"
    ]
  }
]