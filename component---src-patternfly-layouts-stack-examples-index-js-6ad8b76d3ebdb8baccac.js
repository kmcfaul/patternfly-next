webpackJsonp([0x8f4a36ddae4c],{929:function(t,a){t.exports="<h2 id=overview>Overview</h2> <p>A stack layout is a layout that positions its items vertically. In a Stack layout there is one primary item that will expand vertically to fill the container if needed.</p> <h2 id=usage>Usage</h2> <table> <thead> <tr> <th>Class</th> <th>Applied To</th> <th>Outcome</th> </tr> </thead> <tbody> <tr> <td><code>.pf-l-stack</code></td> <td><code>&lt;div&gt;</code>, <code>&lt;section&gt;</code>, or <code>&lt;article&gt;</code></td> <td>Initiates the stack layout.</td> </tr> <tr> <td><code>.pf-l-stack__item</code></td> <td><code>&lt;div&gt;</code></td> <td>Initiates a stack item. <strong>Required</strong></td> </tr> <tr> <td><code>.pf-m-main</code></td> <td><code>.pf-l-stack__item</code></td> <td>Specifies the main item of the layout, which expands vertically when needed.</td> </tr> <tr> <td><code>.pf-m-gutter</code></td> <td><code>.pf-l-stack</code></td> <td>Adds space between items.</td> </tr> </tbody> </table> "},342:function(t,a,e){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}a.__esModule=!0,a.Docs=void 0;var r=e(3),i=n(r),o=e(11),l=n(o),c=e(12),s=n(c),d=e(1254),u=n(d),m=e(1255),f=n(m),p=e(816),k=n(p),h=e(817),v=n(h),g=e(929),x=n(g);e(1107);var y=a.Docs=x.default;a.default=function(){var t=(0,k.default)(),a=(0,v.default)(),e="Stack";return i.default.createElement(l.default,{docs:y,heading:e,className:"is-layout-page"},i.default.createElement(s.default,{heading:"Stack Example",handlebars:u.default},t),i.default.createElement(s.default,{heading:"Stack Example with Gutter",handlebars:f.default},a))}},816:function(t,a,e){var n=e(1);t.exports=(n.default||n).template({1:function(t,a,n,r,i){var o;return(null!=(o=t.invokePartial(e(103),a,{name:"stack-item",fn:t.program(2,i,0),inverse:t.noop,data:i,helpers:n,partials:r,decorators:t.decorators}))?o:"")+(null!=(o=t.invokePartial(e(103),a,{name:"stack-item",hash:{"stack-item--modifier":"pf-m-main"},fn:t.program(4,i,0),inverse:t.noop,data:i,helpers:n,partials:r,decorators:t.decorators}))?o:"")+(null!=(o=t.invokePartial(e(103),a,{name:"stack-item",fn:t.program(2,i,0),inverse:t.noop,data:i,helpers:n,partials:r,decorators:t.decorators}))?o:"")},2:function(t,a,e,n,r){return"    secondary content\n"},4:function(t,a,e,n,r){return"    main content\n"},compiler:[7,">= 4.0.0"],main:function(t,a,n,r,i){var o;return null!=(o=t.invokePartial(e(277),a,{name:"stack",hash:{"stack--modifier":"Documentation-container-xtall"},fn:t.program(1,i,0),inverse:t.noop,data:i,helpers:n,partials:r,decorators:t.decorators}))?o:""},usePartial:!0,useData:!0})},1254:function(t,a){t.exports='{{#> stack stack--modifier="Documentation-container-xtall"}}\n  {{#> stack-item}}\n    secondary content\n  {{/stack-item}}\n  {{#> stack-item stack-item--modifier="pf-m-main"}}\n    main content\n  {{/stack-item}}\n  {{#> stack-item}}\n    secondary content\n  {{/stack-item}}\n{{/stack}}\n'},817:function(t,a,e){var n=e(1);t.exports=(n.default||n).template({1:function(t,a,n,r,i){var o;return(null!=(o=t.invokePartial(e(103),a,{name:"stack-item",fn:t.program(2,i,0),inverse:t.noop,data:i,helpers:n,partials:r,decorators:t.decorators}))?o:"")+(null!=(o=t.invokePartial(e(103),a,{name:"stack-item",hash:{"stack-item--modifier":"pf-m-main"},fn:t.program(4,i,0),inverse:t.noop,data:i,helpers:n,partials:r,decorators:t.decorators}))?o:"")+(null!=(o=t.invokePartial(e(103),a,{name:"stack-item",fn:t.program(2,i,0),inverse:t.noop,data:i,helpers:n,partials:r,decorators:t.decorators}))?o:"")},2:function(t,a,e,n,r){return"    secondary content\n"},4:function(t,a,e,n,r){return"    main content\n"},compiler:[7,">= 4.0.0"],main:function(t,a,n,r,i){var o;return null!=(o=t.invokePartial(e(277),a,{name:"stack",hash:{"stack--modifier":"pf-m-gutter Documentation-container-xtall"},fn:t.program(1,i,0),inverse:t.noop,data:i,helpers:n,partials:r,decorators:t.decorators}))?o:""},usePartial:!0,useData:!0})},1255:function(t,a){t.exports='{{#> stack stack--modifier="pf-m-gutter Documentation-container-xtall"}}\n  {{#> stack-item}}\n    secondary content\n  {{/stack-item}}\n  {{#> stack-item stack-item--modifier="pf-m-main"}}\n    main content\n  {{/stack-item}}\n  {{#> stack-item}}\n    secondary content\n  {{/stack-item}}\n{{/stack}}\n'},103:function(t,a,e){var n=e(1);t.exports=(n.default||n).template({1:function(t,a,e,n,r){var i;return" "+t.escapeExpression((i=null!=(i=e["stack-item--modifier"]||(null!=a?a["stack-item--modifier"]:a))?i:e.helperMissing,"function"==typeof i?i.call(null!=a?a:t.nullContext||{},{name:"stack-item--modifier",hash:{},data:r}):i))},3:function(t,a,e,n,r){var i,o;return"    "+(null!=(o=null!=(o=e["stack-item--attribute"]||(null!=a?a["stack-item--attribute"]:a))?o:e.helperMissing,i="function"==typeof o?o.call(null!=a?a:t.nullContext||{},{name:"stack-item--attribute",hash:{},data:r}):o)?i:"")+"\n  "},compiler:[7,">= 4.0.0"],main:function(t,a,e,n,r){var i,o=null!=a?a:t.nullContext||{};return'<div class="pf-l-stack__item'+(null!=(i=e.if.call(o,null!=a?a["stack-item--modifier"]:a,{name:"if",hash:{},fn:t.program(1,r,0),inverse:t.noop,data:r}))?i:"")+'"\n'+(null!=(i=e.if.call(o,null!=a?a["stack-item--attribute"]:a,{name:"if",hash:{},fn:t.program(3,r,0),inverse:t.noop,data:r}))?i:"")+">\n"+(null!=(i=t.invokePartial(n["@partial-block"],a,{name:"@partial-block",data:r,indent:"  ",helpers:e,partials:n,decorators:t.decorators}))?i:"")+"</div>\n"},usePartial:!0,useData:!0})},277:function(t,a,e){var n=e(1);t.exports=(n.default||n).template({1:function(t,a,e,n,r){var i;return" "+t.escapeExpression((i=null!=(i=e["stack--modifier"]||(null!=a?a["stack--modifier"]:a))?i:e.helperMissing,"function"==typeof i?i.call(null!=a?a:t.nullContext||{},{name:"stack--modifier",hash:{},data:r}):i))},3:function(t,a,e,n,r){var i,o;return"    "+(null!=(o=null!=(o=e["stack--attribute"]||(null!=a?a["stack--attribute"]:a))?o:e.helperMissing,i="function"==typeof o?o.call(null!=a?a:t.nullContext||{},{name:"stack--attribute",hash:{},data:r}):o)?i:"")+"\n  "},compiler:[7,">= 4.0.0"],main:function(t,a,e,n,r){var i,o=null!=a?a:t.nullContext||{};return'<div class="pf-l-stack'+(null!=(i=e.if.call(o,null!=a?a["stack--modifier"]:a,{name:"if",hash:{},fn:t.program(1,r,0),inverse:t.noop,data:r}))?i:"")+'"\n'+(null!=(i=e.if.call(o,null!=a?a["stack--attribute"]:a,{name:"if",hash:{},fn:t.program(3,r,0),inverse:t.noop,data:r}))?i:"")+">\n"+(null!=(i=t.invokePartial(n["@partial-block"],a,{name:"@partial-block",data:r,indent:"  ",helpers:e,partials:n,decorators:t.decorators}))?i:"")+"</div>\n"},usePartial:!0,useData:!0})},1107:function(t,a){}});
//# sourceMappingURL=component---src-patternfly-layouts-stack-examples-index-js-6ad8b76d3ebdb8baccac.js.map