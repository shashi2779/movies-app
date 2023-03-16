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

```

 ### tailwind css 
 
 - element ko agal-bagal lane k liye in tailwind css
```js
  <div className="flex"></div>
```
- space de do x-axis prr 8 ka , element k bich me
```js
    <div className="space-x-8"></div>
```
- element k bich me "padding de do x-axis" prr 8 ka 
```js
<div className="px-8"></div>
```

# search tailwind css breakpoints on screen -> md:768px

->flex
->flex-column : flex-col
->justify-content : center = justify-center
->align-item: items-center ,items-end

->height : h-1,2,3,4,5,6
->width : w-full ,w-3

->padding : px-8,py-3 (padding x-axis me 8) (padding y-axis me 3)
->margin : mt-8 (margin-top) , mb-8 (margin-bottom)

-> border: border,border-3
->border-radius : rounded-xl,rounded-md,rounded-lg, rounded , rounded-full
->border-radius : rounded-b-xl (rounded bottom xl) 
->border-radius : rounded-r-xl (border right me rounded xl)
->border-radius : rounded-l-xl 
->border-width: border-2
->border-color: border-indigo-500
->border-color : border-gray-500/50
->border (right,left me adjust krne k liye) : border-r-0,border-l-0

->space in items : space-x-8

->text ko color : text-blue-400 #search tailwind color
->text ka color : text-white

->font-size : text-xl,text-3xl,text-lg (mana shirt ka size ho xl)
->font-weight: font-medium , font-bold

->backgroung-size : bg-center,bg-cover
->background-color : bg-gray-900 
->background me "opacity" dene k liye : bg-opacity-50

-> hover:scale() :=> hover:scale-110 ,
                     ease-out ,
                     duration-300


console.table()
text-center - obj center aata h
react spinner loader

