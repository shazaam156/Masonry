'use strict';

/* Directives */
// All the directives rely on jQuery.

angular.module('app.directives', ['ui.load'])
  .directive('uiModule', ['MODULE_CONFIG','uiLoad', '$compile', function(MODULE_CONFIG, uiLoad, $compile) {
    return {
      restrict: 'A',
      compile: function (el, attrs) {
        var contents = el.contents().clone();
        return function(scope, el, attrs){
          el.contents().remove();
          uiLoad.load(MODULE_CONFIG[attrs.uiModule])
          .then(function(){
            $compile(contents)(scope, function(clonedElement, scope) {
              el.append(clonedElement);
            });
          });
        }
      }
    };
  }])

  .directive('ngEnter', function () {
    return function (scope, element, attrs) {
        element.bind("keydown keypress", function (event) {
            if(event.which === 13) {
                scope.$apply(function (){
                    scope.$eval(attrs.ngEnter);
                });
 
                event.preventDefault();
            }
        });
    };
})

  .directive('xeditable', function($timeout) {
    return {
        restrict: 'A',
        require: "ngModel",
        link: function(scope, element, attrs, ngModel) {
            var loadXeditable = function() {
                angular.element(element).editable({
                    display: function(value, srcData) {
                        ngModel.$setViewValue(value);
                        scope.$apply();
                    }
                });
            }
            $timeout(function() {
                loadXeditable();
            }, 10);
        }
    };
})

  .directive('uiShift', ['$timeout', function($timeout) {
    return {
      restrict: 'A',
      link: function(scope, el, attr) {
        // get the $prev or $parent of this el
        var _el = $(el),
            _window = $(window),
            prev = _el.prev(),
            parent,
            width = _window.width()
            ;

        !prev.length && (parent = _el.parent());
        
        function sm(){
          $timeout(function () {
            var method = attr.uiShift;
            var target = attr.target;
            _el.hasClass('in') || _el[method](target).addClass('in');
          });
        }
        
        function md(){
          parent && parent['prepend'](el);
          !parent && _el['insertAfter'](prev);
          _el.removeClass('in');
        }

        (width < 768 && sm()) || md();

        _window.resize(function() {
          if(width !== _window.width()){
            $timeout(function(){
              (_window.width() < 768 && sm()) || md();
              width = _window.width();
            });
          }
        });
      }
    };
  }])
  .directive('uiToggleClass', ['$timeout', '$document', function($timeout, $document) {
    return {
      restrict: 'AC',
      link: function(scope, el, attr) {
        el.on('click', function(e) {
          e.preventDefault();
          var classes = attr.uiToggleClass.split(','),
              targets = (attr.target && attr.target.split(',')) || Array(el),
              key = 0;
          angular.forEach(classes, function( _class ) {
            var target = targets[(targets.length && key)];            
            ( _class.indexOf( '*' ) !== -1 ) && magic(_class, target);
            $( target ).toggleClass(_class);
            key ++;
          });
          $(el).toggleClass('active');

          function magic(_class, target){
            var patt = new RegExp( '\\s' + 
                _class.
                  replace( /\*/g, '[A-Za-z0-9-_]+' ).
                  split( ' ' ).
                  join( '\\s|\\s' ) + 
                '\\s', 'g' );
            var cn = ' ' + $(target)[0].className + ' ';
            while ( patt.test( cn ) ) {
              cn = cn.replace( patt, ' ' );
            }
            $(target)[0].className = $.trim( cn );
          }
        });
      }
    };
  }])
  .directive('uiNav', ['$timeout', function($timeout) {
    return {
      restrict: 'AC',
      link: function(scope, el, attr) {
        var _window = $(window), 
        _mb = 768, 
        wrap = $('.app-aside'), 
        next, 
        backdrop = '.dropdown-backdrop';
        // unfolded
        el.on('click', 'a', function(e) {
          next && next.trigger('mouseleave.nav');
          var _this = $(this);
          _this.parent().siblings( ".active" ).toggleClass('active');
          _this.next().is('ul') &&  _this.parent().toggleClass('active') &&  e.preventDefault();
          // mobile
          _this.next().is('ul') || ( ( _window.width() < _mb ) && $('.app-aside').removeClass('show off-screen') );
        });

        // folded & fixed        
        el.on('mouseenter', 'a', function(e){
          next && next.trigger('mouseleave.nav');

          if ( !$('.app-aside-fixed.app-aside-folded').length || ( _window.width() < _mb )) return;
          var _this = $(e.target)
          , top
          , w_h = $(window).height()
          , offset = 50
          , min = 150;

          !_this.is('a') && (_this = _this.closest('a'));
          if( _this.next().is('ul') ){
             next = _this.next();
          }else{
            return;
          }
         
          _this.parent().addClass('active');
          top = _this.parent().position().top + offset;
          next.css('top', top);
          if( top + next.height() > w_h ){
            next.css('bottom', 0);
          }
          if(top + min > w_h){
            next.css('bottom', w_h - top - offset).css('top', 'auto');
          }
          next.appendTo(wrap);

          next.on('mouseleave.nav', function(e){
            $(backdrop).remove();
            next.appendTo(_this.parent());
            next.off('mouseleave.nav').css('top', 'auto').css('bottom', 'auto');
            _this.parent().removeClass('active');
          });

          $('.smart').length && $('<div class="dropdown-backdrop"/>').insertAfter('.app-aside').on('click', function(next){
            next && next.trigger('mouseleave.nav');
          });

        });

        wrap.on('mouseleave', function(e){
          next && next.trigger('mouseleave.nav');
        });
      }
    };
  }])
  .directive('uiScroll', ['$location', '$anchorScroll', function($location, $anchorScroll) {
    return {
      restrict: 'AC',
      link: function(scope, el, attr) {
        el.on('click', function(e) {
          $location.hash(attr.uiScroll);
          $anchorScroll();
        });
      }
    };
  }])
  .directive('uiFullscreen', ['uiLoad', function(uiLoad) {
    return {
      restrict: 'AC',
      template:'<i class="fa fa-expand fa-fw text"></i><i class="fa fa-compress fa-fw text-active"></i>',
      link: function(scope, el, attr) {
        el.addClass('hide');
        uiLoad.load('js/libs/screenfull.min.js').then(function(){
          if (screenfull.enabled) {
            el.removeClass('hide');
          }
          el.on('click', function(){
            var target;
            attr.target && ( target = $(attr.target)[0] );            
            el.toggleClass('active');
            screenfull.toggle(target);
          });
        });
      }
    };
  }])
  .directive('uiButterbar', ['$rootScope', '$location', '$anchorScroll', function($rootScope, $location, $anchorScroll) {
     return {
      restrict: 'AC',
      template:'<span class="bar"></span>',
      link: function(scope, el, attrs) {        
        el.addClass('butterbar hide');        
        scope.$on('$stateChangeStart', function(event) {
          $location.hash('app');
          $anchorScroll();
          el.removeClass('hide').addClass('active');
        });
        scope.$on('$stateChangeSuccess', function( event, toState, toParams, fromState ) {
          event.targetScope.$watch('$viewContentLoaded', function(){
            el.addClass('hide').removeClass('active');
          })          
        });
      }
     };
  }])
  .directive('setNgAnimate', ['$animate', function ($animate) {
    return {
        link: function ($scope, $element, $attrs) {
            $scope.$watch( function() {
                return $scope.$eval($attrs.setNgAnimate, $scope);
            }, function(valnew, valold){
                $animate.enabled(!!valnew, $element);
            });
        }
    };
  }])
