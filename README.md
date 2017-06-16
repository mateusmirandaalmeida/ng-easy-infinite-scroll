# ng-easy-infinite-scroll - AngularJs   [Demo](https://mateusmirandaalmeida.github.io/ng-easy-infinite-scroll/index.html)  

[![N|Solid](http://www.cloudesign.com/images/angular.png)](https://nodesource.com/products/nsolid)

### Developers   
  - Mateus Miranda (info.mateusmiranda@gmail.com)
  - Willian Marques Freire (willianmarquesfreire@gmail.com)
  - Matheus Portolan (matheusportolan@gmail.com)
  - Gabi (not found)
  - See faype.com

### Pre requirements

| Plugin | README |
| ------ | ------ |
| AngularJs | https://angularjs.org/ |

# Installation

```sh
$  bower install ng-easy-infinite-scroll --save
$  npm install ng-easy-infinite-scroll --save
```    

Put in your code the following script:

```html
 <script src="bower_components/ng-easy-infinite-scroll/dist/ng-easy-infinite-scroll.min.js"></script>
 <script src="node_modules/ng-easy-infinite-scroll/dist/ng-easy-infinite-scroll.min.js"></script>
```    

Are you ready to start?

# Usage

```html
<div class="row example" infinite-scroll="loadMore()" infinite-disabled="isDisabled">
  <div class="col-md-3" ng-repeat="i in array track by $index">
    {{i}}
  </div>
</div>
```    
