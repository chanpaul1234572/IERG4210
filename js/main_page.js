jQuery(document).ready(function() {
    $("#breadcrumbs").rcrumbs({nbUncollapsableCrumbs: 3});
    $( "#p1" ).click(function() {
        let x = $("#product1").text();
        //console.log(x);
        $(".drop .dropdown .dropdown-content a").last().before("<a id='item1'>item1</a>");
      });
    let row = $(".table li").length;
    let output_messgae = "<p class='clear'>Total: " + row + " items</p>"
    $(".table").append(output_messgae);

});
