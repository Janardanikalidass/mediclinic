
$(document).ready(function(){
    $('.ham-menu').click (function(){
        $(this).toggleClass('open');
        $(".nav-wrapper").toggleClass('open')
      });

    $('.filter-here').click(function(){
      $(".leftsection-filter").toggleClass('open');
    
    })
    $(".cross-icon ").click(function(){
      $(".leftsection-filter").removeClass('open')
    })
    $("#datepicker").datepicker({ 
      autoclose: true, 
      todayHighlight: true,
  }).datepicker('update', new Date());
})


/* ------------ opt js start---------- */
document.addEventListener("DOMContentLoaded", function(event) {
  function OTPInput() {
  const inputs = document.querySelectorAll('#otp > *[id]');
  for (let i = 0; i < inputs.length; i++) 
  { inputs[i].addEventListener('keydown', function(event) 
      { if (event.key==="Backspace" ) 
          {  inputs[i].value='' ;
               if (i !==0) inputs[i - 1].focus(); } 
              else { 
                  if (i===inputs.length - 1 && inputs[i].value !=='' ) 
                  { return true; }
                   else if (event.keyCode> 47 && event.keyCode < 58) 
                   { inputs[i].value=event.key; 
                      if (i !==inputs.length - 1) {inputs[i + 1].focus(); event.preventDefault(); }
                  } else if (event.keyCode> 64 && event.keyCode < 91) 
                  { inputs[i].value=String.fromCharCode(event.keyCode); 
                    if (i !==inputs.length - 1) {inputs[i + 1].focus(); event.preventDefault(); }} } }); } } 
                  OTPInput();});
/* ------------ opt js end---------- */


var dates = [];
$(document).ready(function() {
  $("#cal").daterangepicker();
  $("#cal").on('apply.daterangepicker', function(e, picker) {
    e.preventDefault();
    const obj = {
      "key": dates.length + 1,
      "start": picker.startDate.format('MM/DD/YYYY'),
      "end": picker.endDate.format('MM/DD/YYYY')
    }
    dates.push(obj);
    showDates();
  })
  $(".remove").on('click', function() {
    removeDate($(this).attr('key'));
  })
})
function showDates() {
  $("#ranges").html("");
  $.each(dates, function() {
    const el = "<li>" + this.start + "-" + this.end + "<button class='remove' onClick='removeDate(" + this.key + ")'>-</button></li>";
    $("#ranges").append(el);
  })
}
function removeDate(i) {
  dates = dates.filter(function(o) {
    return o.key !== i;
  })
  showDates();
}