/*

Return Largest Numbers in Arrays
Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].

*/

function largestOfFour(arr) {
  
    let largestArr=[];
    
    const Compare = (arr)=>{
  
      
      let large =arr[1];
      for(let i=0;i<arr.length;i++){
  
          
          large < arr[i] && (large = arr[i]) 
      }
  
      largestArr.push(large);
       
    }
  
    for(let i=0; i< arr.length;i++){
  
      Compare(arr[i]);
      console.log(largestArr)
    }
  
    return largestArr;
  }
  
  largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]);