# Redux ToolKit
- Install @Reduxjs/Toolkit and React-Redux
- Build Our store
- Connect Store to App
- Create Slice(cartSlice)
- Dispatch Action
- Selector

# Types of Testing(devloper)
- Unit Testing 
- Integration Testing
- End to End Testing - e2e Testing 

- React Testing Library 
- Uses "Jest" Library:-Jest is a delightful JavaScript 
- Testing Framework with a focus on simplicity.

# Setting up Testing in our App
- Install React Testing Library
- Install jest
- Install Babel Dependencies
- Configure Babel
- Configure Parcel Config file to disable default babel transpilation
- Jest Configuration
- Jest - npx jest --init
- Install Jsdom Library
- We create a test file (__tests__) ("__"- means dunder test)
- Install @babel/preset-react - to make JSX work in test cases
- Include  @babel/preset-react inside my babel config file
- Install @testing-library/jest-dom
- "watch-test":"jest --watch" it used to run test cases after every update/refresh
- while writing test code/cases we should import "@testing-library/jest-dom" & render,screen,fireEvent from "@testing-library/react" for testing events(click,change,submit) and act (When testing, code that causes React state updates should be wrapped into act(...):) .
- act function - it imported from "react-dom/test-utils"