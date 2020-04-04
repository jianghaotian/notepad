var $notepad = $('#notepad');
// 菜单
var menubar = new Menubar();

// 编辑区
var editor = new Editor();
var $editor = editor.init();
$notepad.append($editor)

// 字体
var dlgFont = new DlgFont(editor);
var $dlgFont = dlgFont.init();
$notepad.after($dlgFont)

dlgFont.open();

// 点击外部使打开的菜单隐藏
$notepad.click(menubar.hideMenu.bind(menubar));
