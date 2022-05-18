//异步
function ajax(jsondata, handle, url, datatype) {
    layer.load();
    $.ajax({
        type: "POST",
        url: url,
        dataType: datatype,
        data: jsondata,
        success: handle,
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            layer.closeAll('loading');
            try {
                layer.alert(errorThrown, { icon: 5 });
            }
            catch (e) {
                layer.alert(e.message, { icon: 5 });
            }

        }
    });
}
//同步
function ajax2(jsondata, handle, url, datatype) {
    layer.load();
    $.ajax({
        type: "POST",
        url: url,
        dataType: datatype,
        async: false,
        data: jsondata,
        success: handle,
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            try {
                layer.closeAll('loading');
                layer.alert("请尝试重新登录再试", { icon: 5 });
            }
            catch (e) {
                layer.closeAll('loading');
                layer.alert(e.message, { icon: 5 });
            }

        }
    });
}

//同步不要loding
function ajax3(jsondata, handle, url, datatype) {
    $.ajax({
        type: "POST",
        url: url,
        dataType: datatype,
        async: false,
        data: jsondata,
        success: handle,
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            try {
                layer.closeAll('loading');
                layer.alert("请尝试重新登录再试", { icon: 5 });
            }
            catch (e) {
                layer.closeAll('loading');
                layer.alert(e.message, { icon: 5 });
            }

        }
    });
}

//同步不要loding
function ajax4(jsondata, handle, url, datatype) {
    $.ajax({
        type: "POST",
        url: url,
        dataType: datatype,
        data: jsondata,
        success: handle,
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            try {
                layer.closeAll('loading');
                layer.alert("请尝试重新登录再试", { icon: 5 });
            }
            catch (e) {
                layer.closeAll('loading');
                layer.alert(e.message, { icon: 5 });
            }

        }
    });
}

//获取url参数，区分大小写
function GetQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return decodeURI(r[2]);
    return "";
}
//获取url参数，区分大小写(调用了解密)
function GetQueryStringDecode(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) {
        return decodeURI(decodeValue(r[2]));
    }
    return "";
}
function GetPageHtml(count, page, pageSize) {
    var pageHtml = "";
    if (count > 0) {
        var pageCount = Math.ceil(count / pageSize);
        pageHtml += "<a href='javacritpt:;' onclick='checkPage(1)'><i class='icon icon-chevron-left'></i></a>";
        var pageEllipsis = "<a href='javacritpt:;'>...</a>";
        for (var i = 1; i <= pageCount; i++) {
            if (pageCount > 7) {
                if (page <= 4) {
                    if (page == i) {
                        pageHtml += "<a class='active' href='javacritpt:;' onclick='pageClick(this)'>" + i + "</a>";
                    } else if (i <= page + 2) {
                        pageHtml += "<a href='javacritpt:;' onclick='pageClick(this)'>" + i + "</a>";
                    }
                    if (i == pageCount) {
                        pageHtml += pageEllipsis;
                        pageHtml += "<a href='javacritpt:;' class='last' onclick='pageClick(this)'>" + i + "</a>";
                    }
                } else if (page > 4) {
                    if (i == 1) {
                        pageHtml += "<a href='javacritpt:;' onclick='pageClick(this)'>" + i + "</a>";
                        pageHtml += pageEllipsis;
                    }
                    if (i <= page + 2 && i >= page - 2) {
                        if (page == i) {
                            if (i == pageCount)
                                pageHtml += "<a class='active last' href='javacritpt:;' onclick='pageClick(this)'>" + i + "</a>";
                            else
                                pageHtml += "<a class='active' href='javacritpt:;' onclick='pageClick(this)'>" + i + "</a>";
                        } else {
                            if (i == pageCount)
                                pageHtml += "<a href='javacritpt:;' class='last' onclick='pageClick(this)'>" + i + "</a>";
                            else
                                pageHtml += "<a href='javacritpt:;' onclick='pageClick(this)'>" + i + "</a>";
                        }
                    }
                    if (i == pageCount && pageCount - page > 3) {
                        pageHtml += pageEllipsis;
                        pageHtml += "<a href='javacritpt:;' class='last' onclick='pageClick(this)'>" + i + "</a>";
                    } else if (i == pageCount && pageCount - page == 3) {
                        pageHtml += "<a href='javacritpt:;' class='last' onclick='pageClick(this)'>" + i + "</a>";
                    }
                }
            }
            else {
                if (page == i) {
                    if (i == pageCount)
                        pageHtml += "<a class='active last' href='javacritpt:;' onclick='pageClick(this)'>" + i + "</a>";
                    else
                        pageHtml += "<a class='active' href='javacritpt:;' onclick='pageClick(this)'>" + i + "</a>";
                } else {
                    if (i == pageCount)
                        pageHtml += "<a href='javacritpt:;' class='last' onclick='pageClick(this)'>" + i + "</a>";
                    else
                        pageHtml += "<a href='javacritpt:;' onclick='pageClick(this)'>" + i + "</a>";
                }
            }

        }
        pageHtml += "<a href='javacritpt:;' onclick='checkPage(2)'><i class='icon icon-chevron-right'></i></a>";
    }
    return pageHtml;
}


