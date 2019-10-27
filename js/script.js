//event pada saat link di click

$('.page-scroll').on('click', function(e) {
    //console.log('ok');
    //ambil isi href
    var tujuan = $(this).attr('href');
    //console.log(tujuan);
    //tangkap elemen
    var elemenTujuan = $(tujuan);
    //console.log($('html').scrollTop());
    
    //pindah scroll
    $('html').animate({
        scrollTop: elemenTujuan.offset().top - 55
    }, 1000, 'swing');

    //disable
    e.preventDefault();

});

//parallax