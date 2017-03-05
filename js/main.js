$(document).ready(function(){
  $("#csvbutton").on("click",function(){
    var month1 = $("#month1").val()-1;
    var day1 = $("#day1").val();
    var year1 = $("#year1").val();
    var theDate1 = new Date(year1,month1,day1).getTime() / 1000;

    var month2 = $("#month2").val()-1;
    var day2 = $("#day2").val();
    var year2 = $("#year2").val();
    var theDate2 = new Date(year2,month2,day2).getTime() / 1000;
//query
    $.ajax({
        url: "138.197.158.250",
        body: {
          "date1" : theDate1,
          "date2" : theDate2
        },
        success: function(result){
          console.log(JSON.parse(result));
        }
      });
    });
  })
