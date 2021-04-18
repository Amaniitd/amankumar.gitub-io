$(function () {
    count = 0;
    wordsArray = ["a developer", "a human (I guess)", "a programmer"];
    setInterval(function () {
        count++;
        $("#word").fadeOut(500, function () {
            $(this).text(wordsArray[count % wordsArray.length]).fadeIn(500);
        });
    }, 2000);
});