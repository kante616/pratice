function checkDecimal(element) {
    var tmp = element.value.split(".");
    if (!isNaN(element.value)) {
        if (tmp.length!=2 || tmp[1].length != 2) {
            document.myform.aaa.focus();
            alert("输入金额请保留2位小数!");
            document.getElementById('aaa').value = '0.00';
            return false;
        }
    } else {
        alert("输入金额必须是数字类型!");
        document.getElementById('aaa').focus();
        document.getElementById('aaa').value = '0.00';
        return false;
    }
}