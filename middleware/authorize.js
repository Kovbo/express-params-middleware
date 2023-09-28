function authorize(req, res, next) {
  const key = req.query.secretKey;

  if (key === "secretPassword123") {
    req.user = { name: "John" };
    next();
  } else {
    res.status(401).send("Not authorized!");
  }
}

module.exports = authorize;
