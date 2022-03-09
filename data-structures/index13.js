/*
Finish writing the function so that it returns true 
if the object passed to it contains all four names, Alan, Jeff, 
Sarah and Ryan and returns false otherwise.
*/
let users = {
    Alan: {
      age: 27,
      online: true
    },
    Jeff: {
      age: 32,
      online: true
    },
    Sarah: {
      age: 48,
      online: true
    },
    Ryan: {
      age: 19,
      online: true
    }
  };
  
  function isEveryoneHere(userObj) {
    // Only change code below this line
    let names = ['Alan','Jeff','Sarah','Ryan'];
    let response=[];
    
    for(let i=0; i<names.length;i++){
  
       /* users.hasOwnProperty(names[i])*/ names[i] in userObj && (response.push(true))
    }
  
    if(response.length === 4) return true;
    else return false;
  
    // Only change code above this line
  }
  
  console.log(isEveryoneHere(users));