function DlgFont () {
  // 元素
  this.$dlg_font = null;
  this.$select_box_inputs = [];
  this.$select_box_item_lis = [[], [], []];
  this.$sample_p = $('<p>AaBbYyZz</p>');

  // 变量
  this.fonts = ['Agency FB', 'Algerian', 'Arial', 'Arial Rounded MT', 'Axure Handwriting', 'Bahnschrift', 'Baskerville Old Face', 'Bauhaus 93', 'Bell MT', 'Berlin Sans FB', 'Bernard MT', 'BlackAdder ITC'],
  this.styles = ['常规', '斜体', '粗体', '粗偏斜体'],
  this.sizes = ['8', '9', '10', '11', '12', '14', '16', '18', '20', '22', '24', '26', '28', '36', '48', '72'];

  // 初始化
  this.init = function () {
    // select-box选项
    var selectBoxData = [
      {
        title: '字体(F):',
        ul: this.fonts,
        default: 2
      },
      {
        title: '字形(Y):',
        ul: this.styles,
        default: 0

      },
      {
        title: '大小(S):',
        ul: this.sizes,
        default: 6
      }
    ]

    // 添加元素
    var $dlg_font = $('<div class="dlg_font"></div>');
    var $dlg_font_box = $('<div class="dlg_font_box"></div>');
    // 添加header
    var $header = $('<div class="header"><div>字体</div><div>X</div></div>');
    $dlg_font_box.append($header);
    // body
    var $body = $('<div class="body"></div>');
    // 添加select-box
    var $select_box = $('<div class="select_box"></div>');
    for (var i = 0; i < selectBoxData.length; i++) {
      var $select_box_item_span = $(`<span>${selectBoxData[i].title}</span>`);
      var $select_box_item_input = $(`<input type="text">`);
      var $select_box_item_ul = $(`<ul></ul>`);
      for (var j = 0; j < selectBoxData[i].ul.length; j++) {
        var $li = $(`<li>${selectBoxData[i].ul[j]}</li>`);
        if (i == 0) {
          $li.css('font-family', selectBoxData[i].ul[j]);
        } else if (i == 1) {
          this.changeStyle($li, j);
        }
        $li.click(this.selectLi.bind(this, i, j));
        this.$select_box_item_lis[i].push($li);
        $select_box_item_ul.append($li);
      }
      this.$select_box_inputs.push($select_box_item_input);
      this.selectLi(i, selectBoxData[i].default);
      $select_box.append($select_box_item_span);
      $select_box.append($select_box_item_input);
      $select_box.append($select_box_item_ul);
    }
    // 添加sample
    var $sample = $('<fieldset class="sample"></fieldset>');
    $sample.append($('<legend>示例</legend>'));
    var $sample_p = this.$sample_p;
    $sample.append($sample_p);
    // 添加script
    var $script = $('<div class="script"></div>');
    $script.append($('<span>脚本(R):</span><br>'));
    var $select = $('<select></select>');
    $select.append($('<option value="西欧语言">西欧语言</option>'));
    $select.append($('<option value="中文 GB2312">中文 GB2312</option>'));
    $script.append($select);
    // input
    var $btn_ok = $('<input type="button" value="确定" class="btn_ok">');
    var $btn_cancel = $('<input type="button" value="取消" class="btn_cancel">');
    // TODO: input点击事件
    // $btn_ok.click();
    // $btn_cancel.click();
    // 全部添加元素
    $body.append($select_box);
    $body.append($sample);
    $body.append($script);
    $body.append($btn_ok);
    $body.append($btn_cancel);

    $dlg_font_box.append($body);
    $dlg_font.append($dlg_font_box);
    this.$dlg_font = $dlg_font;
    return $dlg_font;
  }
  // 选择li，i为哪个ul，j为哪个li
  this.selectLi = function (i, j) {
    for (var k = 0; k < this.$select_box_item_lis[i].length; k++) {
      if (k == j) {
        this.$select_box_item_lis[i][k].addClass('selected');
      } else {
        this.$select_box_item_lis[i][k].removeClass('selected');
      }
    }
    if (i == 0) {
      // fonts
      this.$select_box_inputs[i].val(this.fonts[j]);
      this.$sample_p.css('font-family', this.fonts[j]);


    } else if (i == 1) {
      // styles
      this.$select_box_inputs[i].val(this.styles[j]);
      this.changeStyle(this.$sample_p, j)


    } else if (i == 2) {
      // sizes
      this.$select_box_inputs[i].val(this.sizes[j]);
      this.$sample_p.css('font-size', this.sizes[j] + 'px');


    }



  }
  this.changeStyle = function ($node, i) {
    if (i == 0) {
      $node.css('font-style', 'normal');
      $node.css('font-weight', 'normal');
    } else if (i == 1) {
      $node.css('font-style', 'italic');
      $node.css('font-weight', 'normal');
    } else if (i == 2) {
      $node.css('font-style', 'normal');
      $node.css('font-weight', 'bold');
    } else if (i == 3) {
      $node.css('font-style', 'italic');
      $node.css('font-weight', 'bold');
    }
  }






}