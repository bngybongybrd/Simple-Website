function addItem(){
    var ul = document.getElementById("names");
    var candidate = document.getElementById("friendinput");
    var li = document.createElement("li");
    li.setAttribute('id',candidate.value);
    li.appendChild(document.createTextNode(candidate.value));
    ul.appendChild(li);
}