const logger = require('./logger')

// Ya se puede usar directamente el objeto instanciado en el módulo logger
logger.log('This is an informational message')



  const customLogger = new logger.constructor('CUSTOM')
  customLogger.log('This is an informational message')
