function show() {
    var state = document.getElementById("show_btn").value;
    if(state == "Show")
    {
        document.getElementById("show_box").style.display = "block"
        document.getElementById("show_btn").value = "Hide"
    }
    else
    {
        document.getElementById("show_box").style.display = "None"
        document.getElementById("show_btn").value = "Show"
    }
    
}