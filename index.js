var count = 0;
$(".btn-success").click(function () {
    count = count + 1;
    $("p").text(count);
    color();

});

$(".btn-danger").click(function () {
    count--;
    $("p").text(count);
    color();

});

$(".btn-secondary").click(function () {
    count = 0;
    $("p").text(count);
    color();

});


function color() {
    if (count < 0) {
        $("p").removeClass();
        $("p").addClass("red");
    }
    else if (count > 0) {
        $("p").removeClass();
        $("p").addClass("green");
    }
    else {
        $("p").removeClass();
        $("p").addClass("black");

    }

}