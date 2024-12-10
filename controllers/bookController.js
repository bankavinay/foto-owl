const Book = require('../models/Book.js');
const BorrowRequest = require('../models/BorrowRequest.js');

exports.getAllBooks = async (req, res) => {
    try {
        const books = await Book.find();
        res.json(books);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.createBorrowRequest = async (req, res) => {
    try {
        const { bookId, start_date, end_date } = req.body;
        const borrowRequest = await BorrowRequest.create({
            user: req.user.id,
            book: bookId,
            start_date,
            end_date,
        });
        res.status(201).json(borrowRequest);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
