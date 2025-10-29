import { Router, Request, Response } from "express";

const router = Router();

// PayHere notify URL
router.post("/payhere/notify", (req: Request, res: Response) => {
  console.log("PayHere Notification:", req.body);

  // TODO: Verify payment using PayHere MD5 hash if needed
  res.status(200).send("Payment notification received");
});

export default router;
