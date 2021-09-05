const DbQueries = require("../db/query");
const DbConnection = require("../db/connection");

exports.getAllBooksList = async (req, res) => {
  try {
    const getAllBooksListQuery = DbQueries.Queries.GET_ALL_BOOKS_LIST_QUERY;
    const result = await DbConnection.connection(getAllBooksListQuery);
    return res.status(200).json(result.rows);
  } catch (err) {
    console.log("Error : Book<getAllBooksList()>", err);
    return res.status(500).json({ error: err });
  }
};

exports.getBookDetails = async (req, res) => {
  try {
    const book_id = req.params.book_id;

    if (!book_id) return res.status(400).json({ error: "Invalid book_id" });

    const getBookDetailsQuery = DbQueries.Queries.GET_BOOK_DETAILS_QUERY;

    const result = await DbConnection.connection(getBookDetailsQuery, [
      book_id,
    ]);
    return res.status(200).json(result.rows);
  } catch (err) {
    console.log("Error : Book<getBookDetails()>", err);
    return res.status(500).json({ error: err });
  }
};

exports.saveBook = async (req, res) => {
  try {
    const saveBookQuery = DbQueries.Queries.SAVE_BOOK_QUERY;
    const getStoreByCode = DbQueries.Queries.GET_STORE_BY_CODE;

    const book_title = req.body.book_title;
    const book_description = req.body.book_description;
    const book_author = req.body.book_author;
    const book_publisher = req.body.book_publisher;
    const book_pages = req.body.book_pages;
    const book_code = req.body.book_code;
    const created_by = "mohamed elbermawy";
    const created_on = new Date();

    if (!book_title)
      return res.status(400).json({ error: "Invalid book_title" });

    if (!book_author)
      return res.status(400).json({ error: "Invalid book_author" });

    if (!book_publisher)
      return res.status(400).json({ error: "Invalid book_publisher" });

    if (!book_code) return res.status(400).json({ error: "Invalid book_code" });

    const getCodeResult = await DbConnection.connection(getStoreByCode, [
      book_code,
    ]);

    if (getCodeResult.rowCount == 0)
      return res.status(500).json({ error: "book code not found" });

    const queryParams = [
      book_title,
      book_description,
      book_author,
      book_publisher,
      book_pages,
      book_code,
      created_by,
      created_on,
    ];

    const result = await DbConnection.connection(saveBookQuery, queryParams);

    if (result.rowCount == 0)
      return res.status(500).json({ error: "Error saving book" });

    return res.status(200).json({ message: "Book saved successfully" });
  } catch (err) {
    console.log("Error : Book<saveBook()>", err);
    return res.status(500).json({ error: err });
  }
};

exports.updateBook = async (req, res) => {
  try {
    const updateBookQuery = DbQueries.Queries.UPDATE_BOOK_QUERY;
    const getStoreByCode = DbQueries.Queries.GET_STORE_BY_CODE;
    const getBookById = DbQueries.Queries.GET_BOOK_BY_ID;

    const book_id = req.body.book_id;
    const book_title = req.body.book_title;
    const book_description = req.body.book_description;
    const book_author = req.body.book_author;
    const book_publisher = req.body.book_publisher;
    const book_pages = req.body.book_pages;
    const book_code = req.body.book_code;
    const created_by = "mohamed elbermawy";
    const created_on = new Date();

    if (!book_id) return res.status(400).json({ error: "Invalid book_id" });

    if (!book_title)
      return res.status(400).json({ error: "Invalid book_title" });

    if (!book_author)
      return res.status(400).json({ error: "Invalid book_author" });

    if (!book_publisher)
      return res.status(400).json({ error: "Invalid book_publisher" });

    if (!book_code) return res.status(400).json({ error: "Invalid book_code" });

    const getStoreResult = await DbConnection.connection(getStoreByCode, [
      book_code,
    ]);

    if (getStoreResult.rowCount == 0)
      return res.status(500).json({ error: "store not found" });

    const getBookResult = await DbConnection.connection(getBookById, [book_id]);

    if (getBookResult.rowCount == 0)
      return res.status(500).json({ error: "book not found" });

    const queryParams = [
      book_title,
      book_description,
      book_author,
      book_publisher,
      book_pages,
      book_code,
      created_by,
      created_on,
      book_id,
    ];

    const result = await DbConnection.connection(updateBookQuery, queryParams);

    if (result.rowCount == 0)
      return res.status(500).json({ error: "Error updating book" });

    return res.status(200).json({ message: "Book updated successfully" });
  } catch (err) {
    console.log("Error : Book<updateBook()>", err);
    return res.status(500).json({ error: err });
  }
};

exports.deleteBook = async (req, res) => {
  try {
    const book_id = req.params.book_id;

    if (!book_id) return res.status(400).json({ error: "Invalid book_id" });

    const deleteBookQuery = DbQueries.Queries.DELETE_BOOK_QUERY;

    const result = await DbConnection.connection(deleteBookQuery, [book_id]);

    if (result.rowCount == 0)
      return res.status(500).json({ message: "book not found to be deleted" });

    return res.status(200).json({ message: "Book deleted successfully" });
  } catch (err) {
    console.log("Error : Book<deleteBook()>", err);
    return res.status(500).json({ error: err });
  }
};
