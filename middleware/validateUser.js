const jwt = require("jsonwebtoken");

const validateUser = (req, res, next) => {
  const token =
    req.body.token || req.query.token || req.headers["x-access-token"];

  if (!token) {
    res.status(403).send("Token is required");
  }
  try {
    const decoded = jwt.verify(token, req.app.get("secretKey"));
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).send("Unauthorized access");
  }
};

module.exports = validateUser;
