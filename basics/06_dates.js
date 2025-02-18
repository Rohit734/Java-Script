let myDate = new Date()
console.log(myDate)
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleDateString())
console.log(myDate.toISOString())
console.log(myDate.toJSON())
console.log(typeof myDate)
let newDate = new Date(2023,7,23) // yyyy/m/dd month starts from 0
console.log(newDate.toString())

// timeStamp

let timeStamp = Date.now()

console.log(timeStamp);
console.log(myDate.getTime())
console.log(Math.round(Date.now()/1000));
let date2 = new Date()
console.log(date2.getDate());
console.log(date2.getMonth()+1);

console.log(date2.toLocaleDateString('default',{
    weekday:"long"
}))



