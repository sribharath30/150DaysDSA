function replace(input: string): string[]{
   const value =  "__";
   let start = 0;
   let end = value.length;
   const newArray: string[] = []
    while(end <= input.length){
        const startString = input.substring(0,start);
        const midSubstring = input.substring(start,end);
        const endSubstring = input.substring(end);
        if(midSubstring == '..')
        {   newArray.push(startString  + value + endSubstring);
            newArray.push();
        }
        start++;
        end++;
    }
return newArray;
}

console.log(replace("....."));

