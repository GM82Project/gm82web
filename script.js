//add tab buttons for each tab div
const tab_divs = document.getElementsByClassName("tabdiv");
const tab_bar = document.getElementById("Tabs");
for (let i = 0; i < tab_divs.length; i++) {
    var button = document.createElement("button");
    button.className="tab";
    button.onclick=function(){select_tab(this);};
    button.innerHTML='<img class="buticon" src="images/tabs_'+tab_divs[i].id+'.png"/>'+tab_divs[i].id;
    tab_bar.appendChild(button);
}        
const tab_buttons = document.getElementsByClassName("tab");            
        
        
//focus initial tab
const focustab = decodeURI(window.location.hash);        
if (focustab) {        
    for (let i = 0; i < tab_buttons.length; i++) {
        if ("#"+tab_buttons[i].innerText == focustab) {select_tab(tab_buttons[i]); break;}
    }
} else select_tab(tab_buttons[0]);


//tab switch function
function select_tab(self) {
    window.location.hash = "#"+self.innerText;
    var last = (document.getElementsByClassName("activetab"))[0];
    if (last) last.className="tab";
    self.className="activetab";
    for (let i = 0; i < tab_divs.length; i++) {
        if (tab_divs[i].id == self.innerText) tab_divs[i].style.display = "block";
        else tab_divs[i].style.display = "none";
    }
}


//button links
function new_tab(url){
    var link=document.createElement('a');
    Object.assign(link,{target:'_blank',href:url}).click();
    link.remove();
}


//documentation buttons
const doc_iframe = document.getElementById("documentation");
function doc_back() {
    window.history.back();
}
function doc_fwd() {
    window.history.forward();
}
function doc_home() {
    doc_iframe.src=doc_iframe.src;
}