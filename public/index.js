$('#bottomalign').css('text-align','center')


//2nd attempt to fetch the content of the `bodyHtml` field from JSON document `/test_feed
// so forEach iterates over an array of items
// In this case the items are objects
// So obj for short is first argument
// Then it takes an optional argument of index 
// So we can use the indexes as the keys for our newly created object that saves all of the bodyHtml data
const data = "./test_feed.json"; 
let newObj = {}
function parseArr(){
  data.content.forEach((obj, index)=> newObj[index] = obj.content.bodyHtml)
  return newObj
  
}

// 2. Build a data structure that captures the count of each word in the content of the `bodyHtml` field(s) from JSON document `/test_feed.json`.
// function reqData () {
//     fetch('url')
//     .then((response) => response.json())  //getting back the response object which we want to receive the response content as JSON
//     .then((data) => {
//      console.log(json)); //using the JSON method w.in fetch to reterive data object
// })
// .catch ((error)=> 
// {
//     console.error(error);
// })
// }




