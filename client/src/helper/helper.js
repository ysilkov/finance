
 export let changeValue  = [];
 export  let changeColor = [];
 const up = "▲ ";
 const down = "▼ " ;
 export const changeValueColor = (data) =>{
 if(data.length !==0){
   data[data.length-1].forEach((val)=>{
     if(val.change_percent > 0) {
         changeValue.push(up + val.change_percent) 
         changeColor.push("green") 
 } else {
     changeValue.push(down + val.change_percent);
     changeColor.push("red") 
 }
})
 }
}
console.log(changeColor)