function encode16(str) {
    str = str.toLowerCase();
    if (str.match(/^[-+]?\d*$/) == null) {
        var s = str.split("");
        var temp = "";
        for (var i = 0; i < s.length; i++) {
            s[i] = s[i].charCodeAt();
            s[i] = s[i].toString(16);
            temp = temp + s[i];
        }
        return temp + "{" + 1;
    } else {
        str = parseInt(str).toString(16);
    }
    return str + "{" + 0;
}


function produceRandom(n) {
    var num = "";
    for (var i = 0; i < n; i++) {
        num += Math.floor(Math.random() * 10);
    }
    return num;
}
//主加密函数  
function encrypt(str) {
    var encryptStr = "";
    encryptStr += produceRandom(3);
    if (str == null || str.length == 0)
        return "";
    var temp = encode16(encodeURI(str)).split("{");  
    var numLength = temp[0].length; 
    numLength = numLength.toString(16);
    if (numLength.length == 1) { 
        numLength = "0" + numLength;
    } else if (numLength.length > 2) { 
        return "";
    }
    encryptStr += numLength;

    if (temp[1] == "0") {
        encryptStr += 0;
    } else if (temp[1] == "1") {
        encryptStr += 1;
    }

    encryptStr += temp[0];

    if (encryptStr.length < 20) {
        var ran = produceRandom(20 - encryptStr.length);
        encryptStr += ran;
    }
    return encryptStr;
}
/*解密为加密的逆过程 
*/
function decodeValue(value) {
    if (value == "") {
        return "";
    }
    if (value.length < 20) {
        return value;
    }
    var charLength = value.substr(3, 2); 
    var charLen = parseInt(charLength, 16);
    var type = parseInt(value.substr(5, 1));
    var valueEnc = value.substr(6, charLen);
    if (type == 0) {
        var trueValue = parseInt(valueEnc, 16);
        return trueValue;
    } else {
        var sb = "";
        var valueEncArray = valueEnc.split("");
        for (var i = 0; i < valueEncArray.length; i += 2) {
            var value10 = parseInt(valueEncArray[i] + valueEncArray[i + 1], 16);
            sb += String.fromCharCode(value10);
        }
        return sb.toString();
    }
}

//生成委托单号，
//2017-08-18修改：为了尾号尽可能不同，把时间戳放到后面
function setOrderNo(userId) {
//    userId = null;
    var timestamp = (new Date()).valueOf().toString().substr(0, 10);
    if (userId == null || userId == undefined || userId == "") {
        return "123465789"
    }
    var num = userId.toString().length;
    var str = num.toString() + userId.toString() + timestamp;
    if (str.length < 17) {
        str = str + produceRandom(17 - str.length);
    }
    return str;
}

//当网络掉线时，弹出登录框
function alertLogin() {
   layer.open({
        title: '登录',
        type: 2,
        area: ['38%', '38%'],
        fix: true, //固定
        maxmin: false,
        content: ["/Login/SessionLogin", "yes"],
        end: function () {
            layer.alert("登录成功，请重新操作", { icon: 6 });
        }
    });
}

//前台加密,用于前台加密，后台解密
function encode(str) {
    // 对字符串进行编码
    var encode = encodeURI(str);
    var base64 = btoa(encode);
    return base64;
}

//加密
function compile(code) {
    if (code == null || code == "" || code == undefined) {
        return code;
    }
    var c = String.fromCharCode(code.charCodeAt(0) + code.length);
    for (var i = 1; i < code.length; i++) {
        c += String.fromCharCode(code.charCodeAt(i) + code.charCodeAt(i - 1));
    }
    return escape(c);
}

//解密
function uncompile(code) {
    if (code == null || code == "" || code == undefined) {
        return code;
    }
    code = unescape(code);
    var c = String.fromCharCode(code.charCodeAt(0) - code.length);
    for (var i = 1; i < code.length; i++) {
        c += String.fromCharCode(code.charCodeAt(i) - c.charCodeAt(i - 1));
    }
    return c;
}


//num 1 加密，2 解密
function numDecode(str, num) {
    var arr = ['l', 'e', 'f', 'v', '6', '2', '1', 'a', 'd', 'h'];
    var value = "";
    var b = String(str).split('');
    if (num == 1) {
        for (var i = 0; i < b.length; i++) {
            value += arr[b[i]];
        }
    } else if (num == 2) {
        for (var i = 0; i < b.length; i++) {
            value += $.inArray(b[i], arr);
        }
    }
    return value;
}
