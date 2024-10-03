const logger = require('../config/logger');

const AUTH_TOKEN = process.env.AUTH_TOKEN;

function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;
  if (authHeader && authHeader === `Bearer ${AUTH_TOKEN}`) {
    logger.info(`Authentification réussie pour la requête venant de ${req.ip}`);
    next();
  } else {
    logger.warn(`Tentative d'accès non autorisée depuis ${req.ip}`);
    res.status(401).send('Non autorisé');
  }
}

module.exports = authMiddleware;
