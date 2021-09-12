const winston = require("winston");
require("dotenv").config();
const logs_folder = process.env.LOGS_FOLDER;

// date | level(uppercase) | massage

const generateDate = () => {
  return new Date(Date.now()).toLocaleString();
};

class LoggerService {
  constructor(filename) {
    this.filename = filename;
    const logger = winston.createLogger({
      level: "info",
      format: winston.format.printf((info) => {
        let massage = `${generateDate()} | ${info.level.toUpperCase()} | ${
          info.message
        }`;
        massage = info.obj ? massage + `${JSON.stringify(info.obj)}` : massage;
        return massage;
      }),
      transports: [
        new winston.transports.Console(),
        new winston.transports.File({
          filename: `${logs_folder}/${this.filename}.log`,
        }),
      ],
    });
    this.logger = logger;
  }

  async info(massage) {
    this.logger.log("info", massage);
  }

  async info(massage, obj) {
    this.logger.log("info", massage, { obj });
  }

  async error(massage) {
    this.logger.log("error", massage);
  }

  async error(massage, obj) {
    this.logger.log("error", massage, { obj });
  }

  async debug(massage) {
    this.logger.log("debug", massage);
  }

  async debug(massage, obj) {
    this.logger.log("debug", massage, { obj });
  }
}

module.exports = LoggerService;
