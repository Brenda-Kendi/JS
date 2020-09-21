console.log("Javascript notes")
//DOM Document Object Model

//for one line
//var ps=document.querySelector("p");
//ps.textContent="Mombasa";

//for an array
//var ps=document.querySelectorAll("p");
//ps.forEach(function(p) {
 //   p.textContent="#####";
//})
   
var notes=[{
    title:'my next trip',
    body:'would like to visit France'
}, {
    title:'Habits to work on',
    body:'exercise and drinking water'
}, {
    title:'Design house',
    body:'See some blueprints'
}]
var filters={
    searchText:"",
};
var renderNotes=function (notesData,filtersData){
    var filteredNotes=notesData.filter(function(note){
        return note.title
        .toLowerCase()
        .includes(filtersData.searchText.toLowerCase());
    })

document.querySelector("#notes").innerHTML="";

filteredNotes.forEach(function(note){
    var noteEl=document.createElement("p");
    noteEl.textContent=note.title;
    document.querySelector("#notes").appendChild(noteEl)

})
}
renderNotes(notes,filters)

//adding a new eleent
//var newParagraph=document.createElement("p");
//newParagraph.textContent="Java";
//document.querySelector("body").appendChild(newParagraph);

document.querySelector("button").addEventListener("click", function(evt)
{
    evt.target.textContent="new notes";
})
//removing elements
document.querySelector("#remove-all").addEventListener("click",function(){
    document.querySelectorAll('.note').forEach(function(note){
        note.remove()
    })
})
document
.querySelector("#create-text")
.addEventListener("input",function(evt){
    console.log(evt.target.value);
});
