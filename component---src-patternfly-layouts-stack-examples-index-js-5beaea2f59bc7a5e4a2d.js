webpackJsonp([0x8f4a36ddae4c],{384:function(e,t){e.exports="<h2 id=overview>Overview</h2> <p>A stack layout is a layout that positions the children vertically. In a Stack layout there is one primary child, and one or more secondary children. The primary child will expand vertically to fill the container if needed.</p> <h2 id=usage>Usage</h2> <table> <thead> <tr> <th>Class</th> <th>Usage</th> </tr> </thead> <tbody> <tr> <td><code>.pf-l-stack</code></td> <td><strong>Outcome:</strong> Initiates the stack layout</td> <td><strong>Required:</strong> Yes</td> </tr> <tr> <td><code>.pf-l-stack__primary</code></td> <td><strong>Outcome:</strong> Specifies the primary child of the layout, which expands vertically when needed.</td> <td><strong>Required:</strong> No</td> </tr> <tr> <td><code>.pf-l-stack__secondary</code></td> <td><strong>Outcome:</strong> Specifies a secondary child of the layout, which accommodates its content.</td> <td><strong>Required:</strong> No</td> <td><strong>Remarks:</strong> A stack can have one or more secondary children</td> </tr> <tr> <td><code>.pf-has-gutter</code></td> <td><strong>Outcome:</strong> Adds space between children</td> <td><strong>Required:</strong> No</td> </tr> </tbody> </table> "},160:function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.Docs=void 0;var o=a(2),n=r(o),s=a(12),i=r(s),l=a(13),d=r(l),c=a(356),u=r(c),p=a(355),f=r(p),m=a(384),h=r(m);a(427);var v=t.Docs=h.default;t.default=function(){var e=(0,u.default)(),t=(0,f.default)();return n.default.createElement(i.default,{docs:v,className:"is-layout-page"},n.default.createElement(d.default,{heading:"Stack Example"},e),n.default.createElement(d.default,{heading:"Stack Example with Gutter"},t))}},355:function(e,t,a){var r=a(1);e.exports=(r.default||r).template({1:function(e,t,r,o,n){var s;return(null!=(s=e.invokePartial(a(33),t,{name:"stack-item",hash:{modifierClass:"pf-is-secondary"},fn:e.program(2,n,0),inverse:e.noop,data:n,helpers:r,partials:o,decorators:e.decorators}))?s:"")+(null!=(s=e.invokePartial(a(33),t,{name:"stack-item",hash:{modifierClass:"pf-is-primary"},fn:e.program(4,n,0),inverse:e.noop,data:n,helpers:r,partials:o,decorators:e.decorators}))?s:"")+(null!=(s=e.invokePartial(a(33),t,{name:"stack-item",hash:{modifierClass:"pf-is-secondary"},fn:e.program(2,n,0),inverse:e.noop,data:n,helpers:r,partials:o,decorators:e.decorators}))?s:"")},2:function(e,t,a,r,o){return"    secondary content\n"},4:function(e,t,a,r,o){return"    primary content\n"},compiler:[7,">= 4.0.0"],main:function(e,t,r,o,n){var s;return null!=(s=e.invokePartial(a(130),t,{name:"stack",hash:{modifierClass:"pf-has-gutter"},fn:e.program(1,n,0),inverse:e.noop,data:n,helpers:r,partials:o,decorators:e.decorators}))?s:""},usePartial:!0,useData:!0})},356:function(e,t,a){var r=a(1);e.exports=(r.default||r).template({1:function(e,t,r,o,n){var s;return(null!=(s=e.invokePartial(a(33),t,{name:"stack-item",hash:{modifierClass:"pf-is-secondary"},fn:e.program(2,n,0),inverse:e.noop,data:n,helpers:r,partials:o,decorators:e.decorators}))?s:"")+(null!=(s=e.invokePartial(a(33),t,{name:"stack-item",hash:{modifierClass:"pf-is-primary"},fn:e.program(4,n,0),inverse:e.noop,data:n,helpers:r,partials:o,decorators:e.decorators}))?s:"")+(null!=(s=e.invokePartial(a(33),t,{name:"stack-item",hash:{modifierClass:"pf-is-secondary"},fn:e.program(2,n,0),inverse:e.noop,data:n,helpers:r,partials:o,decorators:e.decorators}))?s:"")},2:function(e,t,a,r,o){return"    secondary content\n"},4:function(e,t,a,r,o){return"    primary content\n"},compiler:[7,">= 4.0.0"],main:function(e,t,r,o,n){var s;return null!=(s=e.invokePartial(a(130),t,{name:"stack",fn:e.program(1,n,0),inverse:e.noop,data:n,helpers:r,partials:o,decorators:e.decorators}))?s:""},usePartial:!0,useData:!0})},33:function(e,t,a){var r=a(1);e.exports=(r.default||r).template({compiler:[7,">= 4.0.0"],main:function(e,t,a,r,o){var n,s;return'<div class="pf-l-stack__item '+e.escapeExpression((s=null!=(s=a.modifierClass||(null!=t?t.modifierClass:t))?s:a.helperMissing,"function"==typeof s?s.call(null!=t?t:e.nullContext||{},{name:"modifierClass",hash:{},data:o}):s))+'">\n'+(null!=(n=e.invokePartial(r["@partial-block"],t,{name:"@partial-block",data:o,indent:"  ",helpers:a,partials:r,decorators:e.decorators}))?n:"")+"</div>\n"},usePartial:!0,useData:!0})},130:function(e,t,a){var r=a(1);e.exports=(r.default||r).template({compiler:[7,">= 4.0.0"],main:function(e,t,a,r,o){var n,s;return'<div class="pf-l-stack '+e.escapeExpression((s=null!=(s=a.modifierClass||(null!=t?t.modifierClass:t))?s:a.helperMissing,"function"==typeof s?s.call(null!=t?t:e.nullContext||{},{name:"modifierClass",hash:{},data:o}):s))+'">\n'+(null!=(n=e.invokePartial(r["@partial-block"],t,{name:"@partial-block",data:o,indent:"  ",helpers:a,partials:r,decorators:e.decorators}))?n:"")+"</div>\n"},usePartial:!0,useData:!0})},427:function(e,t){}});
//# sourceMappingURL=component---src-patternfly-layouts-stack-examples-index-js-5beaea2f59bc7a5e4a2d.js.map