const sliderItems = [{
    title: "Sydney",
    text: ` Sydney Australia is one of the world’s most loved cities and
            it has a lively and vibrant buzz that makes it the ultimate destinationthroughout the year.
            There are always plenty of things to do in Sydney whether it's summer, winter,
            autumn or spring – from world-class dining, shows and entertainment,
            to sightseeing and great walks or fun in the sand at one of Sydney's idyllic beaches.`,
    imageUrl: "images1/Sydney.jpg",
    grade: 1
  },
  {
    title: "Firenca",
    text: ` Firenca, renesansni dragulj u srcu Italije. Najpoznatija po 
            svojoj čuvenoj katedrali, Duomo, njenoj kupoli te plemićkoj obitelji Medici.
            No, malo ljudi zna da je ta ista katedrala među deset najduljih crkava u Europi, 
            da je Firenca još sredinom 14. stoljeća postala prvi grad na svijetu s popločanim 
            ulicama te da je neko vrijeme bila i prijestolnica Kraljevine Italije.`,
    imageUrl: "images1/Firenca.jpg",
    grade: 2
  },
  {
    title: "Santorini",
    text: ` Grčka, zemlja drevnih bogova, prirodnih ljepota i bogate povijesti,
            koja nam je, između ostalog, podarila i demokraciju, 'darovala' nam je i svoje brojne otoke.
            Na stotine njih razasutih od Jonskog do Egejskog mora, svake godine privlače milijune turista,
            a najprivlačniji među njima svakako su oni iz skupine Ciklada (Kykladhes) - 
            Ios, Mykonos, Naxos i Santorini.`,
    imageUrl: "images1/santorini.jpg",
    grade: 3
  },
  {
    title: "Maldivi",
    text: ` Malé je glavni grad otočne republike Maldivi u Indijskom oceanu. 
            Grad pokriva cijelu površinu otoka Malé smještenog u atolu Kaafu, 
            iako se unatoč tom zemljopisnom položaju u administrativnom smislu 
            ne smatra dijelom atola.`,
    imageUrl: "images1/Maldivi-male.jpg",
    grade: 4
  }
];

let sliderItemIndex = 0;

showSliderItem(sliderItems[0]);

function showSliderItem(sliderItem){
  $(".slider-title").text(sliderItem.title);
  $(".slider-text").text(sliderItem.text);
  $(".destination-image").attr("src", sliderItem.imageUrl);
  showGradeThroughStars(sliderItem.grade);
}


 showSliderItem(sliderItems[sliderItemIndex]);

$(".left-column").on("click",".button", (e) => {
    const button = e.currentTarget;
    const $oldText = $(button).parent(".left-column");
    const newText = prompt("Enter text", "Text");
    if(newText){
      $(".slider-text").text(newText);
      sliderItems[sliderItemIndex].text = newText;
    }
  });
  
  



const rightArrow = document.querySelector("#slider-go-right");

rightArrow.addEventListener("click", handleArrowClick);

function handleArrowClick(){
  sliderItemIndex++;
  if(sliderItemIndex >= sliderItems.length){
      sliderItemIndex = 0;
  }
  
  showSliderItem(sliderItems[sliderItemIndex]);
}
  
const leftArrow = document.querySelector("#slider-go-left");

leftArrow.addEventListener("click", function(){
  sliderItemIndex--;
  if(sliderItemIndex < 0)
    {sliderItemIndex = sliderItems.length - 1;}
  showSliderItem(sliderItems[sliderItemIndex]);
});


$(".right-column").on("click", ".star", function(e){
  const $stars = $(".starImage-container .star");
  const $clickedStar = $(e.target);
  const clickedOnIndex = $stars.index($clickedStar);
  
  sliderItems[sliderItemIndex].grade = clickedOnIndex + 1;
  
  showGradeThroughStars(clickedOnIndex + 1);
  
  //spremi novu ocjenu na server
});

function showGradeThroughStars(grade) {
  const $stars = $(".starImage-container .star");
  $stars.removeClass("selected");
  
  for(let i = 0; i < grade; i++) {
    $stars.eq(i).addClass("selected");
  }
}

 
  
  
  
  
