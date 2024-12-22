$(".more").click(function(){
  $("b").css("color","red");
  $(".col-3").css("width","16%");
  $(".col-6").css("width","32%");
  $(".main").css("width","360px");
    $(".buttonn").toggle();
    $(".more").toggle();
    $(".less").toggle();
  
});
$(".less").click(function(){
    $("b").css("color","red");
    $(".col-3").css("width","25%");
    $(".col-6").css("width","50%");
    $(".main").css("width","300px");
    $(".buttonn").toggle();
    $(".less").toggle();
    $(".more").toggle();
})
function insert(num){
var myString = document.form.textview.value;
var lastChar = myString[myString.length -1];
if(myString.length <30){
if(!isNaN(lastChar)|| lastChar==null||!isNaN(num))
{document.form.textview.value=myString+num;
}
else if(num!=lastChar){
document.form.textview.value=myString.replace(lastChar, num);
}}
}
function equal(){
    var sum=document.form.textview.value;
    if(sum){
        document.form.textview.value=eval(sum);
    }
}
function clean(){
    document.form.textview.value='';
}
function back(){
    var exp=document.form.textview.value;
    document.form.textview.value=exp.substring(0,exp.length-1);
}

 