import { Router } from "express";
import {
  verifyPayment,
  createOrder,
  getBookings,
  cashBooking,
} from "../../controllers/user/booking.controller.js";
import verifyUserToken from "../../middleware/jwt/user.middleware.js";

const bookingRouter = Router();

bookingRouter.post("/create-order", verifyUserToken, createOrder);
bookingRouter.post("/verify-payment", verifyUserToken, verifyPayment);
bookingRouter.post("/cash-booking", verifyUserToken, cashBooking);
bookingRouter.get("/get-bookings", verifyUserToken, getBookings);

export default bookingRouter;
