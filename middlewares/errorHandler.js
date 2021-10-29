// Acá en los middlewares así no estemos usando el parametro next, debemos ponerlo
// Ya que así es como detecta en este caso que es un middleware de tipo error

function logErrors (err, req, res, next) {
  console.error(error);
  next(err);
}

function erorrHandler (err, req, res, next) {
  res.status(500).json({
    message: err.message,
    stack: err.stack
  })
}

module.exports = { logErrors, erorrHandler }
