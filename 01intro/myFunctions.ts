// function getValue(myValue: number){
//     if(myValue > 5) {
//         return true
//     }

//     return "200 OK"
// }

const getHello = (s: string):string =>{
    return ""
}

const heroes = ['thor', 'spiderman', 'ironman']
// const heroes = [1,2,3];

heroes.map((hero): string => {
    return `hero is ${hero}`
})

function consoleError(errmsg: string): void{
    console.log(errmsg);
    
}

function handleError(errmsg: string): never{
  throw new Error(errmsg);
}

export {}