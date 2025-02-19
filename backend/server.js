const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

// Enable CORS for frontend requests
app.use(cors());

app.get("/api/jokes", (req, res) => {
    res.json([
        { id: 1, title: "Why don’t skeletons fight each other?", content: "Because they don’t have the guts!" },
        { id: 2, title: "Why did the scarecrow win an award?", content: "Because he was outstanding in his field!" },
        { id: 3, title: "Why don’t some couples go to the gym?", content: "Because some relationships don’t work out." },
        { id: 4, title: "Why did the bicycle fall over?", content: "Because it was two-tired!" },
        { id: 5, title: "How does a penguin build its house?", content: "Igloos it together!" },
        { id: 6, title: "Why did the golfer bring two pairs of pants?", content: "In case he got a hole in one!" },
        { id: 7, title: "What do you call fake spaghetti?", content: "An impasta!" },
        { id: 8, title: "What do you call cheese that isn’t yours?", content: "Nacho cheese!" },
        { id: 9, title: "Why don’t eggs tell jokes?", content: "Because they might crack up!" },
        { id: 10, title: "Why did the math book look sad?", content: "Because it had too many problems!" }
    ]);
});

app.listen(PORT, () => {
    console.log(`✅ Server is running on http://localhost:${PORT}`); // Correct usage of template literals
});
