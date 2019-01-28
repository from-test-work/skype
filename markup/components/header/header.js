import $ from 'jquery';
import { breakpoints } from '../../static/js/breakpoints';

export default class Navigation {
    constructor(opts) {
        const assideNav = $('#assideNav');
        const header = $('.header');

        this.$asside = assideNav;
        this.$header = header;
        this.$navListHeader = header.find('.navList');
        this.$hamburger = $('.hamburger');
        $.extend(this, opts);
    }

    init() {
        this.mobileView(breakpoints);

        this.$hamburger.on('click', (e) => {
            this.mobileNavigateToogle(e);
        });
    }

    resize() {
        this.mobileView(breakpoints);
    }

    mobileView(breakpoints) {
        const $wndScnWidth = $(window).outerWidth();
        const $headerNavConteiner = this.$header.find('.header__nav');

        if ($wndScnWidth < breakpoints.lg) {
            this.$header.closest('#page').addClass('mobileView');
            this.$header.addClass('header_mobileView mobileView__header');

            if (!this.$asside.has('ul.navList').length) {
                this.$asside.prepend(this.$navListHeader);
            } else return;
        } else {
            this.$header.closest('#page').removeClass('mobileView');
            this.$header.removeClass('header_mobileView mobileView__header');

            if (!$headerNavConteiner.has('ul.navList').length) {
                $headerNavConteiner.prepend(this.$navListHeader);
            } else return;
        }
    }

    mobileNavigateToogle(e) {
        const $target = $(e.target);
        const $hamburger = $target.closest('.hamburger');
        const $headerConteiner = this.$header.find('.header__top');

        if ($hamburger.length) {
            $hamburger.toggleClass('is-open');
            this.$asside.toggleClass('is-open');

            if (!this.$asside.has('.hamburger').length) {
                this.$asside.prepend($hamburger);
            } else {
                $headerConteiner.prepend($hamburger);
            }
        }
    }
}
