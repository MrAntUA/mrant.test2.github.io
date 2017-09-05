jQuery(document).ready(function ($) {
    //triangle effect
    var thisElementClick;
    $('#rowsRadioShip3 label').click(function () {
        thisElementClick = this;
        var thisElement = $(thisElementClick.getElementsByClassName('label-container'));
        var thisElementLeft = thisElement[0].parentElement.parentElement.offsetLeft;
        var thisElementWidth = thisElement[0].parentElement.parentElement.clientWidth;
        var positionTriangle = thisElementLeft + (thisElementWidth / 2);

        function navTriangle() {
            thisElementLeft = thisElement[0].parentElement.parentElement.offsetLeft;
            thisElementWidth = thisElement[0].parentElement.parentElement.clientWidth;
            positionTriangle = thisElementLeft + (thisElementWidth / 2);
            $('.effects-block .effect-triangle').css({
                'display': 'block',
                'left': positionTriangle - 40 + 'px'
            });
        }

        navTriangle();
        addEventListener('resize', navTriangle, false);
    });

    //tour information toggle switch
    // window.toggleBlock = function (p) {
    //     console.log(p);
    //     var galery = $('.galery');
    //     $(galery).hide();
    //     $(galery[p]).show();
    // };


      // $('.select-form-jq select').styler();
      // $('.select-form-jq input').styler();




    // var changeCountryInput = function () {
    //     var countryInput = $('.bfh-selectbox input')[0];
    //     var countryInputValue = countryInput.value;
    //     console.log(countryInputValue);
    // };
    // setInterval(function () {
    //     changeCountryInput()
    // }, 1000);
});
