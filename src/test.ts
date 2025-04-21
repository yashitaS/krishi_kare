import * as dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

// Access and print the variable
const mySecret = process.env.JWT_SECRET;

if (mySecret) {
  console.log(`MY_SECRET is: ${mySecret}`);
} else {
  console.error("MY_SECRET is not defined in the .env file");
}