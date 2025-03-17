import{r as u,e as y}from"./index-CintVSxK.js";const C=u.createContext({map:void 0,maps:void 0}),P=i=>y.createElement(C.Provider,{value:{map:i.map,maps:i.maps}},i.children);P.__docgenInfo={description:"",methods:[],displayName:"Provider",props:{map:{required:!1,tsType:{name:"google.maps.Map"},description:"map instance"},maps:{required:!1,tsType:{name:"google.maps"},description:"google.maps object"}}};function I(...i){const e=[];return i.forEach(t=>{if(t){if(typeof t=="string")e.push(t);else if(Array.isArray(t))e.push(I(...t));else if(typeof t=="object")for(const r in t)t[r]&&e.push(r)}}),e.join(" ")}function T(i={}){const{className:e}=i,t=document.createElement("div");return t.style.position="absolute",e&&(t.className=e),t}const R=u.memo(i=>{const{api:e,containerRef:t,className:r,style:n,classNames:s}=i;return y.createElement("div",{className:I(r),style:n},y.createElement("div",{style:{height:"100%"},className:I(s==null?void 0:s.map),ref:t}),e?y.createElement(P,{map:e.map,maps:e.maps},y.createElement("div",{className:I(s==null?void 0:s.children)},i.children)):null)});R.__docgenInfo={description:"use with useGoogleMap",methods:[],displayName:"GoogleMap"};function M(i,e,t,r){function n(s){return s instanceof t?s:new t(function(o){o(s)})}return new(t||(t=Promise))(function(s,o){function l(a){try{c(r.next(a))}catch(h){o(h)}}function p(a){try{c(r.throw(a))}catch(h){o(h)}}function c(a){a.done?s(a.value):n(a.value).then(l,p)}c((r=r.apply(i,[])).next())})}function N(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var D=function i(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){if(e.constructor!==t.constructor)return!1;var r,n,s;if(Array.isArray(e)){if(r=e.length,r!=t.length)return!1;for(n=r;n--!==0;)if(!i(e[n],t[n]))return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===t.toString();if(s=Object.keys(e),r=s.length,r!==Object.keys(t).length)return!1;for(n=r;n--!==0;)if(!Object.prototype.hasOwnProperty.call(t,s[n]))return!1;for(n=r;n--!==0;){var o=s[n];if(!i(e[o],t[o]))return!1}return!0}return e!==e&&t!==t},$=N(D);const k="__googleMapsScriptId";var d;(function(i){i[i.INITIALIZED=0]="INITIALIZED",i[i.LOADING=1]="LOADING",i[i.SUCCESS=2]="SUCCESS",i[i.FAILURE=3]="FAILURE"})(d||(d={}));class f{constructor({apiKey:e,authReferrerPolicy:t,channel:r,client:n,id:s=k,language:o,libraries:l=[],mapIds:p,nonce:c,region:a,retries:h=3,url:v="https://maps.googleapis.com/maps/api/js",version:m}){if(this.callbacks=[],this.done=!1,this.loading=!1,this.errors=[],this.apiKey=e,this.authReferrerPolicy=t,this.channel=r,this.client=n,this.id=s||k,this.language=o,this.libraries=l,this.mapIds=p,this.nonce=c,this.region=a,this.retries=h,this.url=v,this.version=m,f.instance){if(!$(this.options,f.instance.options))throw new Error(`Loader must not be called again with different options. ${JSON.stringify(this.options)} !== ${JSON.stringify(f.instance.options)}`);return f.instance}f.instance=this}get options(){return{version:this.version,apiKey:this.apiKey,channel:this.channel,client:this.client,id:this.id,libraries:this.libraries,language:this.language,region:this.region,mapIds:this.mapIds,nonce:this.nonce,url:this.url,authReferrerPolicy:this.authReferrerPolicy}}get status(){return this.errors.length?d.FAILURE:this.done?d.SUCCESS:this.loading?d.LOADING:d.INITIALIZED}get failed(){return this.done&&!this.loading&&this.errors.length>=this.retries+1}createUrl(){let e=this.url;return e+="?callback=__googleMapsCallback&loading=async",this.apiKey&&(e+=`&key=${this.apiKey}`),this.channel&&(e+=`&channel=${this.channel}`),this.client&&(e+=`&client=${this.client}`),this.libraries.length>0&&(e+=`&libraries=${this.libraries.join(",")}`),this.language&&(e+=`&language=${this.language}`),this.region&&(e+=`&region=${this.region}`),this.version&&(e+=`&v=${this.version}`),this.mapIds&&(e+=`&map_ids=${this.mapIds.join(",")}`),this.authReferrerPolicy&&(e+=`&auth_referrer_policy=${this.authReferrerPolicy}`),e}deleteScript(){const e=document.getElementById(this.id);e&&e.remove()}load(){return this.loadPromise()}loadPromise(){return new Promise((e,t)=>{this.loadCallback(r=>{r?t(r.error):e(window.google)})})}importLibrary(e){return this.execute(),google.maps.importLibrary(e)}loadCallback(e){this.callbacks.push(e),this.execute()}setScript(){var e,t;if(document.getElementById(this.id)){this.callback();return}const r={key:this.apiKey,channel:this.channel,client:this.client,libraries:this.libraries.length&&this.libraries,v:this.version,mapIds:this.mapIds,language:this.language,region:this.region,authReferrerPolicy:this.authReferrerPolicy};Object.keys(r).forEach(s=>!r[s]&&delete r[s]),!((t=(e=window==null?void 0:window.google)===null||e===void 0?void 0:e.maps)===null||t===void 0)&&t.importLibrary||(s=>{let o,l,p,c="The Google Maps JavaScript API",a="google",h="importLibrary",v="__ib__",m=document,g=window;g=g[a]||(g[a]={});const E=g.maps||(g.maps={}),_=new Set,w=new URLSearchParams,j=()=>o||(o=new Promise((b,S)=>M(this,void 0,void 0,function*(){var O;yield l=m.createElement("script"),l.id=this.id,w.set("libraries",[..._]+"");for(p in s)w.set(p.replace(/[A-Z]/g,A=>"_"+A[0].toLowerCase()),s[p]);w.set("callback",a+".maps."+v),l.src=this.url+"?"+w,E[v]=b,l.onerror=()=>o=S(Error(c+" could not load.")),l.nonce=this.nonce||((O=m.querySelector("script[nonce]"))===null||O===void 0?void 0:O.nonce)||"",m.head.append(l)})));E[h]?console.warn(c+" only loads once. Ignoring:",s):E[h]=(b,...S)=>_.add(b)&&j().then(()=>E[h](b,...S))})(r);const n=this.libraries.map(s=>this.importLibrary(s));n.length||n.push(this.importLibrary("core")),Promise.all(n).then(()=>this.callback(),s=>{const o=new ErrorEvent("error",{error:s});this.loadErrorCallback(o)})}reset(){this.deleteScript(),this.done=!1,this.loading=!1,this.errors=[],this.onerrorEvent=null}resetIfRetryingFailed(){this.failed&&this.reset()}loadErrorCallback(e){if(this.errors.push(e),this.errors.length<=this.retries){const t=this.errors.length*Math.pow(2,this.errors.length);console.error(`Failed to load Google Maps script, retrying in ${t} ms.`),setTimeout(()=>{this.deleteScript(),this.setScript()},t)}else this.onerrorEvent=e,this.callback()}callback(){this.done=!0,this.loading=!1,this.callbacks.forEach(e=>{e(this.onerrorEvent)}),this.callbacks=[]}execute(){if(this.resetIfRetryingFailed(),!this.loading)if(this.done)this.callback();else{if(window.google&&window.google.maps&&window.google.maps.version){console.warn("Google Maps already loaded outside @googlemaps/js-api-loader. This may result in undesirable behavior as options and script parameters may not match."),this.callback();return}this.loading=!0,this.setScript()}}}function G(i){return new f(i).load()}function U(i){const{loader:e,map:t}=i,[r,n]=u.useState(),[s,o]=u.useState(),[l,p]=u.useState(null),c=u.useRef(null);return u.useEffect(()=>{o("loading"),G(e).then(a=>{if(c.current){const h=new a.maps.Map(c.current,{...t});n({map:h,maps:a.maps}),o("loaded")}else throw new Error("mapDiv is required")}).catch(a=>{o("error"),p(a)})},[e]),u.useEffect(()=>{r!=null&&r.map&&t&&r.map.setOptions(t)},[r,t]),{api:r,ref:c,stat:s,err:l}}export{R as G,C as M,T as c,U as u};
