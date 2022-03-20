
## Challenges
1. **Getting a drop down option for the meters and kgs units.**\
   Found a [*quick solution on google.*](https://educba.com/html-form-elements)\
   Code:\   ```<select className='units' >
                <option value="kgs">kgs</option>
                <option value="kgs">lbs</option>
              </select>```

2. **Each time I inceamented an input value by 1, I was not getting a sum but rather 1 was being added to the value.**\
   For example, I would get: 
   >31111 

   whenever I clicked on the plus icon three times - instead of getting 
   
   >a 34.  

   Solution: I had to change the input type from `text` to `number`, then convert the input value to an intenger using the `parseint()` method.   

3. **Hiding Arrows From Input Number**\
  Found out a [*solution on google.*](https://www.w3schools.com/howto/howto_css_hide_arrow_number.asp)

4. **Input not accepting decimal values**\
   Solution: set a `step` value in the input e.g `step='0.01'` and change the `parseInt()` function to `parseFloat()`. Find source [here](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/number)  

5. **UseNavigate() could not be used outside the context of a <Router> component**\
Solution: I had to wrap the root component (App) of my app inside a <Router> component within index.js file.\[*Source*](https://stackoverflow.com/questions/70491774/usenavigate-may-be-used-only-in-the-context-of-a-router-component)  
```
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
```
6. **i got an error of 'can not destructure properties of undefined'.**
  Instead of importing the variable of createContext() from `App.js` file, I was creating a new `createContext()` which caused a bug.
  ```diff
  - const AppContext = createContext();
  + import {AppContext} from './App'
  ```

  ## Lessons learned
  - Using `prop drilling` to pass props from one sibling component to another.
  - How to use `useContext` hook to write less code and use short cuts during prop drilling.