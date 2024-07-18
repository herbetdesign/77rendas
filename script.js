document.getElementById('play-video').addEventListener('click', function() {
    var videoSrc = 'https://www.youtube.com/embed/39--aqQlxaw?autoplay=1&modestbranding=1&rel=0&controls=1&disablekb=1&showinfo=0&iv_load_policy=3';
    var nav = document.querySelector('.nav');
    var iframe = document.createElement('iframe');
    iframe.setAttribute('width', '560');
    iframe.setAttribute('height', '315');
    iframe.setAttribute('src', videoSrc);
    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
    iframe.setAttribute('allowfullscreen', '');

    // Remove a imagem e adiciona o iframe
    nav.innerHTML = '';
    nav.appendChild(iframe);
});
