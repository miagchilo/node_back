import { body } from 'express-validator';

export const loginValidation = [
  body('email', 'Wrong email').isEmail(),
  body('password', 'min 5 symb').isLength({ min: 5 }),
];

export const registerValidation = [
  body('email', 'wrong format').isEmail(),
  body('password', 'min 5 sym').isLength({ min: 5 }),
  body('fullName', 'name').isLength({ min: 3 }),
  body('avatarUrl', 'wrong link').optional().isURL(),
];

export const postCreateValidation = [
  body('title', 'title').isLength({ min: 3 }).isString(),
  body('text', 'text').isLength({ min: 3 }).isString(),
  body('tags', 'wrong tag format').optional().isString(),
  body('imageUrl', 'wrong link').optional().isString(),
];