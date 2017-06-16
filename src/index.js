import InfiniteScroll from  './infinite-scroll';

((exports, angular) => {

  if(!angular){
    throw "ng-easy-infinite-scroll require's AngularJS in window!!";
  }

  angular.module('ngEasyInfiniteScroll', [])
        .directive('infiniteScroll', InfiniteScroll);

  if(exports){
     exports = ngEasyInfiniteScroll;
  }

})( (window && window.module && window.module.exports) ? module.exports : undefined, (window && window.angular) ? window.angular : undefined);
