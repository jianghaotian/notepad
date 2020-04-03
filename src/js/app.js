var $notepad = $('#notepad');

// 菜单
var menubar = new Menubar();
var $menubar = menubar.init(menuData);
$notepad.append($menubar)

// 编辑区
var editor = new Editor();
var $editor = editor.init();
$notepad.append($editor)




// 点击外部使打开的菜单隐藏
$notepad.click(function() {
  console.log('notepad 隐藏')
  menubar.hideMenu.bind(menubar)();
});
