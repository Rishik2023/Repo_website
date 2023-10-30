/*!
 * WPMU DEV Forminator UI
 * Copyright 2019 Incsub (https://incsub.com)
 * Licensed under GPL v3 (http://www.gnu.org/licenses/gpl-3.0.html)
 */
/*!
 * WPMU DEV Forminator UI
 * Copyright 2019 Incsub (https://incsub.com)
 * Licensed under GPL v3 (http://www.gnu.org/licenses/gpl-3.0.html)
 */
function _createForOfIteratorHelper(t,o){var e="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!e){if(Array.isArray(t)||(e=_unsupportedIterableToArray(t))||o&&t&&"number"==typeof t.length){e&&(t=e);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,a=!0,s=!1;return{s:function(){e=e.call(t)},n:function(){var t=e.next();return a=t.done,t},e:function(t){s=!0,n=t},f:function(){try{a||null==e.return||e.return()}finally{if(s)throw n}}}}function _unsupportedIterableToArray(t,o){if(t){if("string"==typeof t)return _arrayLikeToArray(t,o);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?_arrayLikeToArray(t,o):void 0}}function _arrayLikeToArray(t,o){(null==o||o>t.length)&&(o=t.length);for(var e=0,i=new Array(o);e<o;e++)i[e]=t[e];return i}function _typeof(t){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_typeof(t)}!function(t){"use strict";"object"!==_typeof(window.FUI)&&(window.FUI={}),FUI.formLoad=function(o){var e,i,r,n,a,s,l=t(o),d=l.find(".forminator-response-message");if(l.is(".forminator-ui")||l.is(".forminator-custom-form"))return d.removeClass("forminator-show"),d.removeClass("forminator-accessible"),d.attr("aria-hidden","true"),e=l.data("id"),i=l.data("id"),e.length&&""!==e&&l.addClass("forminator-form-"+i),r=l.data("design"),n=l.data("design"),r&&""!==r?l.addClass("forminator-design--"+n):l.addClass("forminator-design--none"),a=l.data("grid"),s=l.data("grid"),l.removeClass("forminator-custom"),l.removeClass("forminator-enclosed"),a&&""!==a&&"open"!==a&&l.addClass("forminator-"+s),this}}(jQuery),function(t){"use strict";"object"!==_typeof(window.FUI)&&(window.FUI={}),FUI.formSimulation=function(o){var e=t(o),i=e.closest("form"),r=i.find(".forminator-response-message"),n="";if(i.is(".forminator-ui")||i.is(".forminator-custom-form"))return e.on("click",(function(t){return a(),t.preventDefault(),t.stopPropagation(),!1})),this;function a(){var o=i.find(".forminator-input"),e=o.closest(".forminator-field"),a=o.closest(".forminator-field.forminator-is_required"),s=a.find(".forminator-input").filter((function(){return!!this.value})),l=i.find(".forminator-textarea"),d=l.closest(".forminator-field"),f=l.closest(".forminator-field.forminator-is_required").find(".forminator-textarea").val(),c=i.find(".forminator-field-radio"),u=i.find(".forminator-field-radio.forminator-is_required").find("input:checked"),m=i.find(".forminator-multiselect"),h=m.closest(".forminator-field"),p=m.closest(".forminator-field.forminator-is_required").find("input:checked");n="",r.html(n),r.removeClass("forminator-show"),r.removeClass("forminator-accessible"),r.removeClass("forminator-error"),r.removeClass("forminator-success"),r.attr("aria-hidden","true"),r.removeAttr("tabindex"),i.find(".forminator-field").removeClass("forminator-has_error"),e.hasClass("forminator-is_required")&&s.length!==a.length||d.hasClass("forminator-is_required")&&""===f.length||c.hasClass("forminator-is_required")&&0===u.length||h.hasClass("forminator-is_required")&&0===p.length?(i.find(".forminator-input").each((function(){var o=t(this),e=o.closest(".forminator-field"),i=e.find(".forminator-label");e.hasClass("forminator-is_required")&&""===o.val()&&(e.addClass("forminator-has_error"),i.length?n+="<li>"+i.text()+" needs to be filled.</li>":n+="<li>"+o.prop("id")+" needs to be filled.</li>")})),r.html(n),i.find(".forminator-textarea").each((function(){var o=t(this),e=o.closest(".forminator-field"),i=e.find(".forminator-label");e.hasClass("forminator-is_required")&&""===o.val()&&(e.addClass("forminator-has_error"),i.length?n+="<li>"+i.text()+" needs to be filled.</li>":n+="<li>"+o.prop("id")+" needs to be filled.</li>")})),r.html(n),i.find(".forminator-field-radio").each((function(){var o=t(this),e=o.find(".forminator-label"),i=o.find(".forminator-radio"),r=i.find("input").map((function(){return this.id})).get();o.hasClass("forminator-is_required")&&0===i.find("input:checked").length&&(o.addClass("forminator-has_error"),e.length?n+="<li>"+e.text()+" needs at least one option selected.</li>":n+="<li>You must select at lease one of these options: "+r.join(",")+"</li>")})),r.html(n),i.find(".forminator-multiselect").each((function(){var o=t(this),e=o.closest(".forminator-field"),i=e.find(".forminator-label"),r=o.find(".forminator-option"),a=r.find("input").map((function(){return this.id})).get();e.hasClass("forminator-is_required")&&0===r.find("input:checked").length&&(e.addClass("forminator-has_error"),i.length?n+="<li>"+i.text()+" needs at least one option selected.</li>":n+="<li>You must select at lease one of these options: "+a.join(",")+"</li>")})),r.html(n),r.addClass("forminator-accessible"),r.removeAttr("aria-hidden"),r.prop("tabindex","-1"),r.focus()):(n="<p>Form was submitted successfully.</p>",r.html(n),r.addClass("forminator-success"),r.addClass("forminator-show"),r.removeAttr("aria-hidden"),r.prop("tabindex","-1"),r.focus())}}}(jQuery),function(t){"use strict";"object"!==_typeof(window.FUI)&&(window.FUI={}),FUI.inputStates=function(o){var e=t(o),i=e.closest("form");if(e.is("input")||i.is(".forminator-poll")&&(i.is(".forminator-ui")||i.is(".forminator-custom-form")))return e.each((function(){var o,e;o=t(this),e=o.closest(".forminator-field"),o.mouseover((function(t){e.addClass("forminator-is_hover"),t.stopPropagation()})).mouseout((function(t){e.removeClass("forminator-is_hover"),t.stopPropagation()})),function(o){var e=t(o),i=e.closest(".forminator-field");e.focus((function(t){i.addClass("forminator-is_active"),t.stopPropagation()})).blur((function(t){i.removeClass("forminator-is_active"),t.stopPropagation()}))}(this),function(o){var e=t(o),i=e.closest(".forminator-field");""!==e.val().trim()&&i.addClass("forminator-is_filled"),e.on("change",(function(){""!==e.val().trim()?i.addClass("forminator-is_filled"):i.removeClass("forminator-is_filled")}))}(this)})),this}}(jQuery),function(t){"use strict";"object"!==_typeof(window.FUI)&&(window.FUI={}),FUI.inputMaterial=function(o){var e=t(o),i=e.closest(".forminator-field"),r=i.find(".forminator-label"),n=e.closest("form");if(e.is("input")||n.is(".forminator-poll")&&(n.is(".forminator-ui")||n.is(".forminator-custom-form")))return e.parent().hasClass("forminator-input--wrap")||e.wrap('<div class="forminator-input--wrap"></div>'),r.length&&(r.addClass("forminator-floating--input"),i.find(".forminator-input-with-icon").length&&r.addClass("forminator-has_icon"),i.find(".forminator-input-with-phone").length&&(r.addClass("forminator-has_phone"),i.find(".intl-tel-input").hasClass("allow-dropdown")&&r.addClass("allow-dropdown"))),this}}(jQuery),function(t){"use strict";"object"!==_typeof(window.FUI)&&(window.FUI={}),FUI.textareaStates=function(o){var e=t(o),i=e.closest("form");if(e.is("textarea")||i.is(".forminator-ui")||i.is(".forminator-custom-form"))return e.each((function(){var o,e;o=t(this),e=o.closest(".forminator-field"),o.mouseover((function(t){e.addClass("forminator-is_hover"),t.stopPropagation()})).mouseout((function(t){e.removeClass("forminator-is_hover"),t.stopPropagation()})),function(o){var e=t(o),i=e.closest(".forminator-field");e.focus((function(t){i.addClass("forminator-is_active"),t.stopPropagation()})).blur((function(t){i.removeClass("forminator-is_active"),t.stopPropagation()}))}(this),function(o){var e=t(o),i=e.closest(".forminator-field");e.on("load",(function(){""!==e.val().trim()&&i.addClass("forminator-is_filled")})),e.on("change",(function(){""!==e.val().trim()?i.addClass("forminator-is_filled"):i.removeClass("forminator-is_filled")}))}(this)})),this}}(jQuery),function(t){"use strict";"object"!==_typeof(window.FUI)&&(window.FUI={}),FUI.textareaMaterial=function(o){var e=t(o),i=e.closest(".forminator-field"),r=i.find(".forminator-label"),n=e.closest("form");if((e.is("textarea")||n.is(".forminator-ui")||n.is(".forminator-custom-form"))&&!e.hasClass("wp-editor-area"))return function(){if(e.parent().hasClass("forminator-textarea--wrap")||e.wrap('<div class="forminator-textarea--wrap"></div>'),r.length){var t=(0===r.height()?20:r.height())+9;r.addClass("forminator-floating--textarea"),i.css({position:"relative"}),i.hasClass("forminator-is_filled")&&i.hasClass("forminator-is_active")||r.css({"padding-top":t+"px"}),e.css({"padding-top":t+"px"})}}(),this}}(jQuery),function(t){"use strict";"object"!==_typeof(window.FUI)&&(window.FUI={}),FUI.radioStates=function(o){var e=t(o),i=e.find("input");if(e.is("label")&&"radio"===i.prop("type"))return i.each((function(){t(this).on("click",(function(){var o=t(this),e=o.parent(),i=e.closest(".forminator-field").find(".forminator-radio");i.find("input").prop("checked",!1),i.removeClass("forminator-is_checked"),o.prop("checked","checked"),e.addClass("forminator-is_checked")}))})),this}}(jQuery),function(t){"use strict";"object"!==_typeof(window.FUI)&&(window.FUI={}),FUI.checkboxStates=function(o){var e=t(o),i=e.find("input");if(e.is("label")&&"checkbox"===i.prop("type"))return i.each((function(){t(this).on("click",(function(){var o=t(this).parent();o.is(".forminator-is_checked")?o.removeClass("forminator-is_checked"):o.addClass("forminator-is_checked")}))})),this}}(jQuery),function(t){"use strict";"object"!==_typeof(window.FUI)&&(window.FUI={}),FUI.multiSelectStates=function(o){var e=t(o),i=e.find(".forminator-option"),r=i.find("input");if(e.is(".forminator-multiselect")&&0!==i.length)return r.each((function(){t(this).on("click",(function(){var o=t(this).parent();o.is(".forminator-is_checked")?o.removeClass("forminator-is_checked"):o.addClass("forminator-is_checked")}))})),this}}(jQuery),function(t){"use strict";"object"!==_typeof(window.FUI)&&(window.FUI={}),FUI.select2=function(){t(".forminator-custom-form").each((function(){var o=t(this),e=o.data("form-id"),i=o.find(".forminator-select2");t.each(["bold","flat","default","material","none"],(function(r,n){var a,s="en",l="Search",d=-1;o.hasClass("forminator-design--"+n)&&i.length&&i.each((function(){var o=t(this),i=o.closest(".sui-dialog-content"),r=i.length?i:o.closest(".elementor-popup-modal");a=!0===o.data("rtl-support")?"rtl":"ltr",l=""!==o.data("placeholder")?o.data("placeholder"):"Search",s=""!==o.data("language")?o.data("language"):"en",d=!0===o.data("search")?0:-1,r.length||(r=t(document.body)),o.FUIselect2({dir:a,language:s,placeholder:l,dropdownCssClass:"forminator-custom-form-"+e+" forminator-dropdown--"+n,minimumResultsForSearch:d,dropdownParent:r}).on("select2:opening",(function(){o.data("select2").$dropdown.find(":input.select2-search__field").prop("placeholder",""!==o.data("placeholder")?o.data("placeholder"):"Search"),(o.closest(".hustle-popup").length||o.closest(".hustle-slidein"))&&t(document.body).addClass("forminator-hustle-dropdown-fix")})).on("select2:closing",(function(){t(document.body).removeClass("forminator-hustle-dropdown-fix")}))}))}))}))}}(jQuery),function(){"use strict";"object"!==_typeof(window.FUI)&&(window.FUI={});var t=t||{};t.KeyCode={BACKSPACE:8,TAB:9,RETURN:13,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,DELETE:46},t.Utils=t.Utils||{},t.Utils.remove=function(t){return t.remove&&"function"==typeof t.remove?t.remove():!(!t.parentNode||!t.parentNode.removeChild||"function"!=typeof t.parentNode.removeChild)&&t.parentNode.removeChild(t)},t.Utils.isFocusable=function(t){if(0<t.tabIndex||0===t.tabIndex&&null!==t.getAttribute("tabIndex"))return!0;if(t.disabled)return!1;switch(t.nodeName){case"A":return!!t.href&&"ignore"!=t.rel;case"INPUT":return"hidden"!=t.type&&"file"!=t.type;case"BUTTON":case"SELECT":case"TEXTAREA":return!0;default:return!1}},t.Utils.simulateClick=function(t){var o=new MouseEvent("click",{bubbles:!0,cancelable:!0,view:window});t.dispatchEvent(o)},t.Utils.IgnoreUtilFocusChanges=!1,t.Utils.dialogOpenClass="forminator-authentication-enabled",t.Utils.focusFirstDescendant=function(o){for(var e=0;e<o.childNodes.length;e++){var i=o.childNodes[e];if(t.Utils.attemptFocus(i)||t.Utils.focusFirstDescendant(i))return!0}return!1},t.Utils.focusLastDescendant=function(o){for(var e=o.childNodes.length-1;0<=e;e--){var i=o.childNodes[e];if(t.Utils.attemptFocus(i)||t.Utils.focusLastDescendant(i))return!0}return!1},t.Utils.attemptFocus=function(o){if(!t.Utils.isFocusable(o))return!1;t.Utils.IgnoreUtilFocusChanges=!0;try{o.focus()}catch(t){}return t.Utils.IgnoreUtilFocusChanges=!1,document.activeElement===o},t.OpenDialogList=t.OpenDialogList||new Array(0),t.getCurrentDialog=function(){if(t.OpenDialogList&&t.OpenDialogList.length)return t.OpenDialogList[t.OpenDialogList.length-1]},t.closeCurrentDialog=function(){var o=t.getCurrentDialog();return!!o&&(o.close(),!0)},t.handleEscape=function(o){(o.which||o.keyCode)===t.Utils.ESC&&t.closeCurrentDialog()&&o.stopPropagation()},document.addEventListener("keyup",t.handleEscape),t.Authentication=function(o,e,i){if(this.dialogNode=document.getElementById(o),null===this.dialogNode)throw new Error('No element found with id="'+o+'".');var r=["dialog","alertdialog"];if(!(this.dialogNode.getAttribute("role")||"").trim().split(/\s+/g).some((function(t){return r.some((function(o){return t===o}))})))throw new Error("Dialog() requires a DOM element with ARIA role of dialog or alertdialog.");var n="forminator-authentication";if(this.dialogNode.parentNode.classList.contains(n)?this.backdropNode=this.dialogNode.parentNode:(this.backdropNode=document.createElement("div"),this.backdropNode.className=n,this.backdropNode.data("markup","new"),this.dialogNode.parentNode.insertBefore(this.backdropNode,this.dialogNodev),this.backdropNode.appendChild(this.dialogNode)),this.backdropNode.classList.add("forminator-active"),document.body.parentNode.classList.add(t.Utils.dialogOpenClass),"string"==typeof e)this.focusAfterClosed=document.getElementById(e);else{if("object"!==_typeof(e))throw new Error("the focusAfterClosed parameter is required for the aria.Authentication constructor.");this.focusAfterClosed=e}"string"==typeof i?this.focusFirst=document.getElementById(i):"object"===_typeof(i)?this.focusFirst=i:this.focusFirst=null;var a=document.createElement("div");this.preNode=this.dialogNode.parentNode.insertBefore(a,this.dialogNode),this.preNode.tabIndex=0;var s=document.createElement("div");this.postNode=this.dialogNode.parentNode.insertBefore(s,this.dialogNode.nextSibling),this.postNode.tabIndex=0,0<t.OpenDialogList.length&&t.getCurrentDialog().removeListeners(),this.addListeners(),t.OpenDialogList.push(this),this.dialogNode.classList.add("forminator-authentication-fade-in"),this.dialogNode.classList.remove("forminator-authentication-fade-out"),this.focusFirst?this.focusFirst.focus():t.Utils.focusFirstDescendant(this.dialogNode),this.lastFocus=document.activeElement},t.Authentication.prototype.close=function(){var o=this;t.OpenDialogList.pop(),this.removeListeners(),this.preNode.parentNode.removeChild(this.preNode),this.postNode.parentNode.removeChild(this.postNode),this.dialogNode.classList.add("forminator-content-fade-out"),this.dialogNode.classList.remove("forminator-content-fade-in"),this.focusAfterClosed.focus(),setTimeout((function(){o.backdropNode.classList.remove("forminator-active")}),300),0<t.OpenDialogList.length?t.getCurrentDialog().addListeners():document.body.parentNode.classList.remove(t.Utils.dialogOpenClass)},t.Authentication.prototype.addListeners=function(){document.addEventListener("focus",this.trapFocus,!0)},t.Authentication.prototype.removeListeners=function(){document.removeEventListener("focus",this.trapFocus,!0)},t.Authentication.prototype.trapFocus=function(o){if(!t.Utils.IgnoreUtilFocusChanges){var e=t.getCurrentDialog();e.dialogNode.contains(o.target)?e.lastFocus=o.target:(t.Utils.focusFirstDescendant(e.dialogNode),e.lastFocus==document.activeElement&&t.Utils.focusLastDescendant(e.dialogNode),e.lastFocus=document.activeElement)}},FUI.openAuthentication=function(o,e,i){new t.Authentication(o,e,i)},FUI.closeAuthentication=function(){t.getCurrentDialog().close()}}(),function(t){"use strict";"object"!==_typeof(window.FUI)&&(window.FUI={}),FUI.pollChart=function(o,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"horizontalBar",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",n=t(o);if("bar"===i&&(i="horizontalBar"),void 0!==e&&0!==e.length)return function(){var o,s=[],l=[],d=[],f=_createForOfIteratorHelper(e);try{for(f.s();!(o=f.n()).done;){var c=o.value;"pie"===i?s.push(c[0]):s.push(a(c[0],20)),l.push(c[1]),d.push(c[2])}}catch(t){f.e(t)}finally{f.f()}var u={votesLabel:"vote(s)",votesOnPoll:!1,basicColors:["#E5E5E5","#777771","#333333"],tooltipsBasic:["#333333","#FFFFFF"]};""===r&&(r=[u.votesLabel,u.votesOnPoll,u.basicColors,u.tooltipsBasic]);var m={labels:s,datasets:[{data:l,backgroundColor:d,borderWidth:0}]},h={legend:{display:!1},tooltips:{callbacks:{title:function(t,o){var e="";return"pie"!==i&&(e=t[0].yLabel),e},label:function(t,o){var e=o.datasets[t.datasetIndex].label||"";return"pie"===i?(e=o.labels[t.index],!0===r[1]&&(e+=": "+o.datasets[0].data[t.index])):!0===r[1]&&(e+=Math.round(100*t.xLabel)/100),!0===r[1]&&(e+=" "+r[0]),e}},backgroundColor:r[3][0],titleFontColor:r[3][1],titleFontFamily:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",titleFontSize:13,titleFontStyle:"bold",titleMarginBottom:10,bodyFontColor:r[3][1],bodyFontFamily:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",bodyFontSize:12,bodyFontStyle:"normal"},scales:{xAxes:[{display:"pie"!==i,ticks:{fontColor:r[2][1],beginAtZero:!0},gridLines:{color:r[2][0]}}],yAxes:[{display:"pie"!==i,ticks:{fontColor:r[2][1],beginAtZero:!0},gridLines:{color:r[2][0]}}]},plugins:{datalabels:{display:"pie"!==i&&r[1],align:"end",anchor:"start",textAlign:"center",color:r[2][2],formatter:function(t){return t+" "+r[0]}}}};n.each((function(){n=t(this),new Chart(n,{type:i,data:m,plugins:[ChartDataLabels],options:h}),"pie"===i&&(n.wrap('<div class="forminator-chart-wrapper" aria-hidden="true" />'),n.parent().prepend('<ul class="forminator-chart-legend"></ul>'),e.forEach((function(t){!0===r[1]?n.parent().find(".forminator-chart-legend").append('<li><span class="forminator-chart-legend--color" style="background-color: '+t[2]+'" aria-hidden="true"></span><strong>'+t[0]+":</strong> "+t[1]+" "+r[0]+"</li>"):n.parent().find(".forminator-chart-legend").append('<li><span class="forminator-chart-legend--color" style="background-color: '+t[2]+'" aria-hidden="true"></span><strong>'+t[0]+"</strong></li>")})))}))}(),this;function a(t,o){var e=[],i=t.split(" "),r="";return i.forEach((function(t,n){if(0<r.length){var a=r+" "+t;if(!(a.length>o))return n==i.length-1?void e.push(a):void(r=a);e.push(r),r=""}n!=i.length-1&&t.length<o?r=t:e.push(t)})),e}}}(jQuery),function(t){"use strict";"object"!==_typeof(window.FUI)&&(window.FUI={}),FUI.formSubmit=function(o){var e=t(o),i=e.closest(".forminator-custom-form");if(e.is(".forminator-button-submit")&&i[0]&&i.length)return e.addClass("forminator-button-onload"),setTimeout((function(){e.removeClass("forminator-button-onload")}),1e3),this}}(jQuery);