const { z } = require('zod');

const userRegisterSchema = z.object({
  body: z.object({
    name: z.string().min(5, { message: 'Name must be at least 5 characters long' }),
    email: z.string().email({ message: 'Invalid email address' }),
    password: z.string().min(6, { message: 'Password must be at least 6 characters long' }),
    experience: z.coerce
      .number()
      .int({ message: 'Experience must be an integer' })
      .min(1, { message: 'Experience must be at least 1' })
      .max(100, { message: 'Experience must be at most 100' }),
  }),
});

module.exports = userRegisterSchema;
