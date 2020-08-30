//剪贴板添加版权声明
jQuery(document).on('copy', function (e) {
    var selected = window.getSelection();
    var selectedText = selected.toString().replace(/\n/g, ''); // Solve the line breaks conversion issue
    if (selectedText.length < 20) return;
    var copyFooter =
        '---------------------' +
        ' 著作权归作者所有。' +
        '商业转载请联系作者获得授权，非商业转载请注明出处。' +
        '作者：忆星辰 源地址：' + document.location.href +
        '来源：extingstudio.com © 版权声明：本文为原创文章，转载请附上博文链接！';
    var copyHolder = $('', {
        id: 'temp', html: selectedText + copyFooter,
        style: { position: 'absolute', left: '-99999px' }
    });
    $('body').append(copyHolder);
    selected.selectAllChildren(copyHolder[0]);
    window.setTimeout(function () {
        copyHolder.remove();
    }, 0);
});
