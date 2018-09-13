/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/2016/05/05/too-much-information.html","f0cbc8d3dc8eff5c0fb950c7443f8ab9"],["/404.html","a017010e61341e052697e6984072f5de"],["/about.html","d6941b6310e55129a976758efa2c6eb5"],["/assets/css/main.css","ece10e1ac7d9e87242a8df741a3016dd"],["/assets/img/favicon.jpg","62a368372094d2c7d6c28ac29ff6f2c2"],["/assets/img/favicon.png","62a368372094d2c7d6c28ac29ff6f2c2"],["/assets/img/icons/android-chrome-192x192.png","4df4c8779d47bcaa69516050281773b9"],["/assets/img/icons/android-chrome-256x256.png","939ec88a61f407945a27d867fca1651d"],["/assets/img/icons/apple-touch-icon.png","366666899d15cf8f6811cc73ee0d63de"],["/assets/img/icons/favicon-16x16.png","f625044491b20a5df78571ba266cbcf6"],["/assets/img/icons/favicon-32x32.png","67502381e45848a4ab76123364675ffe"],["/assets/img/icons/icon-github.svg","4e06335104a29f91e08d4ef420da7679"],["/assets/img/icons/icon-instagram.svg","1e1119e2628235ee4c8771bff15eb2ca"],["/assets/img/icons/icon-twitter.svg","30551913d5399d6520e8a74b6f1e23f0"],["/assets/img/icons/mstile-150x150.png","1cea2ceb806d1a018330a51a1d8b73b6"],["/assets/img/icons/safari-pinned-tab.svg","398ef6b25c0f7f3f6e54c112a8facc5f"],["/assets/img/posts/analytics.jpg","2891d2e9d206f68bdf2316b7a3acc4cc"],["/assets/img/posts/analytics_lg.jpg","9c5ecf351c61796c92154c2e537ae4f4"],["/assets/img/posts/analytics_md.jpg","093106357730cb444866bc4fa429210c"],["/assets/img/posts/analytics_placehold.jpg","4a55645837e6703e196a3b7fbd9f523b"],["/assets/img/posts/analytics_sm.jpg","ba4b578fe35472baeb0f69549fa65457"],["/assets/img/posts/analytics_thumb.jpg","f209012cd59fd8ec5402d304848cadb8"],["/assets/img/posts/analytics_thumb@2x.jpg","196239275416e560f731b9533bc64889"],["/assets/img/posts/analytics_xs.jpg","0394eaeb3165825e35a8c0d622925079"],["/assets/img/posts/apple.jpg","224394b072a34f5fed916bcbc7a8f050"],["/assets/img/posts/apple_lg.jpg","9ff5f2b1248e99d9e2caa57c69578eb7"],["/assets/img/posts/apple_md.jpg","b0c52e1e0e196f5725d235ae5f8de4ca"],["/assets/img/posts/apple_placehold.jpg","c8bb99d761e410d20baad7e0c6f78d81"],["/assets/img/posts/apple_sm.jpg","01b3d25ddcf8718ae89820b7ef90dd58"],["/assets/img/posts/apple_thumb.jpg","0704f6a9e33839bff65c573f0db3218d"],["/assets/img/posts/apple_thumb@2x.jpg","765b51ce35d0a65f840e8c037ab04186"],["/assets/img/posts/apple_xs.jpg","04aadcb4e0c3b545ee73b9084beb9ee8"],["/assets/img/posts/board.jpg","b4f8e770dc3876ce50f76862976799dc"],["/assets/img/posts/board_lg.jpg","156734008cfe8cbdb6464aa11b4e8b03"],["/assets/img/posts/board_md.jpg","9173b3e3c4793c8b7d3515e2f89aa708"],["/assets/img/posts/board_placehold.jpg","33f0cd9581f0b0be2f69a2888abacd20"],["/assets/img/posts/board_sm.jpg","30e48cd818cae26942acf8f5f05e0e63"],["/assets/img/posts/board_thumb.jpg","fe753ef16254ada5952362dacd523576"],["/assets/img/posts/board_thumb@2x.jpg","3516ddbc4fcb340a6ee4951c1fcbb28f"],["/assets/img/posts/board_xs.jpg","dce5dd3758e8c0072910ee305217329b"],["/assets/img/posts/calculator.jpg","da3dcb3ed808ec70c350a3550cab2e9f"],["/assets/img/posts/calculator_lg.jpg","7ef970815e1afb0a4ed7818e91bd5263"],["/assets/img/posts/calculator_md.jpg","d333a4377931979111f4578b33d78f7c"],["/assets/img/posts/calculator_placehold.jpg","a2936af62b727650fdce149319408aa7"],["/assets/img/posts/calculator_sm.jpg","8c01dbc581d22fae035d6a3bf0572074"],["/assets/img/posts/calculator_thumb.jpg","38d7a973db71916ea253ca16c50f4618"],["/assets/img/posts/calculator_thumb@2x.jpg","4655d57d3442de2189b5b194d27052ab"],["/assets/img/posts/calculator_xs.jpg","9c0e8d4b41aa9af21c204a65b5e18bcd"],["/assets/img/posts/chimp.jpg","dab73c210248fd51ab1c8ec5486dcc28"],["/assets/img/posts/chimp_lg.jpg","c551d3b3ea7273f93f4545fd5103c053"],["/assets/img/posts/chimp_md.jpg","ea3323f78b7ae114072ecc74b3f0a809"],["/assets/img/posts/chimp_placehold.jpg","d9798731d41229c5c08d7dc0c25cce21"],["/assets/img/posts/chimp_sm.jpg","a7e809bd501655e57743e3b97b199a29"],["/assets/img/posts/chimp_thumb.jpg","385ed3ac1becc730f6981b43bb9afa53"],["/assets/img/posts/chimp_thumb@2x.jpg","79b6bd9a1a896934cfdf4acb759ad71b"],["/assets/img/posts/chimp_xs.jpg","304cbf27454bc9c76eecf137a97cc1fb"],["/assets/img/posts/code.jpg","2d618fcf8bb99354cc01bf0165a66e73"],["/assets/img/posts/code_lg.jpg","f540f51c926dc35094c26ad3c9bd8b1d"],["/assets/img/posts/code_md.jpg","cf94d11c3fe99d8a7d09a13a4669d4bb"],["/assets/img/posts/code_placehold.jpg","8e5238dd6571252f55571a0d0f6c478c"],["/assets/img/posts/code_sm.jpg","0533bfce24405e4ea9937471b97e0b05"],["/assets/img/posts/code_thumb.jpg","f21d0296737e15f9cad32012d7d5bb42"],["/assets/img/posts/code_thumb@2x.jpg","123250750667e8694a2d94186df78947"],["/assets/img/posts/code_xs.jpg","a3e7cedfaf23d2d273d42891b28df593"],["/assets/img/posts/comments.jpg","b33c9ddb656c1c4a26833ed68917bef1"],["/assets/img/posts/comments_lg.jpg","792adb039348bb4eae72ee6b9e269808"],["/assets/img/posts/comments_md.jpg","5deee5444ccc41d764e0f60cdfe04bf6"],["/assets/img/posts/comments_placehold.jpg","4fc63080a36729fed1806811592a3479"],["/assets/img/posts/comments_sm.jpg","b7496b4ae545a12e6b4d81bccdc94808"],["/assets/img/posts/comments_thumb.jpg","32ca93e3c59aa1e2f9f8f46038e9c47b"],["/assets/img/posts/comments_thumb@2x.jpg","dd077294a3b67a14837ac2cf642b1458"],["/assets/img/posts/comments_xs.jpg","0c3a450a531fb71de76ea4c64572b141"],["/assets/img/posts/computer.jpg","6ac16e20913ab5bd8546fecb939048b3"],["/assets/img/posts/computer_lg.jpg","f2b74bb3be8e22b256e11ca689798f3e"],["/assets/img/posts/computer_md.jpg","69237b02f43d6cebb2152d5bb78ee35f"],["/assets/img/posts/computer_placehold.jpg","9001cfbca71c403eb5ef859e51c9ae5e"],["/assets/img/posts/computer_sm.jpg","fce6e14e6d05f97ba1832c67053d0d2c"],["/assets/img/posts/computer_thumb.jpg","31eed20f4104a8c602cd9f58009c10a8"],["/assets/img/posts/computer_thumb@2x.jpg","fb44934a8eaf1885c7b16230831a8dd0"],["/assets/img/posts/computer_xs.jpg","0d0054d3e96befc87f2d9da1925f97b4"],["/assets/img/posts/database.jpg","6b6ac153b2a3b8e9dfb70875a96862b0"],["/assets/img/posts/database_lg.jpg","78d01504f84ce53e450a9917f226d086"],["/assets/img/posts/database_md.jpg","69542c5cf86457e0a2d00e5c5cf97ba7"],["/assets/img/posts/database_placehold.jpg","c7959f1dfdd44a6b52961f2a91c5ff9d"],["/assets/img/posts/database_sm.jpg","d865c1f85092e71a4a4f2f8a3a4f29c5"],["/assets/img/posts/database_thumb.jpg","2674a627f3e493a0094c60dedec99058"],["/assets/img/posts/database_thumb@2x.jpg","cd395c522822f5d78c107dbc8e1a0dc6"],["/assets/img/posts/database_xs.jpg","6aba036bd8b2964883eac8b368c13a9d"],["/assets/img/posts/django_girls.jpg","121bdf613bfdc5a7375398421fcec789"],["/assets/img/posts/django_girls_lg.jpg","121bdf613bfdc5a7375398421fcec789"],["/assets/img/posts/django_girls_md.jpg","78ead6dc9488249de4e48f33132b7aa9"],["/assets/img/posts/django_girls_placehold.jpg","458b926e77aab9d2bcc6a6c57a9eb6e6"],["/assets/img/posts/django_girls_sm.jpg","581c96d8e5e81c68945674536d4c3ce9"],["/assets/img/posts/django_girls_thumb.jpg","b198db4c40f924d1d5f18acf28cca4a3"],["/assets/img/posts/django_girls_thumb@2x.jpg","c7563b38069e199c6e9781e16b0bf76a"],["/assets/img/posts/django_girls_xs.jpg","4291a7384f1838d1d289beeac8c6108b"],["/assets/img/posts/emile-perron-190221.jpg","4705474281b975b7a213b96e71f772e7"],["/assets/img/posts/emile-perron-190221_lg.jpg","aafe35b1dc6d9dc9293c8c2ef4121046"],["/assets/img/posts/emile-perron-190221_md.jpg","03ed35ed656429599daba312f0990a0f"],["/assets/img/posts/emile-perron-190221_placehold.jpg","67f40708f69ab671cee04d624258b85c"],["/assets/img/posts/emile-perron-190221_sm.jpg","4ce4178a62d5a456e90e7bc47bde50f5"],["/assets/img/posts/emile-perron-190221_thumb.jpg","f20085dfe2e36854f8a12f1fd6c50425"],["/assets/img/posts/emile-perron-190221_thumb@2x.jpg","b8fa22c3237de529316037f093b9cb4d"],["/assets/img/posts/emile-perron-190221_xs.jpg","ac32cbd525d72e932499668af5647d03"],["/assets/img/posts/feedback.jpg","1d75942c93d62616495878625538fe2c"],["/assets/img/posts/feedback_lg.jpg","869243bea7683c1c5ae73e1d4a7644d5"],["/assets/img/posts/feedback_md.jpg","d6306a04a562b262bd27fb60052f35b8"],["/assets/img/posts/feedback_placehold.jpg","98e8de62d170a6765bf3f54188bac3cd"],["/assets/img/posts/feedback_sm.jpg","7631d6be5d34d10c7100b50d7cd99a4f"],["/assets/img/posts/feedback_thumb.jpg","c2f6ae3914494f77e22575fa4145cbae"],["/assets/img/posts/feedback_thumb@2x.jpg","bd25ad744790c202b0e919b8ce6a6201"],["/assets/img/posts/feedback_xs.jpg","4bf0a7d5719839d29ee7000cfda937ed"],["/assets/img/posts/free.jpg","0774c510e1dafa9a9e7a431f9aff4283"],["/assets/img/posts/free_lg.jpg","6a120ac63246873994cc227c4d2fb736"],["/assets/img/posts/free_md.jpg","141409908e2f613581ad3212ef357eae"],["/assets/img/posts/free_placehold.jpg","bc5698551d1d8b04a97039ec14e6942f"],["/assets/img/posts/free_sm.jpg","a3d51526f18b3d78c9c206be5fa5190a"],["/assets/img/posts/free_thumb.jpg","9a39fd0e5d3d370d5847d5b10827c321"],["/assets/img/posts/free_thumb@2x.jpg","fd6ad52bb49adf705c9352c7e9a50bbb"],["/assets/img/posts/free_xs.jpg","7634dd4dc55b46fd5b3cab5b28dd9b41"],["/assets/img/posts/idea.jpg","51bad8af80d54170eda925c19ed4c4cc"],["/assets/img/posts/idea_lg.jpg","76b71613dc166f9b77b0ceb2aac075d8"],["/assets/img/posts/idea_md.jpg","39aaba08bdadcbe78ce1d2f7b6e9f155"],["/assets/img/posts/idea_placehold.jpg","0b78c8d2d8cbd2c162639cf6381dea7b"],["/assets/img/posts/idea_sm.jpg","744d147bc0c82ce3eda2d82a0f9ba268"],["/assets/img/posts/idea_thumb.jpg","36878649a19699e3c00e87784a95210e"],["/assets/img/posts/idea_thumb@2x.jpg","0e4a0c51286d76bd21e81c12bd1d533f"],["/assets/img/posts/idea_xs.jpg","68a80347e97ddbe06f927d2e7a718a1e"],["/assets/img/posts/mountain.jpg","9b629962cb9220ec20416159292cbbaa"],["/assets/img/posts/mountain_lg.jpg","027d3796fdaa1db38d5f3e6c6a652046"],["/assets/img/posts/mountain_md.jpg","a1e3a73fb6519d519d22ec49e46d36b9"],["/assets/img/posts/mountain_placehold.jpg","03ef38ffb2df4642af6c1b2627a78f8e"],["/assets/img/posts/mountain_sm.jpg","9560ae7026cf241f0f2bf23a48ec90d8"],["/assets/img/posts/mountain_thumb.jpg","4d870ae2096f5ea4044dbfe9a0b551c7"],["/assets/img/posts/mountain_thumb@2x.jpg","cbb396dd312711cbef1baa89222fd4de"],["/assets/img/posts/mountain_xs.jpg","68adc2cd996b7d9a9b55af91ad44ac29"],["/assets/img/posts/ocean.jpg","9f4a78c11b7861a22e4671c5480fdc94"],["/assets/img/posts/ocean_lg.jpg","c4741c0b40f1e0e6921d1671199fa5af"],["/assets/img/posts/ocean_md.jpg","b411b2a0268d4ad6ea293ea2ce4382b5"],["/assets/img/posts/ocean_placehold.jpg","c91904ca78f72112ca2aec85a6de3461"],["/assets/img/posts/ocean_sm.jpg","88e78e9f1772c0dc5ec9a78786459078"],["/assets/img/posts/ocean_thumb.jpg","5a4adfabcb78409371f4544c6c339b1a"],["/assets/img/posts/ocean_thumb@2x.jpg","787eda21f82a4e3100808f2d0c2700a7"],["/assets/img/posts/ocean_xs.jpg","4f23cb28f515cb7112d69d8c24cf2a3b"],["/assets/img/posts/oceanographer.jpg","eae5d52d380cb7072617d3dd97938f65"],["/assets/img/posts/oceanographer_lg.jpg","eae5d52d380cb7072617d3dd97938f65"],["/assets/img/posts/oceanographer_md.jpg","eae5d52d380cb7072617d3dd97938f65"],["/assets/img/posts/oceanographer_placehold.jpg","25b08a575c4c371741d2ce8f334bedfd"],["/assets/img/posts/oceanographer_sm.jpg","de739885ba9211f6575a9ddade9ef727"],["/assets/img/posts/oceanographer_thumb.jpg","97471cf3aef37283826d2c6bb342c181"],["/assets/img/posts/oceanographer_thumb@2x.jpg","eae5d52d380cb7072617d3dd97938f65"],["/assets/img/posts/oceanographer_xs.jpg","ea193c79d367479e475029b6f90d653c"],["/assets/img/posts/open.jpg","b0c181e2ed9e20e914f7d5dfb67eddb9"],["/assets/img/posts/open_lg.jpg","501135064f966042e9991e320c94a8f5"],["/assets/img/posts/open_md.jpg","917f42ffe565460135ddbe3346680a75"],["/assets/img/posts/open_placehold.jpg","228bbe7593f188bda594f5e71c10a09d"],["/assets/img/posts/open_sm.jpg","75329c9ff452438904bf5888999f74ff"],["/assets/img/posts/open_thumb.jpg","6b45d8ba102080dc129e1b75aafc0ec6"],["/assets/img/posts/open_thumb@2x.jpg","53e10b63e56dddb508f28c6ca974c4bc"],["/assets/img/posts/open_xs.jpg","aae5a57047b559d8ed8727ce26522686"],["/assets/img/posts/outlier.jpg","0a680f5d1fd3b7c0662460650bfcd250"],["/assets/img/posts/outlier_lg.jpg","0ee00416068bfcfaf7803c5bf06415b5"],["/assets/img/posts/outlier_md.jpg","1486dfc266861478dcd896e71fd542c6"],["/assets/img/posts/outlier_placehold.jpg","8ec2cedc769e4de2d1885e5435be1aa3"],["/assets/img/posts/outlier_sm.jpg","00ac3ffac68a0f11ab3ec0340f7d3342"],["/assets/img/posts/outlier_thumb.jpg","511fdf8324c7f4a7bb3cbd316999fd2d"],["/assets/img/posts/outlier_thumb@2x.jpg","cd4f12d06572f8468da09b1f41ac6ca6"],["/assets/img/posts/outlier_xs.jpg","f754f3baf789ff1e432d9b49ef2df14a"],["/assets/img/posts/panda.jpg","485b4efb6f12bf71b1f5b51c343fef36"],["/assets/img/posts/panda_lg.jpg","e37e27081455789ac6f4a1be1a175e52"],["/assets/img/posts/panda_md.jpg","0ccf9cb6795da1d95f8db918830119ba"],["/assets/img/posts/panda_placehold.jpg","d757072ebac33cd5332a72285a71ebf0"],["/assets/img/posts/panda_sm.jpg","00f4210ee4a0b38f7db22a2cae711837"],["/assets/img/posts/panda_thumb.jpg","42c39cd7a00ac04715f0129f50ba3d60"],["/assets/img/posts/panda_thumb@2x.jpg","79ae816eb90d128655db28a49121248b"],["/assets/img/posts/panda_xs.jpg","5743b8641682fb417ca06c8de4087567"],["/assets/img/posts/plane.jpg","357360c9adf4ff9dbcaf282fa1e4e2dd"],["/assets/img/posts/plane_lg.jpg","7bfc11a7838e17cd4b251a2162897222"],["/assets/img/posts/plane_md.jpg","ff9ee38458c2665eb9329acb01ffc1ba"],["/assets/img/posts/plane_placehold.jpg","1ee8d88ce9507a76c6275df1b3318d55"],["/assets/img/posts/plane_sm.jpg","b22416d9e5a49278ca46727280915134"],["/assets/img/posts/plane_thumb.jpg","2a77d36681a546debce153dac3c31cb3"],["/assets/img/posts/plane_thumb@2x.jpg","11425624af07e26e4578dbdba76470d3"],["/assets/img/posts/plane_xs.jpg","69466f26b3d1688c4c7c977858f0a81f"],["/assets/img/posts/pycon.jpg","1e105879897fc04eb318e6c2bd425a9b"],["/assets/img/posts/pycon_lg.jpg","1e105879897fc04eb318e6c2bd425a9b"],["/assets/img/posts/pycon_md.jpg","1e105879897fc04eb318e6c2bd425a9b"],["/assets/img/posts/pycon_placehold.jpg","e9b9b6c5fe9eb9d495ece9984bb4df77"],["/assets/img/posts/pycon_sm.jpg","96da39626795c0b2c09fe4b8ad8bafe7"],["/assets/img/posts/pycon_thumb.jpg","7e175e95fbb4b6cd59d7b906c6918c7e"],["/assets/img/posts/pycon_thumb@2x.jpg","1e105879897fc04eb318e6c2bd425a9b"],["/assets/img/posts/pycon_xs.jpg","bed441e393f758fb8934714dc4af5a31"],["/assets/img/posts/pysul-organizacao.jpg","d1b4873963f68cd4a7ce906e8a9dfbc9"],["/assets/img/posts/pysul-organizacao_lg.jpg","d1b4873963f68cd4a7ce906e8a9dfbc9"],["/assets/img/posts/pysul-organizacao_md.jpg","314d42cea19ab2ca2aebecc52893d8fb"],["/assets/img/posts/pysul-organizacao_placehold.jpg","e6ca597f86492a0e75df7f985c5a581b"],["/assets/img/posts/pysul-organizacao_sm.jpg","0ac5043ef0e12a7d5c89fcee5fb3d1d6"],["/assets/img/posts/pysul-organizacao_thumb.jpg","f4fc3acbd1b9bd9e5b3a753ca3ecc728"],["/assets/img/posts/pysul-organizacao_thumb@2x.jpg","0365afeb97e0fd20aa18e1807ad47914"],["/assets/img/posts/pysul-organizacao_xs.jpg","38b219509ff4bed5148958767b5853af"],["/assets/img/posts/pysul.jpg","1367a67b44453ab0ee14a116a930f50d"],["/assets/img/posts/pysul_lg.jpg","5b9520405a1866a39d46466666cf5b5d"],["/assets/img/posts/pysul_md.jpg","8e80dd5ba5140beb5403ad7bcd4a2e47"],["/assets/img/posts/pysul_placehold.jpg","785cc4856f93a9c1f3a340551afc08b7"],["/assets/img/posts/pysul_sm.jpg","b733b80a852a314fda8378bb7d0c92d6"],["/assets/img/posts/pysul_thumb.jpg","dbe28c38f5bfe8593e402ee417fa7713"],["/assets/img/posts/pysul_thumb@2x.jpg","92272318ddf7ba32f75951a3c7ba3693"],["/assets/img/posts/pysul_xs.jpg","e5cebca2719098c555318fbc55c41987"],["/assets/img/posts/rest.jpg","f023a5ad71dbe0283b658662897290a4"],["/assets/img/posts/rest_lg.jpg","6a175423eb2e6c3e954eb959b72fd802"],["/assets/img/posts/rest_md.jpg","e1806e0296b78cf3f4c99d47c69fb8af"],["/assets/img/posts/rest_placehold.jpg","a1b13dbe8bedb554c81e89e8af18a5c1"],["/assets/img/posts/rest_sm.jpg","79f8f88be15cb8de5cb5e32aa6389bb7"],["/assets/img/posts/rest_thumb.jpg","8d17717870e8fff1b40017cdf581f4a5"],["/assets/img/posts/rest_thumb@2x.jpg","dfb90fd13900bb295b1db22318a0d9b8"],["/assets/img/posts/rest_xs.jpg","ce9cad7750123f22358b8f5c1748fb31"],["/assets/img/posts/shane-rounce-205187.jpg","bb774d6e05b2b55ffdabe11a8aac7c56"],["/assets/img/posts/shane-rounce-205187_lg.jpg","83cd838024fff9c3faec59fa1da97872"],["/assets/img/posts/shane-rounce-205187_md.jpg","628cf27bf658cf6de9df79ab9bf2cb2d"],["/assets/img/posts/shane-rounce-205187_placehold.jpg","249fc4a09bcfcbd7d5764f14c14ae82e"],["/assets/img/posts/shane-rounce-205187_sm.jpg","a2400a468e10d7d64528ac9c6bc3b6f0"],["/assets/img/posts/shane-rounce-205187_thumb.jpg","c3b2dd0d95a6d3a44d7702f8c06b1e78"],["/assets/img/posts/shane-rounce-205187_thumb@2x.jpg","b0722b63a92c92a44cd92c0201fc92a4"],["/assets/img/posts/shane-rounce-205187_xs.jpg","cd58fd23f3b3c1de2183beb9ed08327b"],["/assets/img/posts/sleek.jpg","a32252a618ffe8ae57c9ce9ab157a01b"],["/assets/img/posts/sleek_lg.jpg","95a1338aa524727f34950f269133e904"],["/assets/img/posts/sleek_md.jpg","4e35ceb2f5fffd3d758fade699b0b85a"],["/assets/img/posts/sleek_placehold.jpg","0f48050cd7776895b98c6ce21597ff39"],["/assets/img/posts/sleek_sm.jpg","f30af3d30b7df905d962e494750f5da0"],["/assets/img/posts/sleek_thumb.jpg","f7b8a94ac9da8e5ea36bb9e459872400"],["/assets/img/posts/sleek_thumb@2x.jpg","e67e2129dc58a100b98a5e027c964dbc"],["/assets/img/posts/sleek_xs.jpg","c8212cace6d446950556a3bf6efe4520"],["/assets/img/posts/too-many-books.jpg","ab3cf8f5744433e092a2773b501bee6f"],["/assets/img/posts/too-many-books_lg.jpg","89280c874263bb1e9fe852e6aa2cf19d"],["/assets/img/posts/too-many-books_md.jpg","3771fc79aac733a2fcb3f4f2cdb3605d"],["/assets/img/posts/too-many-books_placehold.jpg","9710910d400891b1b20521963e0493a0"],["/assets/img/posts/too-many-books_sm.jpg","64bc4230b1b09c08e4ad03dd75484a6a"],["/assets/img/posts/too-many-books_thumb.jpg","421bd84d477ee31f95f29e41464414a8"],["/assets/img/posts/too-many-books_thumb@2x.jpg","90e136331b72071aa39ee3671418c3e3"],["/assets/img/posts/too-many-books_xs.jpg","3dafcb782e9b9a774b4a25b5ef7279d0"],["/assets/img/posts/type-machine.jpg","5d4228d3011ca7a7d7692a90f45c96c1"],["/assets/img/posts/type-machine_lg.jpg","2f728a488add3ac4240e37f0c5ce79d1"],["/assets/img/posts/type-machine_md.jpg","93737c1b07c46b71ade6770ea0395c52"],["/assets/img/posts/type-machine_placehold.jpg","c680e395bd0aaed718d53ae4f4284909"],["/assets/img/posts/type-machine_sm.jpg","6158f75802bd321498f12ccdc4714784"],["/assets/img/posts/type-machine_thumb.jpg","efb170a6a047bae982a5f253f7845b8e"],["/assets/img/posts/type-machine_thumb@2x.jpg","463d43107bc7447c0f27bfab37b2ac9e"],["/assets/img/posts/type-machine_xs.jpg","ba4f4003968c76e1f00be9fafcccdfa6"],["/assets/img/posts/woman-tech.jpg","303c4d99cda63c8bf08fad9f1bba7160"],["/assets/img/posts/woman-tech_lg.jpg","b2283f407a46052ff4943b589b54c2fe"],["/assets/img/posts/woman-tech_md.jpg","4c957874c65e238d68f4c6f3e8b5745c"],["/assets/img/posts/woman-tech_placehold.jpg","fe1a4387c0915a22bd5bd6a6b4c26e70"],["/assets/img/posts/woman-tech_sm.jpg","1bb6f9d8fbcb22cf395335fb4ce3439d"],["/assets/img/posts/woman-tech_thumb.jpg","c0423645ca0990967246343c26c87b5f"],["/assets/img/posts/woman-tech_thumb@2x.jpg","da2be35e6d06b301420e9778378d6a9c"],["/assets/img/posts/woman-tech_xs.jpg","0ce599fcbd95fdae3be9121c0e172475"],["/assets/img/posts/women-tech.jpg","8d67b19f6c315f349a29a258fe0824c1"],["/assets/img/posts/women-tech_lg.jpg","36687ddc593c4603f4b8bf97e89bb225"],["/assets/img/posts/women-tech_md.jpg","19ab6cbe329024e506f3cf53d3a60c4d"],["/assets/img/posts/women-tech_placehold.jpg","ea5882f0b5e7388b22eff8566a257c80"],["/assets/img/posts/women-tech_sm.jpg","39ad8e10a7dd937dfff7df7714662b5b"],["/assets/img/posts/women-tech_thumb.jpg","d9b7e9d8cc1d4463617ca0144c175b85"],["/assets/img/posts/women-tech_thumb@2x.jpg","14eac6b9ba04cfeef4dfcd430503d640"],["/assets/img/posts/women-tech_xs.jpg","356627e3ab1090ef62ee822fca784277"],["/assets/img/posts/words.jpg","85de69803e1b53692ce71886f96fdf00"],["/assets/img/posts/words_lg.jpg","651108862cb6de65321db57843cb55bf"],["/assets/img/posts/words_md.jpg","6a9ea2b6b810edd1afc0b9eb2934faa9"],["/assets/img/posts/words_placehold.jpg","81348a1105ce41217208b69b70bca2af"],["/assets/img/posts/words_sm.jpg","98b511049fef401ea4ba4341aebe0546"],["/assets/img/posts/words_thumb.jpg","ecdc1b4f80c1a4e33e113d341ff7145b"],["/assets/img/posts/words_thumb@2x.jpg","02189d92fdbf8e0d220c9d23cb754654"],["/assets/img/posts/words_xs.jpg","fa4b609833c665d8d9f2f86e185f3ffd"],["/assets/js/bundle.js","df854a763d7d3fd95381b95081eb822f"],["/category/cheatlists.html","635a39c86300f069f753057cc39de929"],["/category/english_posts.html","ebaa6a7e3a33dbdd6d4b871f8cded171"],["/category/pt-br_posts.html","c09c7ebd2ba63d5b9644e79744c74f97"],["/cheatlist/2017/11/22/pandas-cheat-list.html","e996c21e3ffb9634e9ea002714f8ce0b"],["/cheatlist/2018/01/05/git-cheat-list.html","c881bd9bcbde479e28cd536fe46040af"],["/cheatlist/2018/05/01/sklearn-cheat-list.html","dded24e307bf9ba1f32ff456a5e0b6b5"],["/cheatlist/2018/05/20/models-cheat-list.html","9eb78d2528561fe72cb1c95f6dc35703"],["/community.html","83955958faf8034a2f83667ff0b73024"],["/curriculum.html","a0e40849eda96144ed2179ea21ce1190"],["/english/2016/03/16/from-oceanographer-to-programmer.html","5f7bebdd97982246fc5dd696e6748d8e"],["/english/2016/03/24/the-same-old-story.html","477895e7b0c53c146a771094deb4546e"],["/english/2016/05/11/are-we-getting0the-wrong-career-advises.html","9d65206340148c1097322da74c30a5c9"],["/english/2016/06/07/a-tale-of-a-kingdom-far-far-away.html","bc61d070a5154fa3c8006dd623e2d42b"],["/english/2016/12/29/dev-for-dummies.html","1bbd434efb1eb3b16a5f29dfa5849157"],["/english/2017/03/09/how-to-review-someone-elses-code.html","fe8f6578f35ef18ff96e490fdc926583"],["/english/2017/03/14/generic-relations.html","68b726ae9d62cd3ea37e069821fb6e00"],["/english/2017/03/21/my-first-year-as-a-developer.html","53721853aa764b4674b98f468769feed"],["/english/2017/04/03/make-endpoints-using-restless.html","b0d064bca2ddb32bf16fb92ae29af279"],["/english/2017/04/19/ambicious-women.html","59cc92c089cf9a79344997fcf4308d7e"],["/english/2017/10/27/how-to-run-parallel-processes.html","169506566c97dcf0a3bb02076e0b639d"],["/english/2017/11/24/classe-based-views-on-django.html","7ec5766fea39fd9a2f30261ea39e11a5"],["/english/2018/03/20/how-to-contribute-to-open-source.html","ad7d332f3b114984d927688ba27d556e"],["/english/2018/07/22/10-tips-matlab-to-python.html","74a7d8b016216372cf7ee98909c249bb"],["/english/2018/08/23/mongo-db-python-and-mongoengine.html","624e5e5a499e4163764b4d8f123d8173"],["/favicon.png","62a368372094d2c7d6c28ac29ff6f2c2"],["/findme.html","bb18b4dad9ad85e62a90f5c68e428e55"],["/index.html","71a9e0bcf28ad3e1fedea0e13cca990f"],["/lp.png","eaeab263fd8eff2e9ebe40a9d4325051"],["/pt-br/2016/03/13/de-oceanografa-para-programadora.html","4381f4088aa3a40a592401b33ee6ce42"],["/pt-br/2016/10/11/dev-para-leigos.html","44fd10f842cd21b84dc6e6124b33aff9"],["/pt-br/2016/11/01/como-revisar-codigo-alheio.html","faba02d243143aa7148e143eabd2660a"],["/pt-br/2016/12/29/relacoes-genericas-do-django.html","1adbe6fabf11e3d1ce542bde3a096225"],["/pt-br/2017/01/10/um-agradecimento.html","21d24f9a2a7c2be7896c892aa3dccf9f"],["/pt-br/2017/03/01/meu-primeiro-ano-como-dev.html","cc2b95a00b137bafa369b6c2f4874473"],["/pt-br/2017/04/08/mulheres-ambiciosas.html","ffb4ee6148acd6f363b5208017fb9d1f"],["/pt-br/2017/04/17/como-contribuir-com-open-source.html","dc505b3001db3c697aa250fb0f41d7f5"],["/pt-br/2017/05/06/10-dicas-matlab-para-python.html","589421c73855d4e7ed749310a98dc87d"],["/pt-br/2017/09/28/classe-based-views-no-django.html","4ebdc32dd7b548d5f429f2d2c87b741f"],["/pt-br/2017/10/27/processos-paralelos.html","ec26405442b249389fedd1bae17bd7f3"],["/pt-br/2017/10/28/um-conto-da-montanha.html","e7f645e507ad335fc06a9caf291641cb"],["/pt-br/2017/11/30/brincando-de-nlp-com-spacy.html","050db1558d390aa44950b31e18b24608"],["/pt-br/2018/01/08/um-breve-estudo-sobre-outliers-2.html","f7d6c69009be8ab05f568f38886eaefc"],["/pt-br/2018/01/08/um-breve-estudo-sobre-outliers.html","71d6a4dc56965a70749c15c69c05e584"],["/pt-br/2018/01/24/se-eu-puder-te-ajudar.html","b180500d3c70c07f21f3439e9dc1d9cf"],["/pt-br/2018/03/15/mulheres-ti-carreira-prioridades.html","5049f47a1dcd6434e09c7022e7c10dee"],["/pt-br/2018/04/21/pysul18-minha-experiencia.html","0e5b6021902ad3a39c974839f6dff582"],["/pt-br/2018/04/23/pysul18-organizacao.html","f4165593ed13b6f230c9ddbab4f11225"],["/pt-br/2018/05/07/pytricks-I.html","d0470d71fab309b2f852c32f8f58066a"],["/pt-br/2018/08/24/mongo-db-python-e-mongoengine.html","6e5f1122472c1d6259a3ee1bb458a3dc"],["/search.html","3b34b1aef47182475a64b905368a92ad"],["/sw.js","a6d81b96f876726337e01d7aab25ef9b"],["/tags.html","67ea0cb07d551c7d1498c8cbc57323a5"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function (originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







