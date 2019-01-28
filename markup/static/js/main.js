import $ from 'jquery';
import Navigation from '../../components/header/header';

window.$ = window.jQuery = $;

const navigate = new Navigation();

/*==============
====================      READY      =====================
========================================================*/
$(document).ready(() => {
    navigate.init();
});

/*==============
====================      RESIZE      ====================
========================================================*/
$(window).resize(() => {
    navigate.resize();
});

