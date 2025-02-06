const router = require("express").Router();
const pool = require("./pool");

// Test route for DB connectivity
router.get("/test", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");
    res.json({ success: true, server_time: result.rows[0].now });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: err.message });
  }
});

// GET all messages
router.get("/", (req, res) => {
  const dbQuery = "SELECT message_text FROM messages;";

  pool
    .query(dbQuery)
    .then((result) => {
      console.log("Return all messages", result);
      res.send(result.rows);
    })
    .catch((err) => {
      console.log("ERROR:", err);

      res.sendStatus(500);
    });
});

module.exports = router; // Ensure this line is included
