export function sum(a,b) { 
    if(typeof a==='string' && typeof b==='string'){
        return `${a} ${b}`
    }
    return (100*a+100*b)/100; 
}