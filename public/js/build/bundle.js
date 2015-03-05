(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"./public/js/src/scripts.js":[function(require,module,exports){
var SITE = {
    init: function() {
        this.setVars();
        this.bindEvents();
        this.$window.trigger('resize');
    },

    setVars: function() {
        this.$window = $(window);
        this.$document = $(document);
        this.$body = $('body');
        this.$htmlBody = $('html, body');
        this.$gallery = $('.gallery');
        this.$galleryImage = $('.gallery-image');
        this.$galleryPreview = $('.gallery-preview');
        this.$galleryDescription = $('.description');
        this.$iconL = $('.icon-l');
        this.$iconR = $('.icon-r');
        this.$iconX = $('.icon-x');
        this.$backToTop = $('.back-to-top');
        this.$browseItem = $('.browse-item');
        this.thumbImagesPathLength = 14;
        this.thumbHeightRatio = 0.665;

        this.backToTopHeight = this.$gallery.offset().top;
        this.setDescriptions();
    },

    setDescriptions: function() {
        this.galleryOpening = {
            1: 'no. 1 / specimen: cotton swab / date: circa feb. 2015 / description: cotton swab with light brown oil smears, sample from stovetop',
            2: 'no. 2 / specimen: cotton swab / date: circa feb. 2015 / description: cotton swab with light brown oil smears, sample from stovetop',
            3: 'no. 3 / specimen: cotton swab / date: circa feb. 2015 / description: cotton swab with oily orange crust, sample from stovetop',
            4: 'no. 4 / specimen: cotton swab / date: circa feb. 2015 / description: cotton swab with burnt black smears, sample from stovetop',
            5: 'no. 5 / specimen: cotton swab / date: circa feb. 2015 / description: burnt black smears and oily brown crust, sample from stovetop',
            6: 'no. 6 / specimen: glass vial / date: circa feb. 2015 / description: glass vial containing assorted peppercorn, taken from various flat surfaces (countertop, stovetop, floor)',
            7: 'no. 7 / specimen: glass vial / date: circa feb. 2015 / description: glass vial containing enoki mushrooms,taken from various flat surfaces (countertop, stovetop, floor)',
            8: 'no. 8 / specimen: glass vial / date: circa feb. 2015 / description: glass vial containing pieces of popcorn, taken from various flat surfaces (countertop, stovetop, floor)',
            9: 'no. 9 / specimen: glass vial / date: circa feb. 2015 / description: glass vial containing burnt crusts, taken from various flat surfaces (countertop, stovetop, floor)',
            10: 'no. 10 / specimen: glass vial / date: circa feb. 2015 / description: glass vial containing assorted pickled vegetables, taken from various flat surfaces (countertop, stovetop, floor)',
            11: 'no. 11 / specimen: glass vial / date: circa feb. 2015 / description: glass vial containing salt crystals, taken from various flat surfaces (countertop, stovetop, floor)',
            12: 'no. 12 / specimen: plastic container / date: circa feb. 2015 / description: plastic container containing two strands of flat asian rice noodles, taken from sink and countertop',
            13: 'no. 13 / specimen: plastic container / date: circa feb. 2015 / description: plastic container containing bunched up wet paper towel, taken from sink',
            14: 'no. 14 / specimen: meat / date: circa feb. 2015 / description: piece of unidentified cooked meat, taken from countertop',
            15: 'no. 15 / specimen: spice / date: circa feb. 2015 / description: chinese star anise, taken from countertop',
            16: 'no. 16 / specimen: vegetable / date: circa feb. 2015 / description: unidentified leafy green, taken from countertop',
            17: 'no. 17 / specimen: vegetable / date: circa feb. 2015 / description: unidentified leafy green, taken from countertop',
            18: 'no. 18 / specimen: vegetable / date: circa feb. 2015 / description:  unidentified leafy green, taken from countertop',
            19: 'no. 19 / specimen: spice / date: circa feb. 2015 / description: unidentified spice, taken from countertop',
            20: 'no. 20 / specimen: herb / date: circa feb. 2015 / description: parsley, taken from countertop',
            21: 'no. 21 / specimen: meat / date: circa feb. 2015 / description: piece of bacon, taken from countertop',
            22: 'no. 22 / specimen: herb / date: circa feb. 2015 / description: cilantro, taken from table',
            23: 'no. 23 / specimen: vegetable / date: circa feb. 2015 / description: piece of iceberg lettuce, taken from countertop',
            24: 'no. 24 / specimen: vegetable / date: circa feb. 2015 / description: onion skin, taken from countertop',
            25: 'no. 25 / specimen: meat / date: circa feb. 2015 / description: unidentified meat, taken from table',
            26: 'no. 26 / specimen: cotton pad / date: circa feb. 2015 / description: cotton pad with small burnt pieces, sample from stovetop',
            27: 'no. 27 / specimen: cotton pad / date: circa feb. 2015 / description: cotton pad with light oil stain, sample from stovetop',
            28: 'no. 28 / specimen: cotton pad / date: circa feb. 2015 / description: cotton pad with unidentified crusty food smear, sample from stovetop',
            29: 'no. 29 / specimen: cotton pad / date: circa feb. 2015 / description: cotton pad with oily vegetable smear, sample from stovetop',
            30: 'no. 30 / specimen: cotton pad / date: circa feb. 2015 / description: cotton pad with burnt brown smears, sample from stovetop',
            31: 'no. 31 / specimen: cotton pad / date: circa feb. 2015 / description: cotton pad with burnt brown smears, sample from stovetop',
            32: 'no. 32 / specimen: cotton pad / date: circa feb. 2015 / description: cotton pad with burnt brown smears, sample from stovetop',
            33: 'no. 33 / specimen: cotton pad / date: circa feb. 2015 / description: cotton pad with burnt brown smears and crumbly burnt pieces, sample from stovetop',
            34: 'no. 34 / specimen: cotton pad / date: circa feb. 2015 / description: cotton pad with burnt and crusty brown smears, sample from stovetop',
            35: 'no. 35 / specimen: cotton pad / date: circa feb. 2015 / description: cotton pad with burnt and oily brown smears, sample from stovetop',
            36: 'no. 36 / specimen: cotton pad / date: circa feb. 2015 / description: cotton pad with burnt brown smears, sample from stovetop',
            37: 'no. 37 / specimen: cotton pad / date: circa feb. 2015 / description: cotton pad with oily orange and brown smears, sample from stovetop',
            38: 'no. 38 / specimen: cotton pad / date: circa feb. 2015 / description: cotton pad with crumbly burnt pieces and mix of assorted herbs and spices, sample from stovetop',
            39: 'no. 39 / specimen: cotton pad / date: circa feb. 2015 / description: cotton pad with oily orange and brown smears and mix of assorted herbs and spices, sample from stovetop',
            40: 'no. 40 / specimen: cotton ball / date: circa feb. 2015 / description: cotton ball with light brown smears, sample from stovetop',
            41: 'no. 41 / specimen: cotton ball / date: circa feb. 2015 / description: cotton ball with light oil stain, sample from stovetop',
            42: 'no. 42 / specimen: cotton ball / date: circa feb. 2015 / description: cotton ball with light burnt smears, sample from stovetop',
            43: 'no. 43 / specimen: cotton ball / date: circa feb. 2015 / description: cocotton ball with oily burnt smears, sample from stovetop',
            44: 'no. 44 / specimen: cotton ball / date: circa feb. 2015 / description: cotton ball with burnt brown smears and food crumbs, sample from stovetop',
            45: 'no. 45 / specimen: cotton ball / date: circa feb. 2015 / description: cotton ball with burnt orange and brown oil smears, sample from stovetop',
            46: 'no. 46 / specimen: cotton ball / date: circa feb. 2015 / description: cotton ball with oily orange smears and food crumbs, sample from stovetop',
            47: 'no. 47 / specimen: test tube / date: circa feb. 2015 / description: test tube containing unidentified food item with sea urchin texture, taken from various flat surfaces (countertop, stovetop, floor)',
            48: 'no. 48 / specimen: test tube / date: circa feb. 2015 / description: test tube containing unidentified leafy greens or pickled vegetables, taken from various flat surfaces (countertop, stovetop, floor)',
            49: 'no. 49 / specimen: test tube / date: circa feb. 2015 / description: test tube containing red chili peppers, taken from various flat surfaces (countertop, stovetop, floor)',
            50: 'no. 50 / specimen: test tube / date: circa feb. 2015 / description: test tube containing pieces of unidentified raw meat, taken from various flat surfaces (countertop, stovetop, floor)',
            51: 'no. 51 / specimen: wrapper / date: circa feb. 2015 / description: plastic straw wrapper, taken from table',
            52: 'no. 52 / specimen: rubber band / date: circa feb. 2015 / description: blue rubber band for food, taken from countertop',
            53: 'no. 53 / specimen: wrapper / date: circa feb. 2015 / description: corner of asian condiment packet, taken from table',
            54: 'no. 54 / specimen: wrapper / date: circa feb. 2015 / description: plastic ring for lid jar with piece of cilantro, taken from countertop',
            55: 'no. 55 / specimen: paper towel / date: circa feb. 2015 / description: torn paper towel pieces with food stains, taken from various flat surfaces (countertop, stovetop, floor)',
            56: 'no. 56 / specimen: cheese / date: mar. 1, 2015 / description: piece of brie cheese, taken from floor',
        };

        for (var i = 57; i < 90; i++) {
            this.galleryOpening[i] = '';
        }

        this.descriptions = {
            galleryOpening: this.galleryOpening
        }
    },

    bindEvents: function() {
        this.$galleryImage.on('click', this.openAlbum.bind(this));
        this.$iconX.on('click', this.closeAlbum.bind(this));
        this.$iconL.on('click', this.prevImage.bind(this));
        this.$iconR.on('click', this.nextImage.bind(this));
        this.$backToTop.on('click', this.scrollToTop.bind(this));
        this.$browseItem.on('click', this.scrollToSection.bind(this));
        this.$window.on('resize', this.resizeThumbs.bind(this));
        this.$window.on('scroll', this.backToTop.bind(this));
        this.$document.on('keydown', this.checkKey.bind(this));
    },

    scrollToSection: function(e) {
        e.preventDefault();
        var $el = $(e.currentTarget);
        var anchor = $el.attr('href');
        var offset = $(anchor).offset().top;
        this.$htmlBody.animate({scrollTop: offset}, 300);
        setTimeout(function() {
            window.location.hash = anchor.slice(0);
        }, 300);
    },

    scrollToTop: function(e) {
        e.preventDefault();
        this.$htmlBody.animate({scrollTop: 0}, 300);
        setTimeout(function() {
            window.location.hash = '';
        }, 300);
    },

    backToTop: function(e) {
        e.preventDefault();
        var $el = $(e.currentTarget);
        if ($el.scrollTop() > this.backToTopHeight) {
            this.$backToTop.fadeIn();
            console.log('fading in');
        } else {
            this.$backToTop.fadeOut();
            console.log('fading out');
        }
    },

    resizeThumbs: function(e) {
        var galleryImageWidth = this.$galleryImage.width();
        this.$galleryImage.height(this.thumbHeightRatio * galleryImageWidth);
    },

    checkKey: function(e) {
        if (!this.$galleryPreview.hasClass('closed')) {
            if (e.which === 37) { //left
                this.prevImage();

            } else if (e.which === 39) { //right
                this.nextImage();
            }
        }
    },

    prevImage: function(e) {
        var src = this.$galleryPreview.data('src');
        var no = parseInt(this.$galleryPreview.data('no'));
        var ext = this.$galleryPreview.data('ext');

        if (no > 1) {
           no -= 1;
           var newSrc = src + no + ext;

           this.$galleryPreview.css({'background': '#000 url("../../images/' + newSrc + '") center center no-repeat', 'background-size': 'contain'});
           this.$galleryPreview.data({src: src, no: no, ext: ext});
           this.$galleryDescription.html(this.descriptions['galleryOpening'][no]);

           if (no <= 1) {
               this.$iconL.addClass('hide');
           } else {
               this.$iconL.removeClass('hide');
           }

           if (no >= 89) {
               this.$iconR.addClass('hide');
           } else {
               this.$iconR.removeClass('hide');
           }
        }
    },

    nextImage: function(e) {
        var src = this.$galleryPreview.data('src');
        var no = parseInt(this.$galleryPreview.data('no'));
        var ext = this.$galleryPreview.data('ext');

        if (no < 89) {
            no += 1;
            var newSrc = src + no + ext;

            this.$galleryPreview.css({'background': '#000 url("../../images/' + newSrc + '") center center no-repeat', 'background-size': 'contain'});
            this.$galleryPreview.data({src: src, no: no, ext: ext});
            this.$galleryDescription.html(this.descriptions['galleryOpening'][no]);

            if (no <= 1) {
                this.$iconL.addClass('hide');
            } else {
                this.$iconL.removeClass('hide');
            }

            if (no >= 89) {
                this.$iconR.addClass('hide');
            } else {
                this.$iconR.removeClass('hide');
            }
        }
    },

    openAlbum: function(e) {
        var $el = $(e.currentTarget);
        var $img = $($el.find('img')[0]);

        var src = $img.data('src');
        var no = $img.data('no');
        var ext = $img.data('ext');
        var fullSrc = src + no + ext;

        this.$galleryPreview.data({src: src, no: no, ext: ext});

        if (no <= 1) {
            this.$iconL.addClass('hide');
        } else {
            this.$iconL.removeClass('hide');
        }

        if (no >= 89) {
            this.$iconR.addClass('hide');
        } else {
            this.$iconR.removeClass('hide');
        }

        this.$galleryPreview.removeClass('closed');
        this.$galleryPreview.fadeIn();
        this.$body.css('overflow', 'hidden');

        this.$galleryPreview.css({'background': '#000 url("../../images/' + fullSrc + '") center center no-repeat', 'background-size': 'contain'});
        this.$galleryDescription.html(this.descriptions['galleryOpening'][no]);
    },

    closeAlbum: function(e) {
        this.$galleryPreview.addClass('closed');
        this.$galleryPreview.fadeOut();
        this.$body.css('overflow', 'visible');
    }
};

SITE.init();

},{}]},{},["./public/js/src/scripts.js"]);
