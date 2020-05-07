


function searchByKeyword(searchKeyword,users){
console.log("search function called---with keyword",searchKeyword);
let searchResult = [];
let mapOfIds = new Map();
searchKeyword.split(" ").forEach(element => {
    console.log(element);
    console.log("Initial-->",users.length);
    let tempList = users.filter(function(user) { 
        return ((user.name.toUpperCase().search(element.toUpperCase())>=0) 
             ||(user.username.toUpperCase().search(element.toUpperCase())>=0)
             ||(user.address.zipcode.toUpperCase().search(element.toUpperCase())>=0)
             ||(user.company.catchPhrase.toUpperCase().search(element.toUpperCase())>=0)
             );
        
     });
     console.log(tempList.length);
     tempList.forEach(function(item,index){
        console.log(item.id);
        if(!mapOfIds.has(item.id))
        {
            mapOfIds.set(item.id,"true");
            searchResult.push(item);
        }
     });
     
});
//let setOne= new Set(searchResult.); 
//console.log(setOne);
return searchResult;
//console.log(searchResult);

}

module.exports = searchByKeyword;