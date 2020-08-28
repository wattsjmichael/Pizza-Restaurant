function Pizza(size, meat, vegetable, quantity) {
  this.size = size;
  this.meat = meat;
  this.vegetable = vegetable;
  this.quantity = quantity;
  this.price = "";
  
}

Pizza.prototype.pizzaPrice = function() {
  return (this.size + this.meat + this.vegetable) * (this.quantity);
}





$(document).ready(function(){
    $("form#pizzaOrder").submit(function(event){
        event.preventDefault();

        //animation logic
        $("#don").animateSprite({
          fps: 12,
          animations: {
            move: [0, 1,]
          },
          loop: true,
          
        });

        let size = parseInt($("input:radio[name=size]:checked").val());
        
        //Meat Logic
        var meats = [];
        $("#meatToppings input:checked").each(function (i){
          meats[i] = $(this).val();
        });
        let meatsTotal = 0;
        $.each(meats, function(){meatsTotal+=parseInt(this) || 0;});
        
        //Vegetable Logic
        var vegetables= [];
        $("#vegetableToppings input:checked").each(function(i){
          vegetables[i] = $(this).val();
        });
        let vegetablesTotal = 0;
        $.each(vegetables, function(){vegetablesTotal+=parseInt(this) || 0;})
        
        //Quantity Logic
        let quantity = parseInt($("#quantity").val());
        console.log(quantity);
        



        //Pizza Logic
        let newPizza = new Pizza(size, meatsTotal, vegetablesTotal, quantity);
        $("#don").show();
        $("#result").show();
        $("#order").text(newPizza.pizzaPrice());
    });
  });