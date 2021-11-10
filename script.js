function inputlist(){
var inp=document.getElementById("inputbox").value;
var text=document.createTextNode(inp)
var newitem=document.createElement("li")
newitem.appendChild(text)
document.getElementById("list").appendChild(newitem)

var time=new Date()
var month=time.getUTCMonth()
document.getElementById("day").appendChild(month)


}

