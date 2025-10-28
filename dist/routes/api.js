"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
// Example GET route
router.get("/hello", (req, res) => {
    res.json({ message: "Hello from backend!" });
});
// Example POST route
router.post("/echo", (req, res) => {
    const { data } = req.body;
    res.json({ echoed: data });
});
exports.default = router;
//# sourceMappingURL=api.js.map