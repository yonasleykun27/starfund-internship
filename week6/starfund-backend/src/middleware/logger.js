const fs = require('fs');
const path = require('path');

const logDirectory = path.join(__dirname, '../../logs');
const logFilePath = path.join(logDirectory, 'access.log');

// Ensure log directory and file exist
if (!fs.existsSync(logDirectory)) {
  fs.mkdirSync(logDirectory, { recursive: true });
}

const requestLogger = (req, res, next) => {
  const start = process.hrtime();
  
  // Hook into response finish event to log info
  res.on('finish', () => {
    const duration = process.hrtime(start);
    const ms = (duration[0] * 1000 + duration[1] / 1e6).toFixed(2);
    const timestamp = new Date().toISOString();
    const { method, originalUrl } = req;
    const { statusCode } = res;
    
    const logLine = `[${timestamp}] ${method} ${originalUrl} ${statusCode} - ${ms}ms\n`;
    
    // Print to console
    console.log(logLine.trim());
    
    // Write/append to file for Exercise 29
    fs.appendFile(logFilePath, logLine, (err) => {
      if (err) {
        console.error("Failed to write to access log file:", err.message);
      }
    });
  });
  
  next();
};

module.exports = requestLogger;
