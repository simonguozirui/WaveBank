$(document).ready(function(){

  var save = function(filename, data) {
      var blob = new Blob([data], {type: 'text/csv'});
      if(window.navigator.msSaveOrOpenBlob) {
          window.navigator.msSaveBlob(blob, filename);
      }
      else{
          var elem = window.document.createElement('a');
          elem.href = window.URL.createObjectURL(blob);
          elem.download = filename;
          document.body.appendChild(elem);
          elem.click();
          document.body.removeChild(elem);
      }
  }
  $("#csvbutton").on("click",function(){
    var month1 = $("#month1").val()-1;
    var day1 = $("#day1").val();
    var year1 = $("#year1").val();
    var theDate1 = new Date(year1,month1,day1).getTime() / 1000;

    var month2 = $("#month2").val()-1;
    var day2 = $("#day2").val();
    var year2 = $("#year2").val();
    var theDate2 = new Date(year2,month2,day2).getTime() / 1000;
    $.ajax({
      url: "https://muse.1lab.me/data?date1="+ theDate1 + "&date2="+theDate2,
      success: function(result){
        var res = result.data;
        var datastring = "id,timestamp,eeg1,eeg2,eeg3,eeg4,aux_left,aux_right,objects\n"
        for(var i = 0 ; i < res.length;i++){
          var cur = res[i];
          datastring+=cur[0]+","+cur[1]+","+cur[2]+","+cur[3]+","+cur[4]+","+cur[5]+","+cur[6]+","+cur[7]+","+cur[8]+"\n";
        }
        save("eeg_data_from_"+theDate1+"_to_"+theDate2+".csv",datastring);
      }
    });
  });
})
