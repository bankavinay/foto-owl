const express = require('express');
const { getAllBooks, createBorrowRequest } = require('../controllers/bookController.js');
const { authenticateJWT } = require('../utils/authMiddleware.js');

const booksrouter = express.Router();

booksrouter.get("/", getAllBooks);

booksrouter.post("/borrow", authenticateJWT, createBorrowRequest);

module.exports = booksrouter;
