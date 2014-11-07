CKEDITOR.plugins.add('timestamp',{
  init: function(editor){
    editor.addCommand('insertTimestamp',{
      exec: function(editor){
        var timestamp = new Date();
        editor.insertHtml('现在的时间是：<em>'+ timestamp.toString() + '</em>');
      }
    }),
    editor.ui.addButton('Timpstamp',{
      label: '当前时间',
      command: 'insertTimestamp'
    });
  }
});