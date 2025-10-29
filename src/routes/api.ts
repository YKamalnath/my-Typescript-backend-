import { Router } from "express";
import type { Request, Response } from "express";

const router = Router();

router.get("/hello", (req: Request, res: Response) => {
  res.json({ message: "Hello kamal!! from backend:)" });
});

router.post("/echo", (req: Request, res: Response) => {
  const { data } = req.body;
  res.json({ echoed: data });
});

router.post("/payment/notify", (req: Request, res: Response) => {
  console.log("Payment notification received:", req.body);
  // Verify payment with PayHere server if needed
  res.status(200).send("Notification received");
});


export default router; 


