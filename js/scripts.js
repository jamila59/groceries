$(document).ready(function(){
  $("#formOne").submit(function(event){
    event.preventDefault();
    var listValue = $("input#list").val();
    var upper = listValue.toUpperCase();
    printList.push(upper);
    printList.sort();

    $("ul#finishedList").text(printList);

  });
});

var printList = [];
var printList = [];
