/* Author:

*/

function select(id) {
    $("ul.tabbed > li").each(function (index) {
        if (this.attributes['id'].value == id)
            this.attributes["class"].value = "current-tab";
        else
            this.attributes["class"].value = "";
    })
}
function selectVideo(url) {
    $("iframe")[0].attributes["src"].value = url;
 
}



