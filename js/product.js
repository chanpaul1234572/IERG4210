jQuery(document).ready(function() {
    $("#breadcrumbs").rcrumbs({nbUncollapsableCrumbs: 3});
    
    $( "#p1 .addtocart" ).click(function() {
        let value = parseInt($('#p1 h2.price').text().slice(8));
        let item = $('.section h1').text();
        if ($('#cart_1').length === 0) {
            var message = "<a href='#' id='cart_1'><p class='product'>" + item + "x 1 $"+ value + "</p><div>No:<input type='text' class='value'></div><div><input type='submit' value='Sumbit' class='value'></div></a>";
            $(".dropdown-content a").last().before(message);
        }
    });
    
    $(".dropdown-content").on('click','#cart_1 input[type=submit].value',function(){
        let value = parseInt($('#p1 h2.price').text().slice(8));
        let item = $('.section h1').text();
        let no = $("#cart_1 input[type=text].value").val();
        var price = no * value;
        var message = "<a href='#' id='cart_1'><p class='product'>" + item + " x" + no + " $ " + price + "</p><div>No:<input type='text' class='value'></div><div><input type='submit' value='Sumbit' class='value'></div></a>";
        $("#cart_1").replaceWith(message);
    });

    $( "#p2 .addtocart" ).click(function() {
        let value = parseInt($('#p2 h2.price').text().slice(8));
        let item = $('.section h1').text();
        if ($('#cart_2').length === 0) {
            var message = "<a href='#' id='cart_2'><p class='product'>" + item + "x 1 $"+ value + "</p><div>No:<input type='text' class='value'></div><div><input type='submit' value='Sumbit' class='value'></div></a>";
            $(".dropdown-content a").last().before(message);
        }
    });
    
    $(".dropdown-content").on('click','#cart_2 input[type=submit].value',function(){
        let value = parseInt($('#p2 h2.price').text().slice(8));
        let item = $('.section h1').text();
        let no = $("#cart_2 input[type=text].value").val();
        var price = no * value;
        var message = "<a href='#' id='cart_2'><p class='product'>" + item + " x" + no + " $ " + price + "</p><div>No:<input type='text' class='value'></div><div><input type='submit' value='Sumbit' class='value'></div></a>";
        $("#cart_2").replaceWith(message);
    });

    $( "#p3 .addtocart" ).click(function() {
        let value = parseInt($('#p3 h2.price').text().slice(8));
        let item = $('.section h1').text();
        if ($('#cart_3').length === 0) {
            var message = "<a href='#' id='cart_3'><p class='product'>" + item + "x 1 $"+ value + "</p><div>No:<input type='text' class='value'></div><div><input type='submit' value='Sumbit' class='value'></div></a>";
            $(".dropdown-content a").last().before(message);
        }
    });
    
    $(".dropdown-content").on('click','#cart_3 input[type=submit].value',function(){
        let value = parseInt($('#p3 h2.price').text().slice(8));
        let item = $('.section h1').text();
        let no = $("#cart_3 input[type=text].value").val();
        var price = no * value;
        var message = "<a href='#' id='cart_3'><p class='product'>" + item + " x" + no + " $ " + price + "</p><div>No:<input type='text' class='value'></div><div><input type='submit' value='Sumbit' class='value'></div></a>";
        $("#cart_3").replaceWith(message);
    });

    $( "#p4 .addtocart" ).click(function() {
        let value = parseInt($('#p4 h2.price').text().slice(8));
        let item = $('.section h1').text();
        if ($('#cart_4').length === 0) {
            var message = "<a href='#' id='cart_4'><p class='product'>" + item + "x 1 $"+ value + "</p><div>No:<input type='text' class='value'></div><div><input type='submit' value='Sumbit' class='value'></div></a>";
            $(".dropdown-content a").last().before(message);
        }
    });
    
    $(".dropdown-content").on('click','#cart_4 input[type=submit].value',function(){
        let value = parseInt($('#p4 h2.price').text().slice(8));
        let item = $('.section h1').text();
        let no = $("#cart_4 input[type=text].value").val();
        var price = no * value;
        var message = "<a href='#' id='cart_4'><p class='product'>" + item + " x" + no + " $ " + price + "</p><div>No:<input type='text' class='value'></div><div><input type='submit' value='Sumbit' class='value'></div></a>";
        $("#cart_4").replaceWith(message);
    });

    $( "#p5 .addtocart" ).click(function() {
        let value = parseInt($('#p5 h2.price').text().slice(8));
        let item = $('.section h1').text();
        if ($('#cart_5').length === 0) {
            var message = "<a href='#' id='cart_5'><p class='product'>" + item + "x 1 $"+ value + "</p><div>No:<input type='text' class='value'></div><div><input type='submit' value='Sumbit' class='value'></div></a>";
            $(".dropdown-content a").last().before(message);
        }
    });
    
    $(".dropdown-content").on('click','#cart_5 input[type=submit].value',function(){
        let value = parseInt($('#p5 h2.price').text().slice(8));
        let item = $('.section h1').text();
        let no = $("#cart_5 input[type=text].value").val();
        var price = no * value;
        var message = "<a href='#' id='cart_5'><p class='product'>" + item + " x" + no + " $ " + price + "</p><div>No:<input type='text' class='value'></div><div><input type='submit' value='Sumbit' class='value'></div></a>";
        $("#cart_5").replaceWith(message);
    });

    $( "#p6 .addtocart" ).click(function() {
        let value = parseInt($('#p6 h2.price').text().slice(8));
        let item = $('.section h1').text();
        if ($('#cart_6').length === 0) {
            var message = "<a href='#' id='cart_6'><p class='product'>" + item + "x 1 $"+ value + "</p><div>No:<input type='text' class='value'></div><div><input type='submit' value='Sumbit' class='value'></div></a>";
            $(".dropdown-content a").last().before(message);
        }
    });
    
    $(".dropdown-content").on('click','#cart_6 input[type=submit].value',function(){
        let value = parseInt($('#p6 h2.price').text().slice(8));
        let item = $('.section h1').text();
        let no = $("#cart_6 input[type=text].value").val();
        var price = no * value;
        var message = "<a href='#' id='cart_6'><p class='product'>" + item + " x" + no + " $ " + price + "</p><div>No:<input type='text' class='value'></div><div><input type='submit' value='Sumbit' class='value'></div></a>";
        $("#cart_6").replaceWith(message);
    });
});
