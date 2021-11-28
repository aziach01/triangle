
function afficher()
{
    var inputVal = document.getElementById("myInput").value;
    let n=inputVal;
    for(let line="#";line.length==n;line+="#")
    {
        document.getElementById("result").innerHTML = line;
    }
}



