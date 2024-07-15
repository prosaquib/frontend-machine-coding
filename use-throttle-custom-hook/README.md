# use-throttle-custom-hook

This application demonstrates the use of a custom React hook for throttling. Throttling is a technique used to limit the rate at which a function can fire. This is particularly useful in scenarios where you want to limit the number of times a function is called, for example, in the case of a button click, scroll event, or any other event that can trigger a function.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js
- npm

### Installing

1. Clone the repository

```bash
git clone git@github.com:prosaquib/frontend-machine-coding.git
```

2. Navigate to the project directory

```bash
cd use-throttle-hook
```

3. Install dependencies

```bash
npm install
```

4. Start the development server

```bash
npm run dev
```

The application will start on `http://localhost:5473`.

## Custom Throttle Hook

The custom throttle hook is defined in `use-throttle-hook.ts`. Here's a basic example of how it works:

```typescript
import { useEffect, useRef, useState } from "react";

export default function useThrottle(throttledFn, delay) {
  const [throttleValue, setThrottleValue] = useState(throttledFn);
  const lastTime = useRef(Date.now());

  useEffect(() => {
    const timer = setTimeout(() => {
      const currentTime = Date.now();
      if (currentTime - lastTime.current >= delay) {
        setThrottleValue(throttledFn);
        lastTime.current = currentTime;
      }
    }, delay - (Date.now() - lastTime.current));

    return () => clearTimeout(timer);
  }, [throttledFn, delay]);

  return throttleValue;
}
```

This hook can be used in any functional component like so:

```typescript
import useThrottle from "./useThrottle";

function MyComponent() {
  const throttledFunction = useThrottle(() => {
    console.log("This function is throttled!");
  }, 1000);

  return <button onClick={throttledFunction}>Click me</button>;
}
```

In this example, the function passed to `useThrottle` will not be called more than once per second, no matter how many times the button is clicked.

## Running the tests

To run the tests, use the following command:

```bash
npm test
```

## Built With

- [React](https://reactjs.org/) - The web framework used

## Authors

- Saquib Akhter

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
