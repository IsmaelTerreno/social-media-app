import * as process from 'process';

export const jwtConstants = {
  secret: process.env.JWT_SECRET,
  expiresIn: '30d',
};
