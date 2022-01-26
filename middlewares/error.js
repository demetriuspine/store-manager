const errorMiddleware = (err, _req, res) => { // adaptado de https://github.com/tryber/sd-014-b-live-lectures/blob/lecture/23.3/people-ops/middlewares/error.js
  const status = err.status || 500;
  const message = err.message || 'Internal server error';
  res.status(status).json({ message });
};

module.exports = errorMiddleware;