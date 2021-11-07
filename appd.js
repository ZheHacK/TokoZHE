'use strict';
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(jwplayer) {
 return typeof jwplayer;
} : function(obj) {
 return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};
var _0x105441 = _0x454a;
(function(groupingFunction, data) {
 var toMonths = _0x454a;
 var data = groupingFunction();
 for (; !![];) {
   try {
     var lastScriptData = -parseInt(toMonths(305)) / 1 + -parseInt(toMonths(311)) / 2 + -parseInt(toMonths(443)) / 3 + -parseInt(toMonths(499)) / 4 + parseInt(toMonths(845)) / 5 * (parseInt(toMonths(663)) / 6) + parseInt(toMonths(854)) / 7 * (-parseInt(toMonths(424)) / 8) + -parseInt(toMonths(319)) / 9 * (-parseInt(toMonths(730)) / 10);
     if (lastScriptData === data) {
       break;
     } else {
       data["push"](data["shift"]());
     }
   } catch (_0x14eb3f) {
     data["push"](data["shift"]());
   }
 }
})(_0x78ef, 921004);
var xv = "";
var freeze = ![];
var ws;
var loading;
var perLoad;
var controller;
var scene;
var lastIndex;
var dom;
var mvReq;
var tvReq;
var imgReq;
var sources = [];
var subtitles = [];
var currentIdx;
var ignoreIdx;
var srcIdx;
var epArr;
var epi = "-1";
var epiTitle = "";
var noDrive = ![];
var havesend = ![];
var bckupIdx = "";
var actEpi;
var jw;
var hs;
var mvid;
var prov;
var ar;
var table;
var currentKuki;
var mrload = ![];
var uSwitch = ![];
var srvList = ![];
var totalQuals;
var qualIdx;
var totalTry;
var maxTry;
var chgRes;
var nextTry = ![];
var extType = [_0x105441(723), _0x105441(666), "drives"];
var noFrameType = ["drives_muvi", _0x105441(666), "drives", _0x105441(476), _0x105441(415), _0x105441(634), "facebook"];
var bannedType = ["lemon", _0x105441(440)];
var playTimeInterval;
var allowSeek = !![];
var asp = ![];
var doingTask = ![];
var subreplace = [{
 "text" : _0x105441(931),
 "replace" : "tribunnew.site"
}, {
 "text" : _0x105441(446),
 "replace" : _0x105441(350)
}];
var assetdom = "";
var devserial;
var analIntv;
var btout;
var banners;
var bannersLink;
var banner = "";
var bannerLink = "";
var bannerShowed = ![];
var tsdiv = 5;
document["addEventListener"]("backbutton", function() {
 if (!freeze) {
   removePage();
 }
}, ![]), document[_0x105441(405)](_0x105441(568), function() {
 var titletemplate = _0x105441;
 $(titletemplate(943))["append"](titletemplate(750));
 if (!localStorage[titletemplate(345)]) {
   localStorage[titletemplate(345)] = uniqid();
 }
 window[titletemplate(788)][titletemplate(353)][titletemplate(375)]();
 cordova[titletemplate(932)]["getPackageName"]()[titletemplate(489)](function($) {
   var createProxy = titletemplate;
   if ($[createProxy(807)](createProxy(718)) > -1) {
     $[createProxy(734)](createProxy(497));
     return;
   }
   cordova["getAppVersion"][createProxy(936)]()["then"](function(canCreateDiscussions) {
     var templates = createProxy;
     xv = canCreateDiscussions;
     var template = templates(759);
     $(templates(464))["text"](template);
     appCheck(xv);
   });
   document[createProxy(405)](createProxy(495), function() {
     var titletemplate = createProxy;
     if (!doingTask) {
       httpGetVidplay();
     }
     appCheck(xv, 1);
     if ($(titletemplate(955))[titletemplate(528)] == 1) {
       getRecommends();
     }
   }, ![]);
 });
}, ![]);
function initLocals() {
 var get = _0x105441;
 if (!localStorage[get(799)]) {
   localStorage[get(799)] = JSON[get(462)]({
     "type" : [],
     "sort" : get(403),
     "sub" : [],
     "genre" : [],
     "country" : [],
     "year" : []
   });
 }
 if (!localStorage[get(360)]) {
   localStorage["failreq"] = 0;
 }
}
function appCheck(x, isFirst) {
 var getScriptId = _0x105441;
 if (x) {
   localStorage[getScriptId(731)] = x;
   cordovaHTTP[getScriptId(624)](!![], function() {
     var time = getScriptId;
     cordovaHTTP[time(953)](time(694), {}, {}, function(rangeMessage) {
       var _t = time;
       var message = rangeMessage[_t(888)];
       message = JSON[_t(698)](message);
       var value = message[_t(960)];
       var mobY = message[_t(548)];
       var id = message[_t(381)];
       assetdom = message[_t(825)];
       dom = assetdom;
       mvReq = message[_t(420)];
       tvReq = message[_t(346)];
       imgReq = message[_t(658)];
       if (!isFirst) {
         $("<script/>", {
           "type" : _t(306),
           "src" : _t(757) + assetdom + _t(394)
         })[_t(412)](_t(943));
         var _0x522a23 = 0;
         var chat_retry = setInterval(function() {
           var t = _t;
           if (_0x522a23 > 60) {
             clearInterval(chat_retry);
             $[t(734)](t(641));
           }
           if ((typeof jwplayer === "undefined" ? "undefined" : _typeof(jwplayer)) !== t(500)) {
             clearInterval(chat_retry);
             $(t(878), {
               "type" : t(306),
               "text" : t(890)
             })["appendTo"](t(943));
           } else {
             _0x522a23++;
           }
         }, 250);
         httpGetVidplay();
       }
       banners = [imgReq + _t(893), imgReq + _t(893), imgReq + _t(595), imgReq + "/images/hey88/1000x100.gif", imgReq + "/images/idxbet/1000x100-xb.gif", imgReq + _t(693), imgReq + _t(365), imgReq + "/images/gg777/gif-965x85.gif", imgReq + _t(893), imgReq + _t(893), imgReq + _t(595), imgReq + _t(595)];
       bannersLink = [_t(909), _t(909), _t(626), _t(626), _t(390), _t(386), _t(377), _t(909), _t(909), "https://www.tribunnew.site", "https://www.tribunnew.site"];
       switch(mobY) {
         case "1":
           if (value > parseInt(xv[_t(354)](".")["join"](""))) {
             if (!localStorage["check"] || localStorage[_t(596)] == 0) {
               var status = message["img1"];
               $(_t(704))[_t(327)]();
               $[_t(866)]('<div><img src="' + status + _t(962) + _t(612), function(canCreateDiscussions) {
                 var return_data = _t;
                 if (canCreateDiscussions) {
                   if (_typeof(cordova[return_data(393)]) == "object") {
                     cordova["InAppBrowser"][return_data(671)](id, return_data(338), return_data(710));
                   } else {
                     window["open"](id, return_data(620));
                   }
                 }
               });
               localStorage[_t(596)] = 10;
             } else {
               localStorage[_t(596)]--;
             }
           }
           break;
         case "2":
           if (value > parseInt(xv[_t(354)](".")[_t(667)](""))) {
             status = message[_t(708)];
             $(_t(704))[_t(327)]();
             $["alert"]('<div><img src="' + status + _t(962) + "Aplikasi Telah Diperbarui, Install Aplikasi Versi Terbaru Sebelum Melanjutkan!", function() {
               var d3_vendorSymbol = _t;
               if (_typeof(cordova[d3_vendorSymbol(393)]) == d3_vendorSymbol(653)) {
                 cordova[d3_vendorSymbol(393)][d3_vendorSymbol(671)](id, d3_vendorSymbol(338), d3_vendorSymbol(710));
               } else {
                 window[d3_vendorSymbol(671)](id, d3_vendorSymbol(620));
               }
             });
             localStorage[_t(545)]("check");
           }
           break;
         case "3":
           status = message[_t(879)];
           $(_t(704))["remove"]();
           $[_t(734)](_t(550) + status + '" height="100px" width="auto"/></div> ' + "Aplikasi Sedang Maintenance, Harap Coba Lagi Nanti.", function() {
             var return_data = _t;
             navigator[return_data(520)][return_data(520)](function() {
               var formatLogHeader = return_data;
               console["log"](formatLogHeader(858));
             }, function() {
               var getConsoleMethod = return_data;
               console[getConsoleMethod(914)]("Error launching home intent");
             });
           });
           localStorage[_t(545)]("check");
           break;
       }
       if (message["msg"] && !$(".alert_overlay")[_t(528)]) {
         if (!localStorage["msg"] || localStorage[_t(510)] == 0) {
           status = message[_t(847)];
           $[_t(734)](_t(550) + status + '" height="100px" width="auto"/></div> ' + message[_t(510)], function() {
             var getScriptId = _t;
             localStorage[getScriptId(510)] = 10;
           });
         } else {
           localStorage[_t(510)]--;
         }
       }
       if (!isFirst) {
         var userAgent = navigator["userAgent"];
         var indexLookupKey = Math[_t(336)](Math[_t(656)]() * 2);
         userAgent = userAgent[_t(354)](")");
         userAgent[indexLookupKey] = userAgent[indexLookupKey] + ";";
         userAgent = userAgent[_t(667)](")");
         $[_t(944)]({
           "beforeSend" : function tokenSimpleStrategy(primaryReplicas) {
             var stringify = _t;
             primaryReplicas[stringify(487)](stringify(512), !![]);
           }
         });
         cordovaHTTP[_t(314)](_t(320), _t(861));
         cordovaHTTP[_t(314)](_t(468), userAgent);
         $(_t(943))[_t(371)](_t(357) + assetdom + '/analytic.php" style="display:none"></iframe>');
         initLocals();
         $[_t(831)](_t(757) + assetdom + _t(760) + (new Date)["getTime"]())[_t(900)](function() {
           var titletemplate = _t;
           var artistTrack = $(titletemplate(943))[titletemplate(863)](titletemplate(486));
           cordovaHTTP["setHeader"]("x-request-key", artistTrack);
           createPage(titletemplate(520));
         });
       }
     }, function() {
       var _t = time;
       alert(_t(779));
     });
   });
 }
}
document[_0x105441(405)](_0x105441(948), exitHandler, ![]), document[_0x105441(405)](_0x105441(684), exitHandler, ![]), document["addEventListener"](_0x105441(417), exitHandler, ![]), document[_0x105441(405)]("MSFullscreenChange", exitHandler, ![]);
function exitHandler(event) {
 var isFunction = _0x105441;
 var _0x3ca62f = /(TV|HbbTV|SmartTV)/i["test"](navigator["userAgent"]);
 if (isFullScreen()) {
   if (!_0x3ca62f) {
     screen[isFunction(617)][isFunction(846)](isFunction(584));
   }
   setTimeout(function() {
     var titletemplate = isFunction;
     $(titletemplate(719))[titletemplate(863)]("style", "height:auto !important;max-height:99% !important;");
     $(titletemplate(549))[titletemplate(863)](titletemplate(747), titletemplate(448) + $("video")[titletemplate(322)]() + titletemplate(945));
     $(titletemplate(535))[titletemplate(863)](titletemplate(747), titletemplate(781) + $("video")["height"]() + "px;");
   }, 500);
 } else {
   if (!_0x3ca62f) {
     screen[isFunction(617)][isFunction(789)]();
   }
   setTimeout(function() {
     var titletemplate = isFunction;
     $(titletemplate(496))["removeAttr"](titletemplate(747));
     $(titletemplate(535))[titletemplate(322)]($("#vid")["height"]());
   }, 500);
 }
}
function isFullScreen() {
 var prefixed = _0x105441;
 var _0x4c1677 = document[prefixed(844)] && document[prefixed(844)] !== null || document[prefixed(827)] && document["webkitFullscreenElement"] !== null || document[prefixed(299)] && document["mozFullScreenElement"] !== null || document[prefixed(910)] && document[prefixed(910)] !== null;
 return _0x4c1677 == !![];
}
function createPage(name, result) {
 var def = _0x105441;
 loadContainer(1);
 $[def(953)](name + ".html?q=" + (new Date)["getTime"](), function(canCreateDiscussions) {
   var getType = def;
   if ($(getType(762))[getType(528)]) {
     $(getType(762))[getType(327)]();
   }
   $(getType(943))[getType(553)](getType(577) + name + '">' + getType(432) + canCreateDiscussions + "</div>");
   $(getType(434))["remove"]();
   $(getType(955))[getType(371)](getType(928));
   $(".back")[getType(790)]()[getType(587)](function() {
     if (!freeze) {
       removePage();
     }
   });
   switch(name) {
     case getType(520):
       $(getType(521))["each"](function() {
         var childCount = getType;
         $(this)[childCount(587)](function() {
           var dv = childCount;
           var seafood = $(this)[dv(692)]()["trim"]()["toLowerCase"]();
           createPage(dv(544), {
             "category" : seafood
           });
         });
       });
       var spaceReplacer = messUp();
       var start = calcTime("+7");
       var i = start[getType(355)]();
       i = i % tsdiv;
       var min_age = start[getType(784)]() * 1E3;
       var d = new Date(start - 6E4 * i - min_age);
       var GROUP_UPDATE_INFO_URL = Math[getType(336)](d[getType(401)]() / 1E3);
       cordovaHTTP[getType(624)](!![], function() {
         var gotoNewOfflinePage = getType;
         cordovaHTTP[gotoNewOfflinePage(953)](gotoNewOfflinePage(865) + assetdom + gotoNewOfflinePage(824) + uniqid()[gotoNewOfflinePage(475)](-8, 10) + gotoNewOfflinePage(578) + spaceReplacer + "&_u=" + GROUP_UPDATE_INFO_URL, {}, {}, function(annotationsData) {
           var getAttr = gotoNewOfflinePage;
           var data = annotationsData[getAttr(888)];
           data = JSON[getAttr(698)](data);
           $(getAttr(738))["text"]("");
           var img;
           var expr;
           var value;
           var i = 0;
           for (; i < data[getAttr(528)]; i++) {
             img = "";
             expr = "";
             value = "";
             if (data[i][getAttr(906)] != "0") {
               img = img + (getAttr(599) + assetdom + getAttr(907));
             }
             if (data[i]["subid_count"] != "0") {
               img = img + (getAttr(599) + assetdom + getAttr(368));
             }
             if (data[i]["type"] == "1" || data[i][getAttr(334)] == "44" || data[i][getAttr(334)] == "54") {
               switch(data[i][getAttr(397)][getAttr(896)]()) {
                 case getAttr(947):
                   value = getAttr(942);
                   break;
                 case getAttr(592):
                   data[i][getAttr(397)] = getAttr(465);
                   value = ' style="background:rgba(0, 155, 171, 0.68);"';
                   break;
                 case getAttr(922):
                   value = getAttr(716);
                   break;
                 case "sd":
                   value = getAttr(471);
                   break;
                 case "hd":
                   if (data[i]["blu"] == "3") {
                     data[i][getAttr(397)] = "4K";
                     value = getAttr(583);
                   } else {
                     if (data[i]["hd_level"] == 0) {
                       value = getAttr(348);
                     } else {
                       if (data[i]["hd_level"] == 1) {
                         value = getAttr(769);
                       } else {
                         value = getAttr(780);
                       }
                     }
                     if (data[i][getAttr(469)] == "1") {
                       data[i][getAttr(397)] = getAttr(934);
                       if (data[i]["hd_level"] == 2) {
                         data[i]["quality"] = "BLU";
                       }
                     }
                   }
                   break;
               }
             } else {
               expr = getAttr(929);
               data[i][getAttr(397)] = getAttr(855) + data[i][getAttr(479)];
             }
             $(getAttr(738))[getAttr(553)](getAttr(795) + data[i]["poster"] + getAttr(564) + getAttr(561) + getAttr(715) + getAttr(557) + getAttr(841) + data[i][getAttr(774)] + getAttr(877) + data[i][getAttr(334)] + '">' + getAttr(803) + '<div class="movie-ratdur">' + '<i class="fa fa-star"></i> ' + data[i][getAttr(563)] + getAttr(814) + getAttr(509) + data[i][getAttr(633)] + "m" + getAttr(477) + getAttr(570) + expr + '"' + value + ">" + data[i][getAttr(397)] + getAttr(477) + getAttr(579) + img +
             getAttr(477) + '<div class="movie-title">' + data[i][getAttr(792)] + " (" + data[i][getAttr(403)] + ")" + "</div>" + getAttr(477) + getAttr(477));
           }
           $(getAttr(738))[getAttr(553)](getAttr(407));
           $(getAttr(541))[getAttr(312)](getAttr(657), "url('" + imgReq + getAttr(727));
           $(getAttr(842))[getAttr(587)](function() {
             var gotoNewOfflinePage = getAttr;
             var res = {
               "url" : $(this)[gotoNewOfflinePage(863)]("data-url"),
               "type" : $(this)[gotoNewOfflinePage(863)](gotoNewOfflinePage(425))
             };
             createPage(gotoNewOfflinePage(385), res);
           });
           $(getAttr(516))[getAttr(863)]("maxlength", "25");
           $(getAttr(516))[getAttr(655)](function(result) {
             var get = getAttr;
             var query = $(this)[get(573)]()[get(908)]();
             if (result["which"] == 13) {
               $(get(516))[get(638)]();
               createPage("movies", {
                 "search" : query
               });
             } else {
               if (query[get(528)] > 25) {
                 query = query[get(601)](0, query[get(528)] - 1);
                 $(get(516))[get(638)]()[get(573)](query)[get(566)]();
               }
             }
           });
           $(getAttr(437))["click"](function() {
             var titletemplate = getAttr;
             var xm_search = $(titletemplate(516))[titletemplate(573)]()[titletemplate(908)]();
             $(titletemplate(516))[titletemplate(638)]();
             createPage(titletemplate(544), {
               "search" : xm_search
             });
           });
           $(getAttr(456))[getAttr(587)](function() {
             var getScriptId = getAttr;
             createPage(getScriptId(799), {
               "dt" : localStorage[getScriptId(799)]
             });
           });
           var val = getAttr(759);
           $(getAttr(464))[getAttr(692)](val);
           lazy();
           $(getAttr(391))[getAttr(402)](200);
           setTimeout(function() {
             var getConcrete = getAttr;
             $(getConcrete(391))[getConcrete(327)]();
             loadContainer(0);
             var _0x28d98b = /(TV|HbbTV|SmartTV)/i["test"](navigator[getConcrete(442)]);
             if (!_0x28d98b) {
               var base_c = [];
               var SPECIAL_PROP = 0;
               var _0x4cbd8a = Math[getConcrete(336)](Math["random"]() * 100) + 1;
               if (_0x4cbd8a / 2 < 20) {
                 SPECIAL_PROP = 1;
               }
               base_c = [];
               base_c["push"]({
                 "img" : getConcrete(674),
                 "link" : getConcrete(909)
               });
               base_c[getConcrete(853)]({
                 "img" : getConcrete(869),
                 "link" : getConcrete(729)
               });
               var _0x1ff963 = base_c[SPECIAL_PROP][getConcrete(917)];
               var dclr = base_c[SPECIAL_PROP]["link"];
               $[getConcrete(734)](getConcrete(485) + dclr + getConcrete(701) + _0x1ff963 + "' width='100%' alt='slot online' style='vertical-align:middle'/></a></div><div style='text-align:center;margin-top:15px'><a href='" + dclr + getConcrete(697));
             }
           }, 200);
         }, function() {
           var titletemplate = gotoNewOfflinePage;
           $(titletemplate(738))["html"](titletemplate(406) + "text-align: center;" + titletemplate(481) + titletemplate(618) + titletemplate(571) + titletemplate(441) + titletemplate(589) + titletemplate(453) + titletemplate(776) + titletemplate(333) + "</div>");
           $(titletemplate(391))["fadeOut"](200);
           setTimeout(function() {
             var gotoNewOfflinePage = titletemplate;
             $(".page-overlay")[gotoNewOfflinePage(327)]();
             loadContainer(0);
           }, 200);
         });
       });
       break;
     case "play":
       var type = getType(860);
       if (result[getType(334)] == "2" || result[getType(334)] == "45" || result[getType(334)] == "55") {
         type = "seri";
       }
       $(getType(913))["attr"](getType(425), type);
       $(getType(913))[getType(863)](getType(310), result[getType(774)]);
       start = calcTime("+7");
       i = start[getType(355)]();
       i = i % tsdiv;
       min_age = start[getType(784)]() * 1E3;
       d = new Date(start - 6E4 * i - min_age);
       GROUP_UPDATE_INFO_URL = Math[getType(336)](d[getType(401)]() / 1E3);
       $[getType(413)]({
         "url" : getType(865) + assetdom + getType(491) + GROUP_UPDATE_INFO_URL,
         "cache" : !![],
         "timeout" : 15E3,
         "type" : getType(926),
         "dataType" : getType(819),
         "data" : {
           "slug" : result[getType(774)],
           "type" : type,
           "key" : uniqid()["substring"](-8, 10)
         },
         "error" : function init(tmp) {
           var parseInt = getType;
           $(".page-overlay")["fadeOut"](200);
           setTimeout(function() {
             var renderTweet = _0x454a;
             $(renderTweet(391))[renderTweet(327)]();
             loadContainer(0);
             removePage();
           }, 200);
           if (tmp[parseInt(364)] == parseInt(300)) {
             $[parseInt(734)](parseInt(678));
           } else {
             if (localStorage[parseInt(360)] < 10) {
               $[parseInt(734)]("Terjadi Kesalahan, Harap Coba Lagi!");
               localStorage["failreq"]++;
             } else {
               $[parseInt(734)](parseInt(839));
               localStorage[parseInt(360)] = 0;
             }
           }
         },
         "success" : function render(obj) {
           var parseInt = getType;
           allowSeek = !![];
           noDrive = ![];
           var val = obj[parseInt(472)];
           if (!val) {
             val = obj[parseInt(899)];
           }
           $("#vid")[parseInt(312)]({
             "background" : "url('" + obj[parseInt(862)] + parseInt(702),
             "background-size" : parseInt(503)
           });
           $(parseInt(913))[parseInt(863)](parseInt(950), obj["tmdb"]);
           $(parseInt(685))[parseInt(692)](obj[parseInt(792)]);
           $("#player-year")[parseInt(692)](obj[parseInt(403)]);
           if (obj[parseInt(397)] == "HD") {
             if (obj[parseInt(469)] == "1") {
               obj[parseInt(397)] = parseInt(921);
               if (obj[parseInt(836)] == 2) {
                 obj[parseInt(397)] = parseInt(797);
               }
             } else {
               if (obj[parseInt(469)] == "3") {
                 obj[parseInt(397)] = parseInt(498);
               } else {
                 if (obj["hd_level"] == 2) {
                   obj[parseInt(397)] += parseInt(480);
                 }
               }
             }
             if (obj[parseInt(836)] == 0) {
               obj[parseInt(397)] += " (Low)";
             }
           }
           $(parseInt(904))[parseInt(410)](parseInt(367) + obj["imdb_rating"] + parseInt(504) + parseInt(509) + obj[parseInt(633)] + " Menit | " + obj[parseInt(397)] + " | " + obj[parseInt(889)]);
           $(parseInt(639))[parseInt(692)](obj[parseInt(539)]);
           $(parseInt(426))[parseInt(692)](obj[parseInt(593)]);
           $(parseInt(621))[parseInt(692)](obj["actor"]);
           $("#player-desc")[parseInt(553)](val);
           if (type == "movie") {
             $(parseInt(609))[parseInt(587)](function() {
               var fn = parseInt;
               playLoad();
               if (obj["quality"][fn(896)]() == fn(947)) {
                 if (obj[fn(366)]) {
                   var val = "";
                   if (obj[fn(366)]["indexOf"](fn(894)) > -1) {
                     val = obj[fn(366)][fn(354)]("v=")[1];
                   } else {
                     if (obj[fn(366)][fn(807)](fn(669)) > -1) {
                       val = obj[fn(366)]["split"]("/")[3];
                     } else {
                       if (obj[fn(366)][fn(807)]("http") == -1) {
                         val = obj[fn(366)];
                       }
                     }
                   }
                   if (val) {
                     var artistTrack = fn(572) + val + '" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>';
                     $(fn(535))[fn(410)](artistTrack);
                   } else {
                     cantPlay();
                   }
                 } else {
                   cantPlay();
                 }
               } else {
                 var autoResumeTimer = setTimeout(function() {
                   var createProxy = fn;
                   $[createProxy(734)](createProxy(678), function() {
                     autoResumeTimer = "";
                     removePage();
                   });
                 }, 3E4);
                 var _0x21ee3e = getChkSum(obj[fn(600)]);
                 var artistTrack = mvReq + fn(703) + obj[fn(382)] + fn(652) + _0x21ee3e + fn(581) + xv;
                 actEpi = 0;
                 cordovaHTTP["setHeader"](fn(690), "https://mob." + assetdom + "/movie/" + result[fn(774)] + fn(867));
                 cordovaHTTP[fn(314)](fn(502), fn(923) + assetdom);
                 cordovaHTTP[fn(624)](!![], function() {
                   var originalFn = fn;
                   cordovaHTTP[originalFn(953)](artistTrack, {}, {}, function(map) {
                     var parseInt = originalFn;
                     if (autoResumeTimer) {
                       clearTimeout(autoResumeTimer);
                       var data = map[parseInt(888)];
                       if (data == "[dmca]") {
                         data = "[null]";
                       }
                       if (data["indexOf"](parseInt(408)) == -1 && data["indexOf"](parseInt(551)) == -1 && data[parseInt(629)]("[]") == -1) {
                         data = rc4("m." + assetdom, data);
                       }
                       if (data["indexOf"](parseInt(706)) > -1) {
                         if (data["indexOf"](parseInt(551)) > -1 || data[parseInt(629)]("[]") == data[parseInt(528)] - 2) {
                           data = "[null]";
                         } else {
                           data = data["split"](parseInt(631));
                           data = data[data[parseInt(528)] - 1][parseInt(908)]();
                           data = data[parseInt(354)](parseInt(408));
                           data = parseInt(408) + data[data[parseInt(528)] - 1][parseInt(908)]();
                         }
                       }
                       beginPlay(JSON[parseInt(698)](data));
                     }
                   });
                 });
               }
             });
           } else {
             $(parseInt(609))["click"](function() {
               var i = parseInt;
               getEpList(obj[i(478)]);
             });
           }
           var _0x23dd2e = /(TV|HbbTV|SmartTV)/i[parseInt(733)](navigator[parseInt(442)]);
           if (!$(".prop-link")[parseInt(528)] && !_0x23dd2e) {
             $(parseInt(735))[parseInt(636)](parseInt(542));
             $(".prop-link")[parseInt(587)](function() {
               var i = parseInt;
               if (_typeof(cordova[i(393)]) == "object") {
               }
             });
           }
           $(parseInt(363))[parseInt(312)](parseInt(387), parseInt(661));
           $(parseInt(912))["css"](parseInt(387), "0");
           $(parseInt(303))[parseInt(587)](function() {
             getEpList(obj["epis"]);
           });
           epArr = obj[parseInt(478)];
           var lastChecksumFailCount = 0;
           $("#player")["off"](parseInt(850))["on"]("scroll", function() {
             var i = parseInt;
             var currentChecksumFailCount = $(this)[i(488)]();
             if (currentChecksumFailCount > lastChecksumFailCount) {
               $(".bottom-menu-content")[i(402)](100);
             } else {
               $(i(725))[i(533)](100);
             }
             lastChecksumFailCount = currentChecksumFailCount;
           });
           if (obj[parseInt(423)][parseInt(528)] > 0) {
             var nAttempts;
             var theTime1;
             var marginLeft;
             var i = 0;
             for (; i < obj["rel"][parseInt(528)]; i++) {
               marginLeft = "";
               nAttempts = "";
               theTime1 = "";
               if (obj[parseInt(423)][i][parseInt(906)] != "0") {
                 marginLeft = marginLeft + ('<img src="https://img.' + assetdom + '/images/US.png"/>');
               }
               if (obj[parseInt(423)][i][parseInt(742)] != "0") {
                 marginLeft = marginLeft + ('<img src="https://img.' + assetdom + parseInt(368));
               }
               if (obj["rel"][i]["type"] == "1" || obj[parseInt(423)][i][parseInt(334)] == "44" || obj[parseInt(423)][i][parseInt(334)] == "54") {
                 switch(obj[parseInt(423)][i][parseInt(397)]["toLowerCase"]()) {
                   case parseInt(947):
                     theTime1 = parseInt(942);
                     break;
                   case parseInt(592):
                     obj[parseInt(423)][i][parseInt(397)] = parseInt(465);
                     theTime1 = parseInt(628);
                     break;
                   case parseInt(922):
                     theTime1 = parseInt(716);
                     break;
                   case "sd":
                     theTime1 = parseInt(471);
                     break;
                   case "hd":
                     if (obj[parseInt(423)][i][parseInt(469)] == "3") {
                       obj[parseInt(423)][i]["quality"] = "4K";
                       theTime1 = parseInt(583);
                     } else {
                       if (obj[parseInt(423)][i][parseInt(836)] == 0) {
                         theTime1 = parseInt(348);
                       } else {
                         if (obj[parseInt(423)][i][parseInt(836)] == 1) {
                           theTime1 = parseInt(769);
                         } else {
                           theTime1 = parseInt(780);
                         }
                       }
                       if (obj["rel"][i][parseInt(469)] == "1") {
                         obj[parseInt(423)][i][parseInt(397)] = parseInt(934);
                         if (obj[parseInt(423)][i][parseInt(836)] == 2) {
                           obj["rel"][i][parseInt(397)] = parseInt(356);
                         }
                       }
                     }
                     break;
                 }
               } else {
                 nAttempts = parseInt(929);
                 obj[parseInt(423)][i]["quality"] = parseInt(855) + obj[parseInt(423)][i][parseInt(479)];
               }
               $(parseInt(675))[parseInt(553)](parseInt(930) + obj[parseInt(423)][i][parseInt(335)] + parseInt(564) + "background-position:center center;" + "background-repeat:no-repeat;" + parseInt(557) + '" data-url="' + obj[parseInt(423)][i][parseInt(774)] + parseInt(877) + obj[parseInt(423)][i][parseInt(334)] + '">' + parseInt(803) + parseInt(764) + parseInt(367) + obj["rel"][i][parseInt(563)] + parseInt(814) + '<i class="fa fa-clock-o"></i> ' + obj[parseInt(423)][i]["duration"] + "m" + parseInt(477) +
               '<div class="movie-quality ' + nAttempts + '"' + theTime1 + ">" + obj[parseInt(423)][i][parseInt(397)] + parseInt(477) + parseInt(579) + marginLeft + parseInt(477) + '<div class="movie-title" style="white-space:normal;">' + obj["rel"][i]["title"] + " (" + obj[parseInt(423)][i][parseInt(403)] + ")" + parseInt(477) + parseInt(477) + parseInt(477));
             }
             $(".movie-title")[parseInt(312)](parseInt(657), parseInt(527) + imgReq + "/images/mask-title.png') center top repeat-x");
             $("#player-rel-list .rel-movie")["click"](function() {
               var i = parseInt;
               removePage();
               var res = {
                 "url" : $(this)[i(863)](i(753)),
                 "type" : $(this)[i(863)](i(425))
               };
               setTimeout(function() {
                 var newTag = i;
                 createPage(newTag(385), res);
               }, 300);
             });
             $(parseInt(787))[parseInt(369)]();
             lazy();
           }
           $(parseInt(391))[parseInt(402)](200);
           setTimeout(function() {
             var i = parseInt;
             $(i(391))["remove"]();
             loadContainer(0);
           }, 200);
           if (analIntv) {
             clearInterval(analIntv);
           }
           analIntv = setInterval(function() {
             var __ = parseInt;
             if (jw && jw["getState"]() == __(347)) {
               document[__(452)](__(518))[__(840)][__(508)]({
                 "msg" : __(373),
                 "name" : __(895),
                 "category" : type[__(418)](),
                 "label" : obj["title"]
               }, "*");
             }
           }, 6E4 * 5);
         }
       });
       break;
     case getType(544):
       var params = result[getType(325)] ? result[getType(325)] : "";
       var catName = result["category"] ? result[getType(388)] : "";
       var data = result[getType(799)] ? result["filter"] : "";
       var opt_by = result[getType(754)] ? result[getType(754)] : "";
       spaceReplacer = messUp();
       start = calcTime("+7");
       i = start[getType(355)]();
       i = i % tsdiv;
       min_age = start[getType(784)]() * 1E3;
       d = new Date(start - 6E4 * i - min_age);
       GROUP_UPDATE_INFO_URL = Math[getType(336)](d["getTime"]() / 1E3);
       $[getType(831)](getType(757) + assetdom + getType(760) + (new Date)[getType(401)]())[getType(900)](function() {
         var titletemplate = getType;
         var artistTrack = $(titletemplate(943))[titletemplate(863)](titletemplate(486));
         cordovaHTTP[titletemplate(314)]("x-request-key", artistTrack);
         cordovaHTTP[titletemplate(624)](!![], function() {
           var stringDivider = titletemplate;
           cordovaHTTP[stringDivider(953)](stringDivider(865) + assetdom + "/api/movies.php?key=9xs8SXSm8fds0DSXms8dDSCds9afdmG&t=" + spaceReplacer + stringDivider(918) + GROUP_UPDATE_INFO_URL, {
             "search" : params,
             "category" : catName,
             "filter" : data,
             "xcountry" : result[stringDivider(754)],
             "limit" : 0,
             "key" : uniqid()[stringDivider(475)](-5, 10)
           }, {}, function($stateParams) {
             var String = stringDivider;
             var data = $stateParams["data"];
             data = JSON["parse"](data);
             if (catName) {
               $(String(767))[String(410)]("<b>Category:</b> " + result[String(388)][String(418)]());
             } else {
               if (data) {
                 var output = "";
                 var i;
                 data = JSON[String(698)](data);
                 output = output + data[String(334)][String(667)](", ")[String(597)]("1", String(324))["replace"]("2", String(328));
                 if (data["genre"][String(528)] > 0) {
                   output = output + String(504);
                 }
                 output = output + data[String(539)][String(667)](", ")["ucwords"]();
                 if (data[String(889)][String(528)] > 0) {
                   output = output + String(504);
                 }
                 output = output + data[String(889)][String(667)](", ")["ucwords"]();
                 if (data["year"]["length"] > 0) {
                   output = output + String(504);
                 }
                 output = output + data[String(403)]["join"](", ")[String(418)]();
                 if (data[String(622)][String(528)] > 0) {
                   output = output + String(504);
                 }
                 output = output + data[String(622)][String(667)](",")[String(597)](String(374), "Sub Indo")[String(597)]("sub_en", String(301));
                 $(String(767))[String(410)](String(506) + output);
               } else {
                 $(String(767))["html"](String(506) + result[String(325)]);
                 if (result["search"][String(896)]() == String(466)) {
                   $(String(882) + String(529) + String(740) + String(883) + String(615) + '<option value="japan">Jepang</option>' + String(558) + String(447) + "</select>" + String(477))["insertAfter"]("#movies-title");
                   $(String(937))["val"](result[String(754)]);
                   setTimeout(function() {
                     var type = String;
                     $(type(937))["change"](function() {
                       var norm = type;
                       var _0x493b4c = $(this)[norm(573)]();
                       removePage();
                       setTimeout(function() {
                         var cleanKey = norm;
                         createPage(cleanKey(544), {
                           "search" : result["search"],
                           "category" : result[cleanKey(388)],
                           "xcountry" : _0x493b4c
                         });
                       }, 300);
                     });
                   }, 500);
                 }
               }
             }
             if (data[String(528)] > 0) {
               var id;
               var resizewidth;
               var suff;
               i = 0;
               for (; i < data[String(528)]; i++) {
                 id = "";
                 resizewidth = "";
                 suff = "";
                 if (data[i][String(906)] != "0") {
                   id = id + (String(599) + assetdom + '/images/US.png"/>');
                 }
                 if (data[i][String(742)] != "0") {
                   id = id + (String(599) + assetdom + String(368));
                 }
                 if (data[i][String(334)] == "1" || data[i]["type"] == "44" || data[i][String(334)] == "54") {
                   switch(data[i]["quality"][String(896)]()) {
                     case String(947):
                       suff = String(942);
                       break;
                     case String(592):
                       data[i][String(397)] = String(465);
                       suff = String(628);
                       break;
                     case String(922):
                       suff = String(716);
                       break;
                     case "sd":
                       suff = String(471);
                       break;
                     case "hd":
                       if (data[i][String(469)] == "3") {
                         data[i][String(397)] = "4K";
                         suff = String(583);
                       } else {
                         if (data[i][String(836)] == 0) {
                           suff = String(348);
                         } else {
                           if (data[i]["hd_level"] == 1) {
                             suff = String(769);
                           } else {
                             suff = String(780);
                           }
                         }
                         if (data[i]["blu"] == "1") {
                           data[i]["quality"] = String(934);
                           if (data[i][String(836)] == 2) {
                             data[i]["quality"] = String(356);
                           }
                         }
                       }
                       break;
                   }
                 } else {
                   resizewidth = "movie-eps";
                   data[i][String(397)] = "Eps<br/>" + data[i][String(479)];
                 }
                 $(String(588))[String(553)](String(795) + data[i][String(335)] + String(564) + String(451) + "background-repeat:no-repeat;" + String(557) + String(841) + data[i][String(774)] + String(877) + data[i]["type"] + '">' + String(803) + String(764) + String(367) + data[i][String(563)] + " &nbsp;" + String(509) + data[i][String(633)] + "m" + "</div>" + '<div class="movie-quality ' + resizewidth + '"' + suff + ">" + data[i][String(397)] + String(477) + String(579) + id + String(477) + '<div class="movie-title">' +
                 data[i][String(792)] + " (" + data[i][String(403)] + ")" + String(477) + String(477) + String(477));
               }
               $(String(588))[String(553)](String(552));
               $(String(541))[String(312)](String(657), String(527) + imgReq + String(727));
               $(String(517))[String(587)](function() {
                 var Str = String;
                 var res = {
                   "url" : $(this)["attr"](Str(753)),
                   "type" : $(this)["attr"]("data-type")
                 };
                 createPage(Str(385), res);
               });
               if ($("#movies-page-list .movie")[String(528)] == 24) {
                 $("#movies-loader")["show"]();
                 loading = ![];
                 perLoad = 24;
                 if (!controller) {
                   setTimeout(function() {
                     var Str = String;
                     controller = new (ScrollMagic[Str(741)]);
                     scene = (new (ScrollMagic[Str(864)])({
                       "triggerElement" : "#movies-loader",
                       "triggerHook" : Str(695)
                     }))[Str(717)](controller)["on"](Str(519), function(canCreateDiscussions) {
                       var titletemplate = Str;
                       lastIndex = $(titletemplate(517))[titletemplate(528)];
                       if (lastIndex < perLoad) {
                         $("#movies-loader")["hide"]();
                       } else {
                         if (!loading) {
                           loading = !![];
                           getMoreMovies(result);
                         }
                       }
                     });
                   }, 300);
                 }
               }
               lazy();
             } else {
               $(".movies-container .movies")["append"]('<div style="padding:10px;text-align:center;">Tidak Ada Hasil.</div>');
             }
             $(String(391))["fadeOut"](200);
             setTimeout(function() {
               var titletemplate = String;
               $(titletemplate(391))[titletemplate(327)]();
               loadContainer(0);
             }, 200);
           }, function() {
             var b = stringDivider;
             $(b(391))[b(402)](200);
             setTimeout(function() {
               var blockInfo = b;
               $(blockInfo(391))[blockInfo(327)]();
               loadContainer(0);
               removePage();
             }, 200);
             if (e["statusText"] == b(300)) {
               $["alert"](b(678));
             } else {
               if (localStorage[b(360)] < 10) {
                 $[b(734)](b(625));
                 localStorage["failreq"]++;
               } else {
                 $[b(734)](b(839));
                 localStorage["failreq"] = 0;
               }
             }
           });
         });
       });
       break;
     case "filter":
       data = JSON["parse"](localStorage["filter"]);
       $(getType(309))["each"](function() {
         var parseInt = getType;
         var nums = $(this);
         if (nums[parseInt(645)]("h4")["text"]() == parseInt(783)) {
           var scrollLeft = (new Date)["getFullYear"]();
           var firstColLeft = 2019;
           for (; firstColLeft <= scrollLeft; firstColLeft++) {
             $('<div class="filter"><input type="checkbox" value="' + firstColLeft + parseInt(537) + firstColLeft + parseInt(477))[parseInt(438)](nums["find"]("h4"));
           }
         }
       });
       $(getType(868))["each"](function() {
         var getKey = getType;
         var fakeImageUrl = $(this)[getKey(573)]();
         if (data["type"][getKey(807)](fakeImageUrl) > -1 || data[getKey(539)][getKey(807)](fakeImageUrl) > -1 || data[getKey(889)][getKey(807)](fakeImageUrl) > -1 || data[getKey(403)][getKey(807)](fakeImageUrl) > -1 || data["sub"][getKey(807)](fakeImageUrl) > -1 || data[getKey(460)] == fakeImageUrl) {
           $(this)[getKey(920)]("checked", !![]);
           $(this)[getKey(526)]()[getKey(804)]("active");
         }
       });
       $(getType(902))[getType(587)](function() {
         var unwrap = getType;
         var mirror = $(this)[unwrap(645)](unwrap(611));
         if (mirror["is"](unwrap(431)) && mirror[unwrap(863)]("type") == unwrap(707)) {
           $(this)[unwrap(362)]("active");
           mirror[unwrap(920)](unwrap(627), ![]);
         } else {
           if (mirror[unwrap(863)](unwrap(334)) == unwrap(802)) {
             $(unwrap(688))[unwrap(362)](unwrap(461));
           }
           $(this)[unwrap(804)](unwrap(461));
           mirror[unwrap(920)](unwrap(627), !![]);
         }
       });
       $(getType(359))[getType(587)](function() {
         var get = getType;
         data[get(334)] = [];
         $(".filter-type:checked")[get(532)](function() {
           var getRefreshTokenKey = get;
           data[getRefreshTokenKey(334)]["push"]($(this)[getRefreshTokenKey(573)]());
         });
         data[get(539)] = [];
         $(get(603))[get(532)](function() {
           var getRefreshTokenKey = get;
           data[getRefreshTokenKey(539)][getRefreshTokenKey(853)]($(this)[getRefreshTokenKey(573)]());
         });
         data["country"] = [];
         $(get(756))["each"](function() {
           var getRefreshTokenKey = get;
           data[getRefreshTokenKey(889)][getRefreshTokenKey(853)]($(this)[getRefreshTokenKey(573)]());
         });
         data[get(403)] = [];
         $(get(484))["each"](function() {
           var getRefreshTokenKey = get;
           data[getRefreshTokenKey(403)][getRefreshTokenKey(853)]($(this)[getRefreshTokenKey(573)]());
         });
         data[get(622)] = [];
         $(".filter-sub:checked")[get(532)](function() {
           var getRefreshTokenKey = get;
           data[getRefreshTokenKey(622)]["push"]($(this)[getRefreshTokenKey(573)]());
         });
         data[get(460)] = $(get(619))["val"]();
         localStorage[get(799)] = JSON[get(462)](data);
         createPage(get(544), {
           "filter" : localStorage[get(799)]
         });
       });
       $(".page-overlay")[getType(402)](200);
       setTimeout(function() {
         var titletemplate = getType;
         $(titletemplate(391))["remove"]();
         loadContainer(0);
       }, 200);
       break;
   }
 });
}
function getEpList(PL$53) {
 var span = _0x105441;
 var dolor = $(span(913))["attr"](span(310));
 $(span(383))[span(327)]();
 var output;
 var dprefix;
 var _0x1a131a;
 var _0xb19d41;
 var _0x2b2eab;
 var pix_color = "";
 var PL$54 = 0;
 for (; PL$54 < PL$53[span(528)]; PL$54++) {
   output = "";
   dprefix = PL$53[PL$54][span(792)][span(597)](/\\/g, "");
   _0x1a131a = PL$53[PL$54]["prov"];
   _0xb19d41 = PL$53[PL$54][span(342)];
   _0x2b2eab = PL$53[PL$54]["nno"];
   if (epi == PL$54) {
     output = "active";
   }
   pix_color = pix_color + (span(616) + output + span(318) + PL$54 + '" data-prov="' + _0x1a131a + span(450) + _0xb19d41 + span(700) + _0x2b2eab + '">' + dprefix + span(477));
 }
 $("#player")[span(371)](span(524) + span(646) + "padding-bottom:5px;" + span(682) + span(298) + span(404) + pix_color + span(477));
 $(span(522))[span(790)]()[span(587)](function(canCreateDiscussions) {
   var brMarkup = span;
   allowSeek = !![];
   uSwitch = ![];
   mrload = ![];
   srvList = ![];
   nextTry = ![];
   havesend = ![];
   bannerShowed = ![];
   $("#myvid, #infosv")[brMarkup(327)]();
   $("#server-list-title,#server-list-content")[brMarkup(402)]();
   if (playTimeInterval) {
     clearInterval(playTimeInterval);
   }
   epi = $(this)["attr"](brMarkup(582));
   epiTitle = $(this)[brMarkup(692)]();
   var Demo_ = $(this)["attr"](brMarkup(511));
   var ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMN = $(this)["attr"](brMarkup(886));
   if (ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMN["indexOf"]("0") === 0) {
     ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMN = ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMN[brMarkup(475)](1);
   }
   var ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUV = $(this)["attr"](brMarkup(623));
   playLoad();
   var magnifier = $(brMarkup(913))[brMarkup(863)]("data-tmdb");
   var $magnifier = getChkSum(magnifier);
   var symbol__3148 = tvReq + brMarkup(640) + Demo_ + brMarkup(925) + ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMN + brMarkup(720) + ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUV + brMarkup(652) + $magnifier + brMarkup(581) + xv + brMarkup(949) + (new Date)[brMarkup(401)]();
   actEpi = ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMN;
   cordovaHTTP[brMarkup(314)](brMarkup(690), brMarkup(923) + assetdom + brMarkup(370) + dolor + brMarkup(867));
   cordovaHTTP[brMarkup(314)](brMarkup(502), brMarkup(923) + assetdom);
   cordovaHTTP[brMarkup(624)](!![], function() {
     cordovaHTTP["get"](symbol__3148, {}, {}, function(dictionary) {
       var parseInt = _0x454a;
       var value = dictionary[parseInt(888)];
       if (value == parseInt(916)) {
         value = parseInt(551);
       }
       if (value[parseInt(807)](parseInt(408)) == -1 && value[parseInt(807)](parseInt(551)) == -1 && value[parseInt(629)]("[]") == -1) {
         value = rc4("m." + assetdom, value);
       }
       if (value[parseInt(807)](parseInt(706)) > -1) {
         if (value[parseInt(807)]("[null]") > -1 || value[parseInt(629)]("[]") == value[parseInt(528)] - 2) {
           value = parseInt(551);
         } else {
           value = value[parseInt(354)]("(adm)");
           value = value[value["length"] - 1][parseInt(908)]();
           value = value[parseInt(354)](parseInt(408));
           value = parseInt(408) + value[value["length"] - 1]["trim"]();
         }
       }
       beginPlay(JSON[parseInt(698)](value));
     });
   });
 });
 setTimeout(function() {
   var el = span;
   $(el(339))["on"](el(587), function() {
     var root = el;
     $(root(339))[root(637)](root(587));
     $(root(383))[root(327)]();
   });
 }, 500);
}
function getRecommends() {
 var now = _0x105441;
 $(now(817))[now(312)]({
   "background" : now(610),
   "border" : "0"
 })[now(433)](now(903))["text"](now(304));
 var _0x4c6223 = messUp();
 var start = calcTime("+7");
 var i = start[now(355)]();
 i = i % tsdiv;
 var min_age = start[now(784)]() * 1E3;
 var rpm_traffic = new Date(start - 6E4 * i - min_age);
 var _0x13023b = Math[now(336)](rpm_traffic[now(401)]() / 1E3);
 $[now(831)](now(757) + assetdom + now(760) + (new Date)[now(401)]())[now(900)](function() {
   var t = now;
   var artistTrack = $(t(943))[t(863)](t(486));
   cordovaHTTP[t(314)](t(400), artistTrack);
   cordovaHTTP["acceptAllCerts"](!![], function() {
     var path = t;
     cordovaHTTP[path(953)]("https://m." + assetdom + "/api/featured.php?key=" + uniqid()[path(475)](-8, 10) + path(578) + _0x4c6223 + "&_i=" + _0x13023b, {}, {}, function(annotationsData) {
       var getAttr = path;
       var data = annotationsData[getAttr(888)];
       data = JSON[getAttr(698)](data);
       $(getAttr(738))[getAttr(692)]("");
       var stdout_buffer;
       var expr;
       var value;
       var i = 0;
       for (; i < data[getAttr(528)]; i++) {
         stdout_buffer = "";
         expr = "";
         value = "";
         if (data[i]["suben_count"] != "0") {
           stdout_buffer = stdout_buffer + (getAttr(599) + assetdom + getAttr(907));
         }
         if (data[i]["subid_count"] != "0") {
           stdout_buffer = stdout_buffer + ('<img src="https://img.' + assetdom + getAttr(368));
         }
         if (data[i]["type"] == "1" || data[i][getAttr(334)] == "44" || data[i][getAttr(334)] == "54") {
           switch(data[i][getAttr(397)][getAttr(896)]()) {
             case getAttr(947):
               value = ' style="background:rgba(117,0,214,.8);"';
               break;
             case getAttr(592):
               data[i][getAttr(397)] = "CAM";
               value = getAttr(628);
               break;
             case getAttr(922):
               value = getAttr(716);
               break;
             case "sd":
               value = ' style="background:rgba(255, 57, 148, 0.8);"';
               break;
             case "hd":
               if (data[i]["blu"] == "3") {
                 data[i]["quality"] = "4K";
                 value = getAttr(583);
               } else {
                 if (data[i]["hd_level"] == 0) {
                   value = getAttr(348);
                 } else {
                   if (data[i][getAttr(836)] == 1) {
                     value = getAttr(769);
                   } else {
                     value = ' style="background:rgba(4,149,212,.8);"';
                   }
                 }
                 if (data[i][getAttr(469)] == "1") {
                   data[i][getAttr(397)] = getAttr(934);
                   if (data[i]["hd_level"] == 2) {
                     data[i]["quality"] = getAttr(356);
                   }
                 }
               }
               break;
           }
         } else {
           expr = getAttr(929);
           data[i]["quality"] = "Eps<br/>" + data[i]["Episodes"];
         }
         $(getAttr(738))[getAttr(553)](getAttr(795) + data[i][getAttr(335)] + '" style="' + getAttr(451) + "background-repeat:no-repeat;" + getAttr(557) + getAttr(841) + data[i][getAttr(774)] + getAttr(877) + data[i][getAttr(334)] + '">' + getAttr(803) + getAttr(764) + '<i class="fa fa-star"></i> ' + data[i]["imdb_rating"] + getAttr(814) + getAttr(509) + data[i][getAttr(633)] + "m" + getAttr(477) + getAttr(570) + expr + '"' + value + ">" + data[i]["quality"] + "</div>" + getAttr(579) + stdout_buffer +
         "</div>" + getAttr(857) + data[i][getAttr(792)] + " (" + data[i][getAttr(403)] + ")" + getAttr(477) + "</div>" + "</div>");
       }
       $("#home-page-list")[getAttr(553)](getAttr(407));
       $(getAttr(541))["css"](getAttr(657), getAttr(527) + imgReq + getAttr(727));
       $(getAttr(842))[getAttr(587)](function() {
         var gotoNewOfflinePage = getAttr;
         var res = {
           "url" : $(this)[gotoNewOfflinePage(863)]("data-url"),
           "type" : $(this)[gotoNewOfflinePage(863)](gotoNewOfflinePage(425))
         };
         createPage(gotoNewOfflinePage(385), res);
       });
       lazy();
     }, function() {
       var b = path;
       $(b(738))["html"](b(406) + "text-align: center;" + b(481) + b(618) + "display:inline-block;" + b(441) + "transform: translateX(5%);" + "-webkit-transform: translate(5%);" + b(776) + b(333) + b(477));
       if (localStorage[b(360)] < 10) {
         localStorage[b(360)]++;
       } else {
         $[b(734)](b(839));
         localStorage[b(360)] = 0;
       }
     });
   });
 });
}
function getMoreMovies(result) {
 var now = _0x105441;
 var fmtlen = messUp();
 var shadowYpos = calcTime("+7");
 var curZoom = shadowYpos["getMinutes"]();
 curZoom = curZoom % tsdiv;
 var min_age = shadowYpos[now(784)]() * 1E3;
 var d = new Date(shadowYpos - 6E4 * curZoom - min_age);
 var _0x21e4c1 = Math["floor"](d["getTime"]() / 1E3);
 $[now(831)]("https://cdn." + assetdom + "/add/?_=" + (new Date)[now(401)]())[now(900)](function() {
   var titletemplate = now;
   var artistTrack = $(titletemplate(943))[titletemplate(863)](titletemplate(486));
   cordovaHTTP["setHeader"](titletemplate(400), artistTrack);
   cordovaHTTP[titletemplate(624)](!![], function() {
     var String = titletemplate;
     cordovaHTTP[String(953)](String(865) + assetdom + "/api/movies.php?key=9xs8SXSm8fds0DSXms8dDSCds9afdmG&t=" + fmtlen + String(811) + _0x21e4c1, {
       "search" : result["search"],
       "category" : result[String(388)],
       "filter" : result["filter"],
       "xcountry" : result[String(754)],
       "limit" : lastIndex,
       "key" : uniqid()[String(475)](-5, 10)
     }, {}, function(annotationsData) {
       var getAttr = String;
       var data = annotationsData[getAttr(888)];
       data = JSON[getAttr(698)](data);
       if (data[getAttr(528)] > 0) {
         var img;
         var expr;
         var value;
         $(getAttr(898))[getAttr(327)]();
         var i = 0;
         for (; i < data["length"]; i++) {
           img = "";
           expr = "";
           value = "";
           if (data[i][getAttr(906)] != "0") {
             img = img + (getAttr(599) + assetdom + getAttr(907));
           }
           if (data[i][getAttr(742)] != "0") {
             img = img + (getAttr(599) + assetdom + getAttr(368));
           }
           if (data[i][getAttr(334)] == "1" || data[i]["type"] == "44" || data[i][getAttr(334)] == "54") {
             switch(data[i]["quality"]["toLowerCase"]()) {
               case "trailer":
                 value = getAttr(942);
                 break;
               case getAttr(922):
                 value = ' style="background:rgba(255,8,8,.8);"';
                 break;
               case "sd":
                 value = getAttr(471);
                 break;
               case "hd":
                 if (data[i][getAttr(469)] == "3") {
                   data[i][getAttr(397)] = "4K";
                   value = getAttr(583);
                 } else {
                   if (data[i]["hd_level"] == 0) {
                     value = getAttr(348);
                   } else {
                     if (data[i][getAttr(836)] == 1) {
                       value = getAttr(769);
                     } else {
                       value = getAttr(780);
                     }
                   }
                   if (data[i][getAttr(469)] == "1") {
                     data[i]["quality"] = "FHD";
                     if (data[i][getAttr(836)] == 2) {
                       data[i]["quality"] = getAttr(356);
                     }
                   }
                 }
                 break;
             }
           } else {
             expr = getAttr(929);
             data[i][getAttr(397)] = getAttr(855) + data[i]["Episodes"];
           }
           $(getAttr(588))["append"]('<div class="movie lazy" data-src="' + data[i][getAttr(335)] + getAttr(564) + getAttr(451) + getAttr(849) + getAttr(557) + getAttr(841) + data[i][getAttr(774)] + getAttr(877) + data[i][getAttr(334)] + '">' + getAttr(803) + getAttr(764) + '<i class="fa fa-star"></i> ' + data[i][getAttr(563)] + " &nbsp;" + getAttr(509) + data[i][getAttr(633)] + "m" + getAttr(477) + getAttr(570) + expr + '"' + value + ">" + data[i][getAttr(397)] + getAttr(477) + getAttr(579) + img +
           getAttr(477) + getAttr(857) + data[i][getAttr(792)] + " (" + data[i][getAttr(403)] + ")" + getAttr(477) + getAttr(477) + getAttr(477));
         }
         $(getAttr(588))[getAttr(553)](getAttr(552));
         $(getAttr(541))[getAttr(312)](getAttr(657), getAttr(527) + imgReq + getAttr(727));
         $("#movies-page-list .movie")[getAttr(790)]()[getAttr(587)](function() {
           var gotoNewOfflinePage = getAttr;
           var res = {
             "url" : $(this)["attr"](gotoNewOfflinePage(753)),
             "type" : $(this)[gotoNewOfflinePage(863)](gotoNewOfflinePage(425))
           };
           createPage(gotoNewOfflinePage(385), res);
         });
         lazy();
       } else {
         $(getAttr(821))["hide"]();
         controller[getAttr(660)](!![]);
         controller = null;
         scene = null;
       }
       loading = ![];
     }, function() {
       getMoreMovies(result);
     });
   });
 });
}
function beginPlay(data) {
 var getRefreshTokenKey = _0x105441;
 var _0x117370 = ![];
 var b;
 var n = data[getRefreshTokenKey(528)];
 if (n > 0 && !data[0]) {
   cantPlay();
 } else {
   setTimeout(function() {
     var h2 = getRefreshTokenKey;
     srcIdx = [];
     sources = [];
     if (n > 1 && data[n - 1] && !data[n - 1][h2(576)]) {
       subtitles = data[n - 1];
       n--;
     } else {
     }
     if (!data[n - 1]) {
       n--;
     }
     setTimeout(function() {
       var selector = h2;
       var j = 0;
       for (; j < n; j++) {
         if (data[j][selector(409)][0][selector(531)]["indexOf"](assetdom) > -1 && data[j][selector(409)][0][selector(531)][selector(807)]("nontonasik") == -1) {
           continue;
         }
         if (data[j][selector(576)][selector(349)]) {
           var i = 0;
           for (; i < data[j]["meta"][selector(349)]["length"]; i++) {
             data[j][selector(576)][selector(349)][i]["file"] = {
               "file" : selector(801) + data[j][selector(576)][selector(349)][i]["driveid"] + "?alt=media&key=AIzaSyBXV3qGJ2rwDaxvUmAzaVpZMmn1t6PyU0E",
               "type" : "mp4"
             };
           }
         }
         sources[selector(853)](data[j]);
         if (data[j][selector(576)]["type"] == selector(605)) {
           $(selector(913))["attr"](selector(463), "1");
         }
         if (!_0x117370) {
           if (data[j][selector(576)][selector(334)]["indexOf"](selector(567)) > -1 || noDrive) {
             if (bannedType[selector(807)](data[j][selector(576)][selector(334)]) == -1) {
               srcIdx[selector(853)](j);
               currentIdx = j;
               if (data[j][selector(576)][selector(606)] && data[j][selector(576)][selector(606)] != selector(494)) {
                 if (!b) {
                   b = data[j];
                 }
                 setCookie(data[j][selector(576)][selector(606)]);
                 setTimeout(function() {
                   startPlay(b);
                   b = "";
                 }, 300);
               } else {
                 startPlay(data[j]);
               }
               _0x117370 = !![];
             }
           }
         }
       }
       if (!_0x117370) {
         if (!noDrive) {
           noDrive = !![];
           beginPlay(data);
         } else {
           cantPlay();
         }
       }
     }, 300);
   }, 300);
 }
}
var defRatio = 0;
function startPlay(map) {
 var getAttr = _0x105441;
 if (map["meta"][getAttr(334)] == getAttr(396)) {
   var artistTrack = getAttr(572) + map["sources"][0][getAttr(531)][getAttr(354)]("v=")[1] + getAttr(911);
   $(getAttr(535))["height"](getAttr(343))[getAttr(410)](artistTrack);
   $(".bottom-menu-logo")[getAttr(745)]();
   $(getAttr(303))[getAttr(312)](getAttr(964), getAttr(676))["show"]();
   return;
 }
 if (map["sources"][0][getAttr(531)][getAttr(807)](getAttr(490)) > -1 && map[getAttr(576)]["x"] != getAttr(900) && map[getAttr(576)]["x"] != getAttr(590)) {
   var start = calcTime("+7");
   var i = start[getAttr(355)]();
   i = i % tsdiv;
   var min_age = start["getSeconds"]() * 1E3;
   var expected_date2 = new Date(start - 6E4 * i - min_age);
   var name = Math["floor"](expected_date2[getAttr(401)]() / 1E3);
   var attr2index = $(getAttr(913))[getAttr(863)](getAttr(950));
   var pass = map[getAttr(409)][0]["file"][getAttr(354)](getAttr(728))[1]["split"]("/")[0];
   if (pass[getAttr(807)]("?") > -1) {
     pass = pass[getAttr(354)]("?")[0];
   }
   var c = crc32(btoa(name + pass) + name + pass + crc32(pass + name));
   var script = [getAttr(772) + assetdom, "https://playdrv2." + assetdom, "https://playdrv3." + assetdom];
   script = script[Math["floor"](Math[getAttr(656)]() * script["length"])];
   if (attr2index[getAttr(807)]("-") == -1) {
     script = script + getAttr(887);
   } else {
     script = script + getAttr(766);
   }
   cordovaHTTP[getAttr(624)](!![], function() {
     var parseInt = getAttr;
     cordovaHTTP[parseInt(953)](script, {
       "dv" : pass,
       "ts" : name,
       "token" : c,
       "hs" : map[parseInt(576)][parseInt(457)],
       "epi" : actEpi,
       "tmdb" : attr2index
     }, {}, function(myPreferences) {
       var getPreferenceKey = parseInt;
       var data = myPreferences[getPreferenceKey(888)];
       data = JSON[getPreferenceKey(698)](data);
       if (data[0]) {
         sources[currentIdx] = data[0];
         sources[currentIdx]["meta"]["x"] = getPreferenceKey(900);
       } else {
         sources[currentIdx]["meta"]["x"] = getPreferenceKey(590);
       }
       startPlay(sources[currentIdx]);
     });
   });
   return;
 }
 hs = map[getAttr(576)][getAttr(457)];
 mvid = map["meta"]["id"];
 prov = map[getAttr(576)][getAttr(569)];
 if (defRatio == 0 && map[getAttr(576)][getAttr(419)] != 0) {
   defRatio = map[getAttr(576)][getAttr(419)];
 }
 if (defRatio == 0) {
   defRatio = 1.78;
 }
 ar = map["meta"][getAttr(419)] == "0" ? defRatio : map[getAttr(576)]["ratio"];
 table = map[getAttr(576)][getAttr(334)];
 if (map[getAttr(576)][getAttr(606)] && map[getAttr(576)][getAttr(606)] != "gapake") {
   currentKuki = map[getAttr(576)][getAttr(606)];
 } else {
   currentKuki = "";
 }
 var uid = ar + ":1";
 var data = [];
 if (subtitles["length"] > 0 && hs == "0") {
   data = subtitles;
 }
 var i = 0;
 for (; i < map[getAttr(409)][getAttr(528)]; i++) {
   if (map[getAttr(409)][i]["label"]) {
     if (map[getAttr(409)][i][getAttr(752)][getAttr(896)]() == "hd") {
       map["sources"][i][getAttr(752)] = getAttr(705);
     } else {
       if (map[getAttr(409)][i]["label"][getAttr(896)]() == "sd") {
         map[getAttr(409)][i][getAttr(752)] = getAttr(411);
       }
     }
   }
 }
 if (noFrameType[getAttr(807)](table) == -1 && !mrload && map[getAttr(409)][0][getAttr(531)]["toLowerCase"]()["indexOf"](getAttr(775)) == -1 && map[getAttr(409)][0][getAttr(531)][getAttr(896)]()["indexOf"](getAttr(749)) == -1) {
   var pix_color = "";
   var _0x4451a9 = ![];
   var _0x55c8d1 = ![];
   if (table == "dstream" || table == "stape" || table == "hydrax") {
     if (data[getAttr(528)] > 0) {
       if (table == getAttr(711)) {
         i = 0;
         for (; i < data[getAttr(528)]; i++) {
           if (data[i][getAttr(752)][getAttr(896)]()[getAttr(807)]("indonesia") > -1 && !_0x55c8d1) {
             pix_color = pix_color + (getAttr(482) + data[i][getAttr(531)] + "&sub-lang=Indonesia");
             _0x55c8d1 = !![];
           }
         }
       } else {
         i = 0;
         for (; i < data["length"]; i++) {
           if (data[i][getAttr(752)]["toLowerCase"]()[getAttr(807)]("english-1") > -1 && !_0x4451a9) {
             if (!_0x55c8d1) {
               pix_color = pix_color + ("?c1_file=" + data[i][getAttr(531)] + getAttr(574));
             } else {
               pix_color = pix_color + (getAttr(317) + data[i][getAttr(531)] + "&c2_label=English");
             }
             _0x4451a9 = !![];
           } else {
             if (data[i]["label"][getAttr(896)]()["indexOf"](getAttr(687)) > -1 && !_0x55c8d1) {
               if (!_0x4451a9) {
                 pix_color = pix_color + ("?c1_file=" + data[i][getAttr(531)] + getAttr(392));
               } else {
                 pix_color = pix_color + ("&c2_file=" + data[i][getAttr(531)] + "&c2_label=Indonesian");
               }
               _0x55c8d1 = !![];
             }
           }
         }
       }
     }
   }
   artistTrack = getAttr(307) + map[getAttr(409)][0]["file"] + pix_color + '" frameborder="0" scrolling="no" style="width:100%;height:100%;display:none;" allowfullscreen></iframe>';
   $(getAttr(535))[getAttr(410)](artistTrack);
   playLoad();
   if (table == getAttr(560)) {
     $(getAttr(683))["on"]("load", function() {
       var titletemplate = getAttr;
       mrload = !![];
       var encoderChild = $(titletemplate(683))[titletemplate(939)]()[titletemplate(645)](titletemplate(771))[titletemplate(863)](titletemplate(515));
       sources[currentIdx][titletemplate(409)][0]["file"] = encoderChild;
       $("#myvid")[titletemplate(327)]();
       $(titletemplate(535))[titletemplate(410)](titletemplate(376));
       startPlay(sources[currentIdx]);
     });
   }
   if (table == getAttr(635)) {
     $(getAttr(683))["on"](getAttr(959), function() {
       var require = getAttr;
       mrload = !![];
       var url = "https:" + $(require(683))[require(939)]()[require(645)](require(416))["attr"]("src");
       if (url[require(807)](require(775)) == -1) {
         var xhr = new XMLHttpRequest;
         xhr[require(671)](require(647), url);
         xhr["onreadystatechange"] = function() {
           var e = require;
           if (this[e(732)] == this[e(952)]) {
             url = this[e(654)];
             sources[currentIdx][e(409)][0]["file"] = url;
             sources[currentIdx][e(409)][0]["type"] = "mp4";
             $(e(683))["remove"]();
             $("#vid-container")[e(410)](e(376));
             startPlay(sources[currentIdx]);
           }
         };
         xhr["send"]();
       } else {
         sources[currentIdx]["sources"][0][require(531)] = url;
         sources[currentIdx][require(409)][0]["type"] = require(834);
         $(require(683))[require(327)]();
         $(require(535))[require(410)](require(376));
         startPlay(sources[currentIdx]);
       }
     });
   }
   if (table == getAttr(556)) {
     $(getAttr(683))["on"](getAttr(959), function() {
       var _t = getAttr;
       mrload = !![];
       var nb_numbers = $(_t(683))[_t(939)]()[_t(645)](_t(838))[_t(470)]()["last"]()["text"]()[_t(908)]();
       if (nb_numbers) {
         nb_numbers = _t(679) + nb_numbers + _t(361);
         sources[currentIdx][_t(409)][0]["file"] = nb_numbers;
         $(_t(683))[_t(327)]();
         $(_t(535))[_t(410)](_t(376));
         startPlay(sources[currentIdx]);
       } else {
         $(_t(683))[_t(327)]();
         $("#vid-container")[_t(410)](_t(376));
         errPlay();
       }
     });
   }
   if (table == getAttr(870)) {
     $("#myvid")["on"](getAttr(959), function() {
       var adminProjectRootId = getAttr;
       mrload = !![];
       var widget = $("#myvid")["contents"]()["find"](adminProjectRootId(358))[adminProjectRootId(692)]()["trim"]();
       if (widget) {
         widget = adminProjectRootId(726) + widget;
         sources[currentIdx]["sources"][0][adminProjectRootId(531)] = widget;
         $(adminProjectRootId(683))[adminProjectRootId(327)]();
         $(adminProjectRootId(535))[adminProjectRootId(410)](adminProjectRootId(376));
         startPlay(sources[currentIdx]);
       } else {
         $(adminProjectRootId(683))["remove"]();
         $(adminProjectRootId(535))[adminProjectRootId(410)](adminProjectRootId(376));
         errPlay();
       }
     });
   }
   if (table == getAttr(326)) {
     $(getAttr(683))["on"](getAttr(959), function() {
       var titletemplate = getAttr;
       var PL$16 = $(titletemplate(683))[titletemplate(939)]()["find"](titletemplate(943))[titletemplate(692)]()[titletemplate(908)]();
       if (PL$16[titletemplate(807)]('jwplayer("vplayer").') > -1) {
         PL$16 = PL$16[titletemplate(354)](titletemplate(768))[1][titletemplate(354)]('"logo')[0];
         PL$16 = PL$16[titletemplate(354)]("file:");
         var varName2 = "";
         var PL$17 = 1;
         for (; PL$17 < PL$16["length"]; PL$17++) {
           varName2 = PL$16[PL$17]["split"]('"')[1][titletemplate(354)]('"')[0];
           if (varName2[titletemplate(807)](".mp4") > -1) {
             break;
           } else {
             varName2 = "";
           }
         }
         if (varName2 != "") {
           sources[currentIdx][titletemplate(409)][0][titletemplate(531)] = varName2;
           $(titletemplate(683))["remove"]();
           $("#vid-container")[titletemplate(410)](titletemplate(376));
           startPlay(sources[currentIdx]);
         }
       }
     });
   }
   if (table == "cvideo") {
     $(getAttr(683))["on"](getAttr(959), function() {
       var titletemplate = getAttr;
       var primaryExtension = $(titletemplate(683))[titletemplate(939)]()[titletemplate(645)](titletemplate(771))["attr"](titletemplate(515));
       if (primaryExtension != "") {
         sources[currentIdx][titletemplate(409)][0][titletemplate(531)] = primaryExtension;
         $(titletemplate(683))[titletemplate(327)]();
         $(titletemplate(535))[titletemplate(410)](titletemplate(376));
         startPlay(sources[currentIdx]);
       }
     });
   }
   if (table == getAttr(351) || table == getAttr(963) || table == getAttr(755) || table == getAttr(586) || table == getAttr(711)) {
     $(getAttr(683))[getAttr(369)]();
     $(getAttr(575))[getAttr(327)]();
   }
 } else {
   var sources = map[getAttr(409)];
   if (!map["meta"][getAttr(606)] || map[getAttr(576)][getAttr(606)] == getAttr(494)) {
     if (map[getAttr(576)][getAttr(398)]) {
       sources = map[getAttr(576)][getAttr(398)];
     } else {
       if (map["meta"]["backup2"] && map[getAttr(576)][getAttr(349)][getAttr(528)] > 0) {
         bckupIdx = Math[getAttr(336)](Math[getAttr(656)]() * map[getAttr(576)][getAttr(349)][getAttr(528)]);
         sources = map[getAttr(576)][getAttr(349)][bckupIdx][getAttr(531)];
       }
     }
   }
   if (jw) {
     jwplayer(getAttr(689))["remove"]();
     jw = null;
   }
   var defaults = {
     "primary" : getAttr(805),
     "width" : getAttr(676),
     "height" : "100%",
     "aboutlink" : getAttr(341),
     "abouttext" : "Dutafilm",
     "aspectratio" : uid,
     "autostart" : "true",
     "stretching" : "uniform",
     "preload" : "auto",
     "controls" : !![],
     "mute" : ![],
     "sharing" : {},
     "cast" : {},
     "captions" : {
       "color" : getAttr(483)
     },
     "skin" : {
       "name" : getAttr(884)
     },
     "sources" : sources,
     "tracks" : data
   };
   jw = jwplayer(getAttr(689))[getAttr(562)](defaults);
   jw["on"](getAttr(378), onReady);
   jw["on"](getAttr(892), onBuffer);
   jw["on"](getAttr(385), onPlay);
   jw["on"]("pause", onPause);
   jw["on"](getAttr(938), onSeeked);
   jw["on"](getAttr(812), onSeek);
   jw["on"]("captionsList", onCaptionList);
   jw["on"](getAttr(744), onError);
   jw["on"](getAttr(794), onLevelsChanged);
   jw["on"]("captionsChanged", onCaptionsChanged);
   jw["on"](getAttr(493), onComplete);
 }
}
function showBanner(title, message) {
 var get = _0x105441;
 $(get(714))[get(327)]();
 $(get(535))["prepend"](get(786) + '<div id="banner-close" onclick="event.stopPropagation();$(this).parent().hide();" style="' + get(823) + get(958) + get(492) + get(859) + get(344) + get(337) + title + '" width="100%" height="auto">' + get(477));
 $(".jwseed")[get(312)]({
   "width" : get(297),
   "height" : "138px",
   "max-width" : get(722),
   "max-height" : get(885),
   "position" : "absolute",
   "bottom" : get(809),
   "left" : get(439),
   "transform" : get(709)
 });
 $(get(714))[get(790)]()[get(587)](function() {
   var showInstructions = get;
   if (_typeof(cordova[showInstructions(393)]) == showInstructions(653)) {
     cordova["InAppBrowser"][showInstructions(671)](message, showInstructions(338), showInstructions(710));
   } else {
     window["open"](message, "_blank");
   }
 });
}
function onReady() {
 var tplPopovers = _0x105441;
 totalQuals = jw[tplPopovers(681)]()["sources"][tplPopovers(528)] - 1;
 qualIdx = jw[tplPopovers(793)]();
 totalTry = 0;
 nextTry = ![];
 chgRes = ![];
 maxTry = null;
 var j = Math["floor"](Math[tplPopovers(656)]() * banners[tplPopovers(528)]);
 banner = banners[j];
 bannerLink = bannersLink[j];
 bannerShowed = ![];
 $(tplPopovers(565))["on"](tplPopovers(650), function() {
   var getType = tplPopovers;
   var touchStretch = this[getType(843)];
   var lastTouchStretch = this["videoHeight"];
   var typeEditors = touchStretch / lastTouchStretch;
   typeEditors = typeEditors[getType(737)](2);
   if (ar != typeEditors && sources[currentIdx][getType(576)][getType(334)] != getType(399)) {
     ar = typeEditors;
     sources[currentIdx]["meta"][getType(419)] = ar;
     startPlay(sources[currentIdx]);
   }
 });
}
function onBuffer() {
 var titletemplate = _0x105441;
 $(titletemplate(501))[titletemplate(327)]();
 $(titletemplate(535))[titletemplate(322)]($(titletemplate(549))[titletemplate(322)]());
 $(window)[titletemplate(637)](titletemplate(761))["on"](titletemplate(761), function() {
   var containertemplate = titletemplate;
   $(containertemplate(535))["height"]($("#vid")[containertemplate(322)]());
 });
 if (!bannerShowed) {
   showBanner(banner, bannerLink);
   bannerShowed = !![];
 }
 if (!srvList) {
   srvList = !![];
   serverList();
   $("#server-list-title,#server-list-content")[titletemplate(533)]();
 }
}
function onPlay() {
 var flag = _0x105441;
 var _0x1891e7 = 3;
 var exp = $(flag(913))["attr"](flag(425));
 if (exp == flag(860)) {
   _0x1891e7 = 2;
 }
 if (!subtitles || subtitles[flag(528)] == 0) {
   _0x1891e7--;
 }
 var id = epi == "-1" ? "" : epi;
 var namespace = $(flag(913))[flag(863)](flag(950)) + "-" + id + "-time";
 jw[flag(901)](![]);
 if (localStorage["getItem"](namespace) && allowSeek) {
   allowSeek = ![];
 }
 if (playTimeInterval) {
   clearInterval(playTimeInterval);
 }
 playTimeInterval = setInterval(function() {
   var vidPlay = flag;
   if (jw && jw[vidPlay(323)]() > 60) {
     localStorage[vidPlay(352)](namespace, jw[vidPlay(323)]());
   }
 }, 3E3);
 $(flag(743))[flag(745)]();
 $(flag(363))[flag(312)](flag(964), 100 / _0x1891e7 + "%")[flag(369)]();
 if (exp == flag(860)) {
   $("#bottom-menu-eps")[flag(745)]();
 }
 if (!subtitles || subtitles[flag(528)] == 0) {
   $(flag(833))[flag(745)]();
 }
 if (btout) {
   clearTimeout(btout);
 }
 if (jw["getPosition"]() < 10) {
   $(flag(714))[flag(369)]();
   btout = setTimeout(function() {
     var vidPlay = flag;
     $(vidPlay(714))["hide"]();
   }, (10 - jw[flag(323)]()) * 1E3);
 } else {
   $(flag(714))[flag(745)]();
 }
}
function onPause() {
 var id = _0x105441;
 if (btout) {
   clearTimeout(btout);
 }
 $(id(714))["show"]();
}
function onSeek() {
}
function onSeeked() {
 var titletemplate = _0x105441;
 if (jw["getPosition"]() > 10) {
   $(titletemplate(714))[titletemplate(745)]();
 }
}
function onCaptionList() {
 var getConcrete = _0x105441;
 var base_c = jw[getConcrete(810)]();
 if (base_c[getConcrete(528)] > 0) {
   var off = "off";
   var offset = 0;
   for (; offset < base_c[getConcrete(528)]; offset++) {
     off = base_c[offset][getConcrete(752)][getConcrete(896)]();
     if (off != getConcrete(637)) {
       if (off[getConcrete(807)]("english") == -1 && off[getConcrete(807)]("-0") == -1) {
         off = offset;
         break;
       } else {
         off = offset;
       }
     }
   }
   if (off != getConcrete(637)) {
     jw[getConcrete(935)](off);
   }
 }
}
function onError() {
 var selector = _0x105441;
 allowSeek = !![];
 var targetLocale = JSON[selector(462)](jw["getPlaylistItem"]()[selector(409)]);
 if (targetLocale[selector(807)](selector(728)) > -1 || table == selector(415)) {
   if (!maxTry) {
     if (targetLocale[selector(807)](selector(728)) > -1 && table != selector(415)) {
       maxTry = 2;
     } else {
       maxTry = 2;
       if (prov == "lk" && targetLocale[selector(807)](selector(316)) > -1) {
         var mostHPDone = parseInt((new Date)["getTime"]()[selector(445)]()[selector(475)](0, 10));
         var dmg = parseInt(sources[currentIdx][selector(409)][0][selector(531)][selector(354)](selector(607))[1]["split"]("&")[0]);
         if (mostHPDone <= dmg) {
           maxTry = 6;
         }
       }
     }
   } else {
     maxTry--;
   }
   if (maxTry) {
     if (targetLocale[selector(807)](selector(728)) > -1 && sources[currentIdx]["meta"]["backup"] && table != selector(415)) {
       targetLocale = sources[currentIdx][selector(576)][selector(398)];
     } else {
       targetLocale = jw[selector(681)]()[selector(409)];
     }
     jw["load"](jw[selector(681)]());
   } else {
     nextTry = !![];
     if (targetLocale["indexOf"](selector(728)) > -1 && table != selector(415)) {
       if (sources[currentIdx]["meta"][selector(398)]) {
         sources[currentIdx][selector(576)][selector(398)] = "";
       }
       if (sources[currentIdx][selector(576)][selector(349)] && sources[currentIdx]["meta"][selector(349)][selector(528)] > 0) {
         startPlay(sources[currentIdx]);
         return;
       }
     }
     if (uSwitch) {
       if (table == selector(415)) {
         ignoreIdx["push"](currentIdx);
       }
       if (targetLocale["indexOf"](selector(313)) > -1) {
         $(selector(913))[selector(863)](selector(435), "1");
         cantPlay();
       } else {
         if (sources[currentIdx][selector(576)][selector(349)] && sources[currentIdx][selector(576)][selector(349)][selector(528)] > 0) {
           startPlay(sources[currentIdx]);
           return;
         } else {
           if (table != selector(415)) {
             ignoreIdx[selector(853)](currentIdx);
           }
           errPlay();
         }
       }
     }
   }
 } else {
   if (table == selector(476) || table == selector(634)) {
     if (!maxTry) {
       maxTry = (totalQuals + 1) * 3;
     }
     if (totalTry < maxTry) {
       if (chgRes === ![]) {
         qualIdx++;
         if (qualIdx > totalQuals) {
           qualIdx = 0;
         }
       } else {
         qualIdx = chgRes;
       }
       setTimeout(function() {
         var path = selector;
         jw[path(959)](jw["getPlaylistItem"]());
         jw[path(798)](qualIdx);
         jw[path(812)](1);
         totalTry++;
       }, 0);
     } else {
       nextTry = !![];
       if (uSwitch) {
         ignoreIdx[selector(853)](currentIdx);
         errPlay();
       }
     }
   } else {
     if (noFrameType["indexOf"](table) == -1 || targetLocale["indexOf"](selector(505)) > -1 || targetLocale[selector(807)](selector(954)) > -1) {
       if (!maxTry) {
         maxTry = 5;
       }
       if (totalTry >= maxTry) {
         if (noFrameType["indexOf"](table) == -1) {
           var testFileSpec = jw["getPlaylistItem"]()[selector(409)][0]["file"];
           var html = selector(699) + testFileSpec + "' frameborder='0' scrolling='no' style='width:100%;height:100%;' allowfullscreen></iframe>";
           $(selector(535))["html"](html);
         } else {
           nextTry = !![];
         }
       } else {
         totalTry++;
         if (!uSwitch) {
           jw[selector(959)]({
             "sources" : sources[srcIdx[srcIdx[selector(528)] - 1]][selector(409)]
           });
         } else {
           jw[selector(959)](jw["getPlaylistItem"]());
         }
       }
     } else {
       if (!maxTry) {
         maxTry = 5;
       } else {
         maxTry--;
       }
       if (totalTry >= maxTry) {
         if (table["indexOf"](selector(567)) > -1) {
           if (sources[currentIdx][selector(576)]["backup2"]) {
             sources[currentIdx][selector(576)][selector(349)][selector(818)](bckupIdx, 1);
           }
           if (sources[currentIdx]["meta"][selector(349)] && sources[currentIdx][selector(576)][selector(349)][selector(528)] > 0) {
             startPlay(sources[currentIdx]);
             return;
           }
         }
         nextTry = !![];
         if (uSwitch) {
           ignoreIdx[selector(853)](currentIdx);
           errPlay();
         }
       } else {
         totalTry++;
         if (!uSwitch) {
           jw["load"]({
             "sources" : sources[srcIdx[srcIdx["length"] - 1]]["sources"][qualIdx]
           });
         } else {
           jw["load"](jw[selector(681)]());
         }
       }
     }
   }
 }
 if (nextTry && !uSwitch) {
   totalTry = 0;
   maxTry = null;
   nextTry = ![];
   srvList = ![];
   if (srcIdx[selector(528)] < sources[selector(528)]) {
     var name;
     var _0x2f6c7e = ![];
     var index = 0;
     for (; index < sources[selector(528)]; index++) {
       if (srcIdx[selector(807)](index) == -1) {
         if (bannedType[selector(807)](sources[index][selector(576)][selector(334)]) == -1) {
           srcIdx[selector(853)](index);
           currentIdx = index;
           if (sources[index][selector(576)][selector(606)]) {
             if (!name) {
               name = sources[index];
             }
             setCookie(sources[index][selector(576)]["kuki"]);
             setTimeout(function() {
               startPlay(name);
               name = "";
             }, 300);
           } else {
             startPlay(sources[index]);
           }
           _0x2f6c7e = !![];
           break;
         }
       }
     }
     if (!_0x2f6c7e) {
       cantPlay();
     }
   } else {
     cantPlay();
   }
 }
}
function onLevelsChanged() {
}
function onCaptionsChanged() {
}
function onComplete() {
 var brMarkup = _0x105441;
 if (playTimeInterval) {
   clearInterval(playTimeInterval);
 }
 var model1 = $("#player")[brMarkup(863)](brMarkup(425));
 var dolor = epi == "-1" ? "" : epi;
 var namespace = $(brMarkup(913))[brMarkup(863)](brMarkup(950)) + "-" + dolor + brMarkup(800);
 localStorage[brMarkup(545)](namespace);
 if (model1 == brMarkup(758)) {
   if (epArr["length"] - 1 > parseInt(epi)) {
     var ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZA = $("#player")[brMarkup(863)](brMarkup(310));
     allowSeek = !![];
     uSwitch = ![];
     mrload = ![];
     srvList = ![];
     nextTry = ![];
     havesend = ![];
     bannerShowed = ![];
     $(brMarkup(414))[brMarkup(327)]();
     $(brMarkup(559))[brMarkup(402)]();
     epi = parseInt(epi) + 1;
     epiTitle = epArr[epi]["title"];
     playLoad();
     var _0x331aaa = epArr[epi]["prov"];
     var ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMN = epArr[epi]["eps"];
     var ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGH = epArr[epi][brMarkup(777)];
     var magnifier = $(brMarkup(913))["attr"](brMarkup(950));
     var $magnifier = getChkSum(magnifier);
     var artistTrack = tvReq + brMarkup(640) + _0x331aaa + "&ep=" + ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMN + brMarkup(720) + ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGH + brMarkup(652) + $magnifier + brMarkup(581) + xv;
     actEpi = ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMN;
     cordovaHTTP[brMarkup(314)]("referer", brMarkup(923) + assetdom + brMarkup(370) + ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZA + brMarkup(867));
     cordovaHTTP[brMarkup(314)]("origin", brMarkup(923) + assetdom);
     cordovaHTTP[brMarkup(624)](!![], function() {
       var getHz = brMarkup;
       cordovaHTTP[getHz(953)](artistTrack, {}, {}, function(map) {
         var parseInt = getHz;
         var data = map[parseInt(888)];
         if (data[parseInt(807)](parseInt(408)) == -1 && data[parseInt(807)](parseInt(551)) == -1 && data["lastIndexOf"]("[]") == -1) {
           data = rc4("m." + assetdom, data);
         }
         if (data["indexOf"](parseInt(706)) > -1) {
           if (data[parseInt(807)](parseInt(551)) > -1 || data[parseInt(629)]("[]") == data[parseInt(528)] - 2) {
             data = "[null]";
           } else {
             data = data[parseInt(354)]("(adm)");
             data = data[data[parseInt(528)] - 1][parseInt(908)]();
             data = data[parseInt(354)](parseInt(408));
             data = '[{"sources' + data[data[parseInt(528)] - 1]["trim"]();
           }
         }
         beginPlay(JSON[parseInt(698)](data));
       });
     });
   }
 }
}
function serverList() {
 var selector = _0x105441;
 var _0x212cd2;
 var y;
 var flag;
 var _0x56716f;
 if (!uSwitch) {
   ignoreIdx = srcIdx[selector(837)](0);
   ignoreIdx[selector(724)]();
 }
 $(selector(966))[selector(692)]("");
 var id = 0;
 for (; id < sources[selector(528)]; id++) {
   if (ignoreIdx[selector(807)](id) == -1 && bannedType[selector(807)](sources[id]["meta"][selector(334)]) == -1) {
     _0x212cd2 = getServerIcon(sources[id][selector(576)][selector(334)]);
     y = selector(411);
     flag = "";
     var i = 0;
     for (; i < sources[id][selector(409)]["length"]; i++) {
       if (sources[id]["sources"][i]["label"]) {
         if (sources[id][selector(409)][i][selector(752)][selector(896)]() == "hd") {
           sources[id]["sources"][i][selector(752)] = selector(705);
         } else {
           if (sources[id][selector(409)][i][selector(752)]["toLowerCase"]() == "sd") {
             sources[id]["sources"][i][selector(752)] = "360p";
           }
         }
         if (parseInt(y) < parseInt(sources[id][selector(409)][i][selector(752)])) {
           y = sources[id][selector(409)][i][selector(752)];
           if (y[selector(807)]("p") == -1) {
             y = y + "p";
           }
         }
       }
     }
     if (parseInt(y) > 2E3) {
       _0x212cd2 = "<img class='server-icon' src='" + imgReq + selector(830);
     }
     if (sources[id][selector(576)][selector(457)] == "1") {
       _0x212cd2 = _0x212cd2 + (selector(514) + imgReq + selector(891));
     }
     if (currentIdx == id) {
       flag = "active";
     }
     $("#server-list-content")[selector(553)]('<div class="server ' + flag + selector(961) + id + '">' + _0x212cd2 + " <div>" + y + selector(477) + "</div>");
   }
 }
 $(selector(940))[selector(790)]()[selector(587)](function() {
   var html = selector;
   if (playTimeInterval) {
     clearInterval(playTimeInterval);
   }
   $(".server")[html(362)](html(461));
   $(this)[html(804)]("active");
   var i = $(this)[html(863)](html(933));
   allowSeek = !![];
   mrload = ![];
   uSwitch = !![];
   currentIdx = i;
   $(".bottom-menu")["hide"]();
   $(html(743))[html(533)]();
   $("#myvid,#infosv")[html(327)]();
   playLoad();
   if (sources[i][html(576)][html(606)] && sources[i]["meta"]["kuki"] != "gapake") {
     setCookie(sources[i]["meta"][html(606)]);
     setTimeout(function() {
       startPlay(sources[i]);
     }, 300);
   } else {
     startPlay(sources[i]);
   }
 });
}
function getServerIcon(mediaType) {
 var gotoNewOfflinePage = _0x105441;
 switch(mediaType) {
   case gotoNewOfflinePage(415):
     return '<img class="server-icon" src="' + imgReq + gotoNewOfflinePage(696);
     break;
   case "mango":
   case gotoNewOfflinePage(326):
     return gotoNewOfflinePage(739) + imgReq + '/images/icon-server/mango.png">';
     break;
   case "dstream":
     return gotoNewOfflinePage(739) + imgReq + '/images/icon-server/dstream.png">';
     break;
   case gotoNewOfflinePage(586):
     return gotoNewOfflinePage(739) + imgReq + gotoNewOfflinePage(598);
     break;
   case gotoNewOfflinePage(711):
     return gotoNewOfflinePage(739) + imgReq + gotoNewOfflinePage(782);
     break;
   case "rapid":
     return gotoNewOfflinePage(739) + imgReq + gotoNewOfflinePage(815);
     break;
   case gotoNewOfflinePage(556):
   case "vstream":
   case gotoNewOfflinePage(399):
   case "clip":
     return '<img class="server-icon" src="' + imgReq + gotoNewOfflinePage(806);
     break;
   case "vidsrc":
     return gotoNewOfflinePage(739) + imgReq + gotoNewOfflinePage(816);
     break;
   case gotoNewOfflinePage(476):
   case "blogger":
   case gotoNewOfflinePage(851):
     return '<img class="server-icon" src="' + imgReq + gotoNewOfflinePage(507);
     break;
   case gotoNewOfflinePage(567):
   case "drives_muvi":
   case gotoNewOfflinePage(666):
     return gotoNewOfflinePage(739) + imgReq + gotoNewOfflinePage(604);
     break;
 }
}
function cantPlay() {
 var format = _0x105441;
 $(format(395))[format(327)]();
 if (!$(format(913))[format(863)](format(463)) && !$("#player")[format(863)](format(435))) {
   $(format(965))[format(322)](250)[format(371)](format(308) + '<div style="display:inline-block;position:relative;top:50%;left:50%;transform:translate(-48%,-50%);padding:10px;">' + format(337) + imgReq + '/images/err-monster.png" width="140px" height="auto" style="' + format(332) + format(321) + format(444) + format(538) + '">' + '<div style="padding:5px;font-size:1.2em;font-weight:bold;">Sumber Film Tidak Tersedia!</div>' + format(436) + format(407) + "</div>" + format(477));
 } else {
   $(format(965))[format(322)](250)[format(371)](format(308) + format(668) + format(808) + '<div style="padding:5px;max-width:450px;line-height:1.5;">Untuk Sumber Film Ini Hanya Dapat Diputar Melalui Browser Komputer (Chrome/Firefox) Menggunakan Extension VidPlay.</div>' + format(477) + format(477));
 }
 var formated = $(format(913))["attr"](format(425));
 if (formated == format(758)) {
   $(format(673))[format(745)]();
   $(format(303))["css"](format(964), format(676))[format(533)]();
 }
}
function errPlay() {
 var titletemplate = _0x105441;
 $(titletemplate(395))[titletemplate(327)]();
 $(titletemplate(965))[titletemplate(322)](250);
 $("#vid-container")[titletemplate(371)]('<div id="infosv" style="position:absolute;top:50%;transform: translateY(-50%);color:#f8f8f8;width:100%;height:100%;z-index:9;background:#000;">' + '<div style="display:inline-block;position:relative;top:50%;left:50%;transform:translate(-48%,-50%);padding:10px;">' + titletemplate(337) + imgReq + titletemplate(897) + titletemplate(332) + "position: relative;" + titletemplate(444) + titletemplate(538) + '">' + titletemplate(523) + titletemplate(540) + titletemplate(407) +
 "</div>" + titletemplate(477));
}
function playLoad() {
 var titletemplate = _0x105441;
 $(titletemplate(575))[titletemplate(327)]();
 $(titletemplate(549))[titletemplate(322)]($("#vid-container")[titletemplate(322)]());
 $(titletemplate(535))[titletemplate(371)](titletemplate(677) + '<img src="' + imgReq + titletemplate(919) + titletemplate(614) + titletemplate(449) + "transform:translate(-50%,-50%);" + titletemplate(822) + titletemplate(389) + titletemplate(477));
}
function _0x454a(totalExpectedResults, entrySelector) {
 var tiledImageBRs = _0x78ef();
 return _0x454a = function searchSelect2(totalExpectedResults, entrySelector) {
   totalExpectedResults = totalExpectedResults - 297;
   var tiledImageBR = tiledImageBRs[totalExpectedResults];
   return tiledImageBR;
 }, _0x454a(totalExpectedResults, entrySelector);
}
function downloadSub() {
 var parseInt = _0x105441;
 if (hs == "1") {
   $[parseInt(329)](parseInt(430), 8E3);
   return;
 }
 var type = jw[parseInt(384)]();
 if (type == 0) {
   $["tips"](parseInt(691), 8E3);
   return;
 }
 var map = jw[parseInt(810)]();
 var text = getTitle();
 var currentBookmark = map[type]["id"];
 var i = map[type][parseInt(752)][parseInt(354)](" ")[parseInt(667)]("-");
 text = text + ("-" + i);
 var rpm_traffic = cordova[parseInt(788)][parseInt(513)];
 rpm_traffic[parseInt(951)](rpm_traffic[parseInt(630)], function(rpm_traffic) {
   var now = parseInt;
   if (rpm_traffic[now(951)]) {
     beginDownloadSub(currentBookmark, text);
   } else {
     rpm_traffic[now(875)](rpm_traffic[now(630)], function(canCreateDiscussions) {
       beginDownloadSub(currentBookmark, text);
     }, function() {
       return;
     });
   }
 });
}
function beginDownloadSub(data, type) {
 var dwordAsString = _0x105441;
 var input = new FileTransfer;
 var message = dwordAsString(881) + type + dwordAsString(536);
 window[dwordAsString(429)](message, function() {
   var createProxy = dwordAsString;
   $[createProxy(329)](createProxy(379), 8E3);
   input = "";
 }, function() {
   var authorizationHeaderValue = dwordAsString;
   input[authorizationHeaderValue(555)](data, message, function(canCreateDiscussions) {
     input = "";
     $["alert"]("Subtitle Berhasil Didownload, Silahkan Cek <b>Folder Download di Phone Storage</b> Anda!");
   }, function(canCreateDiscussions) {
     var createProxy = authorizationHeaderValue;
     input = "";
     $[createProxy(329)](createProxy(852), 4E3);
   }, !![], {
     "headers" : {
       "Authorization" : authorizationHeaderValue(905)
     }
   });
 });
}
function downloadMovie() {
 var b = _0x105441;
 var results = jw[b(681)]()["sources"][jw["getCurrentQuality"]()][b(531)];
 var _0x296d21 = jw["getPlaylistItem"]()["sources"][jw[b(793)]()][b(752)];
 var title = getTitle();
 var _0x288d44 = results["substr"](-4);
 if (bannedType["indexOf"](table) == -1 && !$(b(683))[b(528)]) {
   var rpm_traffic = cordova[b(788)][b(513)];
   rpm_traffic[b(951)](rpm_traffic[b(630)], function(rpm_traffic) {
     var now = b;
     if (rpm_traffic[now(951)]) {
       beginDownload(results, title);
     } else {
       rpm_traffic[now(875)](rpm_traffic[now(630)], function(canCreateDiscussions) {
         beginDownload(results, title);
       }, function() {
         return;
       });
     }
   });
 } else {
   $[b(329)](b(751));
 }
}
function beginDownload(newData, html) {
 var getResponsesAnalysisDataPrefixCacheKey = _0x105441;
 var log = new FileTransfer;
 var groupId = showDownloadProgress();
 $("#download-progress-close" + groupId)["html"](getResponsesAnalysisDataPrefixCacheKey(594))[getResponsesAnalysisDataPrefixCacheKey(587)](function() {
   var bodyBorderEdgeBottom = getResponsesAnalysisDataPrefixCacheKey;
   $(bodyBorderEdgeBottom(848) + groupId)[bodyBorderEdgeBottom(327)]();
   var bodyMarginBottom = $(".download-progress")[bodyBorderEdgeBottom(528)];
   $(bodyBorderEdgeBottom(670))[bodyBorderEdgeBottom(410)](bodyBorderEdgeBottom(712) + bodyMarginBottom + ")");
   if (!$(".download-progress")["length"]) {
     $(bodyBorderEdgeBottom(770))["remove"]();
   }
   if (log != "") {
     log["abort"]();
   }
 });
 $(getResponsesAnalysisDataPrefixCacheKey(458) + groupId)["html"](html);
 var message = getResponsesAnalysisDataPrefixCacheKey(881) + html + getResponsesAnalysisDataPrefixCacheKey(775);
 window[getResponsesAnalysisDataPrefixCacheKey(429)](message, function() {
   var createProxy = getResponsesAnalysisDataPrefixCacheKey;
   $[createProxy(329)](createProxy(924), 8E3);
   $(createProxy(773) + groupId)[createProxy(312)]({
     "width" : "100%",
     "background" : createProxy(763)
   });
   $(createProxy(649) + groupId)[createProxy(410)](createProxy(591));
   log = "";
 }, function() {
   var authorizationHeaderValue = getResponsesAnalysisDataPrefixCacheKey;
   var result;
   var artistTrack;
   log[authorizationHeaderValue(856)] = function(data) {
     var getResponsesAnalysisDataPrefixCacheKey = authorizationHeaderValue;
     if (data[getResponsesAnalysisDataPrefixCacheKey(331)]) {
       if (parseInt(data[getResponsesAnalysisDataPrefixCacheKey(796)] / 1E9) > 0) {
         artistTrack = parseFloat(data["total"] / 1E9)[getResponsesAnalysisDataPrefixCacheKey(737)](1) + getResponsesAnalysisDataPrefixCacheKey(428);
       } else {
         if (parseInt(data[getResponsesAnalysisDataPrefixCacheKey(796)] / 1E6) > 0) {
           artistTrack = parseFloat(data["total"] / 1E6)["toFixed"](1) + getResponsesAnalysisDataPrefixCacheKey(873);
         }
       }
       if (data[getResponsesAnalysisDataPrefixCacheKey(880)] < 1E6) {
         result = parseInt(data[getResponsesAnalysisDataPrefixCacheKey(880)] / 1E3) + " KB";
       } else {
         if (data[getResponsesAnalysisDataPrefixCacheKey(880)] < 1E9) {
           result = parseFloat(data[getResponsesAnalysisDataPrefixCacheKey(880)] / 1E6)["toFixed"](1) + getResponsesAnalysisDataPrefixCacheKey(873);
         } else {
           if (data[getResponsesAnalysisDataPrefixCacheKey(880)] >= 1E9) {
             result = parseFloat(data[getResponsesAnalysisDataPrefixCacheKey(880)] / 1E9)["toFixed"](1) + "GB";
           }
         }
       }
       $("#download-progress-loaded" + groupId)[getResponsesAnalysisDataPrefixCacheKey(410)](result);
       $(getResponsesAnalysisDataPrefixCacheKey(659) + groupId)[getResponsesAnalysisDataPrefixCacheKey(410)](artistTrack);
       var _0x5ca6bd = Math[getResponsesAnalysisDataPrefixCacheKey(336)](data["loaded"] / data[getResponsesAnalysisDataPrefixCacheKey(796)] * 100);
       $(getResponsesAnalysisDataPrefixCacheKey(773) + groupId)[getResponsesAnalysisDataPrefixCacheKey(312)](getResponsesAnalysisDataPrefixCacheKey(964), _0x5ca6bd + "%");
     }
   };
   log[authorizationHeaderValue(555)](encodeURI(newData), message, function(myPreferences) {
     var getResponsesAnalysisDataPrefixCacheKey = authorizationHeaderValue;
     $(getResponsesAnalysisDataPrefixCacheKey(773) + groupId)[getResponsesAnalysisDataPrefixCacheKey(312)](getResponsesAnalysisDataPrefixCacheKey(657), getResponsesAnalysisDataPrefixCacheKey(763));
     $(getResponsesAnalysisDataPrefixCacheKey(649) + groupId)[getResponsesAnalysisDataPrefixCacheKey(410)](getResponsesAnalysisDataPrefixCacheKey(591));
     log = "";
     mediaRefresh[getResponsesAnalysisDataPrefixCacheKey(585)](myPreferences[getResponsesAnalysisDataPrefixCacheKey(644)](), function(canCreateDiscussions) {
       var createFreeSpaceRowHtml = getResponsesAnalysisDataPrefixCacheKey;
       $["alert"](html + createFreeSpaceRowHtml(874));
     }, function(type) {
       var dwordAsString = getResponsesAnalysisDataPrefixCacheKey;
       $[dwordAsString(329)](dwordAsString(340) + type);
     });
   }, function(canCreateDiscussions) {
     var getResponsesAnalysisDataPrefixCacheKey = authorizationHeaderValue;
     $(getResponsesAnalysisDataPrefixCacheKey(773) + groupId)[getResponsesAnalysisDataPrefixCacheKey(312)]({
       "width" : "100%",
       "background" : getResponsesAnalysisDataPrefixCacheKey(765)
     });
     $(getResponsesAnalysisDataPrefixCacheKey(458) + groupId)["html"](getResponsesAnalysisDataPrefixCacheKey(467));
     $("#download-progress-close" + groupId)[getResponsesAnalysisDataPrefixCacheKey(410)](getResponsesAnalysisDataPrefixCacheKey(591));
     log = "";
   }, !![], {
     "headers" : {
       "Authorization" : authorizationHeaderValue(905)
     }
   });
 });
}
function showDownloadProgress() {
 var _char = _0x105441;
 var _FOO_ = (new Date)[_char(401)]()[_char(445)]();
 if (!$(_char(770))[_char(528)]) {
   $(_char(943))["prepend"](_char(778) + _char(713) + _char(459) + _char(648) + _char(407) + "</div>" + _char(642) + _char(680) + _FOO_ + '">' + _char(813) + _FOO_ + _char(580) + _char(632) + _FOO_ + _char(651) + _FOO_ + _char(454) + '<div class="download-progress-bar">' + _char(957) + _FOO_ + '">&nbsp;</div>' + "</div>" + _char(473) + _FOO_ + _char(580) + _char(477) + _char(477) + _char(477));
   $(_char(927))[_char(587)](function() {
     var create = _char;
     if ($(create(302))["is"](create(380))) {
       $(create(927))[create(312)]({
         "border-bottom" : create(602),
         "padding-bottom" : create(421)
       });
       $(create(302))[create(369)]();
       $(create(643))[create(410)]("-")["css"]({
         "font-size" : create(372),
         "top" : "-15px"
       });
     } else {
       $("#download-progress-toggle")[create(312)]({
         "border" : "0",
         "padding-bottom" : "0"
       });
       $(create(302))["hide"]();
       $(create(643))["html"]("+")["css"]({
         "font-size" : "1.5em",
         "top" : create(330)
       });
     }
   });
 } else {
   $(_char(302))[_char(371)](_char(680) + _FOO_ + '">' + _char(813) + _FOO_ + _char(580) + _char(632) + _FOO_ + _char(651) + _FOO_ + _char(454) + _char(547) + _char(957) + _FOO_ + '">&nbsp;</div>' + _char(477) + _char(473) + _FOO_ + _char(580) + _char(477));
 }
 var _0x35b07a = $(_char(534))[_char(528)];
 return $("#download-progress-total")[_char(410)]("Download (" + _0x35b07a + ")"), _FOO_;
}
function setCookie(clobber) {
 var d3_vendorSymbol = _0x105441;
 window[d3_vendorSymbol(665)][d3_vendorSymbol(871)](d3_vendorSymbol(455), d3_vendorSymbol(672), clobber, function() {
   var updateCookie = d3_vendorSymbol;
   console[updateCookie(914)](updateCookie(474));
 }, function(type) {
   var dwordAsString = d3_vendorSymbol;
   $["tips"](dwordAsString(785) + type);
 });
}
function removePage() {
 var children = _0x105441;
 freeze = !![];
 totalTry = 0;
 maxTry = null;
 mrload = ![];
 nextTry = ![];
 srvList = ![];
 havesend = ![];
 bannerShowed = ![];
 epi = "-1";
 epiTitle = "";
 epArr = "";
 subtitles = [];
 if (playTimeInterval) {
   clearInterval(playTimeInterval);
 }
 if (analIntv) {
   clearInterval(analIntv);
 }
 if (jw) {
   mrload = ![];
   uSwitch = ![];
 }
 if ($(".page")[children(528)] == 1) {
   freeze = ![];
   navigator[children(520)][children(520)](function() {
     var getConsoleMethod = children;
     console[getConsoleMethod(914)](getConsoleMethod(858));
   }, function() {
     var getConsoleMethod = children;
     console[getConsoleMethod(914)](getConsoleMethod(543));
   });
 } else {
   $(children(955))["last"]()[children(402)](150);
   setTimeout(function() {
     var content = children;
     $(content(955))[content(832)]()[content(327)]();
     freeze = ![];
     if (controller && !$(content(588))["length"]) {
       controller[content(660)](!![]);
       controller = null;
       scene = null;
     }
   }, 150);
 }
}
function loadContainer(container) {
 var get = _0x105441;
 var initializeCheckTimer;
 if (container == "1") {
   freeze = !![];
   if ($(get(748))[get(528)]) {
     $(get(748))[get(327)]();
   }
   $(get(943))["prepend"](get(915) + get(829) + get(828) + '<div class="spinner">' + get(941) + get(721) + get(608) + get(477) + "</div>" + get(477));
   $(get(748))[get(312)]({
     "width" : $("body")[get(964)](),
     "height" : window[get(791)],
     "top" : $("body")[get(488)]() + "px"
   });
   initializeCheckTimer = setInterval(function() {
     var titletemplate = get;
     $(titletemplate(748))[titletemplate(312)]({
       "width" : $(titletemplate(943))["width"](),
       "height" : window[titletemplate(791)],
       "top" : $(titletemplate(943))[titletemplate(488)]() + "px"
     });
   }, 500);
 } else {
   clearInterval(initializeCheckTimer);
   $("#cdv-loader-content")["remove"]();
   freeze = ![];
 }
}
function getTitle() {
 var getContent = _0x105441;
 var and_method_in_gene_reaction_rule = jw[getContent(681)]()[getContent(409)][jw["getCurrentQuality"]()][getContent(752)];
 var name = and_method_in_gene_reaction_rule;
 if (parseInt(name) < 720) {
   name = getContent(946) + name;
 } else {
   name = "HD." + name;
 }
 var s = $(getContent(685))[getContent(692)]();
 s = s[getContent(597)](/[^a-z0-9]+/gi, " ")["trim"]();
 s = s[getContent(597)]("  ", " ");
 s = s[getContent(597)](" ", "-");
 var carrouselClass = "";
 if (epiTitle) {
   carrouselClass = "-" + epi["trim"]();
 }
 return s = s + "-" + name + carrouselClass["trim"](), s = "DUTAFILM-[" + s[getContent(908)]() + "]", s;
}
function httpGetVidplay() {
 var gotoNewOfflinePage = _0x105441;
 if ((new Date)["getTime"]() % 2) {
   doingTask = !![];
   $[gotoNewOfflinePage(831)](gotoNewOfflinePage(876) + assetdom + gotoNewOfflinePage(820));
   setTimeout(function() {
     doingTask = ![];
   }, 15E3);
 }
 return;
}
var Base64 = {
 "_keyStr" : _0x105441(746),
 "encode" : function testcase(data) {
   var trim = _0x105441;
   var keyframeString = "";
   var dword2;
   var aStatedRank;
   var normalized_images;
   var ARByte;
   var animationCss;
   var knobTranslate;
   var fillTranslate;
   var i = 0;
   data = Base64[trim(662)](data);
   for (; i < data[trim(528)];) {
     dword2 = data["charCodeAt"](i++);
     aStatedRank = data[trim(525)](i++);
     normalized_images = data[trim(525)](i++);
     ARByte = dword2 >> 2;
     animationCss = (dword2 & 3) << 4 | aStatedRank >> 4;
     knobTranslate = (aStatedRank & 15) << 2 | normalized_images >> 6;
     fillTranslate = normalized_images & 63;
     if (isNaN(aStatedRank)) {
       knobTranslate = fillTranslate = 64;
     } else {
       if (isNaN(normalized_images)) {
         fillTranslate = 64;
       }
     }
     keyframeString = keyframeString + this[trim(664)]["charAt"](ARByte) + this[trim(664)][trim(872)](animationCss) + this["_keyStr"][trim(872)](knobTranslate) + this[trim(664)]["charAt"](fillTranslate);
   }
   return keyframeString;
 },
 "decode" : function wrap(data) {
   var trim = _0x105441;
   var result = "";
   var chunkCursor;
   var valueWrapper;
   var expectedSecureOpts;
   var sextet1;
   var sextet2;
   var _0x1d3a00;
   var opCipher;
   var i = 0;
   data = data[trim(597)](/[^A-Za-z0-9+/=]/g, "");
   for (; i < data["length"];) {
     sextet1 = this[trim(664)][trim(807)](data[trim(872)](i++));
     sextet2 = this["_keyStr"]["indexOf"](data["charAt"](i++));
     _0x1d3a00 = this[trim(664)][trim(807)](data[trim(872)](i++));
     opCipher = this[trim(664)][trim(807)](data[trim(872)](i++));
     chunkCursor = sextet1 << 2 | sextet2 >> 4;
     valueWrapper = (sextet2 & 15) << 4 | _0x1d3a00 >> 2;
     expectedSecureOpts = (_0x1d3a00 & 3) << 6 | opCipher;
     result = result + String[trim(554)](chunkCursor);
     if (_0x1d3a00 != 64) {
       result = result + String[trim(554)](valueWrapper);
     }
     if (opCipher != 64) {
       result = result + String[trim(554)](expectedSecureOpts);
     }
   }
   return result = Base64[trim(956)](result), result;
 },
 "_utf8_encode" : function sscanf(str) {
   var randomCount = _0x105441;
   str = str[randomCount(597)](/rn/g, "n");
   var acceptable = "";
   var Y = 0;
   for (; Y < str[randomCount(528)]; Y++) {
     var r = str[randomCount(525)](Y);
     if (r < 128) {
       acceptable = acceptable + String[randomCount(554)](r);
     } else {
       if (r > 127 && r < 2048) {
         acceptable = acceptable + String["fromCharCode"](r >> 6 | 192);
         acceptable = acceptable + String[randomCount(554)](r & 63 | 128);
       } else {
         acceptable = acceptable + String[randomCount(554)](r >> 12 | 224);
         acceptable = acceptable + String[randomCount(554)](r >> 6 & 63 | 128);
         acceptable = acceptable + String[randomCount(554)](r & 63 | 128);
       }
     }
   }
   return acceptable;
 },
 "_utf8_decode" : function testcase(data) {
   var trim = _0x105441;
   var result = "";
   var i = 0;
   var c = c1 = c2 = 0;
   for (; i < data[trim(528)];) {
     c = data[trim(525)](i);
     if (c < 128) {
       result = result + String[trim(554)](c);
       i++;
     } else {
       if (c > 191 && c < 224) {
         c2 = data["charCodeAt"](i + 1);
         result = result + String[trim(554)]((c & 31) << 6 | c2 & 63);
         i = i + 2;
       } else {
         c2 = data[trim(525)](i + 1);
         c3 = data[trim(525)](i + 2);
         result = result + String[trim(554)]((c & 15) << 12 | (c2 & 63) << 6 | c3 & 63);
         i = i + 3;
       }
     }
   }
   return result;
 }
};
function rc4(array, key) {
 var lowbits = _0x105441;
 key = Base64["decode"](key);
 var i = key[lowbits(629)]("]");
 return key = key[lowbits(601)](0, i + 1), key;
}
function uniqid() {
 var writeBuffer = _0x105441;
 var opt_pathToBitJS = opt_pathToBitJS || "";
 var _0x5df2ac = _0x5df2ac || ![];
 var retId;
 this[writeBuffer(613)] = function(args, recver) {
   var t = writeBuffer;
   return args = parseInt(args, 10)["toString"](16), recver < args[t(528)] ? args[t(837)](args[t(528)] - recver) : recver > args[t(528)] ? (new Array(1 + (recver - args[t(528)])))[t(667)]("0") + args : args;
 };
 retId = opt_pathToBitJS + this[writeBuffer(613)](parseInt((new Date)[writeBuffer(401)]() / 1E3, 10), 8) + this["seed"](Math["floor"](Math[writeBuffer(656)]() * 123456789) + 1, 5);
 if (_0x5df2ac) {
   retId = retId + (Math["random"]() * 10)[writeBuffer(737)](8)[writeBuffer(445)]();
 }
 return retId;
}
function lazy() {
 var get = _0x105441;
 $(get(686))["each"](function() {
   var fn = get;
   var unit = $(this)["attr"](fn(736));
   $(this)[fn(312)](fn(546), fn(527) + unit + "')");
 });
}
function getChkSum($) {
 var now = _0x105441;
 var shadowYpos = calcTime("+7");
 var curZoom = shadowYpos[now(355)]();
 curZoom = curZoom % tsdiv;
 var min_age = shadowYpos["getSeconds"]() * 1E3;
 var d = new Date(shadowYpos - 6E4 * curZoom - min_age);
 var token = Math[now(336)](d["getTime"]() / 1E3);
 return crc32(btoa(token + $) + token + $ + crc32($ + token));
}
function calcTime(i) {
 var $externalize = _0x105441;
 var obj = new Date;
 var year = obj[$externalize(401)]() + obj[$externalize(530)]() * 6E4;
 var m = new Date(year + 36E5 * i);
 return m = m[$externalize(445)]()["split"]($externalize(835)), m[1] = $externalize(427), m = new Date(m["join"]($externalize(835))), m;
}
function crc32(data) {
 var String = _0x105441;
 var i = 0;
 var len = 0;
 var value = 0;
 var length = data["length"];
 for (; value < length; value++) {
   if (value % 2 == 0) {
     i = i + data[String(525)](value);
   } else {
     len = len + data[String(525)](value);
   }
 }
 var _0xe73f49 = [2, 3, 5, 7];
 return i * (i + len) * Math[String(315)](i - len);
}
function messUp() {
 var gotoNewOfflinePage = _0x105441;
 var ARByte = Math["floor"](Math["random"]() * 999999 + 1)["toString"]();
 var defaultRegionSelectedValue = Math[gotoNewOfflinePage(336)](Math[gotoNewOfflinePage(656)]() * 999999 + 1)[gotoNewOfflinePage(445)]();
 var password_verify = Math[gotoNewOfflinePage(336)](Math[gotoNewOfflinePage(656)]() * 999999 + 1)["toString"]();
 var valueRulers = Math[gotoNewOfflinePage(336)](calcTime("+7")[gotoNewOfflinePage(401)]() / 1E3)[gotoNewOfflinePage(445)]();
 var _0x39cd4d = getTrouble(ARByte) + getTrouble(xv) + getTrouble(valueRulers) + getTrouble(password_verify) + getTrouble(defaultRegionSelectedValue);
 return _0x39cd4d;
}
function _0x78ef() {
 var entry = ["#player-loader", "meta", '<div class="page" data-page="', "&t=", '<div class="movie-sub">', '"></div>', "&v=", "data-child", ' style="background: linear-gradient(#b07b01, #ffec83, #b07b01)!important;color: #191919 !important;font-weight: 800 !important;"', "landscape", "scanMedia", "stape", "click", "#movies-page-list", "transform: translateX(5%);", "failed", "Tutup", "hdcam", "director", "Batal", "/images/hey88/1000x100.gif", "check", "replace", '/images/icon-server/stape.png">',
 '<img src="https://img.', "tmdb", "substr", "1px solid #afafaf", ".filter-genre:checked", '/images/icon-server/google.png">', "lemon", "kuki", "Expires=", '<div class="bounce3"></div>', "#vid-play-icon", "transparent", "input", "Versi Aplikasi Anda Telah Usang, Update Ke Versi Terbaru?", "seed", "position:relative;", '<option value="korea">Korea</option>', '<div class="ep ', "orientation", "background: #3f3f3f;", ".filter-sort:checked", "_blank", "#player-actor", "sub", "data-nno", "acceptAllCerts",
 "Terjadi Kesalahan, Harap Coba Lagi!", "https://www.tribunnew.site", "checked", ' style="background:rgba(0, 155, 171, 0.68);"', "lastIndexOf", "WRITE_EXTERNAL_STORAGE", "(adm)", '<div class="download-progress-num"><span id="download-progress-loaded', "duration", "blogger", "mango", "wrap", "off", "blur", "#player-genre", "/?sv=", "Koneksi Tidak Stabil, Harap Jalankan Ulang Aplikasi!", '<div id="download-progress-list">', "#download-progress-icon", "toURL", "find", '<div style="padding:15px;',
 "HEAD", '<div id="download-progress-icon">-</div>', "#download-progress-close", "loadedmetadata", '">0</span> / <span id="download-progress-full', "&k=", "object", "responseURL", "keyup", "random", "background", "imgReq", "#download-progress-full", "destroy", "1px solid #555", "_utf8_encode", "2946nxXLfd", "_keyStr", "cookieEmperor", "drives_lk21", "join", '<div style="display:inline-block;position:relative;top:50%;left:50%;transform:translate(-48%,-50%);padding:10px;">', "youtu.be", "#download-progress-total",
 "open", "DRIVE_STREAM", ".bottom-menu-logo,.bottom-menu", "https://img.kotakputih.casa/images/gg777/promo-777.jpg", "#player-rel-list", "100%", '<div id="player-loader" class="page-overlay" style="background:#000;">', "Pengambilan Data Terlalu Lama, Harap Coba Lagi!", "https://oload.stream/stream/", '<div class="download-progress" id="download-progress', "getPlaylistItem", "font-weight:bold;", "#myvid", "mozfullscreenchange", "#player-title", ".lazy", "indonesia-1", ".filter-input:last-child .filter",
 "vid", "referer", "Pilih Subtitle Terlebih Dahulu Dari Tombol CC Di Player!", "text", "/images/bj88/bj88-bonus-harian-tanpa-batas-1000x100.gif", "https://m.kotakputih.casa/api/check.php", "onEnter", '/images/icon-server/mp4.png">', "' style='color:#c6aa28;font-size:1.5em'>KLAIM BONUS</a></div>", "parse", '<iframe id="myvid" src=\'', '" data-nno="', "'><img src='", "') center center no-repeat", "/?token=", ".alert_overlay", "720p", "adm", "checkbox", "img2", "translateX(-50%)", "location=yes", "hydrax",
 "Download (", '<div id="download-progress-toggle">', ".jwseed", "background-repeat: no-repeat;", ' style="background:rgba(255,8,8,.8);"', "addTo", "com.indoxxi", "video", "&no=", '<div class="bounce2"></div>', "80%", "drives_muvi", "pop", ".bottom-menu-content", "https://verystream.com/gettoken/", "/images/mask-title.png') center top repeat-x", "/*/", "https://172.104.41.68/register?ref=dutafilm", "1538860bQvUCb", "idty", "readyState", "test", "alert", ".bottom-menu,#vid-play-icon", "data-src",
 "toFixed", "#home-page-list", '<img class="server-icon" src="', '<option value="">- Pilih Negara -</option>', "Controller", "subid_count", ".bottom-menu-logo", "error", "hide", "ZYX10+/PONM765LKJIAzyTSRQGxwvuHWVFEDUCBtsrqdcba9843ponmlkjihgfe2", "style", "#cdv-loader-content", ".m3u8", "<style>div.jw-controls.jw-reset>div.jw-controlbar.jw-background-color.jw-reset>div.jw-group.jw-controlbar-right-group.jw-reset>div.jw-icon.jw-icon-tooltip.jw-icon-cc.jw-button-color.jw-reset>div>ul{overflow-y:auto;max-height:150px}.alert_content{color:#f0f0f0 !important;}</style>",
 "Film Saat Ini Tidak Dapat Di Download!", "label", "data-url", "xcountry", "clip", ".filter-country:checked", "https://cdn.", "seri", "Versi 1.0.0", "/add/?_=", "resize", "#cdv-logo", "#88ee88", '<div class="movie-ratdur">', "#eeaaaa", "/tv/", "#movies-title", 'jwplayer("vplayer").', ' style="background:rgba(11,171,0,.8);"', "#download-progress-content", "source", "https://playdrv.", "#download-progress-perc", "url", ".mp4", 'border-radius: 5px;" onclick="getRecommends();">', "nno", '<div id="download-progress-content">',
 "ERR", ' style="background:rgba(4,149,212,.8);"', "height:", '/images/icon-server/hydrax.png">', "Tahun / Dekade", "getSeconds", "Error: ", '<div class="jwseed" onclick="event.stopPropagation();" style="position:relative;z-index:2;">', "#player-rel-content", "plugins", "unlock", "unbind", "innerHeight", "title", "getCurrentQuality", "levelsChanged", '<div class="movie lazy" data-src="', "total", "Blu-ray", "setCurrentQuality", "filter", "-time", "https://www.googleapis.com/drive/v3/files/", "radio",
 '<div class="movie-info">', "addClass", "html5", '/images/icon-server/oload.png">', "indexOf", '<div style="padding:5px;font-size:1.2em;font-weight:bold;">Mohon Maaf</div>', "50px", "getCaptionsList", "&_z=", "seek", '<div class="download-progress-title" id="download-progress-title', " &nbsp;", '/images/icon-server/rpid.png">', '/images/icon-server/lemon.png">', "#featured-refresh-btn", "splice", "JSON", "/chk/httpget/", "#movies-loader", "-webkit-transform:translate(-50%,-50%);", "background:#111;",
 "/api/featured.php?key=", "asset_dom", "toUpperCase", "webkitFullscreenElement", '<div class="spinner-label">Loading</div>', '<div id="cdv-loader">', "/images/icon-server/4k.png'/>", "getScript", "last", "#bottom-menu-sub", "mp4", "GMT", "hd_level", "slice", "div[style='display:none;']", "Server Sedang Tidak Stabil, Harap Bersabar dan Coba Lagi Nanti!", "contentWindow", '" data-url="', "#home-page-list .movie", "videoWidth", "fullscreenElement", "15735cxnchi", "lock", "img4", "#download-progress",
 "background-repeat:no-repeat;", "scroll", "facebook", "Download Gagal, Silahkan Coba Kembali Atau Pilih Subtitle Lain!", "push", "958034HidWgu", "Eps<br/>", "onprogress", '<div class="movie-title">', "Successfully launched home intent", "position:absolute;top:3px;right:3px;z-index:2;", "movie", "com.dutafiIm.online", "backdrop", "attr", "Scene", "https://m.", "confirm", "/play", ".filter input", "https://img.kotakputih.casa/images/hey88/promo.jpg", "vstream", "setCookie", "charAt", " MB", " Berhasil Didownload, Silahkan Cek <b>Folder Download di Phone Storage</b> Anda!",
 "requestPermission", "https://task.", '" data-type="', "<script/>", "img3", "loaded", "file:///storage/emulated/0/Download/", '<div style="padding-top:15px;">', '<option value="usa">Barat</option>', "seven", "20%", "data-eps", "/mv/", "data", "country", 'jwplayer.key="zGhSOpbt7hbdG53nW3nDZE0vdyyjy0cNdaQNfA=="', "/images/icon-server/hardsub.png'/>", "buffer", "/images/gg777/gif-965x85.gif", "youtube.com", "apk-watching", "toLowerCase", '/images/err-monster.png" width="140px" height="auto" style="',
 "#movies-cfix", "plot_imdb", "done", "setMute", ".filter", "onclick", "#player-data", "Basic dGVzdHVzZXJuYW1lOnRlc3RwYXNzd29yZA==", "suben_count", '/images/US.png"/>', "trim", "https://www.tribunnew.site", "msFullscreenElement", '" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>', ".bottom-menu-content a:last-child div", "#player", "log", '<div id="cdv-loader-content">', "[dmca]", "img", "&_x=", '/images/loading-play.gif" width="auto" height="40%" style="', "prop",
 "FULL HD", "cam", "https://mob.", "Film Yang Sama Sudah Pernah Didownload, Harap Cek Folder Download Anda!", "&ep=", "GET", "#download-progress-toggle", '<div class="back" style="background:#333;padding:4px;position:absolute;top:0;right:0;cursor:pointer;border-radius:0 0 0 3px;z-index:99"><i class="fa fa-times fa-lg" style="color:#f8f8f8"></i></div>', "movie-eps", '<div class="movie rel-movie lazy" data-src="', "INDOXXI", "getAppVersion", "data-idx", "FHD", "setCurrentCaptions", "getVersionNumber",
 "#xsemi-country", "seeked", "contents", ".server", '<div class="bounce1"></div>', ' style="background:rgba(117,0,214,.8);"', "body", "ajaxSetup", "px !important;top:50%;-webkit-transform:translateY(-50%);", "SD.", "trailer", "webkitfullscreenchange", "&ayam=", "data-tmdb", "hasPermission", "DONE", "get", "mycloud", ".page", "_utf8_decode", '<div class="download-progress-perc" id="download-progress-perc', "color:#f8f8f8;font-weight:bold;", "load", "version", '" data-idx="', '" height="100px" width="auto"/></div> ',
 "dstream", "width", "#vid-container, #vid", "#server-list-content", "800px", 'text-shadow:0 0 3px #9f9f9f;">Pilih Episode</div>', "mozFullScreenElement", "timeout", "Sub Inggris", "#download-progress-list", "#bottom-menu-eps", "Mengambil..", "532888zMtXOx", "text/javascript", '<iframe id="myvid" src="', '<div id="infosv" style="position:absolute;top:50%;transform: translateY(-50%);color:#f8f8f8;width:100%;height:100%;z-index:9;background:#000;">', ".filter-input", "data-ref", "851820nddvgV", "css",
 "/vids/", "setHeader", "abs", "Expires", "&c2_file=", '" data-child="', "171RIIoIi", "x-requested-with", "position: relative;", "height", "getPosition", "Movie", "search", "ostream", "remove", "Serial TV", "tips", "-7px", "lengthComputable", "float: left;", '<i class="fa fa-refresh"></i> Muat Ulang', "type", "poster", "floor", '<img src="', "_system", "#player-container", "Media Refresh Failed: ", "https://dutafilm.com", "eps", "50vh", '">X</div>', "uid", "tvReq", "playing", ' style="background:rgba(255, 146, 24, .8);"',
 "backup2", "tribunnew.site", "vidsrc", "setItem", "insomnia", "split", "getMinutes", "BLU", '<iframe id="analytic-frame" src="https://m.', "#videolink", "#filter-submit", "failreq", "?mime=true", "removeClass", ".bottom-menu", "statusText", "/images/sloto/1000x100-promo-desember-2020-o2.gif", "trailerq", '<i class="fa fa-star"></i> ', '/images/ID.png"/>', "show", "/film-seri/", "prepend", "2em", "analytic", "sub_id", "keepAwake", '<div id="vid"></div>', "https://192.53.116.231/", "ready", "Subtitle Yang Sama Sudah Pernah Didownload, Harap Cek Folder Download Anda!",
 ":hidden", "link", "token", ".eplist", "getCurrentCaptions", "play", "https://www.tribunnew.site/", "border-right", "category", '"/>', "https://www.tribunnew.site/", ".page-overlay", "&c1_label=Indonesian", "InAppBrowser", "/jw/7.12.6/jwp_orim.js?v=12", "#infosv,#player-loader", "iframe", "quality", "backup", "cvideo", "x-request-key", "getTime", "fadeOut", "year", '<div class="divider"></div>', "addEventListener", '<div id="featured-refresh-btn" style="padding: 8px;', '<div style="clear:both;"></div>',
 '[{"sources', "sources", "html", "360p", "appendTo", "ajax", "#myvid, #infosv", "mp4s", "#mgvideo_html5_api", "fullscreenchange", "ucwords", "ratio", "mvReq", "3px", "prototype", "rel", "64gGkTDP", "data-type", "#player-director", "+0700 (SE Asia Standard Time)", " GB", "resolveLocalFileSystemURL", "Sumber HARDSUB Tidak Memiliki Subtitle!", ":checked", '<div class="page-overlay"></div>', "removeAttr", ".back", "data-mp4s", '<div style="padding:5px;">Silahkan Coba Dalam Beberapa Saat Lagi.</div>',
 "#search-mv-btn", "insertAfter", "50%", "mcloud", "margin:auto%;", "userAgent", "1700145sSWglt", "top: -15px;", "toString", "akumenang.com", '<option value="hong kong">Hongkong</option>', "width:100%;height: ", "top:50%;left:50%;", '" data-eps="', "background-position:center center;", "getElementById", "-webkit-transform: translate(5%);", '">0</span></div>', "https://.google.com", "#filter-mv-btn", "hardsub", "#download-progress-title", '<div id="download-progress-total">Download (1)</div>', "sort",
 "active", "stringify", "data-lemon", ".appversion", "CAM", "xsemi", "Download Gagal, Silahkan Coba Kembali Atau Pilih Sumber Lain!", "user-agent", "blu", "children", ' style="background:rgba(255, 57, 148, 0.8);"', "plot_tmdb", '<div class="download-progress-close" id="download-progress-close', "Success", "substring", "blogspot", "</div>", "epis", "Episodes", " (High)", "border: 1px solid #E7D064;", "&sub=", "#E3E370", ".filter-year:checked", "<div><a href='", "data-key", "setRequestHeader", "scrollTop",
 "then", "/docs/", "/api/mvdata.php?_h=", "font-size:0.9em;width:20px;line-height:20px;text-align:center;", "complete", "gapake", "resume", "video, #vid, #vid-container", "Sedang Maintenance, Kunjungi website judi online terbaik <a href='https://dutafilm.com' style='color:#e61c22'>dutafilm.com</a>", "4K HD", "3710392ldymPh", "undefined", "#player-loader,.jw-settings-sharing", "origin", "cover", " | ", "lemonstream", "<b>Hasil Pencarian:</b> ", '/images/icon-server/blogspot.png">', "postMessage",
 '<i class="fa fa-clock-o"></i> ', "msg", "data-prov", "cf-fetch-status", "permissions", "<img class='server-icon' src='", "src", "#search-mv", "#movies-page-list .movie", "analytic-frame", "enter", "home", ".category", ".ep", '<div style="padding:5px;font-size:1.2em;font-weight:bold;">Gagal Memutar Film!</div>', '<div class="eplist">', "charCodeAt", "parent", "url('", "length", '<select id="xsemi-country" style="padding:10px;width:90%;background:#333;border:0;border-radius:5px;color:#f8f8f8;box-shadow:0 0 3px #f8f8f8;">',
 "getTimezoneOffset", "file", "each", "fadeIn", ".download-progress", "#vid-container", ".srt", '" class="filter-year"/> ', "right: 5px;", "genre", '<div style="padding:5px;">Silahkan Pilih Server Lain, Atau Coba Dalam Beberapa Saat Lagi.</div>', ".movie-title", "<div class='prop-link'></div>", "Error launching home intent", "movies", "removeItem", "background-image", '<div class="download-progress-bar">', "status", "#vid", '<div><img src="', "[null]", '<div id="movies-cfix" style="clear:both;"></div>',
 "append", "fromCharCode", "download", "oload", "background-size:cover;", '<option value="thailand">Thailand</option>', "#server-list-title,#server-list-content", "rapid", "background-position: center center;", "setup", "imdb_rating", '" style="', "#vid > div.jw-media.jw-reset > video", "focus", "drives", "deviceready", "prov", '<div class="movie-quality ', "display:inline-block;", '<iframe id="myvid" width="100%" height="100%" src="https://www.youtube.com/embed/', "val", "&c1_label=English"];
 _0x78ef = function _processType() {
   return entry;
 };
 return _0x78ef();
}
function getTrouble(val) {
 var randint = _0x105441;
 val = val[randint(354)]("");
 var name;
 for (name in val) {
   switch(val[name]) {
     case "0":
       var expected = ["a", "b", "c", "H", "I", "J"];
       break;
     case "1":
       expected = ["d", "e", "f", "K", "L", "M"];
       break;
     case "2":
       expected = ["g", "h", "i", "N", "O", "P"];
       break;
     case "3":
       expected = ["j", "k", "l", "Q", "R", "S"];
       break;
     case "4":
       expected = ["m", "n", "o", "T", "U", "V"];
       break;
     case "5":
       expected = ["p", "q", "r", "W", "X", "Y"];
       break;
     case "6":
       expected = ["s", "t", "u", "Z", "0", "1"];
       break;
     case "7":
       expected = ["v", "w", "x", "2", "3", "4"];
       break;
     case "8":
       expected = ["y", "z", "A", "5", "6", "7"];
       break;
     case "9":
       expected = ["B", "C", "D", "8", "9"];
       break;
     case ".":
       expected = ["E", "F", "G"];
       break;
   }
   val[name] = expected[Math[randint(336)](Math[randint(656)]() * expected[randint(528)])];
 }
 return val[randint(667)]("");
}
function makeID(clientHeight) {
 var exists = _0x105441;
 var id = "";
 var m = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
 var number = m[exists(528)];
 var targetOffsetHeight = 0;
 for (; targetOffsetHeight < clientHeight; targetOffsetHeight++) {
   id = id + m[exists(872)](Math[exists(336)](Math[exists(656)]() * number));
 }
 return id;
}
String[_0x105441(422)][_0x105441(418)] = function() {
 var edgeId = _0x105441;
 var updatedEdgesById = this[edgeId(896)]();
 return updatedEdgesById[edgeId(597)](/(^([a-zA-Zp{M}]))|([ -][a-zA-Zp{M}])/g, function(myPreferences) {
   var getPreferenceKey = edgeId;
   return myPreferences[getPreferenceKey(826)]();
 });
};
