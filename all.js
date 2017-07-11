//$(".form-tel").mask("(99)9999-9999?9");
//$(".form-cel").mask("(99)9999-9999?9");

/*!
 *  GMAP3 Plugin for jQuery
 *  Version   : 6.0.0
 *  Date      : 2014-04-25
 *  Author    : DEMONTE Jean-Baptiste
 *  Contact   : jbdemonte@gmail.com
 *  Web site  : http://gmap3.net
 *  Licence   : GPL v3 : http://www.gnu.org/licenses/gpl.html
 *  
 *  Copyright (c) 2010-2014 Jean-Baptiste DEMONTE
 *  All rights reserved.
 */
!function(t,n){function e(t){return"object"==typeof t}function o(t){return"string"==typeof t}function i(t){return"number"==typeof t}function a(t){return t===n}function r(){q=google.maps,A||(A={verbose:!1,queryLimit:{attempt:5,delay:250,random:250},classes:function(){var n={};return t.each("Map Marker InfoWindow Circle Rectangle OverlayView StreetViewPanorama KmlLayer TrafficLayer BicyclingLayer GroundOverlay StyledMapType ImageMapType".split(" "),function(t,e){n[e]=q[e]}),n}(),map:{mapTypeId:q.MapTypeId.ROADMAP,center:[46.578498,2.457275],zoom:2},overlay:{pane:"floatPane",content:"",offset:{x:0,y:0}},geoloc:{getCurrentPosition:{maximumAge:6e4,timeout:5e3}}})}function s(t,n){return a(t)?"gmap3_"+(n?Z+1:++Z):t}function u(t){var n,e=q.version.split(".");for(t=t.split("."),n=0;n<e.length;n++)e[n]=parseInt(e[n],10);for(n=0;n<t.length;n++){if(t[n]=parseInt(t[n],10),!e.hasOwnProperty(n))return!1;if(e[n]<t[n])return!1}return!0}function l(n,e,o,i,a){function r(e,i){e&&t.each(e,function(t,e){var r=n,s=e;R(e)&&(r=e[0],s=e[1]),i(o,t,function(t){s.apply(r,[a||o,t,u])})})}var s=e.td||{},u={id:i,data:s.data,tag:s.tag};r(s.events,q.event.addListener),r(s.onces,q.event.addListenerOnce)}function d(t){var n,e=[];for(n in t)t.hasOwnProperty(n)&&e.push(n);return e}function c(t,n){var e,o=arguments;for(e=2;e<o.length;e++)if(n in o[e]&&o[e].hasOwnProperty(n))return void(t[n]=o[e][n])}function p(n,e){var o,i,a=["data","tag","id","events","onces"],r={};if(n.td)for(o in n.td)n.td.hasOwnProperty(o)&&"options"!==o&&"values"!==o&&(r[o]=n.td[o]);for(i=0;i<a.length;i++)c(r,a[i],e,n.td);return r.options=t.extend({},n.opts||{},e.options||{}),r}function f(){if(A.verbose){var t,n=[];if(window.console&&z(console.error)){for(t=0;t<arguments.length;t++)n.push(arguments[t]);console.error.apply(console,n)}else{for(n="",t=0;t<arguments.length;t++)n+=arguments[t].toString()+" ";alert(n)}}}function g(t){return(i(t)||o(t))&&""!==t&&!isNaN(t)}function h(t){var n,o=[];if(!a(t))if(e(t))if(i(t.length))o=t;else for(n in t)o.push(t[n]);else o.push(t);return o}function v(n){return n?z(n)?n:(n=h(n),function(o){var i;if(a(o))return!1;if(e(o)){for(i=0;i<o.length;i++)if(t.inArray(o[i],n)>=0)return!0;return!1}return t.inArray(o,n)>=0}):void 0}function m(t,n,e){var i=n?t:null;return!t||o(t)?i:t.latLng?m(t.latLng):t instanceof q.LatLng?t:g(t.lat)?new q.LatLng(t.lat,t.lng):!e&&R(t)&&g(t[0])&&g(t[1])?new q.LatLng(t[0],t[1]):i}function y(t){var n,e;return!t||t instanceof q.LatLngBounds?t||null:(R(t)?2===t.length?(n=m(t[0]),e=m(t[1])):4===t.length&&(n=m([t[0],t[1]]),e=m([t[2],t[3]])):"ne"in t&&"sw"in t?(n=m(t.ne),e=m(t.sw)):"n"in t&&"e"in t&&"s"in t&&"w"in t&&(n=m([t.n,t.e]),e=m([t.s,t.w])),n&&e?new q.LatLngBounds(e,n):null)}function w(t,n,e,i,a){var r=e?m(i.td,!1,!0):!1,s=r?{latLng:r}:i.td.address?o(i.td.address)?{address:i.td.address}:i.td.address:!1,u=s?G.get(s):!1,l=this;s?(a=a||0,u?(i.latLng=u.results[0].geometry.location,i.results=u.results,i.status=u.status,n.apply(t,[i])):(s.location&&(s.location=m(s.location)),s.bounds&&(s.bounds=y(s.bounds)),M().geocode(s,function(o,r){r===q.GeocoderStatus.OK?(G.store(s,{results:o,status:r}),i.latLng=o[0].geometry.location,i.results=o,i.status=r,n.apply(t,[i])):r===q.GeocoderStatus.OVER_QUERY_LIMIT&&a<A.queryLimit.attempt?setTimeout(function(){w.apply(l,[t,n,e,i,a+1])},A.queryLimit.delay+Math.floor(Math.random()*A.queryLimit.random)):(f("geocode failed",r,s),i.latLng=i.results=!1,i.status=r,n.apply(t,[i]))}))):(i.latLng=m(i.td,!1,!0),n.apply(t,[i]))}function L(n,e,o,i){function a(){do s++;while(s<n.length&&!("address"in n[s]));return s>=n.length?void o.apply(e,[i]):void w(r,function(e){delete e.td,t.extend(n[s],e),a.apply(r,[])},!0,{td:n[s]})}var r=this,s=-1;a()}function b(t,n,e){var o=!1;navigator&&navigator.geolocation?navigator.geolocation.getCurrentPosition(function(i){o||(o=!0,e.latLng=new q.LatLng(i.coords.latitude,i.coords.longitude),n.apply(t,[e]))},function(){o||(o=!0,e.latLng=!1,n.apply(t,[e]))},e.opts.getCurrentPosition):(e.latLng=!1,n.apply(t,[e]))}function x(t){var n,o=!1;if(e(t)&&t.hasOwnProperty("get")){for(n in t)if("get"!==n)return!1;o=!t.get.hasOwnProperty("callback")}return o}function M(){return V.geocoder||(V.geocoder=new q.Geocoder),V.geocoder}function I(){var t=[];this.get=function(n){if(t.length){var o,i,a,r,s,u=d(n);for(o=0;o<t.length;o++){for(r=t[o],s=u.length===r.keys.length,i=0;i<u.length&&s;i++)a=u[i],s=a in r.request,s&&(s=e(n[a])&&"equals"in n[a]&&z(n[a])?n[a].equals(r.request[a]):n[a]===r.request[a]);if(s)return r.results}}},this.store=function(n,e){t.push({request:n,keys:d(n),results:e})}}function P(){var t=[],n=this;n.empty=function(){return!t.length},n.add=function(n){t.push(n)},n.get=function(){return t.length?t[0]:!1},n.ack=function(){t.shift()}}function k(){function n(t){return{id:t.id,name:t.name,object:t.obj,tag:t.tag,data:t.data}}function e(t){z(t.setMap)&&t.setMap(null),z(t.remove)&&t.remove(),z(t.free)&&t.free(),t=null}var o={},i={},r=this;r.add=function(t,n,e,a){var u=t.td||{},l=s(u.id);return o[n]||(o[n]=[]),l in i&&r.clearById(l),i[l]={obj:e,sub:a,name:n,id:l,tag:u.tag,data:u.data},o[n].push(l),l},r.getById=function(t,e,o){var a=!1;return t in i&&(a=e?i[t].sub:o?n(i[t]):i[t].obj),a},r.get=function(t,e,a,r){var s,u,l=v(a);if(!o[t]||!o[t].length)return null;for(s=o[t].length;s;)if(s--,u=o[t][e?s:o[t].length-s-1],u&&i[u]){if(l&&!l(i[u].tag))continue;return r?n(i[u]):i[u].obj}return null},r.all=function(t,e,r){var s=[],u=v(e),l=function(t){var e,a;for(e=0;e<o[t].length;e++)if(a=o[t][e],a&&i[a]){if(u&&!u(i[a].tag))continue;s.push(r?n(i[a]):i[a].obj)}};if(t in o)l(t);else if(a(t))for(t in o)l(t);return s},r.rm=function(t,n,e){var a,s;if(!o[t])return!1;if(n)if(e)for(a=o[t].length-1;a>=0&&(s=o[t][a],!n(i[s].tag));a--);else for(a=0;a<o[t].length&&(s=o[t][a],!n(i[s].tag));a++);else a=e?o[t].length-1:0;return a in o[t]?r.clearById(o[t][a],a):!1},r.clearById=function(t,n){if(t in i){var r,s=i[t].name;for(r=0;a(n)&&r<o[s].length;r++)t===o[s][r]&&(n=r);return e(i[t].obj),i[t].sub&&e(i[t].sub),delete i[t],o[s].splice(n,1),!0}return!1},r.objGetById=function(t){var n,e;if(o.clusterer)for(e in o.clusterer)if((n=i[o.clusterer[e]].obj.getById(t))!==!1)return n;return!1},r.objClearById=function(t){var n;if(o.clusterer)for(n in o.clusterer)if(i[o.clusterer[n]].obj.clearById(t))return!0;return null},r.clear=function(t,n,e,i){var a,s,u,l=v(i);if(t&&t.length)t=h(t);else{t=[];for(a in o)t.push(a)}for(s=0;s<t.length;s++)if(u=t[s],n)r.rm(u,l,!0);else if(e)r.rm(u,l,!1);else for(;r.rm(u,l,!1););},r.objClear=function(n,e,a,r){var s;if(o.clusterer&&(t.inArray("marker",n)>=0||!n.length))for(s in o.clusterer)i[o.clusterer[s]].obj.clear(e,a,r)}}function B(n,e,i){function a(t){var n={};return n[t]={},n}function r(){var t;for(t in i)if(i.hasOwnProperty(t)&&!u.hasOwnProperty(t))return t}var s,u={},l=this,d={latLng:{map:!1,marker:!1,infowindow:!1,circle:!1,overlay:!1,getlatlng:!1,getmaxzoom:!1,getelevation:!1,streetviewpanorama:!1,getaddress:!0},geoloc:{getgeoloc:!0}};o(i)&&(i=a(i)),l.run=function(){for(var o,a;o=r();){if(z(n[o]))return s=o,a=t.extend(!0,{},A[o]||{},i[o].options||{}),void(o in d.latLng?i[o].values?L(i[o].values,n,n[o],{td:i[o],opts:a,session:u}):w(n,n[o],d.latLng[o],{td:i[o],opts:a,session:u}):o in d.geoloc?b(n,n[o],{td:i[o],opts:a,session:u}):n[o].apply(n,[{td:i[o],opts:a,session:u}]));u[o]=null}e.apply(n,[i,u])},l.ack=function(t){u[s]=t,l.run.apply(l,[])}}function j(){return V.ds||(V.ds=new q.DirectionsService),V.ds}function O(){return V.dms||(V.dms=new q.DistanceMatrixService),V.dms}function C(){return V.mzs||(V.mzs=new q.MaxZoomService),V.mzs}function E(){return V.es||(V.es=new q.ElevationService),V.es}function S(t){function n(){var t=this;return t.onAdd=function(){},t.onRemove=function(){},t.draw=function(){},A.classes.OverlayView.apply(t,[])}n.prototype=A.classes.OverlayView.prototype;var e=new n;return e.setMap(t),e}function T(n,o,i){function a(t){T[t]||(delete _[t].options.map,T[t]=new A.classes.Marker(_[t].options),l(n,{td:_[t]},T[t],_[t].id))}function r(){return(y=U.getProjection())?(P=!0,j.push(q.event.addListener(o,"zoom_changed",f)),j.push(q.event.addListener(o,"bounds_changed",f)),void h()):void setTimeout(function(){r.apply(B,[])},25)}function u(t){e(O[t])?(z(O[t].obj.setMap)&&O[t].obj.setMap(null),z(O[t].obj.remove)&&O[t].obj.remove(),z(O[t].shadow.remove)&&O[t].obj.remove(),z(O[t].shadow.setMap)&&O[t].shadow.setMap(null),delete O[t].obj,delete O[t].shadow):T[t]&&T[t].setMap(null),delete O[t]}function d(){var t,n,e,o,i,a,r,s,u=Math.cos,l=Math.sin,d=arguments;return d[0]instanceof q.LatLng?(t=d[0].lat(),e=d[0].lng(),d[1]instanceof q.LatLng?(n=d[1].lat(),o=d[1].lng()):(n=d[1],o=d[2])):(t=d[0],e=d[1],d[2]instanceof q.LatLng?(n=d[2].lat(),o=d[2].lng()):(n=d[2],o=d[3])),i=Math.PI*t/180,a=Math.PI*e/180,r=Math.PI*n/180,s=Math.PI*o/180,6371e3*Math.acos(Math.min(u(i)*u(r)*u(a)*u(s)+u(i)*l(a)*u(r)*l(s)+l(i)*l(r),1))}function c(){var t=d(o.getCenter(),o.getBounds().getNorthEast()),n=new q.Circle({center:o.getCenter(),radius:1.25*t});return n.getBounds()}function p(){var t,n={};for(t in O)n[t]=!0;return n}function f(){clearTimeout(m),m=setTimeout(h,25)}function g(t){var n=y.fromLatLngToDivPixel(t),e=y.fromDivPixelToLatLng(new q.Point(n.x+i.radius,n.y-i.radius)),o=y.fromDivPixelToLatLng(new q.Point(n.x-i.radius,n.y+i.radius));return new q.LatLngBounds(o,e)}function h(){if(!x&&!I&&P){var n,e,a,r,s,l,d,f,h,v,m,y=!1,b=[],B={},j=o.getZoom(),C="maxZoom"in i&&j>i.maxZoom,E=p();for(M=!1,j>3&&(s=c(),y=s.getSouthWest().lng()<s.getNorthEast().lng()),n=0;n<_.length;n++)!_[n]||y&&!s.contains(_[n].options.position)||w&&!w(D[n])||b.push(n);for(;;){for(n=0;B[n]&&n<b.length;)n++;if(n===b.length)break;if(r=[],k&&!C){m=10;do for(f=r,r=[],m--,d=f.length?s.getCenter():_[b[n]].options.position,s=g(d),e=n;e<b.length;e++)B[e]||s.contains(_[b[e]].options.position)&&r.push(e);while(f.length<r.length&&r.length>1&&m)}else for(e=n;e<b.length;e++)if(!B[e]){r.push(e);break}for(l={indexes:[],ref:[]},h=v=0,a=0;a<r.length;a++)B[r[a]]=!0,l.indexes.push(b[r[a]]),l.ref.push(b[r[a]]),h+=_[b[r[a]]].options.position.lat(),v+=_[b[r[a]]].options.position.lng();h/=r.length,v/=r.length,l.latLng=new q.LatLng(h,v),l.ref=l.ref.join("-"),l.ref in E?delete E[l.ref]:(1===r.length&&(O[l.ref]=!0),L(l))}t.each(E,function(t){u(t)}),I=!1}}var m,y,w,L,b,x=!1,M=!1,I=!1,P=!1,k=!0,B=this,j=[],O={},C={},E={},T=[],_=[],D=[],U=S(o,i.radius);r(),B.getById=function(t){return t in C?(a(C[t]),T[C[t]]):!1},B.rm=function(t){var n=C[t];T[n]&&T[n].setMap(null),delete T[n],T[n]=!1,delete _[n],_[n]=!1,delete D[n],D[n]=!1,delete C[t],delete E[n],M=!0},B.clearById=function(t){return t in C?(B.rm(t),!0):void 0},B.clear=function(t,n,e){var o,i,a,r,s,u=[],l=v(e);for(t?(o=_.length-1,i=-1,a=-1):(o=0,i=_.length,a=1),r=o;r!==i&&(!_[r]||l&&!l(_[r].tag)||(u.push(E[r]),!n&&!t));r+=a);for(s=0;s<u.length;s++)B.rm(u[s])},B.add=function(t,n){t.id=s(t.id),B.clearById(t.id),C[t.id]=T.length,E[T.length]=t.id,T.push(null),_.push(t),D.push(n),M=!0},B.addMarker=function(t,e){e=e||{},e.id=s(e.id),B.clearById(e.id),e.options||(e.options={}),e.options.position=t.getPosition(),l(n,{td:e},t,e.id),C[e.id]=T.length,E[T.length]=e.id,T.push(t),_.push(e),D.push(e.data||{}),M=!0},B.td=function(t){return _[t]},B.value=function(t){return D[t]},B.marker=function(t){return t in T?(a(t),T[t]):!1},B.markerIsSet=function(t){return Boolean(T[t])},B.setMarker=function(t,n){T[t]=n},B.store=function(t,n,e){O[t.ref]={obj:n,shadow:e}},B.free=function(){var n;for(n=0;n<j.length;n++)q.event.removeListener(j[n]);j=[],t.each(O,function(t){u(t)}),O={},t.each(_,function(t){_[t]=null}),_=[],t.each(T,function(t){T[t]&&(T[t].setMap(null),delete T[t])}),T=[],t.each(D,function(t){delete D[t]}),D=[],C={},E={}},B.filter=function(t){w=t,h()},B.enable=function(t){k!==t&&(k=t,h())},B.display=function(t){L=t},B.error=function(t){b=t},B.beginUpdate=function(){x=!0},B.endUpdate=function(){x=!1,M&&h()},B.autofit=function(t){var n;for(n=0;n<_.length;n++)_[n]&&t.extend(_[n].options.position)}}function _(t,n){var e=this;e.id=function(){return t},e.filter=function(t){n.filter(t)},e.enable=function(){n.enable(!0)},e.disable=function(){n.enable(!1)},e.add=function(t,e,o){o||n.beginUpdate(),n.addMarker(t,e),o||n.endUpdate()},e.getById=function(t){return n.getById(t)},e.clearById=function(t,e){var o;return e||n.beginUpdate(),o=n.clearById(t),e||n.endUpdate(),o},e.clear=function(t,e,o,i){i||n.beginUpdate(),n.clear(t,e,o),i||n.endUpdate()}}function D(n,e,o,i){var a=this,r=[];A.classes.OverlayView.call(a),a.setMap(n),a.onAdd=function(){var n=a.getPanes();e.pane in n&&t(n[e.pane]).append(i),t.each("dblclick click mouseover mousemove mouseout mouseup mousedown".split(" "),function(n,e){r.push(q.event.addDomListener(i[0],e,function(n){t.Event(n).stopPropagation(),q.event.trigger(a,e,[n]),a.draw()}))}),r.push(q.event.addDomListener(i[0],"contextmenu",function(n){t.Event(n).stopPropagation(),q.event.trigger(a,"rightclick",[n]),a.draw()}))},a.getPosition=function(){return o},a.setPosition=function(t){o=t,a.draw()},a.draw=function(){var t=a.getProjection().fromLatLngToDivPixel(o);i.css("left",t.x+e.offset.x+"px").css("top",t.y+e.offset.y+"px")},a.onRemove=function(){var t;for(t=0;t<r.length;t++)q.event.removeListener(r[t]);i.remove()},a.hide=function(){i.hide()},a.show=function(){i.show()},a.toggle=function(){i&&(i.is(":visible")?a.show():a.hide())},a.toggleDOM=function(){a.setMap(a.getMap()?null:n)},a.getDOMElement=function(){return i[0]}}function U(i){function r(){!b&&(b=M.get())&&b.run()}function d(){b=null,M.ack(),r.call(x)}function c(t){var n,e=t.td.callback;e&&(n=Array.prototype.slice.call(arguments,1),z(e)?e.apply(i,n):R(e)&&z(e[1])&&e[1].apply(e[0],n))}function g(t,n,e){e&&l(i,t,n,e),c(t,n),b.ack(n)}function v(n,e){e=e||{};var o=e.td&&e.td.options?e.td.options:0;S?o&&(o.center&&(o.center=m(o.center)),S.setOptions(o)):(o=e.opts||t.extend(!0,{},A.map,o||{}),o.center=n||m(o.center),S=new A.classes.Map(i.get(0),o))}function w(e){var o,a,r=new T(i,S,e),s={},u={},d=[],c=/^[0-9]+$/;for(a in e)c.test(a)?(d.push(1*a),u[a]=e[a],u[a].width=u[a].width||0,u[a].height=u[a].height||0):s[a]=e[a];return d.sort(function(t,n){return t>n}),o=s.calculator?function(n){var e=[];return t.each(n,function(t,n){e.push(r.value(n))}),s.calculator.apply(i,[e])}:function(t){return t.length},r.error(function(){f.apply(x,arguments)}),r.display(function(a){var c,p,f,g,h,v,y=o(a.indexes);if(e.force||y>1)for(c=0;c<d.length;c++)d[c]<=y&&(p=u[d[c]]);p?(h=p.offset||[-p.width/2,-p.height/2],f=t.extend({},s),f.options=t.extend({pane:"overlayLayer",content:p.content?p.content.replace("CLUSTER_COUNT",y):"",offset:{x:("x"in h?h.x:h[0])||0,y:("y"in h?h.y:h[1])||0}},s.options||{}),g=x.overlay({td:f,opts:f.options,latLng:m(a)},!0),f.options.pane="floatShadow",f.options.content=t(document.createElement("div")).width(p.width+"px").height(p.height+"px").css({cursor:"pointer"}),v=x.overlay({td:f,opts:f.options,latLng:m(a)},!0),s.data={latLng:m(a),markers:[]},t.each(a.indexes,function(t,n){s.data.markers.push(r.value(n)),r.markerIsSet(n)&&r.marker(n).setMap(null)}),l(i,{td:s},v,n,{main:g,shadow:v}),r.store(a,g,v)):t.each(a.indexes,function(t,n){r.marker(n).setMap(S)})}),r}function L(n,e,o){var a=[],r="values"in n.td;return r||(n.td.values=[{options:n.opts}]),n.td.values.length?(v(),t.each(n.td.values,function(t,r){var s,u,d,c,f=p(n,r);if(f.options[o])if(f.options[o][0][0]&&R(f.options[o][0][0]))for(u=0;u<f.options[o].length;u++)for(d=0;d<f.options[o][u].length;d++)f.options[o][u][d]=m(f.options[o][u][d]);else for(u=0;u<f.options[o].length;u++)f.options[o][u]=m(f.options[o][u]);f.options.map=S,c=new q[e](f.options),a.push(c),s=I.add({td:f},e.toLowerCase(),c),l(i,{td:f},c,s)}),void g(n,r?a:a[0])):void g(n,!1)}var b,x=this,M=new P,I=new k,S=null;x._plan=function(t){var n;for(n=0;n<t.length;n++)M.add(new B(x,d,t[n]));r()},x.map=function(t){v(t.latLng,t),l(i,t,S),g(t,S)},x.destroy=function(t){I.clear(),i.empty(),S&&(S=null),g(t,!0)},x.overlay=function(n,e){var o=[],a="values"in n.td;return a||(n.td.values=[{latLng:n.latLng,options:n.opts}]),n.td.values.length?(D.__initialised||(D.prototype=new A.classes.OverlayView,D.__initialised=!0),t.each(n.td.values,function(a,r){var s,u,d=p(n,r),c=t(document.createElement("div")).css({border:"none",borderWidth:0,position:"absolute"});c.append(d.options.content),u=new D(S,d.options,m(d)||m(r),c),o.push(u),c=null,e||(s=I.add(n,"overlay",u),l(i,{td:d},u,s))}),e?o[0]:void g(n,a?o:o[0])):void g(n,!1)},x.marker=function(n){var e,o,a,r="values"in n.td,u=!S;return r||(n.opts.position=n.latLng||m(n.opts.position),n.td.values=[{options:n.opts}]),n.td.values.length?(u&&v(),n.td.cluster&&!S.getBounds()?void q.event.addListenerOnce(S,"bounds_changed",function(){x.marker.apply(x,[n])}):void(n.td.cluster?(n.td.cluster instanceof _?(o=n.td.cluster,a=I.getById(o.id(),!0)):(a=w(n.td.cluster),o=new _(s(n.td.id,!0),a),I.add(n,"clusterer",o,a)),a.beginUpdate(),t.each(n.td.values,function(t,e){var o=p(n,e);o.options.position=m(o.options.position?o.options.position:e),o.options.position&&(o.options.map=S,u&&(S.setCenter(o.options.position),u=!1),a.add(o,e))}),a.endUpdate(),g(n,o)):(e=[],t.each(n.td.values,function(t,o){var a,r,s=p(n,o);s.options.position=m(s.options.position?s.options.position:o),s.options.position&&(s.options.map=S,u&&(S.setCenter(s.options.position),u=!1),r=new A.classes.Marker(s.options),e.push(r),a=I.add({td:s},"marker",r),l(i,{td:s},r,a))}),g(n,r?e:e[0])))):void g(n,!1)},x.getroute=function(t){t.opts.origin=m(t.opts.origin,!0),t.opts.destination=m(t.opts.destination,!0),j().route(t.opts,function(n,e){c(t,e===q.DirectionsStatus.OK?n:!1,e),b.ack()})},x.getdistance=function(t){var n;for(t.opts.origins=h(t.opts.origins),n=0;n<t.opts.origins.length;n++)t.opts.origins[n]=m(t.opts.origins[n],!0);for(t.opts.destinations=h(t.opts.destinations),n=0;n<t.opts.destinations.length;n++)t.opts.destinations[n]=m(t.opts.destinations[n],!0);O().getDistanceMatrix(t.opts,function(n,e){c(t,e===q.DistanceMatrixStatus.OK?n:!1,e),b.ack()})},x.infowindow=function(e){var o=[],r="values"in e.td;r||(e.latLng&&(e.opts.position=e.latLng),e.td.values=[{options:e.opts}]),t.each(e.td.values,function(t,s){var u,d,c=p(e,s);c.options.position=m(c.options.position?c.options.position:s.latLng),S||v(c.options.position),d=new A.classes.InfoWindow(c.options),d&&(a(c.open)||c.open)&&(r?d.open(S,c.anchor||n):d.open(S,c.anchor||(e.latLng?n:e.session.marker?e.session.marker:n))),o.push(d),u=I.add({td:c},"infowindow",d),l(i,{td:c},d,u)}),g(e,r?o:o[0])},x.circle=function(n){var e=[],o="values"in n.td;return o||(n.opts.center=n.latLng||m(n.opts.center),n.td.values=[{options:n.opts}]),n.td.values.length?(t.each(n.td.values,function(t,o){var a,r,s=p(n,o);s.options.center=m(s.options.center?s.options.center:o),S||v(s.options.center),s.options.map=S,r=new A.classes.Circle(s.options),e.push(r),a=I.add({td:s},"circle",r),l(i,{td:s},r,a)}),void g(n,o?e:e[0])):void g(n,!1)},x.getaddress=function(t){c(t,t.results,t.status),b.ack()},x.getlatlng=function(t){c(t,t.results,t.status),b.ack()},x.getmaxzoom=function(t){C().getMaxZoomAtLatLng(t.latLng,function(n){c(t,n.status===q.MaxZoomStatus.OK?n.zoom:!1,status),b.ack()})},x.getelevation=function(t){var n,e=[],o=function(n,e){c(t,e===q.ElevationStatus.OK?n:!1,e),b.ack()};if(t.latLng)e.push(t.latLng);else for(e=h(t.td.locations||[]),n=0;n<e.length;n++)e[n]=m(e[n]);if(e.length)E().getElevationForLocations({locations:e},o);else{if(t.td.path&&t.td.path.length)for(n=0;n<t.td.path.length;n++)e.push(m(t.td.path[n]));e.length?E().getElevationAlongPath({path:e,samples:t.td.samples},o):b.ack()}},x.defaults=function(n){t.each(n.td,function(n,o){A[n]=e(A[n])?t.extend({},A[n],o):o}),b.ack(!0)},x.rectangle=function(n){var e=[],o="values"in n.td;return o||(n.td.values=[{options:n.opts}]),n.td.values.length?(t.each(n.td.values,function(t,o){var a,r,s=p(n,o);s.options.bounds=y(s.options.bounds?s.options.bounds:o),S||v(s.options.bounds.getCenter()),s.options.map=S,r=new A.classes.Rectangle(s.options),e.push(r),a=I.add({td:s},"rectangle",r),l(i,{td:s},r,a)}),void g(n,o?e:e[0])):void g(n,!1)},x.polyline=function(t){L(t,"Polyline","path")},x.polygon=function(t){L(t,"Polygon","paths")},x.trafficlayer=function(t){v();var n=I.get("trafficlayer");n||(n=new A.classes.TrafficLayer,n.setMap(S),I.add(t,"trafficlayer",n)),g(t,n)},x.bicyclinglayer=function(t){v();var n=I.get("bicyclinglayer");n||(n=new A.classes.BicyclingLayer,n.setMap(S),I.add(t,"bicyclinglayer",n)),g(t,n)},x.groundoverlay=function(t){t.opts.bounds=y(t.opts.bounds),t.opts.bounds&&v(t.opts.bounds.getCenter());var n,e=new A.classes.GroundOverlay(t.opts.url,t.opts.bounds,t.opts.opts);e.setMap(S),n=I.add(t,"groundoverlay",e),g(t,e,n)},x.streetviewpanorama=function(n){n.opts.opts||(n.opts.opts={}),n.latLng?n.opts.opts.position=n.latLng:n.opts.opts.position&&(n.opts.opts.position=m(n.opts.opts.position)),n.td.divId?n.opts.container=document.getElementById(n.td.divId):n.opts.container&&(n.opts.container=t(n.opts.container).get(0));var e,o=new A.classes.StreetViewPanorama(n.opts.container,n.opts.opts);o&&S.setStreetView(o),e=I.add(n,"streetviewpanorama",o),g(n,o,e)},x.kmllayer=function(n){var e=[],o="values"in n.td;return o||(n.td.values=[{options:n.opts}]),n.td.values.length?(t.each(n.td.values,function(t,o){var a,r,s,d=p(n,o);S||v(),s=d.options,d.options.opts&&(s=d.options.opts,d.options.url&&(s.url=d.options.url)),s.map=S,r=u("3.10")?new A.classes.KmlLayer(s):new A.classes.KmlLayer(s.url,s),e.push(r),a=I.add({td:d},"kmllayer",r),l(i,{td:d},r,a)}),void g(n,o?e:e[0])):void g(n,!1)},x.panel=function(n){v();var e,o,r=0,s=0,u=t(document.createElement("div"));u.css({position:"absolute",zIndex:1e3,visibility:"hidden"}),n.opts.content&&(o=t(n.opts.content),u.append(o),i.first().prepend(u),a(n.opts.left)?a(n.opts.right)?n.opts.center&&(r=(i.width()-o.width())/2):r=i.width()-o.width()-n.opts.right:r=n.opts.left,a(n.opts.top)?a(n.opts.bottom)?n.opts.middle&&(s=(i.height()-o.height())/2):s=i.height()-o.height()-n.opts.bottom:s=n.opts.top,u.css({top:s,left:r,visibility:"visible"})),e=I.add(n,"panel",u),g(n,u,e),u=null},x.directionsrenderer=function(n){n.opts.map=S;var e,o=new q.DirectionsRenderer(n.opts);n.td.divId?o.setPanel(document.getElementById(n.td.divId)):n.td.container&&o.setPanel(t(n.td.container).get(0)),e=I.add(n,"directionsrenderer",o),g(n,o,e)},x.getgeoloc=function(t){g(t,t.latLng)},x.styledmaptype=function(t){v();var n=new A.classes.StyledMapType(t.td.styles,t.opts);S.mapTypes.set(t.td.id,n),g(t,n)},x.imagemaptype=function(t){v();var n=new A.classes.ImageMapType(t.opts);S.mapTypes.set(t.td.id,n),g(t,n)},x.autofit=function(n){var e=new q.LatLngBounds;t.each(I.all(),function(t,n){n.getPosition?e.extend(n.getPosition()):n.getBounds?(e.extend(n.getBounds().getNorthEast()),e.extend(n.getBounds().getSouthWest())):n.getPaths?n.getPaths().forEach(function(t){t.forEach(function(t){e.extend(t)})}):n.getPath?n.getPath().forEach(function(t){e.extend(t)}):n.getCenter?e.extend(n.getCenter()):"function"==typeof _&&n instanceof _&&(n=I.getById(n.id(),!0),n&&n.autofit(e))}),e.isEmpty()||S.getBounds()&&S.getBounds().equals(e)||("maxZoom"in n.td&&q.event.addListenerOnce(S,"bounds_changed",function(){this.getZoom()>n.td.maxZoom&&this.setZoom(n.td.maxZoom)}),S.fitBounds(e)),g(n,!0)},x.clear=function(n){if(o(n.td)){if(I.clearById(n.td)||I.objClearById(n.td))return void g(n,!0);n.td={name:n.td}}n.td.id?t.each(h(n.td.id),function(t,n){I.clearById(n)||I.objClearById(n)}):(I.clear(h(n.td.name),n.td.last,n.td.first,n.td.tag),I.objClear(h(n.td.name),n.td.last,n.td.first,n.td.tag)),g(n,!0)},x.get=function(e,i,a){var r,s,u=i?e:e.td;return i||(a=u.full),o(u)?(s=I.getById(u,!1,a)||I.objGetById(u),s===!1&&(r=u,u={})):r=u.name,"map"===r&&(s=S),s||(s=[],u.id?(t.each(h(u.id),function(t,n){s.push(I.getById(n,!1,a)||I.objGetById(n))}),R(u.id)||(s=s[0])):(t.each(r?h(r):[n],function(n,e){var o;u.first?(o=I.get(e,!1,u.tag,a),o&&s.push(o)):u.all?t.each(I.all(e,u.tag,a),function(t,n){s.push(n)}):(o=I.get(e,!0,u.tag,a),o&&s.push(o))}),u.all||R(r)||(s=s[0]))),s=R(s)||!u.all?s:[s],i?s:void g(e,s)},x.exec=function(n){t.each(h(n.td.func),function(e,o){t.each(x.get(n.td,!0,n.td.hasOwnProperty("full")?n.td.full:!0),function(t,n){o.call(i,n)})}),g(n,!0)},x.trigger=function(n){if(o(n.td))q.event.trigger(S,n.td);else{var e=[S,n.td.eventName];n.td.var_args&&t.each(n.td.var_args,function(t,n){e.push(n)}),q.event.trigger.apply(q.event,e)}c(n),b.ack()}}var A,q,Z=0,z=t.isFunction,R=t.isArray,V={},G=new I;t.fn.gmap3=function(){var n,e=[],o=!0,i=[];for(r(),n=0;n<arguments.length;n++)arguments[n]&&e.push(arguments[n]);return e.length||e.push("map"),t.each(this,function(){var n=t(this),a=n.data("gmap3");o=!1,a||(a=new U(n),n.data("gmap3",a)),1!==e.length||"get"!==e[0]&&!x(e[0])?a._plan(e):i.push("get"===e[0]?a.get("map",!0):a.get(e[0].get,!0,e[0].get.full))}),i.length?1===i.length?i[0]:i:this}}(jQuery);
/*
    jQuery Masked Input Plugin
    Copyright (c) 2007 - 2015 Josh Bush (digitalbush.com)
    Licensed under the MIT license (http://digitalbush.com/projects/masked-input-plugin/#license)
    Version: 1.4.1
*/
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof exports?require("jquery"):jQuery)}(function(a){var b,c=navigator.userAgent,d=/iphone/i.test(c),e=/chrome/i.test(c),f=/android/i.test(c);a.mask={definitions:{9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},autoclear:!0,dataName:"rawMaskFn",placeholder:"_"},a.fn.extend({caret:function(a,b){var c;if(0!==this.length&&!this.is(":hidden"))return"number"==typeof a?(b="number"==typeof b?b:a,this.each(function(){this.setSelectionRange?this.setSelectionRange(a,b):this.createTextRange&&(c=this.createTextRange(),c.collapse(!0),c.moveEnd("character",b),c.moveStart("character",a),c.select())})):(this[0].setSelectionRange?(a=this[0].selectionStart,b=this[0].selectionEnd):document.selection&&document.selection.createRange&&(c=document.selection.createRange(),a=0-c.duplicate().moveStart("character",-1e5),b=a+c.text.length),{begin:a,end:b})},unmask:function(){return this.trigger("unmask")},mask:function(c,g){var h,i,j,k,l,m,n,o;if(!c&&this.length>0){h=a(this[0]);var p=h.data(a.mask.dataName);return p?p():void 0}return g=a.extend({autoclear:a.mask.autoclear,placeholder:a.mask.placeholder,completed:null},g),i=a.mask.definitions,j=[],k=n=c.length,l=null,a.each(c.split(""),function(a,b){"?"==b?(n--,k=a):i[b]?(j.push(new RegExp(i[b])),null===l&&(l=j.length-1),k>a&&(m=j.length-1)):j.push(null)}),this.trigger("unmask").each(function(){function h(){if(g.completed){for(var a=l;m>=a;a++)if(j[a]&&C[a]===p(a))return;g.completed.call(B)}}function p(a){return g.placeholder.charAt(a<g.placeholder.length?a:0)}function q(a){for(;++a<n&&!j[a];);return a}function r(a){for(;--a>=0&&!j[a];);return a}function s(a,b){var c,d;if(!(0>a)){for(c=a,d=q(b);n>c;c++)if(j[c]){if(!(n>d&&j[c].test(C[d])))break;C[c]=C[d],C[d]=p(d),d=q(d)}z(),B.caret(Math.max(l,a))}}function t(a){var b,c,d,e;for(b=a,c=p(a);n>b;b++)if(j[b]){if(d=q(b),e=C[b],C[b]=c,!(n>d&&j[d].test(e)))break;c=e}}function u(){var a=B.val(),b=B.caret();if(o&&o.length&&o.length>a.length){for(A(!0);b.begin>0&&!j[b.begin-1];)b.begin--;if(0===b.begin)for(;b.begin<l&&!j[b.begin];)b.begin++;B.caret(b.begin,b.begin)}else{for(A(!0);b.begin<n&&!j[b.begin];)b.begin++;B.caret(b.begin,b.begin)}h()}function v(){A(),B.val()!=E&&B.change()}function w(a){if(!B.prop("readonly")){var b,c,e,f=a.which||a.keyCode;o=B.val(),8===f||46===f||d&&127===f?(b=B.caret(),c=b.begin,e=b.end,e-c===0&&(c=46!==f?r(c):e=q(c-1),e=46===f?q(e):e),y(c,e),s(c,e-1),a.preventDefault()):13===f?v.call(this,a):27===f&&(B.val(E),B.caret(0,A()),a.preventDefault())}}function x(b){if(!B.prop("readonly")){var c,d,e,g=b.which||b.keyCode,i=B.caret();if(!(b.ctrlKey||b.altKey||b.metaKey||32>g)&&g&&13!==g){if(i.end-i.begin!==0&&(y(i.begin,i.end),s(i.begin,i.end-1)),c=q(i.begin-1),n>c&&(d=String.fromCharCode(g),j[c].test(d))){if(t(c),C[c]=d,z(),e=q(c),f){var k=function(){a.proxy(a.fn.caret,B,e)()};setTimeout(k,0)}else B.caret(e);i.begin<=m&&h()}b.preventDefault()}}}function y(a,b){var c;for(c=a;b>c&&n>c;c++)j[c]&&(C[c]=p(c))}function z(){B.val(C.join(""))}function A(a){var b,c,d,e=B.val(),f=-1;for(b=0,d=0;n>b;b++)if(j[b]){for(C[b]=p(b);d++<e.length;)if(c=e.charAt(d-1),j[b].test(c)){C[b]=c,f=b;break}if(d>e.length){y(b+1,n);break}}else C[b]===e.charAt(d)&&d++,k>b&&(f=b);return a?z():k>f+1?g.autoclear||C.join("")===D?(B.val()&&B.val(""),y(0,n)):z():(z(),B.val(B.val().substring(0,f+1))),k?b:l}var B=a(this),C=a.map(c.split(""),function(a,b){return"?"!=a?i[a]?p(b):a:void 0}),D=C.join(""),E=B.val();B.data(a.mask.dataName,function(){return a.map(C,function(a,b){return j[b]&&a!=p(b)?a:null}).join("")}),B.one("unmask",function(){B.off(".mask").removeData(a.mask.dataName)}).on("focus.mask",function(){if(!B.prop("readonly")){clearTimeout(b);var a;E=B.val(),a=A(),b=setTimeout(function(){B.get(0)===document.activeElement&&(z(),a==c.replace("?","").length?B.caret(0,a):B.caret(a))},10)}}).on("blur.mask",v).on("keydown.mask",w).on("keypress.mask",x).on("input.mask paste.mask",function(){B.prop("readonly")||setTimeout(function(){var a=A(!0);B.caret(a),h()},0)}),e&&f&&B.off("input.mask").on("input.mask",u),A()})}})});
/*!
 * jQuery Validation Plugin v1.14.0
 *
 * http://jqueryvalidation.org/
 *
 * Copyright (c) 2015 Jörn Zaefferer
 * Released under the MIT license
 */
