/**
         * 解析歌词
         * 歌词按时间分组并存储到数组
         * [{content: "车站 (Live) - 李健?",time: 800}...]
         */
 function lrc(lyric) {
            // if(!lyric) return lyric;
            var result = [];
            var cArr = lyric.split("[");
            cArr.shift();
            for (var i = 0; i < cArr.length; i++) {
                var o = cArr[i].split("]");
                if (o.length >= 2 && o[1] != "") {
                    var tArr = o[0].split(":"), t = 0;
                    if (tArr.length >= 2) {
                        var mtArr = tArr[0].split(""), mt = 0;
                        for (var k = 0; k < mtArr.length; k++) {
                            if (Number(mtArr[k]) > 0) {
                                mt += mtArr[k] * Math.pow(10, mtArr.length - k - 1);
                            }
                        }
                        t += mt * 60;
                        var stArr = tArr[1].split("."), intStArr = stArr[0].split(""), st = 0;
                        for (var j = 0; j < intStArr.length; j++) {
                            if (Number(intStArr[j]) > 0) {
                                st += intStArr[j] * Math.pow(10, intStArr.length - j - 1);
                            }
                        }
                        t += Number(st + "." + stArr[1]);
                    }
                    if(t && typeof t == "number"){
                        result.push({time : parseInt(t * 1e3), content : o[1]});
                    }
                }
            }
            return result;
        }