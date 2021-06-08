class Logger {
  error(message) {
    if (__DEV__) {
      console.log(message);
    }
  }
}

export default new Logger();
