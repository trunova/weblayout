const swiper = new Swiper('.hero__slider', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 75,
  pagination: {
      el: ".hero__pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + ' hero__bullet"></span>';
      },
    },
});


const swiper2 = new Swiper('.work__slider', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 75,
  pagination: {
      el: ".work__pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="'  + className + ' work__bullet">' + (index + 1) + "&nbsp;шаг" + "</span>";
      },
    },
});


var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.display === "block") {
          panel.style.display = "none";
      } else {
          panel.style.display = "block";
      }
  });
}
