# How to build a toggle light switch in React 

In order to build a toggle light switch in React, we have to learn the basics of how to implement core React concepts - such as hooks. 

first, run ```npx create-react-app (app name)``` in order to create a new React project. I will be calling this project 'toggle-light'. Once the React app loads - run ```npm install``` to install all the proper dependencies. 

```code .``` into the project in order to open up your coding system and edit the skeleton of the code as needed. 

run ```npm start``` to start the server in your terminal and you should be ready to code. 

## Step 1: 
Add the tailwind script to your index.html file, which can be found under ./public/index.html.

The script should be: ```<script src="https://cdn.tailwindcss.com"></script>```

## Step 2: 
Once the script is added, hop into ./src/App.js and start coding. 

The first thing we want to do here is add a simple button and build on from there 

```<button>Toggle Light</button>```

Once your button is created, you can add additional styles to it based on your preference using tailwindcss. The specific ones that I used were flex, h-screen (to take up the height of the screen), justify-center and items-center in order to center the button on the page.

## Step 3: 
This is the part where turn the static button into a more dynamic object -- we will be using React hooks. First, you need to import the { useState } hook from 'react'. It should look like this: 

```import { useState } from 'react';```

Once that is complete, you can create your hook, which should look like this: 

```const [light, setLight] = useState(true);```

we set our initial state to true because the light is already on and in order to turn it off, we would need to be doing the opposite of that. 

*you can also test your state in the console by doing console.log(light) or console.log( {light} ) to get a key and a value. You should see something like light: true in the console.*

## Step 4: 
Once we have our hook, we can creare an onClick function for our button: 

```onClick={() => setLight(!light)}```

The reason that we need a callback is because the button needs to be clicked in order for the color to change, and the reason that we would make our setter !light (as opposed to just a 'false' boolean) is because our light switch needs to toggle, which means it needs to turn on and off - hence, have opposing state, therefore, dynamically, the light is either on or off and our colors toggle between one another. 

## Step 5:
Once the above steps are complete, you can now start adding colors. I chose to toggle between a light violet shade and a light green shade. There are a couple ways to do this -- the first would look like this: 

```<div className={light ? 'bg-violet-200' : 'bg-emerald-200'}>```
  
In this case, you would just be writing a ternary statement in the div. If the light is on, the background is pink, and if the button is clicked/ the light is off, the background would turn emerald green. 
  
Another way to write this would be as follows: 
 
```const changeColor = light ? 'bg-violet-200' : 'bg-emerald-200'```  
  
```<div className={`h-screen bg-slate-100 flex justify-center items-center ${changeColor}`}>```
   
 Here, we are interpolating our changeColor ternary in order to DRY up our code. 
   
 ## Step 6: 
 Once you are finished with all the above steps, test out your code and you are finished!
