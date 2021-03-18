import { CustomError } from "./custom-error";
export class DatabaseConnectionError extends CustomError {
  reasons = "Database connection error";
  statusCode = 500;
  constructor() {
    super("Error connecting to db");
    Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
  }

  serializeErrors() {
    return [{ message: this.reasons }];
  }
}
