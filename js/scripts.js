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
        let meats = [];
        $("#meat input:checked").each(function (i){
          meats[i] = $(this).val();
        });
        console.log(this.size)

        let meatsTotal = 0;

        $.each(meats, function(){meatsTotal+=parseInt(this) || 0;});
        let newPizza = new Pizza(size, meatsTotal);
        console.log(Pizza);
        $("#result").show();
        $("#order").text(newPizza.pizzaPrice());
    });
  });