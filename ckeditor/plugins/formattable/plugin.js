CKEDITOR.plugins.add('formattable',{
  init: function(editor){
    editor.addCommand('formattable',{
      exec: function(editor){
        var tables = editor.document.getElementsByTag('table');
        var length = tables.count();
        for(var i=0; i<length; i++){
          var table = tables.getItem(i);
          table.removeAttributes(['border','style','class']);
        }
        var tds = editor.document.getElementsByTag('td');
        length = tds.count();
        for(var i=0; i<length; i++){
          var td = tds.getItem(i);
          td.removeAttributes(['border','style','class','x:str']);
        }
        var ths = editor.document.getElementsByTag('th');
        length = ths.count();
        for(var i=0; i<length; i++){
          var th = ths.get(i);
          th.removeAttributes(['border','style','class','x:str']);
        }
      }
    }),
    editor.ui.addButton('Formattable',{
      label: '清除表格样式',
      command: 'formattable',
      icon:CKEDITOR.getUrl( this.path + 'images/formattable.gif')
    });
  }
});