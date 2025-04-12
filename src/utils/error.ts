import { AxiosError } from "axios";

/**
 * Handles and formats Axios errors from API responses
 * Primarily extracts error messages from the response data
 *
 * @param {any} error - The caught error (expected to be AxiosError)
 * @returns {string} The error message from the response
 * @throws {string} The extracted error message
 *
 * @example
 * try {
 *   // API call
 * } catch (error) {
 *   const message = formatedErrorServices(error);
 *   // message contains the server error detail
 * }
 */
export const formatedErrorServices = (error: any): string => {
    const err = error as AxiosError;
    console.error(err);
    const messageClient = (err.response?.data as any).detail;
    throw messageClient;
  };
  