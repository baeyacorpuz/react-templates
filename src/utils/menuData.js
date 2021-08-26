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
        label: "Books",
        key: "books",
        items: [
          { label: "Book List", key: "books" },
          { label: "Category", key: "category" },
          { label: "Authors", key: "author" },
        ],
        activePath: ["d/books/list", "d/books/category", "/book", "books", "category"]
      },
      { label: "Users", key: "users", },
      { label: "Articles", key: "articles" }
    ],
    activePath: [
      "d/books"
    ]
  },
]

export const mockData = [
  {
    label: "Reservations",
    items: [
      {
        label: "Rooms",
        key: "rooms",
        items: [
          { label: "Create", key: "add", activePath: ["create"] },
          { label: "List", key: "list", activePath: ["list"] }
        ],
      },
      { label: "Reservations", key: "reservation", activePath: ["reservation"] },
      { label: "Customer Reviews", key: "customer-reviews" }
    ]
  }
]