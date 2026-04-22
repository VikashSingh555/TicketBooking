import express from 'express';
import { getAllBookings, getAllShows, getDashboardData, isAdmin } from '../controllers/adminController.js';

const adminRouter = express.Router();

adminRouter.get('/is-admin', isAdmin)
adminRouter.get('/dashboard', getDashboardData)
adminRouter.get('/all-show', getAllShows)
adminRouter.get('/all-bookings', getAllBookings)

export default adminRouter;