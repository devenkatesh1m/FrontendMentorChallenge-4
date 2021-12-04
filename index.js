function selectQuestion(element) {
   
    if (element.className.split(/\s+/).indexOf("question-select") > -1) {
        $(".question").removeClass("question-select");
        $(".answer").removeClass("answer-show");
        $(".arrow").removeClass("arrow-up");
    }
    else{
        $(".question").removeClass("question-select");
        $(".answer").removeClass("answer-show");
        $(".arrow").removeClass("arrow-up");
        $(element).toggleClass('question-select');
        $(element).children("div").toggleClass('answer-show');
        $(element).children("span").toggleClass('arrow-up');
    }
    
}