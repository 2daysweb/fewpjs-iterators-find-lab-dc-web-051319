const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(recordHash)
{
  
  let champsHash = recordHash.find(e => e.result === "W");
  
  if (champsHash.typeOf() === undefined) {
  
    return undefined 
    
  }
    else {
  return champsHash.year  
    }  
}
