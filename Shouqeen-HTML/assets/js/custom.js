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

    /* Tabs Jquery UI */
    $('.tabs-list > li:first-child > a, .tab-blocks > .tabdata:first-child').addClass('active');
   $('.tabs-list > li > a').on('click', function(event){
        event.preventDefault();
        var targetId = $(this).attr('href');
        if(!$(this).hasClass('active')){
            $(this).addClass('active').closest('li').siblings().find('a').removeClass('active');
            $(targetId).addClass('active').siblings().removeClass('active');
        }
   });
});

