(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

module.exports = (function (window, document, undefined) {
  "use strict";

  function setCookie(name, value, expires) {
    if (typeof expires === 'number') {
      var d = new Date();
      d.setTime(d.getTime() + expires * 24 * 60 * 60 * 1000);
      var expires = "expires=" + d.toUTCString();
      document.cookie = name + "=" + value + "; " + expires + "; path=/";
    } else {
      document.cookie = name + "=" + value + "; path=/";
    }
  }

  function getCookie(name) {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length == 2) return parts.pop().split(";").shift();
  }

  return {
    setCookie: setCookie,
    getCookie: getCookie
  };
})(window, document);

},{}],2:[function(require,module,exports){
// check the value of the css :before psuedo element
// values look for "true" or "false"

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

exports['default'] = function ($el) {
  var value = "true";
  try {
    value = window.getComputedStyle($el[0], ':before').getPropertyValue('content').replace(/\"/g, '');
  } catch (err) {}
  return value === "false" ? false : true;
};

module.exports = exports['default'];

},{}],3:[function(require,module,exports){
'use strict';

module.exports = function (name) {
    if (Handlebars.templates === undefined || Handlebars.templates[name] === undefined) {
        jQuery.ajax({
            url: themePath + '/js/templates/' + name + '.html',
            success: function success(data) {
                if (Handlebars.templates === undefined) {
                    Handlebars.templates = {};
                }
                Handlebars.templates[name] = Handlebars.compile(data);
            },
            async: false
        });
    }
    return Handlebars.templates[name];
};

},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

exports['default'] = (function (window, document, $, undefined) {
  $.extend($.expr[':'], {
    // jQuery find all focusable elements
    // see: https://coderwall.com/p/jqsanw/jquery-find-every-focusable-elements
    focusable: function focusable(el, index, selector) {
      return $(el).is('a, button, :input, [tabindex]');
    }
  });
})(window, document, jQuery);

;
module.exports = exports['default'];

},{}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _helpersCssControlCodeJs = require("../helpers/cssControlCode.js");

var _helpersCssControlCodeJs2 = _interopRequireDefault(_helpersCssControlCodeJs);

exports['default'] = (function (window, document, $, undefined) {
  var $el = undefined,
      $elParent = undefined,
      elHeight = undefined,
      elWidth = undefined,
      lowerLimit = undefined,
      upperLimit = undefined,
      debounceTimer = undefined,
      runCode = false;

  function init(element) {
    $el = element;
    $elParent = $el.parent().css('position') === 'relative' ? $el.parent() : $el.parent().offsetParent();

    // default assumption as to where the screen will load
    $el.attr('data-sticky', 'top');

    updateData();

    // update variables one more time to catch any post page load changes
    window.setTimeout(function () {
      updateData();
    }, 1000);

    $(window).resize(function () {
      updateData();
      setPosition();
    });

    // toggle the sticky positioning
    $(window).scroll(function () {
      setPosition();
    });
  }

  function updateData() {
    var newRunCode = (0, _helpersCssControlCodeJs2['default'])($el);

    if (runCode && !newRunCode) {
      $el.removeAttr('style');
    }

    runCode = newRunCode;

    if (!runCode) {
      return;
    }

    runCode = newRunCode;
    elHeight = $el.height();
    elWidth = $elParent.width();
    upperLimit = $elParent.offset().top;
    lowerLimit = upperLimit + $elParent.outerHeight(true) - $el.height();

    $el.width(elWidth);
  }

  function setPosition() {
    if (!runCode) {
      $el.attr('data-sticky', 'top');
      return false;
    }

    var windowTop = $(window).scrollTop(),
        attr = $el.attr('data-sticky'),
        top = attr !== 'top' && windowTop <= upperLimit,
        middle = attr !== 'middle' && windowTop < lowerLimit && windowTop > upperLimit,
        bottom = attr !== 'bottom' && windowTop >= lowerLimit;

    if (top) {
      $el.attr('data-sticky', 'top');
    } else if (middle) {
      $el.attr('data-sticky', 'middle');
    } else if (bottom) {
      $el.attr('data-sticky', 'bottom');
    }
  }

  return { init: init };
})(window, document, jQuery);

;
module.exports = exports['default'];

},{"../helpers/cssControlCode.js":2}],6:[function(require,module,exports){
"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

require("./helpers/jQueryExtend.js");

var _modulesAccordionsJs = require("./modules/accordions.js");

var _modulesAccordionsJs2 = _interopRequireDefault(_modulesAccordionsJs);

var _modulesGoogleMapJs = require("./modules/googleMap.js");

var _modulesGoogleMapJs2 = _interopRequireDefault(_modulesGoogleMapJs);

var _modulesBack2topJs = require("./modules/back2top.js");

var _modulesBack2topJs2 = _interopRequireDefault(_modulesBack2topJs);

var _modulesBannerCarouselJs = require("./modules/bannerCarousel.js");

var _modulesBannerCarouselJs2 = _interopRequireDefault(_modulesBannerCarouselJs);

var _modulesClickableJs = require("./modules/clickable.js");

var _modulesClickableJs2 = _interopRequireDefault(_modulesClickableJs);

var _modulesDropdownJs = require("./modules/dropdown.js");

var _modulesDropdownJs2 = _interopRequireDefault(_modulesDropdownJs);

var _modulesEmergencyAlertsJs = require("./modules/emergencyAlerts.js");

var _modulesEmergencyAlertsJs2 = _interopRequireDefault(_modulesEmergencyAlertsJs);

var _modulesFootnoteJs = require("./modules/footnote.js");

var _modulesFootnoteJs2 = _interopRequireDefault(_modulesFootnoteJs);

var _modulesFormValidationJs = require("./modules/formValidation.js");

var _modulesFormValidationJs2 = _interopRequireDefault(_modulesFormValidationJs);

var _modulesHideAlertJs = require("./modules/hideAlert.js");

var _modulesHideAlertJs2 = _interopRequireDefault(_modulesHideAlertJs);

var _modulesKeywordSearchJs = require("./modules/keywordSearch.js");

var _modulesKeywordSearchJs2 = _interopRequireDefault(_modulesKeywordSearchJs);

var _modulesLocationFiltersJs = require("./modules/locationFilters.js");

var _modulesLocationFiltersJs2 = _interopRequireDefault(_modulesLocationFiltersJs);

var _modulesLocationListingJs = require("./modules/locationListing.js");

var _modulesLocationListingJs2 = _interopRequireDefault(_modulesLocationListingJs);

var _modulesMainNavJs = require("./modules/mainNav.js");

var _modulesMainNavJs2 = _interopRequireDefault(_modulesMainNavJs);

var _modulesMainNavPilotJs = require("./modules/mainNavPilot.js");

var _modulesMainNavPilotJs2 = _interopRequireDefault(_modulesMainNavPilotJs);

var _modulesMobileNavJs = require("./modules/mobileNav.js");

var _modulesMobileNavJs2 = _interopRequireDefault(_modulesMobileNavJs);

var _modulesOrgSelectorJs = require("./modules/orgSelector.js");

var _modulesOrgSelectorJs2 = _interopRequireDefault(_modulesOrgSelectorJs);

var _modulesPaginationJs = require("./modules/pagination.js");

var _modulesPaginationJs2 = _interopRequireDefault(_modulesPaginationJs);

var _modulesPikadayJs = require("./modules/pikaday.js");

var _modulesPikadayJs2 = _interopRequireDefault(_modulesPikadayJs);

var _modulesResponsiveVideoJs = require("./modules/responsiveVideo.js");

var _modulesResponsiveVideoJs2 = _interopRequireDefault(_modulesResponsiveVideoJs);

var _modulesResultsHeadingJs = require("./modules/resultsHeading.js");

var _modulesResultsHeadingJs2 = _interopRequireDefault(_modulesResultsHeadingJs);

var _modulesRichTextJs = require("./modules/richText.js");

var _modulesRichTextJs2 = _interopRequireDefault(_modulesRichTextJs);

var _modulesScrollAnchorsJs = require("./modules/scrollAnchors.js");

var _modulesScrollAnchorsJs2 = _interopRequireDefault(_modulesScrollAnchorsJs);

var _modulesFormInputsJs = require("./modules/formInputs.js");

var _modulesFormInputsJs2 = _interopRequireDefault(_modulesFormInputsJs);

var _modulesUtilNavJs = require("./modules/utilNav.js");

var _modulesUtilNavJs2 = _interopRequireDefault(_modulesUtilNavJs);

},{"./helpers/jQueryExtend.js":4,"./modules/accordions.js":7,"./modules/back2top.js":8,"./modules/bannerCarousel.js":9,"./modules/clickable.js":10,"./modules/dropdown.js":11,"./modules/emergencyAlerts.js":12,"./modules/footnote.js":13,"./modules/formInputs.js":14,"./modules/formValidation.js":15,"./modules/googleMap.js":16,"./modules/hideAlert.js":17,"./modules/keywordSearch.js":18,"./modules/locationFilters.js":19,"./modules/locationListing.js":20,"./modules/mainNav.js":21,"./modules/mainNavPilot.js":22,"./modules/mobileNav.js":23,"./modules/orgSelector.js":24,"./modules/pagination.js":25,"./modules/pikaday.js":26,"./modules/responsiveVideo.js":27,"./modules/resultsHeading.js":28,"./modules/richText.js":29,"./modules/scrollAnchors.js":30,"./modules/utilNav.js":31}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _helpersCssControlCodeJs = require("../helpers/cssControlCode.js");

var _helpersCssControlCodeJs2 = _interopRequireDefault(_helpersCssControlCodeJs);

exports['default'] = (function (window, document, $, undefined) {

  $('.js-accordion').each(function () {
    var $el = $(this),
        $link = $el.find('.js-accordion-link'),
        $content = $el.find('.js-accordion-content'),
        active = (0, _helpersCssControlCodeJs2['default'])($el),
        open = $el.hasClass('is-open');

    $el.attr('aria-expanded', open);

    if (open) {
      // setup the inline display block
      $content.stop(true, true).slideDown();
    }

    $link.on('click', function (e) {
      if (active) {
        e.preventDefault();
        open = $el.hasClass('is-open');
        if (open) {
          $content.stop(true, true).slideUp();
        } else {
          $content.stop(true, true).slideDown();
        }
        $el.attr('aria-expanded', !open).toggleClass('is-open');
      }
    });

    $(window).resize(function () {
      var temp = (0, _helpersCssControlCodeJs2['default'])($el);

      if (temp !== active && !temp) {
        $content.removeAttr('style');
        $el.removeClass('is-open');
        $el.attr('aria-expanded', 'false');
      }

      active = temp;
    }).resize();
  });
})(window, document, jQuery);

;
module.exports = exports['default'];

},{"../helpers/cssControlCode.js":2}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

exports['default'] = (function (window, document, $, undefined) {
  var $footer = $('.js-footer'),
      visibleThreshold = 250,
      staticThreshold = 50;

  $(".js-back2top").each(function () {
    var $el = $(this);

    $el.on('click', function (e) {
      e.preventDefault();
      try {
        $("html, body").stop(true, true).animate({ scrollTop: 0 }, '750');
      } catch (e) {
        $('body').scrollTop(0);
      }
      // Bring keyboard focus back to top as well.
      $("#main-content").focus();
      return false;
    });

    $(window).on('scroll', function () {
      // if we've exceeded the threshold of scrolling
      // from the top, show control
      var scrollTop = $(window).scrollTop();

      if (scrollTop > visibleThreshold) {
        $el.removeClass('is-hidden');
      } else {
        $el.addClass('is-hidden');
      }
    });
  });
})(window, document, jQuery);

;
module.exports = exports['default'];

},{}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

exports['default'] = (function (window, document, $, undefined) {

  $('.js-banner-carousel').each(function () {
    var $el = $(this);

    if ($el.children().length <= 1) {
      return;
    }

    var slider = $el.slick({
      dots: true,
      prevArrow: '<button type="button" class="slick-prev"></button>',
      nextArrow: '<button type="button" class="slick-next"></button>'
    });
  });
})(window, document, jQuery);

;
module.exports = exports['default'];

},{}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

exports['default'] = (function (window, document, $, undefined) {
  $('.js-clickable').each(function () {
    // if the this is clicked
    $(this).click(function (event) {
      event.preventDefault();

      var $el = $(this).find('.js-clickable-link').first();
      // find the destination
      var dest = $el.attr("href");
      // if the target attribute exists
      if ("_blank" === $el.attr("target")) {
        // launch new tab/window
        window.open(dest);
      } else {
        // otherwise redirect to a new page
        window.location = dest;
      }
    });
  });
})(window, document, jQuery);

;
module.exports = exports['default'];

},{}],11:[function(require,module,exports){
// ****** basic custom select that uses mobile select keyboard ******
"use strict";

var dropdownMenu = document.querySelectorAll(".js-dropdown");

if (null !== dropdownMenu) {

  var _length = dropdownMenu.length;

  var _loop = function (i) {
    var parentEl = dropdownMenu[i],
        selectEl = parentEl.querySelector(".js-dropdown-select"),
        link = parentEl.querySelector(".js-dropdown-link");

    if (null === selectEl || null === link) {
      return "break";
    }

    selectEl.onchange = function () {
      var elem = typeof this.selectedIndex === "undefined" ? window.event.srcElement : this;
      link.innerText = elem.text || elem.options[elem.selectedIndex].text;
    };
  };

  for (var i = 0; i < _length; i++) {
    var _ret = _loop(i);

    if (_ret === "break") break;
  }
}

},{}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _helpersCookiesJs = require("../helpers/cookies.js");

var _helpersCookiesJs2 = _interopRequireDefault(_helpersCookiesJs);

exports['default'] = (function (window, document, $, undefined) {
  // Emergency Alerts start close on page load
  // the default behavior is to expand the alerts
  // Emergency Alerts should stay closed if the cookie is set to false

  /* ********* NOTE: 
    This component is dependent on the 
    accordion.js component runing before it. 
  ********* */

  $('.js-emergency-alerts').each(function () {
    var $el = $(this),
        open = true,
        id = $el.data('id'),
        cookieName = 'emergency-alerts' + id,
        cookieValue = _helpersCookiesJs2['default'].getCookie(cookieName),
        $button = $el.find('.js-accordion-link button');

    $button.on('click', function () {
      // clicking this link also triggers the accordion click
      // toggle the current state
      open = !open;
      // update open/close state cookie
      // leave off third argument to make it expire on session
      _helpersCookiesJs2['default'].setCookie(cookieName, open);
    });

    // if the user has closed the alerts on a previous page
    if (typeof cookieValue !== 'undefined' && cookieValue === 'false') {
      open = false;
      // set the state of aria-expanded
      $button.attr('aria-expanded', open);
    }

    // Emergency Alerts loads closed so expand it.
    if (open) {
      open = false; // clicking the link swaps the value
      $button.first().trigger('click');
    }
  });
})(window, document, jQuery);

;
module.exports = exports['default'];

},{"../helpers/cookies.js":1}],13:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _helpersCssControlCodeJs = require("../helpers/cssControlCode.js");

var _helpersCssControlCodeJs2 = _interopRequireDefault(_helpersCssControlCodeJs);

exports["default"] = (function (window, document, $, undefined) {

  $('.js-footnote').each(function () {
    var $el = $(this),
        $link = $el.find(".js-footnote-link"),
        $messageLink = $link.clone(),
        $rtelink = $($link.attr('href')),
        isMobile = (0, _helpersCssControlCodeJs2["default"])($el);

    $messageLink.text('');

    $el.find(".js-footnote-message p:last-child").append($messageLink);

    $(window).resize(function () {
      isMobile = (0, _helpersCssControlCodeJs2["default"])($el);
    });

    $el.on('click', '.js-footnote-link', function (e) {
      e.preventDefault();

      var target = $(this).attr('href');
      var position = getPosition($(target).parent());

      scrollTo(position.top, target);
    });

    $rtelink.click(function (e) {
      e.preventDefault();

      var target = $(this).attr('href');
      var position = getPosition($(target));

      scrollTo(position.top, target);
    });

    function getPosition($target) {
      var pos = $target.offset() || 0;

      if (isMobile) {
        var headerHeight = $('.js-sticky-header').height() || 0;
        var navHeight = $(".js-scroll-anchors").height() || 0;

        pos.top = pos.top - headerHeight - navHeight;
      }

      return pos;
    }

    function scrollTo(position, focus) {
      $("html,body").stop(true, true).animate({ scrollTop: position }, '750', function () {
        if (focus) {
          $(focus).focus();
        }
      });
    }
  });
})(window, document, jQuery);

;
module.exports = exports["default"];

},{"../helpers/cssControlCode.js":2}],14:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

exports['default'] = (function (window, document, $, undefined) {

  $('textarea[maxlength]').each(function () {
    var $el = $(this);
    var maxlength = $el.attr('maxlength');

    var remaining = maxlength - $el.val().length;
    var message = remaining + '/' + maxlength;

    $el.wrap('<div class="ma__textarea__wrapper"></div>');

    $el.parent().attr('data-char-left', message);

    $el.on('keyup mouseup blur', function () {
      remaining = maxlength - $el.val().length;
      message = remaining + '/' + maxlength;
      $el.parent().attr('data-char-left', message);
    });
  });

  // number restricted input based on it's pattern (this must run prior to type="number")
  $('input[type="text"][pattern="[0-9]*"]').on('keydown', function (e) {
    // Allow: delte(46), backspace(8), tab(9), escape(27), enter(13) and space(32))
    if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 32]) !== -1 ||
    // Allow: Ctrl/cmd+A
    e.keyCode == 65 && (e.ctrlKey === true || e.metaKey === true) ||
    // Allow: Ctrl/cmd+C
    e.keyCode == 67 && (e.ctrlKey === true || e.metaKey === true) ||
    // Allow: Ctrl/cmd+X
    e.keyCode == 88 && (e.ctrlKey === true || e.metaKey === true) ||
    // Allow: home, end, left, right
    e.keyCode >= 35 && e.keyCode <= 39) {
      // let it happen, don't do anything
      return;
    }
    // Ensure that it is a number and stop the keypress
    if ((e.shiftKey || e.keyCode < 48 || e.keyCode > 57) && (e.keyCode < 96 || e.keyCode > 105)) {
      e.preventDefault();
    }
  });

  // number input type
  $('input[type="number"], .js-input-number').each(function () {
    var $el = $(this);
    var $plus = $('<button type="button" aria-label="increase value" class="ma__input-number__plus"></button>');
    var $minus = $('<button type="button" aria-label="decrease value" class="ma__input-number__minus"></button>');

    var value = $el.val();

    // if the input is not an html input and key restrictions
    if ($el.attr('type') !== "number") {
      $el.on('keydown', function (e) {
        // Allow: delte(46), backspace(8), tab(9), escape(27), enter(13) and .(110 & 190))
        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
        // Allow: Ctrl/cmd+A
        e.keyCode == 65 && (e.ctrlKey === true || e.metaKey === true) ||
        // Allow: Ctrl/cmd+C
        e.keyCode == 67 && (e.ctrlKey === true || e.metaKey === true) ||
        // Allow: Ctrl/cmd+X
        e.keyCode == 88 && (e.ctrlKey === true || e.metaKey === true) ||
        // Allow: home, end, left, right
        e.keyCode >= 35 && e.keyCode <= 39) {
          // let it happen, don't do anything
          return;
        }
        // Ensure that it is a number and stop the keypress
        if ((e.shiftKey || e.keyCode < 48 || e.keyCode > 57) && (e.keyCode < 96 || e.keyCode > 105)) {
          e.preventDefault();
        }
      });
    }

    $plus.on('click', function () {
      var value = parseInt($el.val().trim(), 10);

      if (value !== value) {
        value = 0;
      }

      $el.val(value + 1);
    });

    $minus.on('click', function () {
      var value = parseInt($el.val(), 10);

      if (value !== value) {
        value = 0;
      }

      $el.val(value - 1);
    });

    $el.wrap('<div class="ma__input-number"></div>');

    $el.parent().append($plus, $minus);
  });
})(window, document, jQuery);

;
module.exports = exports['default'];

},{}],15:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

exports['default'] = (function (window, document, $, undefined) {

  $('form').each(function () {
    var $form = $(this),
        requiredFields = [],
        $errorList = $form.find('.js-error-list');

    // find all required fields
    $('.js-is-required').each(function () {
      var $field = $(this),
          type = $field.data('type'),
          value = $field.val(),
          valid = validate(value, type);

      requiredFields.push({ type: type, valid: valid, $el: $field });

      $(this).data('index', requiredFields.length);
    });

    // if there aren't any required fields, don't do anything
    if (requiredFields.length === 0) {
      return;
    }

    // $form.on('submit', function(e){
    //   e.preventDefault();
    // });

    $form.find('button[type="submit"], input[type="submit"]').on('click', function (e) {
      var submitForm = true;

      // validate each required field
      requiredFields.forEach(function (item) {
        var value = item.$el.val();

        item.valid = validate(value, item.type);

        if (item.valid) {
          clearError(item.$el);
        } else {
          submitForm = false;
          addError(item.$el);
        }
      });

      if (!submitForm) {
        // prevent the form from submitting
        e.preventDefault();
        // show the form error message
        $form.addClass('has-error');
        // scroll up to the error message
        var position = $form.offset();

        // scroll to the top of the form where the list of errors should be
        // using 100px offset to compenstate for possible sticky headers
        $("html,body").stop(true, true).animate({ scrollTop: position.top - 100 }, '750', function () {
          // bring focus to the item we just scrolled to
          $errorList.focus();
        });
      }
    });
  });

  // receives the jquery object of the input
  function clearError($el) {
    $el.removeClass('has-error');
    $el.prev('.ma__error-msg').removeClass('has-error');
  }

  // receives the jquery object of the input
  function addError($el) {
    $el.addClass('has-error');
    $el.prev('.ma__error-msg').addClass('has-error');
  }

  function validate(value) {
    var type = arguments.length <= 1 || arguments[1] === undefined ? 'text' : arguments[1];

    var valid = false;

    switch (type) {
      case 'email':
        valid = !!value.match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]+/i);
        break;
      default:
        valid = value.length !== 0;
    }

    return valid;
  }
})(window, document, jQuery);

;
module.exports = exports['default'];

},{}],16:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _helpersGetHandlebarTemplateJs = require("../helpers/getHandlebarTemplate.js");

var _helpersGetHandlebarTemplateJs2 = _interopRequireDefault(_helpersGetHandlebarTemplateJs);

exports['default'] = (function (window, document, $, undefined) {
  // Only run this code if there is a google map component on the page.
  if (!$('.js-google-map').length || typeof ma.googleMapData === 'undefined') {
    return;
  }

  // Initialize global (at component scope) map properties
  var max = false,
      // Maximum number of map markers per map, can be updated instance
  mapsInitialized = false; // Flag to set to trigger clearInterval(checkForGoogleMaps)

  /**
   * Test for presence of google maps default library (without geocode, places, etc.) until we find it.
   * Loaded in _meta/_01.foot.twig with static api key
   * @todo set up config to pull in dynamic api key
   */
  var checkForGoogleMaps = setInterval(function () {
    if (window.google && window.google.maps && !mapsInitialized) {
      initMaps();
    }
  }, 100);

  // Stop checking for google maps library after 2 minutes.
  var stopChecking = setTimeout(function () {
    clearInterval(checkForGoogleMaps);
  }, 2 * 60 * 1000);

  // Initialize the map
  function initMaps() {
    // Stop checking for google maps library.
    mapsInitialized = true;
    clearInterval(checkForGoogleMaps);
    clearTimeout(stopChecking);

    $(".js-google-map").each(function (i) {
      var $el = $(this);
      max = ma.googleMapData[i].maxItems ? ma.googleMapData[i].maxItems : ma.googleMapData[i].markers.length;

      // Get the maps data (this could be replaced with an api)
      var rawData = ma.googleMapData[i]; // Data object created in @molecules/google-map.twig

      // *** Create the Map *** //
      // Map default config.
      var initMapData = {
        scrollwheel: false
      };
      // Create map data by combining the rawData with the defaults.
      var mapData = Object.assign({}, rawData.map, initMapData);
      // Create google map object assigned to this component instance with map data.
      var map = new google.maps.Map(this, mapData);
      // Initialize global markers, map bounds.
      var bounds = new google.maps.LatLngBounds();
      // Initialize all markers
      var markers = initMarkers(map, rawData.markers);
      // Add up to max markers to the map, zoom map to fit all bounds
      addMarkersToMap(markers, map, bounds);

      // Trigger map initialized event, broadcast master markers.
      $el.trigger('ma:GoogleMap:MapInitialized', [markers]);

      // Add keyboard navigation only after the map is rendered (becoming idle).
      google.maps.event.addListenerOnce(map, 'idle', function () {
        var $mapItems = $(".js-google-map").find('div[title="Show street map"],' + 'div[title="Show street map with terrain"],' + 'div[title="Show satellite imagery"],' + 'div[title="Zoom in to show 45 degree view"],' + 'div[title="Show imagery with street names"],' + 'div[title="Pan up"],' + 'div[title="Pan down"],' + 'div[title="Pan left"],' + 'div[title="Pan right"],' + 'div[title="Return to the last result"],' + 'div[title="Zoom in"],' + 'div[title="Zoom out"],' + 'img[title="Rotate map 90 degrees"],' + '.gmnoprint area');
        $mapItems.each(function (i, o) {
          $(o).attr({
            role: 'button',
            tabindex: '0',
            'aria-label': o.title
          }).bind('keydown', function (ev) {
            // If enter is pressed on one of these elements, trigger a click of the element.
            if (ev.which == 13) {
              ev.preventDefault();
              $(o).trigger('click');
            }
          });
        });
      });

      // Listen for map recenter event
      $el.on("ma:GoogleMap:MapRecenter", function (event, markerIndex) {
        if (typeof markers[markerIndex] === "undefined") {
          return false;
        }
        var marker = markers[markerIndex];
        // center the map on this marker
        map.setCenter(marker.getPosition());
        // close all open infoWindows
        for (var _i in markers) {
          if (markers[_i].open) {
            markers[_i].hideInfo();
          }
        }
        // show the infoWindow for this marker
        marker.showInfo();
      });
      // Listen for map marker bounce event
      $el.on("ma:GoogleMap:MarkerBounce", function (event, markerIndex) {
        if (typeof markers[markerIndex] === "undefined") {
          return false;
        }
        var marker = markers[markerIndex];
        // center and zoom the map on this marker
        map.setCenter(marker.getPosition());
        map.setZoom(15);
        // make the marker bounce three times
        marker.bounce();
      });
      // Listen for data change event to update markers by filters.
      $el.on("ma:GoogleMap:MarkersUpdated", function (e, args) {
        // Update map based on pre-sorted markers order
        markers = updateMapByMarkers({
          dataMarkers: args.markers,
          map: map,
          markers: markers,
          place: args.place ? args.place : false
        });

        // hide all info windows
        for (var _i2 in markers) {
          if (markers[_i2].open) {
            markers[_i2].hideInfo();
          }
        }
      });
    });
  }

  /**
   * Returns the array of initialized current map markers.
   *
   * @param map
   *  The current map object.
   *
   * @param markers
   *  The markers to be initialized.
   *
   * @return {Array}
   */
  function initMarkers(map, markers) {
    var initializedMarkers = [];
    markers.forEach(function (data) {
      var markerData = {
        position: new google.maps.LatLng({
          lat: data.position.lat,
          lng: data.position.lng
        }),
        label: data.label,
        infoWindow: data.infoWindow,
        title: 'Marker: ' + data.infoWindow.name
      };
      var marker = new google.maps.Marker(markerData);
      var infoData = infoTransform(markerData.infoWindow);
      var compiledTemplate = (0, _helpersGetHandlebarTemplateJs2['default'])('googleMapInfo');
      var template = compiledTemplate(infoData);
      var infoWindow = new google.maps.InfoWindow({
        content: template
      });
      var markerBouncing = null;

      marker.addListener('click', function () {
        // hide all info windows
        for (var i in initializedMarkers) {
          if (initializedMarkers[i].open) {
            initializedMarkers[i].hideInfo();
          }
        }

        // show this info window
        marker.showInfo();
      });

      marker.showInfo = function () {
        infoWindow.open(map, marker);
        marker.open = true;
      };

      marker.hideInfo = function () {
        infoWindow.close(map, marker);
        marker.open = false;
      };

      marker.bounce = function () {
        clearTimeout(markerBouncing);
        marker.setAnimation(null);
        marker.setAnimation(google.maps.Animation.BOUNCE);
        markerBouncing = setTimeout(function () {
          marker.setAnimation(null);
        }, 3000);
      };

      initializedMarkers.push(marker);
    });

    return initializedMarkers;
  }

  /**
   * Return formatted marker infowindow data.
   *
   * @param data
   *   Infowindow data object:
   *   "infoWindow": {
   *      "name": "Attleboro District Court",
   *      "phone": "15082225900",
   *      "fax": "15082233706",
   *      "email": "courts@state.ma.us",
   *      "address": "88 North Main Street\nAttleboro, MA 02703"
   *   }
   *
   * @returns {*}
   *   Object with passed data and new infoData property.
   */
  function infoTransform(data) {
    var infoData = {
      phoneFormatted: formatPhone(data.phone),
      faxFormatted: formatPhone(data.fax)
    };
    return Object.assign({}, data, infoData);
  }

  /**
   * Return phone number data formatted for map marker.
   *
   * @param phone
   *   "15082225900",
   * @returns {string}
   *    (508) 222-5900
   */
  function formatPhone(phone) {
    var phoneTemp = phone[0] === '1' ? phone.substring(1) : phone;
    return phoneTemp.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
  }

  /**
   * Location listing specific map helper functions
   */

  /**
   * Renders a new map, with markers  reference to passed marker order and length.
   *
   * @param args
   *  arguments object:
   *    {
   *      dataMarkers: args.markers, // sorted array of markers by witch to sort and filter master markers
   *      map: map, // initialized map instance
   *      markers: markers, // master list of current map markers
   *      place: args.place, // optional location filter place input
     *    }
   */
  function updateMapByMarkers(args) {
    removeMarkersFromMap(args.markers);

    // Reset bounds to remove previous search locations.
    var bounds = new google.maps.LatLngBounds();
    if (args.place && ma.autocomplete.getPlace()) {
      // Ensure the map includes the provided location based on the place value.
      bounds.extend(args.place.geometry.location);
    }

    // Add the new markers to the map and set new bounds based on filtered markers.
    addMarkersToMap(args.dataMarkers, args.map, bounds);

    // If there is only one marker, zoom out to provide some context.
    if (args.dataMarkers.length === 1) {
      args.map.setZoom(16);
    }

    return args.dataMarkers;
  }

  /**
   * Removes passed marker objects from a given map.
   *
   * @param markers
   *   Array of map marker objects.
   */
  function removeMarkersFromMap(markers) {
    for (var i = 0; i < markers.length; i++) {
      markers[i].setMap(null);
    }
  }

  /**
   * Adds markers to a given map and sets bounds based on those markers.
   *
   * @param markers
   *   Initialized map marker objects to be added.
   * @param map
   *   Initialized map object.
   * @param bounds
   *   Initialized map bounds object.
   */
  function addMarkersToMap(markers, map, bounds) {
    // Set max number of markers to whichever is smaller: max or the number of markers sent.
    var maxItems = markers.length < max ? markers.length : max;

    markers.forEach(function (marker, index) {
      if (index < maxItems) {
        marker.setMap(map);
        // Extend the bounds to include each marker's position.
        bounds.extend(marker.position);
      }
    });
    // Make the map zoom to fit the bounds, showing all locations.
    map.fitBounds(bounds);
  }
})(window, document, jQuery);

;
module.exports = exports['default'];

},{"../helpers/getHandlebarTemplate.js":3}],17:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _helpersCookiesJs = require("../helpers/cookies.js");

var _helpersCookiesJs2 = _interopRequireDefault(_helpersCookiesJs);

exports['default'] = (function (window, document, $, undefined) {

  $('.js-header-alert').each(function () {
    var $el = $(this),
        $link = $el.find('.js-header-alert-link'),
        id = $el.data('id'),
        cookieName = "Alert" + id,
        cookieExpires = 365,
        cookieValue = _helpersCookiesJs2['default'].getCookie(cookieName);

    // show alert if cookie doesn't exist
    if (cookieValue !== "hide") {
      $el.fadeIn().fadeOut('fast').fadeIn('slow');
    }

    // hide the alert
    $link.on('click', function () {
      _helpersCookiesJs2['default'].setCookie(cookieName, "hide", cookieExpires);
      $el.stop(true, true).fadeOut();
    });
  });
})(window, document, jQuery);

;
module.exports = exports['default'];

},{"../helpers/cookies.js":1}],18:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

exports['default'] = (function (window, document, $, undefined) {

  $('.js-keyword-search').each(function () {
    var $el = $(this),
        $form = $el.find('form');

    $form.on('submit', function (e) {
      e.preventDefault();
      $el.addClass('is-dirty');
    });

    $form.on('reset', function () {
      $el.removeClass('is-dirty');
    });
  });
})(window, document, jQuery);

;
module.exports = exports['default'];

},{}],19:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

exports['default'] = (function (window, document, $, undefined) {
  $('.js-location-filters').each(function () {
    var $el = $(this);

    // When google map libraries are loaded, initialize places.autocomplete on the location input, if it exists.
    $(document).on('ma:LibrariesLoaded:GoogleMaps', function () {
      var $locationFilter = $('.js-filter-by-location', $el).find('input');
      if ($locationFilter.length) {
        // Create the google places autocomplete object and associate it with the zip code text input.
        var locationInput = document.getElementById($locationFilter.attr('id'));
        var defaultBounds = new google.maps.LatLngBounds(new google.maps.LatLng(40.727093, -73.97864), new google.maps.LatLng(43.004778, -69.845299));

        // See options: https://developers.google.com/maps/documentation/javascript/places-autocomplete#add_autocomplete
        var options = {
          bounds: defaultBounds,
          strictBounds: true,
          types: ['geocode'],
          componentRestrictions: { country: 'us' }
        };
        ma.autocomplete = new google.maps.places.Autocomplete(locationInput, options);
      }
    });

    // Listen for new data from another component interaction (i.e. results heading), update form.
    $el.on('ma:FormFilter:DataUpdated', function (e, data) {
      renderForm({ clearedFilter: data.clearedFilter, $form: $el });
    });

    // Don't submit the form when a user selects the autocomplete dropdown item with enter
    $el.keydown(function (e) {
      if (e.keyCode === 13) {
        if ($(e.target).is($('.js-filter-by-location', $el).find('input'))) {
          e.preventDefault();
        }
      }
    });

    // Handle global form submission.
    $el.submit(function (e) {
      e.preventDefault();
      // Update master data with the various filter values.
      var formData = getFormData({ $form: $(this) });

      // Trigger location listing filter event with current filter values.
      $el.trigger('ma:LocationFilter:FormSubmitted', [{ formData: formData }]);
    });
  });

  function renderForm(args) {
    var clearedFilter = args.clearedFilter;
    // The clear all button was pressed.
    if (clearedFilter === "all") {
      clearForm(args);
    }
    // Single filter button was pressed.
    else {
        clearDeactivatedFilter(args);
      }
  }

  function getFormData(args) {
    var $form = $(args.$form),
        $location = $form.find('.js-filter-by-location'),
        $tags = $form.find('.js-filter-by-tags'),
        formData = [];

    // Get location
    if ($location.find('input').length) {
      var place = $location.find('input').val();
      if (place) {
        formData.push({
          type: 'location',
          text: place,
          value: place
        });
      }
    }

    $tags.find('input:checked').each(function () {
      formData.push({ 'type': 'tag', 'value': $(this).val(), 'text': $(this).next("label").text() });
    });

    return formData;
  }

  function clearDeactivatedFilter(args) {
    var $form = $(args.$form),
        $place = $form.find('.js-filter-by-location'),
        $tags = $form.find('.js-filter-by-tags'),
        clearedFilter = args.clearedFilter;

    // If the cleared filter button was for a location filter.
    if (clearedFilter.type === 'location') {
      $place.find('input').val("");
      return;
    }

    // If the cleared filter button was for a tag filter.
    if (clearedFilter.type === 'tag') {
      $tags.find('input[type=checkbox][value=' + clearedFilter.value + ']').prop('checked', false);
    }
  }

  function clearForm(args) {
    var $form = $(args.$form),
        $tags = $('.js-filter-by-tags', $form),
        $place = $('.js-filter-by-location', $form).find('input');

    // Clear location text input.
    if ($place.length) {
      $place.val("");
    }
    // Uncheck all checked tags inputs.
    $tags.find('input:checked').prop('checked', false);
  }
})(window, document, jQuery);

;
module.exports = exports['default'];

},{}],20:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _helpersStickyJs = require("../helpers/sticky.js");

var _helpersStickyJs2 = _interopRequireDefault(_helpersStickyJs);

var _helpersGetHandlebarTemplateJs = require("../helpers/getHandlebarTemplate.js");

var _helpersGetHandlebarTemplateJs2 = _interopRequireDefault(_helpersGetHandlebarTemplateJs);

exports["default"] = (function (window, document, $, undefined) {
  // Active state classes for location listing rows.
  var activeClass = 'is-active',
      markerActiveClass = 'is-marker-bounce',

  // Selectors for event listeners on dynamic content.
  locationListingRow = '.js-location-listing-link',
      activeLocationListingRow = locationListingRow + '.' + activeClass,
      markerActiveLocationListingRow = locationListingRow + '.' + markerActiveClass,

  // Parent component selectors.
  listingCol = '.js-location-listing-results',
      listingParent = '.js-image-promos',
      mapCol = '.js-location-listing-map';

  $('.js-location-listing').each(function (i) {
    var $el = $(this),
        $mapCol = $el.find('.js-location-listing-map'),
        $map = $el.find('.js-google-map'),
        $resultsHeading = $el.find('.js-results-heading'),
        $pagination = $el.find('.js-pagination'),
        $locationFilter = $el.find('.js-location-filters');

    _helpersStickyJs2["default"].init($mapCol);

    // Get the location listing component data (this could be replaced with an api)
    var rawData = ma.locationListing[i]; // Data object created in @organisms/by-author/location-listing.twig

    var masterData = []; // master data structure to preserve state
    // Listen for map initialization, populate master data structure using locationListing, map markers.
    $map.on('ma:GoogleMap:MapInitialized', function (e, markers) {
      masterData = populateMasterDataSource(rawData, markers); // to preserve state
    });

    // Listen for Google Map api library load completion, with geocode, geometry, and places libraries
    $(document).on('ma:LibrariesLoaded:GoogleMaps', function () {
      // Set up click handler for location listing rows.
      $el.on('click', locationListingRow, function (e) {
        var index = $(e.currentTarget).index();
        // trigger map to recenter on this item based on it's index.
        $map.trigger('ma:GoogleMap:MapRecenter', index);
        // mark this link as active
        $el.find(activeLocationListingRow).removeClass(activeClass);
        $(e.currentTarget).addClass(activeClass); // in case the event is triggered on a child element.
        // focus on the map - mainly for mobile when it is stacked
        var position = $map.offset().top;
        $("html,body").stop(true, true).animate({ scrollTop: position }, '750');
      });

      // Set up hover / focus event for listing rows.
      $el.on('mouseenter focusin', locationListingRow, function (e) {
        // remove active state from previously selected list item
        $el.find(activeLocationListingRow).removeClass(activeClass);

        // Don't bounce the marker again if focus moves within the same listing.
        if ($(e.currentTarget).hasClass(markerActiveClass)) {
          return false;
        }

        // Remove "focus" class from any "focused" location listing row.
        // ("focus" vs focus because hover doesn't bring focus to element.)
        $el.find(markerActiveLocationListingRow).removeClass(markerActiveClass);

        // Focus moved into listing for first time, so flag with class, recenter + bounce marker.
        $(e.currentTarget).addClass(markerActiveClass);
        var index = $(e.currentTarget).index();

        // Trigger map to recenter on this item and make the marker bounce
        $map.trigger('ma:GoogleMap:MarkerBounce', index);
      });

      // Remove "focus" class from any "focused" location listing row.
      $el.on('mouseleave', locationListingRow, function (e) {
        $el.find(markerActiveLocationListingRow).removeClass(markerActiveClass);
      });

      // Handle location listings form interaction (triggered by locationFilters.js).
      $locationFilter.on('ma:LocationFilter:FormSubmitted', function (e, formValues) {
        var transformation = transformData(masterData, formValues);
        masterData = transformation.data; // preserve state
        // Trigger child components render with updated data
        updateChildComponents(transformation);
      });

      // Handle active filter/tag button interactions (triggered by resultsHeading.js).
      $resultsHeading.on('ma:ResultsHeading:ActiveTagClicked', function (e, clearedFilter) {
        var transformation = transformData(masterData, clearedFilter);
        masterData = transformation.data; // preserve state
        transformation.clearedFilter = clearedFilter;

        // Trigger child components render with updated data
        updateChildComponents(transformation);
      });

      // Handle pagination event (triggered by pagination.js), render targetPage.
      $pagination.on('ma:Pagination:Pagination', function (e, target) {
        var nextPage = target;

        // Get the current page, default to first page if not in global data object.
        var currentPage = masterData.pagination.currentPage ? masterData.pagination.currentPage : 1;
        if (target === "next") {
          nextPage = currentPage + 1;
        }
        if (target === "previous") {
          nextPage = currentPage - 1;
        }

        masterData.pagination = transformPaginationData({ data: masterData, targetPage: nextPage });
        masterData.resultsHeading = transformResultsHeading({ data: masterData, page: nextPage });
        renderListingPage({ data: masterData, page: nextPage });

        var markers = getActiveMarkers({ data: masterData, page: nextPage });
        // Trigger child components render with updated data
        updateChildComponents({ data: masterData, markers: markers });
      });
    });

    // Trigger events to update child components with new data.
    function updateChildComponents(args) {
      $resultsHeading.trigger('ma:ResultsHeading:DataUpdated', [args.data.resultsHeading]);
      $map.trigger('ma:GoogleMap:MarkersUpdated', [{ markers: args.markers, place: args.place }]);
      $pagination.trigger('ma:Pagination:DataUpdated', [args.data.pagination]);
      if (args.clearedFilter) {
        $locationFilter.trigger('ma:FormFilter:DataUpdated', [args.clearedFilter]);
      }
    }
  });

  /**
   * Data initialization.
   */

  /**
   * Returns a master data structure with page level / listing item level data and markup, to reflect component state.
   *
   * @param listing
   *   The locationListing data structure to use as a source
   * @param markers
   *   The array of map markers created by component google map (googleMaps.js module)
   * @returns {Array}
   *   An array with the following structure:
   *    [
   *      maxItems: the max number of items to show per listing "page" if provided, defaults to all
   *      totalPages: the number of pages of items that should render, given the current filters
   *      resultsHeading: the data structure necessary to render a resultsHeading component
   *      items: an array of listing items [
   *        isActive: whether or not the listing should be shown, given current filters state
   *        page: the page that the listing, if active, will appear on, given the current sort order
   *        promo: the data structure for the imagePromo component
   *        markup: the compiled imagePromo markup
   *        marker: the related map marker data structure for the listing item
   *      ]
   *      pagination: the data structure necessary to render a pagination component
   *    ]
   */
  function populateMasterDataSource(listing, markers) {
    // Populate master data structure
    var masterData = [];

    // Ensure locationListing.imagePromos.items is an array (the twig template json_encode()'s a php array)
    var promosArray = [];
    $.map(listing.imagePromos.items, function (val, index) {
      promosArray[index] = val;
    });
    listing.imagePromos.items = promosArray;

    // Ensure locationListing.pagination.pages is an array (the twig template json_encode()'s a php array)
    var pages = [];
    $.map(listing.pagination.pages, function (val, index) {
      pages[index] = val;
    });
    listing.pagination.pages = pages;

    // Get the current page from the initial data structure, default to 1 if none passed.
    var currentPage = 1;
    pages.forEach(function (page) {
      if (page.active) {
        currentPage = Number(page.text);
      }
    });

    // Get the listing imagePromos, generate markup for each
    var masterListing = listing.imagePromos.items,
        masterListingMarkup = transformLocationListingPromos(masterListing);

    // The max number of items per page, if designated in locationListing data structure, else all
    masterData.maxItems = listing.maxItems ? listing.maxItems : listing.imagePromos.items.length;
    // The initial results heading data structure
    masterData.resultsHeading = listing.resultsHeading;
    // The array of items and their respective page, in/active status, marker data, imagePromo data, and markup
    masterData.items = getMasterListingWithMarkupAndMarkers(masterListing, masterListingMarkup, markers, masterData.maxItems);
    // The initial pagination data structure + currentPage;
    masterData.pagination = listing.pagination;
    masterData.pagination.currentPage = currentPage;
    // The total number of pages, given the number of items and the maxItems variable
    masterData.totalPages = Math.ceil(masterData.items.length / masterData.maxItems);

    return masterData;
  }

  /**
   * Creates the master data structure items array
   *
   * @param listing
   *   The locationListing data structure
   * @param markup
   *   The generated array of item markup
   * @param markers
   *   The associated map markers for each item
   * @param max
   *   The maximum number of items per page
   * @returns {Array}
   *  An array of listing items with the following structure:
   *  [
   *      isActive: whether or not the listing should be shown, given current filters state
   *      page: the page that the listing, if active, will appear on, given the current sort order
   *      promo: the data structure for the imagePromo component
   *      markup: the compiled imagePromo markup
   *      marker: the related map marker data structure for the listing item
   *   ]
   */
  function getMasterListingWithMarkupAndMarkers(listing, markup, markers, max) {
    var items = [];
    markers.forEach(function (item, index) {
      items[index] = {
        isActive: true, // @todo consider checking for this in case of server side preprocessing of state
        page: Math.ceil((index + 1) / max),
        marker: item,
        markup: markup[index],
        promo: listing[index]
      };
    });
    return items;
  }

  /**
   * Creates an array with generated markup for location listing items, preserving original index.
   *
   * @param promos
   *  The locationListing.imagePromos array of items
   *
   * @returns {Array}
   *  An array of compiled markup
   */
  function transformLocationListingPromos(promos) {
    // Get template for location listing (organisms > imagePromo)
    var compiledTemplate = (0, _helpersGetHandlebarTemplateJs2["default"])('locationListingRow');
    var listingMarkup = [];
    promos.forEach(function (data, index) {
      var promoData = promoTransform(data);
      listingMarkup[index] = compiledTemplate(promoData);
    });
    return listingMarkup;
  }

  /**
   * Data transformation.
   */

  /**
   * The main data transformation wrapper, returns an instance of masterData which reflects the component state.
   *
   * @param data
   *  An instance of masterData to start from.
   * @param transformation
   *  An object representing the change in state (locationFilter form data, resultsHeading tag interaction, etc.)
   *
   * @returns {{data: *, markers: *}}
   *  An object with the current state masterData instance and an array of their related sorted markers to send to map.
   */
  function transformData(data, transformation) {
    // First filter the data based on component state, then sort alphabetically by default.
    var filteredData = filterListingData(data, transformation),
        sortedData = sortDataAlphabetically(filteredData),
        place = '';

    // Sort data by location, if that filter is present.
    if (hasFilter(filteredData.resultsHeading.tags, 'location')) {
      place = getFilterValues(filteredData.resultsHeading.tags, 'location')[0]; // returns array
      // If place argument was selected from the locationFilter autocomplete (initiated on the zipcode text input).
      if (ma.autocomplete.getPlace()) {
        place = ma.autocomplete.getPlace();
        // Sort the markers and instance of locationListing masterData.
        sortedData = sortDataAroundPlace(place, filteredData);
      }
      // If place argument was populated from locationFilter (zipcode text input) but not from Place autocomplete.
      else {
          // Geocode the address, then sort the markers and instance of locationListing masterData.
          ma.geocoder = ma.geocoder ? ma.geocoder : new google.maps.Geocoder();
          // @todo limit geocode results to MA?
          sortedData = geocodeAddressString(place, sortDataAroundPlace, filteredData);
        }
    }

    // Update the results heading based on the current items state.
    sortedData.resultsHeading = transformResultsHeading({ data: sortedData });
    // Update pagination data structure, reset to first page
    sortedData.pagination = transformPaginationData({ data: sortedData }); // @todo this should probably go last so we know page #s
    // Render the listing page.
    renderListingPage({ data: sortedData });

    // Get the associated markers based on the listing items.
    var markers = getActiveMarkers({ data: sortedData });

    // Preserve state of current data.
    return {
      data: sortedData,
      markers: markers,
      place: place
    };
  }

  /**
   * Filters the listing data based on component filter state.
   *
   * @param data
   *  An instance of masterData to start from.
   * @param filterData
   *  Data structure representing either the newly applied or cleared filters.
   * @returns {*}
   */
  function filterListingData(data, filterData) {
    // Get the currently active filters.
    var filters = transformActiveTagsData({ data: data, filterData: filterData });
    // Update the results heading tags with the new active filters.
    data.resultsHeading.tags = filters;

    // If tag (checkbox) filter is present, filter based on current tag values.
    if (hasFilter(filters, 'tag')) {
      // Get just the tag values from the filters array.
      var tags = getFilterValues(filters, 'tag');
      // Identify active data based on filter.
      return filterDataByTags(tags, data);
    }

    // Either there are no filters or the only active filter is location, make all items active
    return makeAllActive(data);
  }

  /**
   * Returns the markers which correspond to a given "page" of location listing data.
   *
   * @param args
   *  An object with the following structure:
   *    {
   *      data: instance of filtered, sorted masterData off of which to base markers
   *      page: the target page of items/markers to render
   *    }
   *
   * @returns
   *   An array of corresponding map marker objects which should be rendered
   */
  function getActiveMarkers(args) {
    var data = args.data,
        page = args.page ? args.page : 1; // default to first page if non provided

    // Get just the markers from our active sorted/filtered data listing.
    return data.items.filter(function (item) {
      return item.isActive && item.page === page;
    }).map(function (item) {
      return item.marker;
    });
  }

  /**
   * Creates the active filter object based on either cleared or submitted filter data.
   *
   * @param args
   *   An object with the following structure:
   *   data {
   *    [masterData current instance]
   *   },
   *   filterData: {
   *     clearedFilter: (optional cleared filter data)
   *     {
   *       type: '[filter type]: location || tag',
   *       text: '[filter text or label]',
   *       value: '[filter value]'
   *     }, || 'all' (if clear all button was pressed)
   *     {
   *       formData: (optional submitted form filter data)
   *       [
   *         {
   *           type: '[filter type] location || tag',
   *           text: '[filter label]',
   *           value: '[filter value]'
   *         }, ...
   *       ]
   *     }
   *   }
   *
   * @returns {*}
   */
  function transformActiveTagsData(args) {
    if (args.filterData.hasOwnProperty('clearedFilter')) {
      return getActiveFilters(args.data, args.filterData); // This was an active tag interaction, get remaining filters.
    } else {
        return args.filterData.formData; // This was a form submission, so just return the applied form data.
      }
  }

  /**
   * Returns the data structure necessary to render pagination component, reflecting current state.
   *
   * @param args
   *   An object with the following structure:
   *   {
   *     data: [instance of filtered, sorted master data],
   *     targetPage: (optional) the page which should be active
   *   }
   *
   * @returns {*}
   *   Data structure necessary to render pagination component
   */
  function transformPaginationData(args) {
    var data = args.data;
    var targetPage = args.targetPage ? args.targetPage : 1; // default to first page if none passed
    var totalPages = data.totalPages;
    var pages = [];

    for (var i = 1; i <= totalPages; i++) {
      pages.push({
        text: i.toString(),
        active: i === targetPage
      });
    }

    data.pagination.prev = {
      text: "Previous",
      disabled: targetPage === 1
    };

    data.pagination.next = {
      text: "Next",
      disabled: targetPage === totalPages
    };

    data.pagination.pages = pages;
    data.pagination.currentPage = targetPage;

    return data.pagination;
  }

  /**
   * Updates the resultsHeading data structure to reflect the current component state.
   *
   * @param args
   *    Arguments object with the following structure:
   *    args: {
   *      data: the current instance of master data,
   *      page: (optional) the current page, defaults to 1
   *    }
   *
   * @returns {resultsHeading|{numResults, totalResults}|*}
   */
  function transformResultsHeading(args) {
    var pageTotal = 0,
        totalActive = 0,
        page = args.page ? args.page : 1,
        data = args.data,
        resultsHeading = data.resultsHeading; // preserve active resultsHeading.tags

    // Tally the total active and page length.
    data.items.map(function (item) {
      if (item.isActive) {
        totalActive += 1;
        if (item.page === page) {
          pageTotal += 1;
        }
      }
    });

    // Get the index (from 1) of the first and last items on this page.
    var firstItem = Number(data.maxItems) * Number(page) - (Number(data.maxItems) - 1),
        lastItem = firstItem + (Number(pageTotal) - 1);

    resultsHeading.totalResults = totalActive;
    resultsHeading.numResults = firstItem + " - " + lastItem; // @todo add accessibility consideration here

    return resultsHeading;
  }

  /**
   * Returns an array of the currently active filters, based on passed filterData.
   *
   * @param data
   *   The current instance of master data structure.
   *
   * @param filterData
   *  An object representing the cleared filter:
   *  {
   *    clearedFilter: {
   *       type: '[filter type]: location || tag',
   *       text: '[filter text or label]',
   *       value: '[filter value]'
   *     } || 'all' (if clear all button was pressed)
   *  }
   *
   * @returns {Array}
   *   An array of the currently active filters:
   *   [  {
   *        type:
   *        text:
   *        value:
   *      }, ... ]
   */
  function getActiveFilters(data, filterData) {
    // Single filter button clicked, so remove that filter from the list.
    if (filterData.clearedFilter !== "all") {
      var filters = data.resultsHeading.tags;
      // Remove the clicked tag from the tags array.
      return filters.filter(function (tag) {
        return tag.value !== filterData.clearedFilter.value;
      });
    } else {
      // Clear all button was clicked so remove all filters.
      return [];
    }
  }

  /**
   * Returns true if the passed filters array includes an item with the passed type.
   *
   * @param filters
   *   Array of filters.
   * @param type
   *   The type of filter to search for.
   *
   * @returns {*|boolean}
   */
  function hasFilter(filters, type) {
    return filters.some(function (filter) {
      return filter.hasOwnProperty('type') && filter['type'] === type;
    });
  }

  /**
   * Returns the value(s) of the passed filters of the passed type.
   *
   * @param filters
   *   Array of filters from which to abstract values.
   * @param type
   *   The type of filter to search for.
   *
   * @return array
   *   An array of filter values of type.
   */
  function getFilterValues(filters, type) {
    return filters.filter(function (data) {
      return data.type === type;
    }).map(function (data) {
      return data.value;
    });
  }

  /**
   * Returns transformed imagePromo data object.
   *
   * @param promo
   *   The imagePromo.item[]{} being transformed.
   *
   * @returns {*}
   *   The original imagePromo object with a formatted tag property.
   */
  function promoTransform(promo) {
    // Ensure tags are an array.
    var tags = [];
    $.map(promo.tags, function (val, index) {
      tags[index] = val;
    });
    promo.tags = tags;

    var tagsData = {
      tagsFormatted: promo.tags.map(transformTag)
    };
    return Object.assign({}, promo, tagsData);
  }

  /**
   * Returns a formatted imagePromo.tag object with a label and svg icon markup.
   *
   * @param tag
   *   The tag being transformed.
   *
   * @returns {{label, svg: boolean}}
   */
  function transformTag(tag) {
    return {
      label: tag.label,
      svg: getSvgFromTag(tag.id)
    };
  }

  /**
   * Returns the svg element markup from the corresponding tag filter checkbox label icon
   *
   * @param tag
   *  The imagePromo tag.id whose icon we need
   *
   * @return string
   *  The svg element for the matching filter form tag input.
   */
  function getSvgFromTag(tag) {
    // Get the existing corresponding icon markup so we don't have to worry about outdated markup.
    return $('.js-filter-by-tags').find("#" + tag).parent().siblings('svg').prop('outerHTML');
  }

  /**
   * Returns an instance of master data which is sorted alphabetically by imagePromo.title.text
   *
   * @param data
   *    The instance of master data being sorted.
   *
   * @returns {*}
   *    Sorted instance of master data.
   */
  function sortDataAlphabetically(data) {
    var items = data.items.sort(function (a, b) {
      var nameA = a.promo.title.text.toUpperCase(),
          nameB = b.promo.title.text.toUpperCase();
      return nameA < nameB ? -1 : nameA > nameB ? 1 : 0;
    });

    var paginated = paginateItems(items, data.maxItems);
    data.items = paginated.items;
    data.totalPages = paginated.totalPages;
    return data;
  }

  /**
   * Returns instance of location listing masterData, sorted proximity to place.
   *
   * @param place
   *   The geocode information by which to sort.
   * @param data
   *   The instance of location listing masterData.
   * @returns {*}
   *   Sorted instance of location listing masterData.
   */
  function sortDataAroundPlace(place, data) {
    // Get all existing marker distance from place, assign as marker property.
    for (var key in data.items) {
      if (data.items.hasOwnProperty(key)) {
        data.items[key].marker.distance = google.maps.geometry.spherical.computeDistanceBetween(place.geometry.location, data.items[key].marker.getPosition());
      }
    }

    // Sort existing markers by closest to the place.
    data.items.sort(function (a, b) {
      return a.marker.distance - b.marker.distance;
    });

    // Update each location listing item's page number based on new marker sort order.
    var paginated = paginateItems(data.items, data.maxItems);
    data.items = paginated.items;
    data.totalPages = paginated.totalPages;

    // Return the newly sorted instance of location listing masterData.
    return data;
  }

  /**
   * Geocodes an address string arg and executes callback upon successful return.
   *
   * @param address
   *   Address string to be geocoded.
   * @param callback
   *   Callback function to execute (with callbackArg).
   * @param callbackArg
   *   Argument to pass to callback.
   *
   * @returns {*}
   *   Upon success, the return value of the passed callback function.
   */
  function geocodeAddressString(address, callback, callbackArg) {
    // Only attempt to execute if google's geocode library is loaded.
    if (typeof ma.geocoder === "undefined") {
      return;
    }
    // Geocode address string, then execute callback with argument upon success.
    return geocoder.geocode({ address: address }, function (results, status) {
      if (status === google.maps.GeocoderStatus.OK) {
        return callback(results[0], callbackArg);
      } else {
        console.warn('Geocode was not successful for the following reason: ' + status);
      }
    });
  }

  /**
   * Resets all items in a master data instance to active (i.e. not filtered out).
   *
   * @param data
   *    The instance of master data whose items are being made active.
   *
   * @returns {*}
   *    The master data instance with all active items.
   */
  function makeAllActive(data) {
    data.items = data.items.map(function (item) {
      item.isActive = true;
      return item;
    });
    return data;
  }

  /**
   * Returns masterData with necessary filtered items flagged inactive.
   *
   * @param tags
   *  The array of filters by which to filter.
   *
   * @param data
   *   The current instance of master data being filtered.
   *
   * @returns {*}
   *   The 'filtered' (flagged) instance of master data.
   */
  function filterDataByTags(tags, data) {
    data.items = data.items.map(function (item) {
      item.isActive = doesPromoContainTags(item.promo.tags, tags);
      return item;
    });

    return data;
  }

  /**
   * Determines if an masterData item contains the necessary tag(s).
   *
   * @param haystack
   *  The imagePromo object in question.
   *
   * @param needle
   *   The tag(s) being searched for.
   *
   * @returns {boolean|*}
   */
  function doesPromoContainTags(haystack, needle) {
    return needle.every(function (v) {
      return Boolean(haystack.filter(function (item) {
        return Object.values(item).indexOf(v) !== -1;
      }).length);
    });
  }

  /**
   * Assigns page values to masterData items, based on the provided max number.
   *
   * @param items
   *   The master data items.
   *
   * @param max
   *   The max number of items to show per page.
   *
   * @returns
   *   The updated master data items.
   */
  function paginateItems(items, max) {
    var page = 1,
        pageTotal = 0;
    var paginatedItems = items.map(function (item) {
      if (item.isActive) {
        if (pageTotal < max) {
          item.page = page;
        } else {
          page += 1;
          pageTotal = 0;
          item.page = page;
        }
        pageTotal += 1;
      }
      return item;
    });

    return {
      items: paginatedItems,
      totalPages: page
    };
  }

  // Remove the imagePromos children content on the current location listing page.
  function clearListingPage() {
    $(listingCol).find(listingParent).html('');
  }

  /**
   * Renders the new page of location listing image promos and broadcasts the rendered master data instance.
   *
   * @param args
   *   Arguments object with the following structure:
   *   {
   *      page: (optional) the page to be rendered, defaults to 1
   *      data: the instance of master data to render
   *   }
   */
  function renderListingPage(args) {
    clearListingPage();
    var $el = $(listingCol).find(listingParent),
        page = args.page ? args.page : 1;

    args.data.items.forEach(function (item) {
      if (item.isActive && item.page === page) {
        $el.append(item.markup);
      }
    });

    // Focus on the first focusable element in the first listing
    var $firstListing = $el.find(locationListingRow).first();
    // :focusable is possible with helpers/jQueryExtend.js
    $firstListing.find(':focusable').eq(0).focus();

    _helpersStickyJs2["default"].init($(mapCol));
  }
})(window, document, jQuery);

;
module.exports = exports["default"];

},{"../helpers/getHandlebarTemplate.js":3,"../helpers/sticky.js":5}],21:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = (function (window, document, $, undefined) {

  var windowWidth = window.innerWidth;

  $(window).resize(function () {
    windowWidth = window.innerWidth;
  });

  $('.js-main-nav').each(function () {
    var openClass = "is-open",
        closeClass = "is-closed",
        submenuClass = "show-submenu",
        $parent = $(this),
        $mainNavToggle = $parent.find('.js-main-nav-toggle'),
        $mainNavItems = $parent.find('.js-main-nav-toggle, .js-main-nav-top-link'),
        previousKey = null,
        breakpoint = 800; // matches CSS breakpoint for Main Nav

    $mainNavItems.on('keydown', function (e) {
      if (windowWidth <= breakpoint) {
        // only for desktop
        return;
      }

      // Grab all the DOM info we need...
      var $link = $(this),
          $topLevelLinks = $parent.find('.ma__main-nav__top-link'),
          open = $link.hasClass(openClass),
          $openContent = $parent.find('.js-main-nav-content.' + openClass),
          $focusedElement = $(document.activeElement),

      // relevant if open..
      $topLevelItem = $focusedElement.parents('.ma__main-nav__item'),
          $topLevelLink = $topLevelItem.find('.ma__main-nav__top-link'),
          $dropdownLinks = $link.find('.ma__main-nav__subitem .ma__main-nav__link'),
          focusIndexInDropdown = $dropdownLinks.index($focusedElement),
          isShift = !!e.shiftKey; // typecast to boolean

      // down arrow or tab key
      if (e.keyCode === 40 || e.keyCode === 9 && !isShift) {
        // hide content
        // If menubar focus
        //  - Open pull down menu and select first menu item
        //
        // If dropdown focus
        //  - Select next menu item
        e.preventDefault();
        if (open) {
          if (focusIndexInDropdown === $dropdownLinks.length - 1) {
            return;
          } else {
            if (focusIndexInDropdown === -1) {
              $dropdownLinks[1].focus();
            } else {
              $dropdownLinks[focusIndexInDropdown + 1].focus();
            }
            return;
          }
        } else {
          show($topLevelItem.find('.js-main-nav-content'));
          $topLevelLink.attr('aria-expanded', 'true');
          $link.addClass(openClass);
          if ($dropdownLinks[1]) {
            $dropdownLinks[1].focus();
          }
          return;
        }
      }

      // up arrow or shift+tab keys
      if (e.keyCode === 38 || e.keyCode === 9 && isShift) {
        // hide content
        // If menubar focus
        //  - Open pull down menu and select first menu item
        //
        // If dropdown focus
        //  - Select previous menu item
        e.preventDefault();
        if (open) {
          if (focusIndexInDropdown <= 1) {
            // not 0 bc of hidden first link
            hide($openContent);
            $topLevelLink.focus().attr('aria-expanded', 'false');
            return;
          } else {
            $dropdownLinks[focusIndexInDropdown - 1].focus();
            return;
          }
        } else {
          show($topLevelItem.find('.js-main-nav-content'));
          $topLevelLink.focus().attr('aria-expanded', 'true');
          $link.addClass(openClass);
          return;
        }
      }

      // esc key
      if (e.keyCode === 27) {
        // Close menu and return focus to menubar
        e.preventDefault();
        hide($openContent);
        $link.removeClass(openClass);
        $topLevelLink.focus().attr('aria-expanded', 'false');
        return;
      }

      // left arrow key
      if (e.keyCode === 37) {
        e.preventDefault();
        // hide content
        // If menubar focus
        //  - Previous menubar item
        //
        // If dropdown focus
        //  - Open previous pull down menu and select first item
        hide($openContent);
        $topLevelLink.attr('aria-expanded', 'false');
        var index = $topLevelLinks.index($topLevelLink) - 1;
        if ($topLevelLinks[index]) {
          $topLevelLinks[index].focus();
        }
        return;
      }
      // right arrow key
      if (e.keyCode === 39) {
        e.preventDefault();
        // hide content
        // If menubar focus
        //  - Next menubar item
        //
        // If dropdown focus
        //  - Open next pull menu and select first item
        hide($openContent);
        $topLevelLink.attr('aria-expanded', 'false');
        var index = $topLevelLinks.index($topLevelLink) + 1;
        if ($topLevelLinks[index]) {
          $topLevelLinks[index].focus();
        }
        return;
      }

      // key code 9 is the tab key
      if (open || typeof e.keycode !== "undefined" && e.keycode !== 9) {
        return;
      }
    });
    $mainNavItems.on('mouseenter', function (e) {
      $(this).children('button').attr("aria-expanded", "true");

      if (windowWidth > breakpoint) {
        var $openContent = $(this).find('.js-main-nav-content');
        show($openContent);
      }
    });
    $mainNavItems.on('mouseleave', function (e) {
      $(this).children('button').attr("aria-expanded", "false");

      if (windowWidth > breakpoint) {
        var $openContent = $(this).find('.js-main-nav-content');
        hide($openContent);
      }
    });
    $mainNavToggle.children('button, a').on('click', function (e) {
      var $el = $(this);
      var $elParent = $(this).parent();
      var $content = $elParent.find('.js-main-nav-content');
      var $openContent = $parent.find('.js-main-nav-content.' + openClass);
      var isOpen = $content.hasClass(openClass);

      // mobile
      if (windowWidth <= breakpoint) {
        e.preventDefault();
        // add open class to this item
        $elParent.addClass(openClass);
        show($content);
        $el.attr('aria-expanded', 'true');
      } else {
        hide($openContent);
        $el.attr('aria-expanded', 'false');

        if (!isOpen) {
          show($content);
          $el.attr('aria-expanded', 'true');
        }
      }
    });
    $mainNavToggle.last().find('.js-main-nav-content li').last().find('a').on('keydown', function (e) {
      e.stopPropagation();
      // previous key was not a shift
      if (e.keyCode === 9 && previousKey !== 16) {
        // tab arrow\
        var $openContent = $parent.find('.js-main-nav-content.' + openClass);
        hide($openContent);
      }
      previousKey = e.keyCode;
    });

    $('.js-close-sub-nav').on('click', function () {
      var $openContent = $parent.find('.js-main-nav-content.' + openClass);
      hide($openContent);
    });

    // Hide any open submenu content when the sidebar menu is closed
    $('.js-header-menu-button').click(function () {
      var $openContent = $parent.find('.js-main-nav-content.' + openClass);
      hide($openContent);
    });

    function hide($content) {
      $('body').removeClass(submenuClass);
      $parent.find("." + openClass).removeClass(openClass);

      if (windowWidth <= breakpoint) {
        $content.addClass(closeClass);
      } else {
        $content.stop(true, true).slideUp('fast', function () {
          $content.addClass(closeClass).slideDown(0);
        });
      }
    }

    function show($content) {
      $('body').addClass(submenuClass);
      if (windowWidth <= breakpoint) {
        $content.addClass(openClass).removeClass(closeClass);
      } else {
        $content.stop(true, true).delay(200).slideUp(0, function () {
          $content.addClass(openClass).removeClass(closeClass).slideDown('fast');
        });
      }
    }
  });
})(window, document, jQuery);

;
module.exports = exports["default"];

},{}],22:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

exports['default'] = (function (window, document, $, undefined) {

  $('.js-main-nav').each(function () {
    var $parent = $(this),
        $mainNavToggle = $parent.find('.js-main-nav-toggle');

    // make root top-level links inert for pilot
    $mainNavToggle.children('a').on('click', function (e) {
      e.preventDefault();
    });

    // Ensure top-level links that are potential anchor links close the sidebar on mobile
    $parent.find('.js-main-nav-top-link').find('a').on('click', function () {
      $('.js-header-menu-button').trigger('click');
    });
  });
})(window, document, jQuery);

;
module.exports = exports['default'];

},{}],23:[function(require,module,exports){
// ****** Menu button ******
"use strict";

var menuButton = document.querySelector(".js-header-menu-button");

if (null !== menuButton) {
  menuButton.addEventListener("click", function (event) {
    event.preventDefault();
    document.querySelector("body").classList.toggle("show-menu");
  });
}

// ****** Main Header Search button on mobile should open the mobile menu  ******
var searchForm = document.querySelector(".js-header-search-menu .js-header-search-form");

if (null !== searchForm) {
  searchForm.addEventListener("submit", function (event) {
    if (window.innerWidth > 620) {
      return;
    }
    event.preventDefault();
    document.querySelector("body").classList.toggle("show-menu");
  });
}

},{}],24:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _helpersGetHandlebarTemplateJs = require("../helpers/getHandlebarTemplate.js");

var _helpersGetHandlebarTemplateJs2 = _interopRequireDefault(_helpersGetHandlebarTemplateJs);

exports['default'] = (function (window, document, $, undefined) {

  $('.js-org-selector').each(function (i) {
    var $el = $(this);
    var data = orgSelector[i];
    var compiledTemplate = (0, _helpersGetHandlebarTemplateJs2['default'])('orgInfo');
    var $select = $el.find('select').first();
    var $placeholder = $el.find('.js-org-info');

    //render the template based on the current value
    renderTemplate($select.val());

    // When the select changes
    $select.change(function () {
      //render the template based on the new value
      renderTemplate($select.val());
    });

    // Render the template based on value
    function renderTemplate(value) {
      if (typeof data.organizations[value] === "undefined") {
        $placeholder.html("");
        return false;
      }

      $placeholder.html(compiledTemplate(data.organizations[value]));

      return true;
    }
  });
})(window, document, jQuery);

;
module.exports = exports['default'];

},{"../helpers/getHandlebarTemplate.js":3}],25:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _helpersGetHandlebarTemplateJs = require("../helpers/getHandlebarTemplate.js");

var _helpersGetHandlebarTemplateJs2 = _interopRequireDefault(_helpersGetHandlebarTemplateJs);

exports['default'] = (function (window, document, $, undefined) {

  if ($('.js-pagination').length === 0) {
    return;
  }

  // {{compare unicorns ponies operator="<"}}
  // 	I knew it, unicorns are just low-quality ponies!
  // {{/compare}}
  //
  // (defaults to == if operator omitted)
  //
  // {{equal unicorns ponies }}
  // 	That's amazing, unicorns are actually undercover ponies
  // {{/equal}}
  // (from http://doginthehat.com.au/2012/02/comparison-block-helper-for-handlebars-templates/)
  Handlebars.registerHelper('compare', function (lvalue, rvalue, options) {

    if (arguments.length < 3) throw new Error("Handlerbars Helper 'compare' needs 2 parameters");

    var operator = options.hash.operator || "==";

    var operators = {
      '==': function _(l, r) {
        return l == r;
      },
      '===': function _(l, r) {
        return l === r;
      },
      '!=': function _(l, r) {
        return l != r;
      },
      '<': function _(l, r) {
        return l < r;
      },
      '>': function _(l, r) {
        return l > r;
      },
      '<=': function _(l, r) {
        return l <= r;
      },
      '>=': function _(l, r) {
        return l >= r;
      },
      'typeof': function _typeof(l, r) {
        return typeof l == r;
      }
    };

    if (!operators[operator]) throw new Error("Handlerbars Helper 'compare' doesn't know the operator " + operator);

    var result = operators[operator](lvalue, rvalue);

    if (result) {
      return options.fn(this);
    } else {
      return options.inverse(this);
    }
  });

  // Set up global component config
  var compiledTemplate = (0, _helpersGetHandlebarTemplateJs2['default'])('pagination'),
      prevButton = '.js-pagination-prev',
      nextButton = '.js-pagination-next',
      pageButton = '.js-pagination-page';

  $('.js-pagination').each(function () {
    var $el = $(this);

    // Listen for previous page button click and trigger pagination event.
    $el.on('click', prevButton, function () {
      $el.trigger('ma:Pagination:Pagination', ['previous']);
    });
    // Listen for next button click and trigger pagination event.
    $el.on('click', nextButton, function () {
      $el.trigger('ma:Pagination:Pagination', ['next']);
    });
    // Listen for page number button click and trigger pagination event;
    $el.on('click', pageButton, function (e) {
      var targetPageNumber = $(e.target).data('page');
      $el.trigger('ma:Pagination:Pagination', [targetPageNumber]);
    });

    // Listen for new data, render new pagination.
    $el.on('ma:Pagination:DataUpdated', function (e, data) {
      renderPagination({ data: data, $el: $el });
    });
  });

  /**
   * Renders the contents of a specific results pagination component.
   *
   * @param args
   *   The arguments object, can contain the following properties:
   *      data: data object from which to populate handlebars template variables (required),
   *      context: the parent component selector
   */
  function renderPagination(args) {
    // Don't attempt to render anything if we don't have new data.
    if (!args.data) {
      return;
    }

    // Create new markup using handlebars template, helper.
    var markup = compiledTemplate(args.data);
    args.$el.html(markup);
  }
})(window, document, jQuery);

;
module.exports = exports['default'];

},{"../helpers/getHandlebarTemplate.js":3}],26:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

exports['default'] = (function (window, document, $, undefined) {

  $('.js-input-date').each(function () {
    var $el = $(this);
    var restrict = $el.data('restrict');
    var picker = new Pikaday({
      field: this,
      format: 'MM/DD/YYYY'
    });

    switch (restrict) {
      case 'max':
        picker.setMaxDate(new Date());
        break;
      case 'min':
        picker.setMinDate(new Date());
        break;
    }

    $el.attr('type', 'text');
  });
})(window, document, jQuery);

;
module.exports = exports['default'];

},{}],27:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

exports['default'] = (function (window, document, $, undefined) {

  $('.js-ma-responsive-video').fitVids();
})(window, document, jQuery);

;
module.exports = exports['default'];

},{}],28:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _helpersGetHandlebarTemplateJs = require("../helpers/getHandlebarTemplate.js");

var _helpersGetHandlebarTemplateJs2 = _interopRequireDefault(_helpersGetHandlebarTemplateJs);

exports['default'] = (function (window, document, $, undefined) {
  // Set up global component config
  var compiledTemplate = (0, _helpersGetHandlebarTemplateJs2['default'])('resultsHeading'),
      clearAllButton = '.js-results-heading-clear',
      // events triggered on parent
  filterButton = '.js-results-heading-tag'; // events triggered on parent

  $(".js-results-heading").each(function () {
    var $el = $(this);

    // Listen for clear all button click + trigger interaction event on parent.
    $el.on('click', clearAllButton, function () {
      $el.trigger('ma:ResultsHeading:ActiveTagClicked', [{ clearedFilter: 'all' }]);
    });

    // Listen for single filter button click and trigger interaction event on parent.
    $el.on('click', filterButton, function (e) {
      var clearedFilter = {
        'type': $(e.target).data('ma-filter-type'),
        'value': $(e.target).data('ma-filter-value'),
        'text': $(e.target).text()
      };

      $el.trigger('ma:ResultsHeading:ActiveTagClicked', [{ clearedFilter: clearedFilter }]);
    });

    // Listen for new results heading data, render new results heading.
    $el.on('ma:ResultsHeading:DataUpdated', function (e, data) {
      renderResultsHeading({ data: data, $el: $el });
    });
  });

  /**
   * Renders the contents of a specific results heading component.
   *
   * @param args
   *   The arguments object, can contain the following properties:
   *      data: data object from which to populate handlebars template variables (required),
   *      context: the parent component selector
   */
  function renderResultsHeading(args) {
    // Don't attempt to render anything if we don't have new data.
    if (!args.data) {
      return;
    }
    // Create new markup using handlebars template, helper.
    var markup = compiledTemplate(args.data);
    args.$el.html(markup);
  }
})(window, document, jQuery);

;
module.exports = exports['default'];

},{"../helpers/getHandlebarTemplate.js":3}],29:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

exports['default'] = (function (window, document, $, undefined) {

  $('.js-ma-rich-text').each(function () {
    var $el = $(this);

    $el.find('table').wrap("<div class='ma__rich-text__table-wrapper'></div>");
  });
})(window, document, jQuery);

;
module.exports = exports['default'];

},{}],30:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _helpersCssControlCodeJs = require("../helpers/cssControlCode.js");

var _helpersCssControlCodeJs2 = _interopRequireDefault(_helpersCssControlCodeJs);

exports["default"] = (function (window, document, $, undefined) {

  $(".js-scroll-anchors").each(function () {
    var $el = $(this),
        $elParent = $el.parent().css('position') === 'relative' ? $el.parent() : $el.parent().offsetParent(),
        $links = $el.find('.js-scroll-anchors-link'),
        elHeight = undefined,
        headerBuffer = 0,
        lowerLimit = undefined,
        upperLimit = undefined,
        debounceTimer = undefined,
        activeClass = "is-active",
        activeAnchorIndex = 0,
        anchors = [],
        numAnchors = 0,
        isMobile = false,
        linkScrolling = false;

    setVariables();

    // default assumption as to where the screen will load
    $el.attr('data-sticky', 'top');

    // update variables one more time to catch any post page load changes
    window.setTimeout(function () {
      setVariables();
    }, 1000);

    $links.on('click', function (e) {
      e.preventDefault();

      var $link = $(this);

      // is the menu closed on mobile
      if (!$el.hasClass('is-open') && isMobile) {
        // just show the menu
        $el.addClass('is-open');
        return;
      }

      activeAnchorIndex = $(this).data('index');
      // find the location of the desired link and scroll the page
      var position = anchors[activeAnchorIndex].position;
      // close the menu
      $el.removeClass('is-open');
      // prevent the scroll event from updating active links
      linkScrolling = true;

      $("html,body").stop(true, true).animate({ scrollTop: position }, '750', function () {
        linkScrolling = false;
        // Get the link hash target so we can bring focus to it
        var hash = anchors[activeAnchorIndex].hash;
        // bring focus to the item we just scrolled to
        $(hash).focus();
        // timing issue with window.scroll event firing.
        setTimeout(function () {
          // set this link as active.
          $el.find('.' + activeClass).removeClass(activeClass);
          $link.addClass(activeClass);
        }, 30);
      });
    });

    // if the content contains accordions,
    // readjust settings when there state changes.
    $('.js-accordion-link').on('click', function () {
      if (typeof debounceTimer === "number") {
        window.clearTimeout(debounceTimer);
      }
      debounceTimer = window.setTimeout(function () {
        setVariables();
        setPosition();
        activateLink();
      }, 400);
    });

    $el.find(".js-scroll-anchors-toggle").on('click', function () {
      $el.toggleClass('is-open');
    });

    // make the links sticky
    $(window).resize(function () {
      if (typeof debounceTimer === "number") {
        window.clearTimeout(debounceTimer);
      }
      debounceTimer = window.setTimeout(function () {
        setVariables();
        setPosition();
        activateLink();
      }, 300);
    });

    $(window).scroll(function () {
      setPosition();

      if (!linkScrolling) {
        activateLink();
      }
    });

    function setVariables() {
      var topOffset = 0;

      headerBuffer = 0;
      elHeight = $el.outerHeight(true);
      upperLimit = $elParent.offset().top;
      isMobile = (0, _helpersCssControlCodeJs2["default"])($el);

      if ($elParent[0].hasAttribute("style") && !isMobile) {
        $elParent.removeAttr('style');
      }

      if (isMobile) {
        headerBuffer = $('.js-sticky-header').height() || 0;
        upperLimit -= headerBuffer;
        topOffset = elHeight;
      }

      lowerLimit = upperLimit + $elParent.outerHeight(true) - $el.height();

      // locate the position of all of the anchor targets
      anchors = new Array();
      $links.each(function (i, e) {
        var $el = $(this),
            $link = $el.is('a') ? $el : $el.find('a'),
            hash = $link[0].hash,
            position = $(hash).offset() ? $(hash).offset().top - headerBuffer - topOffset : upperLimit;

        anchors[i] = { hash: hash, position: position };

        $el.data('index', i);
      });

      // record the number of anchors for performance
      numAnchors = anchors.length;
    }

    function setPosition() {
      var windowTop = $(window).scrollTop(),
          attr = $el.attr('data-sticky'),
          top = attr !== 'top' && windowTop <= upperLimit,
          middle = attr !== 'middle' && windowTop < lowerLimit && windowTop > upperLimit,
          bottom = attr !== 'bottom' && windowTop >= lowerLimit;

      if ($elParent[0].hasAttribute("style") && !isMobile) {
        $elParent.removeAttr('style');
      }

      if (!$elParent[0].hasAttribute("style") && isMobile && attr === 'middle') {
        $elParent.css({ 'paddingTop': elHeight });
      }

      if (top) {
        $el.attr('data-sticky', 'top');

        if (isMobile) {
          $elParent.removeAttr('style');
        }
      } else if (middle) {
        $el.attr('data-sticky', 'middle');

        if (isMobile) {
          $elParent.css({ 'paddingTop': elHeight });
        }
      } else if (bottom) {
        $el.attr('data-sticky', 'bottom');

        if (isMobile) {
          $elParent.removeAttr('style');
        }
      }
    }

    function activateLink() {
      // do we have more than one anchor
      if (numAnchors < 2 || linkScrolling) {
        return;
      }

      // get the current scroll position and offset by half the view port
      var windowTop = $(window).scrollTop() + window.innerHeight / 2,
          currentAnchor = activeAnchorIndex;

      // is there a prev target
      // and
      // is the current scroll position above the current target
      if (currentAnchor > 0 && windowTop < anchors[activeAnchorIndex].position) {
        // make the prev link active
        --activeAnchorIndex;
      }

      // is there a next target
      // and
      // is the current scroll position below the next target
      else if (currentAnchor < numAnchors - 1 && windowTop > anchors[activeAnchorIndex + 1].position) {
          // make the next link active
          ++activeAnchorIndex;
        }

      if (currentAnchor !== activeAnchorIndex) {
        // move the active flag
        $el.find('.' + activeClass).removeClass(activeClass);
        $links.eq(activeAnchorIndex).addClass(activeClass);
      }
    }
  });
})(window, document, jQuery);

;
module.exports = exports["default"];

},{"../helpers/cssControlCode.js":2}],31:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = (function (window, document, $, undefined) {

  $('.js-util-nav').each(function () {
    var openClass = "is-open",
        closeClass = "is-closed",
        submenuClass = "show-utilmenu",
        $parent = $(this),
        waitForIt = null;

    $('.js-close-sub-nav').on('click', function () {
      var $openContent = $parent.find('.js-util-nav-content.' + openClass);
      hide($openContent);
    });

    $parent.find('.js-util-nav-toggle > a').on('click', function (e) {
      e.preventdefault;

      var open = $(this).hasClass(openClass),
          $content = $(this).next('.js-util-nav-content'),
          $openContent = $parent.find('.js-util-nav-content.' + openClass);

      // hide other content
      hide($openContent);

      if (open) {
        return;
      }
      // add open class to this item
      $(this).addClass(openClass);
      // add open class to the correct content based on index
      $content.attr("aria-hidden", "false");

      setTimeout(function () {
        $content.removeClass(closeClass).addClass(openClass);
        $('body').addClass(submenuClass);
      }, .1);
    });

    $parent.find('.js-close-util-nav').on('click', function (e) {
      e.preventDefault;

      hide($(this).closest('.js-util-nav-content'));
    });

    $('.js-close-sub-nav').on('click', function () {
      var $openContent = $parent.find('.js-util-nav-content.' + openClass);
      hide($openContent);
    });

    function hide($content) {
      $('body').removeClass(submenuClass);
      $parent.find("." + openClass).removeClass(openClass);
      $content.removeClass(openClass).addClass(closeClass);

      if (waitForIt) {
        clearTimeout(waitForIt);
      }
      waitForIt = setTimeout(function () {
        $content.attr("aria-hidden", "true");
      }, 1000);
    }
  });
})(window, document, jQuery);

;
module.exports = exports["default"];

},{}]},{},[6])

//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvamNvbnN0YW50aW5lL21hc3Nnb3Ytd29yay9tYXlmbG93ZXIvc3R5bGVndWlkZS9zb3VyY2UvYXNzZXRzL2pzL2hlbHBlcnMvY29va2llcy5qcyIsIi9Vc2Vycy9qY29uc3RhbnRpbmUvbWFzc2dvdi13b3JrL21heWZsb3dlci9zdHlsZWd1aWRlL3NvdXJjZS9hc3NldHMvanMvaGVscGVycy9jc3NDb250cm9sQ29kZS5qcyIsIi9Vc2Vycy9qY29uc3RhbnRpbmUvbWFzc2dvdi13b3JrL21heWZsb3dlci9zdHlsZWd1aWRlL3NvdXJjZS9hc3NldHMvanMvaGVscGVycy9nZXRIYW5kbGViYXJUZW1wbGF0ZS5qcyIsIi9Vc2Vycy9qY29uc3RhbnRpbmUvbWFzc2dvdi13b3JrL21heWZsb3dlci9zdHlsZWd1aWRlL3NvdXJjZS9hc3NldHMvanMvaGVscGVycy9qUXVlcnlFeHRlbmQuanMiLCIvVXNlcnMvamNvbnN0YW50aW5lL21hc3Nnb3Ytd29yay9tYXlmbG93ZXIvc3R5bGVndWlkZS9zb3VyY2UvYXNzZXRzL2pzL2hlbHBlcnMvc3RpY2t5LmpzIiwiL1VzZXJzL2pjb25zdGFudGluZS9tYXNzZ292LXdvcmsvbWF5Zmxvd2VyL3N0eWxlZ3VpZGUvc291cmNlL2Fzc2V0cy9qcy9pbmRleC5qcyIsIi9Vc2Vycy9qY29uc3RhbnRpbmUvbWFzc2dvdi13b3JrL21heWZsb3dlci9zdHlsZWd1aWRlL3NvdXJjZS9hc3NldHMvanMvbW9kdWxlcy9hY2NvcmRpb25zLmpzIiwiL1VzZXJzL2pjb25zdGFudGluZS9tYXNzZ292LXdvcmsvbWF5Zmxvd2VyL3N0eWxlZ3VpZGUvc291cmNlL2Fzc2V0cy9qcy9tb2R1bGVzL2JhY2sydG9wLmpzIiwiL1VzZXJzL2pjb25zdGFudGluZS9tYXNzZ292LXdvcmsvbWF5Zmxvd2VyL3N0eWxlZ3VpZGUvc291cmNlL2Fzc2V0cy9qcy9tb2R1bGVzL2Jhbm5lckNhcm91c2VsLmpzIiwiL1VzZXJzL2pjb25zdGFudGluZS9tYXNzZ292LXdvcmsvbWF5Zmxvd2VyL3N0eWxlZ3VpZGUvc291cmNlL2Fzc2V0cy9qcy9tb2R1bGVzL2NsaWNrYWJsZS5qcyIsIi9Vc2Vycy9qY29uc3RhbnRpbmUvbWFzc2dvdi13b3JrL21heWZsb3dlci9zdHlsZWd1aWRlL3NvdXJjZS9hc3NldHMvanMvbW9kdWxlcy9kcm9wZG93bi5qcyIsIi9Vc2Vycy9qY29uc3RhbnRpbmUvbWFzc2dvdi13b3JrL21heWZsb3dlci9zdHlsZWd1aWRlL3NvdXJjZS9hc3NldHMvanMvbW9kdWxlcy9lbWVyZ2VuY3lBbGVydHMuanMiLCIvVXNlcnMvamNvbnN0YW50aW5lL21hc3Nnb3Ytd29yay9tYXlmbG93ZXIvc3R5bGVndWlkZS9zb3VyY2UvYXNzZXRzL2pzL21vZHVsZXMvZm9vdG5vdGUuanMiLCIvVXNlcnMvamNvbnN0YW50aW5lL21hc3Nnb3Ytd29yay9tYXlmbG93ZXIvc3R5bGVndWlkZS9zb3VyY2UvYXNzZXRzL2pzL21vZHVsZXMvZm9ybUlucHV0cy5qcyIsIi9Vc2Vycy9qY29uc3RhbnRpbmUvbWFzc2dvdi13b3JrL21heWZsb3dlci9zdHlsZWd1aWRlL3NvdXJjZS9hc3NldHMvanMvbW9kdWxlcy9mb3JtVmFsaWRhdGlvbi5qcyIsIi9Vc2Vycy9qY29uc3RhbnRpbmUvbWFzc2dvdi13b3JrL21heWZsb3dlci9zdHlsZWd1aWRlL3NvdXJjZS9hc3NldHMvanMvbW9kdWxlcy9nb29nbGVNYXAuanMiLCIvVXNlcnMvamNvbnN0YW50aW5lL21hc3Nnb3Ytd29yay9tYXlmbG93ZXIvc3R5bGVndWlkZS9zb3VyY2UvYXNzZXRzL2pzL21vZHVsZXMvaGlkZUFsZXJ0LmpzIiwiL1VzZXJzL2pjb25zdGFudGluZS9tYXNzZ292LXdvcmsvbWF5Zmxvd2VyL3N0eWxlZ3VpZGUvc291cmNlL2Fzc2V0cy9qcy9tb2R1bGVzL2tleXdvcmRTZWFyY2guanMiLCIvVXNlcnMvamNvbnN0YW50aW5lL21hc3Nnb3Ytd29yay9tYXlmbG93ZXIvc3R5bGVndWlkZS9zb3VyY2UvYXNzZXRzL2pzL21vZHVsZXMvbG9jYXRpb25GaWx0ZXJzLmpzIiwiL1VzZXJzL2pjb25zdGFudGluZS9tYXNzZ292LXdvcmsvbWF5Zmxvd2VyL3N0eWxlZ3VpZGUvc291cmNlL2Fzc2V0cy9qcy9tb2R1bGVzL2xvY2F0aW9uTGlzdGluZy5qcyIsIi9Vc2Vycy9qY29uc3RhbnRpbmUvbWFzc2dvdi13b3JrL21heWZsb3dlci9zdHlsZWd1aWRlL3NvdXJjZS9hc3NldHMvanMvbW9kdWxlcy9tYWluTmF2LmpzIiwiL1VzZXJzL2pjb25zdGFudGluZS9tYXNzZ292LXdvcmsvbWF5Zmxvd2VyL3N0eWxlZ3VpZGUvc291cmNlL2Fzc2V0cy9qcy9tb2R1bGVzL21haW5OYXZQaWxvdC5qcyIsIi9Vc2Vycy9qY29uc3RhbnRpbmUvbWFzc2dvdi13b3JrL21heWZsb3dlci9zdHlsZWd1aWRlL3NvdXJjZS9hc3NldHMvanMvbW9kdWxlcy9tb2JpbGVOYXYuanMiLCIvVXNlcnMvamNvbnN0YW50aW5lL21hc3Nnb3Ytd29yay9tYXlmbG93ZXIvc3R5bGVndWlkZS9zb3VyY2UvYXNzZXRzL2pzL21vZHVsZXMvb3JnU2VsZWN0b3IuanMiLCIvVXNlcnMvamNvbnN0YW50aW5lL21hc3Nnb3Ytd29yay9tYXlmbG93ZXIvc3R5bGVndWlkZS9zb3VyY2UvYXNzZXRzL2pzL21vZHVsZXMvcGFnaW5hdGlvbi5qcyIsIi9Vc2Vycy9qY29uc3RhbnRpbmUvbWFzc2dvdi13b3JrL21heWZsb3dlci9zdHlsZWd1aWRlL3NvdXJjZS9hc3NldHMvanMvbW9kdWxlcy9waWthZGF5LmpzIiwiL1VzZXJzL2pjb25zdGFudGluZS9tYXNzZ292LXdvcmsvbWF5Zmxvd2VyL3N0eWxlZ3VpZGUvc291cmNlL2Fzc2V0cy9qcy9tb2R1bGVzL3Jlc3BvbnNpdmVWaWRlby5qcyIsIi9Vc2Vycy9qY29uc3RhbnRpbmUvbWFzc2dvdi13b3JrL21heWZsb3dlci9zdHlsZWd1aWRlL3NvdXJjZS9hc3NldHMvanMvbW9kdWxlcy9yZXN1bHRzSGVhZGluZy5qcyIsIi9Vc2Vycy9qY29uc3RhbnRpbmUvbWFzc2dvdi13b3JrL21heWZsb3dlci9zdHlsZWd1aWRlL3NvdXJjZS9hc3NldHMvanMvbW9kdWxlcy9yaWNoVGV4dC5qcyIsIi9Vc2Vycy9qY29uc3RhbnRpbmUvbWFzc2dvdi13b3JrL21heWZsb3dlci9zdHlsZWd1aWRlL3NvdXJjZS9hc3NldHMvanMvbW9kdWxlcy9zY3JvbGxBbmNob3JzLmpzIiwiL1VzZXJzL2pjb25zdGFudGluZS9tYXNzZ292LXdvcmsvbWF5Zmxvd2VyL3N0eWxlZ3VpZGUvc291cmNlL2Fzc2V0cy9qcy9tb2R1bGVzL3V0aWxOYXYuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLE1BQU0sQ0FBQyxPQUFPLEdBQUcsQ0FBQSxVQUFTLE1BQU0sRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFDO0FBQ3BELGNBQVksQ0FBQzs7QUFFYixXQUFTLFNBQVMsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRTtBQUN2QyxRQUFHLE9BQU8sT0FBTyxBQUFDLEtBQUssUUFBUSxFQUFFO0FBQy9CLFVBQUksQ0FBQyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7QUFDbkIsT0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLEdBQUksT0FBTyxHQUFDLEVBQUUsR0FBQyxFQUFFLEdBQUMsRUFBRSxHQUFDLElBQUksQUFBQyxDQUFDLENBQUM7QUFDakQsVUFBSSxPQUFPLEdBQUcsVUFBVSxHQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztBQUN6QyxjQUFRLENBQUMsTUFBTSxHQUFHLElBQUksR0FBRyxHQUFHLEdBQUcsS0FBSyxHQUFHLElBQUksR0FBRyxPQUFPLEdBQUcsVUFBVSxDQUFDO0tBQ3BFLE1BQU07QUFDTCxjQUFRLENBQUMsTUFBTSxHQUFHLElBQUksR0FBRyxHQUFHLEdBQUcsS0FBSyxHQUFHLFVBQVUsQ0FBQztL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R0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLHVCQUF1QixHQUFHLFNBQVMsQ0FBQyxDQUFDO0FBQ3JFLFVBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztLQUNwQixDQUFDLENBQUM7O0FBRUgsYUFBUyxJQUFJLENBQUMsUUFBUSxFQUFFO0FBQ3RCLE9BQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLENBQUE7QUFDbkMsYUFBTyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsU0FBUyxDQUFDLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQ3JELGNBQVEsQ0FDTCxXQUFXLENBQUMsU0FBUyxDQUFDLENBQ3RCLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQzs7QUFFeEIsVUFBRyxTQUFTLEVBQUU7QUFDWixvQkFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDO09BQ3pCO0FBQ0QsZUFBUyxHQUFHLFVBQVUsQ0FBQyxZQUFVO0FBQy9CLGdCQUFRLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBQyxNQUFNLENBQUMsQ0FBQztPQUNyQyxFQUFFLElBQUksQ0FBQyxDQUFDO0tBQ1Y7R0FFRixDQUFDLENBQUM7Q0FFSixDQUFBLENBQUMsTUFBTSxFQUFDLFFBQVEsRUFBQyxNQUFNLENBQUM7O0FBQUEsQ0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHdpbmRvdywgZG9jdW1lbnQsIHVuZGVmaW5lZCl7XHJcbiAgXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4gIGZ1bmN0aW9uIHNldENvb2tpZShuYW1lLCB2YWx1ZSwgZXhwaXJlcykge1xyXG4gICAgaWYodHlwZW9mKGV4cGlyZXMpID09PSAnbnVtYmVyJykge1xyXG4gICAgICB2YXIgZCA9IG5ldyBEYXRlKCk7XHJcbiAgICAgIGQuc2V0VGltZShkLmdldFRpbWUoKSArIChleHBpcmVzKjI0KjYwKjYwKjEwMDApKTtcclxuICAgICAgdmFyIGV4cGlyZXMgPSBcImV4cGlyZXM9XCIrZC50b1VUQ1N0cmluZygpO1xyXG4gICAgICBkb2N1bWVudC5jb29raWUgPSBuYW1lICsgXCI9XCIgKyB2YWx1ZSArIFwiOyBcIiArIGV4cGlyZXMgKyBcIjsgcGF0aD0vXCI7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBkb2N1bWVudC5jb29raWUgPSBuYW1lICsgXCI9XCIgKyB2YWx1ZSArIFwiOyBwYXRoPS9cIjtcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBnZXRDb29raWUobmFtZSkge1xyXG4gICAgdmFyIHZhbHVlID0gXCI7IFwiICsgZG9jdW1lbnQuY29va2llO1xyXG4gICAgdmFyIHBhcnRzID0gdmFsdWUuc3BsaXQoXCI7IFwiICsgbmFtZSArIFwiPVwiKTtcclxuICAgIGlmIChwYXJ0cy5sZW5ndGggPT0gMikgcmV0dXJuIHBhcnRzLnBvcCgpLnNwbGl0KFwiO1wiKS5zaGlmdCgpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHNldENvb2tpZSxcclxuICAgIGdldENvb2tpZVxyXG4gIH07XHJcblxyXG59KHdpbmRvdywgZG9jdW1lbnQpO1xyXG5cclxuIiwiLy8gY2hlY2sgdGhlIHZhbHVlIG9mIHRoZSBjc3MgOmJlZm9yZSBwc3VlZG8gZWxlbWVudFxyXG4vLyB2YWx1ZXMgbG9vayBmb3IgXCJ0cnVlXCIgb3IgXCJmYWxzZVwiXHJcblxyXG5leHBvcnQgZGVmYXVsdCAoJGVsKSA9PiB7XHJcbiAgbGV0IHZhbHVlID0gXCJ0cnVlXCI7XHJcbiAgdHJ5IHtcclxuICAgIHZhbHVlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoJGVsWzBdLCAnOmJlZm9yZScpLmdldFByb3BlcnR5VmFsdWUoJ2NvbnRlbnQnKS5yZXBsYWNlKC9cXFwiL2csICcnKTtcclxuICB9IGNhdGNoKGVycikge31cclxuICByZXR1cm4gdmFsdWUgPT09IFwiZmFsc2VcIiA/IGZhbHNlIDogdHJ1ZTtcclxufTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihuYW1lKSB7XHJcbiAgaWYgKEhhbmRsZWJhcnMudGVtcGxhdGVzID09PSB1bmRlZmluZWQgfHwgSGFuZGxlYmFycy50ZW1wbGF0ZXNbbmFtZV0gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBqUXVlcnkuYWpheCh7XHJcbiAgICAgICAgICB1cmwgOiB0aGVtZVBhdGggKyAnL2pzL3RlbXBsYXRlcy8nICsgbmFtZSArICcuaHRtbCcsXHJcbiAgICAgICAgICBzdWNjZXNzIDogZnVuY3Rpb24oZGF0YSkge1xyXG4gICAgICAgICAgICAgIGlmIChIYW5kbGViYXJzLnRlbXBsYXRlcyA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgIEhhbmRsZWJhcnMudGVtcGxhdGVzID0ge307XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIEhhbmRsZWJhcnMudGVtcGxhdGVzW25hbWVdID0gSGFuZGxlYmFycy5jb21waWxlKGRhdGEpO1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGFzeW5jIDogZmFsc2VcclxuICAgICAgfSk7XHJcbiAgfVxyXG4gIHJldHVybiBIYW5kbGViYXJzLnRlbXBsYXRlc1tuYW1lXTtcclxufTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHdpbmRvdyxkb2N1bWVudCwkLHVuZGVmaW5lZCkge1xuICAkLmV4dGVuZCgkLmV4cHJbJzonXSwge1xuICAgIC8vIGpRdWVyeSBmaW5kIGFsbCBmb2N1c2FibGUgZWxlbWVudHNcbiAgICAvLyBzZWU6IGh0dHBzOi8vY29kZXJ3YWxsLmNvbS9wL2pxc2Fudy9qcXVlcnktZmluZC1ldmVyeS1mb2N1c2FibGUtZWxlbWVudHNcbiAgICBmb2N1c2FibGU6IGZ1bmN0aW9uKGVsLCBpbmRleCwgc2VsZWN0b3Ipe1xuICAgICAgcmV0dXJuICQoZWwpLmlzKCdhLCBidXR0b24sIDppbnB1dCwgW3RhYmluZGV4XScpO1xuICAgIH1cbiAgfSk7XG59KHdpbmRvdyxkb2N1bWVudCxqUXVlcnkpO1xuIiwiaW1wb3J0IGNoZWNrQWN0aXZlIGZyb20gXCIuLi9oZWxwZXJzL2Nzc0NvbnRyb2xDb2RlLmpzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAod2luZG93LGRvY3VtZW50LCQsdW5kZWZpbmVkKSB7XHJcbiAgbGV0ICRlbCxcclxuICAgICRlbFBhcmVudCxcclxuICAgIGVsSGVpZ2h0LFxyXG4gICAgZWxXaWR0aCxcclxuICAgIGxvd2VyTGltaXQsXHJcbiAgICB1cHBlckxpbWl0LFxyXG4gICAgZGVib3VuY2VUaW1lcixcclxuICAgIHJ1bkNvZGUgPSBmYWxzZTtcclxuXHJcbiAgZnVuY3Rpb24gaW5pdChlbGVtZW50KSB7XHJcbiAgICAkZWwgPSBlbGVtZW50O1xyXG4gICAgJGVsUGFyZW50ID0gJGVsLnBhcmVudCgpLmNzcygncG9zaXRpb24nKSA9PT0gJ3JlbGF0aXZlJyA/ICRlbC5wYXJlbnQoKSA6ICRlbC5wYXJlbnQoKS5vZmZzZXRQYXJlbnQoKTtcclxuXHJcbiAgICAvLyBkZWZhdWx0IGFzc3VtcHRpb24gYXMgdG8gd2hlcmUgdGhlIHNjcmVlbiB3aWxsIGxvYWRcclxuICAgICRlbC5hdHRyKCdkYXRhLXN0aWNreScsJ3RvcCcpO1xyXG5cclxuICAgIHVwZGF0ZURhdGEoKTtcclxuXHJcbiAgICAvLyB1cGRhdGUgdmFyaWFibGVzIG9uZSBtb3JlIHRpbWUgdG8gY2F0Y2ggYW55IHBvc3QgcGFnZSBsb2FkIGNoYW5nZXNcclxuICAgIHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcbiAgICAgIHVwZGF0ZURhdGEoKTtcclxuICAgIH0sMTAwMCk7XHJcbiAgICBcclxuICAgICQod2luZG93KS5yZXNpemUoZnVuY3Rpb24oKSB7XHJcbiAgICAgIHVwZGF0ZURhdGEoKTtcclxuICAgICAgc2V0UG9zaXRpb24oKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIHRvZ2dsZSB0aGUgc3RpY2t5IHBvc2l0aW9uaW5nXHJcbiAgICAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uICgpIHtcclxuICAgICAgc2V0UG9zaXRpb24oKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gdXBkYXRlRGF0YSgpe1xyXG4gICAgbGV0IG5ld1J1bkNvZGUgPSBjaGVja0FjdGl2ZSgkZWwpO1xyXG5cclxuICAgIGlmKHJ1bkNvZGUgJiYgIW5ld1J1bkNvZGUpIHtcclxuICAgICAgJGVsLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcnVuQ29kZSA9IG5ld1J1bkNvZGU7XHJcblxyXG4gICAgaWYoIXJ1bkNvZGUpe1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJ1bkNvZGUgPSBuZXdSdW5Db2RlO1xyXG4gICAgZWxIZWlnaHQgPSAkZWwuaGVpZ2h0KCk7XHJcbiAgICBlbFdpZHRoID0gJGVsUGFyZW50LndpZHRoKCk7XHJcbiAgICB1cHBlckxpbWl0ID0gJGVsUGFyZW50Lm9mZnNldCgpLnRvcDtcclxuICAgIGxvd2VyTGltaXQgPSB1cHBlckxpbWl0ICsgJGVsUGFyZW50Lm91dGVySGVpZ2h0KHRydWUpIC0gJGVsLmhlaWdodCgpO1xyXG5cclxuICAgICRlbC53aWR0aChlbFdpZHRoKTsgICAgICBcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHNldFBvc2l0aW9uKCkge1xyXG4gICAgaWYoIXJ1bkNvZGUpe1xyXG4gICAgICAkZWwuYXR0cignZGF0YS1zdGlja3knLCd0b3AnKTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCB3aW5kb3dUb3AgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCksXHJcbiAgICAgICAgYXR0ciA9ICRlbC5hdHRyKCdkYXRhLXN0aWNreScpLFxyXG4gICAgICAgIHRvcCA9IGF0dHIgIT09ICd0b3AnICYmIHdpbmRvd1RvcCA8PSB1cHBlckxpbWl0LCBcclxuICAgICAgICBtaWRkbGUgPSBhdHRyICE9PSAnbWlkZGxlJyAmJiB3aW5kb3dUb3AgPCBsb3dlckxpbWl0ICYmIHdpbmRvd1RvcCA+IHVwcGVyTGltaXQsXHJcbiAgICAgICAgYm90dG9tID0gYXR0ciAhPT0gJ2JvdHRvbScgJiYgd2luZG93VG9wID49IGxvd2VyTGltaXQ7XHJcbiAgICBcclxuICAgIGlmKHRvcCkge1xyXG4gICAgICAkZWwuYXR0cignZGF0YS1zdGlja3knLCd0b3AnKTtcclxuICAgIH0gXHJcbiAgICBlbHNlIGlmIChtaWRkbGUpIHtcclxuICAgICAgJGVsLmF0dHIoJ2RhdGEtc3RpY2t5JywnbWlkZGxlJyk7XHJcbiAgICB9IFxyXG4gICAgZWxzZSBpZiAoYm90dG9tKSB7XHJcbiAgICAgICRlbC5hdHRyKCdkYXRhLXN0aWNreScsJ2JvdHRvbScpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHtpbml0fTtcclxuXHJcbn0od2luZG93LGRvY3VtZW50LGpRdWVyeSk7IiwiaW1wb3J0ICAgICAgICAgICAgICAgICAgICAgICBcIi4vaGVscGVycy9qUXVlcnlFeHRlbmQuanNcIjtcbmltcG9ydCBhY2NvcmRpb25zICAgICAgIGZyb20gXCIuL21vZHVsZXMvYWNjb3JkaW9ucy5qc1wiO1xuaW1wb3J0IGdvb2dsZU1hcCAgICAgICAgZnJvbSBcIi4vbW9kdWxlcy9nb29nbGVNYXAuanNcIjtcbmltcG9ydCBiYWNrMnRvcCAgICAgICAgIGZyb20gXCIuL21vZHVsZXMvYmFjazJ0b3AuanNcIjtcbmltcG9ydCBiYW5uZXJDYXJvdXNlbCAgIGZyb20gXCIuL21vZHVsZXMvYmFubmVyQ2Fyb3VzZWwuanNcIjtcbmltcG9ydCBjbGlja2FibGUgICAgICAgIGZyb20gXCIuL21vZHVsZXMvY2xpY2thYmxlLmpzXCI7XG5pbXBvcnQgZHJvcGRvd24gICAgICAgICBmcm9tIFwiLi9tb2R1bGVzL2Ryb3Bkb3duLmpzXCI7XG5pbXBvcnQgZW1lcmdlbmN5QWxlcnRzICBmcm9tIFwiLi9tb2R1bGVzL2VtZXJnZW5jeUFsZXJ0cy5qc1wiO1xuaW1wb3J0IGZvb3Rub3RlICAgICAgICAgZnJvbSBcIi4vbW9kdWxlcy9mb290bm90ZS5qc1wiO1xuaW1wb3J0IGZvcm1WYWxpZGF0aW9uICAgZnJvbSBcIi4vbW9kdWxlcy9mb3JtVmFsaWRhdGlvbi5qc1wiO1xuaW1wb3J0IGhpZGVBbGVydCAgICAgICAgZnJvbSBcIi4vbW9kdWxlcy9oaWRlQWxlcnQuanNcIjtcbmltcG9ydCBrZXl3b3JkU2VhcmNoICAgIGZyb20gXCIuL21vZHVsZXMva2V5d29yZFNlYXJjaC5qc1wiO1xuaW1wb3J0IGxvY2F0aW9uRmlsdGVycyAgZnJvbSBcIi4vbW9kdWxlcy9sb2NhdGlvbkZpbHRlcnMuanNcIjtcbmltcG9ydCBsb2NhdGlvbkxpc3RpbmcgIGZyb20gXCIuL21vZHVsZXMvbG9jYXRpb25MaXN0aW5nLmpzXCI7XG5pbXBvcnQgbWFpbk5hdiAgICAgICAgICBmcm9tIFwiLi9tb2R1bGVzL21haW5OYXYuanNcIjtcbmltcG9ydCBtYWluTmF2UGlsb3QgICAgIGZyb20gXCIuL21vZHVsZXMvbWFpbk5hdlBpbG90LmpzXCI7XG5pbXBvcnQgbW9iaWxlTmF2ICAgICAgICBmcm9tIFwiLi9tb2R1bGVzL21vYmlsZU5hdi5qc1wiO1xuaW1wb3J0IG9yZ1NlbGVjdG9yICAgICAgZnJvbSBcIi4vbW9kdWxlcy9vcmdTZWxlY3Rvci5qc1wiO1xuaW1wb3J0IHBhZ2luYXRpb24gICAgICAgIGZyb20gXCIuL21vZHVsZXMvcGFnaW5hdGlvbi5qc1wiO1xuaW1wb3J0IHBpa2FkYXkgICAgICAgICAgZnJvbSBcIi4vbW9kdWxlcy9waWthZGF5LmpzXCI7XG5pbXBvcnQgcmVzcG9uc2l2ZVZpZGVvICBmcm9tIFwiLi9tb2R1bGVzL3Jlc3BvbnNpdmVWaWRlby5qc1wiO1xuaW1wb3J0IHJlc3VsdHNIZWFkaW5nICBmcm9tIFwiLi9tb2R1bGVzL3Jlc3VsdHNIZWFkaW5nLmpzXCI7XG5pbXBvcnQgcmljaFRleHQgICAgICAgICBmcm9tIFwiLi9tb2R1bGVzL3JpY2hUZXh0LmpzXCI7XG5pbXBvcnQgc2Nyb2xsQW5jaG9ycyAgICBmcm9tIFwiLi9tb2R1bGVzL3Njcm9sbEFuY2hvcnMuanNcIjtcbmltcG9ydCBmb3JtSW5wdXRzICAgICAgIGZyb20gXCIuL21vZHVsZXMvZm9ybUlucHV0cy5qc1wiO1xuaW1wb3J0IHV0aWxOYXYgICAgICAgICAgZnJvbSBcIi4vbW9kdWxlcy91dGlsTmF2LmpzXCI7XG4iLCJpbXBvcnQgY2hlY2tBY3RpdmUgZnJvbSBcIi4uL2hlbHBlcnMvY3NzQ29udHJvbENvZGUuanNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICh3aW5kb3csZG9jdW1lbnQsJCx1bmRlZmluZWQpIHtcclxuXHJcbiAgJCgnLmpzLWFjY29yZGlvbicpLmVhY2goZnVuY3Rpb24oKXtcclxuICAgIGxldCAkZWwgPSAkKHRoaXMpLFxyXG4gICAgICAgICRsaW5rID0gJGVsLmZpbmQoJy5qcy1hY2NvcmRpb24tbGluaycpLFxyXG4gICAgICAgICRjb250ZW50ID0gJGVsLmZpbmQoJy5qcy1hY2NvcmRpb24tY29udGVudCcpLFxyXG4gICAgICAgIGFjdGl2ZSA9IGNoZWNrQWN0aXZlKCRlbCksXHJcbiAgICAgICAgb3BlbiA9ICRlbC5oYXNDbGFzcygnaXMtb3BlbicpO1xyXG5cclxuICAgICRlbC5hdHRyKCdhcmlhLWV4cGFuZGVkJyxvcGVuKTtcclxuXHJcbiAgICBpZihvcGVuKSB7XHJcbiAgICAgIC8vIHNldHVwIHRoZSBpbmxpbmUgZGlzcGxheSBibG9ja1xyXG4gICAgICAkY29udGVudC5zdG9wKHRydWUsdHJ1ZSkuc2xpZGVEb3duKCk7XHJcbiAgICB9XHJcblxyXG4gICAgJGxpbmsub24oJ2NsaWNrJyxmdW5jdGlvbihlKXtcclxuICAgICAgaWYoYWN0aXZlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIG9wZW4gPSAkZWwuaGFzQ2xhc3MoJ2lzLW9wZW4nKTtcclxuICAgICAgICBpZihvcGVuKXtcclxuICAgICAgICAgICRjb250ZW50LnN0b3AodHJ1ZSx0cnVlKS5zbGlkZVVwKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICRjb250ZW50LnN0b3AodHJ1ZSx0cnVlKS5zbGlkZURvd24oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJGVsLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLCFvcGVuKS50b2dnbGVDbGFzcygnaXMtb3BlbicpO1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgICQod2luZG93KS5yZXNpemUoZnVuY3Rpb24gKCkge1xyXG4gICAgICBsZXQgdGVtcCA9IGNoZWNrQWN0aXZlKCRlbCk7XHJcblxyXG4gICAgICBpZih0ZW1wICE9PSBhY3RpdmUgJiYgIXRlbXApIHtcclxuICAgICAgICAkY29udGVudC5yZW1vdmVBdHRyKCdzdHlsZScpO1xyXG4gICAgICAgICRlbC5yZW1vdmVDbGFzcygnaXMtb3BlbicpO1xyXG4gICAgICAgICRlbC5hdHRyKCdhcmlhLWV4cGFuZGVkJywnZmFsc2UnKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgYWN0aXZlID0gdGVtcDtcclxuICAgIH0pLnJlc2l6ZSgpO1xyXG4gIH0pO1xyXG5cclxufSh3aW5kb3csZG9jdW1lbnQsalF1ZXJ5KTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAod2luZG93LGRvY3VtZW50LCQsdW5kZWZpbmVkKSB7XHJcbiAgbGV0ICRmb290ZXIgPSAkKCcuanMtZm9vdGVyJyksXHJcbiAgICAgIHZpc2libGVUaHJlc2hvbGQgPSAyNTAsXHJcbiAgICAgIHN0YXRpY1RocmVzaG9sZCA9IDUwO1xyXG5cclxuICAkKFwiLmpzLWJhY2sydG9wXCIpLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICBsZXQgJGVsID0gJCh0aGlzKTtcclxuXHJcbiAgICAkZWwub24oJ2NsaWNrJyxmdW5jdGlvbihlKSB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICAkKFwiaHRtbCwgYm9keVwiKS5zdG9wKHRydWUsdHJ1ZSkuYW5pbWF0ZSh7c2Nyb2xsVG9wOjB9LCAnNzUwJyk7XHJcbiAgICAgIH0gXHJcbiAgICAgIGNhdGNoKGUpIHtcclxuICAgICAgICAkKCdib2R5Jykuc2Nyb2xsVG9wKDApO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIEJyaW5nIGtleWJvYXJkIGZvY3VzIGJhY2sgdG8gdG9wIGFzIHdlbGwuXHJcbiAgICAgICQoXCIjbWFpbi1jb250ZW50XCIpLmZvY3VzKCk7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0pO1xyXG5cclxuICAgICQod2luZG93KS5vbignc2Nyb2xsJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgIC8vIGlmIHdlJ3ZlIGV4Y2VlZGVkIHRoZSB0aHJlc2hvbGQgb2Ygc2Nyb2xsaW5nXHJcbiAgICAgIC8vIGZyb20gdGhlIHRvcCwgc2hvdyBjb250cm9sXHJcbiAgICAgIGxldCBzY3JvbGxUb3AgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XHJcblxyXG4gICAgICBpZiAoc2Nyb2xsVG9wID4gdmlzaWJsZVRocmVzaG9sZCkge1xyXG4gICAgICAgICAgJGVsLnJlbW92ZUNsYXNzKCdpcy1oaWRkZW4nKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICRlbC5hZGRDbGFzcygnaXMtaGlkZGVuJyk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxufSh3aW5kb3csZG9jdW1lbnQsalF1ZXJ5KTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAod2luZG93LGRvY3VtZW50LCQsdW5kZWZpbmVkKSB7XHJcblxyXG4gICQoJy5qcy1iYW5uZXItY2Fyb3VzZWwnKS5lYWNoKGZ1bmN0aW9uKCl7XHJcbiAgICBsZXQgJGVsID0gJCh0aGlzKTtcclxuXHJcbiAgICBpZigkZWwuY2hpbGRyZW4oKS5sZW5ndGggPD0gMSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHNsaWRlciA9ICRlbC5zbGljayh7XHJcbiAgICAgIGRvdHM6IHRydWUsXHJcbiAgICAgIHByZXZBcnJvdzogJzxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwic2xpY2stcHJldlwiPjwvYnV0dG9uPicsXHJcbiAgICAgIG5leHRBcnJvdzogJzxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwic2xpY2stbmV4dFwiPjwvYnV0dG9uPidcclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxufSh3aW5kb3csZG9jdW1lbnQsalF1ZXJ5KTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAod2luZG93LGRvY3VtZW50LCQsdW5kZWZpbmVkKSB7XHJcbiAgJCgnLmpzLWNsaWNrYWJsZScpLmVhY2goZnVuY3Rpb24oKXtcclxuICAgIC8vIGlmIHRoZSB0aGlzIGlzIGNsaWNrZWRcclxuICAgICQodGhpcykuY2xpY2soZnVuY3Rpb24oZXZlbnQpe1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgdmFyICRlbCA9ICQodGhpcykuZmluZCgnLmpzLWNsaWNrYWJsZS1saW5rJykuZmlyc3QoKTtcclxuICAgICAgLy8gZmluZCB0aGUgZGVzdGluYXRpb25cclxuICAgICAgdmFyIGRlc3QgPSAkZWwuYXR0cihcImhyZWZcIik7XHJcbiAgICAgIC8vIGlmIHRoZSB0YXJnZXQgYXR0cmlidXRlIGV4aXN0c1xyXG4gICAgICBpZihcIl9ibGFua1wiID09PSAkZWwuYXR0cihcInRhcmdldFwiKSkge1xyXG4gICAgICAgIC8vIGxhdW5jaCBuZXcgdGFiL3dpbmRvd1xyXG4gICAgICAgIHdpbmRvdy5vcGVuKGRlc3QpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIG90aGVyd2lzZSByZWRpcmVjdCB0byBhIG5ldyBwYWdlIFxyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbiA9IGRlc3Q7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0pO1xyXG59KHdpbmRvdyxkb2N1bWVudCxqUXVlcnkpOyIsIi8vICoqKioqKiBiYXNpYyBjdXN0b20gc2VsZWN0IHRoYXQgdXNlcyBtb2JpbGUgc2VsZWN0IGtleWJvYXJkICoqKioqKlxyXG5sZXQgZHJvcGRvd25NZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5qcy1kcm9wZG93blwiKTtcclxuXHJcbmlmKG51bGwgIT09IGRyb3Bkb3duTWVudSl7XHJcblxyXG4gIGxldCBsZW5ndGggPSBkcm9wZG93bk1lbnUubGVuZ3RoO1xyXG5cclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrICkge1xyXG4gICAgbGV0IHBhcmVudEVsID0gZHJvcGRvd25NZW51W2ldLFxyXG4gICAgICAgIHNlbGVjdEVsID0gcGFyZW50RWwucXVlcnlTZWxlY3RvcihcIi5qcy1kcm9wZG93bi1zZWxlY3RcIiksXHJcbiAgICAgICAgbGluayA9IHBhcmVudEVsLnF1ZXJ5U2VsZWN0b3IoXCIuanMtZHJvcGRvd24tbGlua1wiKVxyXG5cclxuICAgIGlmKG51bGwgPT09IHNlbGVjdEVsIHx8IG51bGwgPT09IGxpbmspIHtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcblxyXG4gICAgc2VsZWN0RWwub25jaGFuZ2UgPSBmdW5jdGlvbigpIHtcclxuICAgICAgbGV0IGVsZW0gPSAodHlwZW9mIHRoaXMuc2VsZWN0ZWRJbmRleCA9PT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdy5ldmVudC5zcmNFbGVtZW50IDogdGhpcyk7XHJcbiAgICAgIGxpbmsuaW5uZXJUZXh0ID0gZWxlbS50ZXh0IHx8IGVsZW0ub3B0aW9uc1tlbGVtLnNlbGVjdGVkSW5kZXhdLnRleHQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBjb29raWUgICBmcm9tIFwiLi4vaGVscGVycy9jb29raWVzLmpzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAod2luZG93LGRvY3VtZW50LCQsdW5kZWZpbmVkKSB7XHJcbiAgLy8gRW1lcmdlbmN5IEFsZXJ0cyBzdGFydCBjbG9zZSBvbiBwYWdlIGxvYWRcclxuICAvLyB0aGUgZGVmYXVsdCBiZWhhdmlvciBpcyB0byBleHBhbmQgdGhlIGFsZXJ0c1xyXG4gIC8vIEVtZXJnZW5jeSBBbGVydHMgc2hvdWxkIHN0YXkgY2xvc2VkIGlmIHRoZSBjb29raWUgaXMgc2V0IHRvIGZhbHNlXHJcbiAgXHJcbiAgLyogKioqKioqKioqIE5PVEU6IFxyXG4gICAgVGhpcyBjb21wb25lbnQgaXMgZGVwZW5kZW50IG9uIHRoZSBcclxuICAgIGFjY29yZGlvbi5qcyBjb21wb25lbnQgcnVuaW5nIGJlZm9yZSBpdC4gXHJcbiAgKioqKioqKioqICovXHJcblxyXG4gICQoJy5qcy1lbWVyZ2VuY3ktYWxlcnRzJykuZWFjaChmdW5jdGlvbigpe1xyXG4gICAgbGV0ICRlbCA9ICQodGhpcyksXHJcbiAgICAgICAgb3BlbiA9IHRydWUsXHJcbiAgICAgICAgaWQgPSAkZWwuZGF0YSgnaWQnKSxcclxuICAgICAgICBjb29raWVOYW1lID0gJ2VtZXJnZW5jeS1hbGVydHMnICsgaWQsXHJcbiAgICAgICAgY29va2llVmFsdWUgPSBjb29raWUuZ2V0Q29va2llKGNvb2tpZU5hbWUpLFxyXG4gICAgICAgICRidXR0b24gPSAkZWwuZmluZCgnLmpzLWFjY29yZGlvbi1saW5rIGJ1dHRvbicpO1xyXG5cclxuICAgICRidXR0b24ub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgIC8vIGNsaWNraW5nIHRoaXMgbGluayBhbHNvIHRyaWdnZXJzIHRoZSBhY2NvcmRpb24gY2xpY2tcclxuICAgICAgLy8gdG9nZ2xlIHRoZSBjdXJyZW50IHN0YXRlXHJcbiAgICAgIG9wZW4gPSAhb3BlbjtcclxuICAgICAgLy8gdXBkYXRlIG9wZW4vY2xvc2Ugc3RhdGUgY29va2llXHJcbiAgICAgIC8vIGxlYXZlIG9mZiB0aGlyZCBhcmd1bWVudCB0byBtYWtlIGl0IGV4cGlyZSBvbiBzZXNzaW9uXHJcbiAgICAgIGNvb2tpZS5zZXRDb29raWUoY29va2llTmFtZSxvcGVuKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIGlmIHRoZSB1c2VyIGhhcyBjbG9zZWQgdGhlIGFsZXJ0cyBvbiBhIHByZXZpb3VzIHBhZ2VcclxuICAgIGlmKHR5cGVvZihjb29raWVWYWx1ZSkgIT09ICd1bmRlZmluZWQnICYmIGNvb2tpZVZhbHVlID09PSAnZmFsc2UnKSB7XHJcbiAgICAgIG9wZW4gPSBmYWxzZTtcclxuICAgICAgLy8gc2V0IHRoZSBzdGF0ZSBvZiBhcmlhLWV4cGFuZGVkXHJcbiAgICAgICRidXR0b24uYXR0cignYXJpYS1leHBhbmRlZCcsIG9wZW4pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEVtZXJnZW5jeSBBbGVydHMgbG9hZHMgY2xvc2VkIHNvIGV4cGFuZCBpdC5cclxuICAgIGlmKG9wZW4pIHtcclxuICAgICAgb3BlbiA9IGZhbHNlOyAvLyBjbGlja2luZyB0aGUgbGluayBzd2FwcyB0aGUgdmFsdWVcclxuICAgICAgJGJ1dHRvbi5maXJzdCgpLnRyaWdnZXIoJ2NsaWNrJyk7XHJcbiAgICB9XHJcblxyXG4gIH0pO1xyXG59KHdpbmRvdyxkb2N1bWVudCxqUXVlcnkpO1xyXG4iLCJpbXBvcnQgY2hlY2tNb2JpbGUgZnJvbSBcIi4uL2hlbHBlcnMvY3NzQ29udHJvbENvZGUuanNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICh3aW5kb3csZG9jdW1lbnQsJCx1bmRlZmluZWQpIHtcclxuXHJcbiAgJCgnLmpzLWZvb3Rub3RlJykuZWFjaChmdW5jdGlvbigpe1xyXG4gICAgbGV0ICRlbCA9ICQodGhpcyksXHJcbiAgICAgICAgJGxpbmsgPSAkZWwuZmluZChcIi5qcy1mb290bm90ZS1saW5rXCIpLFxyXG4gICAgICAgICRtZXNzYWdlTGluayA9ICRsaW5rLmNsb25lKCksXHJcbiAgICAgICAgJHJ0ZWxpbmsgPSAkKCRsaW5rLmF0dHIoJ2hyZWYnKSksXHJcbiAgICAgICAgaXNNb2JpbGUgPSBjaGVja01vYmlsZSgkZWwpO1xyXG5cclxuICAgICRtZXNzYWdlTGluay50ZXh0KCcnKTtcclxuXHJcbiAgICAkZWwuZmluZChcIi5qcy1mb290bm90ZS1tZXNzYWdlIHA6bGFzdC1jaGlsZFwiKS5hcHBlbmQoJG1lc3NhZ2VMaW5rKTtcclxuXHJcbiAgICAkKHdpbmRvdykucmVzaXplKGZ1bmN0aW9uKCkge1xyXG4gICAgICBpc01vYmlsZSA9IGNoZWNrTW9iaWxlKCRlbCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkZWwub24oJ2NsaWNrJywnLmpzLWZvb3Rub3RlLWxpbmsnLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgIGxldCB0YXJnZXQgPSAkKHRoaXMpLmF0dHIoJ2hyZWYnKTtcclxuICAgICAgbGV0IHBvc2l0aW9uID0gZ2V0UG9zaXRpb24oJCh0YXJnZXQpLnBhcmVudCgpKTtcclxuICAgICAgXHJcbiAgICAgIHNjcm9sbFRvKHBvc2l0aW9uLnRvcCwgdGFyZ2V0KTtcclxuICAgIH0pO1xyXG5cclxuICAgICRydGVsaW5rLmNsaWNrKGZ1bmN0aW9uKGUpIHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgbGV0IHRhcmdldCA9ICQodGhpcykuYXR0cignaHJlZicpO1xyXG4gICAgICBsZXQgcG9zaXRpb24gPSBnZXRQb3NpdGlvbigkKHRhcmdldCkpO1xyXG4gICAgICBcclxuICAgICAgc2Nyb2xsVG8ocG9zaXRpb24udG9wLCB0YXJnZXQpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0UG9zaXRpb24oJHRhcmdldCkge1xyXG4gICAgICBsZXQgcG9zID0gJHRhcmdldC5vZmZzZXQoKSB8fCAwO1xyXG5cclxuICAgICAgaWYoaXNNb2JpbGUpIHtcclxuICAgICAgICBsZXQgaGVhZGVySGVpZ2h0ID0gJCgnLmpzLXN0aWNreS1oZWFkZXInKS5oZWlnaHQoKSB8fCAwO1xyXG4gICAgICAgIGxldCBuYXZIZWlnaHQgPSAkKFwiLmpzLXNjcm9sbC1hbmNob3JzXCIpLmhlaWdodCgpIHx8IDA7XHJcblxyXG4gICAgICAgIHBvcy50b3AgPSBwb3MudG9wIC0gaGVhZGVySGVpZ2h0IC0gbmF2SGVpZ2h0O1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gcG9zO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNjcm9sbFRvKHBvc2l0aW9uLCBmb2N1cykge1xyXG4gICAgICAkKFwiaHRtbCxib2R5XCIpLnN0b3AodHJ1ZSx0cnVlKS5hbmltYXRlKHtzY3JvbGxUb3A6cG9zaXRpb259LCAnNzUwJywgZnVuY3Rpb24oKXtcclxuICAgICAgICBpZihmb2N1cykge1xyXG4gICAgICAgICAgJChmb2N1cykuZm9jdXMoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59KHdpbmRvdyxkb2N1bWVudCxqUXVlcnkpO1xyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAod2luZG93LGRvY3VtZW50LCQsdW5kZWZpbmVkKSB7XHJcblxyXG4gICQoJ3RleHRhcmVhW21heGxlbmd0aF0nKS5lYWNoKGZ1bmN0aW9uKCl7XHJcbiAgICBjb25zdCAkZWwgPSAkKHRoaXMpO1xyXG4gICAgY29uc3QgbWF4bGVuZ3RoID0gJGVsLmF0dHIoJ21heGxlbmd0aCcpO1xyXG5cclxuICAgIGxldCByZW1haW5pbmcgPSBtYXhsZW5ndGggLSAkZWwudmFsKCkubGVuZ3RoO1xyXG4gICAgbGV0IG1lc3NhZ2UgPSBgJHtyZW1haW5pbmd9LyR7bWF4bGVuZ3RofWA7XHJcblxyXG4gICAgJGVsLndyYXAoJzxkaXYgY2xhc3M9XCJtYV9fdGV4dGFyZWFfX3dyYXBwZXJcIj48L2Rpdj4nKTtcclxuXHJcbiAgICAkZWwucGFyZW50KCkuYXR0cignZGF0YS1jaGFyLWxlZnQnLG1lc3NhZ2UpO1xyXG5cclxuICAgICRlbC5vbigna2V5dXAgbW91c2V1cCBibHVyJywgZnVuY3Rpb24oKXtcclxuICAgICAgcmVtYWluaW5nID0gbWF4bGVuZ3RoIC0gJGVsLnZhbCgpLmxlbmd0aDtcclxuICAgICAgbWVzc2FnZSA9IGAke3JlbWFpbmluZ30vJHttYXhsZW5ndGh9YDtcclxuICAgICAgJGVsLnBhcmVudCgpLmF0dHIoJ2RhdGEtY2hhci1sZWZ0JyxtZXNzYWdlKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuICAvLyBudW1iZXIgcmVzdHJpY3RlZCBpbnB1dCBiYXNlZCBvbiBpdCdzIHBhdHRlcm4gKHRoaXMgbXVzdCBydW4gcHJpb3IgdG8gdHlwZT1cIm51bWJlclwiKVxyXG4gICQoJ2lucHV0W3R5cGU9XCJ0ZXh0XCJdW3BhdHRlcm49XCJbMC05XSpcIl0nKS5vbigna2V5ZG93bicsIGZ1bmN0aW9uKGUpe1xyXG4gICAgLy8gQWxsb3c6IGRlbHRlKDQ2KSwgYmFja3NwYWNlKDgpLCB0YWIoOSksIGVzY2FwZSgyNyksIGVudGVyKDEzKSBhbmQgc3BhY2UoMzIpKVxyXG4gICAgaWYgKCQuaW5BcnJheShlLmtleUNvZGUsIFs0NiwgOCwgOSwgMjcsIDEzLCAzMl0pICE9PSAtMSB8fFxyXG4gICAgICAgICAvLyBBbGxvdzogQ3RybC9jbWQrQVxyXG4gICAgICAgIChlLmtleUNvZGUgPT0gNjUgJiYgKGUuY3RybEtleSA9PT0gdHJ1ZSB8fCBlLm1ldGFLZXkgPT09IHRydWUpKSB8fFxyXG4gICAgICAgICAvLyBBbGxvdzogQ3RybC9jbWQrQ1xyXG4gICAgICAgIChlLmtleUNvZGUgPT0gNjcgJiYgKGUuY3RybEtleSA9PT0gdHJ1ZSB8fCBlLm1ldGFLZXkgPT09IHRydWUpKSB8fFxyXG4gICAgICAgICAvLyBBbGxvdzogQ3RybC9jbWQrWFxyXG4gICAgICAgIChlLmtleUNvZGUgPT0gODggJiYgKGUuY3RybEtleSA9PT0gdHJ1ZSB8fCBlLm1ldGFLZXkgPT09IHRydWUpKSB8fFxyXG4gICAgICAgICAvLyBBbGxvdzogaG9tZSwgZW5kLCBsZWZ0LCByaWdodFxyXG4gICAgICAgIChlLmtleUNvZGUgPj0gMzUgJiYgZS5rZXlDb2RlIDw9IDM5KSkge1xyXG4gICAgICAgICAgICAgLy8gbGV0IGl0IGhhcHBlbiwgZG9uJ3QgZG8gYW55dGhpbmdcclxuICAgICAgICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIC8vIEVuc3VyZSB0aGF0IGl0IGlzIGEgbnVtYmVyIGFuZCBzdG9wIHRoZSBrZXlwcmVzc1xyXG4gICAgaWYgKChlLnNoaWZ0S2V5IHx8IChlLmtleUNvZGUgPCA0OCB8fCBlLmtleUNvZGUgPiA1NykpICYmIChlLmtleUNvZGUgPCA5NiB8fCBlLmtleUNvZGUgPiAxMDUpKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICAvLyBudW1iZXIgaW5wdXQgdHlwZVxyXG4gICQoJ2lucHV0W3R5cGU9XCJudW1iZXJcIl0sIC5qcy1pbnB1dC1udW1iZXInKS5lYWNoKGZ1bmN0aW9uKCl7XHJcbiAgICBjb25zdCAkZWwgPSAkKHRoaXMpO1xyXG4gICAgY29uc3QgJHBsdXMgPSAkKCc8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBhcmlhLWxhYmVsPVwiaW5jcmVhc2UgdmFsdWVcIiBjbGFzcz1cIm1hX19pbnB1dC1udW1iZXJfX3BsdXNcIj48L2J1dHRvbj4nKTtcclxuICAgIGNvbnN0ICRtaW51cyA9ICQoJzxidXR0b24gdHlwZT1cImJ1dHRvblwiIGFyaWEtbGFiZWw9XCJkZWNyZWFzZSB2YWx1ZVwiIGNsYXNzPVwibWFfX2lucHV0LW51bWJlcl9fbWludXNcIj48L2J1dHRvbj4nKTtcclxuXHJcbiAgICBsZXQgdmFsdWUgPSAkZWwudmFsKCk7XHJcblxyXG4gICAgLy8gaWYgdGhlIGlucHV0IGlzIG5vdCBhbiBodG1sIGlucHV0IGFuZCBrZXkgcmVzdHJpY3Rpb25zXHJcbiAgICBpZigkZWwuYXR0cigndHlwZScpICE9PSBcIm51bWJlclwiKSB7XHJcbiAgICAgICRlbC5vbigna2V5ZG93bicsIGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgIC8vIEFsbG93OiBkZWx0ZSg0NiksIGJhY2tzcGFjZSg4KSwgdGFiKDkpLCBlc2NhcGUoMjcpLCBlbnRlcigxMykgYW5kIC4oMTEwICYgMTkwKSlcclxuICAgICAgICBpZiAoJC5pbkFycmF5KGUua2V5Q29kZSwgWzQ2LCA4LCA5LCAyNywgMTMsIDExMCwgMTkwXSkgIT09IC0xIHx8XHJcbiAgICAgICAgICAgICAvLyBBbGxvdzogQ3RybC9jbWQrQVxyXG4gICAgICAgICAgICAoZS5rZXlDb2RlID09IDY1ICYmIChlLmN0cmxLZXkgPT09IHRydWUgfHwgZS5tZXRhS2V5ID09PSB0cnVlKSkgfHxcclxuICAgICAgICAgICAgIC8vIEFsbG93OiBDdHJsL2NtZCtDXHJcbiAgICAgICAgICAgIChlLmtleUNvZGUgPT0gNjcgJiYgKGUuY3RybEtleSA9PT0gdHJ1ZSB8fCBlLm1ldGFLZXkgPT09IHRydWUpKSB8fFxyXG4gICAgICAgICAgICAgLy8gQWxsb3c6IEN0cmwvY21kK1hcclxuICAgICAgICAgICAgKGUua2V5Q29kZSA9PSA4OCAmJiAoZS5jdHJsS2V5ID09PSB0cnVlIHx8IGUubWV0YUtleSA9PT0gdHJ1ZSkpIHx8XHJcbiAgICAgICAgICAgICAvLyBBbGxvdzogaG9tZSwgZW5kLCBsZWZ0LCByaWdodFxyXG4gICAgICAgICAgICAoZS5rZXlDb2RlID49IDM1ICYmIGUua2V5Q29kZSA8PSAzOSkpIHtcclxuICAgICAgICAgICAgICAgICAvLyBsZXQgaXQgaGFwcGVuLCBkb24ndCBkbyBhbnl0aGluZ1xyXG4gICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gRW5zdXJlIHRoYXQgaXQgaXMgYSBudW1iZXIgYW5kIHN0b3AgdGhlIGtleXByZXNzXHJcbiAgICAgICAgaWYgKChlLnNoaWZ0S2V5IHx8IChlLmtleUNvZGUgPCA0OCB8fCBlLmtleUNvZGUgPiA1NykpICYmIChlLmtleUNvZGUgPCA5NiB8fCBlLmtleUNvZGUgPiAxMDUpKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgICRwbHVzLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgIGxldCB2YWx1ZSA9IHBhcnNlSW50KCRlbC52YWwoKS50cmltKCksMTApO1xyXG5cclxuICAgICAgaWYodmFsdWUgIT09IHZhbHVlKSB7XHJcbiAgICAgICAgdmFsdWUgPSAwO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAkZWwudmFsKHZhbHVlICsgMSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkbWludXMub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgICAgbGV0IHZhbHVlID0gcGFyc2VJbnQoJGVsLnZhbCgpLDEwKTtcclxuICAgICAgXHJcbiAgICAgIGlmKHZhbHVlICE9PSB2YWx1ZSkge1xyXG4gICAgICAgIHZhbHVlID0gMDtcclxuICAgICAgfVxyXG4gICAgICAgICAgIFxyXG4gICAgICAkZWwudmFsKHZhbHVlIC0gMSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkZWwud3JhcCgnPGRpdiBjbGFzcz1cIm1hX19pbnB1dC1udW1iZXJcIj48L2Rpdj4nKTtcclxuXHJcbiAgICAkZWwucGFyZW50KCkuYXBwZW5kKCRwbHVzLCRtaW51cyk7XHJcbiAgfSk7XHJcblxyXG5cclxufSh3aW5kb3csZG9jdW1lbnQsalF1ZXJ5KTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHdpbmRvdyxkb2N1bWVudCwkLHVuZGVmaW5lZCkge1xyXG5cclxuICAkKCdmb3JtJykuZWFjaChmdW5jdGlvbigpe1xyXG4gICAgbGV0ICRmb3JtID0gJCh0aGlzKSxcclxuICAgICAgICByZXF1aXJlZEZpZWxkcyA9IFtdLFxyXG4gICAgICAgICRlcnJvckxpc3QgPSAkZm9ybS5maW5kKCcuanMtZXJyb3ItbGlzdCcpO1xyXG5cclxuICAgIC8vIGZpbmQgYWxsIHJlcXVpcmVkIGZpZWxkc1xyXG4gICAgJCgnLmpzLWlzLXJlcXVpcmVkJykuZWFjaChmdW5jdGlvbigpe1xyXG4gICAgICBsZXQgJGZpZWxkID0gJCh0aGlzKSxcclxuICAgICAgICAgIHR5cGUgPSAkZmllbGQuZGF0YSgndHlwZScpLFxyXG4gICAgICAgICAgdmFsdWUgPSAkZmllbGQudmFsKCksXHJcbiAgICAgICAgICB2YWxpZCA9IHZhbGlkYXRlKHZhbHVlLHR5cGUpO1xyXG5cclxuICAgICAgcmVxdWlyZWRGaWVsZHMucHVzaCh7dHlwZSx2YWxpZCwkZWw6JGZpZWxkfSk7XHJcblxyXG4gICAgICAkKHRoaXMpLmRhdGEoJ2luZGV4JyxyZXF1aXJlZEZpZWxkcy5sZW5ndGgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gaWYgdGhlcmUgYXJlbid0IGFueSByZXF1aXJlZCBmaWVsZHMsIGRvbid0IGRvIGFueXRoaW5nXHJcbiAgICBpZihyZXF1aXJlZEZpZWxkcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIC8vICRmb3JtLm9uKCdzdWJtaXQnLCBmdW5jdGlvbihlKXtcclxuICAgIC8vICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgLy8gfSk7XHJcblxyXG4gICAgJGZvcm0uZmluZCgnYnV0dG9uW3R5cGU9XCJzdWJtaXRcIl0sIGlucHV0W3R5cGU9XCJzdWJtaXRcIl0nKS5vbignY2xpY2snLGZ1bmN0aW9uKGUpe1xyXG4gICAgICBsZXQgc3VibWl0Rm9ybSA9IHRydWU7XHJcblxyXG4gICAgICAvLyB2YWxpZGF0ZSBlYWNoIHJlcXVpcmVkIGZpZWxkXHJcbiAgICAgIHJlcXVpcmVkRmllbGRzLmZvckVhY2goZnVuY3Rpb24oaXRlbSkge1xyXG4gICAgICAgIGxldCB2YWx1ZSA9IGl0ZW0uJGVsLnZhbCgpO1xyXG5cclxuICAgICAgICBpdGVtLnZhbGlkID0gdmFsaWRhdGUodmFsdWUsaXRlbS50eXBlKTtcclxuXHJcbiAgICAgICAgaWYoaXRlbS52YWxpZCkge1xyXG4gICAgICAgICAgY2xlYXJFcnJvcihpdGVtLiRlbCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHN1Ym1pdEZvcm0gPSBmYWxzZTtcclxuICAgICAgICAgIGFkZEVycm9yKGl0ZW0uJGVsKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaWYoIXN1Ym1pdEZvcm0pIHtcclxuICAgICAgICAvLyBwcmV2ZW50IHRoZSBmb3JtIGZyb20gc3VibWl0dGluZ1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAvLyBzaG93IHRoZSBmb3JtIGVycm9yIG1lc3NhZ2UgXHJcbiAgICAgICAgJGZvcm0uYWRkQ2xhc3MoJ2hhcy1lcnJvcicpO1xyXG4gICAgICAgIC8vIHNjcm9sbCB1cCB0byB0aGUgZXJyb3IgbWVzc2FnZVxyXG4gICAgICAgIGxldCBwb3NpdGlvbiA9ICRmb3JtLm9mZnNldCgpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIHNjcm9sbCB0byB0aGUgdG9wIG9mIHRoZSBmb3JtIHdoZXJlIHRoZSBsaXN0IG9mIGVycm9ycyBzaG91bGQgYmVcclxuICAgICAgICAvLyB1c2luZyAxMDBweCBvZmZzZXQgdG8gY29tcGVuc3RhdGUgZm9yIHBvc3NpYmxlIHN0aWNreSBoZWFkZXJzXHJcbiAgICAgICAgJChcImh0bWwsYm9keVwiKS5zdG9wKHRydWUsdHJ1ZSkuYW5pbWF0ZSh7c2Nyb2xsVG9wOnBvc2l0aW9uLnRvcCAtIDEwMH0sICc3NTAnLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgLy8gYnJpbmcgZm9jdXMgdG8gdGhlIGl0ZW0gd2UganVzdCBzY3JvbGxlZCB0b1xyXG4gICAgICAgICAgJGVycm9yTGlzdC5mb2N1cygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbiAgLy8gcmVjZWl2ZXMgdGhlIGpxdWVyeSBvYmplY3Qgb2YgdGhlIGlucHV0XHJcbiAgZnVuY3Rpb24gY2xlYXJFcnJvcigkZWwpe1xyXG4gICAgJGVsLnJlbW92ZUNsYXNzKCdoYXMtZXJyb3InKTtcclxuICAgICRlbC5wcmV2KCcubWFfX2Vycm9yLW1zZycpLnJlbW92ZUNsYXNzKCdoYXMtZXJyb3InKTtcclxuICB9XHJcblxyXG4gIC8vIHJlY2VpdmVzIHRoZSBqcXVlcnkgb2JqZWN0IG9mIHRoZSBpbnB1dFxyXG4gIGZ1bmN0aW9uIGFkZEVycm9yKCRlbCkge1xyXG4gICAgJGVsLmFkZENsYXNzKCdoYXMtZXJyb3InKTtcclxuICAgICRlbC5wcmV2KCcubWFfX2Vycm9yLW1zZycpLmFkZENsYXNzKCdoYXMtZXJyb3InKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHZhbGlkYXRlKHZhbHVlLHR5cGU9J3RleHQnKXtcclxuICAgIGxldCB2YWxpZCA9IGZhbHNlO1xyXG5cclxuICAgIHN3aXRjaCh0eXBlKSB7XHJcbiAgICAgIGNhc2UgJ2VtYWlsJzpcclxuICAgICAgICB2YWxpZCA9ICEhKHZhbHVlLm1hdGNoKC9bQS1aMC05Ll8lKy1dK0BbQS1aMC05Li1dK1xcLltBLVpdKy9pKSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgdmFsaWQgPSB2YWx1ZS5sZW5ndGggIT09IDA7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHZhbGlkO1xyXG4gIH1cclxuXHJcbn0od2luZG93LGRvY3VtZW50LGpRdWVyeSk7XHJcbiIsImltcG9ydCBnZXRUZW1wbGF0ZSBmcm9tIFwiLi4vaGVscGVycy9nZXRIYW5kbGViYXJUZW1wbGF0ZS5qc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHdpbmRvdyxkb2N1bWVudCwkLHVuZGVmaW5lZCkge1xyXG4gIC8vIE9ubHkgcnVuIHRoaXMgY29kZSBpZiB0aGVyZSBpcyBhIGdvb2dsZSBtYXAgY29tcG9uZW50IG9uIHRoZSBwYWdlLlxyXG4gIGlmKCEkKCcuanMtZ29vZ2xlLW1hcCcpLmxlbmd0aCB8fCB0eXBlb2YgbWEuZ29vZ2xlTWFwRGF0YSA9PT0gJ3VuZGVmaW5lZCcpe1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLy8gSW5pdGlhbGl6ZSBnbG9iYWwgKGF0IGNvbXBvbmVudCBzY29wZSkgbWFwIHByb3BlcnRpZXNcclxuICBsZXQgbWF4ID0gZmFsc2UsIC8vIE1heGltdW0gbnVtYmVyIG9mIG1hcCBtYXJrZXJzIHBlciBtYXAsIGNhbiBiZSB1cGRhdGVkIGluc3RhbmNlXHJcbiAgICBtYXBzSW5pdGlhbGl6ZWQgPSBmYWxzZTsgLy8gRmxhZyB0byBzZXQgdG8gdHJpZ2dlciBjbGVhckludGVydmFsKGNoZWNrRm9yR29vZ2xlTWFwcylcclxuXHJcbiAgLyoqXHJcbiAgICogVGVzdCBmb3IgcHJlc2VuY2Ugb2YgZ29vZ2xlIG1hcHMgZGVmYXVsdCBsaWJyYXJ5ICh3aXRob3V0IGdlb2NvZGUsIHBsYWNlcywgZXRjLikgdW50aWwgd2UgZmluZCBpdC5cclxuICAgKiBMb2FkZWQgaW4gX21ldGEvXzAxLmZvb3QudHdpZyB3aXRoIHN0YXRpYyBhcGkga2V5XHJcbiAgICogQHRvZG8gc2V0IHVwIGNvbmZpZyB0byBwdWxsIGluIGR5bmFtaWMgYXBpIGtleVxyXG4gICAqL1xyXG4gIGxldCBjaGVja0Zvckdvb2dsZU1hcHMgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcclxuICAgIGlmICh3aW5kb3cuZ29vZ2xlICYmIHdpbmRvdy5nb29nbGUubWFwcyAmJiAhbWFwc0luaXRpYWxpemVkKSB7XHJcbiAgICAgIGluaXRNYXBzKCk7XHJcbiAgICB9XHJcbiAgfSwgMTAwKTtcclxuXHJcbiAgLy8gU3RvcCBjaGVja2luZyBmb3IgZ29vZ2xlIG1hcHMgbGlicmFyeSBhZnRlciAyIG1pbnV0ZXMuXHJcbiAgbGV0IHN0b3BDaGVja2luZyA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICBjbGVhckludGVydmFsKGNoZWNrRm9yR29vZ2xlTWFwcyk7XHJcbiAgfSwgMiAqIDYwICogMTAwMCk7XHJcblxyXG4gIC8vIEluaXRpYWxpemUgdGhlIG1hcFxyXG4gIGZ1bmN0aW9uIGluaXRNYXBzICgpIHtcclxuICAgIC8vIFN0b3AgY2hlY2tpbmcgZm9yIGdvb2dsZSBtYXBzIGxpYnJhcnkuXHJcbiAgICBtYXBzSW5pdGlhbGl6ZWQgPSB0cnVlO1xyXG4gICAgY2xlYXJJbnRlcnZhbChjaGVja0Zvckdvb2dsZU1hcHMpO1xyXG4gICAgY2xlYXJUaW1lb3V0KHN0b3BDaGVja2luZyk7XHJcblxyXG4gICAgJChcIi5qcy1nb29nbGUtbWFwXCIpLmVhY2goZnVuY3Rpb24oaSkge1xyXG4gICAgICBjb25zdCAkZWwgPSAkKHRoaXMpO1xyXG4gICAgICBtYXggPSBtYS5nb29nbGVNYXBEYXRhW2ldLm1heEl0ZW1zID8gbWEuZ29vZ2xlTWFwRGF0YVtpXS5tYXhJdGVtcyA6IG1hLmdvb2dsZU1hcERhdGFbaV0ubWFya2Vycy5sZW5ndGg7XHJcblxyXG4gICAgICAvLyBHZXQgdGhlIG1hcHMgZGF0YSAodGhpcyBjb3VsZCBiZSByZXBsYWNlZCB3aXRoIGFuIGFwaSlcclxuICAgICAgY29uc3QgcmF3RGF0YSA9IG1hLmdvb2dsZU1hcERhdGFbaV07IC8vIERhdGEgb2JqZWN0IGNyZWF0ZWQgaW4gQG1vbGVjdWxlcy9nb29nbGUtbWFwLnR3aWdcclxuXHJcbiAgICAgIC8vICoqKiBDcmVhdGUgdGhlIE1hcCAqKiogLy9cclxuICAgICAgLy8gTWFwIGRlZmF1bHQgY29uZmlnLlxyXG4gICAgICBjb25zdCBpbml0TWFwRGF0YSA9IHtcclxuICAgICAgICBzY3JvbGx3aGVlbDogZmFsc2VcclxuICAgICAgfTtcclxuICAgICAgLy8gQ3JlYXRlIG1hcCBkYXRhIGJ5IGNvbWJpbmluZyB0aGUgcmF3RGF0YSB3aXRoIHRoZSBkZWZhdWx0cy5cclxuICAgICAgY29uc3QgbWFwRGF0YSA9IE9iamVjdC5hc3NpZ24oe30sIHJhd0RhdGEubWFwLCBpbml0TWFwRGF0YSk7XHJcbiAgICAgIC8vIENyZWF0ZSBnb29nbGUgbWFwIG9iamVjdCBhc3NpZ25lZCB0byB0aGlzIGNvbXBvbmVudCBpbnN0YW5jZSB3aXRoIG1hcCBkYXRhLlxyXG4gICAgICBjb25zdCBtYXAgPSBuZXcgZ29vZ2xlLm1hcHMuTWFwKHRoaXMsIG1hcERhdGEpO1xyXG4gICAgICAvLyBJbml0aWFsaXplIGdsb2JhbCBtYXJrZXJzLCBtYXAgYm91bmRzLlxyXG4gICAgICBsZXQgYm91bmRzID0gbmV3IGdvb2dsZS5tYXBzLkxhdExuZ0JvdW5kcygpO1xyXG4gICAgICAvLyBJbml0aWFsaXplIGFsbCBtYXJrZXJzXHJcbiAgICAgIGxldCBtYXJrZXJzID0gaW5pdE1hcmtlcnMobWFwLCByYXdEYXRhLm1hcmtlcnMpO1xyXG4gICAgICAvLyBBZGQgdXAgdG8gbWF4IG1hcmtlcnMgdG8gdGhlIG1hcCwgem9vbSBtYXAgdG8gZml0IGFsbCBib3VuZHNcclxuICAgICAgYWRkTWFya2Vyc1RvTWFwKG1hcmtlcnMsIG1hcCwgYm91bmRzKTtcclxuXHJcbiAgICAgIC8vIFRyaWdnZXIgbWFwIGluaXRpYWxpemVkIGV2ZW50LCBicm9hZGNhc3QgbWFzdGVyIG1hcmtlcnMuXHJcbiAgICAgICRlbC50cmlnZ2VyKCdtYTpHb29nbGVNYXA6TWFwSW5pdGlhbGl6ZWQnLCBbbWFya2Vyc10pO1xyXG5cclxuICAgICAgLy8gQWRkIGtleWJvYXJkIG5hdmlnYXRpb24gb25seSBhZnRlciB0aGUgbWFwIGlzIHJlbmRlcmVkIChiZWNvbWluZyBpZGxlKS5cclxuICAgICAgZ29vZ2xlLm1hcHMuZXZlbnQuYWRkTGlzdGVuZXJPbmNlKG1hcCwgJ2lkbGUnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICBsZXQgJG1hcEl0ZW1zID0gJChcIi5qcy1nb29nbGUtbWFwXCIpLmZpbmQoXHJcbiAgICAgICAgICAnZGl2W3RpdGxlPVwiU2hvdyBzdHJlZXQgbWFwXCJdLCcgK1xyXG4gICAgICAgICAgJ2Rpdlt0aXRsZT1cIlNob3cgc3RyZWV0IG1hcCB3aXRoIHRlcnJhaW5cIl0sJyArXHJcbiAgICAgICAgICAnZGl2W3RpdGxlPVwiU2hvdyBzYXRlbGxpdGUgaW1hZ2VyeVwiXSwnICtcclxuICAgICAgICAgICdkaXZbdGl0bGU9XCJab29tIGluIHRvIHNob3cgNDUgZGVncmVlIHZpZXdcIl0sJyArXHJcbiAgICAgICAgICAnZGl2W3RpdGxlPVwiU2hvdyBpbWFnZXJ5IHdpdGggc3RyZWV0IG5hbWVzXCJdLCcgK1xyXG4gICAgICAgICAgJ2Rpdlt0aXRsZT1cIlBhbiB1cFwiXSwnICtcclxuICAgICAgICAgICdkaXZbdGl0bGU9XCJQYW4gZG93blwiXSwnICtcclxuICAgICAgICAgICdkaXZbdGl0bGU9XCJQYW4gbGVmdFwiXSwnICtcclxuICAgICAgICAgICdkaXZbdGl0bGU9XCJQYW4gcmlnaHRcIl0sJyArXHJcbiAgICAgICAgICAnZGl2W3RpdGxlPVwiUmV0dXJuIHRvIHRoZSBsYXN0IHJlc3VsdFwiXSwnICtcclxuICAgICAgICAgICdkaXZbdGl0bGU9XCJab29tIGluXCJdLCcgK1xyXG4gICAgICAgICAgJ2Rpdlt0aXRsZT1cIlpvb20gb3V0XCJdLCcgK1xyXG4gICAgICAgICAgJ2ltZ1t0aXRsZT1cIlJvdGF0ZSBtYXAgOTAgZGVncmVlc1wiXSwnICtcclxuICAgICAgICAgICcuZ21ub3ByaW50IGFyZWEnXHJcbiAgICAgICAgKTtcclxuICAgICAgICAkbWFwSXRlbXMuZWFjaChmdW5jdGlvbihpLCBvKXtcclxuICAgICAgICAgICQobykuYXR0cih7XHJcbiAgICAgICAgICAgIHJvbGU6ICdidXR0b24nLFxyXG4gICAgICAgICAgICB0YWJpbmRleDogJzAnLFxyXG4gICAgICAgICAgICAnYXJpYS1sYWJlbCc6IG8udGl0bGVcclxuICAgICAgICAgIH0pLmJpbmQoJ2tleWRvd24nLCBmdW5jdGlvbihldil7XHJcbiAgICAgICAgICAgIC8vIElmIGVudGVyIGlzIHByZXNzZWQgb24gb25lIG9mIHRoZXNlIGVsZW1lbnRzLCB0cmlnZ2VyIGEgY2xpY2sgb2YgdGhlIGVsZW1lbnQuXHJcbiAgICAgICAgICAgIGlmIChldi53aGljaCA9PSAxMyl7XHJcbiAgICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAkKG8pLnRyaWdnZXIoJ2NsaWNrJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIC8vIExpc3RlbiBmb3IgbWFwIHJlY2VudGVyIGV2ZW50XHJcbiAgICAgICRlbC5vbihcIm1hOkdvb2dsZU1hcDpNYXBSZWNlbnRlclwiLCBmdW5jdGlvbiAoZXZlbnQsIG1hcmtlckluZGV4KSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBtYXJrZXJzW21hcmtlckluZGV4XSA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgbWFya2VyID0gbWFya2Vyc1ttYXJrZXJJbmRleF07XHJcbiAgICAgICAgLy8gY2VudGVyIHRoZSBtYXAgb24gdGhpcyBtYXJrZXJcclxuICAgICAgICBtYXAuc2V0Q2VudGVyKG1hcmtlci5nZXRQb3NpdGlvbigpKTtcclxuICAgICAgICAvLyBjbG9zZSBhbGwgb3BlbiBpbmZvV2luZG93c1xyXG4gICAgICAgIGZvciAobGV0IGkgaW4gbWFya2Vycykge1xyXG4gICAgICAgICAgaWYgKG1hcmtlcnNbaV0ub3Blbikge1xyXG4gICAgICAgICAgICBtYXJrZXJzW2ldLmhpZGVJbmZvKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHNob3cgdGhlIGluZm9XaW5kb3cgZm9yIHRoaXMgbWFya2VyXHJcbiAgICAgICAgbWFya2VyLnNob3dJbmZvKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgICAvLyBMaXN0ZW4gZm9yIG1hcCBtYXJrZXIgYm91bmNlIGV2ZW50XHJcbiAgICAgICRlbC5vbihcIm1hOkdvb2dsZU1hcDpNYXJrZXJCb3VuY2VcIiwgZnVuY3Rpb24oIGV2ZW50LCBtYXJrZXJJbmRleCApIHtcclxuICAgICAgICBpZih0eXBlb2YgbWFya2Vyc1ttYXJrZXJJbmRleF0gPT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IG1hcmtlciA9IG1hcmtlcnNbbWFya2VySW5kZXhdO1xyXG4gICAgICAgIC8vIGNlbnRlciBhbmQgem9vbSB0aGUgbWFwIG9uIHRoaXMgbWFya2VyXHJcbiAgICAgICAgbWFwLnNldENlbnRlcihtYXJrZXIuZ2V0UG9zaXRpb24oKSk7XHJcbiAgICAgICAgbWFwLnNldFpvb20oMTUpO1xyXG4gICAgICAgIC8vIG1ha2UgdGhlIG1hcmtlciBib3VuY2UgdGhyZWUgdGltZXNcclxuICAgICAgICBtYXJrZXIuYm91bmNlKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgICAvLyBMaXN0ZW4gZm9yIGRhdGEgY2hhbmdlIGV2ZW50IHRvIHVwZGF0ZSBtYXJrZXJzIGJ5IGZpbHRlcnMuXHJcbiAgICAgICRlbC5vbihcIm1hOkdvb2dsZU1hcDpNYXJrZXJzVXBkYXRlZFwiLCBmdW5jdGlvbiAoZSwgYXJncykge1xyXG4gICAgICAgIC8vIFVwZGF0ZSBtYXAgYmFzZWQgb24gcHJlLXNvcnRlZCBtYXJrZXJzIG9yZGVyXHJcbiAgICAgICAgbWFya2VycyA9IHVwZGF0ZU1hcEJ5TWFya2Vycyh7XHJcbiAgICAgICAgICBkYXRhTWFya2VyczogYXJncy5tYXJrZXJzLFxyXG4gICAgICAgICAgbWFwOiBtYXAsXHJcbiAgICAgICAgICBtYXJrZXJzOiBtYXJrZXJzLFxyXG4gICAgICAgICAgcGxhY2U6IGFyZ3MucGxhY2UgPyBhcmdzLnBsYWNlIDogZmFsc2VcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gaGlkZSBhbGwgaW5mbyB3aW5kb3dzXHJcbiAgICAgICAgZm9yIChsZXQgaSBpbiBtYXJrZXJzKSB7XHJcbiAgICAgICAgICBpZihtYXJrZXJzW2ldLm9wZW4pIHtcclxuICAgICAgICAgICAgbWFya2Vyc1tpXS5oaWRlSW5mbygpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldHVybnMgdGhlIGFycmF5IG9mIGluaXRpYWxpemVkIGN1cnJlbnQgbWFwIG1hcmtlcnMuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gbWFwXHJcbiAgICogIFRoZSBjdXJyZW50IG1hcCBvYmplY3QuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gbWFya2Vyc1xyXG4gICAqICBUaGUgbWFya2VycyB0byBiZSBpbml0aWFsaXplZC5cclxuICAgKlxyXG4gICAqIEByZXR1cm4ge0FycmF5fVxyXG4gICAqL1xyXG4gIGZ1bmN0aW9uIGluaXRNYXJrZXJzKG1hcCwgbWFya2Vycykge1xyXG4gICAgbGV0IGluaXRpYWxpemVkTWFya2VycyA9IFtdO1xyXG4gICAgbWFya2Vycy5mb3JFYWNoKGZ1bmN0aW9uKGRhdGEpIHtcclxuICAgICAgbGV0IG1hcmtlckRhdGEgPSB7XHJcbiAgICAgICAgcG9zaXRpb246IG5ldyBnb29nbGUubWFwcy5MYXRMbmcoe1xyXG4gICAgICAgICAgbGF0OiBkYXRhLnBvc2l0aW9uLmxhdCxcclxuICAgICAgICAgIGxuZzogZGF0YS5wb3NpdGlvbi5sbmdcclxuICAgICAgICB9KSxcclxuICAgICAgICBsYWJlbDogZGF0YS5sYWJlbCxcclxuICAgICAgICBpbmZvV2luZG93OiBkYXRhLmluZm9XaW5kb3csXHJcbiAgICAgICAgdGl0bGU6ICdNYXJrZXI6ICcgKyBkYXRhLmluZm9XaW5kb3cubmFtZVxyXG4gICAgICB9O1xyXG4gICAgICBsZXQgbWFya2VyID0gIG5ldyBnb29nbGUubWFwcy5NYXJrZXIobWFya2VyRGF0YSk7XHJcbiAgICAgIGxldCBpbmZvRGF0YSA9IGluZm9UcmFuc2Zvcm0obWFya2VyRGF0YS5pbmZvV2luZG93KTtcclxuICAgICAgbGV0IGNvbXBpbGVkVGVtcGxhdGUgPSBnZXRUZW1wbGF0ZSgnZ29vZ2xlTWFwSW5mbycpO1xyXG4gICAgICBsZXQgdGVtcGxhdGUgPSBjb21waWxlZFRlbXBsYXRlKGluZm9EYXRhKTtcclxuICAgICAgbGV0IGluZm9XaW5kb3cgPSBuZXcgZ29vZ2xlLm1hcHMuSW5mb1dpbmRvdyh7XHJcbiAgICAgICAgY29udGVudDogdGVtcGxhdGVcclxuICAgICAgfSk7XHJcbiAgICAgIGxldCBtYXJrZXJCb3VuY2luZyA9IG51bGw7XHJcblxyXG4gICAgICBtYXJrZXIuYWRkTGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgICAgICAvLyBoaWRlIGFsbCBpbmZvIHdpbmRvd3NcclxuICAgICAgICBmb3IgKGxldCBpIGluIGluaXRpYWxpemVkTWFya2Vycykge1xyXG4gICAgICAgICAgaWYoaW5pdGlhbGl6ZWRNYXJrZXJzW2ldLm9wZW4pIHtcclxuICAgICAgICAgICAgaW5pdGlhbGl6ZWRNYXJrZXJzW2ldLmhpZGVJbmZvKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBzaG93IHRoaXMgaW5mbyB3aW5kb3dcclxuICAgICAgICBtYXJrZXIuc2hvd0luZm8oKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBtYXJrZXIuc2hvd0luZm8gPSAoKSA9PiB7XHJcbiAgICAgICAgaW5mb1dpbmRvdy5vcGVuKG1hcCwgbWFya2VyKTtcclxuICAgICAgICBtYXJrZXIub3BlbiA9IHRydWU7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICBtYXJrZXIuaGlkZUluZm8gPSAoKSA9PiB7XHJcbiAgICAgICAgaW5mb1dpbmRvdy5jbG9zZShtYXAsIG1hcmtlcik7XHJcbiAgICAgICAgbWFya2VyLm9wZW4gPSBmYWxzZTtcclxuICAgICAgfTtcclxuXHJcbiAgICAgIG1hcmtlci5ib3VuY2UgPSAoKSA9PiB7XHJcbiAgICAgICAgY2xlYXJUaW1lb3V0KG1hcmtlckJvdW5jaW5nKTtcclxuICAgICAgICBtYXJrZXIuc2V0QW5pbWF0aW9uKG51bGwpO1xyXG4gICAgICAgIG1hcmtlci5zZXRBbmltYXRpb24oZ29vZ2xlLm1hcHMuQW5pbWF0aW9uLkJPVU5DRSk7XHJcbiAgICAgICAgbWFya2VyQm91bmNpbmcgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgIG1hcmtlci5zZXRBbmltYXRpb24obnVsbCk7XHJcbiAgICAgICAgfSwzMDAwKTtcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGluaXRpYWxpemVkTWFya2Vycy5wdXNoKG1hcmtlcik7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gaW5pdGlhbGl6ZWRNYXJrZXJzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmV0dXJuIGZvcm1hdHRlZCBtYXJrZXIgaW5mb3dpbmRvdyBkYXRhLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIGRhdGFcclxuICAgKiAgIEluZm93aW5kb3cgZGF0YSBvYmplY3Q6XHJcbiAgICogICBcImluZm9XaW5kb3dcIjoge1xyXG4gICAqICAgICAgXCJuYW1lXCI6IFwiQXR0bGVib3JvIERpc3RyaWN0IENvdXJ0XCIsXHJcbiAgICogICAgICBcInBob25lXCI6IFwiMTUwODIyMjU5MDBcIixcclxuICAgKiAgICAgIFwiZmF4XCI6IFwiMTUwODIyMzM3MDZcIixcclxuICAgKiAgICAgIFwiZW1haWxcIjogXCJjb3VydHNAc3RhdGUubWEudXNcIixcclxuICAgKiAgICAgIFwiYWRkcmVzc1wiOiBcIjg4IE5vcnRoIE1haW4gU3RyZWV0XFxuQXR0bGVib3JvLCBNQSAwMjcwM1wiXHJcbiAgICogICB9XHJcbiAgICpcclxuICAgKiBAcmV0dXJucyB7Kn1cclxuICAgKiAgIE9iamVjdCB3aXRoIHBhc3NlZCBkYXRhIGFuZCBuZXcgaW5mb0RhdGEgcHJvcGVydHkuXHJcbiAgICovXHJcbiAgZnVuY3Rpb24gaW5mb1RyYW5zZm9ybShkYXRhKSB7XHJcbiAgICBsZXQgaW5mb0RhdGEgPSB7XHJcbiAgICAgIHBob25lRm9ybWF0dGVkOiBmb3JtYXRQaG9uZShkYXRhLnBob25lKSxcclxuICAgICAgZmF4Rm9ybWF0dGVkOiBmb3JtYXRQaG9uZShkYXRhLmZheClcclxuICAgIH07XHJcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSxkYXRhLGluZm9EYXRhKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldHVybiBwaG9uZSBudW1iZXIgZGF0YSBmb3JtYXR0ZWQgZm9yIG1hcCBtYXJrZXIuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gcGhvbmVcclxuICAgKiAgIFwiMTUwODIyMjU5MDBcIixcclxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxyXG4gICAqICAgICg1MDgpIDIyMi01OTAwXHJcbiAgICovXHJcbiAgZnVuY3Rpb24gZm9ybWF0UGhvbmUocGhvbmUpIHtcclxuICAgIGxldCBwaG9uZVRlbXAgPSBwaG9uZVswXSA9PT0gJzEnID8gcGhvbmUuc3Vic3RyaW5nKDEpIDogcGhvbmU7XHJcbiAgICByZXR1cm4gcGhvbmVUZW1wLnJlcGxhY2UoLyhcXGR7M30pKFxcZHszfSkoXFxkezR9KS8sICcoJDEpICQyLSQzJyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBMb2NhdGlvbiBsaXN0aW5nIHNwZWNpZmljIG1hcCBoZWxwZXIgZnVuY3Rpb25zXHJcbiAgICovXHJcblxyXG5cclxuICAvKipcclxuICAgKiBSZW5kZXJzIGEgbmV3IG1hcCwgd2l0aCBtYXJrZXJzICByZWZlcmVuY2UgdG8gcGFzc2VkIG1hcmtlciBvcmRlciBhbmQgbGVuZ3RoLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIGFyZ3NcclxuICAgKiAgYXJndW1lbnRzIG9iamVjdDpcclxuICAgKiAgICB7XHJcbiAgICogICAgICBkYXRhTWFya2VyczogYXJncy5tYXJrZXJzLCAvLyBzb3J0ZWQgYXJyYXkgb2YgbWFya2VycyBieSB3aXRjaCB0byBzb3J0IGFuZCBmaWx0ZXIgbWFzdGVyIG1hcmtlcnNcclxuICAgKiAgICAgIG1hcDogbWFwLCAvLyBpbml0aWFsaXplZCBtYXAgaW5zdGFuY2VcclxuICAgKiAgICAgIG1hcmtlcnM6IG1hcmtlcnMsIC8vIG1hc3RlciBsaXN0IG9mIGN1cnJlbnQgbWFwIG1hcmtlcnNcclxuICAgKiAgICAgIHBsYWNlOiBhcmdzLnBsYWNlLCAvLyBvcHRpb25hbCBsb2NhdGlvbiBmaWx0ZXIgcGxhY2UgaW5wdXRcclxuXHJcbiAgICogICAgfVxyXG4gICAqL1xyXG4gIGZ1bmN0aW9uIHVwZGF0ZU1hcEJ5TWFya2VycyhhcmdzKSB7XHJcbiAgICByZW1vdmVNYXJrZXJzRnJvbU1hcChhcmdzLm1hcmtlcnMpO1xyXG5cclxuICAgIC8vIFJlc2V0IGJvdW5kcyB0byByZW1vdmUgcHJldmlvdXMgc2VhcmNoIGxvY2F0aW9ucy5cclxuICAgIGxldCBib3VuZHMgPSBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nQm91bmRzKCk7XHJcbiAgICBpZiAoYXJncy5wbGFjZSAmJiBtYS5hdXRvY29tcGxldGUuZ2V0UGxhY2UoKSkge1xyXG4gICAgICAvLyBFbnN1cmUgdGhlIG1hcCBpbmNsdWRlcyB0aGUgcHJvdmlkZWQgbG9jYXRpb24gYmFzZWQgb24gdGhlIHBsYWNlIHZhbHVlLlxyXG4gICAgICBib3VuZHMuZXh0ZW5kKGFyZ3MucGxhY2UuZ2VvbWV0cnkubG9jYXRpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEFkZCB0aGUgbmV3IG1hcmtlcnMgdG8gdGhlIG1hcCBhbmQgc2V0IG5ldyBib3VuZHMgYmFzZWQgb24gZmlsdGVyZWQgbWFya2Vycy5cclxuICAgIGFkZE1hcmtlcnNUb01hcChhcmdzLmRhdGFNYXJrZXJzLCBhcmdzLm1hcCwgYm91bmRzKTtcclxuXHJcbiAgICAvLyBJZiB0aGVyZSBpcyBvbmx5IG9uZSBtYXJrZXIsIHpvb20gb3V0IHRvIHByb3ZpZGUgc29tZSBjb250ZXh0LlxyXG4gICAgaWYgKGFyZ3MuZGF0YU1hcmtlcnMubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgIGFyZ3MubWFwLnNldFpvb20oMTYpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBhcmdzLmRhdGFNYXJrZXJzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVtb3ZlcyBwYXNzZWQgbWFya2VyIG9iamVjdHMgZnJvbSBhIGdpdmVuIG1hcC5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBtYXJrZXJzXHJcbiAgICogICBBcnJheSBvZiBtYXAgbWFya2VyIG9iamVjdHMuXHJcbiAgICovXHJcbiAgZnVuY3Rpb24gcmVtb3ZlTWFya2Vyc0Zyb21NYXAobWFya2Vycykge1xyXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IG1hcmtlcnMubGVuZ3RoOyBpKyspe1xyXG4gICAgICBtYXJrZXJzW2ldLnNldE1hcChudWxsKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEFkZHMgbWFya2VycyB0byBhIGdpdmVuIG1hcCBhbmQgc2V0cyBib3VuZHMgYmFzZWQgb24gdGhvc2UgbWFya2Vycy5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBtYXJrZXJzXHJcbiAgICogICBJbml0aWFsaXplZCBtYXAgbWFya2VyIG9iamVjdHMgdG8gYmUgYWRkZWQuXHJcbiAgICogQHBhcmFtIG1hcFxyXG4gICAqICAgSW5pdGlhbGl6ZWQgbWFwIG9iamVjdC5cclxuICAgKiBAcGFyYW0gYm91bmRzXHJcbiAgICogICBJbml0aWFsaXplZCBtYXAgYm91bmRzIG9iamVjdC5cclxuICAgKi9cclxuICBmdW5jdGlvbiBhZGRNYXJrZXJzVG9NYXAobWFya2VycywgbWFwLCBib3VuZHMpIHtcclxuICAgIC8vIFNldCBtYXggbnVtYmVyIG9mIG1hcmtlcnMgdG8gd2hpY2hldmVyIGlzIHNtYWxsZXI6IG1heCBvciB0aGUgbnVtYmVyIG9mIG1hcmtlcnMgc2VudC5cclxuICAgIGxldCBtYXhJdGVtcyA9IG1hcmtlcnMubGVuZ3RoIDwgbWF4ID8gbWFya2Vycy5sZW5ndGggOiBtYXg7XHJcblxyXG4gICAgbWFya2Vycy5mb3JFYWNoKGZ1bmN0aW9uKG1hcmtlciwgaW5kZXgpIHtcclxuICAgICAgaWYgKGluZGV4IDwgbWF4SXRlbXMpIHtcclxuICAgICAgICBtYXJrZXIuc2V0TWFwKG1hcCk7XHJcbiAgICAgICAgLy8gRXh0ZW5kIHRoZSBib3VuZHMgdG8gaW5jbHVkZSBlYWNoIG1hcmtlcidzIHBvc2l0aW9uLlxyXG4gICAgICAgIGJvdW5kcy5leHRlbmQobWFya2VyLnBvc2l0aW9uKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICAvLyBNYWtlIHRoZSBtYXAgem9vbSB0byBmaXQgdGhlIGJvdW5kcywgc2hvd2luZyBhbGwgbG9jYXRpb25zLlxyXG4gICAgbWFwLmZpdEJvdW5kcyhib3VuZHMpO1xyXG4gIH1cclxuXHJcbn0od2luZG93LGRvY3VtZW50LGpRdWVyeSk7XHJcbiIsImltcG9ydCBjb29raWVzIGZyb20gXCIuLi9oZWxwZXJzL2Nvb2tpZXMuanNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICh3aW5kb3csZG9jdW1lbnQsJCx1bmRlZmluZWQpIHtcclxuXHJcbiAgJCgnLmpzLWhlYWRlci1hbGVydCcpLmVhY2goZnVuY3Rpb24oKXtcclxuICAgIGxldCAkZWwgPSAkKHRoaXMpLFxyXG4gICAgICAgICRsaW5rID0gJGVsLmZpbmQoJy5qcy1oZWFkZXItYWxlcnQtbGluaycpLFxyXG4gICAgICAgIGlkID0gJGVsLmRhdGEoJ2lkJyksXHJcbiAgICAgICAgY29va2llTmFtZSA9IFwiQWxlcnRcIiArIGlkLFxyXG4gICAgICAgIGNvb2tpZUV4cGlyZXMgPSAzNjUsXHJcbiAgICAgICAgY29va2llVmFsdWUgPSBjb29raWVzLmdldENvb2tpZShjb29raWVOYW1lKTtcclxuXHJcbiAgICAvLyBzaG93IGFsZXJ0IGlmIGNvb2tpZSBkb2Vzbid0IGV4aXN0XHJcbiAgICBpZihjb29raWVWYWx1ZSAhPT0gXCJoaWRlXCIpIHtcclxuICAgICAgJGVsLmZhZGVJbigpLmZhZGVPdXQoJ2Zhc3QnKS5mYWRlSW4oJ3Nsb3cnKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBoaWRlIHRoZSBhbGVydFxyXG4gICAgJGxpbmsub24oJ2NsaWNrJyxmdW5jdGlvbigpe1xyXG4gICAgICBjb29raWVzLnNldENvb2tpZShjb29raWVOYW1lLFwiaGlkZVwiLGNvb2tpZUV4cGlyZXMpO1xyXG4gICAgICAkZWwuc3RvcCh0cnVlLHRydWUpLmZhZGVPdXQoKTtcclxuICAgIH0pXHJcbiAgfSk7XHJcbn0od2luZG93LGRvY3VtZW50LGpRdWVyeSk7XHJcblxyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAod2luZG93LGRvY3VtZW50LCQsdW5kZWZpbmVkKSB7XHJcblxyXG4gICQoJy5qcy1rZXl3b3JkLXNlYXJjaCcpLmVhY2goZnVuY3Rpb24oKXtcclxuICAgIGxldCAkZWwgPSAkKHRoaXMpLFxyXG4gICAgICAgICRmb3JtID0gJGVsLmZpbmQoJ2Zvcm0nKTtcclxuXHJcbiAgICAkZm9ybS5vbignc3VibWl0JyxmdW5jdGlvbihlKXtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAkZWwuYWRkQ2xhc3MoJ2lzLWRpcnR5JylcclxuICAgIH0pO1xyXG5cclxuICAgICRmb3JtLm9uKCdyZXNldCcsZnVuY3Rpb24oKXtcclxuICAgICAgJGVsLnJlbW92ZUNsYXNzKCdpcy1kaXJ0eScpXHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbn0od2luZG93LGRvY3VtZW50LGpRdWVyeSk7XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICh3aW5kb3csZG9jdW1lbnQsJCx1bmRlZmluZWQpIHtcbiAgJCgnLmpzLWxvY2F0aW9uLWZpbHRlcnMnKS5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgbGV0ICRlbCA9ICQodGhpcyk7XG5cbiAgICAvLyBXaGVuIGdvb2dsZSBtYXAgbGlicmFyaWVzIGFyZSBsb2FkZWQsIGluaXRpYWxpemUgcGxhY2VzLmF1dG9jb21wbGV0ZSBvbiB0aGUgbG9jYXRpb24gaW5wdXQsIGlmIGl0IGV4aXN0cy5cbiAgICAkKGRvY3VtZW50KS5vbignbWE6TGlicmFyaWVzTG9hZGVkOkdvb2dsZU1hcHMnLCBmdW5jdGlvbigpIHtcbiAgICAgIGxldCAkbG9jYXRpb25GaWx0ZXIgPSAkKCcuanMtZmlsdGVyLWJ5LWxvY2F0aW9uJywgJGVsKS5maW5kKCdpbnB1dCcpO1xuICAgICAgaWYgKCRsb2NhdGlvbkZpbHRlci5sZW5ndGgpIHtcbiAgICAgICAgLy8gQ3JlYXRlIHRoZSBnb29nbGUgcGxhY2VzIGF1dG9jb21wbGV0ZSBvYmplY3QgYW5kIGFzc29jaWF0ZSBpdCB3aXRoIHRoZSB6aXAgY29kZSB0ZXh0IGlucHV0LlxuICAgICAgICBsZXQgbG9jYXRpb25JbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCRsb2NhdGlvbkZpbHRlci5hdHRyKCdpZCcpKTtcbiAgICAgICAgbGV0IGRlZmF1bHRCb3VuZHMgPSBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nQm91bmRzKG5ldyBnb29nbGUubWFwcy5MYXRMbmcoNDAuNzI3MDkzLC03My45Nzg2NCksIG5ldyBnb29nbGUubWFwcy5MYXRMbmcoNDMuMDA0Nzc4LCAtNjkuODQ1Mjk5KSk7XG5cbiAgICAgICAgLy8gU2VlIG9wdGlvbnM6IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL21hcHMvZG9jdW1lbnRhdGlvbi9qYXZhc2NyaXB0L3BsYWNlcy1hdXRvY29tcGxldGUjYWRkX2F1dG9jb21wbGV0ZVxuICAgICAgICBsZXQgb3B0aW9ucyA9IHtcbiAgICAgICAgICBib3VuZHM6IGRlZmF1bHRCb3VuZHMsXG4gICAgICAgICAgc3RyaWN0Qm91bmRzOiB0cnVlLFxuICAgICAgICAgIHR5cGVzOiBbJ2dlb2NvZGUnXSxcbiAgICAgICAgICBjb21wb25lbnRSZXN0cmljdGlvbnM6IHtjb3VudHJ5OiAndXMnfVxuICAgICAgICB9O1xuICAgICAgICBtYS5hdXRvY29tcGxldGUgPSBuZXcgZ29vZ2xlLm1hcHMucGxhY2VzLkF1dG9jb21wbGV0ZShsb2NhdGlvbklucHV0LCBvcHRpb25zKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIExpc3RlbiBmb3IgbmV3IGRhdGEgZnJvbSBhbm90aGVyIGNvbXBvbmVudCBpbnRlcmFjdGlvbiAoaS5lLiByZXN1bHRzIGhlYWRpbmcpLCB1cGRhdGUgZm9ybS5cbiAgICAkZWwub24oJ21hOkZvcm1GaWx0ZXI6RGF0YVVwZGF0ZWQnLCBmdW5jdGlvbihlLCBkYXRhKXtcbiAgICAgIHJlbmRlckZvcm0oe2NsZWFyZWRGaWx0ZXI6IGRhdGEuY2xlYXJlZEZpbHRlciwgJGZvcm06ICRlbH0pO1xuICAgIH0pO1xuXG4gICAgLy8gRG9uJ3Qgc3VibWl0IHRoZSBmb3JtIHdoZW4gYSB1c2VyIHNlbGVjdHMgdGhlIGF1dG9jb21wbGV0ZSBkcm9wZG93biBpdGVtIHdpdGggZW50ZXJcbiAgICAkZWwua2V5ZG93bihmdW5jdGlvbihlKSB7XG4gICAgICBpZiAoZS5rZXlDb2RlID09PSAxMykge1xuICAgICAgICBpZiAgKCQoZS50YXJnZXQpLmlzKCQoJy5qcy1maWx0ZXItYnktbG9jYXRpb24nLCAkZWwpLmZpbmQoJ2lucHV0JykpKSB7XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBIYW5kbGUgZ2xvYmFsIGZvcm0gc3VibWlzc2lvbi5cbiAgICAkZWwuc3VibWl0KGZ1bmN0aW9uKGUpe1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgLy8gVXBkYXRlIG1hc3RlciBkYXRhIHdpdGggdGhlIHZhcmlvdXMgZmlsdGVyIHZhbHVlcy5cbiAgICAgIGxldCBmb3JtRGF0YSA9IGdldEZvcm1EYXRhKHskZm9ybTogJCh0aGlzKX0pO1xuXG4gICAgICAvLyBUcmlnZ2VyIGxvY2F0aW9uIGxpc3RpbmcgZmlsdGVyIGV2ZW50IHdpdGggY3VycmVudCBmaWx0ZXIgdmFsdWVzLlxuICAgICAgJGVsLnRyaWdnZXIoJ21hOkxvY2F0aW9uRmlsdGVyOkZvcm1TdWJtaXR0ZWQnLCBbe2Zvcm1EYXRhOiBmb3JtRGF0YX1dKTtcbiAgICB9KTtcblxuICB9KTtcblxuICBmdW5jdGlvbiByZW5kZXJGb3JtKGFyZ3MpIHtcbiAgICBsZXQgY2xlYXJlZEZpbHRlciA9IGFyZ3MuY2xlYXJlZEZpbHRlcjtcbiAgICAvLyBUaGUgY2xlYXIgYWxsIGJ1dHRvbiB3YXMgcHJlc3NlZC5cbiAgICBpZiAoY2xlYXJlZEZpbHRlciA9PT0gXCJhbGxcIikge1xuICAgICAgY2xlYXJGb3JtKGFyZ3MpO1xuICAgIH1cbiAgICAvLyBTaW5nbGUgZmlsdGVyIGJ1dHRvbiB3YXMgcHJlc3NlZC5cbiAgICBlbHNlIHtcbiAgICAgIGNsZWFyRGVhY3RpdmF0ZWRGaWx0ZXIoYXJncyk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0Rm9ybURhdGEoYXJncykge1xuICAgIGxldCAkZm9ybSA9ICQoYXJncy4kZm9ybSksXG4gICAgICAkbG9jYXRpb24gPSAkZm9ybS5maW5kKCcuanMtZmlsdGVyLWJ5LWxvY2F0aW9uJyksXG4gICAgICAkdGFncyA9ICRmb3JtLmZpbmQoJy5qcy1maWx0ZXItYnktdGFncycpLFxuICAgICAgZm9ybURhdGEgPSBbXTtcblxuICAgIC8vIEdldCBsb2NhdGlvblxuICAgIGlmICgkbG9jYXRpb24uZmluZCgnaW5wdXQnKS5sZW5ndGgpIHtcbiAgICAgIGxldCBwbGFjZSA9ICRsb2NhdGlvbi5maW5kKCdpbnB1dCcpLnZhbCgpO1xuICAgICAgaWYgKHBsYWNlKSB7XG4gICAgICAgIGZvcm1EYXRhLnB1c2goe1xuICAgICAgICAgIHR5cGU6ICdsb2NhdGlvbicsXG4gICAgICAgICAgdGV4dDogcGxhY2UsXG4gICAgICAgICAgdmFsdWU6IHBsYWNlXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgICR0YWdzLmZpbmQoJ2lucHV0OmNoZWNrZWQnKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgZm9ybURhdGEucHVzaCh7J3R5cGUnOiAndGFnJywgJ3ZhbHVlJzogJCh0aGlzKS52YWwoKSwgJ3RleHQnOiAkKHRoaXMpLm5leHQoXCJsYWJlbFwiKS50ZXh0KCl9KTtcbiAgICB9KTtcblxuICAgIHJldHVybiBmb3JtRGF0YTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNsZWFyRGVhY3RpdmF0ZWRGaWx0ZXIoYXJncykge1xuICAgIGxldCAkZm9ybSA9ICQoYXJncy4kZm9ybSksXG4gICAgICAkcGxhY2UgPSAkZm9ybS5maW5kKCcuanMtZmlsdGVyLWJ5LWxvY2F0aW9uJyksXG4gICAgICAkdGFncyA9ICRmb3JtLmZpbmQoJy5qcy1maWx0ZXItYnktdGFncycpLFxuICAgICAgY2xlYXJlZEZpbHRlciA9IGFyZ3MuY2xlYXJlZEZpbHRlcjtcblxuICAgIC8vIElmIHRoZSBjbGVhcmVkIGZpbHRlciBidXR0b24gd2FzIGZvciBhIGxvY2F0aW9uIGZpbHRlci5cbiAgICBpZiAoY2xlYXJlZEZpbHRlci50eXBlID09PSAnbG9jYXRpb24nKSB7XG4gICAgICAkcGxhY2UuZmluZCgnaW5wdXQnKS52YWwoXCJcIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGNsZWFyZWQgZmlsdGVyIGJ1dHRvbiB3YXMgZm9yIGEgdGFnIGZpbHRlci5cbiAgICBpZiAoY2xlYXJlZEZpbHRlci50eXBlID09PSAndGFnJykge1xuICAgICAgJHRhZ3MuZmluZCgnaW5wdXRbdHlwZT1jaGVja2JveF1bdmFsdWU9JyArIGNsZWFyZWRGaWx0ZXIudmFsdWUgKyAnXScpLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gY2xlYXJGb3JtKGFyZ3MpIHtcbiAgICBsZXQgJGZvcm0gPSAkKGFyZ3MuJGZvcm0pLFxuICAgICAgJHRhZ3MgPSAkKCcuanMtZmlsdGVyLWJ5LXRhZ3MnLCAkZm9ybSksXG4gICAgICAkcGxhY2UgPSAkKCcuanMtZmlsdGVyLWJ5LWxvY2F0aW9uJywgJGZvcm0pLmZpbmQoJ2lucHV0Jyk7XG5cbiAgICAvLyBDbGVhciBsb2NhdGlvbiB0ZXh0IGlucHV0LlxuICAgIGlmICgkcGxhY2UubGVuZ3RoKSB7XG4gICAgICAkcGxhY2UudmFsKFwiXCIpO1xuICAgIH1cbiAgICAvLyBVbmNoZWNrIGFsbCBjaGVja2VkIHRhZ3MgaW5wdXRzLlxuICAgICR0YWdzLmZpbmQoJ2lucHV0OmNoZWNrZWQnKS5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xuICB9XG5cbn0od2luZG93LGRvY3VtZW50LGpRdWVyeSk7XG4iLCJpbXBvcnQgc3RpY2t5IGZyb20gXCIuLi9oZWxwZXJzL3N0aWNreS5qc1wiO1xyXG5pbXBvcnQgZ2V0VGVtcGxhdGUgZnJvbSBcIi4uL2hlbHBlcnMvZ2V0SGFuZGxlYmFyVGVtcGxhdGUuanNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICh3aW5kb3csZG9jdW1lbnQsJCx1bmRlZmluZWQpIHtcclxuICAvLyBBY3RpdmUgc3RhdGUgY2xhc3NlcyBmb3IgbG9jYXRpb24gbGlzdGluZyByb3dzLlxyXG4gIGxldCBhY3RpdmVDbGFzcyA9ICdpcy1hY3RpdmUnLFxyXG4gICAgbWFya2VyQWN0aXZlQ2xhc3MgPSAnaXMtbWFya2VyLWJvdW5jZScsXHJcbiAgICAvLyBTZWxlY3RvcnMgZm9yIGV2ZW50IGxpc3RlbmVycyBvbiBkeW5hbWljIGNvbnRlbnQuXHJcbiAgICBsb2NhdGlvbkxpc3RpbmdSb3cgPSAnLmpzLWxvY2F0aW9uLWxpc3RpbmctbGluaycsXHJcbiAgICBhY3RpdmVMb2NhdGlvbkxpc3RpbmdSb3cgPSBsb2NhdGlvbkxpc3RpbmdSb3cgKyAnLicgKyBhY3RpdmVDbGFzcyxcclxuICAgIG1hcmtlckFjdGl2ZUxvY2F0aW9uTGlzdGluZ1JvdyA9IGxvY2F0aW9uTGlzdGluZ1JvdyArICcuJyArIG1hcmtlckFjdGl2ZUNsYXNzLFxyXG4gICAgLy8gUGFyZW50IGNvbXBvbmVudCBzZWxlY3RvcnMuXHJcbiAgICBsaXN0aW5nQ29sID0gJy5qcy1sb2NhdGlvbi1saXN0aW5nLXJlc3VsdHMnLFxyXG4gICAgbGlzdGluZ1BhcmVudCA9ICcuanMtaW1hZ2UtcHJvbW9zJyxcclxuICAgIG1hcENvbCA9ICcuanMtbG9jYXRpb24tbGlzdGluZy1tYXAnO1xyXG5cclxuICAkKCcuanMtbG9jYXRpb24tbGlzdGluZycpLmVhY2goZnVuY3Rpb24oaSl7XHJcbiAgICBsZXQgJGVsID0gJCh0aGlzKSxcclxuICAgICAgJG1hcENvbCA9ICRlbC5maW5kKCcuanMtbG9jYXRpb24tbGlzdGluZy1tYXAnKSxcclxuICAgICAgJG1hcCA9ICRlbC5maW5kKCcuanMtZ29vZ2xlLW1hcCcpLFxyXG4gICAgICAkcmVzdWx0c0hlYWRpbmcgPSAkZWwuZmluZCgnLmpzLXJlc3VsdHMtaGVhZGluZycpLFxyXG4gICAgICAkcGFnaW5hdGlvbiA9ICRlbC5maW5kKCcuanMtcGFnaW5hdGlvbicpLFxyXG4gICAgICAkbG9jYXRpb25GaWx0ZXIgPSAkZWwuZmluZCgnLmpzLWxvY2F0aW9uLWZpbHRlcnMnKTtcclxuXHJcbiAgICBzdGlja3kuaW5pdCgkbWFwQ29sKTtcclxuXHJcbiAgICAvLyBHZXQgdGhlIGxvY2F0aW9uIGxpc3RpbmcgY29tcG9uZW50IGRhdGEgKHRoaXMgY291bGQgYmUgcmVwbGFjZWQgd2l0aCBhbiBhcGkpXHJcbiAgICBjb25zdCByYXdEYXRhID0gbWEubG9jYXRpb25MaXN0aW5nW2ldOyAvLyBEYXRhIG9iamVjdCBjcmVhdGVkIGluIEBvcmdhbmlzbXMvYnktYXV0aG9yL2xvY2F0aW9uLWxpc3RpbmcudHdpZ1xyXG5cclxuICAgIGxldCBtYXN0ZXJEYXRhID0gW107IC8vIG1hc3RlciBkYXRhIHN0cnVjdHVyZSB0byBwcmVzZXJ2ZSBzdGF0ZVxyXG4gICAgLy8gTGlzdGVuIGZvciBtYXAgaW5pdGlhbGl6YXRpb24sIHBvcHVsYXRlIG1hc3RlciBkYXRhIHN0cnVjdHVyZSB1c2luZyBsb2NhdGlvbkxpc3RpbmcsIG1hcCBtYXJrZXJzLlxyXG4gICAgJG1hcC5vbignbWE6R29vZ2xlTWFwOk1hcEluaXRpYWxpemVkJywgZnVuY3Rpb24oZSwgbWFya2Vycykge1xyXG4gICAgICBtYXN0ZXJEYXRhID0gcG9wdWxhdGVNYXN0ZXJEYXRhU291cmNlKHJhd0RhdGEsIG1hcmtlcnMpOyAvLyB0byBwcmVzZXJ2ZSBzdGF0ZVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gTGlzdGVuIGZvciBHb29nbGUgTWFwIGFwaSBsaWJyYXJ5IGxvYWQgY29tcGxldGlvbiwgd2l0aCBnZW9jb2RlLCBnZW9tZXRyeSwgYW5kIHBsYWNlcyBsaWJyYXJpZXNcclxuICAgICQoZG9jdW1lbnQpLm9uKCdtYTpMaWJyYXJpZXNMb2FkZWQ6R29vZ2xlTWFwcycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgIC8vIFNldCB1cCBjbGljayBoYW5kbGVyIGZvciBsb2NhdGlvbiBsaXN0aW5nIHJvd3MuXHJcbiAgICAgICRlbC5vbignY2xpY2snLCBsb2NhdGlvbkxpc3RpbmdSb3csIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgbGV0IGluZGV4ID0gJChlLmN1cnJlbnRUYXJnZXQpLmluZGV4KCk7XHJcbiAgICAgICAgLy8gdHJpZ2dlciBtYXAgdG8gcmVjZW50ZXIgb24gdGhpcyBpdGVtIGJhc2VkIG9uIGl0J3MgaW5kZXguXHJcbiAgICAgICAgJG1hcC50cmlnZ2VyKCdtYTpHb29nbGVNYXA6TWFwUmVjZW50ZXInLCBpbmRleCk7XHJcbiAgICAgICAgLy8gbWFyayB0aGlzIGxpbmsgYXMgYWN0aXZlXHJcbiAgICAgICAgJGVsLmZpbmQoYWN0aXZlTG9jYXRpb25MaXN0aW5nUm93KS5yZW1vdmVDbGFzcyhhY3RpdmVDbGFzcyk7XHJcbiAgICAgICAgJChlLmN1cnJlbnRUYXJnZXQpLmFkZENsYXNzKGFjdGl2ZUNsYXNzKTsgLy8gaW4gY2FzZSB0aGUgZXZlbnQgaXMgdHJpZ2dlcmVkIG9uIGEgY2hpbGQgZWxlbWVudC5cclxuICAgICAgICAvLyBmb2N1cyBvbiB0aGUgbWFwIC0gbWFpbmx5IGZvciBtb2JpbGUgd2hlbiBpdCBpcyBzdGFja2VkXHJcbiAgICAgICAgbGV0IHBvc2l0aW9uID0gJG1hcC5vZmZzZXQoKS50b3A7XHJcbiAgICAgICAgJChcImh0bWwsYm9keVwiKS5zdG9wKHRydWUsIHRydWUpLmFuaW1hdGUoe3Njcm9sbFRvcDogcG9zaXRpb259LCAnNzUwJyk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgLy8gU2V0IHVwIGhvdmVyIC8gZm9jdXMgZXZlbnQgZm9yIGxpc3Rpbmcgcm93cy5cclxuICAgICAgJGVsLm9uKCdtb3VzZWVudGVyIGZvY3VzaW4nLCBsb2NhdGlvbkxpc3RpbmdSb3csIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgLy8gcmVtb3ZlIGFjdGl2ZSBzdGF0ZSBmcm9tIHByZXZpb3VzbHkgc2VsZWN0ZWQgbGlzdCBpdGVtXHJcbiAgICAgICAgJGVsLmZpbmQoYWN0aXZlTG9jYXRpb25MaXN0aW5nUm93KS5yZW1vdmVDbGFzcyhhY3RpdmVDbGFzcyk7XHJcblxyXG4gICAgICAgIC8vIERvbid0IGJvdW5jZSB0aGUgbWFya2VyIGFnYWluIGlmIGZvY3VzIG1vdmVzIHdpdGhpbiB0aGUgc2FtZSBsaXN0aW5nLlxyXG4gICAgICAgIGlmICgkKGUuY3VycmVudFRhcmdldCkuaGFzQ2xhc3MobWFya2VyQWN0aXZlQ2xhc3MpKSB7XHJcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBSZW1vdmUgXCJmb2N1c1wiIGNsYXNzIGZyb20gYW55IFwiZm9jdXNlZFwiIGxvY2F0aW9uIGxpc3Rpbmcgcm93LlxyXG4gICAgICAgIC8vIChcImZvY3VzXCIgdnMgZm9jdXMgYmVjYXVzZSBob3ZlciBkb2Vzbid0IGJyaW5nIGZvY3VzIHRvIGVsZW1lbnQuKVxyXG4gICAgICAgICRlbC5maW5kKG1hcmtlckFjdGl2ZUxvY2F0aW9uTGlzdGluZ1JvdykucmVtb3ZlQ2xhc3MobWFya2VyQWN0aXZlQ2xhc3MpO1xyXG5cclxuICAgICAgICAvLyBGb2N1cyBtb3ZlZCBpbnRvIGxpc3RpbmcgZm9yIGZpcnN0IHRpbWUsIHNvIGZsYWcgd2l0aCBjbGFzcywgcmVjZW50ZXIgKyBib3VuY2UgbWFya2VyLlxyXG4gICAgICAgICQoZS5jdXJyZW50VGFyZ2V0KS5hZGRDbGFzcyhtYXJrZXJBY3RpdmVDbGFzcyk7XHJcbiAgICAgICAgbGV0IGluZGV4ID0gJChlLmN1cnJlbnRUYXJnZXQpLmluZGV4KCk7XHJcblxyXG4gICAgICAgIC8vIFRyaWdnZXIgbWFwIHRvIHJlY2VudGVyIG9uIHRoaXMgaXRlbSBhbmQgbWFrZSB0aGUgbWFya2VyIGJvdW5jZVxyXG4gICAgICAgICRtYXAudHJpZ2dlcignbWE6R29vZ2xlTWFwOk1hcmtlckJvdW5jZScsIGluZGV4KTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICAvLyBSZW1vdmUgXCJmb2N1c1wiIGNsYXNzIGZyb20gYW55IFwiZm9jdXNlZFwiIGxvY2F0aW9uIGxpc3Rpbmcgcm93LlxyXG4gICAgICAkZWwub24oJ21vdXNlbGVhdmUnLCBsb2NhdGlvbkxpc3RpbmdSb3csIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgJGVsLmZpbmQobWFya2VyQWN0aXZlTG9jYXRpb25MaXN0aW5nUm93KS5yZW1vdmVDbGFzcyhtYXJrZXJBY3RpdmVDbGFzcyk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgLy8gSGFuZGxlIGxvY2F0aW9uIGxpc3RpbmdzIGZvcm0gaW50ZXJhY3Rpb24gKHRyaWdnZXJlZCBieSBsb2NhdGlvbkZpbHRlcnMuanMpLlxyXG4gICAgICAkbG9jYXRpb25GaWx0ZXIub24oJ21hOkxvY2F0aW9uRmlsdGVyOkZvcm1TdWJtaXR0ZWQnLCBmdW5jdGlvbiAoZSwgZm9ybVZhbHVlcykge1xyXG4gICAgICAgIGxldCB0cmFuc2Zvcm1hdGlvbiA9IHRyYW5zZm9ybURhdGEobWFzdGVyRGF0YSwgZm9ybVZhbHVlcyk7XHJcbiAgICAgICAgbWFzdGVyRGF0YSA9IHRyYW5zZm9ybWF0aW9uLmRhdGE7IC8vIHByZXNlcnZlIHN0YXRlXHJcbiAgICAgICAgLy8gVHJpZ2dlciBjaGlsZCBjb21wb25lbnRzIHJlbmRlciB3aXRoIHVwZGF0ZWQgZGF0YVxyXG4gICAgICAgIHVwZGF0ZUNoaWxkQ29tcG9uZW50cyh0cmFuc2Zvcm1hdGlvbik7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgLy8gSGFuZGxlIGFjdGl2ZSBmaWx0ZXIvdGFnIGJ1dHRvbiBpbnRlcmFjdGlvbnMgKHRyaWdnZXJlZCBieSByZXN1bHRzSGVhZGluZy5qcykuXHJcbiAgICAgICRyZXN1bHRzSGVhZGluZy5vbignbWE6UmVzdWx0c0hlYWRpbmc6QWN0aXZlVGFnQ2xpY2tlZCcsIGZ1bmN0aW9uIChlLCBjbGVhcmVkRmlsdGVyKSB7XHJcbiAgICAgICAgbGV0IHRyYW5zZm9ybWF0aW9uID0gdHJhbnNmb3JtRGF0YShtYXN0ZXJEYXRhLCBjbGVhcmVkRmlsdGVyKTtcclxuICAgICAgICBtYXN0ZXJEYXRhID0gdHJhbnNmb3JtYXRpb24uZGF0YTsgLy8gcHJlc2VydmUgc3RhdGVcclxuICAgICAgICB0cmFuc2Zvcm1hdGlvbi5jbGVhcmVkRmlsdGVyID0gY2xlYXJlZEZpbHRlcjtcclxuXHJcbiAgICAgICAgLy8gVHJpZ2dlciBjaGlsZCBjb21wb25lbnRzIHJlbmRlciB3aXRoIHVwZGF0ZWQgZGF0YVxyXG4gICAgICAgIHVwZGF0ZUNoaWxkQ29tcG9uZW50cyh0cmFuc2Zvcm1hdGlvbik7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgLy8gSGFuZGxlIHBhZ2luYXRpb24gZXZlbnQgKHRyaWdnZXJlZCBieSBwYWdpbmF0aW9uLmpzKSwgcmVuZGVyIHRhcmdldFBhZ2UuXHJcbiAgICAgICRwYWdpbmF0aW9uLm9uKCdtYTpQYWdpbmF0aW9uOlBhZ2luYXRpb24nLCBmdW5jdGlvbiAoZSwgdGFyZ2V0KSB7XHJcbiAgICAgICAgbGV0IG5leHRQYWdlID0gdGFyZ2V0O1xyXG5cclxuICAgICAgICAvLyBHZXQgdGhlIGN1cnJlbnQgcGFnZSwgZGVmYXVsdCB0byBmaXJzdCBwYWdlIGlmIG5vdCBpbiBnbG9iYWwgZGF0YSBvYmplY3QuXHJcbiAgICAgICAgbGV0IGN1cnJlbnRQYWdlID0gbWFzdGVyRGF0YS5wYWdpbmF0aW9uLmN1cnJlbnRQYWdlID8gbWFzdGVyRGF0YS5wYWdpbmF0aW9uLmN1cnJlbnRQYWdlIDogMTtcclxuICAgICAgICBpZiAodGFyZ2V0ID09PSBcIm5leHRcIikge1xyXG4gICAgICAgICAgbmV4dFBhZ2UgPSBjdXJyZW50UGFnZSArIDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0YXJnZXQgPT09IFwicHJldmlvdXNcIikge1xyXG4gICAgICAgICAgbmV4dFBhZ2UgPSBjdXJyZW50UGFnZSAtIDE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBtYXN0ZXJEYXRhLnBhZ2luYXRpb24gPSB0cmFuc2Zvcm1QYWdpbmF0aW9uRGF0YSh7ZGF0YTogbWFzdGVyRGF0YSwgdGFyZ2V0UGFnZTogbmV4dFBhZ2V9KTtcclxuICAgICAgICBtYXN0ZXJEYXRhLnJlc3VsdHNIZWFkaW5nID0gdHJhbnNmb3JtUmVzdWx0c0hlYWRpbmcoe2RhdGE6IG1hc3RlckRhdGEsIHBhZ2U6IG5leHRQYWdlfSk7XHJcbiAgICAgICAgcmVuZGVyTGlzdGluZ1BhZ2Uoe2RhdGE6IG1hc3RlckRhdGEsIHBhZ2U6IG5leHRQYWdlfSk7XHJcblxyXG4gICAgICAgIGxldCBtYXJrZXJzID0gZ2V0QWN0aXZlTWFya2Vycyh7ZGF0YTogbWFzdGVyRGF0YSwgcGFnZTogbmV4dFBhZ2V9KTtcclxuICAgICAgICAvLyBUcmlnZ2VyIGNoaWxkIGNvbXBvbmVudHMgcmVuZGVyIHdpdGggdXBkYXRlZCBkYXRhXHJcbiAgICAgICAgdXBkYXRlQ2hpbGRDb21wb25lbnRzKHtkYXRhOiBtYXN0ZXJEYXRhLCBtYXJrZXJzOiBtYXJrZXJzfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gVHJpZ2dlciBldmVudHMgdG8gdXBkYXRlIGNoaWxkIGNvbXBvbmVudHMgd2l0aCBuZXcgZGF0YS5cclxuICAgIGZ1bmN0aW9uIHVwZGF0ZUNoaWxkQ29tcG9uZW50cyhhcmdzKSB7XHJcbiAgICAgICRyZXN1bHRzSGVhZGluZy50cmlnZ2VyKCdtYTpSZXN1bHRzSGVhZGluZzpEYXRhVXBkYXRlZCcsIFthcmdzLmRhdGEucmVzdWx0c0hlYWRpbmddKTtcclxuICAgICAgJG1hcC50cmlnZ2VyKCdtYTpHb29nbGVNYXA6TWFya2Vyc1VwZGF0ZWQnLCBbe21hcmtlcnM6IGFyZ3MubWFya2VycywgcGxhY2U6IGFyZ3MucGxhY2V9XSk7XHJcbiAgICAgICRwYWdpbmF0aW9uLnRyaWdnZXIoJ21hOlBhZ2luYXRpb246RGF0YVVwZGF0ZWQnLCBbYXJncy5kYXRhLnBhZ2luYXRpb25dKTtcclxuICAgICAgaWYgKGFyZ3MuY2xlYXJlZEZpbHRlcikge1xyXG4gICAgICAgICRsb2NhdGlvbkZpbHRlci50cmlnZ2VyKCdtYTpGb3JtRmlsdGVyOkRhdGFVcGRhdGVkJywgW2FyZ3MuY2xlYXJlZEZpbHRlcl0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIC8qKlxyXG4gICAqIERhdGEgaW5pdGlhbGl6YXRpb24uXHJcbiAgICovXHJcblxyXG4gIC8qKlxyXG4gICAqIFJldHVybnMgYSBtYXN0ZXIgZGF0YSBzdHJ1Y3R1cmUgd2l0aCBwYWdlIGxldmVsIC8gbGlzdGluZyBpdGVtIGxldmVsIGRhdGEgYW5kIG1hcmt1cCwgdG8gcmVmbGVjdCBjb21wb25lbnQgc3RhdGUuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gbGlzdGluZ1xyXG4gICAqICAgVGhlIGxvY2F0aW9uTGlzdGluZyBkYXRhIHN0cnVjdHVyZSB0byB1c2UgYXMgYSBzb3VyY2VcclxuICAgKiBAcGFyYW0gbWFya2Vyc1xyXG4gICAqICAgVGhlIGFycmF5IG9mIG1hcCBtYXJrZXJzIGNyZWF0ZWQgYnkgY29tcG9uZW50IGdvb2dsZSBtYXAgKGdvb2dsZU1hcHMuanMgbW9kdWxlKVxyXG4gICAqIEByZXR1cm5zIHtBcnJheX1cclxuICAgKiAgIEFuIGFycmF5IHdpdGggdGhlIGZvbGxvd2luZyBzdHJ1Y3R1cmU6XHJcbiAgICogICAgW1xyXG4gICAqICAgICAgbWF4SXRlbXM6IHRoZSBtYXggbnVtYmVyIG9mIGl0ZW1zIHRvIHNob3cgcGVyIGxpc3RpbmcgXCJwYWdlXCIgaWYgcHJvdmlkZWQsIGRlZmF1bHRzIHRvIGFsbFxyXG4gICAqICAgICAgdG90YWxQYWdlczogdGhlIG51bWJlciBvZiBwYWdlcyBvZiBpdGVtcyB0aGF0IHNob3VsZCByZW5kZXIsIGdpdmVuIHRoZSBjdXJyZW50IGZpbHRlcnNcclxuICAgKiAgICAgIHJlc3VsdHNIZWFkaW5nOiB0aGUgZGF0YSBzdHJ1Y3R1cmUgbmVjZXNzYXJ5IHRvIHJlbmRlciBhIHJlc3VsdHNIZWFkaW5nIGNvbXBvbmVudFxyXG4gICAqICAgICAgaXRlbXM6IGFuIGFycmF5IG9mIGxpc3RpbmcgaXRlbXMgW1xyXG4gICAqICAgICAgICBpc0FjdGl2ZTogd2hldGhlciBvciBub3QgdGhlIGxpc3Rpbmcgc2hvdWxkIGJlIHNob3duLCBnaXZlbiBjdXJyZW50IGZpbHRlcnMgc3RhdGVcclxuICAgKiAgICAgICAgcGFnZTogdGhlIHBhZ2UgdGhhdCB0aGUgbGlzdGluZywgaWYgYWN0aXZlLCB3aWxsIGFwcGVhciBvbiwgZ2l2ZW4gdGhlIGN1cnJlbnQgc29ydCBvcmRlclxyXG4gICAqICAgICAgICBwcm9tbzogdGhlIGRhdGEgc3RydWN0dXJlIGZvciB0aGUgaW1hZ2VQcm9tbyBjb21wb25lbnRcclxuICAgKiAgICAgICAgbWFya3VwOiB0aGUgY29tcGlsZWQgaW1hZ2VQcm9tbyBtYXJrdXBcclxuICAgKiAgICAgICAgbWFya2VyOiB0aGUgcmVsYXRlZCBtYXAgbWFya2VyIGRhdGEgc3RydWN0dXJlIGZvciB0aGUgbGlzdGluZyBpdGVtXHJcbiAgICogICAgICBdXHJcbiAgICogICAgICBwYWdpbmF0aW9uOiB0aGUgZGF0YSBzdHJ1Y3R1cmUgbmVjZXNzYXJ5IHRvIHJlbmRlciBhIHBhZ2luYXRpb24gY29tcG9uZW50XHJcbiAgICogICAgXVxyXG4gICAqL1xyXG4gIGZ1bmN0aW9uIHBvcHVsYXRlTWFzdGVyRGF0YVNvdXJjZShsaXN0aW5nLCBtYXJrZXJzKSB7XHJcbiAgICAvLyBQb3B1bGF0ZSBtYXN0ZXIgZGF0YSBzdHJ1Y3R1cmVcclxuICAgIGxldCBtYXN0ZXJEYXRhID0gW107XHJcblxyXG4gICAgLy8gRW5zdXJlIGxvY2F0aW9uTGlzdGluZy5pbWFnZVByb21vcy5pdGVtcyBpcyBhbiBhcnJheSAodGhlIHR3aWcgdGVtcGxhdGUganNvbl9lbmNvZGUoKSdzIGEgcGhwIGFycmF5KVxyXG4gICAgbGV0IHByb21vc0FycmF5ID0gW107XHJcbiAgICAkLm1hcChsaXN0aW5nLmltYWdlUHJvbW9zLml0ZW1zLCBmdW5jdGlvbih2YWwsIGluZGV4KSB7IHByb21vc0FycmF5W2luZGV4XSA9IHZhbDsgfSk7XHJcbiAgICBsaXN0aW5nLmltYWdlUHJvbW9zLml0ZW1zID0gcHJvbW9zQXJyYXk7XHJcblxyXG4gICAgLy8gRW5zdXJlIGxvY2F0aW9uTGlzdGluZy5wYWdpbmF0aW9uLnBhZ2VzIGlzIGFuIGFycmF5ICh0aGUgdHdpZyB0ZW1wbGF0ZSBqc29uX2VuY29kZSgpJ3MgYSBwaHAgYXJyYXkpXHJcbiAgICBsZXQgcGFnZXMgPSBbXTtcclxuICAgICQubWFwKGxpc3RpbmcucGFnaW5hdGlvbi5wYWdlcywgZnVuY3Rpb24odmFsLCBpbmRleCkgeyBwYWdlc1tpbmRleF0gPSB2YWw7IH0pO1xyXG4gICAgbGlzdGluZy5wYWdpbmF0aW9uLnBhZ2VzID0gcGFnZXM7XHJcblxyXG4gICAgLy8gR2V0IHRoZSBjdXJyZW50IHBhZ2UgZnJvbSB0aGUgaW5pdGlhbCBkYXRhIHN0cnVjdHVyZSwgZGVmYXVsdCB0byAxIGlmIG5vbmUgcGFzc2VkLlxyXG4gICAgbGV0IGN1cnJlbnRQYWdlID0gMTtcclxuICAgIHBhZ2VzLmZvckVhY2goZnVuY3Rpb24ocGFnZSkge1xyXG4gICAgICBpZiAocGFnZS5hY3RpdmUpIHtcclxuICAgICAgICBjdXJyZW50UGFnZSA9IE51bWJlcihwYWdlLnRleHQpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBHZXQgdGhlIGxpc3RpbmcgaW1hZ2VQcm9tb3MsIGdlbmVyYXRlIG1hcmt1cCBmb3IgZWFjaFxyXG4gICAgbGV0IG1hc3Rlckxpc3RpbmcgPSBsaXN0aW5nLmltYWdlUHJvbW9zLml0ZW1zLFxyXG4gICAgICBtYXN0ZXJMaXN0aW5nTWFya3VwID0gdHJhbnNmb3JtTG9jYXRpb25MaXN0aW5nUHJvbW9zKG1hc3Rlckxpc3RpbmcpO1xyXG5cclxuICAgIC8vIFRoZSBtYXggbnVtYmVyIG9mIGl0ZW1zIHBlciBwYWdlLCBpZiBkZXNpZ25hdGVkIGluIGxvY2F0aW9uTGlzdGluZyBkYXRhIHN0cnVjdHVyZSwgZWxzZSBhbGxcclxuICAgIG1hc3RlckRhdGEubWF4SXRlbXMgPSBsaXN0aW5nLm1heEl0ZW1zID8gbGlzdGluZy5tYXhJdGVtcyA6IGxpc3RpbmcuaW1hZ2VQcm9tb3MuaXRlbXMubGVuZ3RoO1xyXG4gICAgLy8gVGhlIGluaXRpYWwgcmVzdWx0cyBoZWFkaW5nIGRhdGEgc3RydWN0dXJlXHJcbiAgICBtYXN0ZXJEYXRhLnJlc3VsdHNIZWFkaW5nID0gbGlzdGluZy5yZXN1bHRzSGVhZGluZztcclxuICAgIC8vIFRoZSBhcnJheSBvZiBpdGVtcyBhbmQgdGhlaXIgcmVzcGVjdGl2ZSBwYWdlLCBpbi9hY3RpdmUgc3RhdHVzLCBtYXJrZXIgZGF0YSwgaW1hZ2VQcm9tbyBkYXRhLCBhbmQgbWFya3VwXHJcbiAgICBtYXN0ZXJEYXRhLml0ZW1zID0gZ2V0TWFzdGVyTGlzdGluZ1dpdGhNYXJrdXBBbmRNYXJrZXJzKG1hc3Rlckxpc3RpbmcsIG1hc3Rlckxpc3RpbmdNYXJrdXAsIG1hcmtlcnMsIG1hc3RlckRhdGEubWF4SXRlbXMpO1xyXG4gICAgLy8gVGhlIGluaXRpYWwgcGFnaW5hdGlvbiBkYXRhIHN0cnVjdHVyZSArIGN1cnJlbnRQYWdlO1xyXG4gICAgbWFzdGVyRGF0YS5wYWdpbmF0aW9uID0gbGlzdGluZy5wYWdpbmF0aW9uO1xyXG4gICAgbWFzdGVyRGF0YS5wYWdpbmF0aW9uLmN1cnJlbnRQYWdlID0gY3VycmVudFBhZ2U7XHJcbiAgICAvLyBUaGUgdG90YWwgbnVtYmVyIG9mIHBhZ2VzLCBnaXZlbiB0aGUgbnVtYmVyIG9mIGl0ZW1zIGFuZCB0aGUgbWF4SXRlbXMgdmFyaWFibGVcclxuICAgIG1hc3RlckRhdGEudG90YWxQYWdlcyA9IE1hdGguY2VpbChtYXN0ZXJEYXRhLml0ZW1zLmxlbmd0aCAvIG1hc3RlckRhdGEubWF4SXRlbXMpO1xyXG5cclxuICAgIHJldHVybiBtYXN0ZXJEYXRhO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ3JlYXRlcyB0aGUgbWFzdGVyIGRhdGEgc3RydWN0dXJlIGl0ZW1zIGFycmF5XHJcbiAgICpcclxuICAgKiBAcGFyYW0gbGlzdGluZ1xyXG4gICAqICAgVGhlIGxvY2F0aW9uTGlzdGluZyBkYXRhIHN0cnVjdHVyZVxyXG4gICAqIEBwYXJhbSBtYXJrdXBcclxuICAgKiAgIFRoZSBnZW5lcmF0ZWQgYXJyYXkgb2YgaXRlbSBtYXJrdXBcclxuICAgKiBAcGFyYW0gbWFya2Vyc1xyXG4gICAqICAgVGhlIGFzc29jaWF0ZWQgbWFwIG1hcmtlcnMgZm9yIGVhY2ggaXRlbVxyXG4gICAqIEBwYXJhbSBtYXhcclxuICAgKiAgIFRoZSBtYXhpbXVtIG51bWJlciBvZiBpdGVtcyBwZXIgcGFnZVxyXG4gICAqIEByZXR1cm5zIHtBcnJheX1cclxuICAgKiAgQW4gYXJyYXkgb2YgbGlzdGluZyBpdGVtcyB3aXRoIHRoZSBmb2xsb3dpbmcgc3RydWN0dXJlOlxyXG4gICAqICBbXHJcbiAgICogICAgICBpc0FjdGl2ZTogd2hldGhlciBvciBub3QgdGhlIGxpc3Rpbmcgc2hvdWxkIGJlIHNob3duLCBnaXZlbiBjdXJyZW50IGZpbHRlcnMgc3RhdGVcclxuICAgKiAgICAgIHBhZ2U6IHRoZSBwYWdlIHRoYXQgdGhlIGxpc3RpbmcsIGlmIGFjdGl2ZSwgd2lsbCBhcHBlYXIgb24sIGdpdmVuIHRoZSBjdXJyZW50IHNvcnQgb3JkZXJcclxuICAgKiAgICAgIHByb21vOiB0aGUgZGF0YSBzdHJ1Y3R1cmUgZm9yIHRoZSBpbWFnZVByb21vIGNvbXBvbmVudFxyXG4gICAqICAgICAgbWFya3VwOiB0aGUgY29tcGlsZWQgaW1hZ2VQcm9tbyBtYXJrdXBcclxuICAgKiAgICAgIG1hcmtlcjogdGhlIHJlbGF0ZWQgbWFwIG1hcmtlciBkYXRhIHN0cnVjdHVyZSBmb3IgdGhlIGxpc3RpbmcgaXRlbVxyXG4gICAqICAgXVxyXG4gICAqL1xyXG4gIGZ1bmN0aW9uIGdldE1hc3Rlckxpc3RpbmdXaXRoTWFya3VwQW5kTWFya2VycyhsaXN0aW5nLCBtYXJrdXAsIG1hcmtlcnMsIG1heCkge1xyXG4gICAgbGV0IGl0ZW1zID0gW107XHJcbiAgICBtYXJrZXJzLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0sIGluZGV4KSB7XHJcbiAgICAgIGl0ZW1zW2luZGV4XSA9IHtcclxuICAgICAgICBpc0FjdGl2ZTogdHJ1ZSwgLy8gQHRvZG8gY29uc2lkZXIgY2hlY2tpbmcgZm9yIHRoaXMgaW4gY2FzZSBvZiBzZXJ2ZXIgc2lkZSBwcmVwcm9jZXNzaW5nIG9mIHN0YXRlXHJcbiAgICAgICAgcGFnZTogTWF0aC5jZWlsKChpbmRleCsxKSAvIG1heCksXHJcbiAgICAgICAgbWFya2VyOiBpdGVtLFxyXG4gICAgICAgIG1hcmt1cDogbWFya3VwW2luZGV4XSxcclxuICAgICAgICBwcm9tbzogbGlzdGluZ1tpbmRleF1cclxuICAgICAgfTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGl0ZW1zO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ3JlYXRlcyBhbiBhcnJheSB3aXRoIGdlbmVyYXRlZCBtYXJrdXAgZm9yIGxvY2F0aW9uIGxpc3RpbmcgaXRlbXMsIHByZXNlcnZpbmcgb3JpZ2luYWwgaW5kZXguXHJcbiAgICpcclxuICAgKiBAcGFyYW0gcHJvbW9zXHJcbiAgICogIFRoZSBsb2NhdGlvbkxpc3RpbmcuaW1hZ2VQcm9tb3MgYXJyYXkgb2YgaXRlbXNcclxuICAgKlxyXG4gICAqIEByZXR1cm5zIHtBcnJheX1cclxuICAgKiAgQW4gYXJyYXkgb2YgY29tcGlsZWQgbWFya3VwXHJcbiAgICovXHJcbiAgZnVuY3Rpb24gdHJhbnNmb3JtTG9jYXRpb25MaXN0aW5nUHJvbW9zKHByb21vcykge1xyXG4gICAgLy8gR2V0IHRlbXBsYXRlIGZvciBsb2NhdGlvbiBsaXN0aW5nIChvcmdhbmlzbXMgPiBpbWFnZVByb21vKVxyXG4gICAgbGV0IGNvbXBpbGVkVGVtcGxhdGUgPSBnZXRUZW1wbGF0ZSgnbG9jYXRpb25MaXN0aW5nUm93Jyk7XHJcbiAgICBsZXQgbGlzdGluZ01hcmt1cCA9IFtdO1xyXG4gICAgcHJvbW9zLmZvckVhY2goZnVuY3Rpb24gKGRhdGEsIGluZGV4KSB7XHJcbiAgICAgIGxldCBwcm9tb0RhdGEgPSBwcm9tb1RyYW5zZm9ybShkYXRhKTtcclxuICAgICAgbGlzdGluZ01hcmt1cFtpbmRleF0gPSBjb21waWxlZFRlbXBsYXRlKHByb21vRGF0YSk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBsaXN0aW5nTWFya3VwO1xyXG4gIH1cclxuXHJcblxyXG4gIC8qKlxyXG4gICAqIERhdGEgdHJhbnNmb3JtYXRpb24uXHJcbiAgICovXHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBtYWluIGRhdGEgdHJhbnNmb3JtYXRpb24gd3JhcHBlciwgcmV0dXJucyBhbiBpbnN0YW5jZSBvZiBtYXN0ZXJEYXRhIHdoaWNoIHJlZmxlY3RzIHRoZSBjb21wb25lbnQgc3RhdGUuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gZGF0YVxyXG4gICAqICBBbiBpbnN0YW5jZSBvZiBtYXN0ZXJEYXRhIHRvIHN0YXJ0IGZyb20uXHJcbiAgICogQHBhcmFtIHRyYW5zZm9ybWF0aW9uXHJcbiAgICogIEFuIG9iamVjdCByZXByZXNlbnRpbmcgdGhlIGNoYW5nZSBpbiBzdGF0ZSAobG9jYXRpb25GaWx0ZXIgZm9ybSBkYXRhLCByZXN1bHRzSGVhZGluZyB0YWcgaW50ZXJhY3Rpb24sIGV0Yy4pXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyB7e2RhdGE6ICosIG1hcmtlcnM6ICp9fVxyXG4gICAqICBBbiBvYmplY3Qgd2l0aCB0aGUgY3VycmVudCBzdGF0ZSBtYXN0ZXJEYXRhIGluc3RhbmNlIGFuZCBhbiBhcnJheSBvZiB0aGVpciByZWxhdGVkIHNvcnRlZCBtYXJrZXJzIHRvIHNlbmQgdG8gbWFwLlxyXG4gICAqL1xyXG4gIGZ1bmN0aW9uIHRyYW5zZm9ybURhdGEoZGF0YSwgdHJhbnNmb3JtYXRpb24pIHtcclxuICAgIC8vIEZpcnN0IGZpbHRlciB0aGUgZGF0YSBiYXNlZCBvbiBjb21wb25lbnQgc3RhdGUsIHRoZW4gc29ydCBhbHBoYWJldGljYWxseSBieSBkZWZhdWx0LlxyXG4gICAgbGV0IGZpbHRlcmVkRGF0YSA9IGZpbHRlckxpc3RpbmdEYXRhKGRhdGEsIHRyYW5zZm9ybWF0aW9uKSxcclxuICAgICAgc29ydGVkRGF0YSA9IHNvcnREYXRhQWxwaGFiZXRpY2FsbHkoZmlsdGVyZWREYXRhKSxcclxuICAgICAgcGxhY2UgPSAnJztcclxuXHJcbiAgICAvLyBTb3J0IGRhdGEgYnkgbG9jYXRpb24sIGlmIHRoYXQgZmlsdGVyIGlzIHByZXNlbnQuXHJcbiAgICBpZiAoaGFzRmlsdGVyKGZpbHRlcmVkRGF0YS5yZXN1bHRzSGVhZGluZy50YWdzLCAnbG9jYXRpb24nKSkge1xyXG4gICAgICBwbGFjZSA9IGdldEZpbHRlclZhbHVlcyhmaWx0ZXJlZERhdGEucmVzdWx0c0hlYWRpbmcudGFncywgJ2xvY2F0aW9uJylbMF07IC8vIHJldHVybnMgYXJyYXlcclxuICAgICAgLy8gSWYgcGxhY2UgYXJndW1lbnQgd2FzIHNlbGVjdGVkIGZyb20gdGhlIGxvY2F0aW9uRmlsdGVyIGF1dG9jb21wbGV0ZSAoaW5pdGlhdGVkIG9uIHRoZSB6aXBjb2RlIHRleHQgaW5wdXQpLlxyXG4gICAgICBpZiAobWEuYXV0b2NvbXBsZXRlLmdldFBsYWNlKCkpIHtcclxuICAgICAgICBwbGFjZSA9IG1hLmF1dG9jb21wbGV0ZS5nZXRQbGFjZSgpO1xyXG4gICAgICAgIC8vIFNvcnQgdGhlIG1hcmtlcnMgYW5kIGluc3RhbmNlIG9mIGxvY2F0aW9uTGlzdGluZyBtYXN0ZXJEYXRhLlxyXG4gICAgICAgIHNvcnRlZERhdGEgPSBzb3J0RGF0YUFyb3VuZFBsYWNlKHBsYWNlLCBmaWx0ZXJlZERhdGEpO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIElmIHBsYWNlIGFyZ3VtZW50IHdhcyBwb3B1bGF0ZWQgZnJvbSBsb2NhdGlvbkZpbHRlciAoemlwY29kZSB0ZXh0IGlucHV0KSBidXQgbm90IGZyb20gUGxhY2UgYXV0b2NvbXBsZXRlLlxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICAvLyBHZW9jb2RlIHRoZSBhZGRyZXNzLCB0aGVuIHNvcnQgdGhlIG1hcmtlcnMgYW5kIGluc3RhbmNlIG9mIGxvY2F0aW9uTGlzdGluZyBtYXN0ZXJEYXRhLlxyXG4gICAgICAgIG1hLmdlb2NvZGVyID0gbWEuZ2VvY29kZXIgPyBtYS5nZW9jb2RlciA6IG5ldyBnb29nbGUubWFwcy5HZW9jb2RlcigpO1xyXG4gICAgICAgIC8vIEB0b2RvIGxpbWl0IGdlb2NvZGUgcmVzdWx0cyB0byBNQT9cclxuICAgICAgICBzb3J0ZWREYXRhID0gZ2VvY29kZUFkZHJlc3NTdHJpbmcocGxhY2UsIHNvcnREYXRhQXJvdW5kUGxhY2UsIGZpbHRlcmVkRGF0YSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBVcGRhdGUgdGhlIHJlc3VsdHMgaGVhZGluZyBiYXNlZCBvbiB0aGUgY3VycmVudCBpdGVtcyBzdGF0ZS5cclxuICAgIHNvcnRlZERhdGEucmVzdWx0c0hlYWRpbmcgPSB0cmFuc2Zvcm1SZXN1bHRzSGVhZGluZyh7ZGF0YTogc29ydGVkRGF0YX0pO1xyXG4gICAgLy8gVXBkYXRlIHBhZ2luYXRpb24gZGF0YSBzdHJ1Y3R1cmUsIHJlc2V0IHRvIGZpcnN0IHBhZ2VcclxuICAgIHNvcnRlZERhdGEucGFnaW5hdGlvbiA9IHRyYW5zZm9ybVBhZ2luYXRpb25EYXRhKHtkYXRhOiBzb3J0ZWREYXRhfSk7IC8vIEB0b2RvIHRoaXMgc2hvdWxkIHByb2JhYmx5IGdvIGxhc3Qgc28gd2Uga25vdyBwYWdlICNzXHJcbiAgICAvLyBSZW5kZXIgdGhlIGxpc3RpbmcgcGFnZS5cclxuICAgIHJlbmRlckxpc3RpbmdQYWdlKHtkYXRhOiBzb3J0ZWREYXRhfSk7XHJcblxyXG4gICAgLy8gR2V0IHRoZSBhc3NvY2lhdGVkIG1hcmtlcnMgYmFzZWQgb24gdGhlIGxpc3RpbmcgaXRlbXMuXHJcbiAgICBsZXQgbWFya2VycyA9IGdldEFjdGl2ZU1hcmtlcnMoe2RhdGE6IHNvcnRlZERhdGF9KTtcclxuXHJcbiAgICAvLyBQcmVzZXJ2ZSBzdGF0ZSBvZiBjdXJyZW50IGRhdGEuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBkYXRhOiBzb3J0ZWREYXRhLFxyXG4gICAgICBtYXJrZXJzOiBtYXJrZXJzLFxyXG4gICAgICBwbGFjZTogcGxhY2VcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBGaWx0ZXJzIHRoZSBsaXN0aW5nIGRhdGEgYmFzZWQgb24gY29tcG9uZW50IGZpbHRlciBzdGF0ZS5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBkYXRhXHJcbiAgICogIEFuIGluc3RhbmNlIG9mIG1hc3RlckRhdGEgdG8gc3RhcnQgZnJvbS5cclxuICAgKiBAcGFyYW0gZmlsdGVyRGF0YVxyXG4gICAqICBEYXRhIHN0cnVjdHVyZSByZXByZXNlbnRpbmcgZWl0aGVyIHRoZSBuZXdseSBhcHBsaWVkIG9yIGNsZWFyZWQgZmlsdGVycy5cclxuICAgKiBAcmV0dXJucyB7Kn1cclxuICAgKi9cclxuICBmdW5jdGlvbiBmaWx0ZXJMaXN0aW5nRGF0YShkYXRhLCBmaWx0ZXJEYXRhKSB7XHJcbiAgICAvLyBHZXQgdGhlIGN1cnJlbnRseSBhY3RpdmUgZmlsdGVycy5cclxuICAgIGxldCBmaWx0ZXJzID0gdHJhbnNmb3JtQWN0aXZlVGFnc0RhdGEoe2RhdGE6IGRhdGEsIGZpbHRlckRhdGE6IGZpbHRlckRhdGF9KTtcclxuICAgIC8vIFVwZGF0ZSB0aGUgcmVzdWx0cyBoZWFkaW5nIHRhZ3Mgd2l0aCB0aGUgbmV3IGFjdGl2ZSBmaWx0ZXJzLlxyXG4gICAgZGF0YS5yZXN1bHRzSGVhZGluZy50YWdzID0gZmlsdGVycztcclxuXHJcbiAgICAvLyBJZiB0YWcgKGNoZWNrYm94KSBmaWx0ZXIgaXMgcHJlc2VudCwgZmlsdGVyIGJhc2VkIG9uIGN1cnJlbnQgdGFnIHZhbHVlcy5cclxuICAgIGlmIChoYXNGaWx0ZXIoZmlsdGVycywgJ3RhZycpKSB7XHJcbiAgICAgIC8vIEdldCBqdXN0IHRoZSB0YWcgdmFsdWVzIGZyb20gdGhlIGZpbHRlcnMgYXJyYXkuXHJcbiAgICAgIGxldCB0YWdzID0gZ2V0RmlsdGVyVmFsdWVzKGZpbHRlcnMsICd0YWcnKTtcclxuICAgICAgLy8gSWRlbnRpZnkgYWN0aXZlIGRhdGEgYmFzZWQgb24gZmlsdGVyLlxyXG4gICAgICByZXR1cm4gZmlsdGVyRGF0YUJ5VGFncyh0YWdzLCBkYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBFaXRoZXIgdGhlcmUgYXJlIG5vIGZpbHRlcnMgb3IgdGhlIG9ubHkgYWN0aXZlIGZpbHRlciBpcyBsb2NhdGlvbiwgbWFrZSBhbGwgaXRlbXMgYWN0aXZlXHJcbiAgICByZXR1cm4gbWFrZUFsbEFjdGl2ZShkYXRhKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldHVybnMgdGhlIG1hcmtlcnMgd2hpY2ggY29ycmVzcG9uZCB0byBhIGdpdmVuIFwicGFnZVwiIG9mIGxvY2F0aW9uIGxpc3RpbmcgZGF0YS5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBhcmdzXHJcbiAgICogIEFuIG9iamVjdCB3aXRoIHRoZSBmb2xsb3dpbmcgc3RydWN0dXJlOlxyXG4gICAqICAgIHtcclxuICAgKiAgICAgIGRhdGE6IGluc3RhbmNlIG9mIGZpbHRlcmVkLCBzb3J0ZWQgbWFzdGVyRGF0YSBvZmYgb2Ygd2hpY2ggdG8gYmFzZSBtYXJrZXJzXHJcbiAgICogICAgICBwYWdlOiB0aGUgdGFyZ2V0IHBhZ2Ugb2YgaXRlbXMvbWFya2VycyB0byByZW5kZXJcclxuICAgKiAgICB9XHJcbiAgICpcclxuICAgKiBAcmV0dXJuc1xyXG4gICAqICAgQW4gYXJyYXkgb2YgY29ycmVzcG9uZGluZyBtYXAgbWFya2VyIG9iamVjdHMgd2hpY2ggc2hvdWxkIGJlIHJlbmRlcmVkXHJcbiAgICovXHJcbiAgZnVuY3Rpb24gZ2V0QWN0aXZlTWFya2VycyhhcmdzKSB7XHJcbiAgICBsZXQgZGF0YSA9IGFyZ3MuZGF0YSxcclxuICAgICAgcGFnZSA9IGFyZ3MucGFnZSA/IGFyZ3MucGFnZSA6IDE7IC8vIGRlZmF1bHQgdG8gZmlyc3QgcGFnZSBpZiBub24gcHJvdmlkZWRcclxuXHJcbiAgICAvLyBHZXQganVzdCB0aGUgbWFya2VycyBmcm9tIG91ciBhY3RpdmUgc29ydGVkL2ZpbHRlcmVkIGRhdGEgbGlzdGluZy5cclxuICAgIHJldHVybiBkYXRhLml0ZW1zLmZpbHRlcihmdW5jdGlvbihpdGVtKSB7XHJcbiAgICAgIHJldHVybiBpdGVtLmlzQWN0aXZlICYmIGl0ZW0ucGFnZSA9PT0gcGFnZTtcclxuICAgIH0pLm1hcChmdW5jdGlvbihpdGVtKSB7XHJcbiAgICAgIHJldHVybiBpdGVtLm1hcmtlcjtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ3JlYXRlcyB0aGUgYWN0aXZlIGZpbHRlciBvYmplY3QgYmFzZWQgb24gZWl0aGVyIGNsZWFyZWQgb3Igc3VibWl0dGVkIGZpbHRlciBkYXRhLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIGFyZ3NcclxuICAgKiAgIEFuIG9iamVjdCB3aXRoIHRoZSBmb2xsb3dpbmcgc3RydWN0dXJlOlxyXG4gICAqICAgZGF0YSB7XHJcbiAgICogICAgW21hc3RlckRhdGEgY3VycmVudCBpbnN0YW5jZV1cclxuICAgKiAgIH0sXHJcbiAgICogICBmaWx0ZXJEYXRhOiB7XHJcbiAgICogICAgIGNsZWFyZWRGaWx0ZXI6IChvcHRpb25hbCBjbGVhcmVkIGZpbHRlciBkYXRhKVxyXG4gICAqICAgICB7XHJcbiAgICogICAgICAgdHlwZTogJ1tmaWx0ZXIgdHlwZV06IGxvY2F0aW9uIHx8IHRhZycsXHJcbiAgICogICAgICAgdGV4dDogJ1tmaWx0ZXIgdGV4dCBvciBsYWJlbF0nLFxyXG4gICAqICAgICAgIHZhbHVlOiAnW2ZpbHRlciB2YWx1ZV0nXHJcbiAgICogICAgIH0sIHx8ICdhbGwnIChpZiBjbGVhciBhbGwgYnV0dG9uIHdhcyBwcmVzc2VkKVxyXG4gICAqICAgICB7XHJcbiAgICogICAgICAgZm9ybURhdGE6IChvcHRpb25hbCBzdWJtaXR0ZWQgZm9ybSBmaWx0ZXIgZGF0YSlcclxuICAgKiAgICAgICBbXHJcbiAgICogICAgICAgICB7XHJcbiAgICogICAgICAgICAgIHR5cGU6ICdbZmlsdGVyIHR5cGVdIGxvY2F0aW9uIHx8IHRhZycsXHJcbiAgICogICAgICAgICAgIHRleHQ6ICdbZmlsdGVyIGxhYmVsXScsXHJcbiAgICogICAgICAgICAgIHZhbHVlOiAnW2ZpbHRlciB2YWx1ZV0nXHJcbiAgICogICAgICAgICB9LCAuLi5cclxuICAgKiAgICAgICBdXHJcbiAgICogICAgIH1cclxuICAgKiAgIH1cclxuICAgKlxyXG4gICAqIEByZXR1cm5zIHsqfVxyXG4gICAqL1xyXG4gIGZ1bmN0aW9uIHRyYW5zZm9ybUFjdGl2ZVRhZ3NEYXRhKGFyZ3MpIHtcclxuICAgIGlmIChhcmdzLmZpbHRlckRhdGEuaGFzT3duUHJvcGVydHkoJ2NsZWFyZWRGaWx0ZXInKSkge1xyXG4gICAgICByZXR1cm4gZ2V0QWN0aXZlRmlsdGVycyhhcmdzLmRhdGEsIGFyZ3MuZmlsdGVyRGF0YSk7IC8vIFRoaXMgd2FzIGFuIGFjdGl2ZSB0YWcgaW50ZXJhY3Rpb24sIGdldCByZW1haW5pbmcgZmlsdGVycy5cclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICByZXR1cm4gYXJncy5maWx0ZXJEYXRhLmZvcm1EYXRhOyAvLyBUaGlzIHdhcyBhIGZvcm0gc3VibWlzc2lvbiwgc28ganVzdCByZXR1cm4gdGhlIGFwcGxpZWQgZm9ybSBkYXRhLlxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmV0dXJucyB0aGUgZGF0YSBzdHJ1Y3R1cmUgbmVjZXNzYXJ5IHRvIHJlbmRlciBwYWdpbmF0aW9uIGNvbXBvbmVudCwgcmVmbGVjdGluZyBjdXJyZW50IHN0YXRlLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIGFyZ3NcclxuICAgKiAgIEFuIG9iamVjdCB3aXRoIHRoZSBmb2xsb3dpbmcgc3RydWN0dXJlOlxyXG4gICAqICAge1xyXG4gICAqICAgICBkYXRhOiBbaW5zdGFuY2Ugb2YgZmlsdGVyZWQsIHNvcnRlZCBtYXN0ZXIgZGF0YV0sXHJcbiAgICogICAgIHRhcmdldFBhZ2U6IChvcHRpb25hbCkgdGhlIHBhZ2Ugd2hpY2ggc2hvdWxkIGJlIGFjdGl2ZVxyXG4gICAqICAgfVxyXG4gICAqXHJcbiAgICogQHJldHVybnMgeyp9XHJcbiAgICogICBEYXRhIHN0cnVjdHVyZSBuZWNlc3NhcnkgdG8gcmVuZGVyIHBhZ2luYXRpb24gY29tcG9uZW50XHJcbiAgICovXHJcbiAgZnVuY3Rpb24gdHJhbnNmb3JtUGFnaW5hdGlvbkRhdGEoYXJncykge1xyXG4gICAgbGV0IGRhdGEgPSBhcmdzLmRhdGE7XHJcbiAgICBsZXQgdGFyZ2V0UGFnZSA9IGFyZ3MudGFyZ2V0UGFnZSA/IGFyZ3MudGFyZ2V0UGFnZSA6IDE7IC8vIGRlZmF1bHQgdG8gZmlyc3QgcGFnZSBpZiBub25lIHBhc3NlZFxyXG4gICAgbGV0IHRvdGFsUGFnZXMgPSBkYXRhLnRvdGFsUGFnZXM7XHJcbiAgICBsZXQgcGFnZXMgPSBbXTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSB0b3RhbFBhZ2VzOyBpKyspIHtcclxuICAgICAgcGFnZXMucHVzaCh7XHJcbiAgICAgICAgdGV4dDogaS50b1N0cmluZygpLFxyXG4gICAgICAgIGFjdGl2ZTogaSA9PT0gdGFyZ2V0UGFnZVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBkYXRhLnBhZ2luYXRpb24ucHJldiA9IHtcclxuICAgICAgdGV4dDogXCJQcmV2aW91c1wiLFxyXG4gICAgICBkaXNhYmxlZDogdGFyZ2V0UGFnZSA9PT0gMVxyXG4gICAgfTtcclxuXHJcbiAgICBkYXRhLnBhZ2luYXRpb24ubmV4dCA9IHtcclxuICAgICAgdGV4dDogXCJOZXh0XCIsXHJcbiAgICAgIGRpc2FibGVkOiB0YXJnZXRQYWdlID09PSB0b3RhbFBhZ2VzXHJcbiAgICB9O1xyXG5cclxuICAgIGRhdGEucGFnaW5hdGlvbi5wYWdlcyA9IHBhZ2VzO1xyXG4gICAgZGF0YS5wYWdpbmF0aW9uLmN1cnJlbnRQYWdlID0gdGFyZ2V0UGFnZTtcclxuXHJcbiAgICByZXR1cm4gZGF0YS5wYWdpbmF0aW9uO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVXBkYXRlcyB0aGUgcmVzdWx0c0hlYWRpbmcgZGF0YSBzdHJ1Y3R1cmUgdG8gcmVmbGVjdCB0aGUgY3VycmVudCBjb21wb25lbnQgc3RhdGUuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gYXJnc1xyXG4gICAqICAgIEFyZ3VtZW50cyBvYmplY3Qgd2l0aCB0aGUgZm9sbG93aW5nIHN0cnVjdHVyZTpcclxuICAgKiAgICBhcmdzOiB7XHJcbiAgICogICAgICBkYXRhOiB0aGUgY3VycmVudCBpbnN0YW5jZSBvZiBtYXN0ZXIgZGF0YSxcclxuICAgKiAgICAgIHBhZ2U6IChvcHRpb25hbCkgdGhlIGN1cnJlbnQgcGFnZSwgZGVmYXVsdHMgdG8gMVxyXG4gICAqICAgIH1cclxuICAgKlxyXG4gICAqIEByZXR1cm5zIHtyZXN1bHRzSGVhZGluZ3x7bnVtUmVzdWx0cywgdG90YWxSZXN1bHRzfXwqfVxyXG4gICAqL1xyXG4gIGZ1bmN0aW9uIHRyYW5zZm9ybVJlc3VsdHNIZWFkaW5nKGFyZ3MpIHtcclxuICAgIGxldCBwYWdlVG90YWwgPSAwLFxyXG4gICAgICB0b3RhbEFjdGl2ZSA9IDAsXHJcbiAgICAgIHBhZ2UgPSBhcmdzLnBhZ2UgPyBhcmdzLnBhZ2UgOiAxLFxyXG4gICAgICBkYXRhID0gYXJncy5kYXRhLFxyXG4gICAgICByZXN1bHRzSGVhZGluZyA9IGRhdGEucmVzdWx0c0hlYWRpbmc7IC8vIHByZXNlcnZlIGFjdGl2ZSByZXN1bHRzSGVhZGluZy50YWdzXHJcblxyXG4gICAgLy8gVGFsbHkgdGhlIHRvdGFsIGFjdGl2ZSBhbmQgcGFnZSBsZW5ndGguXHJcbiAgICBkYXRhLml0ZW1zLm1hcChmdW5jdGlvbihpdGVtKXtcclxuICAgICAgaWYgKGl0ZW0uaXNBY3RpdmUpIHtcclxuICAgICAgICB0b3RhbEFjdGl2ZSArPSAxO1xyXG4gICAgICAgIGlmIChpdGVtLnBhZ2UgPT09IHBhZ2UpIHtcclxuICAgICAgICAgIHBhZ2VUb3RhbCArPSAxO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gR2V0IHRoZSBpbmRleCAoZnJvbSAxKSBvZiB0aGUgZmlyc3QgYW5kIGxhc3QgaXRlbXMgb24gdGhpcyBwYWdlLlxyXG4gICAgbGV0IGZpcnN0SXRlbSA9IChOdW1iZXIoZGF0YS5tYXhJdGVtcykgKiBOdW1iZXIocGFnZSkpIC0gKE51bWJlcihkYXRhLm1heEl0ZW1zKSAtIDEpLFxyXG4gICAgICBsYXN0SXRlbSA9IGZpcnN0SXRlbSArIChOdW1iZXIocGFnZVRvdGFsKSAtIDEpO1xyXG5cclxuICAgIHJlc3VsdHNIZWFkaW5nLnRvdGFsUmVzdWx0cyA9IHRvdGFsQWN0aXZlO1xyXG4gICAgcmVzdWx0c0hlYWRpbmcubnVtUmVzdWx0cyA9IGZpcnN0SXRlbSArIFwiIC0gXCIgKyBsYXN0SXRlbTsgLy8gQHRvZG8gYWRkIGFjY2Vzc2liaWxpdHkgY29uc2lkZXJhdGlvbiBoZXJlXHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdHNIZWFkaW5nO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmV0dXJucyBhbiBhcnJheSBvZiB0aGUgY3VycmVudGx5IGFjdGl2ZSBmaWx0ZXJzLCBiYXNlZCBvbiBwYXNzZWQgZmlsdGVyRGF0YS5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBkYXRhXHJcbiAgICogICBUaGUgY3VycmVudCBpbnN0YW5jZSBvZiBtYXN0ZXIgZGF0YSBzdHJ1Y3R1cmUuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gZmlsdGVyRGF0YVxyXG4gICAqICBBbiBvYmplY3QgcmVwcmVzZW50aW5nIHRoZSBjbGVhcmVkIGZpbHRlcjpcclxuICAgKiAge1xyXG4gICAqICAgIGNsZWFyZWRGaWx0ZXI6IHtcclxuICAgKiAgICAgICB0eXBlOiAnW2ZpbHRlciB0eXBlXTogbG9jYXRpb24gfHwgdGFnJyxcclxuICAgKiAgICAgICB0ZXh0OiAnW2ZpbHRlciB0ZXh0IG9yIGxhYmVsXScsXHJcbiAgICogICAgICAgdmFsdWU6ICdbZmlsdGVyIHZhbHVlXSdcclxuICAgKiAgICAgfSB8fCAnYWxsJyAoaWYgY2xlYXIgYWxsIGJ1dHRvbiB3YXMgcHJlc3NlZClcclxuICAgKiAgfVxyXG4gICAqXHJcbiAgICogQHJldHVybnMge0FycmF5fVxyXG4gICAqICAgQW4gYXJyYXkgb2YgdGhlIGN1cnJlbnRseSBhY3RpdmUgZmlsdGVyczpcclxuICAgKiAgIFsgIHtcclxuICAgKiAgICAgICAgdHlwZTpcclxuICAgKiAgICAgICAgdGV4dDpcclxuICAgKiAgICAgICAgdmFsdWU6XHJcbiAgICogICAgICB9LCAuLi4gXVxyXG4gICAqL1xyXG4gIGZ1bmN0aW9uIGdldEFjdGl2ZUZpbHRlcnMoZGF0YSwgZmlsdGVyRGF0YSkge1xyXG4gICAgLy8gU2luZ2xlIGZpbHRlciBidXR0b24gY2xpY2tlZCwgc28gcmVtb3ZlIHRoYXQgZmlsdGVyIGZyb20gdGhlIGxpc3QuXHJcbiAgICBpZiAoZmlsdGVyRGF0YS5jbGVhcmVkRmlsdGVyICE9PSBcImFsbFwiKSB7XHJcbiAgICAgIGxldCBmaWx0ZXJzID0gZGF0YS5yZXN1bHRzSGVhZGluZy50YWdzO1xyXG4gICAgICAvLyBSZW1vdmUgdGhlIGNsaWNrZWQgdGFnIGZyb20gdGhlIHRhZ3MgYXJyYXkuXHJcbiAgICAgIHJldHVybiBmaWx0ZXJzLmZpbHRlcihmdW5jdGlvbiAodGFnKSB7XHJcbiAgICAgICAgcmV0dXJuIHRhZy52YWx1ZSAhPT0gZmlsdGVyRGF0YS5jbGVhcmVkRmlsdGVyLnZhbHVlO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAvLyBDbGVhciBhbGwgYnV0dG9uIHdhcyBjbGlja2VkIHNvIHJlbW92ZSBhbGwgZmlsdGVycy5cclxuICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBwYXNzZWQgZmlsdGVycyBhcnJheSBpbmNsdWRlcyBhbiBpdGVtIHdpdGggdGhlIHBhc3NlZCB0eXBlLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIGZpbHRlcnNcclxuICAgKiAgIEFycmF5IG9mIGZpbHRlcnMuXHJcbiAgICogQHBhcmFtIHR5cGVcclxuICAgKiAgIFRoZSB0eXBlIG9mIGZpbHRlciB0byBzZWFyY2ggZm9yLlxyXG4gICAqXHJcbiAgICogQHJldHVybnMgeyp8Ym9vbGVhbn1cclxuICAgKi9cclxuICBmdW5jdGlvbiBoYXNGaWx0ZXIoZmlsdGVycywgdHlwZSkge1xyXG4gICAgcmV0dXJuIGZpbHRlcnMuc29tZShmdW5jdGlvbiAoZmlsdGVyKSB7XHJcbiAgICAgIHJldHVybiBmaWx0ZXIuaGFzT3duUHJvcGVydHkoJ3R5cGUnKSAmJiBmaWx0ZXJbJ3R5cGUnXSA9PT0gdHlwZTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmV0dXJucyB0aGUgdmFsdWUocykgb2YgdGhlIHBhc3NlZCBmaWx0ZXJzIG9mIHRoZSBwYXNzZWQgdHlwZS5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBmaWx0ZXJzXHJcbiAgICogICBBcnJheSBvZiBmaWx0ZXJzIGZyb20gd2hpY2ggdG8gYWJzdHJhY3QgdmFsdWVzLlxyXG4gICAqIEBwYXJhbSB0eXBlXHJcbiAgICogICBUaGUgdHlwZSBvZiBmaWx0ZXIgdG8gc2VhcmNoIGZvci5cclxuICAgKlxyXG4gICAqIEByZXR1cm4gYXJyYXlcclxuICAgKiAgIEFuIGFycmF5IG9mIGZpbHRlciB2YWx1ZXMgb2YgdHlwZS5cclxuICAgKi9cclxuICBmdW5jdGlvbiBnZXRGaWx0ZXJWYWx1ZXMoZmlsdGVycywgdHlwZSkge1xyXG4gICAgcmV0dXJuIGZpbHRlcnMuZmlsdGVyKGZ1bmN0aW9uKGRhdGEpIHtcclxuICAgICAgcmV0dXJuIGRhdGEudHlwZSA9PT0gdHlwZTtcclxuICAgIH0pLm1hcChmdW5jdGlvbihkYXRhKSB7XHJcbiAgICAgIHJldHVybiBkYXRhLnZhbHVlO1xyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldHVybnMgdHJhbnNmb3JtZWQgaW1hZ2VQcm9tbyBkYXRhIG9iamVjdC5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBwcm9tb1xyXG4gICAqICAgVGhlIGltYWdlUHJvbW8uaXRlbVtde30gYmVpbmcgdHJhbnNmb3JtZWQuXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyB7Kn1cclxuICAgKiAgIFRoZSBvcmlnaW5hbCBpbWFnZVByb21vIG9iamVjdCB3aXRoIGEgZm9ybWF0dGVkIHRhZyBwcm9wZXJ0eS5cclxuICAgKi9cclxuICBmdW5jdGlvbiBwcm9tb1RyYW5zZm9ybShwcm9tbykge1xyXG4gICAgLy8gRW5zdXJlIHRhZ3MgYXJlIGFuIGFycmF5LlxyXG4gICAgbGV0IHRhZ3MgPSBbXTtcclxuICAgICQubWFwKHByb21vLnRhZ3MsIGZ1bmN0aW9uKHZhbCwgaW5kZXgpIHsgdGFnc1tpbmRleF0gPSB2YWw7IH0pO1xyXG4gICAgcHJvbW8udGFncyA9IHRhZ3M7XHJcblxyXG4gICAgbGV0IHRhZ3NEYXRhID0ge1xyXG4gICAgICB0YWdzRm9ybWF0dGVkOiBwcm9tby50YWdzLm1hcCh0cmFuc2Zvcm1UYWcpXHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30scHJvbW8sdGFnc0RhdGEpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmV0dXJucyBhIGZvcm1hdHRlZCBpbWFnZVByb21vLnRhZyBvYmplY3Qgd2l0aCBhIGxhYmVsIGFuZCBzdmcgaWNvbiBtYXJrdXAuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gdGFnXHJcbiAgICogICBUaGUgdGFnIGJlaW5nIHRyYW5zZm9ybWVkLlxyXG4gICAqXHJcbiAgICogQHJldHVybnMge3tsYWJlbCwgc3ZnOiBib29sZWFufX1cclxuICAgKi9cclxuICBmdW5jdGlvbiB0cmFuc2Zvcm1UYWcodGFnKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBsYWJlbDogdGFnLmxhYmVsLFxyXG4gICAgICBzdmc6IGdldFN2Z0Zyb21UYWcodGFnLmlkKVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldHVybnMgdGhlIHN2ZyBlbGVtZW50IG1hcmt1cCBmcm9tIHRoZSBjb3JyZXNwb25kaW5nIHRhZyBmaWx0ZXIgY2hlY2tib3ggbGFiZWwgaWNvblxyXG4gICAqXHJcbiAgICogQHBhcmFtIHRhZ1xyXG4gICAqICBUaGUgaW1hZ2VQcm9tbyB0YWcuaWQgd2hvc2UgaWNvbiB3ZSBuZWVkXHJcbiAgICpcclxuICAgKiBAcmV0dXJuIHN0cmluZ1xyXG4gICAqICBUaGUgc3ZnIGVsZW1lbnQgZm9yIHRoZSBtYXRjaGluZyBmaWx0ZXIgZm9ybSB0YWcgaW5wdXQuXHJcbiAgICovXHJcbiAgZnVuY3Rpb24gZ2V0U3ZnRnJvbVRhZyh0YWcpIHtcclxuICAgIC8vIEdldCB0aGUgZXhpc3RpbmcgY29ycmVzcG9uZGluZyBpY29uIG1hcmt1cCBzbyB3ZSBkb24ndCBoYXZlIHRvIHdvcnJ5IGFib3V0IG91dGRhdGVkIG1hcmt1cC5cclxuICAgIHJldHVybiAkKCcuanMtZmlsdGVyLWJ5LXRhZ3MnKS5maW5kKFwiI1wiICsgdGFnKS5wYXJlbnQoKS5zaWJsaW5ncygnc3ZnJykucHJvcCgnb3V0ZXJIVE1MJyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXR1cm5zIGFuIGluc3RhbmNlIG9mIG1hc3RlciBkYXRhIHdoaWNoIGlzIHNvcnRlZCBhbHBoYWJldGljYWxseSBieSBpbWFnZVByb21vLnRpdGxlLnRleHRcclxuICAgKlxyXG4gICAqIEBwYXJhbSBkYXRhXHJcbiAgICogICAgVGhlIGluc3RhbmNlIG9mIG1hc3RlciBkYXRhIGJlaW5nIHNvcnRlZC5cclxuICAgKlxyXG4gICAqIEByZXR1cm5zIHsqfVxyXG4gICAqICAgIFNvcnRlZCBpbnN0YW5jZSBvZiBtYXN0ZXIgZGF0YS5cclxuICAgKi9cclxuICBmdW5jdGlvbiBzb3J0RGF0YUFscGhhYmV0aWNhbGx5KGRhdGEpIHtcclxuICAgIGxldCBpdGVtcyA9IGRhdGEuaXRlbXMuc29ydChmdW5jdGlvbihhLCBiKSB7XHJcbiAgICAgIGxldCBuYW1lQSA9IGEucHJvbW8udGl0bGUudGV4dC50b1VwcGVyQ2FzZSgpLFxyXG4gICAgICAgIG5hbWVCID0gYi5wcm9tby50aXRsZS50ZXh0LnRvVXBwZXJDYXNlKCk7XHJcbiAgICAgIHJldHVybiAobmFtZUEgPCBuYW1lQikgPyAtMSA6IChuYW1lQSA+IG5hbWVCKSA/IDEgOiAwO1xyXG4gICAgfSk7XHJcblxyXG4gICAgbGV0IHBhZ2luYXRlZCA9IHBhZ2luYXRlSXRlbXMoaXRlbXMsIGRhdGEubWF4SXRlbXMpO1xyXG4gICAgZGF0YS5pdGVtcyA9IHBhZ2luYXRlZC5pdGVtcztcclxuICAgIGRhdGEudG90YWxQYWdlcyA9IHBhZ2luYXRlZC50b3RhbFBhZ2VzO1xyXG4gICAgcmV0dXJuIGRhdGE7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXR1cm5zIGluc3RhbmNlIG9mIGxvY2F0aW9uIGxpc3RpbmcgbWFzdGVyRGF0YSwgc29ydGVkIHByb3hpbWl0eSB0byBwbGFjZS5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBwbGFjZVxyXG4gICAqICAgVGhlIGdlb2NvZGUgaW5mb3JtYXRpb24gYnkgd2hpY2ggdG8gc29ydC5cclxuICAgKiBAcGFyYW0gZGF0YVxyXG4gICAqICAgVGhlIGluc3RhbmNlIG9mIGxvY2F0aW9uIGxpc3RpbmcgbWFzdGVyRGF0YS5cclxuICAgKiBAcmV0dXJucyB7Kn1cclxuICAgKiAgIFNvcnRlZCBpbnN0YW5jZSBvZiBsb2NhdGlvbiBsaXN0aW5nIG1hc3RlckRhdGEuXHJcbiAgICovXHJcbiAgZnVuY3Rpb24gc29ydERhdGFBcm91bmRQbGFjZShwbGFjZSwgZGF0YSkge1xyXG4gICAgLy8gR2V0IGFsbCBleGlzdGluZyBtYXJrZXIgZGlzdGFuY2UgZnJvbSBwbGFjZSwgYXNzaWduIGFzIG1hcmtlciBwcm9wZXJ0eS5cclxuICAgIGZvciAobGV0IGtleSBpbiBkYXRhLml0ZW1zKSB7XHJcbiAgICAgIGlmIChkYXRhLml0ZW1zLmhhc093blByb3BlcnR5KGtleSkpIHtcclxuICAgICAgICBkYXRhLml0ZW1zW2tleV0ubWFya2VyLmRpc3RhbmNlID0gZ29vZ2xlLm1hcHMuZ2VvbWV0cnkuc3BoZXJpY2FsLmNvbXB1dGVEaXN0YW5jZUJldHdlZW4ocGxhY2UuZ2VvbWV0cnkubG9jYXRpb24sIGRhdGEuaXRlbXNba2V5XS5tYXJrZXIuZ2V0UG9zaXRpb24oKSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBTb3J0IGV4aXN0aW5nIG1hcmtlcnMgYnkgY2xvc2VzdCB0byB0aGUgcGxhY2UuXHJcbiAgICBkYXRhLml0ZW1zLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcclxuICAgICAgcmV0dXJuIGEubWFya2VyLmRpc3RhbmNlIC0gYi5tYXJrZXIuZGlzdGFuY2U7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBVcGRhdGUgZWFjaCBsb2NhdGlvbiBsaXN0aW5nIGl0ZW0ncyBwYWdlIG51bWJlciBiYXNlZCBvbiBuZXcgbWFya2VyIHNvcnQgb3JkZXIuXHJcbiAgICBsZXQgcGFnaW5hdGVkID0gcGFnaW5hdGVJdGVtcyhkYXRhLml0ZW1zLCBkYXRhLm1heEl0ZW1zKTtcclxuICAgIGRhdGEuaXRlbXMgPSBwYWdpbmF0ZWQuaXRlbXM7XHJcbiAgICBkYXRhLnRvdGFsUGFnZXMgPSBwYWdpbmF0ZWQudG90YWxQYWdlcztcclxuXHJcbiAgICAvLyBSZXR1cm4gdGhlIG5ld2x5IHNvcnRlZCBpbnN0YW5jZSBvZiBsb2NhdGlvbiBsaXN0aW5nIG1hc3RlckRhdGEuXHJcbiAgICByZXR1cm4gZGF0YTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdlb2NvZGVzIGFuIGFkZHJlc3Mgc3RyaW5nIGFyZyBhbmQgZXhlY3V0ZXMgY2FsbGJhY2sgdXBvbiBzdWNjZXNzZnVsIHJldHVybi5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBhZGRyZXNzXHJcbiAgICogICBBZGRyZXNzIHN0cmluZyB0byBiZSBnZW9jb2RlZC5cclxuICAgKiBAcGFyYW0gY2FsbGJhY2tcclxuICAgKiAgIENhbGxiYWNrIGZ1bmN0aW9uIHRvIGV4ZWN1dGUgKHdpdGggY2FsbGJhY2tBcmcpLlxyXG4gICAqIEBwYXJhbSBjYWxsYmFja0FyZ1xyXG4gICAqICAgQXJndW1lbnQgdG8gcGFzcyB0byBjYWxsYmFjay5cclxuICAgKlxyXG4gICAqIEByZXR1cm5zIHsqfVxyXG4gICAqICAgVXBvbiBzdWNjZXNzLCB0aGUgcmV0dXJuIHZhbHVlIG9mIHRoZSBwYXNzZWQgY2FsbGJhY2sgZnVuY3Rpb24uXHJcbiAgICovXHJcbiAgZnVuY3Rpb24gZ2VvY29kZUFkZHJlc3NTdHJpbmcoYWRkcmVzcywgY2FsbGJhY2ssIGNhbGxiYWNrQXJnKSB7XHJcbiAgICAvLyBPbmx5IGF0dGVtcHQgdG8gZXhlY3V0ZSBpZiBnb29nbGUncyBnZW9jb2RlIGxpYnJhcnkgaXMgbG9hZGVkLlxyXG4gICAgaWYgKHR5cGVvZiBtYS5nZW9jb2RlciA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICAvLyBHZW9jb2RlIGFkZHJlc3Mgc3RyaW5nLCB0aGVuIGV4ZWN1dGUgY2FsbGJhY2sgd2l0aCBhcmd1bWVudCB1cG9uIHN1Y2Nlc3MuXHJcbiAgICByZXR1cm4gZ2VvY29kZXIuZ2VvY29kZSh7YWRkcmVzczogYWRkcmVzc30sIGZ1bmN0aW9uIChyZXN1bHRzLCBzdGF0dXMpIHtcclxuICAgICAgaWYgKHN0YXR1cyA9PT0gZ29vZ2xlLm1hcHMuR2VvY29kZXJTdGF0dXMuT0spIHtcclxuICAgICAgICByZXR1cm4gY2FsbGJhY2socmVzdWx0c1swXSwgY2FsbGJhY2tBcmcpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUud2FybignR2VvY29kZSB3YXMgbm90IHN1Y2Nlc3NmdWwgZm9yIHRoZSBmb2xsb3dpbmcgcmVhc29uOiAnICsgc3RhdHVzKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXNldHMgYWxsIGl0ZW1zIGluIGEgbWFzdGVyIGRhdGEgaW5zdGFuY2UgdG8gYWN0aXZlIChpLmUuIG5vdCBmaWx0ZXJlZCBvdXQpLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIGRhdGFcclxuICAgKiAgICBUaGUgaW5zdGFuY2Ugb2YgbWFzdGVyIGRhdGEgd2hvc2UgaXRlbXMgYXJlIGJlaW5nIG1hZGUgYWN0aXZlLlxyXG4gICAqXHJcbiAgICogQHJldHVybnMgeyp9XHJcbiAgICogICAgVGhlIG1hc3RlciBkYXRhIGluc3RhbmNlIHdpdGggYWxsIGFjdGl2ZSBpdGVtcy5cclxuICAgKi9cclxuICBmdW5jdGlvbiBtYWtlQWxsQWN0aXZlKGRhdGEpIHtcclxuICAgIGRhdGEuaXRlbXMgPSBkYXRhLml0ZW1zLm1hcChmdW5jdGlvbihpdGVtKXtcclxuICAgICAgaXRlbS5pc0FjdGl2ZSA9IHRydWU7XHJcbiAgICAgIHJldHVybiBpdGVtO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gZGF0YTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldHVybnMgbWFzdGVyRGF0YSB3aXRoIG5lY2Vzc2FyeSBmaWx0ZXJlZCBpdGVtcyBmbGFnZ2VkIGluYWN0aXZlLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHRhZ3NcclxuICAgKiAgVGhlIGFycmF5IG9mIGZpbHRlcnMgYnkgd2hpY2ggdG8gZmlsdGVyLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIGRhdGFcclxuICAgKiAgIFRoZSBjdXJyZW50IGluc3RhbmNlIG9mIG1hc3RlciBkYXRhIGJlaW5nIGZpbHRlcmVkLlxyXG4gICAqXHJcbiAgICogQHJldHVybnMgeyp9XHJcbiAgICogICBUaGUgJ2ZpbHRlcmVkJyAoZmxhZ2dlZCkgaW5zdGFuY2Ugb2YgbWFzdGVyIGRhdGEuXHJcbiAgICovXHJcbiAgZnVuY3Rpb24gZmlsdGVyRGF0YUJ5VGFncyh0YWdzLCBkYXRhKXtcclxuICAgIGRhdGEuaXRlbXMgPSBkYXRhLml0ZW1zLm1hcChmdW5jdGlvbihpdGVtKSB7XHJcbiAgICAgIGl0ZW0uaXNBY3RpdmUgPSBkb2VzUHJvbW9Db250YWluVGFncyhpdGVtLnByb21vLnRhZ3MsIHRhZ3MpO1xyXG4gICAgICByZXR1cm4gaXRlbTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBkYXRhO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRGV0ZXJtaW5lcyBpZiBhbiBtYXN0ZXJEYXRhIGl0ZW0gY29udGFpbnMgdGhlIG5lY2Vzc2FyeSB0YWcocykuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gaGF5c3RhY2tcclxuICAgKiAgVGhlIGltYWdlUHJvbW8gb2JqZWN0IGluIHF1ZXN0aW9uLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIG5lZWRsZVxyXG4gICAqICAgVGhlIHRhZyhzKSBiZWluZyBzZWFyY2hlZCBmb3IuXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbnwqfVxyXG4gICAqL1xyXG4gIGZ1bmN0aW9uIGRvZXNQcm9tb0NvbnRhaW5UYWdzKGhheXN0YWNrLCBuZWVkbGUpIHtcclxuICAgIHJldHVybiBuZWVkbGUuZXZlcnkoZnVuY3Rpb24odikge1xyXG4gICAgICByZXR1cm4gQm9vbGVhbihoYXlzdGFjay5maWx0ZXIoZnVuY3Rpb24oaXRlbSl7XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC52YWx1ZXMoaXRlbSkuaW5kZXhPZih2KSAhPT0gLTE7XHJcbiAgICAgIH0pLmxlbmd0aCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEFzc2lnbnMgcGFnZSB2YWx1ZXMgdG8gbWFzdGVyRGF0YSBpdGVtcywgYmFzZWQgb24gdGhlIHByb3ZpZGVkIG1heCBudW1iZXIuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gaXRlbXNcclxuICAgKiAgIFRoZSBtYXN0ZXIgZGF0YSBpdGVtcy5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBtYXhcclxuICAgKiAgIFRoZSBtYXggbnVtYmVyIG9mIGl0ZW1zIHRvIHNob3cgcGVyIHBhZ2UuXHJcbiAgICpcclxuICAgKiBAcmV0dXJuc1xyXG4gICAqICAgVGhlIHVwZGF0ZWQgbWFzdGVyIGRhdGEgaXRlbXMuXHJcbiAgICovXHJcbiAgZnVuY3Rpb24gcGFnaW5hdGVJdGVtcyhpdGVtcywgbWF4KSB7XHJcbiAgICBsZXQgcGFnZSA9IDEsXHJcbiAgICAgIHBhZ2VUb3RhbCA9IDA7XHJcbiAgICBsZXQgcGFnaW5hdGVkSXRlbXMgPSBpdGVtcy5tYXAoZnVuY3Rpb24oaXRlbSl7XHJcbiAgICAgIGlmIChpdGVtLmlzQWN0aXZlKSB7XHJcbiAgICAgICAgaWYgKHBhZ2VUb3RhbCA8IG1heCl7XHJcbiAgICAgICAgICBpdGVtLnBhZ2UgPSBwYWdlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgIHBhZ2UgKz0gMTtcclxuICAgICAgICAgIHBhZ2VUb3RhbCA9IDA7XHJcbiAgICAgICAgICBpdGVtLnBhZ2UgPSBwYWdlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwYWdlVG90YWwgKz0gMTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gaXRlbTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIGl0ZW1zOiBwYWdpbmF0ZWRJdGVtcyxcclxuICAgICAgdG90YWxQYWdlczogcGFnZVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gUmVtb3ZlIHRoZSBpbWFnZVByb21vcyBjaGlsZHJlbiBjb250ZW50IG9uIHRoZSBjdXJyZW50IGxvY2F0aW9uIGxpc3RpbmcgcGFnZS5cclxuICBmdW5jdGlvbiBjbGVhckxpc3RpbmdQYWdlKCkge1xyXG4gICAgJChsaXN0aW5nQ29sKS5maW5kKGxpc3RpbmdQYXJlbnQpLmh0bWwoJycpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVuZGVycyB0aGUgbmV3IHBhZ2Ugb2YgbG9jYXRpb24gbGlzdGluZyBpbWFnZSBwcm9tb3MgYW5kIGJyb2FkY2FzdHMgdGhlIHJlbmRlcmVkIG1hc3RlciBkYXRhIGluc3RhbmNlLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIGFyZ3NcclxuICAgKiAgIEFyZ3VtZW50cyBvYmplY3Qgd2l0aCB0aGUgZm9sbG93aW5nIHN0cnVjdHVyZTpcclxuICAgKiAgIHtcclxuICAgKiAgICAgIHBhZ2U6IChvcHRpb25hbCkgdGhlIHBhZ2UgdG8gYmUgcmVuZGVyZWQsIGRlZmF1bHRzIHRvIDFcclxuICAgKiAgICAgIGRhdGE6IHRoZSBpbnN0YW5jZSBvZiBtYXN0ZXIgZGF0YSB0byByZW5kZXJcclxuICAgKiAgIH1cclxuICAgKi9cclxuICBmdW5jdGlvbiByZW5kZXJMaXN0aW5nUGFnZShhcmdzKSB7XHJcbiAgICBjbGVhckxpc3RpbmdQYWdlKCk7XHJcbiAgICBsZXQgJGVsID0gJChsaXN0aW5nQ29sKS5maW5kKGxpc3RpbmdQYXJlbnQpLFxyXG4gICAgICBwYWdlID0gYXJncy5wYWdlID8gYXJncy5wYWdlIDogMTtcclxuXHJcbiAgICBhcmdzLmRhdGEuaXRlbXMuZm9yRWFjaChmdW5jdGlvbihpdGVtKXtcclxuICAgICAgaWYgKGl0ZW0uaXNBY3RpdmUgJiYgaXRlbS5wYWdlID09PSBwYWdlKSB7XHJcbiAgICAgICAgJGVsLmFwcGVuZChpdGVtLm1hcmt1cCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIEZvY3VzIG9uIHRoZSBmaXJzdCBmb2N1c2FibGUgZWxlbWVudCBpbiB0aGUgZmlyc3QgbGlzdGluZ1xyXG4gICAgbGV0ICRmaXJzdExpc3RpbmcgPSAkZWwuZmluZChsb2NhdGlvbkxpc3RpbmdSb3cpLmZpcnN0KCk7XHJcbiAgICAvLyA6Zm9jdXNhYmxlIGlzIHBvc3NpYmxlIHdpdGggaGVscGVycy9qUXVlcnlFeHRlbmQuanNcclxuICAgICRmaXJzdExpc3RpbmcuZmluZCgnOmZvY3VzYWJsZScpLmVxKDApLmZvY3VzKCk7XHJcblxyXG4gICAgc3RpY2t5LmluaXQoJChtYXBDb2wpKTtcclxuICB9XHJcblxyXG59KHdpbmRvdyxkb2N1bWVudCxqUXVlcnkpO1xyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAod2luZG93LGRvY3VtZW50LCQsdW5kZWZpbmVkKSB7XHJcblxyXG4gIGxldCB3aW5kb3dXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG5cclxuICAkKHdpbmRvdykucmVzaXplKGZ1bmN0aW9uKCl7XHJcbiAgICB3aW5kb3dXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG4gIH0pO1xyXG5cclxuICAkKCcuanMtbWFpbi1uYXYnKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgbGV0IG9wZW5DbGFzcyA9IFwiaXMtb3BlblwiLFxyXG4gICAgICAgIGNsb3NlQ2xhc3MgPSBcImlzLWNsb3NlZFwiLFxyXG4gICAgICAgIHN1Ym1lbnVDbGFzcyA9IFwic2hvdy1zdWJtZW51XCIsXHJcbiAgICAgICAgJHBhcmVudCA9ICQodGhpcyksXHJcbiAgICAgICAgJG1haW5OYXZUb2dnbGUgPSAkcGFyZW50LmZpbmQoJy5qcy1tYWluLW5hdi10b2dnbGUnKSxcclxuICAgICAgICAkbWFpbk5hdkl0ZW1zID0gJHBhcmVudC5maW5kKCcuanMtbWFpbi1uYXYtdG9nZ2xlLCAuanMtbWFpbi1uYXYtdG9wLWxpbmsnKSxcclxuICAgICAgICBwcmV2aW91c0tleSA9IG51bGwsXHJcbiAgICAgICAgYnJlYWtwb2ludCA9IDgwMDsgLy8gbWF0Y2hlcyBDU1MgYnJlYWtwb2ludCBmb3IgTWFpbiBOYXZcclxuXHJcbiAgICAkbWFpbk5hdkl0ZW1zLm9uKCdrZXlkb3duJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICBpZih3aW5kb3dXaWR0aCA8PSBicmVha3BvaW50KSB7XHJcbiAgICAgICAgLy8gb25seSBmb3IgZGVza3RvcFxyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gR3JhYiBhbGwgdGhlIERPTSBpbmZvIHdlIG5lZWQuLi5cclxuICAgICAgbGV0ICRsaW5rID0gJCh0aGlzKSxcclxuICAgICAgICAgICR0b3BMZXZlbExpbmtzID0gJHBhcmVudC5maW5kKCcubWFfX21haW4tbmF2X190b3AtbGluaycpLFxyXG4gICAgICAgICAgb3BlbiA9ICRsaW5rLmhhc0NsYXNzKG9wZW5DbGFzcyksXHJcbiAgICAgICAgICAkb3BlbkNvbnRlbnQgPSAkcGFyZW50LmZpbmQoJy5qcy1tYWluLW5hdi1jb250ZW50LicgKyBvcGVuQ2xhc3MpLFxyXG4gICAgICAgICAgJGZvY3VzZWRFbGVtZW50ID0gJChkb2N1bWVudC5hY3RpdmVFbGVtZW50KSxcclxuICAgICAgLy8gcmVsZXZhbnQgaWYgb3Blbi4uXHJcbiAgICAgICAgICAkdG9wTGV2ZWxJdGVtID0gJGZvY3VzZWRFbGVtZW50LnBhcmVudHMoJy5tYV9fbWFpbi1uYXZfX2l0ZW0nKSxcclxuICAgICAgICAgICR0b3BMZXZlbExpbmsgPSAkdG9wTGV2ZWxJdGVtLmZpbmQoJy5tYV9fbWFpbi1uYXZfX3RvcC1saW5rJyksXHJcbiAgICAgICAgICAkZHJvcGRvd25MaW5rcyA9ICRsaW5rLmZpbmQoJy5tYV9fbWFpbi1uYXZfX3N1Yml0ZW0gLm1hX19tYWluLW5hdl9fbGluaycpLFxyXG4gICAgICAgICAgZm9jdXNJbmRleEluRHJvcGRvd24gPSAkZHJvcGRvd25MaW5rcy5pbmRleCgkZm9jdXNlZEVsZW1lbnQpLFxyXG4gICAgICAgICAgaXNTaGlmdCA9ICEhZS5zaGlmdEtleTsgLy8gdHlwZWNhc3QgdG8gYm9vbGVhblxyXG5cclxuICAgICAgLy8gZG93biBhcnJvdyBvciB0YWIga2V5XHJcbiAgICAgIGlmKChlLmtleUNvZGUgPT09IDQwKSB8fCAoZS5rZXlDb2RlID09PSA5ICYmICFpc1NoaWZ0KSkge1xyXG4gICAgICAgIC8vIGhpZGUgY29udGVudFxyXG4gICAgICAgIC8vIElmIG1lbnViYXIgZm9jdXNcclxuICAgICAgICAvLyAgLSBPcGVuIHB1bGwgZG93biBtZW51IGFuZCBzZWxlY3QgZmlyc3QgbWVudSBpdGVtXHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyBJZiBkcm9wZG93biBmb2N1c1xyXG4gICAgICAgIC8vICAtIFNlbGVjdCBuZXh0IG1lbnUgaXRlbVxyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZihvcGVuKSB7XHJcbiAgICAgICAgICBpZihmb2N1c0luZGV4SW5Ecm9wZG93biA9PT0gKCRkcm9wZG93bkxpbmtzLmxlbmd0aC0xKSApIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYoZm9jdXNJbmRleEluRHJvcGRvd24gPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgJGRyb3Bkb3duTGlua3NbMV0uZm9jdXMoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAkZHJvcGRvd25MaW5rc1tmb2N1c0luZGV4SW5Ecm9wZG93bisxXS5mb2N1cygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgc2hvdygkdG9wTGV2ZWxJdGVtLmZpbmQoJy5qcy1tYWluLW5hdi1jb250ZW50JykpO1xyXG4gICAgICAgICAgJHRvcExldmVsTGluay5hdHRyKCdhcmlhLWV4cGFuZGVkJywgJ3RydWUnKTtcclxuICAgICAgICAgICRsaW5rLmFkZENsYXNzKG9wZW5DbGFzcyk7XHJcbiAgICAgICAgICBpZigkZHJvcGRvd25MaW5rc1sxXSkge1xyXG4gICAgICAgICAgICAkZHJvcGRvd25MaW5rc1sxXS5mb2N1cygpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgIC8vIHVwIGFycm93IG9yIHNoaWZ0K3RhYiBrZXlzXHJcbiAgICAgICBpZigoZS5rZXlDb2RlID09PSAzOCkgfHwgKGUua2V5Q29kZSA9PT0gOSAmJiBpc1NoaWZ0KSkge1xyXG4gICAgICAgIC8vIGhpZGUgY29udGVudFxyXG4gICAgICAgIC8vIElmIG1lbnViYXIgZm9jdXNcclxuICAgICAgICAvLyAgLSBPcGVuIHB1bGwgZG93biBtZW51IGFuZCBzZWxlY3QgZmlyc3QgbWVudSBpdGVtXHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyBJZiBkcm9wZG93biBmb2N1c1xyXG4gICAgICAgIC8vICAtIFNlbGVjdCBwcmV2aW91cyBtZW51IGl0ZW1cclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaWYob3Blbikge1xyXG4gICAgICAgICAgaWYoZm9jdXNJbmRleEluRHJvcGRvd24gPD0gMSApIHsgLy8gbm90IDAgYmMgb2YgaGlkZGVuIGZpcnN0IGxpbmtcclxuICAgICAgICAgICAgaGlkZSgkb3BlbkNvbnRlbnQpO1xyXG4gICAgICAgICAgICAkdG9wTGV2ZWxMaW5rLmZvY3VzKCkuYXR0cignYXJpYS1leHBhbmRlZCcsICdmYWxzZScpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkZHJvcGRvd25MaW5rc1tmb2N1c0luZGV4SW5Ecm9wZG93bi0xXS5mb2N1cygpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHNob3coJHRvcExldmVsSXRlbS5maW5kKCcuanMtbWFpbi1uYXYtY29udGVudCcpKTtcclxuICAgICAgICAgICR0b3BMZXZlbExpbmsuZm9jdXMoKS5hdHRyKCdhcmlhLWV4cGFuZGVkJywgJ3RydWUnKTtcclxuICAgICAgICAgICRsaW5rLmFkZENsYXNzKG9wZW5DbGFzcyk7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBlc2Mga2V5XHJcbiAgICAgIGlmKGUua2V5Q29kZSA9PT0gMjcpIHtcclxuICAgICAgICAvLyBDbG9zZSBtZW51IGFuZCByZXR1cm4gZm9jdXMgdG8gbWVudWJhclxyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBoaWRlKCRvcGVuQ29udGVudCk7XHJcbiAgICAgICAgJGxpbmsucmVtb3ZlQ2xhc3Mob3BlbkNsYXNzKTtcclxuICAgICAgICAkdG9wTGV2ZWxMaW5rLmZvY3VzKCkuYXR0cignYXJpYS1leHBhbmRlZCcsJ2ZhbHNlJyk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBsZWZ0IGFycm93IGtleVxyXG4gICAgICBpZihlLmtleUNvZGUgPT09IDM3KSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIC8vIGhpZGUgY29udGVudFxyXG4gICAgICAgIC8vIElmIG1lbnViYXIgZm9jdXNcclxuICAgICAgICAvLyAgLSBQcmV2aW91cyBtZW51YmFyIGl0ZW1cclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vIElmIGRyb3Bkb3duIGZvY3VzXHJcbiAgICAgICAgLy8gIC0gT3BlbiBwcmV2aW91cyBwdWxsIGRvd24gbWVudSBhbmQgc2VsZWN0IGZpcnN0IGl0ZW1cclxuICAgICAgICBoaWRlKCRvcGVuQ29udGVudCk7XHJcbiAgICAgICAgJHRvcExldmVsTGluay5hdHRyKCdhcmlhLWV4cGFuZGVkJywnZmFsc2UnKTtcclxuICAgICAgICBsZXQgaW5kZXggPSAkdG9wTGV2ZWxMaW5rcy5pbmRleCgkdG9wTGV2ZWxMaW5rKS0xO1xyXG4gICAgICAgIGlmKCR0b3BMZXZlbExpbmtzW2luZGV4XSkge1xyXG4gICAgICAgICAgJHRvcExldmVsTGlua3NbaW5kZXhdLmZvY3VzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgIH1cclxuICAgICAgLy8gcmlnaHQgYXJyb3cga2V5XHJcbiAgICAgIGlmKGUua2V5Q29kZSA9PT0gMzkpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgLy8gaGlkZSBjb250ZW50XHJcbiAgICAgICAgLy8gSWYgbWVudWJhciBmb2N1c1xyXG4gICAgICAgIC8vICAtIE5leHQgbWVudWJhciBpdGVtXHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyBJZiBkcm9wZG93biBmb2N1c1xyXG4gICAgICAgIC8vICAtIE9wZW4gbmV4dCBwdWxsIG1lbnUgYW5kIHNlbGVjdCBmaXJzdCBpdGVtXHJcbiAgICAgICAgaGlkZSgkb3BlbkNvbnRlbnQpO1xyXG4gICAgICAgICR0b3BMZXZlbExpbmsuYXR0cignYXJpYS1leHBhbmRlZCcsJ2ZhbHNlJyk7XHJcbiAgICAgICAgbGV0IGluZGV4ID0gJHRvcExldmVsTGlua3MuaW5kZXgoJHRvcExldmVsTGluaykrMTtcclxuICAgICAgICBpZigkdG9wTGV2ZWxMaW5rc1tpbmRleF0pIHtcclxuICAgICAgICAgICR0b3BMZXZlbExpbmtzW2luZGV4XS5mb2N1cygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIGtleSBjb2RlIDkgaXMgdGhlIHRhYiBrZXlcclxuICAgICAgaWYob3BlbiB8fCAodHlwZW9mKGUua2V5Y29kZSkgIT09IFwidW5kZWZpbmVkXCIgJiYgZS5rZXljb2RlICE9PSA5KSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgIH0pO1xyXG4gICAgJG1haW5OYXZJdGVtcy5vbignbW91c2VlbnRlcicsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgJCh0aGlzKS5jaGlsZHJlbignYnV0dG9uJykuYXR0cihcImFyaWEtZXhwYW5kZWRcIixcInRydWVcIik7XHJcblxyXG4gICAgICBpZih3aW5kb3dXaWR0aCA+IGJyZWFrcG9pbnQpIHtcclxuICAgICAgICBsZXQgJG9wZW5Db250ZW50ID0gJCh0aGlzKS5maW5kKCcuanMtbWFpbi1uYXYtY29udGVudCcpO1xyXG4gICAgICAgIHNob3coJG9wZW5Db250ZW50KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICAkbWFpbk5hdkl0ZW1zLm9uKCdtb3VzZWxlYXZlJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAkKHRoaXMpLmNoaWxkcmVuKCdidXR0b24nKS5hdHRyKFwiYXJpYS1leHBhbmRlZFwiLFwiZmFsc2VcIik7XHJcblxyXG4gICAgICBpZih3aW5kb3dXaWR0aCA+IGJyZWFrcG9pbnQpIHtcclxuICAgICAgICBsZXQgJG9wZW5Db250ZW50ID0gJCh0aGlzKS5maW5kKCcuanMtbWFpbi1uYXYtY29udGVudCcpO1xyXG4gICAgICAgIGhpZGUoJG9wZW5Db250ZW50KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICAkbWFpbk5hdlRvZ2dsZS5jaGlsZHJlbignYnV0dG9uLCBhJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICBsZXQgJGVsID0gJCh0aGlzKTtcclxuICAgICAgbGV0ICRlbFBhcmVudCA9ICQodGhpcykucGFyZW50KCk7XHJcbiAgICAgIGxldCAkY29udGVudCA9ICRlbFBhcmVudC5maW5kKCcuanMtbWFpbi1uYXYtY29udGVudCcpO1xyXG4gICAgICBsZXQgJG9wZW5Db250ZW50ID0gJHBhcmVudC5maW5kKCcuanMtbWFpbi1uYXYtY29udGVudC4nICsgb3BlbkNsYXNzKTtcclxuICAgICAgbGV0IGlzT3BlbiA9ICRjb250ZW50Lmhhc0NsYXNzKG9wZW5DbGFzcyk7XHJcblxyXG4gICAgICAvLyBtb2JpbGVcclxuICAgICAgaWYod2luZG93V2lkdGggPD0gYnJlYWtwb2ludCkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAvLyBhZGQgb3BlbiBjbGFzcyB0byB0aGlzIGl0ZW1cclxuICAgICAgICAkZWxQYXJlbnQuYWRkQ2xhc3Mob3BlbkNsYXNzKTtcclxuICAgICAgICBzaG93KCRjb250ZW50KTtcclxuICAgICAgICAkZWwuYXR0cignYXJpYS1leHBhbmRlZCcsICd0cnVlJyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaGlkZSgkb3BlbkNvbnRlbnQpO1xyXG4gICAgICAgICRlbC5hdHRyKCdhcmlhLWV4cGFuZGVkJywgJ2ZhbHNlJyk7XHJcblxyXG4gICAgICAgIGlmKCFpc09wZW4pIHtcclxuICAgICAgICAgIHNob3coJGNvbnRlbnQpO1xyXG4gICAgICAgICAgJGVsLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLCAndHJ1ZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICAkbWFpbk5hdlRvZ2dsZS5sYXN0KClcclxuICAgICAgLmZpbmQoJy5qcy1tYWluLW5hdi1jb250ZW50IGxpJylcclxuICAgICAgICAubGFzdCgpXHJcbiAgICAgICAgICAuZmluZCgnYScpLm9uKCdrZXlkb3duJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICAvLyBwcmV2aW91cyBrZXkgd2FzIG5vdCBhIHNoaWZ0XHJcbiAgICAgICAgICAgIGlmKGUua2V5Q29kZSA9PT0gOSAmJiBwcmV2aW91c0tleSAhPT0gMTYpIHsgIC8vIHRhYiBhcnJvd1xcXHJcbiAgICAgICAgICAgICAgbGV0ICRvcGVuQ29udGVudCA9ICRwYXJlbnQuZmluZCgnLmpzLW1haW4tbmF2LWNvbnRlbnQuJyArIG9wZW5DbGFzcyk7XHJcbiAgICAgICAgICAgICAgaGlkZSgkb3BlbkNvbnRlbnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHByZXZpb3VzS2V5ID0gZS5rZXlDb2RlO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAkKCcuanMtY2xvc2Utc3ViLW5hdicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgIGxldCAkb3BlbkNvbnRlbnQgPSAkcGFyZW50LmZpbmQoJy5qcy1tYWluLW5hdi1jb250ZW50LicgKyBvcGVuQ2xhc3MpO1xyXG4gICAgICBoaWRlKCRvcGVuQ29udGVudCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBIaWRlIGFueSBvcGVuIHN1Ym1lbnUgY29udGVudCB3aGVuIHRoZSBzaWRlYmFyIG1lbnUgaXMgY2xvc2VkXHJcbiAgICAkKCcuanMtaGVhZGVyLW1lbnUtYnV0dG9uJykuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAgIGxldCAkb3BlbkNvbnRlbnQgPSAkcGFyZW50LmZpbmQoJy5qcy1tYWluLW5hdi1jb250ZW50LicgKyBvcGVuQ2xhc3MpO1xyXG4gICAgICBoaWRlKCRvcGVuQ29udGVudCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBmdW5jdGlvbiBoaWRlKCRjb250ZW50KSB7XHJcbiAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcyhzdWJtZW51Q2xhc3MpO1xyXG4gICAgICAkcGFyZW50LmZpbmQoXCIuXCIgKyBvcGVuQ2xhc3MpLnJlbW92ZUNsYXNzKG9wZW5DbGFzcyk7XHJcblxyXG4gICAgICBpZih3aW5kb3dXaWR0aCA8PSBicmVha3BvaW50KSB7XHJcbiAgICAgICAgJGNvbnRlbnQuYWRkQ2xhc3MoY2xvc2VDbGFzcyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJGNvbnRlbnRcclxuICAgICAgICAuc3RvcCggdHJ1ZSwgdHJ1ZSApXHJcbiAgICAgICAgLnNsaWRlVXAoJ2Zhc3QnLGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgJGNvbnRlbnRcclxuICAgICAgICAgICAgLmFkZENsYXNzKGNsb3NlQ2xhc3MpXHJcbiAgICAgICAgICAgIC5zbGlkZURvd24oMCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzaG93KCRjb250ZW50KSB7XHJcbiAgICAgICQoJ2JvZHknKS5hZGRDbGFzcyhzdWJtZW51Q2xhc3MpO1xyXG4gICAgICBpZih3aW5kb3dXaWR0aCA8PSBicmVha3BvaW50KSB7XHJcbiAgICAgICAgJGNvbnRlbnRcclxuICAgICAgICAgIC5hZGRDbGFzcyhvcGVuQ2xhc3MpXHJcbiAgICAgICAgICAucmVtb3ZlQ2xhc3MoY2xvc2VDbGFzcyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJGNvbnRlbnRcclxuICAgICAgICAgIC5zdG9wKCB0cnVlLCB0cnVlIClcclxuICAgICAgICAgIC5kZWxheSggMjAwIClcclxuICAgICAgICAgIC5zbGlkZVVwKDAsZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICRjb250ZW50XHJcbiAgICAgICAgICAgICAgLmFkZENsYXNzKG9wZW5DbGFzcylcclxuICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoY2xvc2VDbGFzcylcclxuICAgICAgICAgICAgICAuc2xpZGVEb3duKCdmYXN0Jyk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgfSk7XHJcblxyXG59KHdpbmRvdyxkb2N1bWVudCxqUXVlcnkpO1xyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAod2luZG93LGRvY3VtZW50LCQsdW5kZWZpbmVkKSB7XG5cbiAgJCgnLmpzLW1haW4tbmF2JykuZWFjaChmdW5jdGlvbigpIHtcbiAgICBsZXQgJHBhcmVudCA9ICQodGhpcyksXG4gICAgICAkbWFpbk5hdlRvZ2dsZSA9ICRwYXJlbnQuZmluZCgnLmpzLW1haW4tbmF2LXRvZ2dsZScpO1xuXG4gICAgLy8gbWFrZSByb290IHRvcC1sZXZlbCBsaW5rcyBpbmVydCBmb3IgcGlsb3RcbiAgICAkbWFpbk5hdlRvZ2dsZS5jaGlsZHJlbignYScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9KTtcblxuICAgIC8vIEVuc3VyZSB0b3AtbGV2ZWwgbGlua3MgdGhhdCBhcmUgcG90ZW50aWFsIGFuY2hvciBsaW5rcyBjbG9zZSB0aGUgc2lkZWJhciBvbiBtb2JpbGVcbiAgICAkcGFyZW50LmZpbmQoJy5qcy1tYWluLW5hdi10b3AtbGluaycpLmZpbmQoJ2EnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICQoJy5qcy1oZWFkZXItbWVudS1idXR0b24nKS50cmlnZ2VyKCdjbGljaycpO1xuICAgIH0pO1xuXG4gIH0pO1xuXG59KHdpbmRvdyxkb2N1bWVudCxqUXVlcnkpO1xuXG4iLCIvLyAqKioqKiogTWVudSBidXR0b24gKioqKioqXHJcbmxldCBtZW51QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5qcy1oZWFkZXItbWVudS1idXR0b25cIik7XHJcblxyXG5pZihudWxsICE9PSBtZW51QnV0dG9uKXtcclxuICBtZW51QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihldmVudCkge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpLmNsYXNzTGlzdC50b2dnbGUoXCJzaG93LW1lbnVcIik7XHJcbiAgfSk7XHJcbn1cclxuXHJcbi8vICoqKioqKiBNYWluIEhlYWRlciBTZWFyY2ggYnV0dG9uIG9uIG1vYmlsZSBzaG91bGQgb3BlbiB0aGUgbW9iaWxlIG1lbnUgICoqKioqKlxyXG5sZXQgc2VhcmNoRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuanMtaGVhZGVyLXNlYXJjaC1tZW51IC5qcy1oZWFkZXItc2VhcmNoLWZvcm1cIik7XHJcblxyXG5pZihudWxsICE9PSBzZWFyY2hGb3JtKXtcclxuICBzZWFyY2hGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgIGlmKHdpbmRvdy5pbm5lcldpZHRoID4gNjIwKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKS5jbGFzc0xpc3QudG9nZ2xlKFwic2hvdy1tZW51XCIpO1xyXG4gIH0pO1xyXG59XHJcblxyXG5cclxuIiwiaW1wb3J0IGdldFRlbXBsYXRlIGZyb20gXCIuLi9oZWxwZXJzL2dldEhhbmRsZWJhclRlbXBsYXRlLmpzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAod2luZG93LGRvY3VtZW50LCQsdW5kZWZpbmVkKSB7XHJcbiAgXHJcbiAgJCgnLmpzLW9yZy1zZWxlY3RvcicpLmVhY2goZnVuY3Rpb24oaSl7XHJcbiAgICBsZXQgJGVsID0gJCh0aGlzKTtcclxuICAgIGxldCBkYXRhID0gb3JnU2VsZWN0b3JbaV07XHJcbiAgICBsZXQgY29tcGlsZWRUZW1wbGF0ZSA9IGdldFRlbXBsYXRlKCdvcmdJbmZvJyk7XHJcbiAgICBsZXQgJHNlbGVjdCA9ICRlbC5maW5kKCdzZWxlY3QnKS5maXJzdCgpO1xyXG4gICAgbGV0ICRwbGFjZWhvbGRlciA9ICRlbC5maW5kKCcuanMtb3JnLWluZm8nKTtcclxuXHJcbiAgICAvL3JlbmRlciB0aGUgdGVtcGxhdGUgYmFzZWQgb24gdGhlIGN1cnJlbnQgdmFsdWVcclxuICAgIHJlbmRlclRlbXBsYXRlKCRzZWxlY3QudmFsKCkpO1xyXG5cclxuICAgIC8vIFdoZW4gdGhlIHNlbGVjdCBjaGFuZ2VzXHJcbiAgICAkc2VsZWN0LmNoYW5nZSgoKSA9PiB7XHJcbiAgICAgIC8vcmVuZGVyIHRoZSB0ZW1wbGF0ZSBiYXNlZCBvbiB0aGUgbmV3IHZhbHVlXHJcbiAgICAgIHJlbmRlclRlbXBsYXRlKCRzZWxlY3QudmFsKCkpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gUmVuZGVyIHRoZSB0ZW1wbGF0ZSBiYXNlZCBvbiB2YWx1ZVxyXG4gICAgZnVuY3Rpb24gcmVuZGVyVGVtcGxhdGUodmFsdWUpIHtcclxuICAgICAgaWYgKHR5cGVvZihkYXRhLm9yZ2FuaXphdGlvbnNbdmFsdWVdKSA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICRwbGFjZWhvbGRlci5odG1sKFwiXCIpO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJHBsYWNlaG9sZGVyLmh0bWwoY29tcGlsZWRUZW1wbGF0ZShkYXRhLm9yZ2FuaXphdGlvbnNbdmFsdWVdKSk7XHJcblxyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbn0od2luZG93LGRvY3VtZW50LGpRdWVyeSk7XHJcbiIsImltcG9ydCBnZXRUZW1wbGF0ZSBmcm9tIFwiLi4vaGVscGVycy9nZXRIYW5kbGViYXJUZW1wbGF0ZS5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHdpbmRvdyxkb2N1bWVudCwkLHVuZGVmaW5lZCkge1xuXG4gIGlmKCQoJy5qcy1wYWdpbmF0aW9uJykubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8ge3tjb21wYXJlIHVuaWNvcm5zIHBvbmllcyBvcGVyYXRvcj1cIjxcIn19XG4gIC8vIFx0SSBrbmV3IGl0LCB1bmljb3JucyBhcmUganVzdCBsb3ctcXVhbGl0eSBwb25pZXMhXG4gIC8vIHt7L2NvbXBhcmV9fVxuICAvL1xuICAvLyAoZGVmYXVsdHMgdG8gPT0gaWYgb3BlcmF0b3Igb21pdHRlZClcbiAgLy9cbiAgLy8ge3tlcXVhbCB1bmljb3JucyBwb25pZXMgfX1cbiAgLy8gXHRUaGF0J3MgYW1hemluZywgdW5pY29ybnMgYXJlIGFjdHVhbGx5IHVuZGVyY292ZXIgcG9uaWVzXG4gIC8vIHt7L2VxdWFsfX1cbiAgLy8gKGZyb20gaHR0cDovL2RvZ2ludGhlaGF0LmNvbS5hdS8yMDEyLzAyL2NvbXBhcmlzb24tYmxvY2staGVscGVyLWZvci1oYW5kbGViYXJzLXRlbXBsYXRlcy8pXG4gIEhhbmRsZWJhcnMucmVnaXN0ZXJIZWxwZXIoJ2NvbXBhcmUnLCBmdW5jdGlvbihsdmFsdWUsIHJ2YWx1ZSwgb3B0aW9ucykge1xuXG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPCAzKVxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSGFuZGxlcmJhcnMgSGVscGVyICdjb21wYXJlJyBuZWVkcyAyIHBhcmFtZXRlcnNcIik7XG5cbiAgICBsZXQgb3BlcmF0b3IgPSBvcHRpb25zLmhhc2gub3BlcmF0b3IgfHwgXCI9PVwiO1xuXG4gICAgbGV0IG9wZXJhdG9ycyA9IHtcbiAgICAgICc9PSc6XHRcdGZ1bmN0aW9uKGwscikgeyByZXR1cm4gbCA9PSByOyB9LFxuICAgICAgJz09PSc6XHRmdW5jdGlvbihsLHIpIHsgcmV0dXJuIGwgPT09IHI7IH0sXG4gICAgICAnIT0nOlx0XHRmdW5jdGlvbihsLHIpIHsgcmV0dXJuIGwgIT0gcjsgfSxcbiAgICAgICc8JzpcdFx0ZnVuY3Rpb24obCxyKSB7IHJldHVybiBsIDwgcjsgfSxcbiAgICAgICc+JzpcdFx0ZnVuY3Rpb24obCxyKSB7IHJldHVybiBsID4gcjsgfSxcbiAgICAgICc8PSc6XHRcdGZ1bmN0aW9uKGwscikgeyByZXR1cm4gbCA8PSByOyB9LFxuICAgICAgJz49JzpcdFx0ZnVuY3Rpb24obCxyKSB7IHJldHVybiBsID49IHI7IH0sXG4gICAgICAndHlwZW9mJzpcdGZ1bmN0aW9uKGwscikgeyByZXR1cm4gdHlwZW9mIGwgPT0gcjsgfVxuICAgIH07XG5cbiAgICBpZiAoIW9wZXJhdG9yc1tvcGVyYXRvcl0pXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJIYW5kbGVyYmFycyBIZWxwZXIgJ2NvbXBhcmUnIGRvZXNuJ3Qga25vdyB0aGUgb3BlcmF0b3IgXCIrb3BlcmF0b3IpO1xuXG4gICAgbGV0IHJlc3VsdCA9IG9wZXJhdG9yc1tvcGVyYXRvcl0obHZhbHVlLHJ2YWx1ZSk7XG5cbiAgICBpZiggcmVzdWx0ICkge1xuICAgICAgcmV0dXJuIG9wdGlvbnMuZm4odGhpcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBvcHRpb25zLmludmVyc2UodGhpcyk7XG4gICAgfVxuXG4gIH0pO1xuXG4gIC8vIFNldCB1cCBnbG9iYWwgY29tcG9uZW50IGNvbmZpZ1xuICBsZXQgY29tcGlsZWRUZW1wbGF0ZSA9IGdldFRlbXBsYXRlKCdwYWdpbmF0aW9uJyksXG4gICAgcHJldkJ1dHRvbiA9ICcuanMtcGFnaW5hdGlvbi1wcmV2JyxcbiAgICBuZXh0QnV0dG9uID0gJy5qcy1wYWdpbmF0aW9uLW5leHQnLFxuICAgIHBhZ2VCdXR0b24gPSAnLmpzLXBhZ2luYXRpb24tcGFnZSc7XG5cbiAgJCgnLmpzLXBhZ2luYXRpb24nKS5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgbGV0ICRlbCA9ICQodGhpcyk7XG5cbiAgICAvLyBMaXN0ZW4gZm9yIHByZXZpb3VzIHBhZ2UgYnV0dG9uIGNsaWNrIGFuZCB0cmlnZ2VyIHBhZ2luYXRpb24gZXZlbnQuXG4gICAgJGVsLm9uKCdjbGljaycsIHByZXZCdXR0b24sIGZ1bmN0aW9uICgpIHtcbiAgICAgICRlbC50cmlnZ2VyKCdtYTpQYWdpbmF0aW9uOlBhZ2luYXRpb24nLCBbJ3ByZXZpb3VzJ10pO1xuICAgIH0pO1xuICAgIC8vIExpc3RlbiBmb3IgbmV4dCBidXR0b24gY2xpY2sgYW5kIHRyaWdnZXIgcGFnaW5hdGlvbiBldmVudC5cbiAgICAkZWwub24oJ2NsaWNrJywgbmV4dEJ1dHRvbiwgZnVuY3Rpb24gKCkge1xuICAgICAgJGVsLnRyaWdnZXIoJ21hOlBhZ2luYXRpb246UGFnaW5hdGlvbicsIFsnbmV4dCddKTtcbiAgICB9KTtcbiAgICAvLyBMaXN0ZW4gZm9yIHBhZ2UgbnVtYmVyIGJ1dHRvbiBjbGljayBhbmQgdHJpZ2dlciBwYWdpbmF0aW9uIGV2ZW50O1xuICAgICRlbC5vbignY2xpY2snLCBwYWdlQnV0dG9uLCBmdW5jdGlvbiAoZSkge1xuICAgICAgbGV0IHRhcmdldFBhZ2VOdW1iZXIgPSAkKGUudGFyZ2V0KS5kYXRhKCdwYWdlJyk7XG4gICAgICAkZWwudHJpZ2dlcignbWE6UGFnaW5hdGlvbjpQYWdpbmF0aW9uJywgW3RhcmdldFBhZ2VOdW1iZXJdKTtcbiAgICB9KTtcblxuICAgIC8vIExpc3RlbiBmb3IgbmV3IGRhdGEsIHJlbmRlciBuZXcgcGFnaW5hdGlvbi5cbiAgICAkZWwub24oJ21hOlBhZ2luYXRpb246RGF0YVVwZGF0ZWQnLCBmdW5jdGlvbiAoZSwgZGF0YSkge1xuICAgICAgcmVuZGVyUGFnaW5hdGlvbih7ZGF0YTogZGF0YSwgJGVsOiAkZWx9KTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgLyoqXG4gICAqIFJlbmRlcnMgdGhlIGNvbnRlbnRzIG9mIGEgc3BlY2lmaWMgcmVzdWx0cyBwYWdpbmF0aW9uIGNvbXBvbmVudC5cbiAgICpcbiAgICogQHBhcmFtIGFyZ3NcbiAgICogICBUaGUgYXJndW1lbnRzIG9iamVjdCwgY2FuIGNvbnRhaW4gdGhlIGZvbGxvd2luZyBwcm9wZXJ0aWVzOlxuICAgKiAgICAgIGRhdGE6IGRhdGEgb2JqZWN0IGZyb20gd2hpY2ggdG8gcG9wdWxhdGUgaGFuZGxlYmFycyB0ZW1wbGF0ZSB2YXJpYWJsZXMgKHJlcXVpcmVkKSxcbiAgICogICAgICBjb250ZXh0OiB0aGUgcGFyZW50IGNvbXBvbmVudCBzZWxlY3RvclxuICAgKi9cbiAgZnVuY3Rpb24gcmVuZGVyUGFnaW5hdGlvbihhcmdzKSB7XG4gICAgLy8gRG9uJ3QgYXR0ZW1wdCB0byByZW5kZXIgYW55dGhpbmcgaWYgd2UgZG9uJ3QgaGF2ZSBuZXcgZGF0YS5cbiAgICBpZiAoIWFyZ3MuZGF0YSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIENyZWF0ZSBuZXcgbWFya3VwIHVzaW5nIGhhbmRsZWJhcnMgdGVtcGxhdGUsIGhlbHBlci5cbiAgICBsZXQgbWFya3VwID0gY29tcGlsZWRUZW1wbGF0ZShhcmdzLmRhdGEpO1xuICAgIGFyZ3MuJGVsLmh0bWwobWFya3VwKTtcbiAgfVxuXG59KHdpbmRvdyxkb2N1bWVudCxqUXVlcnkpO1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHdpbmRvdyxkb2N1bWVudCwkLHVuZGVmaW5lZCkge1xyXG4gIFxyXG4gICQoJy5qcy1pbnB1dC1kYXRlJykuZWFjaChmdW5jdGlvbigpe1xyXG4gICAgbGV0ICRlbCA9ICQodGhpcyk7XHJcbiAgICBsZXQgcmVzdHJpY3QgPSAkZWwuZGF0YSgncmVzdHJpY3QnKTtcclxuICAgIGxldCBwaWNrZXIgPSBuZXcgUGlrYWRheSh7IFxyXG4gICAgICBmaWVsZDogdGhpcyxcclxuICAgICAgZm9ybWF0OiAnTU0vREQvWVlZWScsXHJcbiAgICB9KTtcclxuXHJcbiAgICBzd2l0Y2gocmVzdHJpY3QpIHtcclxuICAgICAgY2FzZSAnbWF4JzpcclxuICAgICAgICBwaWNrZXIuc2V0TWF4RGF0ZShuZXcgRGF0ZSgpKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnbWluJzpcclxuICAgICAgICBwaWNrZXIuc2V0TWluRGF0ZShuZXcgRGF0ZSgpKTtcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuXHJcbiAgICAkZWwuYXR0cigndHlwZScsJ3RleHQnKTtcclxuICB9KTtcclxuXHJcbn0od2luZG93LGRvY3VtZW50LGpRdWVyeSk7XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICh3aW5kb3csZG9jdW1lbnQsJCx1bmRlZmluZWQpIHtcblxuICAkKCcuanMtbWEtcmVzcG9uc2l2ZS12aWRlbycpLmZpdFZpZHMoKTtcblxufSh3aW5kb3csZG9jdW1lbnQsalF1ZXJ5KTsiLCJpbXBvcnQgZ2V0VGVtcGxhdGUgZnJvbSBcIi4uL2hlbHBlcnMvZ2V0SGFuZGxlYmFyVGVtcGxhdGUuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHdpbmRvdyxkb2N1bWVudCwkLHVuZGVmaW5lZCkge1xuICAvLyBTZXQgdXAgZ2xvYmFsIGNvbXBvbmVudCBjb25maWdcbiAgbGV0IGNvbXBpbGVkVGVtcGxhdGUgPSBnZXRUZW1wbGF0ZSgncmVzdWx0c0hlYWRpbmcnKSxcbiAgICBjbGVhckFsbEJ1dHRvbiA9ICcuanMtcmVzdWx0cy1oZWFkaW5nLWNsZWFyJywgLy8gZXZlbnRzIHRyaWdnZXJlZCBvbiBwYXJlbnRcbiAgICBmaWx0ZXJCdXR0b24gPSAnLmpzLXJlc3VsdHMtaGVhZGluZy10YWcnOyAvLyBldmVudHMgdHJpZ2dlcmVkIG9uIHBhcmVudFxuXG4gICQoXCIuanMtcmVzdWx0cy1oZWFkaW5nXCIpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgJGVsID0gJCh0aGlzKTtcblxuICAgIC8vIExpc3RlbiBmb3IgY2xlYXIgYWxsIGJ1dHRvbiBjbGljayArIHRyaWdnZXIgaW50ZXJhY3Rpb24gZXZlbnQgb24gcGFyZW50LlxuICAgICRlbC5vbignY2xpY2snLCBjbGVhckFsbEJ1dHRvbiwgZnVuY3Rpb24gKCkge1xuICAgICAgJGVsLnRyaWdnZXIoJ21hOlJlc3VsdHNIZWFkaW5nOkFjdGl2ZVRhZ0NsaWNrZWQnLCBbe2NsZWFyZWRGaWx0ZXI6ICdhbGwnfV0pO1xuICAgIH0pO1xuXG4gICAgLy8gTGlzdGVuIGZvciBzaW5nbGUgZmlsdGVyIGJ1dHRvbiBjbGljayBhbmQgdHJpZ2dlciBpbnRlcmFjdGlvbiBldmVudCBvbiBwYXJlbnQuXG4gICAgJGVsLm9uKCdjbGljaycsIGZpbHRlckJ1dHRvbiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgIGxldCBjbGVhcmVkRmlsdGVyID0ge1xuICAgICAgICAndHlwZSc6ICQoZS50YXJnZXQpLmRhdGEoJ21hLWZpbHRlci10eXBlJyksXG4gICAgICAgICd2YWx1ZSc6ICQoZS50YXJnZXQpLmRhdGEoJ21hLWZpbHRlci12YWx1ZScpLFxuICAgICAgICAndGV4dCc6ICQoZS50YXJnZXQpLnRleHQoKVxuICAgICAgfTtcblxuICAgICAgJGVsLnRyaWdnZXIoJ21hOlJlc3VsdHNIZWFkaW5nOkFjdGl2ZVRhZ0NsaWNrZWQnLCBbe2NsZWFyZWRGaWx0ZXI6IGNsZWFyZWRGaWx0ZXJ9XSk7XG4gICAgfSk7XG5cbiAgICAvLyBMaXN0ZW4gZm9yIG5ldyByZXN1bHRzIGhlYWRpbmcgZGF0YSwgcmVuZGVyIG5ldyByZXN1bHRzIGhlYWRpbmcuXG4gICAgJGVsLm9uKCdtYTpSZXN1bHRzSGVhZGluZzpEYXRhVXBkYXRlZCcsIGZ1bmN0aW9uIChlLCBkYXRhKSB7XG4gICAgICByZW5kZXJSZXN1bHRzSGVhZGluZyh7ZGF0YTogZGF0YSwgJGVsOiAkZWx9KTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgLyoqXG4gICAqIFJlbmRlcnMgdGhlIGNvbnRlbnRzIG9mIGEgc3BlY2lmaWMgcmVzdWx0cyBoZWFkaW5nIGNvbXBvbmVudC5cbiAgICpcbiAgICogQHBhcmFtIGFyZ3NcbiAgICogICBUaGUgYXJndW1lbnRzIG9iamVjdCwgY2FuIGNvbnRhaW4gdGhlIGZvbGxvd2luZyBwcm9wZXJ0aWVzOlxuICAgKiAgICAgIGRhdGE6IGRhdGEgb2JqZWN0IGZyb20gd2hpY2ggdG8gcG9wdWxhdGUgaGFuZGxlYmFycyB0ZW1wbGF0ZSB2YXJpYWJsZXMgKHJlcXVpcmVkKSxcbiAgICogICAgICBjb250ZXh0OiB0aGUgcGFyZW50IGNvbXBvbmVudCBzZWxlY3RvclxuICAgKi9cbiAgZnVuY3Rpb24gcmVuZGVyUmVzdWx0c0hlYWRpbmcoYXJncykge1xuICAgIC8vIERvbid0IGF0dGVtcHQgdG8gcmVuZGVyIGFueXRoaW5nIGlmIHdlIGRvbid0IGhhdmUgbmV3IGRhdGEuXG4gICAgaWYgKCFhcmdzLmRhdGEpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gQ3JlYXRlIG5ldyBtYXJrdXAgdXNpbmcgaGFuZGxlYmFycyB0ZW1wbGF0ZSwgaGVscGVyLlxuICAgIGxldCBtYXJrdXAgPSBjb21waWxlZFRlbXBsYXRlKGFyZ3MuZGF0YSk7XG4gICAgYXJncy4kZWwuaHRtbChtYXJrdXApO1xuICB9XG5cbn0od2luZG93LGRvY3VtZW50LGpRdWVyeSk7XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAod2luZG93LGRvY3VtZW50LCQsdW5kZWZpbmVkKSB7XHJcblxyXG4gICQoJy5qcy1tYS1yaWNoLXRleHQnKS5lYWNoKGZ1bmN0aW9uKCl7XHJcbiAgICBsZXQgJGVsID0gJCh0aGlzKTtcclxuXHJcbiAgICAkZWwuZmluZCgndGFibGUnKS53cmFwKCBcIjxkaXYgY2xhc3M9J21hX19yaWNoLXRleHRfX3RhYmxlLXdyYXBwZXInPjwvZGl2PlwiICk7XHJcbiAgfSk7XHJcbn0od2luZG93LGRvY3VtZW50LGpRdWVyeSk7XHJcbiIsImltcG9ydCBjaGVja01vYmlsZSBmcm9tIFwiLi4vaGVscGVycy9jc3NDb250cm9sQ29kZS5qc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHdpbmRvdyxkb2N1bWVudCwkLHVuZGVmaW5lZCkge1xyXG5cclxuICAkKFwiLmpzLXNjcm9sbC1hbmNob3JzXCIpLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICBsZXQgJGVsID0gJCh0aGlzKSxcclxuICAgICAgICAkZWxQYXJlbnQgPSAkZWwucGFyZW50KCkuY3NzKCdwb3NpdGlvbicpID09PSAncmVsYXRpdmUnID8gJGVsLnBhcmVudCgpIDogJGVsLnBhcmVudCgpLm9mZnNldFBhcmVudCgpLFxyXG4gICAgICAgICRsaW5rcyA9ICRlbC5maW5kKCcuanMtc2Nyb2xsLWFuY2hvcnMtbGluaycpLFxyXG4gICAgICAgIGVsSGVpZ2h0LFxyXG4gICAgICAgIGhlYWRlckJ1ZmZlciA9IDAsXHJcbiAgICAgICAgbG93ZXJMaW1pdCxcclxuICAgICAgICB1cHBlckxpbWl0LFxyXG4gICAgICAgIGRlYm91bmNlVGltZXIsXHJcbiAgICAgICAgYWN0aXZlQ2xhc3MgPSBcImlzLWFjdGl2ZVwiLFxyXG4gICAgICAgIGFjdGl2ZUFuY2hvckluZGV4ID0gMCxcclxuICAgICAgICBhbmNob3JzID0gW10sXHJcbiAgICAgICAgbnVtQW5jaG9ycyA9IDAsXHJcbiAgICAgICAgaXNNb2JpbGUgPSBmYWxzZSxcclxuICAgICAgICBsaW5rU2Nyb2xsaW5nID0gZmFsc2U7XHJcblxyXG4gICAgc2V0VmFyaWFibGVzKCk7XHJcblxyXG4gICAgLy8gZGVmYXVsdCBhc3N1bXB0aW9uIGFzIHRvIHdoZXJlIHRoZSBzY3JlZW4gd2lsbCBsb2FkXHJcbiAgICAkZWwuYXR0cignZGF0YS1zdGlja3knLCd0b3AnKTtcclxuXHJcbiAgICAvLyB1cGRhdGUgdmFyaWFibGVzIG9uZSBtb3JlIHRpbWUgdG8gY2F0Y2ggYW55IHBvc3QgcGFnZSBsb2FkIGNoYW5nZXNcclxuICAgIHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcbiAgICAgIHNldFZhcmlhYmxlcygpO1xyXG4gICAgfSwxMDAwKTtcclxuXHJcbiAgICAkbGlua3Mub24oJ2NsaWNrJyxmdW5jdGlvbihlKSB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgIGxldCAkbGluayA9ICQodGhpcyk7XHJcblxyXG4gICAgICAvLyBpcyB0aGUgbWVudSBjbG9zZWQgb24gbW9iaWxlXHJcbiAgICAgIGlmKCEkZWwuaGFzQ2xhc3MoJ2lzLW9wZW4nKSAmJiBpc01vYmlsZSkgeyAgICAgXHJcbiAgICAgICAgLy8ganVzdCBzaG93IHRoZSBtZW51XHJcbiAgICAgICAgJGVsLmFkZENsYXNzKCdpcy1vcGVuJyk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgICBcclxuICAgICAgYWN0aXZlQW5jaG9ySW5kZXggPSAkKHRoaXMpLmRhdGEoJ2luZGV4Jyk7XHJcbiAgICAgIC8vIGZpbmQgdGhlIGxvY2F0aW9uIG9mIHRoZSBkZXNpcmVkIGxpbmsgYW5kIHNjcm9sbCB0aGUgcGFnZVxyXG4gICAgICBsZXQgcG9zaXRpb24gPSBhbmNob3JzW2FjdGl2ZUFuY2hvckluZGV4XS5wb3NpdGlvbjtcclxuICAgICAgLy8gY2xvc2UgdGhlIG1lbnVcclxuICAgICAgJGVsLnJlbW92ZUNsYXNzKCdpcy1vcGVuJyk7XHJcbiAgICAgIC8vIHByZXZlbnQgdGhlIHNjcm9sbCBldmVudCBmcm9tIHVwZGF0aW5nIGFjdGl2ZSBsaW5rc1xyXG4gICAgICBsaW5rU2Nyb2xsaW5nID0gdHJ1ZTtcclxuXHJcbiAgICAgICQoXCJodG1sLGJvZHlcIikuc3RvcCh0cnVlLHRydWUpLmFuaW1hdGUoe3Njcm9sbFRvcDpwb3NpdGlvbn0sICc3NTAnLCBmdW5jdGlvbigpe1xyXG4gICAgICAgIGxpbmtTY3JvbGxpbmcgPSBmYWxzZTtcclxuICAgICAgICAvLyBHZXQgdGhlIGxpbmsgaGFzaCB0YXJnZXQgc28gd2UgY2FuIGJyaW5nIGZvY3VzIHRvIGl0XHJcbiAgICAgICAgbGV0IGhhc2ggPSBhbmNob3JzW2FjdGl2ZUFuY2hvckluZGV4XS5oYXNoO1xyXG4gICAgICAgIC8vIGJyaW5nIGZvY3VzIHRvIHRoZSBpdGVtIHdlIGp1c3Qgc2Nyb2xsZWQgdG9cclxuICAgICAgICAkKGhhc2gpLmZvY3VzKCk7XHJcbiAgICAgICAgLy8gdGltaW5nIGlzc3VlIHdpdGggd2luZG93LnNjcm9sbCBldmVudCBmaXJpbmcuXHJcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgLy8gc2V0IHRoaXMgbGluayBhcyBhY3RpdmUuXHJcbiAgICAgICAgICAkZWwuZmluZCgnLicgKyBhY3RpdmVDbGFzcykucmVtb3ZlQ2xhc3MoYWN0aXZlQ2xhc3MpO1xyXG4gICAgICAgICAgJGxpbmsuYWRkQ2xhc3MoYWN0aXZlQ2xhc3MpO1xyXG4gICAgICAgIH0sMzApO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIGlmIHRoZSBjb250ZW50IGNvbnRhaW5zIGFjY29yZGlvbnMsIFxyXG4gICAgLy8gcmVhZGp1c3Qgc2V0dGluZ3Mgd2hlbiB0aGVyZSBzdGF0ZSBjaGFuZ2VzLlxyXG4gICAgJCgnLmpzLWFjY29yZGlvbi1saW5rJykub24oJ2NsaWNrJyxmdW5jdGlvbigpIHtcclxuICAgICAgaWYodHlwZW9mIGRlYm91bmNlVGltZXIgPT09IFwibnVtYmVyXCIpIHtcclxuICAgICAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KGRlYm91bmNlVGltZXIpO1xyXG4gICAgICB9XHJcbiAgICAgIGRlYm91bmNlVGltZXIgPSB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG4gICAgICAgIHNldFZhcmlhYmxlcygpO1xyXG4gICAgICAgIHNldFBvc2l0aW9uKCk7XHJcbiAgICAgICAgYWN0aXZhdGVMaW5rKCk7XHJcbiAgICAgIH0sNDAwKTtcclxuICAgIH0pXHJcblxyXG4gICAgJGVsLmZpbmQoXCIuanMtc2Nyb2xsLWFuY2hvcnMtdG9nZ2xlXCIpLm9uKCdjbGljaycsZnVuY3Rpb24oKSB7XHJcbiAgICAgICRlbC50b2dnbGVDbGFzcygnaXMtb3BlbicpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gbWFrZSB0aGUgbGlua3Mgc3RpY2t5XHJcbiAgICAkKHdpbmRvdykucmVzaXplKGZ1bmN0aW9uKCkge1xyXG4gICAgICBpZih0eXBlb2YgZGVib3VuY2VUaW1lciA9PT0gXCJudW1iZXJcIikge1xyXG4gICAgICAgIHdpbmRvdy5jbGVhclRpbWVvdXQoZGVib3VuY2VUaW1lcik7XHJcbiAgICAgIH1cclxuICAgICAgZGVib3VuY2VUaW1lciA9IHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgc2V0VmFyaWFibGVzKCk7XHJcbiAgICAgICAgc2V0UG9zaXRpb24oKTtcclxuICAgICAgICBhY3RpdmF0ZUxpbmsoKTtcclxuICAgICAgfSwzMDApO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHNldFBvc2l0aW9uKCk7XHJcblxyXG4gICAgICBpZighbGlua1Njcm9sbGluZyl7XHJcbiAgICAgICAgYWN0aXZhdGVMaW5rKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGZ1bmN0aW9uIHNldFZhcmlhYmxlcygpIHtcclxuICAgICAgbGV0IHRvcE9mZnNldCA9IDA7XHJcblxyXG4gICAgICBoZWFkZXJCdWZmZXIgPSAwO1xyXG4gICAgICBlbEhlaWdodCA9ICRlbC5vdXRlckhlaWdodCh0cnVlKTtcclxuICAgICAgdXBwZXJMaW1pdCA9ICRlbFBhcmVudC5vZmZzZXQoKS50b3A7XHJcbiAgICAgIGlzTW9iaWxlID0gY2hlY2tNb2JpbGUoJGVsKTtcclxuXHJcbiAgICAgIGlmKCRlbFBhcmVudFswXS5oYXNBdHRyaWJ1dGUoXCJzdHlsZVwiKSAmJiAhaXNNb2JpbGUpIHtcclxuICAgICAgICAkZWxQYXJlbnQucmVtb3ZlQXR0cignc3R5bGUnKTtcclxuICAgICAgfVxyXG4gXHJcbiAgICAgIGlmKGlzTW9iaWxlKSB7XHJcbiAgICAgICAgaGVhZGVyQnVmZmVyID0gJCgnLmpzLXN0aWNreS1oZWFkZXInKS5oZWlnaHQoKSB8fCAwO1xyXG4gICAgICAgIHVwcGVyTGltaXQgLT0gaGVhZGVyQnVmZmVyO1xyXG4gICAgICAgIHRvcE9mZnNldCA9IGVsSGVpZ2h0O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBsb3dlckxpbWl0ID0gdXBwZXJMaW1pdCArICRlbFBhcmVudC5vdXRlckhlaWdodCh0cnVlKSAtICRlbC5oZWlnaHQoKTtcclxuXHJcbiAgICAgIC8vIGxvY2F0ZSB0aGUgcG9zaXRpb24gb2YgYWxsIG9mIHRoZSBhbmNob3IgdGFyZ2V0c1xyXG4gICAgICBhbmNob3JzID0gbmV3IEFycmF5O1xyXG4gICAgICAkbGlua3MuZWFjaChmdW5jdGlvbihpLGUpe1xyXG4gICAgICAgIGxldCAkZWwgPSAkKHRoaXMpLFxyXG4gICAgICAgICAgJGxpbmsgPSAkZWwuaXMoJ2EnKSA/ICRlbCA6ICRlbC5maW5kKCdhJyksXHJcbiAgICAgICAgICBoYXNoID0gJGxpbmtbMF0uaGFzaCxcclxuICAgICAgICAgIHBvc2l0aW9uID0gJChoYXNoKS5vZmZzZXQoKSA/ICQoaGFzaCkub2Zmc2V0KCkudG9wIC0gaGVhZGVyQnVmZmVyIC0gdG9wT2Zmc2V0IDogdXBwZXJMaW1pdDtcclxuXHJcbiAgICAgICAgYW5jaG9yc1tpXSA9IHsgaGFzaCwgcG9zaXRpb24gfTtcclxuXHJcbiAgICAgICAgJGVsLmRhdGEoJ2luZGV4JyxpKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICAvLyByZWNvcmQgdGhlIG51bWJlciBvZiBhbmNob3JzIGZvciBwZXJmb3JtYW5jZVxyXG4gICAgICBudW1BbmNob3JzID0gYW5jaG9ycy5sZW5ndGg7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2V0UG9zaXRpb24oKSB7XHJcbiAgICAgIGxldCB3aW5kb3dUb3AgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCksXHJcbiAgICAgICAgICBhdHRyID0gJGVsLmF0dHIoJ2RhdGEtc3RpY2t5JyksXHJcbiAgICAgICAgICB0b3AgPSBhdHRyICE9PSAndG9wJyAmJiB3aW5kb3dUb3AgPD0gdXBwZXJMaW1pdCwgXHJcbiAgICAgICAgICBtaWRkbGUgPSBhdHRyICE9PSAnbWlkZGxlJyAmJiB3aW5kb3dUb3AgPCBsb3dlckxpbWl0ICYmIHdpbmRvd1RvcCA+IHVwcGVyTGltaXQsXHJcbiAgICAgICAgICBib3R0b20gPSBhdHRyICE9PSAnYm90dG9tJyAmJiB3aW5kb3dUb3AgPj0gbG93ZXJMaW1pdDtcclxuICAgICAgXHJcbiAgICAgIGlmKCRlbFBhcmVudFswXS5oYXNBdHRyaWJ1dGUoXCJzdHlsZVwiKSAmJiAhaXNNb2JpbGUpIHtcclxuICAgICAgICAkZWxQYXJlbnQucmVtb3ZlQXR0cignc3R5bGUnKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYoISRlbFBhcmVudFswXS5oYXNBdHRyaWJ1dGUoXCJzdHlsZVwiKSAmJiBpc01vYmlsZSAmJiBhdHRyID09PSAnbWlkZGxlJykge1xyXG4gICAgICAgICRlbFBhcmVudC5jc3MoeydwYWRkaW5nVG9wJzplbEhlaWdodH0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZih0b3ApIHtcclxuICAgICAgICAkZWwuYXR0cignZGF0YS1zdGlja3knLCd0b3AnKTtcclxuXHJcbiAgICAgICAgaWYoaXNNb2JpbGUpe1xyXG4gICAgICAgICAgJGVsUGFyZW50LnJlbW92ZUF0dHIoJ3N0eWxlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IFxyXG4gICAgICBlbHNlIGlmIChtaWRkbGUpIHtcclxuICAgICAgICAkZWwuYXR0cignZGF0YS1zdGlja3knLCdtaWRkbGUnKTtcclxuXHJcbiAgICAgICAgaWYoaXNNb2JpbGUpe1xyXG4gICAgICAgICAgJGVsUGFyZW50LmNzcyh7J3BhZGRpbmdUb3AnOmVsSGVpZ2h0fSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IFxyXG4gICAgICBlbHNlIGlmIChib3R0b20pIHtcclxuICAgICAgICAkZWwuYXR0cignZGF0YS1zdGlja3knLCdib3R0b20nKTtcclxuXHJcbiAgICAgICAgaWYoaXNNb2JpbGUpe1xyXG4gICAgICAgICAgJGVsUGFyZW50LnJlbW92ZUF0dHIoJ3N0eWxlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gYWN0aXZhdGVMaW5rKCkge1xyXG4gICAgICAvLyBkbyB3ZSBoYXZlIG1vcmUgdGhhbiBvbmUgYW5jaG9yXHJcbiAgICAgIGlmKG51bUFuY2hvcnMgPCAyIHx8IGxpbmtTY3JvbGxpbmcpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIGdldCB0aGUgY3VycmVudCBzY3JvbGwgcG9zaXRpb24gYW5kIG9mZnNldCBieSBoYWxmIHRoZSB2aWV3IHBvcnRcclxuICAgICAgbGV0IHdpbmRvd1RvcCA9ICQod2luZG93KS5zY3JvbGxUb3AoKSArICh3aW5kb3cuaW5uZXJIZWlnaHQvMiksXHJcbiAgICAgICAgICBjdXJyZW50QW5jaG9yID0gYWN0aXZlQW5jaG9ySW5kZXg7XHJcbiAgICAgIFxyXG4gICAgICAvLyBpcyB0aGVyZSBhIHByZXYgdGFyZ2V0XHJcbiAgICAgIC8vIGFuZCBcclxuICAgICAgLy8gaXMgdGhlIGN1cnJlbnQgc2Nyb2xsIHBvc2l0aW9uIGFib3ZlIHRoZSBjdXJyZW50IHRhcmdldFxyXG4gICAgICBpZihjdXJyZW50QW5jaG9yID4gMCAmJiB3aW5kb3dUb3AgPCBhbmNob3JzW2FjdGl2ZUFuY2hvckluZGV4XS5wb3NpdGlvbikgeyBcclxuICAgICAgICAvLyBtYWtlIHRoZSBwcmV2IGxpbmsgYWN0aXZlXHJcbiAgICAgICAgLS1hY3RpdmVBbmNob3JJbmRleDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gaXMgdGhlcmUgYSBuZXh0IHRhcmdldFxyXG4gICAgICAvLyBhbmRcclxuICAgICAgLy8gaXMgdGhlIGN1cnJlbnQgc2Nyb2xsIHBvc2l0aW9uIGJlbG93IHRoZSBuZXh0IHRhcmdldFxyXG4gICAgICBlbHNlIGlmKGN1cnJlbnRBbmNob3IgPCBudW1BbmNob3JzLTEgJiYgd2luZG93VG9wID4gYW5jaG9yc1thY3RpdmVBbmNob3JJbmRleCsxXS5wb3NpdGlvbikgeyBcclxuICAgICAgICAvLyBtYWtlIHRoZSBuZXh0IGxpbmsgYWN0aXZlXHJcbiAgICAgICAgKythY3RpdmVBbmNob3JJbmRleDtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGN1cnJlbnRBbmNob3IgIT09IGFjdGl2ZUFuY2hvckluZGV4KSB7XHJcbiAgICAgICAgLy8gbW92ZSB0aGUgYWN0aXZlIGZsYWdcclxuICAgICAgICAkZWwuZmluZCgnLicgKyBhY3RpdmVDbGFzcykucmVtb3ZlQ2xhc3MoYWN0aXZlQ2xhc3MpO1xyXG4gICAgICAgICRsaW5rcy5lcShhY3RpdmVBbmNob3JJbmRleCkuYWRkQ2xhc3MoYWN0aXZlQ2xhc3MpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSk7XHJcbn0od2luZG93LGRvY3VtZW50LGpRdWVyeSk7XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICh3aW5kb3csZG9jdW1lbnQsJCx1bmRlZmluZWQpIHtcclxuXHJcbiAgJCgnLmpzLXV0aWwtbmF2JykuZWFjaChmdW5jdGlvbigpIHtcclxuICAgIGxldCBvcGVuQ2xhc3MgPSBcImlzLW9wZW5cIixcclxuICAgICAgICBjbG9zZUNsYXNzID0gXCJpcy1jbG9zZWRcIixcclxuICAgICAgICBzdWJtZW51Q2xhc3MgPSBcInNob3ctdXRpbG1lbnVcIixcclxuICAgICAgICAkcGFyZW50ID0gJCh0aGlzKSxcclxuICAgICAgICB3YWl0Rm9ySXQgPSBudWxsO1xyXG5cclxuICAgICQoJy5qcy1jbG9zZS1zdWItbmF2Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgICAgbGV0ICRvcGVuQ29udGVudCA9ICRwYXJlbnQuZmluZCgnLmpzLXV0aWwtbmF2LWNvbnRlbnQuJyArIG9wZW5DbGFzcyk7XHJcbiAgICAgIGhpZGUoJG9wZW5Db250ZW50KTtcclxuICAgIH0pO1xyXG5cclxuICAgICRwYXJlbnQuZmluZCgnLmpzLXV0aWwtbmF2LXRvZ2dsZSA+IGEnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgIGUucHJldmVudGRlZmF1bHQ7XHJcblxyXG4gICAgICBsZXQgb3BlbiA9ICQodGhpcykuaGFzQ2xhc3Mob3BlbkNsYXNzKSxcclxuICAgICAgICAkY29udGVudCA9ICQodGhpcykubmV4dCgnLmpzLXV0aWwtbmF2LWNvbnRlbnQnKSxcclxuICAgICAgICAkb3BlbkNvbnRlbnQgPSAkcGFyZW50LmZpbmQoJy5qcy11dGlsLW5hdi1jb250ZW50LicgKyBvcGVuQ2xhc3MpO1xyXG5cclxuICAgICAgLy8gaGlkZSBvdGhlciBjb250ZW50XHJcbiAgICAgIGhpZGUoJG9wZW5Db250ZW50KTtcclxuICAgICAgXHJcbiAgICAgIGlmKG9wZW4pIHsgXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIGFkZCBvcGVuIGNsYXNzIHRvIHRoaXMgaXRlbVxyXG4gICAgICAkKHRoaXMpLmFkZENsYXNzKG9wZW5DbGFzcyk7XHJcbiAgICAgIC8vIGFkZCBvcGVuIGNsYXNzIHRvIHRoZSBjb3JyZWN0IGNvbnRlbnQgYmFzZWQgb24gaW5kZXhcclxuICAgICAgJGNvbnRlbnQuYXR0cihcImFyaWEtaGlkZGVuXCIsXCJmYWxzZVwiKTtcclxuXHJcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuICAgICAgICAkY29udGVudFxyXG4gICAgICAgICAgLnJlbW92ZUNsYXNzKGNsb3NlQ2xhc3MpXHJcbiAgICAgICAgICAuYWRkQ2xhc3Mob3BlbkNsYXNzKTtcclxuICAgICAgICAkKCdib2R5JykuYWRkQ2xhc3Moc3VibWVudUNsYXNzKVxyXG4gICAgICB9LCAuMSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkcGFyZW50LmZpbmQoJy5qcy1jbG9zZS11dGlsLW5hdicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0O1xyXG5cclxuICAgICAgaGlkZSggJCh0aGlzKS5jbG9zZXN0KCcuanMtdXRpbC1uYXYtY29udGVudCcpICk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCcuanMtY2xvc2Utc3ViLW5hdicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgIGxldCAkb3BlbkNvbnRlbnQgPSAkcGFyZW50LmZpbmQoJy5qcy11dGlsLW5hdi1jb250ZW50LicgKyBvcGVuQ2xhc3MpO1xyXG4gICAgICBoaWRlKCRvcGVuQ29udGVudCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBmdW5jdGlvbiBoaWRlKCRjb250ZW50KSB7XHJcbiAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcyhzdWJtZW51Q2xhc3MpXHJcbiAgICAgICRwYXJlbnQuZmluZChcIi5cIiArIG9wZW5DbGFzcykucmVtb3ZlQ2xhc3Mob3BlbkNsYXNzKTtcclxuICAgICAgJGNvbnRlbnRcclxuICAgICAgICAucmVtb3ZlQ2xhc3Mob3BlbkNsYXNzKVxyXG4gICAgICAgIC5hZGRDbGFzcyhjbG9zZUNsYXNzKTtcclxuXHJcbiAgICAgIGlmKHdhaXRGb3JJdCkge1xyXG4gICAgICAgIGNsZWFyVGltZW91dCh3YWl0Rm9ySXQpO1xyXG4gICAgICB9XHJcbiAgICAgIHdhaXRGb3JJdCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuICAgICAgICAkY29udGVudC5hdHRyKFwiYXJpYS1oaWRkZW5cIixcInRydWVcIik7XHJcbiAgICAgIH0sIDEwMDApO1xyXG4gICAgfVxyXG5cclxuICB9KTtcclxuXHJcbn0od2luZG93LGRvY3VtZW50LGpRdWVyeSk7XHJcbiJdfQ==