const InfiniteScroll = ($timeout) => {
  const controller = (scope, elm, attrs) => {
    angular.element(elm).scroll((evt) => {
      let disabled = scope.hasOwnProperty('infiniteDisabled') ? scope.infiniteDisabled : false;
      if(elm.scrollTop() + elm.innerHeight() >= elm[0].scrollHeight && !disabled)
        scope.infiniteScroll();
    });
  }
  return {
    restrict : 'A',
    priority : 100,
    scope: {
      infiniteScroll : '&',
      infiniteDisabled : '=?'
    },
    link:controller
  }
}
InfiniteScroll.$inject = ['$timeout'];
export default InfiniteScroll;
