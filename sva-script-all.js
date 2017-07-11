// 25445766691
$(window).load(function() {
    $('.grid').masonry({
        itemSelector: '.grid-item',
        columnWidth: '.grid-sizer',
        percentPosition: true
    });
});
$(document).ready(function () {

    $("#lazerlg").click(function(){

        window.location = 'http://www.shoppingvaledoaco.com.br/lazer/';
    });

    $("#lazerxs").click(function(){

        window.location = 'http://www.shoppingvaledoaco.com.br/lazer/';
    });

    $('.carousel').carousel();

    $(document).delegate('*[data-toggle="lightbox"]', 'click', function(event) {
        event.preventDefault();
        $(this).ekkoLightbox();
    }); 
    
    $('.owl-carousel-lazer').owlCarousel({
        center: true,
        items:2,
        loop:true,
        margin:0,
        nav:true,
        navText: ["", ""],
        navClass: ["owl-prev icon-prev", "owl-next icon-next"],
        responsive:{
             0:{
            items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });

    $('.owl-carousel').owlCarousel({
        center: true,
        items:2,
        loop:true,
        margin:0,
        nav:true,
        navText: ["", ""],
        navClass: ["owl-prev icon-prev", "owl-next icon-next"],
        responsive:{
             0:{
            items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });

    $("#selectCategory").change(function() {

        var args = $(this).val();
        var data = {
            action: 'select_stores_by_name',
            segment : args
        }
        $(".result_categories").hide(); 
        $(".content_categories").hide();
        $("#load").show(); 

        $.post(ajaxurl, data, function(ListPost){
            if(args == 'all') {
                $(".list_categories").show(); 
            } else{
                $(".list_categories").hide();
            }; 
            $("#load").hide();
            $(".result_categories").show(); 
            $(".result_categories").html(ListPost);                             
                    
        });
    });

    $("#selectCategoryMobile").change(function() {

        var args = $(this).val();
        var data = {
            action: 'select_stores_by_name',
            segment : args
        }
        $(".result_categories").hide(); 
        $(".content_categories").hide();
        $("#load").show(); 

        $.post(ajaxurl, data, function(ListPost){
            if(args == 'all') {
                $(".list_categories").show(); 
            } else{
                $(".list_categories").hide();
            }; 
            $("#load").hide();
            $(".result_categories").show(); 
            $(".result_categories").html(ListPost);                             
                    
        });
    });

    $("#submitSearch").click(function() {

        var args = $('#sStore').val();
        var data = {
            action: 'search_stores',
            sStore : args
        }
        $(".result_categories").hide(); 
        $(".content_categories").hide();
        $("#load").show(); 
        $.post(ajaxurl, data, function(ListPost){ 
            $("#load").hide();
            $(".result_categories").show(); 
            $(".result_categories").html(ListPost);                             
                    
        });
    });

    //Mascara Telefone   
    $(function() {
        $('#phone')  
            .mask("(99) 9999-9999?9")  
            .keydown(function() {
                var $elem = $(this);
                var tamanhoAnterior = this.value.replace(/\D/g, '').length;
                setTimeout(function() { 
                    var novoTamanho = $elem.val().replace(/\D/g, '').length;
                    if (novoTamanho !== tamanhoAnterior) {
                        if (novoTamanho === 11) {  
                            $elem.unmask();  
                            $elem.mask("(99) 99999-9999");  
                        } else if (novoTamanho === 10) {  
                            $elem.unmask();  
                            $elem.mask("(99) 9999-9999?9");  
                        }
                    }
                }, 1);
            });
    });

    //$.mask.definitions['~']='[+-]';
    //Inicio Mascara Telefone
    // $('#phone').mask("(99) 9999-9999?9").ready(function(event) {
    //     var target, phone, element;
    //     target = (event.currentTarget) ? event.currentTarget : event.srcElement;
    //     phone = target.value.replace(/\D/g, '');
    //     element = $(target);
    //     element.unmask();
    //     if(phone.length > 10) {
    //         element.mask("(99) 99999-999?9");
    //     } else {
    //         element.mask("(99) 9999-9999?9");
    //     }
    // });

    $('#myTabs a').click(function (e) {
        e.preventDefault()
        $(this).tab('show');
    });

    $( "#open_links").click(function() {
        $(this).hide();
        $("#close_links").show();
        $(".links").slideToggle("slow", function() {});
    });
    
    $( "#close_links").click(function() {
        $(this).hide();
        $("#open_links").show();
        $(".links").slideToggle("slow", function() {});
    });

    $('.poster').slick({
        loop:false,
        dots:false,
        // dots: true,
        centerMode: true,
        centerPadding: '15px',
        infinite: true,
        speed: 450,
        slidesToShow: 7,
        cssEase: 'linear',
        // fade: true,
        slidesToScroll: 1,
        responsive: [
        {
                breakpoint: 1366,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 2,
                    dots: false,
                    infinite: true,
                    centerMode: true,

                }

            },{
                breakpoint: 1280,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 2,
                    dots: false,
                    infinite: true,
                    centerMode: true,

                }

            },{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1,
                    centerMode: true,

                }

            }, {

                breakpoint: 800,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    dots: false,
                    infinite: true,
                    centerMode: true,

                }

            }, {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    dots: false,
                    infinite: true,
                    centerMode: true,
                    
                }
            }, {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                    infinite: true,
                    autoplay: true,
                    autoplaySpeed: 2000,
                }
            },{
                breakpoint: 320,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                    infinite: true,
                    autoplay: true,
                    autoplaySpeed: 2000,
                }
            }
        ]
    });  

    var viewport = $(window).width();

    if(viewport == 1349) {
    }

    $('.anchors a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top-130
                }, 1500, 'swing');
            return false;
            }
        }
    });

    $('.list_categories a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            $(this.hash).css('padding-top', '126px');
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1500, 'swing');
            return false;
            }
        }
    });

    $('#tabsNavigation ul li a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top-130
                }, 1500, 'swing');
            return false;
            }
        }
    });

    //snapchat
    $( "#snapchat" ).hover(function() {

        $(".snapchatPopupHolder").toggle();
    });

    (function() {

        "use strict";

        var toggles = document.querySelectorAll(".c-hamburger");

        for (var i = toggles.length - 1; i >= 0; i--) {
            var toggle = toggles[i];
            toggleHandler(toggle);
        };

        function toggleHandler(toggle) {
                toggle.addEventListener( "click", function(e) {
                e.preventDefault();
                (this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
            });
        }

    })();

    // Validação Formulario Cadastro Newsletter
    var n_name = new Spry.Widget.ValidationTextField("n_name", "none", {validateOn:["blur", "change"]});
    var n_email = new Spry.Widget.ValidationTextField("n_email", "email", {validateOn:["blur", "change"]});

    // Validação Formulario Fale Conosco
    var fc_name = new Spry.Widget.ValidationTextField("fc_name", "none", {validateOn:["blur", "change"]});
    var fc_email = new Spry.Widget.ValidationTextField("fc_email", "email", {validateOn:["blur", "change"]});
    var fc_subject = new Spry.Widget.ValidationTextField("fc_subject", "none", {validateOn:["blur", "change"]});
    var fc_phone = new Spry.Widget.ValidationTextField("fc_phone", "none", {validateOn:["blur", "change"]});
    var fc_message = new Spry.Widget.ValidationTextarea("fc_message", {validateOn:["blur", "change"]});

    function add() {if($(this).val() == ''){$(this).val($(this).attr('placeholder')).addClass('placeholder');}}
    function remove() {if($(this).val() == $(this).attr('placeholder')){$(this).val('').removeClass('placeholder');}}
    if (!('placeholder' in $('<input>')[0])) { // Create a dummy element for feature detection
        $('input[placeholder], textarea[placeholder]').blur(add).focus(remove).each(add); // Select the elements that have a placeholder attribute
        $('form').submit(function(){$(this).find('input[placeholder], textarea[placeholder]').each(remove);}); // Remove the placeholder text before the form is submitted
    }

});

