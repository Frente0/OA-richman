/**
 * @author      OA Wu <comdan66@gmail.com>
 * @copyright   Copyright (c) 2015 OA Wu Design
 */

$(function () {

  function initialize () {
    var $loading = $('<div />').attr ('id', 'loading')
                               .append ($('<div />'))
                               .appendTo ($('body'));
    var $runDice = $('#run_dice');
    var $dice = $('#dice');
    var $popUp = $('#pop_up');

    var popUp = [
      {t: '關於 OA-richman', is: [
        {t: '作者名稱', h: 'http://www.ioa.tw', c: 'OA Wu'},
        {t: 'E-mail', h: '', c: 'comdan66@gmail.com'},
        {t: '作品名稱', h: '', c: 'OA-richman'},
        {t: '最新版本', h: '', c: '1.0.0'},
        {t: 'GitHub', h: 'https://github.com/comdan66/OA-richman', c: 'OA-richman'},
        {t: '相關資源', h: 'https://developers.google.com/maps/documentation/javascript/markers', c: 'Google maps API'},
        {t: '更新日期', h: '', c: '2015/05/05'},
      ]},
      {t: '更多相關作品', is: [
        {t: 'Material Design UI', h: 'https://github.com/comdan66/OA-material', c: 'OA-material'},
        {t: '北港迎媽祖', h: 'http://comdan66.github.io/matsu/2015/din-tao_map-19an.html', c: 'OA-matsu'},
        {t: 'Js 迷宮', h: 'https://github.com/comdan66/OA-maze', c: 'OA-maze'},
        {t: 'Js imgLiquid', h: 'https://github.com/comdan66/OA-imgLiquid', c: 'OA-imgLiquid'},
        {t: '導航列', h: 'https://github.com/comdan66/OA-navbar', c: 'OA-navbar'},
        {t: 'Js Slider View', h: 'https://github.com/comdan66/OA-scrollSliderView', c: 'OA-scrollSliderView'},
        {t: 'Youtube Play List', h: 'https://github.com/comdan66/u2', c: 'OA-u2'},
      ]}

    ];

    var markerInfos = [
    {position: new google.maps.LatLng (23.568038757736595, 120.30465692281723), title: '日興堂', price: 100},
    {position: new google.maps.LatLng (23.565363909701762, 120.30417948961258), title: '日興堂', price: 100},
    {position: new google.maps.LatLng (23.564550135385016, 120.30402392148972), title: '日興堂', price: 100},
    {position: new google.maps.LatLng (23.565029549867546, 120.30180037021637), title: '日興堂', price: 100},
    {position: new google.maps.LatLng (23.56839031919102, 120.30243337154388), title: '日興堂', price: 100},
    {position: new google.maps.LatLng (23.568697627383873, 120.30138731002808), title: '日興堂', price: 100},
    {position: new google.maps.LatLng (23.57121506902716, 120.30256748199463), title: '日興堂', price: 100},
    {position: new google.maps.LatLng (23.572736819430755, 120.29828935861588), title: '日興堂', price: 100},
    {position: new google.maps.LatLng (23.5747059726961, 120.29707431793213), title: '日興堂', price: 100},
    {position: new google.maps.LatLng (23.576242432573448, 120.3018781542778), title: '日興堂', price: 100},
    {position: new google.maps.LatLng (23.57265323424432, 120.30320584774017), title: '日興堂', price: 100},
    {position: new google.maps.LatLng (23.57215172200842, 120.3030127286911), title: '日興堂', price: 100},
    {position: new google.maps.LatLng (23.571478119226718, 120.30489563941956), title: '日興堂', price: 100},
    {position: new google.maps.LatLng (23.569523668242216, 120.30414193868637), title: '日興堂', price: 100},
    {position: new google.maps.LatLng (23.568901679626702, 120.30510485172272), title: '日興堂', price: 100},];
    var map = new window.funcs ();

    if (!map.init ($('#map'), markerInfos, $('#logs')))
      return alert ('地圖資料初始化失敗');

    var user = map.createUser ('OA', $('#quota1 span'));
    user.setPosition ();

    var user2 = map.createUser ('NPC', $('#quota2 span'));
    user2.setPosition ();

    user.goStep (2, function (markerInfos) {
      if (markerInfos.owner && markerInfos.owner != this) {
        //付費
      } else {
        //購買
        this.buyStep ();
      }
    });

    $('#throw_dice').click (function () {
      user2.goStep (2, function () {
        console.info (this.buyStep ());
      });
    });


    $loading.fadeOut (function () {
      $(this).hide (function () {
        $(this).remove ();
      });
    });
  }

  google.maps.event.addDomListener (window, 'load', initialize);
});