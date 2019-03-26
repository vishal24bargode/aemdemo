$(document).ready(function () {
    $('.check_list li').fancyCheckBox();
    $('.custom-drop-down-box').click(function (e) {
        if ($(this).next(this).is(':visible')) {
            $(this).removeClass('active');
            $(this).next(this).slideUp();
        } else {
            $('.custom-drop-down-box').removeClass('active');
            $(this).addClass('active');
            $('.custom-list-box').hide();
            $(this).next(this).slideDown();
        }
        e.stopPropagation();
    });
    $('.custom-list-box').click(function (e) {
        e.stopPropagation();
    });
    $('html').click(function () {
        if ($('.custom-list-box').is(':visible')) {
            $('.custom-list-box').slideUp(300);
        }
        $('.custom-drop-down-box').removeClass('active');
    });

    $('.happenings .check_list li').click(function () {
        $('#region1').fadeOut();
        $('#region2').fadeIn();
    })


    //        $(".print-box .dropdown-menu li a").click(function () {
    //            $(".btn:first-child").text($(this).text());
    //            $(".btn:first-child").val($(this).text());
    //        });

});

$.fn.fancyCheckBox = function () {
    this.click(function () {
        if ($(this).hasClass('checkAll')) {
            if ($(this).hasClass('checked')) {
                $(this).parents(".check_list").find("li").removeClass("checked");
                $(this).parents(".check_list").find('input:checkbox').attr('checked', false);
                $(this).parents(".check_list").find("li").css({
                    "opacity": "inherit"
                });
            } else {
                $(this).parents(".check_list").find("li").addClass("checked");
                $(this).parents(".check_list").find("li").css({
                    "opacity": "0.3"
                });
                $(this).parents(".check_list").find('input:checkbox').attr('checked', true);
                $(this).css({
                    "opacity": "inherit"
                });
            }
        } else {
            $(this).toggleClass("checked");
            if ($(this).hasClass('checked')) {
                $('input:checkbox', this).attr('checked', true);
            } else {
                $('input:checkbox', this).attr('checked', false);
            }
            var el = $(this);
        }
    });

}

$(function () {
    var listLI = $('ul.check_list li');
    $list = $("#getValue");
    for (var i = 0; i < listLI.length; i++) {
        $(listLI[0]).click(function () {
            var textName = $(this).children("span").html();
            if ($list.children('span') && $(this).hasClass('checked')) {
                $(this).parents(".check_list").find("li[class='checked']").css({
                    'pointer-events': 'none'
                });

                $list.prev().hide();
                $list.children().remove();
                $list.append("<span data-value='" + textName + "'>" + textName + " </span>");
            } else {
                $(this).parents(".check_list").find("li").css({
                    'pointer-events': 'inherit'
                });

                $list.prev().show();
                $list.find('span[data-value="' + textName + '"]').slideUp("fast", function () {
                    $(this).remove();
                });
            }
        });

        $(listLI[i]).click(function () {
            var textName = $(this).children("span").html();
            if ($(this).hasClass('checked')) {
                $list.prev().hide();
                $list.append("<span data-value='" + textName + "'>" + textName + " </span>");
            } else {
                if ($list.children().length == 1) {
                    $list.prev().show();
                }
                $list.find('span[data-value="' + textName + '"]').slideUp("fast", function () {
                    $(this).remove();
                });
            }
        })
    }
});


