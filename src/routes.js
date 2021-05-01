const {
  addBookHandler,
  getBookHandler,
  getDetailBookHandler,
  putBookHandler,
  delBookHandler,
} = require("./handler");

const routes = [
  {
    method: "POST",
    path: "/books",
    handler: addBookHandler,
    options: {
      cors: {
        origin: ["*"],
      },
    },
  },
  {
    method: "GET",
    path: "/books",
    handler: getBookHandler,
    options: {
      cors: {
        origin: ["*"],
      },
    },
  },
  {
    method: "GET",
    path: "/books/{bookId}",
    handler: getDetailBookHandler,
    options: {
      cors: {
        origin: ["*"],
      },
    },
  },
  {
    method: "PUT",
    path: "/books/{bookId}",
    handler: putBookHandler,
    options: {
      cors: {
        origin: ["*"],
      },
    },
  },
  {
    method: "DELETE",
    path: "/books/{bookId}",
    handler: delBookHandler,
    options: {
      cors: {
        origin: ["*"],
      },
    },
  },
];

module.exports = routes;
