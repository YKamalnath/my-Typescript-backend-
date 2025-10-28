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

export default router; 


