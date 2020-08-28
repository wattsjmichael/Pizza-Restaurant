function Pizza(size, meat, veggie, addon) {
  this.size = size;
  this.meat = meat;
  this.veggie = veggie;
  this.addon = addon;
  this.price = "";
}

Pizza.prototype.pizzaPrice = function() {
  return this.size + this.meat + this.veggie + this.addon;
}



$(document).ready(function(){
    $("#pizzaOrder").submit(function(event){
        event.preventDefault();


        let size = parseInt($("#size").val());

        let newPizza = newPizza(size)
        $("#result").show();
    });
  });