jQuery.fn.emojiConvert = function() {
    var emoji_arr = new Array();
    emoji_arr["e00a"] = "1f4f1";
    emoji_arr["e00b"] = "1f4e0";
    emoji_arr["e00c"] = "1f4bb";
    emoji_arr["e00d"] = "1f44a";
    emoji_arr["e00e"] = "1f44d";
    emoji_arr["e00f"] = "261d";
    emoji_arr["e001"] = "1f466";
    emoji_arr["e01a"] = "1f434";
    emoji_arr["e01b"] = "1f697";
    emoji_arr["e01c"] = "26f5";
    emoji_arr["e01d"] = "2708";
    emoji_arr["e01e"] = "1f683";
    emoji_arr["e01f"] = "1f685";
    emoji_arr["e002"] = "1f467";
    emoji_arr["e02a"] = "1f556";
    emoji_arr["e02b"] = "1f557";
    emoji_arr["e02c"] = "1f558";
    emoji_arr["e02d"] = "23f0";
    emoji_arr["e02e"] = "1f55a";
    emoji_arr["e02f"] = "1f55b";
    emoji_arr["e003"] = "1f48b";
    emoji_arr["e03a"] = "26fd";
    emoji_arr["e03b"] = "1f5fb";
    emoji_arr["e03c"] = "1f3a4";
    emoji_arr["e03d"] = "1f4f9";
    emoji_arr["e03e"] = "1f3b5";
    emoji_arr["e03f"] = "1f511";
    emoji_arr["e004"] = "1f468";
    emoji_arr["e04a"] = "2600";
    emoji_arr["e04b"] = "2614";
    emoji_arr["e04c"] = "1f31b";
    emoji_arr["e04d"] = "1f304";
    emoji_arr["e04e"] = "1f47c";
    emoji_arr["e04f"] = "1f431";
    emoji_arr["e005"] = "1f469";
    emoji_arr["e05a"] = "1f4a9";
    emoji_arr["e006"] = "1f45a";
    emoji_arr["e007"] = "1f45f";
    emoji_arr["e008"] = "1f4f7";
    emoji_arr["e009"] = "1f4de";
    emoji_arr["e010"] = "270a";
    emoji_arr["e10a"] = "1f419";
    emoji_arr["e10b"] = "1f43d";
    emoji_arr["e10c"] = "1f47d";
    emoji_arr["e10d"] = "1f680";
    emoji_arr["e10e"] = "1f451";
    emoji_arr["e10f"] = "1f4a1";
    emoji_arr["e011"] = "270c";
    emoji_arr["e11a"] = "1f47f";
    emoji_arr["e11b"] = "1f47b";
    emoji_arr["e11c"] = "1f480";
    emoji_arr["e11d"] = "1f525";
    emoji_arr["e11e"] = "1f4bc";
    emoji_arr["e11f"] = "1f4ba";
    emoji_arr["e012"] = "270b";
    emoji_arr["e12a"] = "1f4fa";
    emoji_arr["e12b"] = "1f47e";
    emoji_arr["e12c"] = "303d";
    emoji_arr["e12d"] = "1f004";
    emoji_arr["e12e"] = "1f19a";
    emoji_arr["e12f"] = "1f4b5";
    emoji_arr["e013"] = "1f3bf";
    emoji_arr["e13a"] = "1f6bc";
    emoji_arr["e13b"] = "1f489";
    emoji_arr["e13c"] = "1f4a4";
    emoji_arr["e13d"] = "26a1";
    emoji_arr["e13e"] = "1f460";
    emoji_arr["e13f"] = "1f6c0";
    emoji_arr["e014"] = "26f3";
    emoji_arr["e14a"] = "1f4c8";
    emoji_arr["e14b"] = "1f4e1";
    emoji_arr["e14c"] = "1f4aa";
    emoji_arr["e14d"] = "1f3e6";
    emoji_arr["e14e"] = "1f6a5";
    emoji_arr["e14f"] = "1f17f";
    emoji_arr["e015"] = "1f3be";
    emoji_arr["e15a"] = "1f695";
    emoji_arr["e016"] = "26be";
    emoji_arr["e017"] = "1f3c4";
    emoji_arr["e018"] = "26bd";
    emoji_arr["e019"] = "1f3a3";
    emoji_arr["e020"] = "2753";
    emoji_arr["e20a"] = "267f";
    emoji_arr["e20b"] = "1f4f6";
    emoji_arr["e20c"] = "2665";
    emoji_arr["e20d"] = "2666";
    emoji_arr["e20e"] = "2660";
    emoji_arr["e20f"] = "2663";
    emoji_arr["e021"] = "2757";
    emoji_arr["e21a"] = "25fc";
    emoji_arr["e21b"] = "1f539";
    emoji_arr["e022"] = "2764";
    emoji_arr["e22a"] = "1f235";
    emoji_arr["e22b"] = "1f233";
    emoji_arr["e22c"] = "1f22f";
    emoji_arr["e22d"] = "1f23a";
    emoji_arr["e22e"] = "1f446";
    emoji_arr["e22f"] = "1f447";
    emoji_arr["e023"] = "1f494";
    emoji_arr["e23a"] = "25b6";
    emoji_arr["e23b"] = "25c0";
    emoji_arr["e23c"] = "23e9";
    emoji_arr["e23d"] = "23ea";
    emoji_arr["e23e"] = "1f52f";
    emoji_arr["e23f"] = "2648";
    emoji_arr["e024"] = "1f550";
    emoji_arr["e24a"] = "2653";
    emoji_arr["e24b"] = "26ce";
    emoji_arr["e24c"] = "1f51d";
    emoji_arr["e24d"] = "1f197";
    emoji_arr["e24e"] = "00a9";
    emoji_arr["e24f"] = "00ae";
    emoji_arr["e025"] = "1f551";
    emoji_arr["e026"] = "1f552";
    emoji_arr["e027"] = "1f553";
    emoji_arr["e028"] = "1f554";
    emoji_arr["e029"] = "1f555";
    emoji_arr["e030"] = "1f338";
    emoji_arr["e30a"] = "1f3a7";
    emoji_arr["e30b"] = "1f376";
    emoji_arr["e30c"] = "1f37b";
    emoji_arr["e30d"] = "3297";
    emoji_arr["e30e"] = "1f6ac";
    emoji_arr["e30f"] = "1f48a";
    emoji_arr["e031"] = "1f531";
    emoji_arr["e31a"] = "1f461";
    emoji_arr["e31b"] = "1f462";
    emoji_arr["e31c"] = "1f484";
    emoji_arr["e31d"] = "1f485";
    emoji_arr["e31e"] = "1f486";
    emoji_arr["e31f"] = "1f487";
    emoji_arr["e032"] = "1f339";
    emoji_arr["e32a"] = "1f499";
    emoji_arr["e32b"] = "1f49a";
    emoji_arr["e32c"] = "1f49b";
    emoji_arr["e32d"] = "1f49c";
    emoji_arr["e32e"] = "2747";
    emoji_arr["e32f"] = "2b50";
    emoji_arr["e033"] = "1f384";
    emoji_arr["e33a"] = "1f366";
    emoji_arr["e33b"] = "1f35f";
    emoji_arr["e33c"] = "1f361";
    emoji_arr["e33d"] = "1f358";
    emoji_arr["e33e"] = "1f35a";
    emoji_arr["e33f"] = "1f35d";
    emoji_arr["e034"] = "1f48d";
    emoji_arr["e34a"] = "1f346";
    emoji_arr["e34b"] = "1f382";
    emoji_arr["e34c"] = "1f371";
    emoji_arr["e34d"] = "1f372";
    emoji_arr["e035"] = "1f48e";
    emoji_arr["e036"] = "1f3e1";
    emoji_arr["e037"] = "26ea";
    emoji_arr["e038"] = "1f3e2";
    emoji_arr["e039"] = "1f689";
    emoji_arr["e040"] = "1f3b7";
    emoji_arr["e40a"] = "1f60c";
    emoji_arr["e40b"] = "1f628";
    emoji_arr["e40c"] = "1f637";
    emoji_arr["e40d"] = "1f633";
    emoji_arr["e40e"] = "1f612";
    emoji_arr["e40f"] = "1f630";
    emoji_arr["e041"] = "1f3b8";
    emoji_arr["e41a"] = "1f443";
    emoji_arr["e41b"] = "1f442";
    emoji_arr["e41c"] = "1f444";
    emoji_arr["e41d"] = "1f64f";
    emoji_arr["e41e"] = "1f44b";
    emoji_arr["e41f"] = "1f44f";
    emoji_arr["e042"] = "1f3ba";
    emoji_arr["e42a"] = "1f3c0";
    emoji_arr["e42b"] = "1f3c8";
    emoji_arr["e42c"] = "1f3b1";
    emoji_arr["e42d"] = "1f3ca";
    emoji_arr["e42e"] = "1f699";
    emoji_arr["e42f"] = "1f69a";
    emoji_arr["e043"] = "1f374";
    emoji_arr["e43a"] = "1f392";
    emoji_arr["e43b"] = "1f38f";
    emoji_arr["e43c"] = "1f302";
    emoji_arr["e43d"] = "1f492";
    emoji_arr["e43e"] = "1f30a";
    emoji_arr["e43f"] = "1f367";
    emoji_arr["e044"] = "1f379";
    emoji_arr["e44a"] = "1f307";
    emoji_arr["e44b"] = "1f30c";
    emoji_arr["e44c"] = "1f308";
    emoji_arr["e045"] = "2615";
    emoji_arr["e046"] = "1f370";
    emoji_arr["e047"] = "1f37a";
    emoji_arr["e048"] = "26c4";
    emoji_arr["e049"] = "2601";
    emoji_arr["e050"] = "1f42f";
    emoji_arr["e051"] = "1f43b";
    emoji_arr["e51a"] = "1f476";
    emoji_arr["e51b"] = "1f477";
    emoji_arr["e51c"] = "1f478";
    emoji_arr["e51d"] = "1f5fd";
    emoji_arr["e51e"] = "1f482";
    emoji_arr["e51f"] = "1f483";
    emoji_arr["e052"] = "1f436";
    emoji_arr["e52a"] = "1f43a";
    emoji_arr["e52b"] = "1f42e";
    emoji_arr["e52c"] = "1f430";
    emoji_arr["e52d"] = "1f40d";
    emoji_arr["e52e"] = "1f414";
    emoji_arr["e52f"] = "1f417";
    emoji_arr["e053"] = "1f42d";
    emoji_arr["e054"] = "1f433";
    emoji_arr["e055"] = "1f427";
    emoji_arr["e056"] = "1f60a";
    emoji_arr["e057"] = "1f63a";
    emoji_arr["e058"] = "1f61e";
    emoji_arr["e059"] = "1f620";
    emoji_arr["e101"] = "1f4eb";
    emoji_arr["e102"] = "1f4ee";
    emoji_arr["e103"] = "1f4e7";
    emoji_arr["e104"] = "1f4f2";
    emoji_arr["e105"] = "1f61c";
    emoji_arr["e106"] = "1f63b";
    emoji_arr["e107"] = "1f631";
    emoji_arr["e108"] = "1f613";
    emoji_arr["e109"] = "1f435";
    emoji_arr["e110"] = "1f33f";
    emoji_arr["e111"] = "1f48f";
    emoji_arr["e112"] = "1f4e6";
    emoji_arr["e113"] = "1f52b";
    emoji_arr["e114"] = "1f50e";
    emoji_arr["e115"] = "1f3c3";
    emoji_arr["e116"] = "1f528";
    emoji_arr["e117"] = "1f386";
    emoji_arr["e118"] = "1f341";
    emoji_arr["e119"] = "1f342";
    emoji_arr["e120"] = "1f354";
    emoji_arr["e121"] = "26f2";
    emoji_arr["e122"] = "26fa";
    emoji_arr["e123"] = "2668";
    emoji_arr["e124"] = "1f3a1";
    emoji_arr["e125"] = "1f3ab";
    emoji_arr["e126"] = "1f4bf";
    emoji_arr["e127"] = "1f4c0";
    emoji_arr["e128"] = "1f4fb";
    emoji_arr["e129"] = "1f4fc";
    emoji_arr["e130"] = "1f3af";
    emoji_arr["e131"] = "1f3c6";
    emoji_arr["e132"] = "1f3c1";
    emoji_arr["e133"] = "1f3b0";
    emoji_arr["e134"] = "1f40e";
    emoji_arr["e135"] = "1f6a4";
    emoji_arr["e136"] = "1f6b2";
    emoji_arr["e137"] = "26d4";
    emoji_arr["e138"] = "1f6b9";
    emoji_arr["e139"] = "1f6ba";
    emoji_arr["e140"] = "1f6bd";
    emoji_arr["e141"] = "1f50a";
    emoji_arr["e142"] = "1f4e2";
    emoji_arr["e143"] = "1f38c";
    emoji_arr["e144"] = "1f510";
    emoji_arr["e145"] = "1f513";
    emoji_arr["e146"] = "1f306";
    emoji_arr["e147"] = "1f373";
    emoji_arr["e148"] = "1f4d2";
    emoji_arr["e149"] = "1f4b1";
    emoji_arr["e150"] = "1f68f";
    emoji_arr["e151"] = "1f6bb";
    emoji_arr["e152"] = "1f46e";
    emoji_arr["e153"] = "1f3e3";
    emoji_arr["e154"] = "1f3e7";
    emoji_arr["e155"] = "1f3e5";
    emoji_arr["e156"] = "1f3ea";
    emoji_arr["e157"] = "1f3eb";
    emoji_arr["e158"] = "1f3e8";
    emoji_arr["e159"] = "1f68c";
    emoji_arr["e201"] = "1f6b6";
    emoji_arr["e202"] = "1f6a2";
    emoji_arr["e203"] = "1f201";
    emoji_arr["e204"] = "1f49f";
    emoji_arr["e205"] = "2734";
    emoji_arr["e206"] = "2733";
    emoji_arr["e207"] = "1f51e";
    emoji_arr["e208"] = "1f6ad";
    emoji_arr["e209"] = "1f530";
    emoji_arr["e212"] = "1f195";
    emoji_arr["e213"] = "1f199";
    emoji_arr["e214"] = "1f192";
    emoji_arr["e215"] = "1f236";
    emoji_arr["e216"] = "1f21a";
    emoji_arr["e217"] = "1f237";
    emoji_arr["e218"] = "1f238";
    emoji_arr["e219"] = "1f534";
    emoji_arr["e226"] = "1f250";
    emoji_arr["e227"] = "1f239";
    emoji_arr["e228"] = "1f202";
    emoji_arr["e229"] = "1f194";
    emoji_arr["e230"] = "1f448";
    emoji_arr["e231"] = "1f449";
    emoji_arr["e232"] = "2b06";
    emoji_arr["e233"] = "2b07";
    emoji_arr["e234"] = "27a1";
    emoji_arr["e235"] = "1f519";
    emoji_arr["e236"] = "2934";
    emoji_arr["e237"] = "2196";
    emoji_arr["e238"] = "2935";
    emoji_arr["e239"] = "2199";
    emoji_arr["e240"] = "2649";
    emoji_arr["e241"] = "264a";
    emoji_arr["e242"] = "264b";
    emoji_arr["e243"] = "264c";
    emoji_arr["e244"] = "264d";
    emoji_arr["e245"] = "264e";
    emoji_arr["e246"] = "264f";
    emoji_arr["e247"] = "2650";
    emoji_arr["e248"] = "2651";
    emoji_arr["e249"] = "2652";
    emoji_arr["e250"] = "1f4f3";
    emoji_arr["e251"] = "1f4f4";
    emoji_arr["e252"] = "26a0";
    emoji_arr["e253"] = "1f481";
    emoji_arr["e301"] = "1f4d1";
    emoji_arr["e302"] = "1f454";
    emoji_arr["e303"] = "1f33a";
    emoji_arr["e304"] = "1f337";
    emoji_arr["e305"] = "1f33c";
    emoji_arr["e306"] = "1f490";
    emoji_arr["e307"] = "1f334";
    emoji_arr["e308"] = "1f335";
    emoji_arr["e309"] = "1f6be";
    emoji_arr["e310"] = "1f388";
    emoji_arr["e311"] = "1f4a3";
    emoji_arr["e312"] = "1f389";
    emoji_arr["e313"] = "2702";
    emoji_arr["e314"] = "1f380";
    emoji_arr["e315"] = "3299";
    emoji_arr["e316"] = "1f4be";
    emoji_arr["e317"] = "1f4e3";
    emoji_arr["e318"] = "1f452";
    emoji_arr["e319"] = "1f457";
    emoji_arr["e320"] = "1f488";
    emoji_arr["e321"] = "1f458";
    emoji_arr["e322"] = "1f459";
    emoji_arr["e323"] = "1f45c";
    emoji_arr["e324"] = "1f3ac";
    emoji_arr["e325"] = "1f514";
    emoji_arr["e326"] = "1f3bc";
    emoji_arr["e327"] = "1f49e";
    emoji_arr["e328"] = "1f497";
    emoji_arr["e329"] = "1f498";
    emoji_arr["e330"] = "1f4a8";
    emoji_arr["e331"] = "1f4a7";
    emoji_arr["e332"] = "2b55";
    emoji_arr["e333"] = "2716";
    emoji_arr["e334"] = "1f4a2";
    emoji_arr["e335"] = "1f31f";
    emoji_arr["e336"] = "2754";
    emoji_arr["e337"] = "2755";
    emoji_arr["e338"] = "1f375";
    emoji_arr["e339"] = "1f35e";
    emoji_arr["e340"] = "1f35c";
    emoji_arr["e341"] = "1f35b";
    emoji_arr["e342"] = "1f359";
    emoji_arr["e343"] = "1f362";
    emoji_arr["e344"] = "1f363";
    emoji_arr["e345"] = "1f34f";
    emoji_arr["e346"] = "1f34a";
    emoji_arr["e347"] = "1f353";
    emoji_arr["e348"] = "1f349";
    emoji_arr["e349"] = "1f345";
    emoji_arr["e401"] = "1f625";
    emoji_arr["e402"] = "1f60f";
    emoji_arr["e403"] = "1f64d";
    emoji_arr["e404"] = "1f63c";
    emoji_arr["e405"] = "1f609";
    emoji_arr["e406"] = "1f62b";
    emoji_arr["e407"] = "1f4ab";
    emoji_arr["e408"] = "1f62a";
    emoji_arr["e409"] = "1f61d";
    emoji_arr["e410"] = "1f632";
    emoji_arr["e411"] = "1f62d";
    emoji_arr["e412"] = "1f639";
    emoji_arr["e413"] = "1f63f";
    emoji_arr["e414"] = "263a";
    emoji_arr["e415"] = "1f604";
    emoji_arr["e416"] = "1f64e";
    emoji_arr["e417"] = "1f61a";
    emoji_arr["e418"] = "1f63d";
    emoji_arr["e419"] = "1f440";
    emoji_arr["e420"] = "1f44c";
    emoji_arr["e421"] = "1f44e";
    emoji_arr["e422"] = "1f450";
    emoji_arr["e423"] = "1f645";
    emoji_arr["e424"] = "1f646";
    emoji_arr["e425"] = "1f491";
    emoji_arr["e426"] = "1f647";
    emoji_arr["e427"] = "1f64c";
    emoji_arr["e428"] = "1f46b";
    emoji_arr["e429"] = "1f46f";
    emoji_arr["e430"] = "1f692";
    emoji_arr["e431"] = "1f691";
    emoji_arr["e432"] = "1f6a8";
    emoji_arr["e433"] = "1f3a2";
    emoji_arr["e434"] = "24c2";
    emoji_arr["e435"] = "1f684";
    emoji_arr["e436"] = "1f38d";
    emoji_arr["e437"] = "1f49d";
    emoji_arr["e438"] = "1f38e";
    emoji_arr["e439"] = "1f393";
    emoji_arr["e440"] = "1f387";
    emoji_arr["e441"] = "1f41a";
    emoji_arr["e442"] = "1f390";
    emoji_arr["e443"] = "1f300";
    emoji_arr["e444"] = "1f33e";
    emoji_arr["e445"] = "1f383";
    emoji_arr["e446"] = "1f391";
    emoji_arr["e447"] = "1f343";
    emoji_arr["e448"] = "1f385";
    emoji_arr["e449"] = "1f305";
    emoji_arr["e501"] = "1f3e9";
    emoji_arr["e502"] = "1f3a8";
    emoji_arr["e503"] = "1f3ad";
    emoji_arr["e504"] = "1f3ec";
    emoji_arr["e505"] = "1f3ef";
    emoji_arr["e506"] = "1f3f0";
    emoji_arr["e507"] = "1f3a6";
    emoji_arr["e508"] = "1f3ed";
    emoji_arr["e509"] = "1f5fc";
    emoji_arr["e515"] = "1f471";
    emoji_arr["e516"] = "1f472";
    emoji_arr["e517"] = "1f473";
    emoji_arr["e518"] = "1f474";
    emoji_arr["e519"] = "1f475";
    emoji_arr["e520"] = "1f42c";
    emoji_arr["e521"] = "1f426";
    emoji_arr["e522"] = "1f420";
    emoji_arr["e523"] = "1f423";
    emoji_arr["e524"] = "1f439";
    emoji_arr["e525"] = "1f41b";
    emoji_arr["e526"] = "1f418";
    emoji_arr["e527"] = "1f428";
    emoji_arr["e528"] = "1f412";
    emoji_arr["e529"] = "1f411";
    emoji_arr["e530"] = "1f42b";
    emoji_arr["e531"] = "1f438";
    emoji_arr["e532"] = "1f170";
    emoji_arr["e533"] = "1f171";
    emoji_arr["e534"] = "1f18e";
    emoji_arr["e535"] = "1f17e";
    emoji_arr["e536"] = "1f463";
    emoji_arr["e537"] = "2122";

    $(this).each(function() {
        $(this).parent().removeClass('emoji-sizer').addClass('emoji-sizer');
        var name = $(this).html();
        var tempReg = new RegExp("[\ue001-\ue537]", "gi");
        if (tempReg.test(name)) {
            for (index in emoji_arr) {
                var reg = new RegExp("\\u" + index, "gi");
                name = name.replace(reg, "<span class='emoji-outer'><span class='emoji-inner emoji" + emoji_arr[index] + "'></span></span>");
            };
            $(this).html(name);
        }
    });
}