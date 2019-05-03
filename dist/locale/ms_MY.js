!function(a,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):((a=a||self).__vee_validate_locale__ms_MY=a.__vee_validate_locale__ms_MY||{},a.__vee_validate_locale__ms_MY.js=e())}(this,function(){"use strict";var a,e={name:"ms_MY",messages:{_default:function(a){return a+" tidak sah."},after:function(a,e){var n=e[0];return a+" perlulah selepas "+(e[1]?"atau sama dengan ":"")+n+"."},alpha:function(a){return a+" hanya boleh mempunyai karakter abjad sahaja."},alpha_dash:function(a){return a+" boleh mempunyai karakter angka-abjad, sengkang dan garis bawah."},alpha_num:function(a){return a+" hanya boleh mempunyai karakter angka-abjad."},alpha_spaces:function(a){return a+" hanya boleh mempunyai karakter abjad termasuklah aksara ruang."},before:function(a,e){var n=e[0];return a+" perlulah sebelum "+(e[1]?"atau sama dengan ":"")+n+"."},between:function(a,e){return a+" perlulah di antara "+e[0]+" dan "+e[1]+"."},confirmed:function(a){return a+" pengesahan tidak sepadan."},credit_card:function(a){return a+" tidak sah."},date_between:function(a,e){return a+" perlulah di antara "+e[0]+" dan "+e[1]+"."},date_format:function(a,e){return a+" perlulah dalam format "+e[0]+"."},decimal:function(a,e){void 0===e&&(e=[]);var n=e[0];return void 0===n&&(n="*"),a+" perlulah dalam bentuk angka dan boleh mempunyai "+(n&&"*"!==n?n:"")+" titik perpuluhan."},digits:function(a,e){return a+" perlulah dalam bentuk angka dan mempunyai "+e[0]+" digit."},dimensions:function(a,e){return a+" perlulah berdimensi "+e[0]+" pixel darab "+e[1]+" pixels."},email:function(a){return a+" perlulah dalam format emel yang sah."},excluded:function(a){return a+" perlulah sah."},ext:function(a){return a+" perlulah dalam format fail yang sah."},image:function(a){return a+" perlulah dalam bentuk imej."},included:function(a){return a+" perlulah dalam nilai yang sah."},integer:function(a){return a+" perlulah dalam bentuk integer."},ip:function(a){return a+" perlulah dalam format alamat ip yang sah."},length:function(a,e){var n=e[0],r=e[1];return r?"Panjang "+a+" perlulah bernilai di antara "+n+" dan "+r+".":"Panjang "+a+" perlulah bernilai "+n+"."},max:function(a,e){return a+" perlulah tidak melebihi "+e[0]+" karakter."},max_value:function(a,e){return a+" perlulah bernilai "+e[0]+" atau kurang."},mimes:function(a){return a+" perlulah mempunyai jenis fail yang sah."},min:function(a,e){return a+" perlulah sekurang-kurangnya mempunyai "+e[0]+" karakter."},min_value:function(a,e){return a+" perlulah bernilai "+e[0]+" atau lebih."},numeric:function(a){return a+" perlulah mempunyai hanya karakter angka sahaja."},regex:function(a){return"Format "+a+" tidak sah."},required:function(a){return a+" adalah wajib."},size:function(a,e){return"Saiz "+a+" perlulah kurang daripada "+function(a){var e=1024,n=0==(a=Number(a)*e)?0:Math.floor(Math.log(a)/Math.log(e));return 1*(a/Math.pow(e,n)).toFixed(2)+" "+["Byte","KB","MB","GB","TB","PB","EB","ZB","YB"][n]}(e[0])+"."},url:function(a){return a+" bukan URL yang sah."}},attributes:{}};return"undefined"!=typeof VeeValidate&&VeeValidate.Validator.localize(((a={})[e.name]=e,a)),e});