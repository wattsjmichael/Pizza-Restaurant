function Pizza(size, meat, veggie, addon) {
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
        let meat = [];
        $("#meat input:checked").each(function (i){
          meat[i] = $(this).val();
        });
        console.log(this.size)

        let meatTotal = 0;

        $.each(meat, function(){meatTotal+=parseInt(this) || 0;})

        let newPizza = newPizza(size, meat);
        
        $("#result").show();
        $("#order").text(newPizza.pizzaPrice());
    });
  });