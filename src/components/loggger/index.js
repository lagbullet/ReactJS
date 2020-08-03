const logger = () => (next) => (action) => {
  console.group(action.type);
  Object.entries(action)
    .filter(([key]) => key !== 'type')
    .forEach(([key, value]) => {
      console.group(key);
      console.log(value);
      console.groupEnd();
    });
  console.groupEnd();
  return next(action);
};

export default logger;
