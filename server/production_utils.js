const path = require("path");

const handleProduction = (express, app) => {
  if (process.env.NODE_ENV === "production") {
    console.log("production mode");
    const buildPath = path.join(__dirname, "client", "build");
    console.log(buildPath);

    app.use(express.static(buildPath));

    // --- handle unknown route
    app.get("*", (req, res) => {
      console.log("unknown route is accessed, serve index.html");
      const indexHtmlPath = path.join(buildPath, "index.html");
      res.sendFile(indexHtmlPath);
    });
  } else {
    console.log("development mode");
  }
};

module.exports = { handleProduction };
