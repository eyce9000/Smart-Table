ng.module('smart-table', []).run(['$templateCache', function ($templateCache) {
    $templateCache.put('template/smart-table/pagination.html',
        '<nav ng-if="pages.length >= 2"><ul class="pagination">' +
        '<li ng-class="{disabled: currentPage==1}" ><a ng-click="selectPage(1)">First</a></li>' +
        '<li ng-class="{disabled: currentPage==1}"><a ng-click="selectPage(currentPage-1)">Prev</a></li>'+
        '<li ng-repeat="page in pages" ng-class="{active: page==currentPage}"><a ng-click="selectPage(page)">{{page}}</a></li>' +
        '<li ng-class="{disabled: currentPage==numPages}" ><a ng-click="selectPage(currentPage+1)">Next</a></li>' +
        '<li ng-class="{disabled: currentPage==numPages}" ><a ng-click="selectPage(numPages)">Last</a></li>' +
        '</ul></nav>');
}]);
