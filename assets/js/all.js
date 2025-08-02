// 收藏按鈕
document.addEventListener("DOMContentLoaded", function () {
  // 選取所有收藏按鈕（支援多個商品的情境）
    const wishlistButtons = document.querySelectorAll(".btn-wishlist");

    wishlistButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      // 切換 .actived class
        btn.classList.toggle("actived");

      // 切換文字內容
        const icon = btn.querySelector(".icon-heart");
        if (btn.classList.contains("actived")) {
        btn.innerHTML = '<i class="mr-8 icon-heart"></i>已收藏';
        } else {
        btn.innerHTML = '<i class="mr-8 icon-heart"></i>加入收藏';
        }
    });
    });
});

// 產品詳情頁 - 輪播
  new Swiper('.swiper', {
    spaceBetween: 16,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    slidesPerView: 1.2,
    breakpoints: {
      768: {
        slidesPerView: 4,
        spaceBetween: 24,
      }  
    }
  });
