!function(i,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):((i=i||self).__vee_validate_locale__lt=i.__vee_validate_locale__lt||{},i.__vee_validate_locale__lt.js=t())}(this,function(){"use strict";var i,t={name:"lt",messages:{_default:function(i){return i+" reikšmė netinkama."},after:function(i,t){return"Laukelyje "+i+" turi būti po "+t[0]+"."},alpha:function(i){return"Laukelyje "+i+" leidžiamos tik raidės."},alpha_dash:function(i){return"Laukelyje "+i+" leidžiamos tik raidės, skaičiai bei brūkšneliai."},alpha_num:function(i){return"Laukelyje "+i+" leidžiamos tik raidės ir skaičiai."},alpha_spaces:function(i){return"Laukelyje "+i+" leidžiamos tik raidės ir tarpai."},before:function(i,t){return i+" turi būti prieš "+t[0]+"."},between:function(i,t){return"Laukelio "+i+" reikšmė turi būti tarp "+t[0]+" ir "+t[1]+"."},confirmed:function(i){return"Laukelio "+i+" patvirtinimas nesutampa."},credit_card:function(i){return"Laukelis "+i+" neteisingas."},date_between:function(i,t){return"Laukelio "+i+" reikšmė turi būti tarp "+t[0]+" ir "+t[1]+"."},date_format:function(i,t){return"Laukelio "+i+" formatas privalo būti toks - "+t[0]+"."},decimal:function(i,t){void 0===t&&(t=[]);var e=t[0];return void 0===e&&(e="*"),"Laukelis "+i+" turi būti skaitmuo su"+("*"===e?"":" "+e)+" skaičium(-ias) po kablelio."},digits:function(i,t){return"Lauklio "+i+" reikšmė turi buti "+t[0]+" ženklų(-o) skaitmuo."},dimensions:function(i,t){return i+" turi būti "+t[0]+" px x "+t[1]+" px."},email:function(i){return"Laukelis "+i+" turi būti teisinga el. pašto adresas."},excluded:function(i){return i+" reikšmė nėra leidžiama."},ext:function(i){return i+" turi būti tinkamas failas."},image:function(i){return i+" turi būti paveikslėlis."},included:function(i){return i+" reikšmė nėra leidžiama."},ip:function(i){return i+" turi būti ip adresas."},max:function(i,t){return i+" negali būti ilgesnis nei "+t[0]+"."},max_value:function(i,t){return i+" turi būti "+t[0]+" arba mažiau."},mimes:function(i){return i+" privalo turėti tinkmą failo tipą."},min:function(i,t){return i+" ilgis privalo būti bent "+t[0]+"."},min_value:function(i,t){return i+" turi būti "+t[0]+" arba daugiau."},numeric:function(i){return i+" turi būti tik skaitmenys."},regex:function(i){return"Laukelio "+i+" formatas netinkamas."},required:function(i){return"Laukelis "+i+" privalomas."},size:function(i,t){return i+" turi būti mažesnis nei "+function(i){var t=1024,e=0==(i=Number(i)*t)?0:Math.floor(Math.log(i)/Math.log(t));return 1*(i/Math.pow(t,e)).toFixed(2)+" "+["Byte","KB","MB","GB","TB","PB","EB","ZB","YB"][e]}(t[0])+"."},url:function(i){return i+" turi būti internetinis adresas."}},attributes:{}};return"undefined"!=typeof VeeValidate&&VeeValidate.Validator.localize(((i={})[t.name]=t,i)),t});