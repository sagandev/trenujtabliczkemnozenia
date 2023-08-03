let sec = 10;
let random;
const stats = {
    correct: 0,
    incorrect: 0
}
function genRandom(){
    const r1 = Math.floor(Math.random() * 10)+1;
    const r2 = Math.floor(Math.random() * 10)+1; 
    
    return [r1, r2, r1 * r2];
}
function nextQuest(){
    random = genRandom();
    $("#quest").text(`${random[0]} \u2715 ${random[1]}`); 
    sec = 10;
}
function correct(){
    stats.correct += 1;
    $("#correct").text(stats.correct);
}
function incorrect(){
    stats.incorrect+= 1;
    $("#incorrect").text(stats.incorrect);
}
function check(){
    const result = parseInt($("#result").val());
    if(result === random[2]){
        correct();
        nextQuest();
    } else {
        incorrect();
    }
}
$(document).ready(function (){
    random = genRandom();
    $("#quest").text(`${random[0]} \u2715 ${random[1]}`);
    const interval = setInterval(function(){
        if(sec === 0){
            incorrect();
            nextQuest();
        }
        $("#timer").text(`0:${sec}`);
        sec -= 1;
    }, 1000)
    $("#checkResult").click(function(e) {
        check();
    })
    $("#result").keypress(function(e) {
        if(e.which == 13){
            check();
        }
    })
})