.directive('circularProgressBar', function() {
    return {
        restrict: 'E',
        scope: {
            size: '@',
            complete: '@',
            total: '@',
            strokeWidth: '@',
            background: '@'
        },
        compile: function (element, attr) {
            
            return function (scope, element, attr) {
                scope.offset = -90;
                var updateRadius = function () {
                    scope.strokeWidthCapped = Math.min(scope.strokeWidth, scope.size / 2 - 1);
                    scope.radius = Math.max((scope.size - scope.strokeWidthCapped) / 2 - 1, 0);
                    scope.circumference = 2 * Math.PI * scope.radius;
                };
                scope.$watchCollection('[size, strokeWidth]', updateRadius);
                scope.progress = function() {
                    return parseFloat(scope.complete/scope.total);
                };
                updateRadius();
            };
        },
        template:
            '<svg ng-attr-width="{{size}}" ng-attr-height="{{size}}">' +
                    '<linearGradient id="lgrad" x1="0%" y1="100%" x2="100%" y2="0%" >' +
                        '<stop offset="0%" style="stop-color:rgb(35,183,229);stop-opacity:1" />' +
                        '<stop offset="100%" style="stop-color:rgb(35,183,229);stop-opacity:1" />' +
                    '</linearGradient>' +
                '</defs>' +
                '<circle fill="none" ' +
                    'ng-if="background" ' +
                    'ng-attr-cx="{{size/2}}" ' +
                    'ng-attr-cy="{{size/2}}" ' +
                    'ng-attr-r="{{radius}}" ' +
                    'ng-attr-stroke="{{background}}" ' +
                    'ng-attr-stroke-width="{{strokeWidthCapped}}" />' +
                '<circle fill="none" ' +
                    'ng-attr-cx="{{size/2}}" ' +
                    'ng-attr-cy="{{size/2}}" ' +
                    'ng-attr-r="{{radius}}" ' +
                    'stroke="url(#lgrad)" ' +
                    'ng-attr-stroke-width="{{strokeWidthCapped}}"' +
                    'ng-attr-stroke-dasharray="{{circumference}}"' +
                    'ng-attr-stroke-dashoffset="{{(1-progress())*circumference}}"' +
                    'ng-attr-transform="rotate({{offset}}, {{size/2}}, {{size/2}})" />' +
            '</svg>'
    };
})  
.directive("calendar", function() {
    return {
        restrict: "E",
        templateUrl: "tpl/calendar.html",

    };
    



})
.directive('fileModel', ['$parse', function ($parse) {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            var model = $parse(attrs.fileModel);
            var modelSetter = model.assign;
            
            element.bind('change', function(){
                scope.$apply(function(){
					
					
				
                    modelSetter(scope, element[0].files[0]);
					console.log(element[0].files[0])
                });
            });
        }
    };
}])
.directive('validateEmail', function() {
  var EMAIL_REGEXP = /^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;

  return {
    require: 'ngModel',
    restrict: '',
    link: function(scope, elm, attrs, ctrl) {
      // only apply the validator if ngModel is present and Angular has added the email validator
      if (ctrl && ctrl.$validators.email) {

        // this will overwrite the default Angular email validator
        ctrl.$validators.email = function(modelValue) {
          return ctrl.$isEmpty(modelValue) || EMAIL_REGEXP.test(modelValue);
        };
      }
    }
  };
});
;