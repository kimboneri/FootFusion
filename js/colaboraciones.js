const buttonAdidas1 = document.getElementById("adidas1");
const buttonPuma1 = document.getElementById("puma1");
const buttonNike1 = document.getElementById("nike1");
const buttonJordan1 = document.getElementById("jordan1");
const colaboracionesContent = document.getElementById("colaboraciones-content");

buttonAdidas1.addEventListener("click", () => {
  colaboracionesContent.innerHTML = `<swiper-container class="mySwiper" pagination="true" pagination-clickable="true" navigation="true"
              slides-per-view="3" space-between="30">
               <swiper-slide class="slide2"><img
                            src="img/colaboraciones/adidas/adidas-x-Pharrell-Williams-x-Tennis-Hu-Linen-Green-Youth-Photoroom.png"
                            alt="adidas"></swiper-slide>
                    <swiper-slide class="slide2"><img src="img/colaboraciones/adidas/img01 (2)-Photoroom.png"
                            alt="adidas"></swiper-slide>
                    <swiper-slide class="slide2"><img src="img/colaboraciones/adidas/img01 (40)-Photoroom.png"
                            alt="adidas"></swiper-slide>
                    <swiper-slide class="slide2"><img src="img/colaboraciones/adidas/img01 (41)-Photoroom.png"
                            alt="adidas"></swiper-slide>
                    <swiper-slide class="slide2"><img src="img/colaboraciones/adidas/img01-_42_-Photoroom.png"
                            alt="adidas"></swiper-slide>
                    <swiper-slide class="slide2"><img src="img/colaboraciones/adidas/img01-Photoroom.png"
                            alt="adidas"></swiper-slide>

          </swiper-container>`;
});

buttonJordan1.addEventListener("click", () => {
  colaboracionesContent.innerHTML = `<swiper-container class="mySwiper" pagination="true" pagination-clickable="true" navigation="true"
      slides-per-view="3" space-between="30">
      
      <swiper-slide class="slide2"><img
                            src="img/colaboraciones/jordan/Air-Jordan-1-High-OG-SP-fragment-design-x-Travis-Scott-Product-Photoroom.png"
                            alt="jordan"></swiper-slide>
                    <swiper-slide class="slide2"><img
                            src="img/colaboraciones/jordan/dior-x-air-jordan-1-high-dior-SNEAKERS-1-removebg-preview.png"
                            alt="jordan"></swiper-slide>
                    <swiper-slide class="slide2"><img src="img/colaboraciones/jordan/img01 (1)-Photoroom.png"
                            alt="jordan"></swiper-slide>
                    <swiper-slide class="slide2"><img src="img/colaboraciones/jordan/img01-_43_-Photoroom.png"></swiper-slide>
      
  
  </swiper-container>`;
});
buttonPuma1.addEventListener("click", () => {
  colaboracionesContent.innerHTML = `<swiper-container class="mySwiper" pagination="true" pagination-clickable="true" navigation="true"
      slides-per-view="3" space-between="30">
      
      <swiper-slide class="slide2"><img
                            src="img/colaboraciones/pumas/img01 (3)-Photoroom.png"
                            alt="puma"></swiper-slide>
                    <swiper-slide class="slide2"><img
                            src="img/colaboraciones/pumas/Puma-Cell-Venom-Bait-x-Marvel-Venom-Regular-Box-Photoroom (1).png"
                            alt="puma"></swiper-slide>
                    <swiper-slide class="slide2"><img src="img/colaboraciones/pumas/Puma-Street-Climb-III-Mid-Alexander-McQueen-Dark-Green-Photoroom.png"
                            alt="puma"></swiper-slide>
                            <swiper-slide class="slide2"><img src="img/colaboraciones/pumas/img01 (3)-Photoroom.png"
                            alt="pumas-mario-bros"></swiper-slide>
              
  
  </swiper-container>`;
});
buttonNike1.addEventListener("click", () => {
  colaboracionesContent.innerHTML = `<swiper-container class="mySwiper" pagination="true" pagination-clickable="true" navigation="true"
      slides-per-view="3" space-between="30">
      
     <swiper-slide class="slide2"><img src="img/colaboraciones/nike/img01-_44_-Photoroom.png"
                            alt="nike"></swiper-slide>
                    <swiper-slide class="slide2"><img
                            src="img/colaboraciones/nike/Nike-Air-Yeezy-2-NRG-Pure-Platinum-Product-Photoroom.png"
                            alt="nike"></swiper-slide>
                    <swiper-slide class="slide2"><img
                            src="img/colaboraciones/nike/tenis Air Force 1 de Nike x Louis Vuitton.png"
                            alt="nike"></swiper-slide>
                    <swiper-slide class="slide2"><img src="img/colaboraciones/nike/VaporWaffle de Nike x Sacai.png"
                            alt="nike"></swiper-slide>
                    <swiper-slide class="slide2"><img
                            src="img/colaboraciones/nike/Zapatillas para juniors PUMA x PLAYSTATION.png"></swiper-slide>
      
  </swiper-container>`;
});
