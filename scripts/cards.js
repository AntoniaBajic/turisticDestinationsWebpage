  $(document).ready(function(){
    const cards = [{
    cardImageUrl: "images1/Firenca.jpg",
    cardTitle: "Firenca",
    cardText: "more",
  }, {
    cardImageUrl: "images1/santorini.jpg",
    cardTitle: "santorini",
    cardText: "more",
  },{
    cardImageUrl: "images1/Maldivi-male.jpg",
    cardTitle: "Maldivi",
    cardText: "more",
         
  },{
    cardImageUrl: "images1/Sydney.jpg",
    cardTitle: "Sydney",
    cardText: "more",
     
  }];
  
  function createAndInsertCard(card){
    const cardTemplate = $("#card-template").text();
    const cardHTML =Mustache.render(cardTemplate, card);

    
    $(".bottom-container").append(cardHTML);
  }
  cards.forEach(card => createAndInsertCard(card));
  
    $(".bottom-container").on("click", ".card .thumbnail .delete-button", (e) => {
    const deleteButton = e.currentTarget;
    if(confirm("Delete?")){
      const $card = $(deleteButton).parent(".thumbnail");
      $card.fadeOut(() => $card.remove());
    }
  });
  
    
  $("#add-image").on("click", e => {
    const imageUrl= prompt("Unesi put do slike", "images1/Firenca.jpg");
    if(!imageUrl) {return;}
    
    const title = prompt("Unesi naslov", "Naslov");
    if(!title) { return; }
    
    const text = prompt("Unesi opis", "Opis");
    if(!text) { return; }
    
    createAndInsertCard({
      cardImageUrl: imageUrl,
      cardTitle: title,
      cardText: text
    });
    
  });
    
  });