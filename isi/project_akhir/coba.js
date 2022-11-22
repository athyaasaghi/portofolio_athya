const tulisan_tombol = document.querySelector('.tulisan_tombol');
tulisan_tombol.addEventListener('mouseenter', function() {
    tulisan_tombol.style.backgroundColor = '#ddd';
    tulisan_tombol.style.transform = 'scale(1.2)'
    tulisan_tombol.style.transition = '1s';
});


tulisan_tombol.addEventListener('mouseleave', function() {
    tulisan_tombol.style.backgroundColor = '#b8e0f5';
    tulisan_tombol.style.boxShadow = '0 7px 6px rgb (220.220.220)';
    tulisan_tombol.style.transform = 'scale(1)'
});

tulisan_tombol.addEventListener('click', function() {
    tulisan_tombol.style.boxShadow = '7 0px 3px rgba(0,0,0, 0)';
});

tulisan_tombol.addEventListener('click', function() {
     swal("Hai", "Terimakasih telah menyukai halaman ini", "success");
});



