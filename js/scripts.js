function Pizza(size, meat) {
  this.size = size;
  this.meat = meat;
  this.price = ""
}

Pizza.prototype.pizzaPrice = function() {
  return this.size + this.meat;
}



$(document).ready(function(){
    $("form#pizzaOrder").submit(function(event){
        event.preventDefault();


        let size = parseInt($("#size").val());
        var meats = [];
        $("#meatToppings input:checked").each(function (i){
          meats[i] = $(this).val();
        });

        let meatsTotal = 0;

        $.each(meats, function(){meatsTotal+=parseInt(this) || 0;});
        
        let newPizza = new Pizza(size, meatsTotal);
        console.log(meatsTotal);
        $("#result").show();
        $("#order").text(newPizza.pizzaPrice());
    });
  });