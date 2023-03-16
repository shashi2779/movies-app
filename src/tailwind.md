## tailwind css

- tailwind cdn
```js
<script src="https://cdn.tailwindcss.com"></script>
```
- if you get tailwind css property on your element , then write in className=""
```js
<div className="flex space-x-8 px-8 ">

</div>
```
## compair with "css" & "tailwind css"

 ### css
 
- element ko agal-bagal lane k liye in css
  
  - display : flex
- other property
```js
padiing : 20px;
flex-direction: column;
justify-content : center;
align-items: center;
flex-wrap: wrap;

```

 ### tailwind css 
 
 - element ko agal-bagal lane k liye in tailwind css
```js

    <div className="flex">
        ...........
        ...........
        ...........
    </div>

    
    OR
    
    
    <div className={`flex space-x-8 px-8`}>
       ..........
       ..........
       ..........
    </div>

```
- space de do x-axis prr 8 ka , element k bich me
```js
    <div className="space-x-8"></div>
```
- element k bich me "padding de do x-axis" prr 8 ka 
```js
<div className="px-8"></div>
```
- other property
```js
flex
space-x-8
border
items-center
items-end
justify-center

```
- display : flex => flex
- flex-direction: column => flex-col
- flex-wrap: wrap => flex-wrap  // imp
- justify-content : center => justify-center
- align-item: center
    - items-center
    - items-end

- height : 100% ,100px
  - h-1
  - h-2,
  - h-3,
  - h-4,
  - h-5,
  - h-6
  - h-[35vh]
  - h-[500px]
- width : 100% ,100px
  - w-full
  - w-3
  - w-[20vw]
  - w-[250px]

- padding : 8px
  - px-8 (padding x-axis me 8)  - tailwind css me 
  - py-3 (padding y-axis me 3)
  - pl (padding left se)
  - pr (padding right se)
- margin : 8px
  - mt-8 (margin-top) 
  - mb-8 (margin-bottom)

- border : 1px ,3px
  - border
  - border-3
- border-radius : 5px
  - rounded-xl
  - rounded-md
  - rounded-lg
  - rounded
  - rounded-full
- border-radius : 
  - rounded-b-xl (rounded bottom xl) 
- border-radius : 
  - rounded-r-xl (border right me rounded xl)
- border-radius : 
  - rounded-l-xl 
- border-width: 
  - border-2
- border-color => border-indigo-500
- border-color => border-gray-500/50
- border (right,left me adjust krne k liye) : 
  - border-r-0,border-l-0

- space in items => space-x-8

- text ko color : 
   - text-blue-400 
   - search tailwind color
- text ka color => text-white

- font-size : 
  - text-xl,
  - text-3xl,
  - text-lg (mana shirt ka size ho xl)
- font-weight: 
  - font-medium 
  - font-bold

- backgroung-size : 
  - bg-center,
  - bg-cover
- background-color => bg-gray-900 
- background me "opacity" dene k liye : bg-opacity-50

- hover : scale() => hover:scale-110 ,
                     ease-out ,
                     duration-300
- text-center - se obj/ele center aata h

- search tailwind css breakpoints on screen md:768px
```js
module.exports = {
  theme: {
    screens: {
      'sm': '640px',
      //aise "css" me likhate hai => @media (min-width: 640px) { ... } 

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  }
}

```