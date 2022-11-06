const { body } = require('express-validator');

const postCreateValidation = [
    body('title', 'короткий заголовок').isLength({ min: 1 }).isString(),
    body('text', 'короткий текст объявления').isLength({ min: 1 }).isString(),
    body('imageUrl', 'неверная ссылка на изображение').optional().isString(),
];

module.exports = postCreateValidation;