$(document).ready(function () {
    var offset = $('header').height();
    $(window).scroll(function () {
        if ($(this).scrollTop() > offset) {
            $('header').addClass('sticky');
            $('.home-banner,.article-detail').css('margin-top', offset);

        } else {
            $('header').removeClass('sticky');
            $('.home-banner,.article-detail').css('margin-top', '0');
        }
    });

    $('.search-option a').click(function () {
        $('.search-option a').removeClass('active');
        $(this).addClass('active');
    })

    $('.btn-humbeger').click(function () {
        $('.main-nav').slideToggle();
        $(this).toggleClass('open');
    })

    $('#datetimepicker1,#datetimepicker2').datetimepicker({
        format: 'DD-MM-YYYY'
    });
    //    $(function () {
    //     $('#datetimepickerfrom').datetimepicker({
    //         format: 'DD/MM/YYYY'
    //     });
    //     $('#datetimepickerend').datetimepicker({
    //         format: 'DD/MM/YYYY',
    //         useCurrent: false //Important! See issue #1075
    //     });
    //     $("#datetimepickerfrom").on("dp.change", function (e) {
    //         $('#datetimepickerend').data("DateTimePicker").minDate(e.date);
    //     });
    //     $("#datetimepickerend").on("dp.change", function (e) {
    //         $('#datetimepickerfrom').data("DateTimePicker").maxDate(e.date);
    //     });
    // });

    // share popup 
    $('.share').on('click', function () {
        if ($(this).prev('.share-icon').is(':visible')) {
            $(this).prev().removeClass('open');
        } else {
            $('.share-icon').removeClass('open');
            $(this).prev().addClass('open');
        }
    });

    $(document).click(function (e) {
        if (!$(e.target).parents().andSelf().is('.share')) {
            $('.share-icon').removeClass('open')
        }
    });
    // share popup end

    $('.image-slider').owlCarousel({
        loop: true,
        nav: true,
        navText: ['<i class="glyphicon glyphicon-menu-left"></i>', '<i class="glyphicon glyphicon-menu-right"></i>'],
        autoHeight: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })
    $('.related-carosel').owlCarousel({
        nav: false,
        margin: 30,
        navText: ['<i class="glyphicon glyphicon-menu-left"></i>', '<i class="glyphicon glyphicon-menu-right"></i>'],
        autoHeight: true,
        responsive: {
            0: {
                items: 2,
                margin: 15,
                stagePadding: 20
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    })

    if ($('.share-bx1').length && $(window).width() > 992) {
        var offset1 = $('.article-ctnt').offset().top - 60,
            elemWid = $('.share-bx1').innerWidth();
        $(window).scroll(function () {
            if ($(this).scrollTop() > offset1) {
                $('.share-bx1').css('position', 'fixed');
                $('.share-bx1').css('top', '60px');
                $('.share-bx1').css('width', elemWid);
            } else {
                $('.share-bx1').css('position', 'static');
            }
        });
    }

    $('.more a').click(function () {
        $(this).parent().prev().slideDown();
        $(this).hide();
    })
});

//Search box
$(document).ready(function () {
    var substringMatcher = function (strs) {
        return function findMatches(q, cb) {
            var matches, substrRegex;

            // an array that will be populated with substring matches
            matches = [];

            // regex used to determine if a string contains the substring `q`
            substrRegex = new RegExp(q, 'i');

            // iterate through the pool of strings and for any string that
            // contains the substring `q`, add it to the `matches` array
            $.each(strs, function (i, str) {
                if (substrRegex.test(str)) {
                    // the typeahead jQuery plugin expects suggestions to a
                    // JavaScript object, refer to typeahead docs for more info
                    matches.push({
                        value: str
                    });
                }
            });

            cb(matches);
        };
    };

    var words = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California',
    'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii',
    'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana',
    'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota',
    'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire',
    'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
    'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island',
    'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
    'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
  ];

    //    $('#autosearch-input .typeahead').typeahead({
    //        hint: true,
    //        highlight: true,
    //        minLength: 1
    //    }, {
    //        name: 'words',
    //        displayKey: 'value',
    //        source: substringMatcher(words)
    //    });

    setDropdownHeight();



    $(window).resize(function () {
        setDropdownHeight(); // align height
    });

    // open search lbox
    $(".search-home").on('click', showAutoSearch);

    // click close btn
    $(".close-btn").on('click', hideAutoSearch);

    function setDropdownHeight() {
        var vh = $(window).height();
        var ddHeight;

        ddHeight = $(window).height() - 300;
        if (vh <= 414) ddHeight = $(window).height() - 200;

        $('.tt-dropdown-menu').css('height', ddHeight + 'px');
    }

    function hideAutoSearch() {
        $('html, body').removeClass('noscroll');
        $('.search-autocomplete-section').fadeOut('100');
        $(document).unbind("keyup", escKey); // bind esc key
    }

    function showAutoSearch() {
        $('html, body').addClass('noscroll');
        $('.search-autocomplete-section').fadeIn('100');
        $(".typeahead").focus(); // set focus
        $(document).keyup(escKey);
    }

    // hide lbox
    function escKey(e) {
        if (e.keyCode == 27) {
            hideAutoSearch();
        }
    }
});
