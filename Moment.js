$("button").on("click",function(){
var  itemid = $(this).attr("id");       // This is the local scope. 
var id = itemid.split("-")[0];  // We are splitting into two different categories. Basically two characters. 
var userdata = $("#" +id+"-input").val();
localStorage.setItem(id, userdata)  //This is going to save it in the local storage. 
console.log(itemid,id,userdata);
})

    for (var i = 9; i < 18; i++) {
        $("#"+i+"-input").val(localStorage.getItem(i))  // getitem reads value from the local storage. 
        var currentTime = moment().hours()
        if ( i < currentTime) {
            $("#"+i+"-row").addClass("past")
        }
        else if (i === currentTime) {
            $("#"+i+"-row").addClass("present")
        }
        else {
            $("#"+i+"-row").addClass("future")      // The else option is used only for brackets. It is the last option. 
        }

    }

$("#currentDay").text(moment().format('LLLL'));     // This is the p tag from line 29 in the HTML.

