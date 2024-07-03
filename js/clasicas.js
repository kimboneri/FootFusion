const buttonAdidas = document.getElementById("adidas");
const buttonPuma = document.getElementById("puma");
const buttonNike = document.getElementById("nike");
const buttonJordan = document.getElementById("jordan");
const clasicaContent = document.getElementById("clasicas-content");

buttonAdidas.addEventListener("click", () => {
  clasicaContent.innerHTML = `<swiper-container class="mySwiper" pagination="true" pagination-clickable="true" navigation="true"
            slides-per-view="3" space-between="30">
              <swiper-slide class="slide2"><img
                    src="img/clasicas/adidas/adidas-Superstar-Core-Black-Cloud-White-Gold-GS-Product-Photoroom.png"
                    alt="adidas"></swiper-slide>
            <swiper-slide class="slide2"><img
                    src="img/clasicas/adidas/adidas-Yeezy-Boost-350-V2-Semi-Frozen-Yellow-Product-Photoroom.png"
                    alt="adidas"></swiper-slide>
           
                    <swiper-slide class="slide2"><img src="img/clasicas/adidas/img01 (4)-Photoroom.png"
                        alt="adidas"></swiper-slide>
                        <swiper-slide class="slide2"><img src="img/clasicas/adidas/img01 (45)-Photoroom.png"
                            alt="adidas"></swiper-slide>
            
        </swiper-container>`;
});

buttonJordan.addEventListener("click", () => {
  clasicaContent.innerHTML = `<swiper-container class="mySwiper" pagination="true" pagination-clickable="true" navigation="true"
    slides-per-view="3" space-between="30">
    
     <swiper-slide class="slide2"><img
                        src="img/clasicas/jordan/Air-Jordan-11-Retro-Cool-Grey-2021-GS-Product-Photoroom.png"
                        alt="jordan"></swiper-slide>
                <swiper-slide class="slide2"><img src="img/clasicas/jordan/img01 (46)-Photoroom.png"
                        alt="jordan"></swiper-slide>
                <swiper-slide class="slide2"><img src="img/clasicas/jordan/img01 (5)-Photoroom.png"
                        alt="jordan"></swiper-slide>
                <swiper-slide class="slide2"><img src="img/clasicas/jordan/img01 (7)-Photoroom.png"
                        alt="jordan"></swiper-slide>
    

</swiper-container>`;
});
buttonPuma.addEventListener("click", () => {
  clasicaContent.innerHTML = `<swiper-container class="mySwiper" pagination="true" pagination-clickable="true" navigation="true"
    slides-per-view="3" space-between="30">
    
     <swiper-slide class="slide2"><img src="img/clasicas/puma/img01 (47)-Photoroom.png"
                        alt="puma"></swiper-slide>
                <swiper-slide class="slide2"><img
                        src="img/clasicas/puma/Puma-Future-Rider-Twofold-Black-White-Photoroom.png"
                        alt="puma"></swiper-slide>
                <swiper-slide class="slide2"><img
                        src="img/clasicas/puma/Puma-Roma-68-Scuderia-Ferrari-Miami-Photoroom.png"
                        alt="puma"></swiper-slide>
                <swiper-slide class="slide2"><img
                        src="img/clasicas/puma/Puma-RS-Z-Outline-Outline-White-Blue-Red-Photoroom.png"
                        alt="puma"></swiper-slide>

</swiper-container>`;
});
buttonNike.addEventListener("click", () => {
  clasicaContent.innerHTML = `<swiper-container class="mySwiper" pagination="true" pagination-clickable="true" navigation="true"
    slides-per-view="3" space-between="30">
    
     <swiper-slide class="slide2"><img src="img/clasicas/nike/img01 (6)-Photoroom.png"
                        alt="nike"></swiper-slide>
                <swiper-slide class="slide2"><img src="img/clasicas/nike/img01 (8)-Photoroom.png"
                        alt="nike"></swiper-slide>
                <swiper-slide class="slide2"><img
                        src="img/clasicas/nike/Nike-Classic-Cortez-Nylon-Forrest-Gump-Product-Photoroom.png"
                        alt="nike"></swiper-slide>
                <swiper-slide class="slide2"><img src="img/clasicas/nike/Nike-Air-VaporMax-Triple-Black-Photoroom.png"
                        alt="nike"></swiper-slide>
    
</swiper-container>`;
});
