$(function(){
  var toggleMenuItems = function(){
    mobileMenu.slideToggle(250);
  };
  var closeThisButton = $('button');
  var appTiles = $('#contains-content > article');
  var mobileMenu = $('#contains-app nav ul li');
  var selectMenuItem = function(){ 
    mobileMenu.fadeOut();
    $(this).fadeIn();
    selectedItemData = $(this).html();
    $('#contains-app [data-function~="contains-breadcrumb"]').html(' > '+selectedItemData);     
  };
  var mobileMenuButton = $('#contains-app nav > button').on('click', toggleMenuItems);

  var containsExpandedView = $('[data-function="contains-expanded-content"]');
  var defaultView = $('#contains-content');
  
  var selectTile = function(){
    appTiles.fadeOut();
    $(this).fadeIn(100);
    $(this).children('.expanded-content').show();
  };
  
  
  $('a#close').on('click', function(e){
    e.preventDefault();
    e.stopPropagation();
    alert('!');
      appTiles.fadeIn();
  });
    appTiles.on('click', selectTile);
  });

