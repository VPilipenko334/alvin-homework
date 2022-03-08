# How to build a dropdown with changing background colors in React

first, run ```npx create-react-app (app name)``` in order to create a new React project. I will be calling this project 'dropdown'. Once the React app loads - run ```npm install``` to install all the proper dependencies. 

```code .``` into the project in order to open up your coding system and edit the skeleton of the code as needed. 

run ```npm start``` to start the server in your terminal and you should be ready to code. 

## Step 1: 
Add the tailwind script to your index.html file, which can be found under ./public/index.html.

The script should be: ```<script src="https://cdn.tailwindcss.com"></script>```

## Step 2: 
Once the script is added, hop into ./src/App.js and start coding. 

The first thing we will do is add a simple dropdown. This can be done using: 

``` 
   <select> 
     <option value="color-a">color A</option>
     <option value="color-b">color B</option>
     <option value="color-c">color C</option>
   </select> 
 ```
   
  Once this is complete, you can choose the colors using tailwindcss and replace them in the value. 
  
  It should look like this: 
  
  ``` 
    <select>
      <option value="bg-amber-200">color A</option>
      <option value="bg-slate-800">color B</option>
      <option value="bg-blue-400">color C</option>
    </select>
  ```
  
  ## Step 3: 
  Here, we are going to create our hook. First, you will need to import { useState } from react. 

  ```import { useState } from 'react';```
  
  Then, you can form your hook: 
  
  ```const [color, setColor] = useState("bg-slate-800");``` 
  
  you want your first color to be your initial color. 
  
  ## Step 4: 
  Here, we want to build our handler --> the function should look like this: 
  
  ``` 
  const handleChange = (e) => {
    setColor(e.target.value)
  } 
  ```
  
  The e will stand for event, therefore, once the event is clicked, the color should change. 
  
  Now, we have to implement the handler wherever the change is occuring: the dropdown. In our ```<select>``` tag, we must add: 
  
 ```   
 value={color}
 onChange={handleChange} 
 ```
 This will indicate that once the handler in clicked, the value of the color will change. 
 
 ## Step 5: 
 
 Test our your code and you should be finished!
