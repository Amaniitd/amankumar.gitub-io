$(function () {
    count = 0;
    wordsArray = ["a weeb", "a human (I guess so!)", "a programmer"];
    setInterval(function () {
        count++;
        $("#word").fadeOut(500, function () {
            $(this).text(wordsArray[count % wordsArray.length]).fadeIn(500);
        });
    }, 2000);
});