(function( factory ) {
    if ( typeof define === "function" && define.amd ) {
        define( ["jquery"], factory );
    } else {
        factory( jQuery );
    }
}(function( $ ) {

$.extend($.fn, {
    // http://jqueryvalidation.org/validate/
    validate: function( options ) {

        // if nothing is selected, return nothing; can't chain anyway
        if ( !this.length ) {
            if ( options && options.debug && window.console ) {
                console.warn( "Nothing selected, can't validate, returning nothing." );
            }
            return;
        }

        // check if a validator for this form was already created
        var validator = $.data( this[ 0 ], "validator" );
        if ( validator ) {
            return validator;
        }

        // Add novalidate tag if HTML5.
        this.attr( "novalidate", "novalidate" );

        validator = new $.validator( options, this[ 0 ] );
        $.data( this[ 0 ], "validator", validator );

        if ( validator.settings.onsubmit ) {

            this.on( "click.validate", ":submit", function( event ) {
                if ( validator.settings.submitHandler ) {
                    validator.submitButton = event.target;
                }

                // allow suppressing validation by adding a cancel class to the submit button
                if ( $( this ).hasClass( "cancel" ) ) {
                    validator.cancelSubmit = true;
                }

                // allow suppressing validation by adding the html5 formnovalidate attribute to the submit button
                if ( $( this ).attr( "formnovalidate" ) !== undefined ) {
                    validator.cancelSubmit = true;
                }
            });

            // validate the form on submit
            this.on( "submit.validate", function( event ) {
                if ( validator.settings.debug ) {
                    // prevent form submit to be able to see console output
                    event.preventDefault();
                }
                function handle() {
                    var hidden, result;
                    if ( validator.settings.submitHandler ) {
                        if ( validator.submitButton ) {
                            // insert a hidden input as a replacement for the missing submit button
                            hidden = $( "<input type='hidden'/>" )
                                .attr( "name", validator.submitButton.name )
                                .val( $( validator.submitButton ).val() )
                                .appendTo( validator.currentForm );
                        }
                        result = validator.settings.submitHandler.call( validator, validator.currentForm, event );
                        if ( validator.submitButton ) {
                            // and clean up afterwards; thanks to no-block-scope, hidden can be referenced
                            hidden.remove();
                        }
                        if ( result !== undefined ) {
                            return result;
                        }
                        return false;
                    }
                    return true;
                }

                // prevent submit for invalid forms or custom submit handlers
                if ( validator.cancelSubmit ) {
                    validator.cancelSubmit = false;
                    return handle();
                }
                if ( validator.form() ) {
                    if ( validator.pendingRequest ) {
                        validator.formSubmitted = true;
                        return false;
                    }
                    return handle();
                } else {
                    validator.focusInvalid();
                    return false;
                }
            });
        }

        return validator;
    },
    // http://jqueryvalidation.org/valid/
    valid: function() {
        var valid, validator, errorList;

        if ( $( this[ 0 ] ).is( "form" ) ) {
            valid = this.validate().form();
        } else {
            errorList = [];
            valid = true;
            validator = $( this[ 0 ].form ).validate();
            this.each( function() {
                valid = validator.element( this ) && valid;
                errorList = errorList.concat( validator.errorList );
            });
            validator.errorList = errorList;
        }
        return valid;
    },

    // http://jqueryvalidation.org/rules/
    rules: function( command, argument ) {
        var element = this[ 0 ],
            settings, staticRules, existingRules, data, param, filtered;

        if ( command ) {
            settings = $.data( element.form, "validator" ).settings;
            staticRules = settings.rules;
            existingRules = $.validator.staticRules( element );
            switch ( command ) {
            case "add":
                $.extend( existingRules, $.validator.normalizeRule( argument ) );
                // remove messages from rules, but allow them to be set separately
                delete existingRules.messages;
                staticRules[ element.name ] = existingRules;
                if ( argument.messages ) {
                    settings.messages[ element.name ] = $.extend( settings.messages[ element.name ], argument.messages );
                }
                break;
            case "remove":
                if ( !argument ) {
                    delete staticRules[ element.name ];
                    return existingRules;
                }
                filtered = {};
                $.each( argument.split( /\s/ ), function( index, method ) {
                    filtered[ method ] = existingRules[ method ];
                    delete existingRules[ method ];
                    if ( method === "required" ) {
                        $( element ).removeAttr( "aria-required" );
                    }
                });
                return filtered;
            }
        }

        data = $.validator.normalizeRules(
        $.extend(
            {},
            $.validator.classRules( element ),
            $.validator.attributeRules( element ),
            $.validator.dataRules( element ),
            $.validator.staticRules( element )
        ), element );

        // make sure required is at front
        if ( data.required ) {
            param = data.required;
            delete data.required;
            data = $.extend( { required: param }, data );
            $( element ).attr( "aria-required", "true" );
        }

        // make sure remote is at back
        if ( data.remote ) {
            param = data.remote;
            delete data.remote;
            data = $.extend( data, { remote: param });
        }

        return data;
    }
});

// Custom selectors
$.extend( $.expr[ ":" ], {
    // http://jqueryvalidation.org/blank-selector/
    blank: function( a ) {
        return !$.trim( "" + $( a ).val() );
    },
    // http://jqueryvalidation.org/filled-selector/
    filled: function( a ) {
        return !!$.trim( "" + $( a ).val() );
    },
    // http://jqueryvalidation.org/unchecked-selector/
    unchecked: function( a ) {
        return !$( a ).prop( "checked" );
    }
});

// constructor for validator
$.validator = function( options, form ) {
    this.settings = $.extend( true, {}, $.validator.defaults, options );
    this.currentForm = form;
    this.init();
};

// http://jqueryvalidation.org/jQuery.validator.format/
$.validator.format = function( source, params ) {
    if ( arguments.length === 1 ) {
        return function() {
            var args = $.makeArray( arguments );
            args.unshift( source );
            return $.validator.format.apply( this, args );
        };
    }
    if ( arguments.length > 2 && params.constructor !== Array  ) {
        params = $.makeArray( arguments ).slice( 1 );
    }
    if ( params.constructor !== Array ) {
        params = [ params ];
    }
    $.each( params, function( i, n ) {
        source = source.replace( new RegExp( "\\{" + i + "\\}", "g" ), function() {
            return n;
        });
    });
    return source;
};

$.extend( $.validator, {

    defaults: {
        messages: {},
        groups: {},
        rules: {},
        errorClass: "error",
        validClass: "valid",
        errorElement: "label",
        focusCleanup: false,
        focusInvalid: true,
        errorContainer: $( [] ),
        errorLabelContainer: $( [] ),
        onsubmit: true,
        ignore: ":hidden",
        ignoreTitle: false,
        onfocusin: function( element ) {
            this.lastActive = element;

            // Hide error label and remove error class on focus if enabled
            if ( this.settings.focusCleanup ) {
                if ( this.settings.unhighlight ) {
                    this.settings.unhighlight.call( this, element, this.settings.errorClass, this.settings.validClass );
                }
                this.hideThese( this.errorsFor( element ) );
            }
        },
        onfocusout: function( element ) {
            if ( !this.checkable( element ) && ( element.name in this.submitted || !this.optional( element ) ) ) {
                this.element( element );
            }
        },
        onkeyup: function( element, event ) {
            // Avoid revalidate the field when pressing one of the following keys
            // Shift       => 16
            // Ctrl        => 17
            // Alt         => 18
            // Caps lock   => 20
            // End         => 35
            // Home        => 36
            // Left arrow  => 37
            // Up arrow    => 38
            // Right arrow => 39
            // Down arrow  => 40
            // Insert      => 45
            // Num lock    => 144
            // AltGr key   => 225
            var excludedKeys = [
                16, 17, 18, 20, 35, 36, 37,
                38, 39, 40, 45, 144, 225
            ];

            if ( event.which === 9 && this.elementValue( element ) === "" || $.inArray( event.keyCode, excludedKeys ) !== -1 ) {
                return;
            } else if ( element.name in this.submitted || element === this.lastElement ) {
                this.element( element );
            }
        },
        onclick: function( element ) {
            // click on selects, radiobuttons and checkboxes
            if ( element.name in this.submitted ) {
                this.element( element );

            // or option elements, check parent select in that case
            } else if ( element.parentNode.name in this.submitted ) {
                this.element( element.parentNode );
            }
        },
        highlight: function( element, errorClass, validClass ) {
            if ( element.type === "radio" ) {
                this.findByName( element.name ).addClass( errorClass ).removeClass( validClass );
            } else {
                $( element ).addClass( errorClass ).removeClass( validClass );
            }
        },
        unhighlight: function( element, errorClass, validClass ) {
            if ( element.type === "radio" ) {
                this.findByName( element.name ).removeClass( errorClass ).addClass( validClass );
            } else {
                $( element ).removeClass( errorClass ).addClass( validClass );
            }
        }
    },

    // http://jqueryvalidation.org/jQuery.validator.setDefaults/
    setDefaults: function( settings ) {
        $.extend( $.validator.defaults, settings );
    },

    messages: {
        required: "Este campo é obrigatório.",
        remote: "Por favor corrigir esse campo.",
        email: "Por favor insira um endereço de e-mail válido.",
        url: "Por favor, insira um URL válido.",
        date: "Digite uma data válida.",
        dateISO: "Digite uma data válida (ISO).",
        number: "Por favor insira um número válido.",
        digits: "Por favor, indique apenas algarismos.",
        creditcard: "Por favor digite um número de cartão de crédito válido.",
        equalTo: "Por favor entre com o mesmo valor novamente.",
        maxlength: $.validator.format( "Please enter no more than {0} characters." ),
        minlength: $.validator.format( "Please enter at least {0} characters." ),
        rangelength: $.validator.format( "Please enter a value between {0} and {1} characters long." ),
        range: $.validator.format( "Please enter a value between {0} and {1}." ),
        max: $.validator.format( "Please enter a value less than or equal to {0}." ),
        min: $.validator.format( "Please enter a value greater than or equal to {0}." )
    },

    autoCreateRanges: false,

    prototype: {

        init: function() {
            this.labelContainer = $( this.settings.errorLabelContainer );
            this.errorContext = this.labelContainer.length && this.labelContainer || $( this.currentForm );
            this.containers = $( this.settings.errorContainer ).add( this.settings.errorLabelContainer );
            this.submitted = {};
            this.valueCache = {};
            this.pendingRequest = 0;
            this.pending = {};
            this.invalid = {};
            this.reset();

            var groups = ( this.groups = {} ),
                rules;
            $.each( this.settings.groups, function( key, value ) {
                if ( typeof value === "string" ) {
                    value = value.split( /\s/ );
                }
                $.each( value, function( index, name ) {
                    groups[ name ] = key;
                });
            });
            rules = this.settings.rules;
            $.each( rules, function( key, value ) {
                rules[ key ] = $.validator.normalizeRule( value );
            });

            function delegate( event ) {
                var validator = $.data( this.form, "validator" ),
                    eventType = "on" + event.type.replace( /^validate/, "" ),
                    settings = validator.settings;
                if ( settings[ eventType ] && !$( this ).is( settings.ignore ) ) {
                    settings[ eventType ].call( validator, this, event );
                }
            }

            $( this.currentForm )
                .on( "focusin.validate focusout.validate keyup.validate",
                    ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], " +
                    "[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], " +
                    "[type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], " +
                    "[type='radio'], [type='checkbox']", delegate)
                // Support: Chrome, oldIE
                // "select" is provided as event.target when clicking a option
                .on("click.validate", "select, option, [type='radio'], [type='checkbox']", delegate);

            if ( this.settings.invalidHandler ) {
                $( this.currentForm ).on( "invalid-form.validate", this.settings.invalidHandler );
            }

            // Add aria-required to any Static/Data/Class required fields before first validation
            // Screen readers require this attribute to be present before the initial submission http://www.w3.org/TR/WCAG-TECHS/ARIA2.html
            $( this.currentForm ).find( "[required], [data-rule-required], .required" ).attr( "aria-required", "true" );
        },

        // http://jqueryvalidation.org/Validator.form/
        form: function() {
            this.checkForm();
            $.extend( this.submitted, this.errorMap );
            this.invalid = $.extend({}, this.errorMap );
            if ( !this.valid() ) {
                $( this.currentForm ).triggerHandler( "invalid-form", [ this ]);
            }
            this.showErrors();
            return this.valid();
        },

        checkForm: function() {
            this.prepareForm();
            for ( var i = 0, elements = ( this.currentElements = this.elements() ); elements[ i ]; i++ ) {
                this.check( elements[ i ] );
            }
            return this.valid();
        },

        // http://jqueryvalidation.org/Validator.element/
        element: function( element ) {
            var cleanElement = this.clean( element ),
                checkElement = this.validationTargetFor( cleanElement ),
                result = true;

            this.lastElement = checkElement;

            if ( checkElement === undefined ) {
                delete this.invalid[ cleanElement.name ];
            } else {
                this.prepareElement( checkElement );
                this.currentElements = $( checkElement );

                result = this.check( checkElement ) !== false;
                if ( result ) {
                    delete this.invalid[ checkElement.name ];
                } else {
                    this.invalid[ checkElement.name ] = true;
                }
            }
            // Add aria-invalid status for screen readers
            $( element ).attr( "aria-invalid", !result );

            if ( !this.numberOfInvalids() ) {
                // Hide error containers on last error
                this.toHide = this.toHide.add( this.containers );
            }
            this.showErrors();
            return result;
        },

        // http://jqueryvalidation.org/Validator.showErrors/
        showErrors: function( errors ) {
            if ( errors ) {
                // add items to error list and map
                $.extend( this.errorMap, errors );
                this.errorList = [];
                for ( var name in errors ) {
                    this.errorList.push({
                        message: errors[ name ],
                        element: this.findByName( name )[ 0 ]
                    });
                }
                // remove items from success list
                this.successList = $.grep( this.successList, function( element ) {
                    return !( element.name in errors );
                });
            }
            if ( this.settings.showErrors ) {
                this.settings.showErrors.call( this, this.errorMap, this.errorList );
            } else {
                this.defaultShowErrors();
            }
        },

        // http://jqueryvalidation.org/Validator.resetForm/
        resetForm: function() {
            if ( $.fn.resetForm ) {
                $( this.currentForm ).resetForm();
            }
            this.submitted = {};
            this.lastElement = null;
            this.prepareForm();
            this.hideErrors();
            var i, elements = this.elements()
                .removeData( "previousValue" )
                .removeAttr( "aria-invalid" );

            if ( this.settings.unhighlight ) {
                for ( i = 0; elements[ i ]; i++ ) {
                    this.settings.unhighlight.call( this, elements[ i ],
                        this.settings.errorClass, "" );
                }
            } else {
                elements.removeClass( this.settings.errorClass );
            }
        },

        numberOfInvalids: function() {
            return this.objectLength( this.invalid );
        },

        objectLength: function( obj ) {
            /* jshint unused: false */
            var count = 0,
                i;
            for ( i in obj ) {
                count++;
            }
            return count;
        },

        hideErrors: function() {
            this.hideThese( this.toHide );
        },

        hideThese: function( errors ) {
            errors.not( this.containers ).text( "" );
            this.addWrapper( errors ).hide();
        },

        valid: function() {
            return this.size() === 0;
        },

        size: function() {
            return this.errorList.length;
        },

        focusInvalid: function() {
            if ( this.settings.focusInvalid ) {
                try {
                    $( this.findLastActive() || this.errorList.length && this.errorList[ 0 ].element || [])
                    .filter( ":visible" )
                    .focus()
                    // manually trigger focusin event; without it, focusin handler isn't called, findLastActive won't have anything to find
                    .trigger( "focusin" );
                } catch ( e ) {
                    // ignore IE throwing errors when focusing hidden elements
                }
            }
        },

        findLastActive: function() {
            var lastActive = this.lastActive;
            return lastActive && $.grep( this.errorList, function( n ) {
                return n.element.name === lastActive.name;
            }).length === 1 && lastActive;
        },

        elements: function() {
            var validator = this,
                rulesCache = {};

            // select all valid inputs inside the form (no submit or reset buttons)
            return $( this.currentForm )
            .find( "input, select, textarea" )
            .not( ":submit, :reset, :image, :disabled" )
            .not( this.settings.ignore )
            .filter( function() {
                if ( !this.name && validator.settings.debug && window.console ) {
                    console.error( "%o has no name assigned", this );
                }

                // select only the first element for each name, and only those with rules specified
                if ( this.name in rulesCache || !validator.objectLength( $( this ).rules() ) ) {
                    return false;
                }

                rulesCache[ this.name ] = true;
                return true;
            });
        },

        clean: function( selector ) {
            return $( selector )[ 0 ];
        },

        errors: function() {
            var errorClass = this.settings.errorClass.split( " " ).join( "." );
            return $( this.settings.errorElement + "." + errorClass, this.errorContext );
        },

        reset: function() {
            this.successList = [];
            this.errorList = [];
            this.errorMap = {};
            this.toShow = $( [] );
            this.toHide = $( [] );
            this.currentElements = $( [] );
        },

        prepareForm: function() {
            this.reset();
            this.toHide = this.errors().add( this.containers );
        },

        prepareElement: function( element ) {
            this.reset();
            this.toHide = this.errorsFor( element );
        },

        elementValue: function( element ) {
            var val,
                $element = $( element ),
                type = element.type;

            if ( type === "radio" || type === "checkbox" ) {
                return this.findByName( element.name ).filter(":checked").val();
            } else if ( type === "number" && typeof element.validity !== "undefined" ) {
                return element.validity.badInput ? false : $element.val();
            }

            val = $element.val();
            if ( typeof val === "string" ) {
                return val.replace(/\r/g, "" );
            }
            return val;
        },

        check: function( element ) {
            element = this.validationTargetFor( this.clean( element ) );

            var rules = $( element ).rules(),
                rulesCount = $.map( rules, function( n, i ) {
                    return i;
                }).length,
                dependencyMismatch = false,
                val = this.elementValue( element ),
                result, method, rule;

            for ( method in rules ) {
                rule = { method: method, parameters: rules[ method ] };
                try {

                    result = $.validator.methods[ method ].call( this, val, element, rule.parameters );

                    // if a method indicates that the field is optional and therefore valid,
                    // don't mark it as valid when there are no other rules
                    if ( result === "dependency-mismatch" && rulesCount === 1 ) {
                        dependencyMismatch = true;
                        continue;
                    }
                    dependencyMismatch = false;

                    if ( result === "pending" ) {
                        this.toHide = this.toHide.not( this.errorsFor( element ) );
                        return;
                    }

                    if ( !result ) {
                        this.formatAndAdd( element, rule );
                        return false;
                    }
                } catch ( e ) {
                    if ( this.settings.debug && window.console ) {
                        console.log( "Exception occurred when checking element " + element.id + ", check the '" + rule.method + "' method.", e );
                    }
                    if ( e instanceof TypeError ) {
                        e.message += ".  Exception occurred when checking element " + element.id + ", check the '" + rule.method + "' method.";
                    }

                    throw e;
                }
            }
            if ( dependencyMismatch ) {
                return;
            }
            if ( this.objectLength( rules ) ) {
                this.successList.push( element );
            }
            return true;
        },

        // return the custom message for the given element and validation method
        // specified in the element's HTML5 data attribute
        // return the generic message if present and no method specific message is present
        customDataMessage: function( element, method ) {
            return $( element ).data( "msg" + method.charAt( 0 ).toUpperCase() +
                method.substring( 1 ).toLowerCase() ) || $( element ).data( "msg" );
        },

        // return the custom message for the given element name and validation method
        customMessage: function( name, method ) {
            var m = this.settings.messages[ name ];
            return m && ( m.constructor === String ? m : m[ method ]);
        },

        // return the first defined argument, allowing empty strings
        findDefined: function() {
            for ( var i = 0; i < arguments.length; i++) {
                if ( arguments[ i ] !== undefined ) {
                    return arguments[ i ];
                }
            }
            return undefined;
        },

        defaultMessage: function( element, method ) {
            return this.findDefined(
                this.customMessage( element.name, method ),
                this.customDataMessage( element, method ),
                // title is never undefined, so handle empty string as undefined
                !this.settings.ignoreTitle && element.title || undefined,
                $.validator.messages[ method ],
                "<strong>Warning: No message defined for " + element.name + "</strong>"
            );
        },

        formatAndAdd: function( element, rule ) {
            var message = this.defaultMessage( element, rule.method ),
                theregex = /\$?\{(\d+)\}/g;
            if ( typeof message === "function" ) {
                message = message.call( this, rule.parameters, element );
            } else if ( theregex.test( message ) ) {
                message = $.validator.format( message.replace( theregex, "{$1}" ), rule.parameters );
            }
            this.errorList.push({
                message: message,
                element: element,
                method: rule.method
            });

            this.errorMap[ element.name ] = message;
            this.submitted[ element.name ] = message;
        },

        addWrapper: function( toToggle ) {
            if ( this.settings.wrapper ) {
                toToggle = toToggle.add( toToggle.parent( this.settings.wrapper ) );
            }
            return toToggle;
        },

        defaultShowErrors: function() {
            var i, elements, error;
            for ( i = 0; this.errorList[ i ]; i++ ) {
                error = this.errorList[ i ];
                if ( this.settings.highlight ) {
                    this.settings.highlight.call( this, error.element, this.settings.errorClass, this.settings.validClass );
                }
                this.showLabel( error.element, error.message );
            }
            if ( this.errorList.length ) {
                this.toShow = this.toShow.add( this.containers );
            }
            if ( this.settings.success ) {
                for ( i = 0; this.successList[ i ]; i++ ) {
                    this.showLabel( this.successList[ i ] );
                }
            }
            if ( this.settings.unhighlight ) {
                for ( i = 0, elements = this.validElements(); elements[ i ]; i++ ) {
                    this.settings.unhighlight.call( this, elements[ i ], this.settings.errorClass, this.settings.validClass );
                }
            }
            this.toHide = this.toHide.not( this.toShow );
            this.hideErrors();
            this.addWrapper( this.toShow ).show();
        },

        validElements: function() {
            return this.currentElements.not( this.invalidElements() );
        },

        invalidElements: function() {
            return $( this.errorList ).map(function() {
                return this.element;
            });
        },

        showLabel: function( element, message ) {
            var place, group, errorID,
                error = this.errorsFor( element ),
                elementID = this.idOrName( element ),
                describedBy = $( element ).attr( "aria-describedby" );
            if ( error.length ) {
                // refresh error/success class
                error.removeClass( this.settings.validClass ).addClass( this.settings.errorClass );
                // replace message on existing label
                error.html( message );
            } else {
                // create error element
                error = $( "<" + this.settings.errorElement + ">" )
                    .attr( "id", elementID + "-error" )
                    .addClass( this.settings.errorClass )
                    .html( message || "" );

                // Maintain reference to the element to be placed into the DOM
                place = error;
                if ( this.settings.wrapper ) {
                    // make sure the element is visible, even in IE
                    // actually showing the wrapped element is handled elsewhere
                    place = error.hide().show().wrap( "<" + this.settings.wrapper + "/>" ).parent();
                }
                if ( this.labelContainer.length ) {
                    this.labelContainer.append( place );
                } else if ( this.settings.errorPlacement ) {
                    this.settings.errorPlacement( place, $( element ) );
                } else {
                    place.insertAfter( element );
                }

                // Link error back to the element
                if ( error.is( "label" ) ) {
                    // If the error is a label, then associate using 'for'
                    error.attr( "for", elementID );
                } else if ( error.parents( "label[for='" + elementID + "']" ).length === 0 ) {
                    // If the element is not a child of an associated label, then it's necessary
                    // to explicitly apply aria-describedby

                    errorID = error.attr( "id" ).replace( /(:|\.|\[|\]|\$)/g, "\\$1");
                    // Respect existing non-error aria-describedby
                    if ( !describedBy ) {
                        describedBy = errorID;
                    } else if ( !describedBy.match( new RegExp( "\\b" + errorID + "\\b" ) ) ) {
                        // Add to end of list if not already present
                        describedBy += " " + errorID;
                    }
                    $( element ).attr( "aria-describedby", describedBy );

                    // If this element is grouped, then assign to all elements in the same group
                    group = this.groups[ element.name ];
                    if ( group ) {
                        $.each( this.groups, function( name, testgroup ) {
                            if ( testgroup === group ) {
                                $( "[name='" + name + "']", this.currentForm )
                                    .attr( "aria-describedby", error.attr( "id" ) );
                            }
                        });
                    }
                }
            }
            if ( !message && this.settings.success ) {
                error.text( "" );
                if ( typeof this.settings.success === "string" ) {
                    error.addClass( this.settings.success );
                } else {
                    this.settings.success( error, element );
                }
            }
            this.toShow = this.toShow.add( error );
        },

        errorsFor: function( element ) {
            var name = this.idOrName( element ),
                describer = $( element ).attr( "aria-describedby" ),
                selector = "label[for='" + name + "'], label[for='" + name + "'] *";

            // aria-describedby should directly reference the error element
            if ( describer ) {
                selector = selector + ", #" + describer.replace( /\s+/g, ", #" );
            }
            return this
                .errors()
                .filter( selector );
        },

        idOrName: function( element ) {
            return this.groups[ element.name ] || ( this.checkable( element ) ? element.name : element.id || element.name );
        },

        validationTargetFor: function( element ) {

            // If radio/checkbox, validate first element in group instead
            if ( this.checkable( element ) ) {
                element = this.findByName( element.name );
            }

            // Always apply ignore filter
            return $( element ).not( this.settings.ignore )[ 0 ];
        },

        checkable: function( element ) {
            return ( /radio|checkbox/i ).test( element.type );
        },

        findByName: function( name ) {
            return $( this.currentForm ).find( "[name='" + name + "']" );
        },

        getLength: function( value, element ) {
            switch ( element.nodeName.toLowerCase() ) {
            case "select":
                return $( "option:selected", element ).length;
            case "input":
                if ( this.checkable( element ) ) {
                    return this.findByName( element.name ).filter( ":checked" ).length;
                }
            }
            return value.length;
        },

        depend: function( param, element ) {
            return this.dependTypes[typeof param] ? this.dependTypes[typeof param]( param, element ) : true;
        },

        dependTypes: {
            "boolean": function( param ) {
                return param;
            },
            "string": function( param, element ) {
                return !!$( param, element.form ).length;
            },
            "function": function( param, element ) {
                return param( element );
            }
        },

        optional: function( element ) {
            var val = this.elementValue( element );
            return !$.validator.methods.required.call( this, val, element ) && "dependency-mismatch";
        },

        startRequest: function( element ) {
            if ( !this.pending[ element.name ] ) {
                this.pendingRequest++;
                this.pending[ element.name ] = true;
            }
        },

        stopRequest: function( element, valid ) {
            this.pendingRequest--;
            // sometimes synchronization fails, make sure pendingRequest is never < 0
            if ( this.pendingRequest < 0 ) {
                this.pendingRequest = 0;
            }
            delete this.pending[ element.name ];
            if ( valid && this.pendingRequest === 0 && this.formSubmitted && this.form() ) {
                $( this.currentForm ).submit();
                this.formSubmitted = false;
            } else if (!valid && this.pendingRequest === 0 && this.formSubmitted ) {
                $( this.currentForm ).triggerHandler( "invalid-form", [ this ]);
                this.formSubmitted = false;
            }
        },

        previousValue: function( element ) {
            return $.data( element, "previousValue" ) || $.data( element, "previousValue", {
                old: null,
                valid: true,
                message: this.defaultMessage( element, "remote" )
            });
        },

        // cleans up all forms and elements, removes validator-specific events
        destroy: function() {
            this.resetForm();

            $( this.currentForm )
                .off( ".validate" )
                .removeData( "validator" );
        }

    },

    classRuleSettings: {
        required: { required: true },
        email: { email: true },
        url: { url: true },
        date: { date: true },
        dateISO: { dateISO: true },
        number: { number: true },
        digits: { digits: true },
        creditcard: { creditcard: true }
    },

    addClassRules: function( className, rules ) {
        if ( className.constructor === String ) {
            this.classRuleSettings[ className ] = rules;
        } else {
            $.extend( this.classRuleSettings, className );
        }
    },

    classRules: function( element ) {
        var rules = {},
            classes = $( element ).attr( "class" );

        if ( classes ) {
            $.each( classes.split( " " ), function() {
                if ( this in $.validator.classRuleSettings ) {
                    $.extend( rules, $.validator.classRuleSettings[ this ]);
                }
            });
        }
        return rules;
    },

    normalizeAttributeRule: function( rules, type, method, value ) {

        // convert the value to a number for number inputs, and for text for backwards compability
        // allows type="date" and others to be compared as strings
        if ( /min|max/.test( method ) && ( type === null || /number|range|text/.test( type ) ) ) {
            value = Number( value );

            // Support Opera Mini, which returns NaN for undefined minlength
            if ( isNaN( value ) ) {
                value = undefined;
            }
        }

        if ( value || value === 0 ) {
            rules[ method ] = value;
        } else if ( type === method && type !== "range" ) {

            // exception: the jquery validate 'range' method
            // does not test for the html5 'range' type
            rules[ method ] = true;
        }
    },

    attributeRules: function( element ) {
        var rules = {},
            $element = $( element ),
            type = element.getAttribute( "type" ),
            method, value;

        for ( method in $.validator.methods ) {

            // support for <input required> in both html5 and older browsers
            if ( method === "required" ) {
                value = element.getAttribute( method );

                // Some browsers return an empty string for the required attribute
                // and non-HTML5 browsers might have required="" markup
                if ( value === "" ) {
                    value = true;
                }

                // force non-HTML5 browsers to return bool
                value = !!value;
            } else {
                value = $element.attr( method );
            }

            this.normalizeAttributeRule( rules, type, method, value );
        }

        // maxlength may be returned as -1, 2147483647 ( IE ) and 524288 ( safari ) for text inputs
        if ( rules.maxlength && /-1|2147483647|524288/.test( rules.maxlength ) ) {
            delete rules.maxlength;
        }

        return rules;
    },

    dataRules: function( element ) {
        var rules = {},
            $element = $( element ),
            type = element.getAttribute( "type" ),
            method, value;

        for ( method in $.validator.methods ) {
            value = $element.data( "rule" + method.charAt( 0 ).toUpperCase() + method.substring( 1 ).toLowerCase() );
            this.normalizeAttributeRule( rules, type, method, value );
        }
        return rules;
    },

    staticRules: function( element ) {
        var rules = {},
            validator = $.data( element.form, "validator" );

        if ( validator.settings.rules ) {
            rules = $.validator.normalizeRule( validator.settings.rules[ element.name ] ) || {};
        }
        return rules;
    },

    normalizeRules: function( rules, element ) {
        // handle dependency check
        $.each( rules, function( prop, val ) {
            // ignore rule when param is explicitly false, eg. required:false
            if ( val === false ) {
                delete rules[ prop ];
                return;
            }
            if ( val.param || val.depends ) {
                var keepRule = true;
                switch ( typeof val.depends ) {
                case "string":
                    keepRule = !!$( val.depends, element.form ).length;
                    break;
                case "function":
                    keepRule = val.depends.call( element, element );
                    break;
                }
                if ( keepRule ) {
                    rules[ prop ] = val.param !== undefined ? val.param : true;
                } else {
                    delete rules[ prop ];
                }
            }
        });

        // evaluate parameters
        $.each( rules, function( rule, parameter ) {
            rules[ rule ] = $.isFunction( parameter ) ? parameter( element ) : parameter;
        });

        // clean number parameters
        $.each([ "minlength", "maxlength" ], function() {
            if ( rules[ this ] ) {
                rules[ this ] = Number( rules[ this ] );
            }
        });
        $.each([ "rangelength", "range" ], function() {
            var parts;
            if ( rules[ this ] ) {
                if ( $.isArray( rules[ this ] ) ) {
                    rules[ this ] = [ Number( rules[ this ][ 0 ]), Number( rules[ this ][ 1 ] ) ];
                } else if ( typeof rules[ this ] === "string" ) {
                    parts = rules[ this ].replace(/[\[\]]/g, "" ).split( /[\s,]+/ );
                    rules[ this ] = [ Number( parts[ 0 ]), Number( parts[ 1 ] ) ];
                }
            }
        });

        if ( $.validator.autoCreateRanges ) {
            // auto-create ranges
            if ( rules.min != null && rules.max != null ) {
                rules.range = [ rules.min, rules.max ];
                delete rules.min;
                delete rules.max;
            }
            if ( rules.minlength != null && rules.maxlength != null ) {
                rules.rangelength = [ rules.minlength, rules.maxlength ];
                delete rules.minlength;
                delete rules.maxlength;
            }
        }

        return rules;
    },

    // Converts a simple string to a {string: true} rule, e.g., "required" to {required:true}
    normalizeRule: function( data ) {
        if ( typeof data === "string" ) {
            var transformed = {};
            $.each( data.split( /\s/ ), function() {
                transformed[ this ] = true;
            });
            data = transformed;
        }
        return data;
    },

    // http://jqueryvalidation.org/jQuery.validator.addMethod/
    addMethod: function( name, method, message ) {
        $.validator.methods[ name ] = method;
        $.validator.messages[ name ] = message !== undefined ? message : $.validator.messages[ name ];
        if ( method.length < 3 ) {
            $.validator.addClassRules( name, $.validator.normalizeRule( name ) );
        }
    },

    methods: {

        // http://jqueryvalidation.org/required-method/
        required: function( value, element, param ) {
            // check if dependency is met
            if ( !this.depend( param, element ) ) {
                return "dependency-mismatch";
            }
            if ( element.nodeName.toLowerCase() === "select" ) {
                // could be an array for select-multiple or a string, both are fine this way
                var val = $( element ).val();
                return val && val.length > 0;
            }
            if ( this.checkable( element ) ) {
                return this.getLength( value, element ) > 0;
            }
            return value.length > 0;
        },

        // http://jqueryvalidation.org/email-method/
        email: function( value, element ) {
            // From https://html.spec.whatwg.org/multipage/forms.html#valid-e-mail-address
            // Retrieved 2014-01-14
            // If you have a problem with this implementation, report a bug against the above spec
            // Or use custom methods to implement your own email validation
            return this.optional( element ) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test( value );
        },

        // http://jqueryvalidation.org/url-method/
        url: function( value, element ) {

            // Copyright (c) 2010-2013 Diego Perini, MIT licensed
            // https://gist.github.com/dperini/729294
            // see also https://mathiasbynens.be/demo/url-regex
            // modified to allow protocol-relative URLs
            return this.optional( element ) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test( value );
        },

        // http://jqueryvalidation.org/date-method/
        date: function( value, element ) {
            return this.optional( element ) || !/Invalid|NaN/.test( new Date( value ).toString() );
        },

        // http://jqueryvalidation.org/dateISO-method/
        dateISO: function( value, element ) {
            return this.optional( element ) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test( value );
        },

        // http://jqueryvalidation.org/number-method/
        number: function( value, element ) {
            return this.optional( element ) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test( value );
        },

        // http://jqueryvalidation.org/digits-method/
        digits: function( value, element ) {
            return this.optional( element ) || /^\d+$/.test( value );
        },

        // http://jqueryvalidation.org/creditcard-method/
        // based on http://en.wikipedia.org/wiki/Luhn_algorithm
        creditcard: function( value, element ) {
            if ( this.optional( element ) ) {
                return "dependency-mismatch";
            }
            // accept only spaces, digits and dashes
            if ( /[^0-9 \-]+/.test( value ) ) {
                return false;
            }
            var nCheck = 0,
                nDigit = 0,
                bEven = false,
                n, cDigit;

            value = value.replace( /\D/g, "" );

            // Basing min and max length on
            // http://developer.ean.com/general_info/Valid_Credit_Card_Types
            if ( value.length < 13 || value.length > 19 ) {
                return false;
            }

            for ( n = value.length - 1; n >= 0; n--) {
                cDigit = value.charAt( n );
                nDigit = parseInt( cDigit, 10 );
                if ( bEven ) {
                    if ( ( nDigit *= 2 ) > 9 ) {
                        nDigit -= 9;
                    }
                }
                nCheck += nDigit;
                bEven = !bEven;
            }

            return ( nCheck % 10 ) === 0;
        },

        // http://jqueryvalidation.org/minlength-method/
        minlength: function( value, element, param ) {
            var length = $.isArray( value ) ? value.length : this.getLength( value, element );
            return this.optional( element ) || length >= param;
        },

        // http://jqueryvalidation.org/maxlength-method/
        maxlength: function( value, element, param ) {
            var length = $.isArray( value ) ? value.length : this.getLength( value, element );
            return this.optional( element ) || length <= param;
        },

        // http://jqueryvalidation.org/rangelength-method/
        rangelength: function( value, element, param ) {
            var length = $.isArray( value ) ? value.length : this.getLength( value, element );
            return this.optional( element ) || ( length >= param[ 0 ] && length <= param[ 1 ] );
        },

        // http://jqueryvalidation.org/min-method/
        min: function( value, element, param ) {
            return this.optional( element ) || value >= param;
        },

        // http://jqueryvalidation.org/max-method/
        max: function( value, element, param ) {
            return this.optional( element ) || value <= param;
        },

        // http://jqueryvalidation.org/range-method/
        range: function( value, element, param ) {
            return this.optional( element ) || ( value >= param[ 0 ] && value <= param[ 1 ] );
        },

        // http://jqueryvalidation.org/equalTo-method/
        equalTo: function( value, element, param ) {
            // bind to the blur event of the target in order to revalidate whenever the target field is updated
            // TODO find a way to bind the event just once, avoiding the unbind-rebind overhead
            var target = $( param );
            if ( this.settings.onfocusout ) {
                target.off( ".validate-equalTo" ).on( "blur.validate-equalTo", function() {
                    $( element ).valid();
                });
            }
            return value === target.val();
        },

        // http://jqueryvalidation.org/remote-method/
        remote: function( value, element, param ) {
            if ( this.optional( element ) ) {
                return "dependency-mismatch";
            }

            var previous = this.previousValue( element ),
                validator, data;

            if (!this.settings.messages[ element.name ] ) {
                this.settings.messages[ element.name ] = {};
            }
            previous.originalMessage = this.settings.messages[ element.name ].remote;
            this.settings.messages[ element.name ].remote = previous.message;

            param = typeof param === "string" && { url: param } || param;

            if ( previous.old === value ) {
                return previous.valid;
            }

            previous.old = value;
            validator = this;
            this.startRequest( element );
            data = {};
            data[ element.name ] = value;
            $.ajax( $.extend( true, {
                mode: "abort",
                port: "validate" + element.name,
                dataType: "json",
                data: data,
                context: validator.currentForm,
                success: function( response ) {
                    var valid = response === true || response === "true",
                        errors, message, submitted;

                    validator.settings.messages[ element.name ].remote = previous.originalMessage;
                    if ( valid ) {
                        submitted = validator.formSubmitted;
                        validator.prepareElement( element );
                        validator.formSubmitted = submitted;
                        validator.successList.push( element );
                        delete validator.invalid[ element.name ];
                        validator.showErrors();
                    } else {
                        errors = {};
                        message = response || validator.defaultMessage( element, "remote" );
                        errors[ element.name ] = previous.message = $.isFunction( message ) ? message( value ) : message;
                        validator.invalid[ element.name ] = true;
                        validator.showErrors( errors );
                    }
                    previous.valid = valid;
                    validator.stopRequest( element, valid );
                }
            }, param ) );
            return "pending";
        }
    }
});

// ajax mode: abort
// usage: $.ajax({ mode: "abort"[, port: "uniqueport"]});
// if mode:"abort" is used, the previous request on that port (port can be undefined) is aborted via XMLHttpRequest.abort()

var pendingRequests = {},
    ajax;
// Use a prefilter if available (1.5+)
if ( $.ajaxPrefilter ) {
    $.ajaxPrefilter(function( settings, _, xhr ) {
        var port = settings.port;
        if ( settings.mode === "abort" ) {
            if ( pendingRequests[port] ) {
                pendingRequests[port].abort();
            }
            pendingRequests[port] = xhr;
        }
    });
} else {
    // Proxy ajax
    ajax = $.ajax;
    $.ajax = function( settings ) {
        var mode = ( "mode" in settings ? settings : $.ajaxSettings ).mode,
            port = ( "port" in settings ? settings : $.ajaxSettings ).port;
        if ( mode === "abort" ) {
            if ( pendingRequests[port] ) {
                pendingRequests[port].abort();
            }
            pendingRequests[port] = ajax.apply(this, arguments);
            return pendingRequests[port];
        }
        return ajax.apply(this, arguments);
    };
}

}));
$(document).ready(function () {

    $(function(){
      $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
          var that=$($(e.target).attr('href')).find('.map');
          if(!that.find('iframe').length){ 
            that.append($('<iframe/>',{src:that.data('map')})
                          .css({height:'300px',width:'100%',border:'none'}));
          }
        }).first().trigger('shown.bs.tab');
    });

    $('.gm-style .place-card-large').css({'display':'none'});

    $(".who-we-are").click(function(){

        window.location = 'http://www.doctum.edu.br/quem-somos/historia/';
    });

    $("#bookmark").click(function(){
        var args = $(this).attr("title");
        if (args == 'Quem Somos') {
            $(this).attr("href", "http://www.doctum.edu.br/quem-somos/historia/");
        };
    });

    $("#bookmarkTwo").click(function(){
        var args = $(this).attr("title");
        if (args == 'Unidade') {
            $(this).attr("href", "http://www.doctum.edu.br/unidades/");
        };
    });

    $("#unidade").change(function() {

        $("#boxFormAdx").css({'display':'block'});
    });

    $("#unidade").change(function() {

        $("#boxFormAdxIntern").css({'display':'block'});
    });
    
    $(window).scroll(function() {
       
       var containerHeight = $('#navigation-sidebar').outerHeight(true);
       var scrollTopVal = $(this).scrollTop();

        if (scrollTopVal > containerHeight) {

            $('#navigation-sidebar').css({'dislpay':'none'});
            $('#navigation-inline').css({'display':'block','position':'fixed','top' :'0px','width':'100%','z-index':'999999'});

        } else {

            $('#navigation-sidebar').css({'display':'block'});
            $('#navigation-inline').css({'display':'none'});

        }
    });

     //Scrolls ancoras pagina mini site
    $("#estrutura").click(function() {
        var link = $('#highlight-courses');
        $('html, body').animate({ scrollTop: 5 }, 800, 'swing');
    });   

	$("#cursos").click(function() {
        var link = $('#02');
        $('html, body').animate({ scrollTop: link.offset().top-180 }, 800, 'swing');
    });

    $("#como-chegar").click(function() {
        var link = $('#03');
        $('html, body').animate({ scrollTop: link.offset().top-200 }, 800, 'swing');
    });

    $("#contato").click(function() {
        var link = $('#04');
        $('html, body').animate({ scrollTop: link.offset().top-150 }, 800, 'swing');
    });

    $("#home").click(function() {
        var link = $('#highlight-courses');
        $('html, body').animate({ scrollTop: 5 }, 800, 'swing');
    });
        
   
    //Scrolls ancoras pagina biblioteca
    $("#viewPresentation").click(function() {

 		$('html, body').animate({ scrollTop: 380 }, 800);
    });

    $('#list-singles-relations ul li a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top-200
                }, 1500, 'swing');
            return false;
            }
        }
    });

    $('#list-singles-relations-mobile ul li a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top-80
                }, 1500, 'swing');
            return false;
            }
        }
    });


    $(".optradioOne").click(function () {

        var yes = "Sim";

        var status =  $(this).val() ;

        if (status == yes) {

            $('#occupation').prop('required', true); 
            $('#enterprise').prop('required', true); 

        }else{

            $('#occupation').prop('required', false); 
            $('#enterprise').prop('required', false); 
        };
    });

    $(".optradioTwo").click(function () {

        var yes = "Sim";

        var status =  $(this).val() ;

        if (status == yes) {

            $('#select_country').prop('required', true);
            $('#select_state').prop('required', true); 
            $('#select_city').prop('required', true); 

        }else{

            $('#select_Country').prop('required', false);
            $('#select_State').prop('required', false); 
            $('#select_City').prop('required', false);
        };
    });

    //caso o usuario selecione outra deficiencia, pagina tal(verificar), torna visivel campo para inserção da deficiencia.
    $("#selectDeficiency").change(function(){      

        var typeSelect = "Outra";
        var status =  $(this).val() ;

        if (status == typeSelect) {

            $("#otherhidden").show();
            $("#otherInfoSelected").prop('required', true);

        }else{

            $("#otherhidden").hide();
        };
    });

    //caso o usuario selecione a opção exterior, no formulario da pagina egressos , torna visivel campo para inserção do país.
    $("#select_country").change(function(){      

        var typeSelect = "Exterior";
        var status =  $(this).val() ;

        if (status == typeSelect) {

            $("#selectCountry").show();
            $("#inptlocaleext").show();
            $("#select_ext").show();
            $("#select_state").hide();
            $("#select_city").hide();
            
            $("#select_state").prop('required', false);
            $("#select_city").prop('required', false);

            $("#select_ext").prop('required', true);    

        }else{

            $("#inptlocaleext").hide();
            $("#select_ext").hide();
            $("#selectCountry").hide();

            $("#select_state").show();
            $("#select_city").show();

            $("#select_state").prop('required', true);
            $("#select_city").prop('required', true);
            $("#otherCountry").prop('required', false);  

            $("#select_ext").prop('required', false); 
            
        };
    });

    $(".optradioOne").click(function(){ 
        var radio = $(this).val();
        if (radio == "Sim") {
            $("#enterpriseHidden").show();
        } else{
            $("#enterpriseHidden").hide();
        };
    });

    $(".optradioTwo").click(function(){ 
        var radioTwo = $(this).val();
        if (radioTwo == "Sim") {
            $("#locationHidden").show();
                 $("#select_country").change(function(){      

                    var typeCountry = "2";
                    var country =  $(this).val() ;

                    if (country == typeCountry) {

                        $("#selectState").hide();
                        $("#selectCity").hide();
                        $("#infoOther").show();

                        $("#btnSubmit").click(function(){

                            var input = $("#otherCountry").val();

                            if (input == "") {

                                $("#otherCountry").addClass("error");
                                
                                alert("Informe seu domicilio, Campo Obrigátorio");
                                
                                return false;
                                
                            } else { 

                                return true;
                            }
                            
                        });

                    }else{

                        $("#infoOther").hide();
                        $("#selectState").show();
                        $("#selectCity").show();
                    };

                });
        } else{
            $("#locationHidden").hide();
        };
    });

    $(".sendTitle").click(function() {
    	
        $("#sendTitle").submit();
    });
  
    $('#submit-search-library-unit').click(function(){
        //alert("teste");
        var string = $("#search-library-unit").val()
        var book = {
        action: 'get_filter_book',
        input_name: string
        };
        $("#listBooks").hide();
        //$(".load").show();
        $.post(ajaxurl, book, function(ListBooks){
            //$(".load").hide();
            $("#showResultBook").show();
            $("#showResultBook").html(ListBooks);
        });
    });

    //carregar cursos conforme seleção de unidade (select formulario vestibular home)
    $('#select_units_vestibular').change(function(){
        var unit = {
        action: 'get_filter_units',
        name_unit: $(this).val()
        };
        $("#select_courses_vestibular").hide();
        $(".load").show();
        $.post(ajaxurl, unit, function(ListCoursesVestibular){
            $(".load").hide();
            $("#select_courses_vestibular").show();
            $("#select_courses_vestibular").html(ListCoursesVestibular);
        });
    });

    //carregar cursos conforme seleção de unidade (select formulario vestibular interna)
    $('#select_units_page_vestibular').change(function(){
        var unit = {
        action: 'get_filter_units',
        name_unit: $(this).val()
        };
        $("#select_courses_page_vestibular").hide();
        $(".load").show();
        $.post(ajaxurl, unit, function(ListCoursesVestibular){
            $(".load").hide();
            $("#select_courses_page_vestibular").show();
            $("#select_courses_page_vestibular").html(ListCoursesVestibular);
        });
    });

    //carregar cidades conforme seleção de estado (select pagina egressos)
    $('#select_state').change(function(){
        var city = {
        action: 'get_filter_city',
        cod_estado: $(this).val()
        };
        $("#select_city").hide();
        $(".loadTwo").show();
        $.post(ajaxurl, city, function(ListCity){
            $(".loadTwo").hide();
            $("#select_city").show();
            $("#select_city").html(ListCity);
        });
    });

    //carregar cursos conforme seleção de unidade (select pagina egressos)
    $('#select_units_graduates').change(function(){
        var args = $(this).val();

            if (args != 'others' || args == '') {

                $("#select_courses_graduates").css('display', 'block');
                $("#inputUnitText").css('display', 'none');
                $("#othersunitsDoctum").prop('required', false);
                
                var courses = {
                action: 'get_filter_units',
                name_unit: $(this).val()
                };
                $("#select_courses_graduates").hide();
                $(".load").show();
                $.post(ajaxurl, courses, function(ListCourses){
                    $(".load").hide();
                    $("#select_courses_graduates").show();
                    $("#select_courses_graduates").html(ListCourses);
                });

            }else{
                $("#select_courses_graduates").css('display', 'none');
                $("#inputUnitText").css('display', 'block');
                $("#othersunitsDoctum").prop('required', true);
            };
    });

    $("#selectUnits").change(function(event) {
        var args = $(this).val();

            if (args != 'others' || args == '') {

                // $("#select_courses_graduates").css('display', 'block');
                $("#inputUnitText").css('display', 'none');
                $("#othersunitsDoctum").prop('required', false);

            }else{
                // $("#select_courses_graduates").css('display', 'none');
                $("#inputUnitText").css('display', 'block');
                $("#othersunitsDoctum").prop('required', true);
            };
    });

    $("#link-unit").click(function(){

        $("#get_unit").submit();
    });

    //$("#select_courses_single").change(function(){

        //$("#get_unit").submit();
    //});

    //Ajax de seleção de cursos graduação por unidade
    $("#select_units").change(function(){
        var area = {
            action: 'get_select_courses_unit',
            unit_id: $(this).val()
        };

        $(".list-show").hide();
        $(".result").hide();
        $(".load").show();
        $.post(ajaxurl, area, function(ListArea){
            $(".load").hide();
            $(".result").show();
            $(".result").html(ListArea);
        });
    });   

    //Ajax de seleção outro curso graduação (Pagina cursos por unidade de cursos)
    $("#change_others_courses").change(function(){
        alert("teste");
        var area = {
            action: 'get_select_courses_single',
            field: $(this).val()
        };

        $("#content").hide();
        $("#courses").hide();
        $("#load").show();
        $.post(ajaxurl, area, function(ListArea){
            $("#load").hide();
            $(".list-data-courses").show();
            $(".list-data-courses").html(ListArea);
        });
    });

    //Ajax de seleção de mudar de unidade (Pagina unidade especifica)
    $("#change_others_unit").change(function(){

        var unit = {
            action: 'get_select_units_single',
            field: $(this).val()
        };

        $("#topData").hide();
        $("#topArgsData").hide();
        $("#load").show();
        $.post(ajaxurl, unit, function(ListUnit){
            $("#load").hide();
            $("#returnTopData").show();
            $("#returnTopArgsData").html(ListUnit);
        });
    })

    $('#a_menos').click(function(){

        var normal = $('p').css('font-size');
        var recipiente = '.content-text p';
        var acao = $(this).attr('class');
        var atual = parseFloat($(recipiente).css('font-size'));
        
        if (acao == 'aumentar'){
            var novotamanho = atual*1.1;
                if (novotamanho < 36){
                    $(recipiente).css('font-size', novotamanho);
                }
        }

        if (acao == 'diminuir'){
            var novotamanho = atual*0.9;
                if (novotamanho > 8){
                    $(recipiente).css('font-size', novotamanho);    
                }
        }

        if (acao == 'padrao'){
            $(recipiente).css('font-size', normal)
        }

        return false;
    });

    $('#a_mais').click(function(){
        
        var normal = $('p').css('font-size');
        var recipiente = '.content-text p';
        var acao = $(this).attr('class');
        var atual = parseFloat($(recipiente).css('font-size'));
        
        if (acao == 'aumentar'){
            var novotamanho = atual*1.1;
                if (novotamanho < 36){
                    $(recipiente).css('font-size', novotamanho);
                }
        }

        if (acao == 'diminuir'){
            var novotamanho = atual*0.9;
                if (novotamanho > 8){
                    $(recipiente).css('font-size', novotamanho);    
                }
        }
      
        if (acao == 'padrao'){
            $(recipiente).css('font-size', normal)
        }
        
        return false;
    });

    $("#contraste").click(function () {
        $(this).hide();
        $('#contrasteOne').show();   
    });

    $("#contrasteOne").click(function () {
        $(this).hide();
        $('#contraste').show();
    });
    
    $('#phone').mask('(99) 99999-9999');
    $('#phoneCel').mask('(99) 99999-9999');
    $('.phone-cel').mask('(99) 99999-9999');


    $('#phoneTwo').mask('(99) 9999-9999');
    $('#phoneFix').mask('(99) 9999-9999');  
    $('.phone-fix').mask('(99) 9999-9999');

    $( "#realupload" ).click(function() {

     	$( "#fakeupload" ).css('background','#e2e2e2');
    });

    $("#chat").mouseover(function() {
        $(this).hide();
        $("#chatMirror").show();
    });

    $("#chatMirror").mouseout(function() {
        $(this).hide();
        $("#chat").show();
    });

    //Exibir formulario de trabalhe conosco
    $("#show-form").click(function() {

        $("#formHiddenWorkUs").slideToggle("slow");
    });

    // FORMULARIO VESTIBULAR //
    //Exibir formulario de incrição vestibular na home (TARJA MAIOR)
    $("#click-inscription").click(function() {
        $("#vestOpen").hide();
        $(".vestHidden").fadeIn(800);
    });

    $("#closeFormThree img").click(function() {
        $(".vestHidden").hide();
        $("#vestOpen").fadeIn(800);
    });

    //Exibir formulario de incrição vestibular na home (TARJA MENOR)
    $("#openInternInscriptionHome").click(function() {
        $("#vestOpenIntern").hide();
        $(".vestHiddenIntern").fadeIn(800);
    });

    $("#closeFormThree img").click(function() {
        $(".vestHiddenIntern").hide();
        $("#vestOpenIntern").fadeIn(800);
    });

    //Exibir formulario de incrição vestibular na Interna (TARJA MAIOR)
    $("#closeFormFour").click(function() {
        $(".vestHidden").hide();
        $("#vestOpen").fadeIn(800);
    });

    //Exibir formulario de incrição vestibular na Interna (TARJA MENOR)
    $("#openInternInscription").click(function() {
        $('#content').css({'margin-top':'0'});
        $("#vestOpenIntern").hide();
        $(".vestHiddenIntern").fadeIn(800);
    });
    
    //SELEÇÃO DE MAPA DAS UNIDADES POR COORDENADAS - MAPA INICIAL HOME E UNIDADES //
    $("#select_units_map").change(function(){

        var area = {
            action: 'get_select_data_unit',
            unit: $(this).val()
        };

        $(".load").show();
        $.post(ajaxurl, area, function(ListData){
            $(".load").hide();
            $(".list-data").show();
            $(".list-data").html(ListData);
        });
        
       $("#map_canvas_full").hide();
       $("#map_canvas").css('height', '450');     

       var args = $(this).val();

       var explode = args.split('|');

       var idUnit = explode[0];

            switch(idUnit) {
                case '0' :
                    $("#map_canvas").empty();
                    $("#map_canvas").css('height', '600');
                    $("#map_canvas").append("<iframe style='pointer-events: none;' src='https://www.google.com/maps/d/embed?mid=17q2KgWwkoDPfABkPFdMg6PV1YmI' width='100%' height='600'></iframe>");
                break;
                case '511':
                    $("#map_canvas").empty();
                    $("#map_canvas").append("<iframe style='pointer-events: none;' src='https://www.google.com/maps/d/embed?mid=1Sm02yttkTmY1KUM9NgYJHmT_OC0' width='100%' height='450'></iframe>");
                    
                    break;
                case '512':
                    $("#map_canvas").empty();
                    $("#map_canvas").append("<iframe style='pointer-events: none;' src='https://www.google.com/maps/d/embed?mid=1Seuh5xCGVP39pBINtkum20Q1RCA' width='100%' height='450'></iframe>");
                    
                    break;
                case '513':
                    $("#map_canvas").empty();
                    $("#map_canvas").append("<iframe style='pointer-events: none;' src='https://www.google.com/maps/d/embed?mid=1ittaghe2bEuWShuevBfjuURLcck' width='100%' height='450'></iframe>");
                    
                    break;
                case '514':
                    $("#map_canvas").empty();
                    $("#map_canvas").append("<iframe style='pointer-events: none;' src='https://www.google.com/maps/d/embed?mid=1HNkGUFc4nQxrSe7PipoyLHAuTrw' width='100%' height='450'></iframe>");
                    
                    break;
                case '515':
                    $("#map_canvas").empty();
                    $("#map_canvas").append("<iframe style='pointer-events: none;' src='https://www.google.com/maps/d/embed?mid=1a1yLwHtsUagTGGRBD757llLHp_w' width='100%' height='450'></iframe>");
                    
                    break;
                case '516':
                    $("#map_canvas").empty();
                    $("#map_canvas").append("<iframe style='pointer-events: none;' src='https://www.google.com/maps/d/embed?mid=1TMah3rYVBglaofIQXrh7MMos5Yg' width='100%' height='450'></iframe>");
                    
                    break;
                case '517':
                    $("#map_canvas").empty();
                    $("#map_canvas").append("<iframe style='pointer-events: none;' src='https://www.google.com/maps/d/embed?mid=1IMxfk4lgtRPKdpev2rsX2BFyPKc' width='100%' height='450'></iframe>");
                    
                    break;
                case '518':
                    $("#map_canvas").empty();
                    $("#map_canvas").append("<iframe style='pointer-events: none;' src='https://www.google.com/maps/d/embed?mid=1f_9TNsnEUhkOnXcaEaeAiP9wmgE' width='100%' height='450'></iframe>");
                    
                    break;
                case '519':
                    $("#map_canvas").empty();
                    $("#map_canvas").append("<iframe style='pointer-events: none;' src='https://www.google.com/maps/d/embed?mid=1jv4u8PxyxsDnkGIAxtcBDQIn9Io' width='100%' height='450'></iframe>");
                    
                    break;
                case '520':
                    $("#map_canvas").empty();
                    $("#map_canvas").append("<iframe style='pointer-events: none;' src='https://www.google.com/maps/d/embed?mid=1CQ1SbTxec-v1x_2gzNo8LopJ1d0' width='100%' height='450'></iframe>");
                    
                    break;
                case '521':
                    $("#map_canvas").empty();
                    $("#map_canvas").append("<iframe style='pointer-events: none;' src='https://www.google.com/maps/d/embed?mid=1VAQh2DBvIHaKfQFwQ8tomSpOJYQ' width='100%' height='450'></iframe>");
                    
                    break;
                case '522':
                    $("#map_canvas").empty();
                    $("#map_canvas").append("<iframe style='pointer-events: none;' src='https://www.google.com/maps/d/embed?mid=1wWPWoew2X8QmokuTRg9-h4Z4Q3M' width='100%' height='450'></iframe>");
                    
                    break;
                case '523':
                    $("#map_canvas").empty();
                    $("#map_canvas").append("<iframe style='pointer-events: none;' src='https://www.google.com/maps/d/embed?mid=19dFRbniczyZ67j6G1rHJ2scgYGw' width='100%' height='450'></iframe>");
                    
                    break;
                case '524':
                    $("#map_canvas").empty();
                    $("#map_canvas").append("<iframe style='pointer-events: none;' src='https://www.google.com/maps/d/embed?mid=1_zq-_mwsdrDHTRX8MXm-KAPbNa8' width='100%' height='450'></iframe>");
                    
                    break;
            }
    });

    $('.acf-map').each(function(){

        render_map($(this));
    });

    $(function(){
        $('#select_courses_single').bind('change',function(){
            var url = $(this).val();
            
            if(url){
                var open = window.open(url,'_self');
            }
            return false
        })
    });

    $(function(){
        $('#select_courses_single_mobile').bind('change',function(){
            var url = $(this).val();
            
            if(url){
                var open = window.open(url,'_self');
            }
            return false
        })
    });

    $(function(){
        $('#change_others_unit').bind('change',function(){
            var url = $(this).val();
           
            if(url){
                var open = window.open(url,'_self');
            }
            return false
        })
    });

    $(function(){
        $('#change_others_unit_mobile').bind('change',function(){
            var url = $(this).val();
           
            if(url){
                var open = window.open(url,'_self');
            }
            return false
        })
    });

    $(function(){
        $('#select_courses').bind('change',function(){
            var url = $(this).val();
            
            if(url){
                var open = window.open(url,'_self');
            }
            
            return false
        })
    });

    $(function(){
        $('#select_courses_mobile').bind('change',function(){
            var url = $(this).val();
            
            if(url){
                var open = window.open(url,'_self');
            }
            
            return false
        })
    });

    function setActiveStyleSheet(title) {
      var i, a, main;
      for(i=0; (a = document.getElementsByTagName("link")[i]); i++) {
        if(a.getAttribute("rel").indexOf("style") != -1 && a.getAttribute("title")) {
          a.disabled = true;
          if(a.getAttribute("title") == title) a.disabled = false;
        }
      }
    }

    function getActiveStyleSheet() {
      var i, a;
      for(i=0; (a = document.getElementsByTagName("link")[i]); i++) {
        if(a.getAttribute("rel").indexOf("style") != -1 && a.getAttribute("title") && !a.disabled) return a.getAttribute("title");
      }
      return null;
    }

    function getPreferredStyleSheet() {
      var i, a;
      for(i=0; (a = document.getElementsByTagName("link")[i]); i++) {
        if(a.getAttribute("rel").indexOf("style") != -1
           && a.getAttribute("rel").indexOf("alt") == -1
           && a.getAttribute("title")
           ) return a.getAttribute("title");
      }
      return null;
    }

    function createCookie(name,value,days) {
      if (days) {
        var date = new Date();
        date.setTime(date.getTime()+(days*24*60*60*1000));
        var expires = "; expires="+date.toGMTString();
      }
      else expires = "";
      document.cookie = name+"="+value+expires+"; path=/";
    }

    function readCookie(name) {
      var nameEQ = name + "=";
      var ca = document.cookie.split(';');
      for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
      }
      return null;
    }

    window.onload = function(e) {
      var cookie = readCookie("style");
      var title = cookie ? cookie : getPreferredStyleSheet();
      setActiveStyleSheet(title);
    }

    window.onunload = function(e) {
      var title = getActiveStyleSheet();
      createCookie("style", title, 365);
    }

    var cookie = readCookie("style");
    var title = cookie ? cookie : getPreferredStyleSheet();
    setActiveStyleSheet(title);


    var viewport = $(window).width();
   

    if(viewport == 1349) {
        $(".tab-content #content .content-text h2").css('margin-top', '0.5rem');
    }

    // Disable scroll zooming and bind back the click event
    var onMapMouseleaveHandler = function (event) {
    var that = $(this);

        that.on('click', onMapClickHandler);
        that.off('mouseleave', onMapMouseleaveHandler);
        that.find('iframe').css("pointer-events", "none");
    }

    var onMapClickHandler = function (event) {
    var that = $(this);

        // Disable the click handler until the user leaves the map area
        that.off('click', onMapClickHandler);

        // Enable scrolling zoom
        that.find('iframe').css("pointer-events", "auto");

        // Handle the mouse leave event
        that.on('mouseleave', onMapMouseleaveHandler);
    }

    // Enable map zooming with mouse scroll when the user clicks the map
    $('#mapas').on('click', onMapClickHandler);
    $('#tab6').on('click', onMapClickHandler);

    $("#getMapUnit").click(function(){

        var idUnit = $(this).attr("data-unit");
        
        $("#map_canvas_iframe").css('height', '320');     

        switch(idUnit) {

            case '511':
                $("#map_canvas_iframe").empty();
                $("#map_canvas_iframe").append("<iframe style='pointer-events: none;' src='https://www.google.com/maps/d/embed?mid=1Sm02yttkTmY1KUM9NgYJHmT_OC0' width='100%' height='320'></iframe>");
                
                break;
            case '512':
                $("#map_canvas_iframe").empty();
                $("#map_canvas_iframe").append("<iframe style='pointer-events: none;' src='https://www.google.com/maps/d/embed?mid=1Seuh5xCGVP39pBINtkum20Q1RCA' width='100%' height='320'></iframe>");
                
                break;
            case '513':
                $("#map_canvas_iframe").empty();
                $("#map_canvas_iframe").append("<iframe style='pointer-events: none;' src='https://www.google.com/maps/d/embed?mid=1ittaghe2bEuWShuevBfjuURLcck' width='100%' height='320'></iframe>");
                
                break;
            case '514':
                $("#map_canvas_iframe").empty();
                $("#map_canvas_iframe").append("<iframe style='pointer-events: none;' src='https://www.google.com/maps/d/embed?mid=1HNkGUFc4nQxrSe7PipoyLHAuTrw' width='100%' height='320'></iframe>");
                
                break;
            case '515':
                $("#map_canvas_iframe").empty();
                $("#map_canvas_iframe").append("<iframe style='pointer-events: none;' src='https://www.google.com/maps/d/embed?mid=1a1yLwHtsUagTGGRBD757llLHp_w' width='100%' height='320'></iframe>");
                
                break;
            case '516':
                $("#map_canvas_iframe").empty();
                $("#map_canvas_iframe").append("<iframe style='pointer-events: none;' src='https://www.google.com/maps/d/embed?mid=1TMah3rYVBglaofIQXrh7MMos5Yg' width='100%' height='320'></iframe>");
                
                break;
            case '517':
                $("#map_canvas_iframe").empty();
                $("#map_canvas_iframe").append("<iframe style='pointer-events: none;' src='https://www.google.com/maps/d/embed?mid=1IMxfk4lgtRPKdpev2rsX2BFyPKc' width='100%' height='320'></iframe>");
                
                break;
            case '518':
                $("#map_canvas_iframe").empty();
                $("#map_canvas_iframe").append("<iframe style='pointer-events: none;' src='https://www.google.com/maps/d/embed?mid=1f_9TNsnEUhkOnXcaEaeAiP9wmgE' width='100%' height='320'></iframe>");
                
                break;
            case '519':
                $("#map_canvas_iframe").empty();
                $("#map_canvas_iframe").append("<iframe style='pointer-events: none;' src='https://www.google.com/maps/d/embed?mid=1jv4u8PxyxsDnkGIAxtcBDQIn9Io' width='100%' height='320'></iframe>");
                
                break;
            case '520':
                $("#map_canvas_iframe").empty();
                $("#map_canvas_iframe").append("<iframe style='pointer-events: none;' src='https://www.google.com/maps/d/embed?mid=1CQ1SbTxec-v1x_2gzNo8LopJ1d0' width='100%' height='320'></iframe>");
                
                break;
            case '521':
                $("#map_canvas_iframe").empty();
                $("#map_canvas_iframe").append("<iframe style='pointer-events: none;' src='https://www.google.com/maps/d/embed?mid=1VAQh2DBvIHaKfQFwQ8tomSpOJYQ' width='100%' height='320'></iframe>");
                
                break;
            case '522':
                $("#map_canvas_iframe").empty();
                $("#map_canvas_iframe").append("<iframe style='pointer-events: none;' src='https://www.google.com/maps/d/embed?mid=1wWPWoew2X8QmokuTRg9-h4Z4Q3M' width='100%' height='320'></iframe>");
                
                break;
            case '523':
                $("#map_canvas_iframe").empty();
                $("#map_canvas_iframe").append("<iframe style='pointer-events: none;' src='https://www.google.com/maps/d/embed?mid=19dFRbniczyZ67j6G1rHJ2scgYGw' width='100%' height='320'></iframe>");
                
                break;
            case '524':
                $("#map_canvas_iframe").empty();
                $("#map_canvas_iframe").append("<iframe style='pointer-events: none;' src='https://www.google.com/maps/d/embed?mid=1_zq-_mwsdrDHTRX8MXm-KAPbNa8' width='100%' height='320'></iframe>");
                
                break;
        }
        
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
});