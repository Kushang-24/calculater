var clear = false;
var result = "";
var calc = "";

$(document).ready(function() {
  $("button").click(function() {
    var text = $(this).attr("value");
    if (parseInt(text, 10) == text ||
                      text === "%" ||
                      text === "/" ||
                      text === "*" ||
                      text === "-" ||
                      text === "+" ||
                      text === ".") {
      if (clear === false) {
        calc += text;
        $(".textBtn").val(calc);
      } else {
        calc = text;
        $(".textBtn").val(calc);
        clear = false;
      }
    }
    switch (text) {
      case "C":
        calc = "";
        $(".textBtn").val("");
        break;
      case "CE":
        calc = calc.slice(0, -1);
        $(".textBtn").val(calc);
        break;
      case "=":
        result = eval(calc);
        $(".textBtn").val(result);
        clear = true;
        break;
      case "+/-":
        if (clear === false) {
          calc = calc * -1;
          $(".textBtn").val(calc);
        } else {
          result = result * -1;
          $(".textBtn").val(result);
        }
        break;
    }
  });
});