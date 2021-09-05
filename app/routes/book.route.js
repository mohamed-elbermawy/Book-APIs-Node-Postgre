const express = require("express");
const router = express.Router();
const bookController = require("../controllers/book.controller");

router.get("/", bookController.getAllBooksList);
router.get("/details/:book_id", bookController.getBookDetails);
router.post("/save", bookController.saveBook);
router.put("/update", bookController.updateBook);
router.delete("/delete/:book_id", bookController.deleteBook);

module.exports = router;
