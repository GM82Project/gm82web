//add tab buttons for each tab div
const tab_divs = document.getElementsByClassName("tabdiv");
const tab_bar = document.getElementById("Tabs");
for (let i = 0; i < tab_divs.length; i++) {
    var button = document.createElement("a");
    button.className="button tab";
	button.href="#"+tab_divs[i].id;
    button.onclick=function(){select_tab(this);};
    button.draggable=false;
    button.innerHTML='<img class="buticon" src="images/tabs_'+tab_divs[i].id+'.png" draggable="false"/>'+tab_divs[i].id;
    tab_bar.appendChild(button);    
    var span = document.createElement("span");
    span.style="width:0px;display:inline-block;"
    span.innerHTML=" ";
    tab_bar.appendChild(span);    
}        
const tab_buttons = document.getElementsByClassName("tab");            
        

//focus initial tab
function focus_tab() {
    const focustab = decodeURI(window.location.hash);        
    if (focustab) {        
        for (let i = 0; i < tab_buttons.length; i++) {
            if ("#"+tab_buttons[i].innerText == focustab) {select_tab(tab_buttons[i]); break;}
        }
    } else select_tab(tab_buttons[0]);
}
focus_tab();

//tab switch function
function select_tab(self) {
    window.location.hash = "#"+self.innerText;
    var last = (document.getElementsByClassName("activetab"))[0];
    if (last) last.className="button tab";
    self.className="button activetab";
    for (let i = 0; i < tab_divs.length; i++) {
        if (tab_divs[i].id == self.innerText) tab_divs[i].style.display = "block";
        else tab_divs[i].style.display = "none";
    }
}


//detect navigation and update tab
window.onhashchange = function() { 
    focus_tab();
};
