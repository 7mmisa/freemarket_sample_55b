$(function(){
  $(".pic-man:first").removeClass("kumogakure")
  $(".pic-man").each(function(i, pic){
    $(pic).data('id',i)
  });

  $('.pic-gone').on('change', function (e) {
    $(this).siblings(".pic-man").addClass("kumogakure");
    $('.pic-gone').each(function(){
      if ($(this).val() == ""  ){
        $(this).siblings(".pic-man").removeClass("kumogakure")
        return false;
      }
    });
    var samer = $(this).siblings(".pic-man").data("id");
    var reader = new FileReader();
    reader.onload = function (e) {
      $(".preview-open").append(`<div class = "previews" data-id = ${samer}><img class ="open-pic" id = "same${samer}" src = ""><a class= "kill-me" href ="" >削除</a></div>`);
      if (samer == 0){
        $("#same0").attr("src", e.target.result);
      }
      else if (samer == 1){
        $("#same1").attr("src", e.target.result);
      }
      else if (samer == 2){
        $("#same2").attr("src", e.target.result);
      }
      else if (samer == 3){
        $("#same3").attr("src", e.target.result);
      }
      else {
        $("#same4").attr("src", e.target.result);
      }      
    }
    reader.readAsDataURL(e.target.files[0]);

  });
  $(document).on("click",".kill-me",  function(e){
    e.preventDefault();
    var killTarget = $(this).parent();
    var killPoint = $(killTarget).data("id");
    $(killTarget).remove();
    $(".pic-gone").each(function(){
      if ($(this).siblings(".pic-man").data("id") == killPoint) {
        $(this).val("");
        $(this).parents(".top-heigter").siblings(".top-heigter").find(".pic-man").addClass("kumogakure");
        $(this).siblings(".pic-man").removeClass("kumogakure");
      }
    });
  });
});