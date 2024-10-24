import { Router } from "express";
import { verifyAccessToken } from "../middlewares/auth.middleware.js";
import {
  submitCode,
  getResult,
  getSubmissions,
  getAnalytics,
  getAnalyticsSubmissions,
} from "../controllers/submission.controller.js";

const router = Router();
// secured routes
router.route("/").get(verifyAccessToken, getSubmissions);
router.route("/analytics").get(verifyAccessToken, getAnalytics);
router
  .route("/analytics-submission")
  .get(verifyAccessToken, getAnalyticsSubmissions);
router.route("/submit").post(verifyAccessToken, submitCode);
router.route("/result/:submissionId").get(verifyAccessToken, getResult);

export default router;