//Mapa
function initializeIntern() {

    //Coordenadas geograficas do endereço para posicionar o geopin
    var objLat = -19.496594;
    var objLng = -42.566577;

    // Criando um array com os estilos
    var styles = [
    {
      stylers: [
        { hue: "#FFFFFF" },
        { saturation: -100 },
        { lightness: 10 },
        { gamma: 0.8 }
      ]
    },
     {
      featureType: "road",
      elementType: "geometry",
      stylers: [
       { lightness: 100 },
       { visibility: "simplified" }
      ]
     },
     {
      featureType: "road",
      elementType: "labels"
     }
    ];

    // Instancio um novo objeto google.maps.StyledMapType passando a matriz que foi criada e um nome para o novo tipo de mapa
    var styledMap = new google.maps.StyledMapType(styles, {
      name: "Mapa Style"
    });

    // Exibir mapa;
    var myLatlng = new google.maps.LatLng(parseFloat(objLat), parseFloat(objLng));
    var mapOptions = {
        zoom: 15,
        center: myLatlng,
        navigationControl: false,
        scrollwheel: false,
        streetViewControl: false,
        panControl : false,
        zoomControl : false,
        mapTypeControl: false,
        //mapTypeId: google.maps.MapTypeId.ROADMAP,
        mapTypeControlOptions: {
            mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
        }
    };

    // Parâmetros do texto que será exibido no clique;
    var contentString = '<p>Shopping Vale do Aço - Ipatinga/MG.</p>';
    var infowindow = new google.maps.InfoWindow({
        content: contentString,
        maxWidth: 700
    });

    //Exibir o mapa na div #mapa;
    var map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);

    //Exibi o centro do mapa sempre ao centro da tela de exibição
    google.maps.event.addDomListener(window, "resize", function() {
        var center = map.getCenter();
        google.maps.event.trigger(map, "resize");
        map.setCenter(center); 
    });

    //Marcador personalizado;
    var image = 'http://orodigital.com.br/clientes/sva/wp-content/themes/sva/dist/imgs/geopin.png';
    var marcadorPersonalizado = new google.maps.Marker({
        position: myLatlng,
        map: map,
        icon: image,
        title: 'Shopping Vale do Aço- Ipatinga/MG',
        animation: google.maps.Animation.DROP
    });      

    //Exibir texto ao clicar no ícone;
    google.maps.event.addListener(marcadorPersonalizado, 'click', function() {
        infowindow.open(map,marcadorPersonalizado);
    });

    // Aplicando as configurações do mapa
    map.mapTypes.set('map_style', styledMap);
    map.setMapTypeId('map_style');

}
//Função para carregamento assíncrono
function loadScriptIntern() {
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "http://maps.googleapis.com/maps/api/js?key=AIzaSyDeHb17So0QupSGO_d6b8X-OyvJ32UQehs&sensor=true&callback=initializeIntern";
    document.body.appendChild(script);
}
window.onload = loadScriptIntern;
! function(a, b, c, d) {
    function e(b, c) {
        this.settings = null, this.options = a.extend({}, e.Defaults, c), this.$element = a(b), this.drag = a.extend({}, m), this.state = a.extend({}, n), this.e = a.extend({}, o), this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._invalidated = {}, this._pipe = [], a.each(e.Plugins, a.proxy(function(a, b) {
            this._plugins[a[0].toLowerCase() + a.slice(1)] = new b(this)
        }, this)), a.each(e.Pipe, a.proxy(function(b, c) {
            this._pipe.push({
                filter: c.filter,
                run: a.proxy(c.run, this)
            })
        }, this)), this.setup(), this.initialize()
    }

    function f(a) {
        if (a.touches !== d) return {
            x: a.touches[0].pageX,
            y: a.touches[0].pageY
        };
        if (a.touches === d) {
            if (a.pageX !== d) return {
                x: a.pageX,
                y: a.pageY
            };
            if (a.pageX === d) return {
                x: a.clientX,
                y: a.clientY
            }
        }
    }

    function g(a) {
        var b, d, e = c.createElement("div"),
            f = a;
        for (b in f)
            if (d = f[b], "undefined" != typeof e.style[d]) return e = null, [d, b];
        return [!1]
    }

    function h() {
        return g(["transition", "WebkitTransition", "MozTransition", "OTransition"])[1]
    }

    function i() {
        return g(["transform", "WebkitTransform", "MozTransform", "OTransform", "msTransform"])[0]
    }

    function j() {
        return g(["perspective", "webkitPerspective", "MozPerspective", "OPerspective", "MsPerspective"])[0]
    }

    function k() {
        return "ontouchstart" in b || !!navigator.msMaxTouchPoints
    }

    function l() {
        return b.navigator.msPointerEnabled
    }
    var m, n, o;
    m = {
        start: 0,
        startX: 0,
        startY: 0,
        current: 0,
        currentX: 0,
        currentY: 0,
        offsetX: 0,
        offsetY: 0,
        distance: null,
        startTime: 0,
        endTime: 0,
        updatedX: 0,
        targetEl: null
    }, n = {
        isTouch: !1,
        isScrolling: !1,
        isSwiping: !1,
        direction: !1,
        inMotion: !1
    }, o = {
        _onDragStart: null,
        _onDragMove: null,
        _onDragEnd: null,
        _transitionEnd: null,
        _resizer: null,
        _responsiveCall: null,
        _goToLoop: null,
        _checkVisibile: null
    }, e.Defaults = {
        items: 3,
        loop: !1,
        center: !1,
        mouseDrag: !0,
        touchDrag: !0,
        pullDrag: !0,
        freeDrag: !1,
        margin: 0,
        stagePadding: 0,
        merge: !1,
        mergeFit: !0,
        autoWidth: !1,
        startPosition: 0,
        rtl: !1,
        smartSpeed: 250,
        fluidSpeed: !1,
        dragEndSpeed: !1,
        responsive: {},
        responsiveRefreshRate: 200,
        responsiveBaseElement: b,
        responsiveClass: !1,
        fallbackEasing: "swing",
        info: !1,
        nestedItemSelector: !1,
        itemElement: "div",
        stageElement: "div",
        themeClass: "owl-theme",
        baseClass: "owl-carousel",
        itemClass: "owl-item",
        centerClass: "center",
        activeClass: "active"
    }, e.Width = {
        Default: "default",
        Inner: "inner",
        Outer: "outer"
    }, e.Plugins = {}, e.Pipe = [{
        filter: ["width", "items", "settings"],
        run: function(a) {
            a.current = this._items && this._items[this.relative(this._current)]
        }
    }, {
        filter: ["items", "settings"],
        run: function() {
            var a = this._clones,
                b = this.$stage.children(".cloned");
            (b.length !== a.length || !this.settings.loop && a.length > 0) && (this.$stage.children(".cloned").remove(), this._clones = [])
        }
    }, {
        filter: ["items", "settings"],
        run: function() {
            var a, b, c = this._clones,
                d = this._items,
                e = this.settings.loop ? c.length - Math.max(2 * this.settings.items, 4) : 0;
            for (a = 0, b = Math.abs(e / 2); b > a; a++) e > 0 ? (this.$stage.children().eq(d.length + c.length - 1).remove(), c.pop(), this.$stage.children().eq(0).remove(), c.pop()) : (c.push(c.length / 2), this.$stage.append(d[c[c.length - 1]].clone().addClass("cloned")), c.push(d.length - 1 - (c.length - 1) / 2), this.$stage.prepend(d[c[c.length - 1]].clone().addClass("cloned")))
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function() {
            var a, b, c, d = this.settings.rtl ? 1 : -1,
                e = (this.width() / this.settings.items).toFixed(3),
                f = 0;
            for (this._coordinates = [], b = 0, c = this._clones.length + this._items.length; c > b; b++) a = this._mergers[this.relative(b)], a = this.settings.mergeFit && Math.min(a, this.settings.items) || a, f += (this.settings.autoWidth ? this._items[this.relative(b)].width() + this.settings.margin : e * a) * d, this._coordinates.push(f)
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function() {
            var b, c, d = (this.width() / this.settings.items).toFixed(3),
                e = {
                    width: Math.abs(this._coordinates[this._coordinates.length - 1]) + 2 * this.settings.stagePadding,
                    "padding-left": this.settings.stagePadding || "",
                    "padding-right": this.settings.stagePadding || ""
                };
            if (this.$stage.css(e), e = {
                    width: this.settings.autoWidth ? "auto" : d - this.settings.margin
                }, e[this.settings.rtl ? "margin-left" : "margin-right"] = this.settings.margin, !this.settings.autoWidth && a.grep(this._mergers, function(a) {
                    return a > 1
                }).length > 0)
                for (b = 0, c = this._coordinates.length; c > b; b++) e.width = Math.abs(this._coordinates[b]) - Math.abs(this._coordinates[b - 1] || 0) - this.settings.margin, this.$stage.children().eq(b).css(e);
            else this.$stage.children().css(e)
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(a) {
            a.current && this.reset(this.$stage.children().index(a.current))
        }
    }, {
        filter: ["position"],
        run: function() {
            this.animate(this.coordinates(this._current))
        }
    }, {
        filter: ["width", "position", "items", "settings"],
        run: function() {
            var a, b, c, d, e = this.settings.rtl ? 1 : -1,
                f = 2 * this.settings.stagePadding,
                g = this.coordinates(this.current()) + f,
                h = g + this.width() * e,
                i = [];
            for (c = 0, d = this._coordinates.length; d > c; c++) a = this._coordinates[c - 1] || 0, b = Math.abs(this._coordinates[c]) + f * e, (this.op(a, "<=", g) && this.op(a, ">", h) || this.op(b, "<", g) && this.op(b, ">", h)) && i.push(c);
            this.$stage.children("." + this.settings.activeClass).removeClass(this.settings.activeClass), this.$stage.children(":eq(" + i.join("), :eq(") + ")").addClass(this.settings.activeClass), this.settings.center && (this.$stage.children("." + this.settings.centerClass).removeClass(this.settings.centerClass), this.$stage.children().eq(this.current()).addClass(this.settings.centerClass))
        }
    }], e.prototype.initialize = function() {
        if (this.trigger("initialize"), this.$element.addClass(this.settings.baseClass).addClass(this.settings.themeClass).toggleClass("owl-rtl", this.settings.rtl), this.browserSupport(), this.settings.autoWidth && this.state.imagesLoaded !== !0) {
            var b, c, e;
            if (b = this.$element.find("img"), c = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : d, e = this.$element.children(c).width(), b.length && 0 >= e) return this.preloadAutoWidthImages(b), !1
        }
        this.$element.addClass("owl-loading"), this.$stage = a("<" + this.settings.stageElement + ' class="owl-stage"/>').wrap('<div class="owl-stage-outer">'), this.$element.append(this.$stage.parent()), this.replace(this.$element.children().not(this.$stage.parent())), this._width = this.$element.width(), this.refresh(), this.$element.removeClass("owl-loading").addClass("owl-loaded"), this.eventsCall(), this.internalEvents(), this.addTriggerableEvents(), this.trigger("initialized")
    }, e.prototype.setup = function() {
        var b = this.viewport(),
            c = this.options.responsive,
            d = -1,
            e = null;
        c ? (a.each(c, function(a) {
            b >= a && a > d && (d = Number(a))
        }), e = a.extend({}, this.options, c[d]), delete e.responsive, e.responsiveClass && this.$element.attr("class", function(a, b) {
            return b.replace(/\b owl-responsive-\S+/g, "")
        }).addClass("owl-responsive-" + d)) : e = a.extend({}, this.options), (null === this.settings || this._breakpoint !== d) && (this.trigger("change", {
            property: {
                name: "settings",
                value: e
            }
        }), this._breakpoint = d, this.settings = e, this.invalidate("settings"), this.trigger("changed", {
            property: {
                name: "settings",
                value: this.settings
            }
        }))
    }, e.prototype.optionsLogic = function() {
        this.$element.toggleClass("owl-center", this.settings.center), this.settings.loop && this._items.length < this.settings.items && (this.settings.loop = !1), this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1)
    }, e.prototype.prepare = function(b) {
        var c = this.trigger("prepare", {
            content: b
        });
        return c.data || (c.data = a("<" + this.settings.itemElement + "/>").addClass(this.settings.itemClass).append(b)), this.trigger("prepared", {
            content: c.data
        }), c.data
    }, e.prototype.update = function() {
        for (var b = 0, c = this._pipe.length, d = a.proxy(function(a) {
                return this[a]
            }, this._invalidated), e = {}; c > b;)(this._invalidated.all || a.grep(this._pipe[b].filter, d).length > 0) && this._pipe[b].run(e), b++;
        this._invalidated = {}
    }, e.prototype.width = function(a) {
        switch (a = a || e.Width.Default) {
            case e.Width.Inner:
            case e.Width.Outer:
                return this._width;
            default:
                return this._width - 2 * this.settings.stagePadding + this.settings.margin
        }
    }, e.prototype.refresh = function() {
        if (0 === this._items.length) return !1;
        (new Date).getTime();
        this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$stage.addClass("owl-refresh"), this.update(), this.$stage.removeClass("owl-refresh"), this.state.orientation = b.orientation, this.watchVisibility(), this.trigger("refreshed")
    }, e.prototype.eventsCall = function() {
        this.e._onDragStart = a.proxy(function(a) {
            this.onDragStart(a)
        }, this), this.e._onDragMove = a.proxy(function(a) {
            this.onDragMove(a)
        }, this), this.e._onDragEnd = a.proxy(function(a) {
            this.onDragEnd(a)
        }, this), this.e._onResize = a.proxy(function(a) {
            this.onResize(a)
        }, this), this.e._transitionEnd = a.proxy(function(a) {
            this.transitionEnd(a)
        }, this), this.e._preventClick = a.proxy(function(a) {
            this.preventClick(a)
        }, this)
    }, e.prototype.onThrottledResize = function() {
        b.clearTimeout(this.resizeTimer), this.resizeTimer = b.setTimeout(this.e._onResize, this.settings.responsiveRefreshRate)
    }, e.prototype.onResize = function() {
        return this._items.length ? this._width === this.$element.width() ? !1 : this.trigger("resize").isDefaultPrevented() ? !1 : (this._width = this.$element.width(), this.invalidate("width"), this.refresh(), void this.trigger("resized")) : !1
    }, e.prototype.eventsRouter = function(a) {
        var b = a.type;
        "mousedown" === b || "touchstart" === b ? this.onDragStart(a) : "mousemove" === b || "touchmove" === b ? this.onDragMove(a) : "mouseup" === b || "touchend" === b ? this.onDragEnd(a) : "touchcancel" === b && this.onDragEnd(a)
    }, e.prototype.internalEvents = function() {
        var c = (k(), l());
        this.settings.mouseDrag ? (this.$stage.on("mousedown", a.proxy(function(a) {
            this.eventsRouter(a)
        }, this)), this.$stage.on("dragstart", function() {
            return !1
        }), this.$stage.get(0).onselectstart = function() {
            return !1
        }) : this.$element.addClass("owl-text-select-on"), this.settings.touchDrag && !c && this.$stage.on("touchstart touchcancel", a.proxy(function(a) {
            this.eventsRouter(a)
        }, this)), this.transitionEndVendor && this.on(this.$stage.get(0), this.transitionEndVendor, this.e._transitionEnd, !1), this.settings.responsive !== !1 && this.on(b, "resize", a.proxy(this.onThrottledResize, this))
    }, e.prototype.onDragStart = function(d) {
        var e, g, h, i;
        if (e = d.originalEvent || d || b.event, 3 === e.which || this.state.isTouch) return !1;
        if ("mousedown" === e.type && this.$stage.addClass("owl-grab"), this.trigger("drag"), this.drag.startTime = (new Date).getTime(), this.speed(0), this.state.isTouch = !0, this.state.isScrolling = !1, this.state.isSwiping = !1, this.drag.distance = 0, g = f(e).x, h = f(e).y, this.drag.offsetX = this.$stage.position().left, this.drag.offsetY = this.$stage.position().top, this.settings.rtl && (this.drag.offsetX = this.$stage.position().left + this.$stage.width() - this.width() + this.settings.margin), this.state.inMotion && this.support3d) i = this.getTransformProperty(), this.drag.offsetX = i, this.animate(i), this.state.inMotion = !0;
        else if (this.state.inMotion && !this.support3d) return this.state.inMotion = !1, !1;
        this.drag.startX = g - this.drag.offsetX, this.drag.startY = h - this.drag.offsetY, this.drag.start = g - this.drag.startX, this.drag.targetEl = e.target || e.srcElement, this.drag.updatedX = this.drag.start, ("IMG" === this.drag.targetEl.tagName || "A" === this.drag.targetEl.tagName) && (this.drag.targetEl.draggable = !1), a(c).on("mousemove.owl.dragEvents mouseup.owl.dragEvents touchmove.owl.dragEvents touchend.owl.dragEvents", a.proxy(function(a) {
            this.eventsRouter(a)
        }, this))
    }, e.prototype.onDragMove = function(a) {
        var c, e, g, h, i, j;
        this.state.isTouch && (this.state.isScrolling || (c = a.originalEvent || a || b.event, e = f(c).x, g = f(c).y, this.drag.currentX = e - this.drag.startX, this.drag.currentY = g - this.drag.startY, this.drag.distance = this.drag.currentX - this.drag.offsetX, this.drag.distance < 0 ? this.state.direction = this.settings.rtl ? "right" : "left" : this.drag.distance > 0 && (this.state.direction = this.settings.rtl ? "left" : "right"), this.settings.loop ? this.op(this.drag.currentX, ">", this.coordinates(this.minimum())) && "right" === this.state.direction ? this.drag.currentX -= (this.settings.center && this.coordinates(0)) - this.coordinates(this._items.length) : this.op(this.drag.currentX, "<", this.coordinates(this.maximum())) && "left" === this.state.direction && (this.drag.currentX += (this.settings.center && this.coordinates(0)) - this.coordinates(this._items.length)) : (h = this.coordinates(this.settings.rtl ? this.maximum() : this.minimum()), i = this.coordinates(this.settings.rtl ? this.minimum() : this.maximum()), j = this.settings.pullDrag ? this.drag.distance / 5 : 0, this.drag.currentX = Math.max(Math.min(this.drag.currentX, h + j), i + j)), (this.drag.distance > 8 || this.drag.distance < -8) && (c.preventDefault !== d ? c.preventDefault() : c.returnValue = !1, this.state.isSwiping = !0), this.drag.updatedX = this.drag.currentX, (this.drag.currentY > 16 || this.drag.currentY < -16) && this.state.isSwiping === !1 && (this.state.isScrolling = !0, this.drag.updatedX = this.drag.start), this.animate(this.drag.updatedX)))
    }, e.prototype.onDragEnd = function(b) {
        var d, e, f;
        if (this.state.isTouch) {
            if ("mouseup" === b.type && this.$stage.removeClass("owl-grab"), this.trigger("dragged"), this.drag.targetEl.removeAttribute("draggable"), this.state.isTouch = !1, this.state.isScrolling = !1, this.state.isSwiping = !1, 0 === this.drag.distance && this.state.inMotion !== !0) return this.state.inMotion = !1, !1;
            this.drag.endTime = (new Date).getTime(), d = this.drag.endTime - this.drag.startTime, e = Math.abs(this.drag.distance), (e > 3 || d > 300) && this.removeClick(this.drag.targetEl), f = this.closest(this.drag.updatedX), this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(f), this.invalidate("position"), this.update(), this.settings.pullDrag || this.drag.updatedX !== this.coordinates(f) || this.transitionEnd(), this.drag.distance = 0, a(c).off(".owl.dragEvents")
        }
    }, e.prototype.removeClick = function(c) {
        this.drag.targetEl = c, a(c).on("click.preventClick", this.e._preventClick), b.setTimeout(function() {
            a(c).off("click.preventClick")
        }, 300)
    }, e.prototype.preventClick = function(b) {
        b.preventDefault ? b.preventDefault() : b.returnValue = !1, b.stopPropagation && b.stopPropagation(), a(b.target).off("click.preventClick")
    }, e.prototype.getTransformProperty = function() {
        var a, c;
        return a = b.getComputedStyle(this.$stage.get(0), null).getPropertyValue(this.vendorName + "transform"), a = a.replace(/matrix(3d)?\(|\)/g, "").split(","), c = 16 === a.length, c !== !0 ? a[4] : a[12]
    }, e.prototype.closest = function(b) {
        var c = -1,
            d = 30,
            e = this.width(),
            f = this.coordinates();
        return this.settings.freeDrag || a.each(f, a.proxy(function(a, g) {
            return b > g - d && g + d > b ? c = a : this.op(b, "<", g) && this.op(b, ">", f[a + 1] || g - e) && (c = "left" === this.state.direction ? a + 1 : a), -1 === c
        }, this)), this.settings.loop || (this.op(b, ">", f[this.minimum()]) ? c = b = this.minimum() : this.op(b, "<", f[this.maximum()]) && (c = b = this.maximum())), c
    }, e.prototype.animate = function(b) {
        this.trigger("translate"), this.state.inMotion = this.speed() > 0, this.support3d ? this.$stage.css({
            transform: "translate3d(" + b + "px,0px, 0px)",
            transition: this.speed() / 1e3 + "s"
        }) : this.state.isTouch ? this.$stage.css({
            left: b + "px"
        }) : this.$stage.animate({
            left: b
        }, this.speed() / 1e3, this.settings.fallbackEasing, a.proxy(function() {
            this.state.inMotion && this.transitionEnd()
        }, this))
    }, e.prototype.current = function(a) {
        if (a === d) return this._current;
        if (0 === this._items.length) return d;
        if (a = this.normalize(a), this._current !== a) {
            var b = this.trigger("change", {
                property: {
                    name: "position",
                    value: a
                }
            });
            b.data !== d && (a = this.normalize(b.data)), this._current = a, this.invalidate("position"), this.trigger("changed", {
                property: {
                    name: "position",
                    value: this._current
                }
            })
        }
        return this._current
    }, e.prototype.invalidate = function(a) {
        this._invalidated[a] = !0
    }, e.prototype.reset = function(a) {
        a = this.normalize(a), a !== d && (this._speed = 0, this._current = a, this.suppress(["translate", "translated"]), this.animate(this.coordinates(a)), this.release(["translate", "translated"]))
    }, e.prototype.normalize = function(b, c) {
        var e = c ? this._items.length : this._items.length + this._clones.length;
        return !a.isNumeric(b) || 1 > e ? d : b = this._clones.length ? (b % e + e) % e : Math.max(this.minimum(c), Math.min(this.maximum(c), b))
    }, e.prototype.relative = function(a) {
        return a = this.normalize(a), a -= this._clones.length / 2, this.normalize(a, !0)
    }, e.prototype.maximum = function(a) {
        var b, c, d, e = 0,
            f = this.settings;
        if (a) return this._items.length - 1;
        if (!f.loop && f.center) b = this._items.length - 1;
        else if (f.loop || f.center)
            if (f.loop || f.center) b = this._items.length + f.items;
            else {
                if (!f.autoWidth && !f.merge) throw "Can not detect maximum absolute position.";
                for (revert = f.rtl ? 1 : -1, c = this.$stage.width() - this.$element.width();
                    (d = this.coordinates(e)) && !(d * revert >= c);) b = ++e
            } else b = this._items.length - f.items;
        return b
    }, e.prototype.minimum = function(a) {
        return a ? 0 : this._clones.length / 2
    }, e.prototype.items = function(a) {
        return a === d ? this._items.slice() : (a = this.normalize(a, !0), this._items[a])
    }, e.prototype.mergers = function(a) {
        return a === d ? this._mergers.slice() : (a = this.normalize(a, !0), this._mergers[a])
    }, e.prototype.clones = function(b) {
        var c = this._clones.length / 2,
            e = c + this._items.length,
            f = function(a) {
                return a % 2 === 0 ? e + a / 2 : c - (a + 1) / 2
            };
        return b === d ? a.map(this._clones, function(a, b) {
            return f(b)
        }) : a.map(this._clones, function(a, c) {
            return a === b ? f(c) : null
        })
    }, e.prototype.speed = function(a) {
        return a !== d && (this._speed = a), this._speed
    }, e.prototype.coordinates = function(b) {
        var c = null;
        return b === d ? a.map(this._coordinates, a.proxy(function(a, b) {
            return this.coordinates(b)
        }, this)) : (this.settings.center ? (c = this._coordinates[b], c += (this.width() - c + (this._coordinates[b - 1] || 0)) / 2 * (this.settings.rtl ? -1 : 1)) : c = this._coordinates[b - 1] || 0, c)
    }, e.prototype.duration = function(a, b, c) {
        return Math.min(Math.max(Math.abs(b - a), 1), 6) * Math.abs(c || this.settings.smartSpeed)
    }, e.prototype.to = function(c, d) {
        if (this.settings.loop) {
            var e = c - this.relative(this.current()),
                f = this.current(),
                g = this.current(),
                h = this.current() + e,
                i = 0 > g - h ? !0 : !1,
                j = this._clones.length + this._items.length;
            h < this.settings.items && i === !1 ? (f = g + this._items.length, this.reset(f)) : h >= j - this.settings.items && i === !0 && (f = g - this._items.length, this.reset(f)), b.clearTimeout(this.e._goToLoop), this.e._goToLoop = b.setTimeout(a.proxy(function() {
                this.speed(this.duration(this.current(), f + e, d)), this.current(f + e), this.update()
            }, this), 30)
        } else this.speed(this.duration(this.current(), c, d)), this.current(c), this.update()
    }, e.prototype.next = function(a) {
        a = a || !1, this.to(this.relative(this.current()) + 1, a)
    }, e.prototype.prev = function(a) {
        a = a || !1, this.to(this.relative(this.current()) - 1, a)
    }, e.prototype.transitionEnd = function(a) {
        return a !== d && (a.stopPropagation(), (a.target || a.srcElement || a.originalTarget) !== this.$stage.get(0)) ? !1 : (this.state.inMotion = !1, void this.trigger("translated"))
    }, e.prototype.viewport = function() {
        var d;
        if (this.options.responsiveBaseElement !== b) d = a(this.options.responsiveBaseElement).width();
        else if (b.innerWidth) d = b.innerWidth;
        else {
            if (!c.documentElement || !c.documentElement.clientWidth) throw "Can not detect viewport width.";
            d = c.documentElement.clientWidth
        }
        return d
    }, e.prototype.replace = function(b) {
        this.$stage.empty(), this._items = [], b && (b = b instanceof jQuery ? b : a(b)), this.settings.nestedItemSelector && (b = b.find("." + this.settings.nestedItemSelector)), b.filter(function() {
            return 1 === this.nodeType
        }).each(a.proxy(function(a, b) {
            b = this.prepare(b), this.$stage.append(b), this._items.push(b), this._mergers.push(1 * b.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)
        }, this)), this.reset(a.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items")
    }, e.prototype.add = function(a, b) {
        b = b === d ? this._items.length : this.normalize(b, !0), this.trigger("add", {
            content: a,
            position: b
        }), 0 === this._items.length || b === this._items.length ? (this.$stage.append(a), this._items.push(a), this._mergers.push(1 * a.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)) : (this._items[b].before(a), this._items.splice(b, 0, a), this._mergers.splice(b, 0, 1 * a.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)), this.invalidate("items"), this.trigger("added", {
            content: a,
            position: b
        })
    }, e.prototype.remove = function(a) {
        a = this.normalize(a, !0), a !== d && (this.trigger("remove", {
            content: this._items[a],
            position: a
        }), this._items[a].remove(), this._items.splice(a, 1), this._mergers.splice(a, 1), this.invalidate("items"), this.trigger("removed", {
            content: null,
            position: a
        }))
    }, e.prototype.addTriggerableEvents = function() {
        var b = a.proxy(function(b, c) {
            return a.proxy(function(a) {
                a.relatedTarget !== this && (this.suppress([c]), b.apply(this, [].slice.call(arguments, 1)), this.release([c]))
            }, this)
        }, this);
        a.each({
            next: this.next,
            prev: this.prev,
            to: this.to,
            destroy: this.destroy,
            refresh: this.refresh,
            replace: this.replace,
            add: this.add,
            remove: this.remove
        }, a.proxy(function(a, c) {
            this.$element.on(a + ".owl.carousel", b(c, a + ".owl.carousel"))
        }, this))
    }, e.prototype.watchVisibility = function() {
        function c(a) {
            return a.offsetWidth > 0 && a.offsetHeight > 0
        }

        function d() {
            c(this.$element.get(0)) && (this.$element.removeClass("owl-hidden"), this.refresh(), b.clearInterval(this.e._checkVisibile))
        }
        c(this.$element.get(0)) || (this.$element.addClass("owl-hidden"), b.clearInterval(this.e._checkVisibile), this.e._checkVisibile = b.setInterval(a.proxy(d, this), 500))
    }, e.prototype.preloadAutoWidthImages = function(b) {
        var c, d, e, f;
        c = 0, d = this, b.each(function(g, h) {
            e = a(h), f = new Image, f.onload = function() {
                c++, e.attr("src", f.src), e.css("opacity", 1), c >= b.length && (d.state.imagesLoaded = !0, d.initialize())
            }, f.src = e.attr("src") || e.attr("data-src") || e.attr("data-src-retina")
        })
    }, e.prototype.destroy = function() {
        this.$element.hasClass(this.settings.themeClass) && this.$element.removeClass(this.settings.themeClass), this.settings.responsive !== !1 && a(b).off("resize.owl.carousel"), this.transitionEndVendor && this.off(this.$stage.get(0), this.transitionEndVendor, this.e._transitionEnd);
        for (var d in this._plugins) this._plugins[d].destroy();
        (this.settings.mouseDrag || this.settings.touchDrag) && (this.$stage.off("mousedown touchstart touchcancel"), a(c).off(".owl.dragEvents"), this.$stage.get(0).onselectstart = function() {}, this.$stage.off("dragstart", function() {
            return !1
        })), this.$element.off(".owl"), this.$stage.children(".cloned").remove(), this.e = null, this.$element.removeData("owlCarousel"), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$stage.unwrap()
    }, e.prototype.op = function(a, b, c) {
        var d = this.settings.rtl;
        switch (b) {
            case "<":
                return d ? a > c : c > a;
            case ">":
                return d ? c > a : a > c;
            case ">=":
                return d ? c >= a : a >= c;
            case "<=":
                return d ? a >= c : c >= a
        }
    }, e.prototype.on = function(a, b, c, d) {
        a.addEventListener ? a.addEventListener(b, c, d) : a.attachEvent && a.attachEvent("on" + b, c)
    }, e.prototype.off = function(a, b, c, d) {
        a.removeEventListener ? a.removeEventListener(b, c, d) : a.detachEvent && a.detachEvent("on" + b, c)
    }, e.prototype.trigger = function(b, c, d) {
        var e = {
                item: {
                    count: this._items.length,
                    index: this.current()
                }
            },
            f = a.camelCase(a.grep(["on", b, d], function(a) {
                return a
            }).join("-").toLowerCase()),
            g = a.Event([b, "owl", d || "carousel"].join(".").toLowerCase(), a.extend({
                relatedTarget: this
            }, e, c));
        return this._supress[b] || (a.each(this._plugins, function(a, b) {
            b.onTrigger && b.onTrigger(g)
        }), this.$element.trigger(g), this.settings && "function" == typeof this.settings[f] && this.settings[f].apply(this, g)), g
    }, e.prototype.suppress = function(b) {
        a.each(b, a.proxy(function(a, b) {
            this._supress[b] = !0
        }, this))
    }, e.prototype.release = function(b) {
        a.each(b, a.proxy(function(a, b) {
            delete this._supress[b]
        }, this))
    }, e.prototype.browserSupport = function() {
        if (this.support3d = j(), this.support3d) {
            this.transformVendor = i();
            var a = ["transitionend", "webkitTransitionEnd", "transitionend", "oTransitionEnd"];
            this.transitionEndVendor = a[h()], this.vendorName = this.transformVendor.replace(/Transform/i, ""), this.vendorName = "" !== this.vendorName ? "-" + this.vendorName.toLowerCase() + "-" : ""
        }
        this.state.orientation = b.orientation
    }, a.fn.owlCarousel = function(b) {
        return this.each(function() {
            a(this).data("owlCarousel") || a(this).data("owlCarousel", new e(this, b))
        })
    }, a.fn.owlCarousel.Constructor = e
}(window.Zepto || window.jQuery, window, document),
function(a, b) {
    var c = function(b) {
        this._core = b, this._loaded = [], this._handlers = {
            "initialized.owl.carousel change.owl.carousel": a.proxy(function(b) {
                if (b.namespace && this._core.settings && this._core.settings.lazyLoad && (b.property && "position" == b.property.name || "initialized" == b.type))
                    for (var c = this._core.settings, d = c.center && Math.ceil(c.items / 2) || c.items, e = c.center && -1 * d || 0, f = (b.property && b.property.value || this._core.current()) + e, g = this._core.clones().length, h = a.proxy(function(a, b) {
                            this.load(b)
                        }, this); e++ < d;) this.load(g / 2 + this._core.relative(f)), g && a.each(this._core.clones(this._core.relative(f++)), h)
            }, this)
        }, this._core.options = a.extend({}, c.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    c.Defaults = {
        lazyLoad: !1
    }, c.prototype.load = function(c) {
        var d = this._core.$stage.children().eq(c),
            e = d && d.find(".owl-lazy");
        !e || a.inArray(d.get(0), this._loaded) > -1 || (e.each(a.proxy(function(c, d) {
            var e, f = a(d),
                g = b.devicePixelRatio > 1 && f.attr("data-src-retina") || f.attr("data-src");
            this._core.trigger("load", {
                element: f,
                url: g
            }, "lazy"), f.is("img") ? f.one("load.owl.lazy", a.proxy(function() {
                f.css("opacity", 1), this._core.trigger("loaded", {
                    element: f,
                    url: g
                }, "lazy")
            }, this)).attr("src", g) : (e = new Image, e.onload = a.proxy(function() {
                f.css({
                    "background-image": "url(" + g + ")",
                    opacity: "1"
                }), this._core.trigger("loaded", {
                    element: f,
                    url: g
                }, "lazy")
            }, this), e.src = g)
        }, this)), this._loaded.push(d.get(0)))
    }, c.prototype.destroy = function() {
        var a, b;
        for (a in this.handlers) this._core.$element.off(a, this.handlers[a]);
        for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
    }, a.fn.owlCarousel.Constructor.Plugins.Lazy = c
}(window.Zepto || window.jQuery, window, document),
function(a) {
    var b = function(c) {
        this._core = c, this._handlers = {
            "initialized.owl.carousel": a.proxy(function() {
                this._core.settings.autoHeight && this.update()
            }, this),
            "changed.owl.carousel": a.proxy(function(a) {
                this._core.settings.autoHeight && "position" == a.property.name && this.update()
            }, this),
            "loaded.owl.lazy": a.proxy(function(a) {
                this._core.settings.autoHeight && a.element.closest("." + this._core.settings.itemClass) === this._core.$stage.children().eq(this._core.current()) && this.update()
            }, this)
        }, this._core.options = a.extend({}, b.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    b.Defaults = {
        autoHeight: !1,
        autoHeightClass: "owl-height"
    }, b.prototype.update = function() {
        this._core.$stage.parent().height(this._core.$stage.children().eq(this._core.current()).height()).addClass(this._core.settings.autoHeightClass)
    }, b.prototype.destroy = function() {
        var a, b;
        for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
        for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
    }, a.fn.owlCarousel.Constructor.Plugins.AutoHeight = b
}(window.Zepto || window.jQuery, window, document),
function(a, b, c) {
    var d = function(b) {
        this._core = b, this._videos = {}, this._playing = null, this._fullscreen = !1, this._handlers = {
            "resize.owl.carousel": a.proxy(function(a) {
                this._core.settings.video && !this.isInFullScreen() && a.preventDefault()
            }, this),
            "refresh.owl.carousel changed.owl.carousel": a.proxy(function() {
                this._playing && this.stop()
            }, this),
            "prepared.owl.carousel": a.proxy(function(b) {
                var c = a(b.content).find(".owl-video");
                c.length && (c.css("display", "none"), this.fetch(c, a(b.content)))
            }, this)
        }, this._core.options = a.extend({}, d.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", a.proxy(function(a) {
            this.play(a)
        }, this))
    };
    d.Defaults = {
        video: !1,
        videoHeight: !1,
        videoWidth: !1
    }, d.prototype.fetch = function(a, b) {
        var c = a.attr("data-vimeo-id") ? "vimeo" : "youtube",
            d = a.attr("data-vimeo-id") || a.attr("data-youtube-id"),
            e = a.attr("data-width") || this._core.settings.videoWidth,
            f = a.attr("data-height") || this._core.settings.videoHeight,
            g = a.attr("href");
        if (!g) throw new Error("Missing video URL.");
        if (d = g.match(/(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/), d[3].indexOf("youtu") > -1) c = "youtube";
        else {
            if (!(d[3].indexOf("vimeo") > -1)) throw new Error("Video URL not supported.");
            c = "vimeo"
        }
        d = d[6], this._videos[g] = {
            type: c,
            id: d,
            width: e,
            height: f
        }, b.attr("data-video", g), this.thumbnail(a, this._videos[g])
    }, d.prototype.thumbnail = function(b, c) {
        var d, e, f, g = c.width && c.height ? 'style="width:' + c.width + "px;height:" + c.height + 'px;"' : "",
            h = b.find("img"),
            i = "src",
            j = "",
            k = this._core.settings,
            l = function(a) {
                e = '<div class="owl-video-play-icon"></div>', d = k.lazyLoad ? '<div class="owl-video-tn ' + j + '" ' + i + '="' + a + '"></div>' : '<div class="owl-video-tn" style="opacity:1;background-image:url(' + a + ')"></div>', b.after(d), b.after(e)
            };
        return b.wrap('<div class="owl-video-wrapper"' + g + "></div>"), this._core.settings.lazyLoad && (i = "data-src", j = "owl-lazy"), h.length ? (l(h.attr(i)), h.remove(), !1) : void("youtube" === c.type ? (f = "http://img.youtube.com/vi/" + c.id + "/hqdefault.jpg", l(f)) : "vimeo" === c.type && a.ajax({
            type: "GET",
            url: "http://vimeo.com/api/v2/video/" + c.id + ".json",
            jsonp: "callback",
            dataType: "jsonp",
            success: function(a) {
                f = a[0].thumbnail_large, l(f)
            }
        }))
    }, d.prototype.stop = function() {
        this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null
    }, d.prototype.play = function(b) {
        this._core.trigger("play", null, "video"), this._playing && this.stop();
        var c, d, e = a(b.target || b.srcElement),
            f = e.closest("." + this._core.settings.itemClass),
            g = this._videos[f.attr("data-video")],
            h = g.width || "100%",
            i = g.height || this._core.$stage.height();
        "youtube" === g.type ? c = '<iframe width="' + h + '" height="' + i + '" src="http://www.youtube.com/embed/' + g.id + "?autoplay=1&v=" + g.id + '" frameborder="0" allowfullscreen></iframe>' : "vimeo" === g.type && (c = '<iframe src="http://player.vimeo.com/video/' + g.id + '?autoplay=1" width="' + h + '" height="' + i + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'), f.addClass("owl-video-playing"), this._playing = f, d = a('<div style="height:' + i + "px; width:" + h + 'px" class="owl-video-frame">' + c + "</div>"), e.after(d)
    }, d.prototype.isInFullScreen = function() {
        var d = c.fullscreenElement || c.mozFullScreenElement || c.webkitFullscreenElement;
        return d && a(d).parent().hasClass("owl-video-frame") && (this._core.speed(0), this._fullscreen = !0), d && this._fullscreen && this._playing ? !1 : this._fullscreen ? (this._fullscreen = !1, !1) : this._playing && this._core.state.orientation !== b.orientation ? (this._core.state.orientation = b.orientation, !1) : !0
    }, d.prototype.destroy = function() {
        var a, b;
        this._core.$element.off("click.owl.video");
        for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
        for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
    }, a.fn.owlCarousel.Constructor.Plugins.Video = d
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
    var e = function(b) {
        this.core = b, this.core.options = a.extend({}, e.Defaults, this.core.options), this.swapping = !0, this.previous = d, this.next = d, this.handlers = {
            "change.owl.carousel": a.proxy(function(a) {
                "position" == a.property.name && (this.previous = this.core.current(), this.next = a.property.value)
            }, this),
            "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": a.proxy(function(a) {
                this.swapping = "translated" == a.type
            }, this),
            "translate.owl.carousel": a.proxy(function() {
                this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
            }, this)
        }, this.core.$element.on(this.handlers)
    };
    e.Defaults = {
        animateOut: !1,
        animateIn: !1
    }, e.prototype.swap = function() {
        if (1 === this.core.settings.items && this.core.support3d) {
            this.core.speed(0);
            var b, c = a.proxy(this.clear, this),
                d = this.core.$stage.children().eq(this.previous),
                e = this.core.$stage.children().eq(this.next),
                f = this.core.settings.animateIn,
                g = this.core.settings.animateOut;
            this.core.current() !== this.previous && (g && (b = this.core.coordinates(this.previous) - this.core.coordinates(this.next), d.css({
                left: b + "px"
            }).addClass("animated owl-animated-out").addClass(g).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", c)), f && e.addClass("animated owl-animated-in").addClass(f).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", c))
        }
    }, e.prototype.clear = function(b) {
        a(b.target).css({
            left: ""
        }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.transitionEnd()
    }, e.prototype.destroy = function() {
        var a, b;
        for (a in this.handlers) this.core.$element.off(a, this.handlers[a]);
        for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
    }, a.fn.owlCarousel.Constructor.Plugins.Animate = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c) {
    var d = function(b) {
        this.core = b, this.core.options = a.extend({}, d.Defaults, this.core.options), this.handlers = {
            "translated.owl.carousel refreshed.owl.carousel": a.proxy(function() {
                this.autoplay()
            }, this),
            "play.owl.autoplay": a.proxy(function(a, b, c) {
                this.play(b, c)
            }, this),
            "stop.owl.autoplay": a.proxy(function() {
                this.stop()
            }, this),
            "mouseover.owl.autoplay": a.proxy(function() {
                this.core.settings.autoplayHoverPause && this.pause()
            }, this),
            "mouseleave.owl.autoplay": a.proxy(function() {
                this.core.settings.autoplayHoverPause && this.autoplay()
            }, this)
        }, this.core.$element.on(this.handlers)
    };
    d.Defaults = {
        autoplay: !1,
        autoplayTimeout: 5e3,
        autoplayHoverPause: !1,
        autoplaySpeed: !1
    }, d.prototype.autoplay = function() {
        this.core.settings.autoplay && !this.core.state.videoPlay ? (b.clearInterval(this.interval), this.interval = b.setInterval(a.proxy(function() {
            this.play()
        }, this), this.core.settings.autoplayTimeout)) : b.clearInterval(this.interval)
    }, d.prototype.play = function() {
        return c.hidden === !0 || this.core.state.isTouch || this.core.state.isScrolling || this.core.state.isSwiping || this.core.state.inMotion ? void 0 : this.core.settings.autoplay === !1 ? void b.clearInterval(this.interval) : void this.core.next(this.core.settings.autoplaySpeed)
    }, d.prototype.stop = function() {
        b.clearInterval(this.interval)
    }, d.prototype.pause = function() {
        b.clearInterval(this.interval)
    }, d.prototype.destroy = function() {
        var a, c;
        b.clearInterval(this.interval);
        for (a in this.handlers) this.core.$element.off(a, this.handlers[a]);
        for (c in Object.getOwnPropertyNames(this)) "function" != typeof this[c] && (this[c] = null)
    }, a.fn.owlCarousel.Constructor.Plugins.autoplay = d
}(window.Zepto || window.jQuery, window, document),
function(a) {
    "use strict";
    var b = function(c) {
        this._core = c, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = {
            next: this._core.next,
            prev: this._core.prev,
            to: this._core.to
        }, this._handlers = {
            "prepared.owl.carousel": a.proxy(function(b) {
                this._core.settings.dotsData && this._templates.push(a(b.content).find("[data-dot]").andSelf("[data-dot]").attr("data-dot"))
            }, this),
            "add.owl.carousel": a.proxy(function(b) {
                this._core.settings.dotsData && this._templates.splice(b.position, 0, a(b.content).find("[data-dot]").andSelf("[data-dot]").attr("data-dot"))
            }, this),
            "remove.owl.carousel prepared.owl.carousel": a.proxy(function(a) {
                this._core.settings.dotsData && this._templates.splice(a.position, 1)
            }, this),
            "change.owl.carousel": a.proxy(function(a) {
                if ("position" == a.property.name && !this._core.state.revert && !this._core.settings.loop && this._core.settings.navRewind) {
                    var b = this._core.current(),
                        c = this._core.maximum(),
                        d = this._core.minimum();
                    a.data = a.property.value > c ? b >= c ? d : c : a.property.value < d ? c : a.property.value
                }
            }, this),
            "changed.owl.carousel": a.proxy(function(a) {
                "position" == a.property.name && this.draw()
            }, this),
            "refreshed.owl.carousel": a.proxy(function() {
                this._initialized || (this.initialize(), this._initialized = !0), this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation")
            }, this)
        }, this._core.options = a.extend({}, b.Defaults, this._core.options), this.$element.on(this._handlers)
    };
    b.Defaults = {
        nav: !1,
        navRewind: !0,
        navText: ["prev", "next"],
        navSpeed: !1,
        navElement: "div",
        navContainer: !1,
        navContainerClass: "owl-nav",
        navClass: ["owl-prev", "owl-next"],
        slideBy: 1,
        dotClass: "owl-dot",
        dotsClass: "owl-dots",
        dots: !0,
        dotsEach: !1,
        dotData: !1,
        dotsSpeed: !1,
        dotsContainer: !1,
        controlsClass: "owl-controls"
    }, b.prototype.initialize = function() {
        var b, c, d = this._core.settings;
        d.dotsData || (this._templates = [a("<div>").addClass(d.dotClass).append(a("<span>")).prop("outerHTML")]), d.navContainer && d.dotsContainer || (this._controls.$container = a("<div>").addClass(d.controlsClass).appendTo(this.$element)), this._controls.$indicators = d.dotsContainer ? a(d.dotsContainer) : a("<div>").hide().addClass(d.dotsClass).appendTo(this._controls.$container), this._controls.$indicators.on("click", "div", a.proxy(function(b) {
            var c = a(b.target).parent().is(this._controls.$indicators) ? a(b.target).index() : a(b.target).parent().index();
            b.preventDefault(), this.to(c, d.dotsSpeed)
        }, this)), b = d.navContainer ? a(d.navContainer) : a("<div>").addClass(d.navContainerClass).prependTo(this._controls.$container), this._controls.$next = a("<" + d.navElement + ">"), this._controls.$previous = this._controls.$next.clone(), this._controls.$previous.addClass(d.navClass[0]).html(d.navText[0]).hide().prependTo(b).on("click", a.proxy(function() {
            this.prev(d.navSpeed)
        }, this)), this._controls.$next.addClass(d.navClass[1]).html(d.navText[1]).hide().appendTo(b).on("click", a.proxy(function() {
            this.next(d.navSpeed)
        }, this));
        for (c in this._overrides) this._core[c] = a.proxy(this[c], this)
    }, b.prototype.destroy = function() {
        var a, b, c, d;
        for (a in this._handlers) this.$element.off(a, this._handlers[a]);
        for (b in this._controls) this._controls[b].remove();
        for (d in this.overides) this._core[d] = this._overrides[d];
        for (c in Object.getOwnPropertyNames(this)) "function" != typeof this[c] && (this[c] = null)
    }, b.prototype.update = function() {
        var a, b, c, d = this._core.settings,
            e = this._core.clones().length / 2,
            f = e + this._core.items().length,
            g = d.center || d.autoWidth || d.dotData ? 1 : d.dotsEach || d.items;
        if ("page" !== d.slideBy && (d.slideBy = Math.min(d.slideBy, d.items)), d.dots || "page" == d.slideBy)
            for (this._pages = [], a = e, b = 0, c = 0; f > a; a++)(b >= g || 0 === b) && (this._pages.push({
                start: a - e,
                end: a - e + g - 1
            }), b = 0, ++c), b += this._core.mergers(this._core.relative(a))
    }, b.prototype.draw = function() {
        var b, c, d = "",
            e = this._core.settings,
            f = (this._core.$stage.children(), this._core.relative(this._core.current()));
        if (!e.nav || e.loop || e.navRewind || (this._controls.$previous.toggleClass("disabled", 0 >= f), this._controls.$next.toggleClass("disabled", f >= this._core.maximum())), this._controls.$previous.toggle(e.nav), this._controls.$next.toggle(e.nav), e.dots) {
            if (b = this._pages.length - this._controls.$indicators.children().length, e.dotData && 0 !== b) {
                for (c = 0; c < this._controls.$indicators.children().length; c++) d += this._templates[this._core.relative(c)];
                this._controls.$indicators.html(d)
            } else b > 0 ? (d = new Array(b + 1).join(this._templates[0]), this._controls.$indicators.append(d)) : 0 > b && this._controls.$indicators.children().slice(b).remove();
            this._controls.$indicators.find(".active").removeClass("active"), this._controls.$indicators.children().eq(a.inArray(this.current(), this._pages)).addClass("active")
        }
        this._controls.$indicators.toggle(e.dots)
    }, b.prototype.onTrigger = function(b) {
        var c = this._core.settings;
        b.page = {
            index: a.inArray(this.current(), this._pages),
            count: this._pages.length,
            size: c && (c.center || c.autoWidth || c.dotData ? 1 : c.dotsEach || c.items)
        }
    }, b.prototype.current = function() {
        var b = this._core.relative(this._core.current());
        return a.grep(this._pages, function(a) {
            return a.start <= b && a.end >= b
        }).pop()
    }, b.prototype.getPosition = function(b) {
        var c, d, e = this._core.settings;
        return "page" == e.slideBy ? (c = a.inArray(this.current(), this._pages), d = this._pages.length, b ? ++c : --c, c = this._pages[(c % d + d) % d].start) : (c = this._core.relative(this._core.current()), d = this._core.items().length, b ? c += e.slideBy : c -= e.slideBy), c
    }, b.prototype.next = function(b) {
        a.proxy(this._overrides.to, this._core)(this.getPosition(!0), b)
    }, b.prototype.prev = function(b) {
        a.proxy(this._overrides.to, this._core)(this.getPosition(!1), b)
    }, b.prototype.to = function(b, c, d) {
        var e;
        d ? a.proxy(this._overrides.to, this._core)(b, c) : (e = this._pages.length, a.proxy(this._overrides.to, this._core)(this._pages[(b % e + e) % e].start, c))
    }, a.fn.owlCarousel.Constructor.Plugins.Navigation = b
}(window.Zepto || window.jQuery, window, document),
function(a, b) {
    "use strict";
    var c = function(d) {
        this._core = d, this._hashes = {}, this.$element = this._core.$element, this._handlers = {
            "initialized.owl.carousel": a.proxy(function() {
                "URLHash" == this._core.settings.startPosition && a(b).trigger("hashchange.owl.navigation")
            }, this),
            "prepared.owl.carousel": a.proxy(function(b) {
                var c = a(b.content).find("[data-hash]").andSelf("[data-hash]").attr("data-hash");
                this._hashes[c] = b.content
            }, this)
        }, this._core.options = a.extend({}, c.Defaults, this._core.options), this.$element.on(this._handlers), a(b).on("hashchange.owl.navigation", a.proxy(function() {
            var a = b.location.hash.substring(1),
                c = this._core.$stage.children(),
                d = this._hashes[a] && c.index(this._hashes[a]) || 0;
            return a ? void this._core.to(d, !1, !0) : !1
        }, this))
    };
    c.Defaults = {
        URLhashListener: !1
    }, c.prototype.destroy = function() {
        var c, d;
        a(b).off("hashchange.owl.navigation");
        for (c in this._handlers) this._core.$element.off(c, this._handlers[c]);
        for (d in Object.getOwnPropertyNames(this)) "function" != typeof this[d] && (this[d] = null)
    }, a.fn.owlCarousel.Constructor.Plugins.Hash = c
}(window.Zepto || window.jQuery, window, document);
(function(){"undefined"==typeof Spry&&(window.Spry={});Spry.Widget||(Spry.Widget={});Spry.Widget.BrowserSniff=function(){var a=navigator.userAgent.toString();this.mozilla=this.ie=this.opera=this.safari=!1;var c=/MSIE.([0-9\.]*)/i,b=/gecko/i,d=/(applewebkit|safari)\/([\d\.]*)/i,e=!1;(e=a.match(/Opera.([0-9\.]*)/i))?(this.opera=!0,this.version=parseFloat(e[1])):(e=a.match(c))?(this.ie=!0,this.version=parseFloat(e[1])):(e=a.match(d))?(this.safari=!0,this.version=parseFloat(e[2])):a.match(b)&&(e=a.match(/rv:\s*([0-9\.]+)/i),
this.mozilla=!0,this.version=parseFloat(e[1]));this.windows=this.mac=this.linux=!1;this.Platform=a.match(/windows/i)?"windows":a.match(/linux/i)?"linux":a.match(/mac/i)?"mac":a.match(/unix/i)?"unix":"unknown";this[this.Platform]=!0;this.v=this.version;this.safari&&this.mac&&this.mozilla&&(this.mozilla=!1)};Spry.is=new Spry.Widget.BrowserSniff;Spry.Widget.ValidationTextarea=function(a,c){c=Spry.Widget.Utils.firstValid(c,{});this.flags={locked:!1};this.options={};this.element=a;this.init(a);if(this.isBrowserSupported()){c.useCharacterMasking=
Spry.Widget.Utils.firstValid(c.useCharacterMasking,!0);c.hint=Spry.Widget.Utils.firstValid(c.hint,"");c.isRequired=Spry.Widget.Utils.firstValid(c.isRequired,!0);c.additionalError=Spry.Widget.Utils.firstValid(c.additionalError,!1);Spry.Widget.Utils.setOptions(this,c);Spry.Widget.Utils.setOptions(this.options,c);c.additionalError&&(this.additionalError=this.getElement(c.additionalError));var b=["submit"].concat(Spry.Widget.Utils.firstValid(this.options.validateOn,[])),b=b.join(",");this.validateOn=
0;this.validateOn|=-1!=b.indexOf("submit")?Spry.Widget.ValidationTextarea.ONSUBMIT:0;this.validateOn|=-1!=b.indexOf("blur")?Spry.Widget.ValidationTextarea.ONBLUR:0;this.validateOn|=-1!=b.indexOf("change")?Spry.Widget.ValidationTextarea.ONCHANGE:0;Spry.Widget.ValidationTextarea.onloadDidFire?this.attachBehaviors():Spry.Widget.ValidationTextarea.loadQueue.push(this)}};Spry.Widget.ValidationTextarea.ONCHANGE=1;Spry.Widget.ValidationTextarea.ONBLUR=2;Spry.Widget.ValidationTextarea.ONSUBMIT=4;Spry.Widget.ValidationTextarea.INITIAL=
"Initial";Spry.Widget.ValidationTextarea.REQUIRED="Required";Spry.Widget.ValidationTextarea.INVALID="Invalid Format";Spry.Widget.ValidationTextarea.MINIMUM="Minimum Number of Chars Not Met";Spry.Widget.ValidationTextarea.MAXIMUM="Maximum Number of Chars Exceeded";Spry.Widget.ValidationTextarea.VALID="Valid";Spry.Widget.ValidationTextarea.prototype.init=function(a){this.element=this.getElement(a);this.event_handlers=[];this.requiredClass="textareaRequiredState";this.invalidCharsMaxClass="textareaMaxCharsState";
this.invalidCharsMinClass="textareaMinCharsState";this.validClass="textareaValidState";this.focusClass="textareaFocusState";this.hintClass="textareaHintState";this.textareaFlashClass="textareaFlashState";this.safariClicked=this.isRequireInvalid=this.isMinInvalid=this.isMaxInvalid=!1;this.state=Spry.Widget.ValidationTextarea.INITIAL};Spry.Widget.ValidationTextarea.prototype.destroy=function(){if(this.event_handlers)for(var a=0;a<this.event_handlers.length;a++)Spry.Widget.Utils.removeEventListener(this.event_handlers[a][0],
this.event_handlers[a][1],this.event_handlers[a][2],!1);try{delete this.element}catch(d){}try{delete this.input}catch(d){}try{delete this.counterEl}catch(d){}try{delete this.form}catch(d){}try{delete this.event_handlers}catch(d){}try{this.cursorPosition.destroy()}catch(d){}try{delete this.cursorPosition}catch(d){}try{this.initialCursor.destroy()}catch(d){}try{delete this.initialCursor}catch(d){}for(var c=Spry.Widget.Form.onSubmitWidgetQueue,b=c.length,a=0;a<b;a++)if(c[a]==this){c.splice(a,1);break}};
Spry.Widget.ValidationTextarea.prototype.isDisabled=function(){return this.input&&(this.input.disabled||this.input.readOnly)||!this.input};Spry.Widget.ValidationTextarea.prototype.getElement=function(a){return a&&"string"==typeof a?document.getElementById(a):a};Spry.Widget.ValidationTextarea.addLoadListener=function(a){"undefined"!=typeof window.addEventListener?window.addEventListener("load",a,!1):"undefined"!=typeof document.addEventListener?document.addEventListener("load",a,!1):"undefined"!=typeof window.attachEvent&&
window.attachEvent("onload",a)};Spry.Widget.ValidationTextarea.processLoadQueue=function(a){Spry.Widget.ValidationTextarea.onloadDidFire=!0;a=Spry.Widget.ValidationTextarea.loadQueue;for(var c=a.length,b=0;b<c;b++)a[b].attachBehaviors()};Spry.Widget.ValidationTextarea.onloadDidFire=!1;Spry.Widget.ValidationTextarea.loadQueue=[];Spry.Widget.ValidationTextarea.addLoadListener(Spry.Widget.ValidationTextarea.processLoadQueue);Spry.Widget.ValidationTextarea.addLoadListener(function(){Spry.Widget.Utils.addEventListener(window,
"unload",Spry.Widget.Form.destroyAll,!1)});Spry.Widget.ValidationTextarea.prototype.isBrowserSupported=function(){return Spry.is.ie&&5<=Spry.is.v&&Spry.is.windows||Spry.is.mozilla&&1.4<=Spry.is.v||Spry.is.safari||Spry.is.opera&&9<=Spry.is.v};Spry.Widget.ValidationTextarea.prototype.attachBehaviors=function(){this.element&&(this.input="TEXTAREA"==this.element.nodeName?this.element:Spry.Widget.Utils.getFirstChildWithNodeNameAtAnyLevel(this.element,"TEXTAREA"));this.options&&this.options.counterType&&
("chars_count"==this.options.counterType||"chars_remaining"==this.options.counterType)&&(this.counterEl=document.getElementById(this.options.counterId),this.counterChar());if(this.input){this.input.setAttribute("AutoComplete","off");this.putHint();this.cursorPosition=new Spry.Widget.SelectionDescriptor(this.input);var a=this;this.event_handlers=[];this.useCharacterMasking&&(Spry.is.ie?(this.event_handlers.push([this.input,"propertychange",function(b){return a.onKeyEvent(b||event)}]),this.event_handlers.push([this.input,
"drop",function(b){return a.onDrop(b||event)}]),this.event_handlers.push([this.input,"keypress",function(b){return a.onKeyPress(b||event)}])):(this.event_handlers.push([this.input,"keydown",function(b){return a.onKeyDown(b)}]),this.event_handlers.push([this.input,"keypress",function(b){return a.safariKeyPress(b)}]),this.event_handlers.push([this.input,"keyup",function(b){return a.safariValidate(b)}]),Spry.is.safari?(this.event_handlers.push([this.input,"mouseup",function(b){return a.safariMouseUp(b)}]),
this.event_handlers.push([this.input,"mousedown",function(b){return a.safariMouseDown(b)}])):(this.event_handlers.push([this.input,"dragdrop",function(b){return a.onKeyEvent(b)}]),this.event_handlers.push([this.input,"dragenter",function(b){a.removeHint();return a.onKeyDown(b)}]),this.event_handlers.push([this.input,"dragexit",function(b){return a.putHint()}]))),this.event_handlers.push([this.input,"keydown",function(b){return a.onKeyDown(b||event)}]));this.event_handlers.push([this.input,"focus",
function(b){return a.onFocus(b||event)}]);this.event_handlers.push([this.input,"mousedown",function(b){return a.onMouseDown(b||event)}]);this.event_handlers.push([this.input,"blur",function(b){return a.onBlur(b||event)}]);this.validateOn&Spry.Widget.ValidationTextarea.ONCHANGE&&(Spry.is.ie?(this.event_handlers.push([this.input,"propertychange",function(b){return a.onChange(b||event)}]),this.event_handlers.push([this.input,"drop",function(b){return a.onChange(b||event)}])):(this.event_handlers.push([this.input,
"keydown",function(b){return a.onKeyDown(b)}]),this.event_handlers.push([this.input,"keypress",function(b){return a.safariChangeKeyPress(b)}]),this.event_handlers.push([this.input,"keyup",function(b){return a.safariChangeValidate(b)}]),Spry.is.safari?(this.event_handlers.push([this.input,"mouseup",function(b){return a.safariChangeMouseUp(b)}]),this.event_handlers.push([this.input,"mousedown",function(b){return a.safariMouseDown(b)}])):(this.event_handlers.push([this.input,"dragdrop",function(b){return a.onChange(b)}]),
this.event_handlers.push([this.input,"dragenter",function(b){a.removeHint();return a.onKeyDown(b)}]),this.event_handlers.push([this.input,"dragexit",function(b){return a.putHint()}]))));this.validateOn&Spry.Widget.ValidationTextarea.ONCHANGE||this.useCharacterMasking||(Spry.is.ie?(this.event_handlers.push([this.input,"propertychange",function(b){return a.counterChar()}]),this.event_handlers.push([this.input,"drop",function(b){return a.counterChar()}])):(this.event_handlers.push([this.input,"keypress",
function(b){return a.counterChar()}]),this.event_handlers.push([this.input,"keyup",function(b){return a.counterChar()}]),Spry.is.safari?this.event_handlers.push([this.input,"mouseup",function(b){return a.counterChar()}]):this.event_handlers.push([this.input,"dragdrop",function(b){return a.counterChar()}])));for(var c=0;c<this.event_handlers.length;c++)Spry.Widget.Utils.addEventListener(this.event_handlers[c][0],this.event_handlers[c][1],this.event_handlers[c][2],!1);if(this.form=Spry.Widget.Utils.getFirstParentWithNodeName(this.input,
"FORM"))this.form.attachedSubmitHandler||this.form.onsubmit||(this.form.onsubmit=function(a){a=a||event;return Spry.Widget.Form.onSubmit(a,a.srcElement||a.currentTarget)},this.form.attachedSubmitHandler=!0),this.form.attachedResetHandler||(Spry.Widget.Utils.addEventListener(this.form,"reset",function(a){a=a||event;return Spry.Widget.Form.onReset(a,a.srcElement||a.currentTarget)},!1),this.form.attachedResetHandler=!0),Spry.Widget.Form.onSubmitWidgetQueue.push(this)}this.saveState()};Spry.Widget.ValidationTextarea.prototype.onTyping=
function(a){if(1!=this.input.disabled&&1!=this.input.readOnly){this.initialCursor||(this.initialCursor=this.cursorPosition);if(this.flags.locked)return!0;var c=this.input.value,b=!0;if(this.flags.hintOn)return!0;if(a&&this.input&&this.options&&0<this.options.maxChars&&b)if(c.length>this.options.maxChars&&(!Spry.Widget.Utils.isSpecialKey(a)&&this.cursorPosition.start==this.cursorPosition.end||Spry.Widget.Utils.isSpecialKey(a)&&c!=this.initialValue||this.cursorPosition.start!=this.cursorPosition.end)){this.flags.locked=
!0;var d=this.initialValue;a=this.initialCursor.start;b=this.initialCursor.end;if(d.length&&this.initialCursor.end<d.length)var e=b-a+this.options.maxChars-d.length,c=d.substring(0,a)+c.substring(a,a+e)+d.substring(b,d.length<this.options.maxChars?d.length:this.options.maxChars),b=a+e;else c=c.substring(0,this.options.maxChars),b=this.options.maxChars;Spry.is.ie?this.input.innerText=c:this.input.value=c;this.redTextFlash();this.cursorPosition.moveTo(b,b);b=this.flags.locked=!1}else this.setState(Spry.Widget.ValidationTextarea.VALID),
this.isMaxInvalid=!1;this.counterChar();return b}};Spry.Widget.ValidationTextarea.prototype.validateMinRequired=function(a){var c=!1;this.notFireMinYet="undefined"==typeof this.notFireMinYet?!1:c=!0;this.onBlurOn?this.notFireMinYet=!0:this.onKeyEventOn||(this.notFireMinYet=!0);if(this.input&&this.options&&this.options.isRequired)if(0<a.length&&this.isRequireInvalid&&(!this.hint||this.hint&&!this.flags.hintOn||this.hint&&a!=this.hint))this.switchClassName(this.validClass),this.setState(Spry.Widget.ValidationTextarea.VALID),
this.isRequireInvalid=!1;else if(!(0!=a.length&&(!this.hint||this.hint&&!this.flags.hintOn||this.hint&&a!=this.hint)||this.isRequireInvalid&&!c)){if(this.notFireMinYet||Spry.is.ie)this.switchClassName(this.requiredClass),this.setState(Spry.Widget.ValidationTextarea.REQUIRED);this.isRequireInvalid=!0;this.isMinInvalid=!1}this.input&&this.options&&0<this.options.minChars&&!this.isRequireInvalid&&(a.length>=this.options.minChars&&(!this.hint||this.hint&&!this.flags.hintOn||this.hint&&a!=this.hint)&&
this.isMinInvalid?(this.switchClassName(this.validClass),this.setState(Spry.Widget.ValidationTextarea.VALID),this.isMinInvalid=!1):(a.length<this.options.minChars||this.hint&&a==this.hint&&this.flags.hintOn)&&!this.isMinInvalid&&(this.switchClassName(this.invalidCharsMinClass),this.setState(Spry.Widget.ValidationTextarea.MINIMUM),this.isMinInvalid=!0))};Spry.Widget.ValidationTextarea.prototype.counterChar=function(){this.counterEl&&this.options&&this.options.counterType&&("chars_remaining"==this.options.counterType||
"chars_count"==this.options.counterType)&&("chars_remaining"==this.options.counterType?0<this.options.maxChars&&(this.flags.hintOn?this.setCounterElementValue(this.options.maxChars):this.options.maxChars>this.input.value.length?this.setCounterElementValue(this.options.maxChars-this.input.value.length):this.setCounterElementValue(0)):this.flags.hintOn?this.setCounterElementValue(0):this.useCharacterMasking&&"undefined"!=typeof this.options.maxChars&&this.options.maxChars<this.input.value.length?this.setCounterElementValue(this.options.maxChars):
this.setCounterElementValue(this.input.value.length))};Spry.Widget.ValidationTextarea.prototype.setCounterElementValue=function(a){"input"!=this.counterEl.nodeName.toLowerCase()&&"textarea"!=this.counterEl.nodeName.toLowerCase()&&"select"!=this.counterEl.nodeName.toLowerCase()&&"img"!=this.counterEl.nodeName.toLowerCase()&&(this.counterEl.innerHTML=a)};Spry.Widget.ValidationTextarea.prototype.reset=function(){this.removeHint();this.removeClassName(this.requiredClass);this.removeClassName(this.invalidCharsMinClass);
this.removeClassName(this.invalidCharsMaxClass);this.removeClassName(this.validClass);this.setState(Spry.Widget.ValidationTextarea.INITIAL);var a=this;setTimeout(function(){a.putHint();a.counterChar()},10)};Spry.Widget.ValidationTextarea.prototype.validate=function(){if(1==this.input.disabled||1==this.input.readOnly)return!0;this.validateOn&Spry.Widget.ValidationTextarea.ONSUBMIT&&this.removeHint();var a=this.input.value;this.validateMinRequired(a);var c=!this.isMinInvalid&&!this.isRequireInvalid;
c&&0<this.options.maxChars&&!this.useCharacterMasking&&(a.length<=this.options.maxChars||this.hint&&this.hint==a&&this.flags.hintOn?(this.switchClassName(this.validClass),this.setState(Spry.Widget.ValidationTextarea.VALID),this.isMaxInvalid=!1):(this.switchClassName(this.invalidCharsMaxClass),this.setState(Spry.Widget.ValidationTextarea.MAXIMUM),this.isMaxInvalid=!0));(c=c&&!this.isMaxInvalid)&&this.switchClassName(this.validClass);this.counterChar();return c};Spry.Widget.ValidationTextarea.prototype.setState=
function(a){this.state=a};Spry.Widget.ValidationTextarea.prototype.getState=function(){return this.state};Spry.Widget.ValidationTextarea.prototype.removeHint=function(){this.flags.hintOn&&(this.flags.locked=!0,this.input.value="",this.flags.locked=!1,this.flags.hintOn=!1,this.removeClassName(this.hintClass))};Spry.Widget.ValidationTextarea.prototype.putHint=function(){this.hint&&""==this.input.value&&(this.flags.hintOn=!0,this.input.value=this.hint,this.addClassName(this.hintClass))};Spry.Widget.ValidationTextarea.prototype.redTextFlash=
function(){var a=this;this.addClassName(this.textareaFlashClass);setTimeout(function(){a.removeClassName(a.textareaFlashClass)},200)};Spry.Widget.ValidationTextarea.prototype.onKeyPress=function(a){if(Spry.is.ie&&Spry.is.windows&&13==a.keyCode&&2>this.initialCursor.length+this.options.maxChars-this.input.value.length)return Spry.Widget.Utils.stopEvent(a),!1};Spry.Widget.ValidationTextarea.prototype.onKeyDown=function(a){this.saveState();this.keyCode=a.keyCode;return!0};Spry.Widget.ValidationTextarea.prototype.onKeyEvent=
function(a){if("propertychange"==a.type&&"value"!=a.propertyName)return!0;this.onTyping(a)||Spry.Widget.Utils.stopEvent(a)};Spry.Widget.ValidationTextarea.prototype.onChange=function(a){if(Spry.is.ie&&a&&"propertychange"==a.type&&"value"!=a.propertyName)return!0;if(this.flags.drop){var c=this;setTimeout(function(){c.flags.drop=!1;c.onChange(null)},0);return!0}if(this.flags.hintOn)return!0;this.onKeyEventOn=!0;a=this.validate();this.onKeyEventOn=!1;return a};Spry.Widget.ValidationTextarea.prototype.onMouseDown=
function(a){this.flags.active&&this.saveState()};Spry.Widget.ValidationTextarea.prototype.onDrop=function(a){this.flags.drop=!0;this.removeHint();if(Spry.is.ie){var c=document.body.createTextRange();c.moveToPoint(a.x,a.y);c.select()}this.saveState();this.flags.active=!0;this.addClassName(this.focusClass)};Spry.Widget.ValidationTextarea.prototype.onFocus=function(a){this.flags.drop||(this.removeHint(),this.saveState(),this.flags.active=!0,this.addClassName(this.focusClass))};Spry.Widget.ValidationTextarea.prototype.onBlur=
function(a){this.removeClassName(this.focusClass);this.validateOn&Spry.Widget.ValidationTextarea.ONBLUR&&(this.onBlurOn=!0,this.validate(),this.onBlurOn=!1);this.flags.active=!1;var c=this;setTimeout(function(){c.putHint()},10)};Spry.Widget.ValidationTextarea.prototype.safariMouseDown=function(a){this.safariClicked=!0};Spry.Widget.ValidationTextarea.prototype.safariChangeMouseUp=function(a){if(this.safariClicked)return this.safariClicked=!1,!0;this.onKeyDown(a);return this.safariChangeValidate(a,
!1)};Spry.Widget.ValidationTextarea.prototype.safariMouseUp=function(a){if(this.safariClicked)return this.safariClicked=!1,!0;this.onKeyDown(a);return this.safariValidate(a,!1)};Spry.Widget.ValidationTextarea.prototype.safariKeyPress=function(a){this.safariFlag=new Date;return this.safariValidate(a,!0)};Spry.Widget.ValidationTextarea.prototype.safariValidate=function(a,c){if(a.keyCode&&Spry.Widget.Utils.isSpecialKey(a)&&8!=a.keyCode&&46!=a.keyCode)return!0;var b=this.onTyping(a);if(1E3>new Date-this.safariFlag&&
c){var d=this;setTimeout(function(){d.safariValidate(a,!1)},1E3)}return b};Spry.Widget.ValidationTextarea.prototype.safariChangeKeyPress=function(a){this.safariChangeFlag=new Date;return this.safariChangeValidate(a,!0)};Spry.Widget.ValidationTextarea.prototype.safariChangeValidate=function(a,c){if(a.keyCode&&Spry.Widget.Utils.isSpecialKey(a)&&8!=a.keyCode&&46!=a.keyCode)return!0;var b=this.onChange(a);if(1E3>new Date-this.safariChangeFlag&&c){var d=this;setTimeout(function(){d.safariChangeValidate(a,
!1)},1E3-new Date+this.safariChangeFlag)}return b};Spry.Widget.ValidationTextarea.prototype.saveState=function(a){if(!(0<this.options.maxChars&&this.input.value.length>this.options.maxChars))return this.cursorPosition.update(),this.initialValue=this.flags.hintOn?"":this.input.value,this.initialCursor=this.cursorPosition,!0};Spry.Widget.ValidationTextarea.prototype.checkClassName=function(a,c){if(!a||!c||"string"==typeof a&&(a=document.getElementById(a),!a))return!1;a.className||(a.className=" ");
return a};Spry.Widget.ValidationTextarea.prototype.switchClassName=function(a){for(var c=[this.invalidCharsMaxClass,this.validClass,this.requiredClass,this.invalidCharsMinClass],b=0;b<c.length;b++)c[b]!=a&&this.removeClassName(c[b]);this.addClassName(a)};Spry.Widget.ValidationTextarea.prototype.addClassName=function(a){var c=this.checkClassName(this.element,a),b=this.checkClassName(this.additionalError,a);c&&-1==c.className.search(new RegExp("\\b"+a+"\\b"))&&(this.element.className+=" "+a,b&&(b.className+=
" "+a))};Spry.Widget.ValidationTextarea.prototype.removeClassName=function(a){var c=this.checkClassName(this.element,a),b=this.checkClassName(this.additionalError,a);c&&(c.className=c.className.replace(new RegExp("\\s*\\b"+a+"\\b","g"),""),b&&(b.className=b.className.replace(new RegExp("\\s*\\b"+a+"\\b","g"),"")))};Spry.Widget.SelectionDescriptor=function(a){this.element=a;this.update()};Spry.Widget.SelectionDescriptor.prototype.update=function(){if(Spry.is.ie&&Spry.is.windows){var a=this.element.ownerDocument.selection;
if("TEXTAREA"==this.element.nodeName){if("None"!=a.type){try{var c=a.createRange()}catch(d){return}if(c.parentElement()==this.element){a=this.element.ownerDocument.body.createTextRange();a.moveToElementText(this.element);for(var b=0;0>a.compareEndPoints("StartToStart",c);b++)a.moveStart("character",1);this.start=b;a=this.element.ownerDocument.body.createTextRange();a.moveToElementText(this.element);for(b=0;0>a.compareEndPoints("StartToEnd",c);b++)a.moveStart("character",1);this.end=b;this.length=
this.end-this.start;this.text=c.text}}}else if("INPUT"==this.element.nodeName){try{this.range=a.createRange()}catch(d){return}this.length=this.range.text.length;c=this.range.duplicate();this.start=-c.moveStart("character",-1E4);c=this.range.duplicate();c.collapse(!1);this.end=-c.moveStart("character",-1E4);this.text=this.range.text}}else{c=this.element;b=a=0;try{a=c.selectionStart}catch(d){}try{b=c.selectionEnd}catch(d){}Spry.is.safari&&(2147483647==a&&(a=0),2147483647==b&&(b=0));this.start=a;this.end=
b;this.length=b-a;this.text=this.element.value.substring(a,b)}};Spry.Widget.SelectionDescriptor.prototype.destroy=function(){try{delete this.range}catch(a){}try{delete this.element}catch(a){}};Spry.Widget.SelectionDescriptor.prototype.moveTo=function(a,c){if(Spry.is.ie&&Spry.is.windows){if("TEXTAREA"==this.element.nodeName){var b=this.element.createTextRange();this.range=this.element.createTextRange();this.range.move("character",a);this.range.moveEnd("character",c-a);0>this.range.compareEndPoints("StartToStart",
b)&&this.range.setEndPoint("StartToStart",b);0<this.range.compareEndPoints("EndToEnd",b)&&this.range.setEndPoint("EndToEnd",b)}else"INPUT"==this.element.nodeName&&(this.range=this.element.ownerDocument.selection.createRange(),this.range.move("character",-1E4),this.start=this.range.moveStart("character",a),this.end=this.start+this.range.moveEnd("character",c-a));this.range.select()}else{this.start=a;try{this.element.selectionStart=a}catch(d){}this.end=c;try{this.element.selectionEnd=c}catch(d){}}this.ignore=
!0;this.update()};Spry.Widget.Form||(Spry.Widget.Form={});Spry.Widget.Form.onSubmitWidgetQueue||(Spry.Widget.Form.onSubmitWidgetQueue=[]);Spry.Widget.Form.validate||(Spry.Widget.Form.validate=function(a){for(var c=!0,b=!0,d=Spry.Widget.Form.onSubmitWidgetQueue,e=d.length,f=0;f<e;f++)d[f].isDisabled()||d[f].form!=a||(c=(b=d[f].validate())&&c);return c});Spry.Widget.Form.onSubmit||(Spry.Widget.Form.onSubmit=function(a,c){return 0==Spry.Widget.Form.validate(c)?!1:!0});Spry.Widget.Form.onReset||(Spry.Widget.Form.onReset=
function(a,c){for(var b=Spry.Widget.Form.onSubmitWidgetQueue,d=b.length,e=0;e<d;e++)b[e].isDisabled()||b[e].form!=c||"function"!=typeof b[e].reset||b[e].reset();return!0});Spry.Widget.Form.destroy||(Spry.Widget.Form.destroy=function(a){for(var c=Spry.Widget.Form.onSubmitWidgetQueue,b=0;b<Spry.Widget.Form.onSubmitWidgetQueue.length;b++)c[b].form==a&&"function"==typeof c[b].destroy&&(c[b].destroy(),b--)});Spry.Widget.Form.destroyAll||(Spry.Widget.Form.destroyAll=function(){for(var a=Spry.Widget.Form.onSubmitWidgetQueue,
c=0;c<Spry.Widget.Form.onSubmitWidgetQueue.length;c++)"function"==typeof a[c].destroy&&(a[c].destroy(),c--)});Spry.Widget.Utils||(Spry.Widget.Utils={});Spry.Widget.Utils.setOptions=function(a,c,b){if(c)for(var d in c)b&&void 0==c[d]||(a[d]=c[d])};Spry.Widget.Utils.firstValid=function(){for(var a=null,c=0;c<Spry.Widget.Utils.firstValid.arguments.length;c++)if("undefined"!=typeof Spry.Widget.Utils.firstValid.arguments[c]){a=Spry.Widget.Utils.firstValid.arguments[c];break}return a};Spry.Widget.Utils.specialSafariNavKeys=
",63232,63233,63234,63235,63272,63273,63275,63276,63277,63289,";Spry.Widget.Utils.specialCharacters=",8,9,16,17,18,20,27,33,34,35,36,37,38,39,40,45,46,91,92,93,144,192,63232,";Spry.Widget.Utils.specialCharacters+=Spry.Widget.Utils.specialSafariNavKeys;Spry.Widget.Utils.isSpecialKey=function(a){return-1!=Spry.Widget.Utils.specialCharacters.indexOf(","+a.keyCode+",")};Spry.Widget.Utils.getFirstChildWithNodeNameAtAnyLevel=function(a,c){var b=a.getElementsByTagName(c);return b?b[0]:null};Spry.Widget.Utils.getFirstParentWithNodeName=
function(a,c){for(;a.parentNode&&a.parentNode.nodeName.toLowerCase()!=c.toLowerCase()&&"BODY"!=a.parentNode.nodeName;)a=a.parentNode;return a.parentNode&&a.parentNode.nodeName.toLowerCase()==c.toLowerCase()?a.parentNode:null};Spry.Widget.Utils.destroyWidgets=function(a){"string"==typeof a&&(a=document.getElementById(a));for(var c=Spry.Widget.Form.onSubmitWidgetQueue,b=0;b<Spry.Widget.Form.onSubmitWidgetQueue.length;b++)"function"==typeof c[b].destroy&&Spry.Widget.Utils.contains(a,c[b].element)&&(c[b].destroy(),
b--)};Spry.Widget.Utils.contains=function(a,c){if("object"==typeof a.contains)return c&&a&&(a==c||a.contains(c));for(var b=c;b;){if(b==a)return!0;b=b.parentNode}return!1};Spry.Widget.Utils.addEventListener=function(a,c,b,d){try{a.addEventListener?a.addEventListener(c,b,d):a.attachEvent&&a.attachEvent("on"+c,b,d)}catch(e){}};Spry.Widget.Utils.removeEventListener=function(a,c,b,d){try{a.removeEventListener?a.removeEventListener(c,b,d):a.detachEvent&&a.detachEvent("on"+c,b,d)}catch(e){}};Spry.Widget.Utils.stopEvent=
function(a){try{this.stopPropagation(a),this.preventDefault(a)}catch(c){}};Spry.Widget.Utils.stopPropagation=function(a){a.stopPropagation?a.stopPropagation():a.cancelBubble=!0};Spry.Widget.Utils.preventDefault=function(a){a.preventDefault?a.preventDefault():a.returnValue=!1}})();

(function(){"undefined"==typeof Spry&&(window.Spry={});Spry.Widget||(Spry.Widget={});Spry.Widget.BrowserSniff=function(){var a=navigator.userAgent.toString();this.mozilla=this.ie=this.opera=this.safari=!1;var b=/MSIE.([0-9\.]*)/i,c=/gecko/i,d=/(applewebkit|safari)\/([\d\.]*)/i,e=!1;(e=a.match(/Opera.([0-9\.]*)/i))?(this.opera=!0,this.version=parseFloat(e[1])):(e=a.match(b))?(this.ie=!0,this.version=parseFloat(e[1])):(e=a.match(d))?(this.safari=!0,this.version=parseFloat(e[2])):a.match(c)&&(e=a.match(/rv:\s*([0-9\.]+)/i),
this.mozilla=!0,this.version=parseFloat(e[1]));this.windows=this.mac=this.linux=!1;this.Platform=a.match(/windows/i)?"windows":a.match(/linux/i)?"linux":a.match(/mac/i)?"mac":a.match(/unix/i)?"unix":"unknown";this[this.Platform]=!0;this.v=this.version;this.safari&&this.mac&&this.mozilla&&(this.mozilla=!1)};Spry.is=new Spry.Widget.BrowserSniff;Spry.Widget.ValidationTextField=function(a,b,c){b=Spry.Widget.Utils.firstValid(b,"none");"string"!=typeof b?this.showError("The second parameter in the constructor should be the validation type, the options are the third parameter."):
"undefined"==typeof Spry.Widget.ValidationTextField.ValidationDescriptors[b]?this.showError("Unknown validation type received as the second parameter."):(c=Spry.Widget.Utils.firstValid(c,{}),this.type=b,this.isBrowserSupported()||(c.useCharacterMasking=!1),this.init(a,c),a=["submit"].concat(Spry.Widget.Utils.firstValid(this.options.validateOn,[])),a=a.join(","),this.validateOn=0,this.validateOn|=-1!=a.indexOf("submit")?Spry.Widget.ValidationTextField.ONSUBMIT:0,this.validateOn|=-1!=a.indexOf("blur")?
Spry.Widget.ValidationTextField.ONBLUR:0,this.validateOn|=-1!=a.indexOf("change")?Spry.Widget.ValidationTextField.ONCHANGE:0,Spry.Widget.ValidationTextField.onloadDidFire?this.attachBehaviors():Spry.Widget.ValidationTextField.loadQueue.push(this))};Spry.Widget.ValidationTextField.ONCHANGE=1;Spry.Widget.ValidationTextField.ONBLUR=2;Spry.Widget.ValidationTextField.ONSUBMIT=4;Spry.Widget.ValidationTextField.ERROR_REQUIRED=1;Spry.Widget.ValidationTextField.ERROR_FORMAT=2;Spry.Widget.ValidationTextField.ERROR_RANGE_MIN=
4;Spry.Widget.ValidationTextField.ERROR_RANGE_MAX=8;Spry.Widget.ValidationTextField.ERROR_CHARS_MIN=16;Spry.Widget.ValidationTextField.ERROR_CHARS_MAX=32;Spry.Widget.ValidationTextField.ValidationDescriptors={none:{},custom:{},integer:{characterMasking:/[\-\+\d]/,regExpFilter:/^[\-\+]?\d*$/,validation:function(a,b){if(""==a||"-"==a||"+"==a||!/^[\-\+]?\d*$/.test(a))return!1;b=b||{allowNegative:!1};var c=parseInt(a,10);if(isNaN(c))c=!1;else{var d=!0;"undefined"!=typeof b.allowNegative&&0==b.allowNegative&&
(d=!1);!d&&0>a&&(c=!1)}return c}},real:{characterMasking:/[\d\.,\-\+e]/i,regExpFilter:/^[\-\+]?\d(?:|\.,\d{0,2})|(?:|e{0,1}[\-\+]?\d{0,})$/i,validation:function(a,b){if(!/^[\+\-]?[0-9]+([\.,][0-9]+)?([eE]{0,1}[\-\+]?[0-9]+)?$/.test(a))return!1;var c=parseFloat(a);isNaN(c)&&(c=!1);return c}},currency:{formats:{dot_comma:{characterMasking:/[\d\.\,\-\+\$]/,regExpFilter:/^[\-\+]?(?:[\d\.]*)+(|\,\d{0,2})$/,validation:function(a,b){var c=!1;if(/^(\-|\+)?\d{1,3}(?:\.\d{3})*(?:\,\d{2}|)$/.test(a)||/^(\-|\+)?\d+(?:\,\d{2}|)$/.test(a))a=
a.toString().replace(/\./gi,"").replace(/\,/,"."),c=parseFloat(a);return c}},comma_dot:{characterMasking:/[\d\.\,\-\+\$]/,regExpFilter:/^[\-\+]?(?:[\d\,]*)+(|\.\d{0,2})$/,validation:function(a,b){var c=!1;if(/^(\-|\+)?\d{1,3}(?:\,\d{3})*(?:\.\d{2}|)$/.test(a)||/^(\-|\+)?\d+(?:\.\d{2}|)$/.test(a))a=a.toString().replace(/\,/gi,""),c=parseFloat(a);return c}}}},email:{characterMasking:/[^\s]/,validation:function(a,b){return/^[\w\.-]+@[\w\.-]+\.\w+$/i.test(a)}},date:{validation:function(a,b){var c=this.dateValidationPattern,
d=b.format.match(/^([mdy]+)[\.\-\/\\\s]+([mdy]+)[\.\-\/\\\s]+([mdy]+)$/i),c=a.match(c);if(null!==d&&null!==c){for(var e=-1,f=-1,g=-1,h=1;h<d.length;h++)switch(d[h].toLowerCase()){case "dd":e=h;break;case "mm":f=h;break;case "yy":case "yyyy":g=h}if(-1!=e&&-1!=f&&-1!=g){d=-1;e=parseInt(c[e],10);f=parseInt(c[f],10);c=parseInt(c[g],10);if(1>f||12<f)return!1;switch(f){case 1:case 3:case 5:case 7:case 8:case 10:case 12:d=31;break;case 4:case 6:case 9:case 11:d=30;break;case 2:d=4*parseInt(c/4,10)!=c||0==
c%100&&0!=c%400?28:29}return 1>e||e>d?!1:new Date(c,f-1,e)}}else return!1}},time:{validation:function(a,b){var c=b.format.match(/([hmst]+)/gi),d=a.match(/(\d+|AM?|PM?)/gi);if(null!==c&&null!==d){if(c.length!=d.length)return!1;for(var e=-1,f=-1,g=-1,h=-1,l=0,p=0,m=0,k="AM",n=0;n<c.length;n++)switch(c[n].toLowerCase()){case "hh":e=n;break;case "mm":f=n;break;case "ss":g=n;break;case "t":case "tt":h=n}return-1!=e&&(l=parseInt(d[e],10),isNaN(l)||l>("HH"==c[e]?23:12))||-1!=f&&(p=parseInt(d[f],10),isNaN(p)||
59<p)||-1!=g&&(m=parseInt(d[g],10),isNaN(m)||59<m)||-1!=h&&(k=d[h].toUpperCase(),"TT"==c[h].toUpperCase()&&!/^a|pm$/i.test(k)||"T"==c[h].toUpperCase()&&!/^a|p$/i.test(k))?!1:new Date(2E3,0,1,l+("P"==k.charAt(0)?12:0),p,m)}return!1}},credit_card:{characterMasking:/\d/,validation:function(a,b){var c=null;b.format=b.format||"ALL";switch(b.format.toUpperCase()){case "ALL":c=/^[3-6]{1}[0-9]{12,18}$/;break;case "VISA":c=/^4(?:[0-9]{12}|[0-9]{15})$/;break;case "MASTERCARD":c=/^5[1-5]{1}[0-9]{14}$/;break;
case "AMEX":c=/^3(4|7){1}[0-9]{13}$/;break;case "DISCOVER":c=/^6011[0-9]{12}$/;break;case "DINERSCLUB":c=/^3(?:(0[0-5]{1}[0-9]{11})|(6[0-9]{12})|(8[0-9]{12}))$/}if(!c.test(a))return!1;for(var c=[],d=1,e="",f=a.length-1;0<=f;f--)0==d%2?(e=2*parseInt(a.charAt(f),10),c[c.length]=e.toString().charAt(0),2==e.toString().length&&(c[c.length]=e.toString().charAt(1))):(e=a.charAt(f),c[c.length]=e),d++;for(f=d=0;f<c.length;f++)d+=parseInt(c[f],10);return 0==d%10?!0:!1}},zip_code:{formats:{zip_us9:{pattern:"00000-0000"},
zip_us5:{pattern:"00000"},zip_uk:{characterMasking:/[\dA-Z\s]/,validation:function(a,b){return/^[A-Z]{1,2}\d[\dA-Z]?\s?\d[A-Z]{2}$/.test(a)}},zip_canada:{characterMasking:/[\dA-Z\s]/,pattern:"A0A 0A0"},zip_custom:{}}},phone_number:{formats:{phone_us:{pattern:"(000) 000-0000"},phone_custom:{}}},social_security_number:{pattern:"000-00-0000"},ip:{characterMaskingFormats:{ipv4:/[\d\.]/i,ipv6_ipv4:/[\d\.\:A-F\/]/i,ipv6:/[\d\.\:A-F\/]/i},validation:function(a,b){return Spry.Widget.ValidationTextField.validateIP(a,
b.format)}},url:{characterMasking:/[^\s]/,validation:function(a,b){var c=/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/,d=a.match(c);if(d&&d[4]){for(var d=d[4].split("."),e="",f=0;f<d.length;f++)if(e=Spry.Widget.Utils.punycode_encode(d[f],64))e!=d[f]+"-"&&(d[f]="xn--"+e);else return!1;d=d.join(".");a=a.replace(c,"$1//"+d+"$5$6$8")}return(c=a.match(/^(?:https?|ftp)\:\/\/(?:(?:[a-z0-9\-\._~\!\$\&\'\(\)\*\+\,\;\=:]|%[0-9a-f]{2,2})*\@)?(?:((?:(?:[a-z0-9][a-z0-9\-]*[a-z0-9]|[a-z0-9])\.)*(?:[a-z][a-z0-9\-]*[a-z0-9]|[a-z])|(?:\[[^\]]*\]))(?:\:[0-9]*)?)(?:\/(?:[a-z0-9\-\._~\!\$\&\'\(\)\*\+\,\;\=\:\@]|%[0-9a-f]{2,2})*)*(?:\?(?:[a-z0-9\-\._~\!\$\&\'\(\)\*\+\,\;\=\:\@\/\?]|%[0-9a-f]{2,2})*)?(?:\#(?:[a-z0-9\-\._~\!\$\&\'\(\)\*\+\,\;\=\:\@\/\?]|%[0-9a-f]{2,2})*)?$/i))?
(c=c[1])?"[]"==c?!1:"["==c.charAt(0)?(c=c.replace(/^\[|\]$/gi,""),Spry.Widget.ValidationTextField.validateIP(c,"ipv6_ipv4")):/[^0-9\.]/.test(c)?!0:Spry.Widget.ValidationTextField.validateIP(c,"ipv4"):!0:!1}}};Spry.Widget.ValidationTextField.validateIP=function(a,b){var c=[/^(?:[a-f0-9]{1,4}:){7}[a-f0-9]{1,4}(?:\/\d{1,3})?$/i,/^[a-f0-9]{0,4}::(?:\/\d{1,3})?$/i,/^:(?::[a-f0-9]{1,4}){1,6}(?:\/\d{1,3})?$/i,/^(?:[a-f0-9]{1,4}:){1,6}:(?:\/\d{1,3})?$/i,/^(?:[a-f0-9]{1,4}:)(?::[a-f0-9]{1,4}){1,6}(?:\/\d{1,3})?$/i,
/^(?:[a-f0-9]{1,4}:){2}(?::[a-f0-9]{1,4}){1,5}(?:\/\d{1,3})?$/i,/^(?:[a-f0-9]{1,4}:){3}(?::[a-f0-9]{1,4}){1,4}(?:\/\d{1,3})?$/i,/^(?:[a-f0-9]{1,4}:){4}(?::[a-f0-9]{1,4}){1,3}(?:\/\d{1,3})?$/i,/^(?:[a-f0-9]{1,4}:){5}(?::[a-f0-9]{1,4}){1,2}(?:\/\d{1,3})?$/i,/^(?:[a-f0-9]{1,4}:){6}(?::[a-f0-9]{1,4})(?:\/\d{1,3})?$/i,/^(?:[a-f0-9]{1,4}:){6}(?:\d{1,3}\.){3}\d{1,3}(?:\/\d{1,3})?$/i,/^:(?::[a-f0-9]{1,4}){0,4}:(?:\d{1,3}\.){3}\d{1,3}(?:\/\d{1,3})?$/i,/^(?:[a-f0-9]{1,4}:){1,5}:(?:\d{1,3}\.){3}\d{1,3}(?:\/\d{1,3})?$/i,
/^(?:[a-f0-9]{1,4}:)(?::[a-f0-9]{1,4}){1,4}:(?:\d{1,3}\.){3}\d{1,3}(?:\/\d{1,3})?$/i,/^(?:[a-f0-9]{1,4}:){2}(?::[a-f0-9]{1,4}){1,3}:(?:\d{1,3}\.){3}\d{1,3}(?:\/\d{1,3})?$/i,/^(?:[a-f0-9]{1,4}:){3}(?::[a-f0-9]{1,4}){1,2}:(?:\d{1,3}\.){3}\d{1,3}(?:\/\d{1,3})?$/i,/^(?:[a-f0-9]{1,4}:){4}(?::[a-f0-9]{1,4}):(?:\d{1,3}\.){3}\d{1,3}(?:\/\d{1,3})?$/i],d=[/^(\d{1,3}\.){3}\d{1,3}$/i],e=[];if("ipv6"==b||"ipv6_ipv4"==b)e=e.concat(c);if("ipv4"==b||"ipv6_ipv4"==b)e=e.concat(d);c=!1;for(d=0;d<e.length;d++)if(e[d].test(a)){c=
!0;break}if(c&&-1!=a.indexOf(".")){d=a.match(/:?(?:\d{1,3}\.){3}\d{1,3}/i);if(!d)return!1;d=d[0].replace(/^:/,"");e=d.split(".");if(4!=e.length)return!1;for(var f=/^[\-\+]?\d*$/,d=0;d<e.length;d++){if(""==e[d])return!1;var g=parseInt(e[d],10);if(isNaN(g)||255<g||!f.test(e[d])||3<e[d].length||/^0{2,3}$/.test(e[d]))return!1}}if(c&&-1!=a.indexOf("/")){d=a.match(/\/\d{1,3}$/);if(!d)return!1;d=parseInt(d[0].replace(/^\//,""),10);if(isNaN(d)||128<d||1>d)return!1}return c};Spry.Widget.ValidationTextField.onloadDidFire=
!1;Spry.Widget.ValidationTextField.loadQueue=[];Spry.Widget.ValidationTextField.prototype.isBrowserSupported=function(){return Spry.is.ie&&5<=Spry.is.v&&Spry.is.windows||Spry.is.mozilla&&1.4<=Spry.is.v||Spry.is.safari||Spry.is.opera&&9<=Spry.is.v};Spry.Widget.ValidationTextField.prototype.init=function(a,b){this.element=this.getElement(a);this.errors=0;this.flags={locked:!1,restoreSelection:!0};this.options={};this.event_handlers=[];this.validClass="textfieldValidState";this.focusClass="textfieldFocusState";
this.requiredClass="textfieldRequiredState";this.hintClass="textfieldHintState";this.invalidFormatClass="textfieldInvalidFormatState";this.invalidRangeMinClass="textfieldMinValueState";this.invalidRangeMaxClass="textfieldMaxValueState";this.invalidCharsMinClass="textfieldMinCharsState";this.invalidCharsMaxClass="textfieldMaxCharsState";this.textfieldFlashTextClass="textfieldFlashText";Spry.is.safari&&(this.flags.lastKeyPressedTimeStamp=0);switch(this.type){case "phone_number":b.format=Spry.Widget.Utils.firstValid(b.format,
"phone_us");break;case "currency":b.format=Spry.Widget.Utils.firstValid(b.format,"comma_dot");break;case "zip_code":b.format=Spry.Widget.Utils.firstValid(b.format,"zip_us5");break;case "date":b.format=Spry.Widget.Utils.firstValid(b.format,"mm/dd/yy");break;case "time":b.format=Spry.Widget.Utils.firstValid(b.format,"HH:mm");b.pattern=b.format.replace(/[hms]/gi,"0").replace(/TT/gi,"AM").replace(/T/gi,"A");break;case "ip":b.format=Spry.Widget.Utils.firstValid(b.format,"ipv4"),b.characterMasking=Spry.Widget.ValidationTextField.ValidationDescriptors[this.type].characterMaskingFormats[b.format]}var c=
{};b.format&&Spry.Widget.ValidationTextField.ValidationDescriptors[this.type].formats?Spry.Widget.ValidationTextField.ValidationDescriptors[this.type].formats[b.format]&&Spry.Widget.Utils.setOptions(c,Spry.Widget.ValidationTextField.ValidationDescriptors[this.type].formats[b.format]):Spry.Widget.Utils.setOptions(c,Spry.Widget.ValidationTextField.ValidationDescriptors[this.type]);b.useCharacterMasking=Spry.Widget.Utils.firstValid(b.useCharacterMasking,!1);b.hint=Spry.Widget.Utils.firstValid(b.hint,
"");b.isRequired=Spry.Widget.Utils.firstValid(b.isRequired,!0);b.additionalError=Spry.Widget.Utils.firstValid(b.additionalError,!1);b.additionalError&&(b.additionalError=this.getElement(b.additionalError));b.characterMasking=Spry.Widget.Utils.firstValid(b.characterMasking,c.characterMasking);b.regExpFilter=Spry.Widget.Utils.firstValid(b.regExpFilter,c.regExpFilter);b.pattern=Spry.Widget.Utils.firstValid(b.pattern,c.pattern);b.validation=Spry.Widget.Utils.firstValid(b.validation,c.validation);"string"==
typeof b.validation&&(b.validation=eval(b.validation));b.minValue=Spry.Widget.Utils.firstValid(b.minValue,c.minValue);b.maxValue=Spry.Widget.Utils.firstValid(b.maxValue,c.maxValue);b.minChars=Spry.Widget.Utils.firstValid(b.minChars,c.minChars);b.maxChars=Spry.Widget.Utils.firstValid(b.maxChars,c.maxChars);Spry.Widget.Utils.setOptions(this,b);Spry.Widget.Utils.setOptions(this.options,b)};Spry.Widget.ValidationTextField.prototype.destroy=function(){if(this.event_handlers)for(var a=0;a<this.event_handlers.length;a++)Spry.Widget.Utils.removeEventListener(this.event_handlers[a][0],
this.event_handlers[a][1],this.event_handlers[a][2],!1);try{delete this.element}catch(d){}try{delete this.input}catch(d){}try{delete this.form}catch(d){}try{delete this.event_handlers}catch(d){}try{this.selection.destroy()}catch(d){}try{delete this.selection}catch(d){}for(var b=Spry.Widget.Form.onSubmitWidgetQueue,c=b.length,a=0;a<c;a++)if(b[a]==this){b.splice(a,1);break}};Spry.Widget.ValidationTextField.prototype.attachBehaviors=function(){this.element&&(this.input="INPUT"==this.element.nodeName?
this.element:Spry.Widget.Utils.getFirstChildWithNodeNameAtAnyLevel(this.element,"INPUT"));if(this.input){this.maxChars&&this.input.removeAttribute("maxLength");this.putHint();this.compilePattern();"date"==this.type&&this.compileDatePattern();this.input.setAttribute("AutoComplete","off");this.selection=new Spry.Widget.SelectionDescriptor(this.input);this.oldValue=this.input.value;var a=this;this.event_handlers=[];this.event_handlers.push([this.input,"keydown",function(b){return a.isDisabled()?!0:a.onKeyDown(b||
event)}]);this.event_handlers.push([this.input,"keypress",function(b){return a.isDisabled()?!0:a.onKeyPress(b||event)}]);Spry.is.opera&&this.event_handlers.push([this.input,"keyup",function(b){return a.isDisabled()?!0:a.onKeyUp(b||event)}]);this.event_handlers.push([this.input,"focus",function(b){return a.isDisabled()?!0:a.onFocus(b||event)}]);this.event_handlers.push([this.input,"blur",function(b){return a.isDisabled()?!0:a.onBlur(b||event)}]);this.event_handlers.push([this.input,"mousedown",function(b){return a.isDisabled()?
!0:a.onMouseDown(b||event)}]);this.event_handlers.push([this.input,Spry.is.mozilla||Spry.is.opera||Spry.is.safari?"input":Spry.is.ie?"propertychange":"change",function(b){return a.isDisabled()?!0:a.onChange(b||event)}]);Spry.is.mozilla||Spry.is.safari?this.event_handlers.push([this.input,"dragdrop",function(b){if(a.isDisabled())return!0;a.removeHint();return a.onChange(b||event)}]):Spry.is.ie&&this.event_handlers.push([this.input,"drop",function(b){return a.isDisabled()?!0:a.onDrop(b||event)}]);for(var b=
0;b<this.event_handlers.length;b++)Spry.Widget.Utils.addEventListener(this.event_handlers[b][0],this.event_handlers[b][1],this.event_handlers[b][2],!1);if(this.form=Spry.Widget.Utils.getFirstParentWithNodeName(this.input,"FORM"))this.form.attachedSubmitHandler||this.form.onsubmit||(this.form.onsubmit=function(a){a=a||event;return Spry.Widget.Form.onSubmit(a,a.srcElement||a.currentTarget)},this.form.attachedSubmitHandler=!0),this.form.attachedResetHandler||(Spry.Widget.Utils.addEventListener(this.form,
"reset",function(a){a=a||event;return Spry.Widget.Form.onReset(a,a.srcElement||a.currentTarget)},!1),this.form.attachedResetHandler=!0),Spry.Widget.Form.onSubmitWidgetQueue.push(this)}};Spry.Widget.ValidationTextField.prototype.isDisabled=function(){return this.input&&(this.input.disabled||this.input.readOnly)||!this.input};Spry.Widget.ValidationTextField.prototype.getElement=function(a){return a&&"string"==typeof a?document.getElementById(a):a};Spry.Widget.ValidationTextField.addLoadListener=function(a){"undefined"!=
typeof window.addEventListener?window.addEventListener("load",a,!1):"undefined"!=typeof document.addEventListener?document.addEventListener("load",a,!1):"undefined"!=typeof window.attachEvent&&window.attachEvent("onload",a)};Spry.Widget.ValidationTextField.processLoadQueue=function(a){Spry.Widget.ValidationTextField.onloadDidFire=!0;a=Spry.Widget.ValidationTextField.loadQueue;for(var b=a.length,c=0;c<b;c++)a[c].attachBehaviors()};Spry.Widget.ValidationTextField.addLoadListener(Spry.Widget.ValidationTextField.processLoadQueue);
Spry.Widget.ValidationTextField.addLoadListener(function(){Spry.Widget.Utils.addEventListener(window,"unload",Spry.Widget.Form.destroyAll,!1)});Spry.Widget.ValidationTextField.prototype.setValue=function(a){this.flags.locked=!0;this.input.value=a;this.flags.locked=!1;this.oldValue=a;if(!Spry.is.ie)this.onChange()};Spry.Widget.ValidationTextField.prototype.saveState=function(){this.oldValue=this.input.value;this.selection.update()};Spry.Widget.ValidationTextField.prototype.revertState=function(a){a!=
this.input.value&&(this.input.readOnly=!0,this.input.value=a,this.input.readOnly=!1,Spry.is.safari&&this.flags.active&&this.input.focus());this.flags.restoreSelection&&this.selection.moveTo(this.selection.start,this.selection.end);this.redTextFlash()};Spry.Widget.ValidationTextField.prototype.removeHint=function(){this.flags.hintOn&&(this.input.value="",this.flags.hintOn=!1,this.removeClassName(this.element,this.hintClass),this.removeClassName(this.additionalError,this.hintClass))};Spry.Widget.ValidationTextField.prototype.putHint=
function(){this.hint&&this.input&&"text"==this.input.type&&""==this.input.value&&(this.flags.hintOn=!0,this.input.value=this.hint,this.addClassName(this.element,this.hintClass),this.addClassName(this.additionalError,this.hintClass))};Spry.Widget.ValidationTextField.prototype.redTextFlash=function(){var a=this;this.addClassName(this.element,this.textfieldFlashTextClass);setTimeout(function(){a.removeClassName(a.element,a.textfieldFlashTextClass)},100)};Spry.Widget.ValidationTextField.prototype.doValidations=
function(a,b){if(this.isDisabled()||this.flags.locked)return!1;if(0==a.length&&!this.isRequired)return this.errors=0,!1;this.flags.locked=!0;var c=!1,d=!0;this.options.isRequired||0!=a.length||(d=!1);var e=0,f=a;if(this.useCharacterMasking&&this.characterMasking)for(var g=0;g<a.length;g++)if(!this.characterMasking.test(a.charAt(g))){e|=Spry.Widget.ValidationTextField.ERROR_FORMAT;f=b;c=!0;break}!c&&this.useCharacterMasking&&this.regExpFilter&&!this.regExpFilter.test(f)&&(e|=Spry.Widget.ValidationTextField.ERROR_FORMAT,
c=!0);!c&&this.pattern&&(this.patternToRegExp(a.length).test(a)?this.patternLength!=a.length&&(e|=Spry.Widget.ValidationTextField.ERROR_FORMAT):(e|=Spry.Widget.ValidationTextField.ERROR_FORMAT,c=!0));""==f&&(e|=Spry.Widget.ValidationTextField.ERROR_REQUIRED);!c&&this.pattern&&this.useCharacterMasking&&(g=this.getAutoComplete(a.length))&&(f+=g);!c&&null!==this.minChars&&d&&a.length<this.minChars&&(e|=Spry.Widget.ValidationTextField.ERROR_CHARS_MIN,d=!1);!c&&null!==this.maxChars&&d&&a.length>this.maxChars&&
(e|=Spry.Widget.ValidationTextField.ERROR_CHARS_MAX,d=!1);!c&&this.validation&&d&&(g=this.validation(f,this.options),!1===g?(e|=Spry.Widget.ValidationTextField.ERROR_FORMAT,d=!1):this.typedValue=g);!c&&this.validation&&null!==this.minValue&&d&&(g=this.validation(this.minValue.toString(),this.options),!1!==g&&this.typedValue<g&&(e|=Spry.Widget.ValidationTextField.ERROR_RANGE_MIN,d=!1));!c&&this.validation&&null!==this.maxValue&&d&&(d=this.validation(this.maxValue.toString(),this.options),!1!==d&&this.typedValue>
d&&(e|=Spry.Widget.ValidationTextField.ERROR_RANGE_MAX));this.useCharacterMasking&&c&&this.revertState(b);this.errors=e;this.fixedValue=f;this.flags.locked=!1;return c};Spry.Widget.ValidationTextField.prototype.onChange=function(a){if(Spry.is.opera&&this.flags.operaRevertOnKeyUp||Spry.is.ie&&a&&"value"!=a.propertyName)return!0;if(this.flags.drop){var b=this;setTimeout(function(){b.flags.drop=!1;b.onChange(null)},0)}else{if(this.flags.hintOn)return!0;if(8==this.keyCode||46==this.keyCode)if(a=this.doValidations(this.input.value,
this.input.value),this.oldValue=this.input.value,(a||this.errors)&&this.validateOn&Spry.Widget.ValidationTextField.ONCHANGE)return b=this,setTimeout(function(){b.validate()},0),!0;a=this.doValidations(this.input.value,this.oldValue);(!a||this.errors)&&this.validateOn&Spry.Widget.ValidationTextField.ONCHANGE&&(b=this,setTimeout(function(){b.validate()},0));return!0}};Spry.Widget.ValidationTextField.prototype.onKeyUp=function(a){if(this.flags.operaRevertOnKeyUp)return this.setValue(this.oldValue),Spry.Widget.Utils.stopEvent(a),
this.selection.moveTo(this.selection.start,this.selection.start),this.flags.operaRevertOnKeyUp=!1;this.flags.operaPasteOperation&&(window.clearInterval(this.flags.operaPasteOperation),this.flags.operaPasteOperation=null)};Spry.Widget.ValidationTextField.prototype.operaPasteMonitor=function(){if(this.input.value!=this.oldValue)if(this.doValidations(this.input.value,this.input.value))this.setValue(this.oldValue),this.selection.moveTo(this.selection.start,this.selection.start);else this.onChange()};
Spry.Widget.ValidationTextField.prototype.compileDatePattern=function(){var a="",b=[],c=[],d=[],e=this.options.format.match(/^([mdy]+)([\.\-\/\\\s]+)([mdy]+)([\.\-\/\\\s]+)([mdy]+)$/i);if(null!==e)for(var f=1;f<e.length;f++)switch(e[f].toLowerCase()){case "dd":b[f-1]="\\d{1,2}";c[f-1]="\\d\\d";a+="("+b[f-1]+")";d[f-1]=null;break;case "mm":b[f-1]="\\d{1,2}";c[f-1]="\\d\\d";a+="("+b[f-1]+")";d[f-1]=null;break;case "yy":b[f-1]="\\d{1,2}";c[f-1]="\\d\\d";a+="(\\d\\d)";d[f-1]=null;break;case "yyyy":b[f-
1]="\\d{1,4}";c[f-1]="\\d\\d\\d\\d";a+="(\\d\\d\\d\\d)";d[f-1]=null;break;default:b[f-1]=c[f-1]=Spry.Widget.ValidationTextField.regExpFromChars(e[f]),a+="["+b[f-1]+"]",d[f-1]=e[f]}this.dateValidationPattern=new RegExp("^"+a+"$","");this.dateAutocompleteCharacters=d;this.dateGroupPatterns=b;this.dateFullGroupPatterns=c;this.lastDateGroup=e.length-2};Spry.Widget.ValidationTextField.prototype.getRegExpForGroup=function(a){for(var b="^",c=0;c<=a;c++)b+=this.dateGroupPatterns[c];return new RegExp(b+"$",
"")};Spry.Widget.ValidationTextField.prototype.getRegExpForFullGroup=function(a){for(var b="^",c=0;c<a;c++)b+=this.dateGroupPatterns[c];b+=this.dateFullGroupPatterns[a];return new RegExp(b,"")};Spry.Widget.ValidationTextField.prototype.getDateGroup=function(a,b){if(0==b)return 0;for(var c=a.substring(0,b),d=0;d<=this.lastDateGroup;d++)if(this.getRegExpForGroup(d).test(c))return d;return-1};Spry.Widget.ValidationTextField.prototype.isDateGroupFull=function(a,b){return this.getRegExpForFullGroup(b).test(a)};
Spry.Widget.ValidationTextField.prototype.isValueValid=function(a,b,c){a=a.substring(0,b);return this.getRegExpForGroup(c).test(a)};Spry.Widget.ValidationTextField.prototype.isPositionAtEndOfGroup=function(a,b,c){a=a.substring(0,b);return this.getRegExpForFullGroup(c).test(a)};Spry.Widget.ValidationTextField.prototype.nextDateDelimiterExists=function(a,b,c){c=this.dateAutocompleteCharacters[c+1];return a.length<b+c.length||a.substring(b,b+c.length)!=c?!1:!0};Spry.Widget.ValidationTextField.prototype.onKeyPress=
function(a){if(this.flags.skp)return this.flags.skp=!1,Spry.Widget.Utils.stopEvent(a),!1;if(a.ctrlKey||a.metaKey||!this.useCharacterMasking)return!0;if(Spry.is.opera&&this.flags.operaRevertOnKeyUp)return Spry.Widget.Utils.stopEvent(a),!1;if((8==this.keyCode||46==this.keyCode)&&this.doValidations(this.input.value,this.input.value))return!0;var b=Spry.Widget.Utils.getCharacterFromEvent(a);if(b&&this.characterMasking&&!this.characterMasking.test(b))return Spry.Widget.Utils.stopEvent(a),this.redTextFlash(),
!1;if(b&&this.pattern){var c=this.patternCharacters[this.selection.start];/[ax]/i.test(c)&&(b=c.toLowerCase()==c?b.toLowerCase():b.toUpperCase());c=this.getAutoComplete(this.selection.start);if(this.selection.start==this.oldValue.length)if(this.oldValue.length<this.patternLength){if(c)return Spry.Widget.Utils.stopEvent(a),a=this.oldValue.substring(0,this.selection.start)+c+b,(b=this.doValidations(a,this.oldValue))?(this.setValue(this.oldValue.substring(0,this.selection.start)+c),this.selection.moveTo(this.selection.start+
c.length,this.selection.start+c.length)):(this.setValue(this.fixedValue),this.selection.moveTo(this.fixedValue.length,this.fixedValue.length)),!1}else return Spry.Widget.Utils.stopEvent(a),this.setValue(this.input.value),!1;else if(c)return Spry.Widget.Utils.stopEvent(a),this.selection.moveTo(this.selection.start+c.length,this.selection.start+c.length),!1;Spry.Widget.Utils.stopEvent(a);a=this.oldValue.substring(0,this.selection.start)+b+this.oldValue.substring(this.selection.start+1);(b=this.doValidations(a,
this.oldValue))?this.selection.moveTo(this.selection.start,this.selection.start):(c=this.getAutoComplete(this.selection.start+1),this.setValue(this.fixedValue),this.selection.moveTo(this.selection.start+1+c.length,this.selection.start+1+c.length));return!1}if(b&&"date"==this.type&&this.useCharacterMasking){var d=this.getDateGroup(this.oldValue,this.selection.start);if(-1!=d)if(Spry.Widget.Utils.stopEvent(a),0!=d%2&&d++,this.isDateGroupFull(this.oldValue,d))if(this.isPositionAtEndOfGroup(this.oldValue,
this.selection.start,d))if(d==this.lastDateGroup)this.redTextFlash();else if(this.nextDateDelimiterExists(this.oldValue,this.selection.start,d)){c=this.dateAutocompleteCharacters[d+1];this.selection.moveTo(this.selection.start+c.length,this.selection.start+c.length);if(b==c)return!1;a=this.isDateGroupFull(this.oldValue,d+2)?this.oldValue.substring(0,this.selection.start)+b+this.oldValue.substring(this.selection.start+1):this.oldValue.substring(0,this.selection.start)+b+this.oldValue.substring(this.selection.start);
this.isValueValid(a,this.selection.start+1,d+2)?(this.setValue(a),this.selection.moveTo(this.selection.start+1,this.selection.start+1)):this.redTextFlash()}else c=this.dateAutocompleteCharacters[d+1],b=c+b,a=this.oldValue.substring(0,this.selection.start)+b+this.oldValue.substring(this.selection.start),this.isValueValid(a,this.selection.start+b.length,d+2)?(this.setValue(a),this.selection.moveTo(this.selection.start+b.length,this.selection.start+b.length)):(b=c,a=this.oldValue.substring(0,this.selection.start)+
b+this.oldValue.substring(this.selection.start),this.setValue(a),this.selection.moveTo(this.selection.start+b.length,this.selection.start+b.length),this.redTextFlash());else{var e=1;a=this.oldValue.substring(0,this.selection.start)+b+this.oldValue.substring(this.selection.start+1);this.isValueValid(a,this.selection.start+1,d)?(this.isPositionAtEndOfGroup(a,this.selection.start+1,d)&&d!=this.lastDateGroup&&(this.nextDateDelimiterExists(a,this.selection.start+1,d)?c=this.dateAutocompleteCharacters[d+
1]:(c=this.dateAutocompleteCharacters[d+1],a=this.oldValue.substring(0,this.selection.start)+b+c+this.oldValue.substring(this.selection.start+1)),e=1+c.length),this.setValue(a),this.selection.moveTo(this.selection.start+e,this.selection.start+e)):this.redTextFlash()}else a=this.oldValue.substring(0,this.selection.start)+b+this.oldValue.substring(this.selection.start),e=1,this.isValueValid(a,this.selection.start+1,d)||this.isValueValid(a,this.selection.start+1,d+1)?(c=this.dateAutocompleteCharacters[d+
1],b==c?this.nextDateDelimiterExists(this.oldValue,this.selection.start,d)&&(a=this.oldValue,e=1):this.isPositionAtEndOfGroup(a,this.selection.start+1,d)&&d!=this.lastDateGroup&&(this.nextDateDelimiterExists(a,this.selection.start+1,d)?c=this.dateAutocompleteCharacters[d+1]:(c=this.dateAutocompleteCharacters[d+1],a=this.oldValue.substring(0,this.selection.start)+b+c+this.oldValue.substring(this.selection.start+1)),e=1+c.length),this.setValue(a),this.selection.moveTo(this.selection.start+e,this.selection.start+
e)):this.redTextFlash();return!1}};Spry.Widget.ValidationTextField.prototype.onKeyDown=function(a){this.saveState();this.keyCode=a.keyCode;if(Spry.is.opera&&(this.flags.operaPasteOperation&&(window.clearInterval(this.flags.operaPasteOperation),this.flags.operaPasteOperation=null),a.ctrlKey)){var b=Spry.Widget.Utils.getCharacterFromEvent(a);if(b&&-1!="vx".indexOf(b.toLowerCase())){var c=this;this.flags.operaPasteOperation=window.setInterval(function(){c.operaPasteMonitor()},1);return!0}}if(8!=this.keyCode&&
46!=this.keyCode&&Spry.Widget.Utils.isSpecialKey(a)||(8==this.keyCode||46==this.keyCode)&&this.doValidations(this.input.value,this.input.value))return!0;if(this.useCharacterMasking&&this.pattern&&46==this.keyCode){if(a.ctrlKey)this.setValue(this.input.value.substring(0,this.selection.start));else{if(this.selection.end==this.input.value.length||this.selection.start==this.input.value.length-1)return!0;this.flags.operaRevertOnKeyUp=!0}Spry.is.mozilla&&Spry.is.mac&&(this.flags.skp=!0);Spry.Widget.Utils.stopEvent(a);
return!1}if(this.useCharacterMasking&&this.pattern&&!a.ctrlKey&&8==this.keyCode){if(this.selection.start==this.input.value.length)b=this.getAutoComplete(this.selection.start,-1),this.setValue(this.input.value.substring(0,this.input.value.length-(Spry.is.opera?0:1)-b.length)),Spry.is.opera&&(this.selection.start=this.selection.start-1-b.length,this.selection.end=this.selection.end-1-b.length);else{if(this.selection.end==this.input.value.length)return!0;this.flags.operaRevertOnKeyUp=!0}Spry.is.mozilla&&
Spry.is.mac&&(this.flags.skp=!0);Spry.Widget.Utils.stopEvent(a);return!1}return!0};Spry.Widget.ValidationTextField.prototype.onMouseDown=function(a){this.flags.active&&this.saveState()};Spry.Widget.ValidationTextField.prototype.onDrop=function(a){this.flags.drop=!0;this.removeHint();this.saveState();this.flags.active=!0;this.addClassName(this.element,this.focusClass);this.addClassName(this.additionalError,this.focusClass)};Spry.Widget.ValidationTextField.prototype.onFocus=function(a){this.flags.drop||
(this.removeHint(),this.pattern&&this.useCharacterMasking&&(a=this.getAutoComplete(this.selection.start),this.setValue(this.input.value+a),this.selection.moveTo(this.input.value.length,this.input.value.length)),this.saveState(),this.flags.active=!0,this.addClassName(this.element,this.focusClass),this.addClassName(this.additionalError,this.focusClass))};Spry.Widget.ValidationTextField.prototype.onBlur=function(a){this.flags.active=!1;this.removeClassName(this.element,this.focusClass);this.removeClassName(this.additionalError,
this.focusClass);this.flags.restoreSelection=!1;this.doValidations(this.input.value,this.input.value);this.flags.restoreSelection=!0;this.validateOn&Spry.Widget.ValidationTextField.ONBLUR&&this.validate();var b=this;setTimeout(function(){b.putHint()},10);return!0};Spry.Widget.ValidationTextField.prototype.compilePattern=function(){if(this.pattern){for(var a=[],b=[],c=[],d=0,e="",f="",g=0;g<this.pattern.length;g++)e=this.pattern.charAt(g),"\\"==f?(/[0ABXY\?]/i.test(e)?b[d-1]=e:b[d-1]=Spry.Widget.ValidationTextField.regExpFromChars(e),
a[d-1]=e,c[d-1]=null,f=""):(b[d]=Spry.Widget.ValidationTextField.regExpFromChars(e),/[0ABXY\?]/i.test(e)?(a[d]=null,c[d]=e):"\\"==e?(a[d]=e,c[d]="\\"):(a[d]=e,c[d]=null),d++,f=e);this.autoCompleteCharacters=a;this.compiledPattern=b;this.patternCharacters=c;this.patternLength=a.length}};Spry.Widget.ValidationTextField.prototype.getAutoComplete=function(a,b){if(-1==b){for(var c="",d="";a&&(c=this.getAutoComplete(--a));)d=c;return d}for(var d=c="",e=a;e<this.autoCompleteCharacters.length;e++)if(d=this.autoCompleteCharacters[e])c+=
d;else break;return c};Spry.Widget.ValidationTextField.regExpFromChars=function(a){for(var b="",c="",d=0;d<a.length;d++)switch(c=a.charAt(d),c){case "0":b+="\\d";break;case "A":b+="[A-Z]";break;case "a":b+="[a-z]";break;case "B":case "b":b+="[a-zA-Z]";break;case "x":b+="[0-9a-z]";break;case "X":b+="[0-9A-Z]";break;case "Y":case "y":b+="[0-9a-zA-Z]";break;case "?":b+=".";break;case "1":case "2":case "3":case "4":case "5":case "6":case "7":case "8":case "9":b+=c;break;case "c":case "C":case "e":case "E":case "f":case "F":case "r":case "d":case "D":case "n":case "s":case "S":case "w":case "W":case "t":case "v":b+=
c;break;default:b+="\\"+c}return b};Spry.Widget.ValidationTextField.prototype.patternToRegExp=function(a){var b="^";a=Math.min(this.compiledPattern.length,a);for(var c=0;c<a;c++)b+=this.compiledPattern[c];return b=new RegExp(b+"$","")};Spry.Widget.ValidationTextField.prototype.resetClasses=function(){for(var a=[this.requiredClass,this.invalidFormatClass,this.invalidRangeMinClass,this.invalidRangeMaxClass,this.invalidCharsMinClass,this.invalidCharsMaxClass,this.validClass],b=0;b<a.length;b++)this.removeClassName(this.element,
a[b]),this.removeClassName(this.additionalError,a[b])};Spry.Widget.ValidationTextField.prototype.reset=function(){this.removeHint();this.oldValue=this.input.defaultValue;this.resetClasses();Spry.is.ie&&(this.input.forceFireFirstOnPropertyChange=!0,this.input.removeAttribute("forceFireFirstOnPropertyChange"));var a=this;setTimeout(function(){a.putHint()},10)};Spry.Widget.ValidationTextField.prototype.validate=function(){this.resetClasses();if(this.validateOn&Spry.Widget.ValidationTextField.ONSUBMIT&&
(this.removeHint(),this.doValidations(this.input.value,this.input.value),!this.flags.active)){var a=this;setTimeout(function(){a.putHint()},10)}if(this.isRequired&&this.errors&Spry.Widget.ValidationTextField.ERROR_REQUIRED)return this.addClassName(this.element,this.requiredClass),this.addClassName(this.additionalError,this.requiredClass),!1;if(this.errors&Spry.Widget.ValidationTextField.ERROR_FORMAT)return this.addClassName(this.element,this.invalidFormatClass),this.addClassName(this.additionalError,
this.invalidFormatClass),!1;if(this.errors&Spry.Widget.ValidationTextField.ERROR_RANGE_MIN)return this.addClassName(this.element,this.invalidRangeMinClass),this.addClassName(this.additionalError,this.invalidRangeMinClass),!1;if(this.errors&Spry.Widget.ValidationTextField.ERROR_RANGE_MAX)return this.addClassName(this.element,this.invalidRangeMaxClass),this.addClassName(this.additionalError,this.invalidRangeMaxClass),!1;if(this.errors&Spry.Widget.ValidationTextField.ERROR_CHARS_MIN)return this.addClassName(this.element,
this.invalidCharsMinClass),this.addClassName(this.additionalError,this.invalidCharsMinClass),!1;if(this.errors&Spry.Widget.ValidationTextField.ERROR_CHARS_MAX)return this.addClassName(this.element,this.invalidCharsMaxClass),this.addClassName(this.additionalError,this.invalidCharsMaxClass),!1;this.addClassName(this.element,this.validClass);this.addClassName(this.additionalError,this.validClass);return!0};Spry.Widget.ValidationTextField.prototype.addClassName=function(a,b){!a||!b||a.className&&-1!=
a.className.search(new RegExp("\\b"+b+"\\b"))||(a.className+=(a.className?" ":"")+b)};Spry.Widget.ValidationTextField.prototype.removeClassName=function(a,b){!a||!b||a.className&&-1==a.className.search(new RegExp("\\b"+b+"\\b"))||(a.className=a.className.replace(new RegExp("\\s*\\b"+b+"\\b","g"),""))};Spry.Widget.ValidationTextField.prototype.showError=function(a){alert("Spry.Widget.TextField ERR: "+a)};Spry.Widget.SelectionDescriptor=function(a){this.element=a;this.update()};Spry.Widget.SelectionDescriptor.prototype.update=
function(){if(Spry.is.ie&&Spry.is.windows){var a=this.element.ownerDocument.selection;if("TEXTAREA"==this.element.nodeName){if("None"!=a.type){try{var b=a.createRange()}catch(d){return}if(b.parentElement()==this.element){a=this.element.ownerDocument.body.createTextRange();a.moveToElementText(this.element);for(var c=0;0>a.compareEndPoints("StartToStart",b);c++)a.moveStart("character",1);this.start=c;a=this.element.ownerDocument.body.createTextRange();a.moveToElementText(this.element);for(c=0;0>a.compareEndPoints("StartToEnd",
b);c++)a.moveStart("character",1);this.end=c;this.length=this.end-this.start;this.text=b.text}}}else if("INPUT"==this.element.nodeName){try{this.range=a.createRange()}catch(d){return}this.length=this.range.text.length;b=this.range.duplicate();this.start=-b.moveStart("character",-1E4);b=this.range.duplicate();b.collapse(!1);this.end=-b.moveStart("character",-1E4);this.text=this.range.text}}else{b=this.element;c=a=0;try{a=b.selectionStart}catch(d){}try{c=b.selectionEnd}catch(d){}Spry.is.safari&&(2147483647==
a&&(a=0),2147483647==c&&(c=0));this.start=a;this.end=c;this.length=c-a;this.text=this.element.value.substring(a,c)}};Spry.Widget.SelectionDescriptor.prototype.destroy=function(){try{delete this.range}catch(a){}try{delete this.element}catch(a){}};Spry.Widget.SelectionDescriptor.prototype.move=function(a){if(Spry.is.ie&&Spry.is.windows)this.range.move("character",a),this.range.select();else try{this.element.selectionStart++}catch(b){}this.update()};Spry.Widget.SelectionDescriptor.prototype.moveTo=function(a,
b){if(Spry.is.ie&&Spry.is.windows){if("TEXTAREA"==this.element.nodeName){var c=this.element.createTextRange();this.range=this.element.createTextRange();this.range.move("character",a);this.range.moveEnd("character",b-a);0>this.range.compareEndPoints("StartToStart",c)&&this.range.setEndPoint("StartToStart",c);0<this.range.compareEndPoints("EndToEnd",c)&&this.range.setEndPoint("EndToEnd",c)}else"INPUT"==this.element.nodeName&&(this.range=this.element.ownerDocument.selection.createRange(),this.range.move("character",
-1E4),this.start=this.range.moveStart("character",a),this.end=this.start+this.range.moveEnd("character",b-a));this.range.select()}else{this.start=a;try{this.element.selectionStart=a}catch(d){}this.end=b;try{this.element.selectionEnd=b}catch(d){}}this.ignore=!0;this.update()};Spry.Widget.SelectionDescriptor.prototype.moveEnd=function(a){if(Spry.is.ie&&Spry.is.windows)this.range.moveEnd("character",a),this.range.select();else try{this.element.selectionEnd++}catch(b){}this.update()};Spry.Widget.SelectionDescriptor.prototype.collapse=
function(a){if(Spry.is.ie&&Spry.is.windows)this.range=this.element.ownerDocument.selection.createRange(),this.range.collapse(a),this.range.select();else if(a)try{this.element.selectionEnd=this.element.selectionStart}catch(b){}else try{this.element.selectionStart=this.element.selectionEnd}catch(b){}this.update()};Spry.Widget.Form||(Spry.Widget.Form={});Spry.Widget.Form.onSubmitWidgetQueue||(Spry.Widget.Form.onSubmitWidgetQueue=[]);Spry.Widget.Form.validate||(Spry.Widget.Form.validate=function(a){for(var b=
!0,c=!0,d=Spry.Widget.Form.onSubmitWidgetQueue,e=d.length,f=0;f<e;f++)d[f].isDisabled()||d[f].form!=a||(b=(c=d[f].validate())&&b);return b});Spry.Widget.Form.onSubmit||(Spry.Widget.Form.onSubmit=function(a,b){return 0==Spry.Widget.Form.validate(b)?!1:!0});Spry.Widget.Form.onReset||(Spry.Widget.Form.onReset=function(a,b){for(var c=Spry.Widget.Form.onSubmitWidgetQueue,d=c.length,e=0;e<d;e++)c[e].isDisabled()||c[e].form!=b||"function"!=typeof c[e].reset||c[e].reset();return!0});Spry.Widget.Form.destroy||
(Spry.Widget.Form.destroy=function(a){for(var b=Spry.Widget.Form.onSubmitWidgetQueue,c=0;c<Spry.Widget.Form.onSubmitWidgetQueue.length;c++)b[c].form==a&&"function"==typeof b[c].destroy&&(b[c].destroy(),c--)});Spry.Widget.Form.destroyAll||(Spry.Widget.Form.destroyAll=function(){for(var a=Spry.Widget.Form.onSubmitWidgetQueue,b=0;b<Spry.Widget.Form.onSubmitWidgetQueue.length;b++)"function"==typeof a[b].destroy&&(a[b].destroy(),b--)});Spry.Widget.Utils||(Spry.Widget.Utils={});Spry.Widget.Utils.punycode_constants=
{base:36,tmin:1,tmax:26,skew:38,damp:700,initial_bias:72,initial_n:128,delimiter:45,maxint:67108864};Spry.Widget.Utils.punycode_encode_digit=function(a){return String.fromCharCode(a+22+75*(26>a))};Spry.Widget.Utils.punycode_adapt=function(a,b,c){a=c?a/this.punycode_constants.damp:a>>1;a+=a/b;for(b=0;a>(this.punycode_constants.base-this.punycode_constants.tmin)*this.punycode_constants.tmax/2;b+=this.punycode_constants.base)a/=this.punycode_constants.base-this.punycode_constants.tmin;return b+(this.punycode_constants.base-
this.punycode_constants.tmin+1)*a/(a+this.punycode_constants.skew)};Spry.Widget.Utils.punycode_encode=function(a,b){var c=a.split("");a=[];for(var d=0;d<c.length;d++)a.push(c[d].charCodeAt(0));var c="",e,f,g,h,l,p=a.length,m=this.punycode_constants.initial_n,k=0,n=this.punycode_constants.initial_bias,q=0;for(f=0;f<p;f++)if(128>a[f]){if(2>b-q)return!1;c+=String.fromCharCode(a[f]);q++}d=e=q;0<e&&(c+=String.fromCharCode(this.punycode_constants.delimiter),q++);for(;d<p;){g=this.punycode_constants.maxint;
for(f=0;f<p;f++)a[f]>=m&&a[f]<g&&(g=a[f]);if(g-m>(this.punycode_constants.maxint-k)/(d+1))return!1;k+=(g-m)*(d+1);m=g;for(f=0;f<p;f++){if(a[f]<m&&0==++k)return!1;if(a[f]==m){g=k;for(h=this.punycode_constants.base;;h+=this.punycode_constants.base){if(q>=b)return!1;l=h<=n?this.punycode_constants.tmin:h>=n+this.punycode_constants.tmax?this.punycode_constants.tmax:h-n;if(g<l)break;c+=this.punycode_encode_digit(l+(g-l)%(this.punycode_constants.base-l));q++;g=(g-l)/(this.punycode_constants.base-l)}c+=this.punycode_encode_digit(g);
q++;n=this.punycode_adapt(k,d+1,d==e);k=0;d++}}k++;m++}return c};Spry.Widget.Utils.setOptions=function(a,b,c){if(b)for(var d in b)c&&void 0==b[d]||(a[d]=b[d])};Spry.Widget.Utils.firstValid=function(){for(var a=null,b=0;b<Spry.Widget.Utils.firstValid.arguments.length;b++)if("undefined"!=typeof Spry.Widget.Utils.firstValid.arguments[b]){a=Spry.Widget.Utils.firstValid.arguments[b];break}return a};Spry.Widget.Utils.specialCharacters=",8,9,16,17,18,20,27,33,34,35,36,37,38,40,45,144,192,63232,";Spry.Widget.Utils.specialSafariNavKeys=
"63232,63233,63234,63235,63272,63273,63275,63276,63277,63289,";Spry.Widget.Utils.specialNotSafariCharacters="39,46,91,92,93,";Spry.Widget.Utils.specialCharacters+=Spry.Widget.Utils.specialSafariNavKeys;Spry.is.safari||(Spry.Widget.Utils.specialCharacters+=Spry.Widget.Utils.specialNotSafariCharacters);Spry.Widget.Utils.isSpecialKey=function(a){return-1!=Spry.Widget.Utils.specialCharacters.indexOf(","+a.keyCode+",")};Spry.Widget.Utils.getCharacterFromEvent=function(a){var b="keydown"==a.type,c=null,
d=null;Spry.is.mozilla&&!b?a.charCode?d=String.fromCharCode(a.charCode):c=a.keyCode:(c=a.keyCode||a.which,13!=c&&(d=String.fromCharCode(c)));Spry.is.safari&&(b?(c=a.keyCode||a.which,d=String.fromCharCode(c)):(c=a.keyCode||a.which,d=-1!=Spry.Widget.Utils.specialCharacters.indexOf(","+c+",")?null:String.fromCharCode(c)));Spry.is.opera&&(d=-1!=Spry.Widget.Utils.specialCharacters.indexOf(","+c+",")?null:String.fromCharCode(c));return d};Spry.Widget.Utils.getFirstChildWithNodeNameAtAnyLevel=function(a,
b){var c=a.getElementsByTagName(b);return c?c[0]:null};Spry.Widget.Utils.getFirstParentWithNodeName=function(a,b){for(;a.parentNode&&a.parentNode.nodeName.toLowerCase()!=b.toLowerCase()&&"BODY"!=a.parentNode.nodeName;)a=a.parentNode;return a.parentNode&&a.parentNode.nodeName.toLowerCase()==b.toLowerCase()?a.parentNode:null};Spry.Widget.Utils.destroyWidgets=function(a){"string"==typeof a&&(a=document.getElementById(a));for(var b=Spry.Widget.Form.onSubmitWidgetQueue,c=0;c<Spry.Widget.Form.onSubmitWidgetQueue.length;c++)"function"==
typeof b[c].destroy&&Spry.Widget.Utils.contains(a,b[c].element)&&(b[c].destroy(),c--)};Spry.Widget.Utils.contains=function(a,b){if("object"==typeof a.contains)return b&&a&&(a==b||a.contains(b));for(var c=b;c;){if(c==a)return!0;c=c.parentNode}return!1};Spry.Widget.Utils.addEventListener=function(a,b,c,d){try{a.addEventListener?a.addEventListener(b,c,d):a.attachEvent&&a.attachEvent("on"+b,c,d)}catch(e){}};Spry.Widget.Utils.removeEventListener=function(a,b,c,d){try{a.removeEventListener?a.removeEventListener(b,
c,d):a.detachEvent&&a.detachEvent("on"+b,c,d)}catch(e){}};Spry.Widget.Utils.stopEvent=function(a){try{this.stopPropagation(a),this.preventDefault(a)}catch(b){}};Spry.Widget.Utils.stopPropagation=function(a){a.stopPropagation?a.stopPropagation():a.cancelBubble=!0};Spry.Widget.Utils.preventDefault=function(a){a.preventDefault?a.preventDefault():a.returnValue=!1}})();
