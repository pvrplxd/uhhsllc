(function(){
  function hydrateLazyImages(root){
    (root||document).querySelectorAll('img[data-src]').forEach(function(img){
      if(!img.getAttribute('src')){
        img.setAttribute('src', img.getAttribute('data-src'));
      }
      img.removeAttribute('data-src');
      img.classList.remove('swiper-lazy');
      if(!img.hasAttribute('loading')){
        img.setAttribute('loading','lazy');
      }
      var preloader = img.parentElement && img.parentElement.querySelector('.swiper-lazy-preloader');
      if(preloader){
        preloader.remove();
      }
    });
  }

  function unstickSpinners(){
    document.querySelectorAll('.swiper-lazy-preloader').forEach(function(el){el.remove();});
  }

  function fallbackMetform(){
    document.querySelectorAll('.mf-form-wrapper.static-form-disabled').forEach(function(wrapper){
      if(wrapper.dataset.staticHydrated){
        return;
      }
      wrapper.dataset.staticHydrated = '1';
      if(wrapper.children.length === 0){
        var notice = document.createElement('p');
        notice.className = 'static-form-notice';
        notice.textContent = 'Online booking form is unavailable in static mode. Please contact us by phone or email.';
        wrapper.appendChild(notice);
      }
    });
  }

  function init(){
    hydrateLazyImages(document);
    unstickSpinners();
    fallbackMetform();
  }

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
