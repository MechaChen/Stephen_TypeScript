const add = (a: number, b: number) => {
  return a + b;
};

const subtract = (a: number, b: number): number => {
  return a - b;
};

function divide(a: number, b: number): number {
  return a / b;
};

const multiple = function(a: number, b: number): number {
  return a * b;
}

const looger = (message: string): void => {
  console.log(message);

  // return null; => OK
  // return undefined; => OK
  // return 'asdlkfjiower' => Error
};


// 'never' type doesn't expect to have any return value
const throwError = (message: string): never => {
  throw new Error(message);
};

const throwError1 = (message: string): string => {
  if(!message) {
    throw new Error(message);
  }
  return message;
}

const throwError2 = (message: string): void => {
  if(!message) {
    throw new Error(message);
  }
}

const todaysWeather = {
  date: new Date(),
  weather: 'sunny',
};

const logWeather = (forecast: { date: Date; weather: string; }): void => {
  console.log(forecast.date);
  console.log(forecast.weather);
}

const logWeather1 = ({ date, weather }: { date: Date; weather: string}): void => {
  console.log(date);
  console.log(weather);
}

logWeather(todaysWeather);
logWeather1(todaysWeather);