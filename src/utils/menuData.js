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
      { label: "Books", key: "books", items: [
        { label: "Book List", key: "list" },
        { label: "Category", key: "category" },
        { label: "Authors", key: "author" },
      ]},
      { label: "Users", key: "users" },
      { label: "Articles", key: "articles"}
    ],
    activePath: [
      "d/books", "d/book"
    ]
  }
]