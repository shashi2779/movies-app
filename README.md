## use img tag in React
- logo.png
```js
import Logo from '../logo.png';

<img src={Logo}></img>
```
- "img" chhupane k liye ki koi copy na karr paye
```js
bg-[url(link)]


// agar image ko import kiya hai toh aise karegen
import Image from '../banner.jpg;

<div className={`bg-[url(${Image})] h-[28vh] md:h-[70vh] bg-center bg-cover flex items-end justify-center`}>
 
</div>



//dynamic img - ${img}
bg-[url(https://image.tmdb.org/t/p/original/${movies.backdrop_path})]




<div className={`bg-[url(https://image.tmdb.org/t/p/original/${movies.backdrop_path})] h-[28vh] md:h-[70vh] bg-center bg-cover flex items-end justify-center`}>
 
</div>

```
- search on google for loader
    - react spinner loader
- console karne k liye
  - console.table( )
  - console.log( )

- mouse " Hover " karane pe function's
   
   - onMouseEnter = {()=>{setHover(movie.id)}}
   - onMouseLeave = {()=>setHover("")}