- [ ] Why would you use class component over function components (removing hooks from the question)?
      • For one, a lot of companies still use class components. Recent changes to functional components, hooks, have given functional components virtually the same features.
- [ ] Name three lifecycle methods and their purposes.
      o componentDidMount: runs after the component output has been rendered to the dom. This function will be called only once in the whole life-cycle of a given component and it being called signalizes that the component — and all its sub-components — rendered properly.
      o Since this function is guaranteed to be called only once it is a perfect candidate for performing any side-effect causing operations such as AJAX requests.
      o componentDidUpdate: This function will be called after render is finished in each of the re-render cycles. Due to the fact that this is the only function that is guaranteed to be called only once in each re-render cycle it is recommended to use this function for any side-effect causing operation
      o componentWillUnmount: Use this function to “clean up” after the component if it takes advantage of timers (setTimeout, setInterval), opens sockets or performs any operations we need to close / remove when no longer needed.

- [ ] What is the purpose of a custom hook?
      o Custom hooks keep your code DRY. They extend the same functionality to elements of similar tasks, such as multiple input elements where you want to capture input values, or you want to persist information to local storage.
- [ ] Why is it important to test our apps?
      o Surfaces bugs faster. Reduces risk of regressions. Allows us to trust the code. Discover edge cases. Acts as a safety net when making changes or refactoring. Acts as documentation for the code. Encourages us to write more testable code.
