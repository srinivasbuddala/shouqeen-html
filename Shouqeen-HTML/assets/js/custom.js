$(document).ready(function(){
    $('.selectedcat').on('click', function(){
        $('.category-list').toggleClass('active');
    });
    $('.category-search ul.category-list > li a').on('click',function(){
        $('.category-list').removeClass('active');
    });
    $('.user-menu > a').on('click', function(){
        $('.user-menu-list').fadeToggle();
    })
    $('.user-menu-list  a').on('click', function(){
        $('.user-menu-list').hide();
    });
    
    $('#select-currency').ddslick();

   
});

