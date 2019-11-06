/*  -=== Create keyboard ===-  */
const keyboardKeys = [
  [
    ['', 'Backquote', 'ё', 'Ё', '`', '~'],
    ['', 'num1', '1', '!', '1', '!'],
    ['', 'num2', '2', '"', '2', '@'],
    ['', 'num3', '3', '№', '3', '#'],
    ['', 'num4', '4', ';', '4', '$'],
    ['', 'num5', '5', '%', '5', '%'],
    ['', 'num6', '6', ':', '6', '^'],
    ['', 'num7', '7', '?', '7', '&'],
    ['', 'num8', '8', '*', '8', '*'],
    ['', 'num9', '9', '(', '9', '('],
    ['', 'num0', '0', ')', '0', ')'],
    ['', 'minus', '-', '_', '-', '_'],
    ['', 'equal', '=', '+', '=', '+'],
    ['backspace', 'Backspace', 'Backspace', 'Backspace', 'Backspace', 'Backspace']
  ],
  [
    ['tab', 'Tab', 'Tab', 'Tab', 'Tab', 'Tab'],
    ['', 'KeyQ', 'й', 'Й', 'q', 'Q'],
    ['', 'KeyW', 'ц', 'Ц', 'w', 'W'],
    ['', 'KeyE', 'у', 'У', 'e', 'E'],
    ['', 'KeyR', 'к', 'К', 'r', 'R'],
    ['', 'KeyT', 'е', 'Е', 't', 'T'],
    ['', 'KeyY', 'н', 'Н', 'y', 'Y'],
    ['', 'KeyU', 'г', 'Г', 'u', 'U'],
    ['', 'KeyI', 'ш', 'Ш', 'i', 'I'],
    ['', 'KeyO', 'щ', 'Щ', 'o', 'O'],
    ['', 'KeyP', 'з', 'З', 'p', 'P'],
    ['', 'BracketLeft', 'х', 'Х', '[', '{'],
    ['', 'BracketRight', 'ъ', 'Ъ', ']', '}'],
    ['', 'Backslash', '\\', '/', '\\', '|'],
    ['del', 'Delete', 'Del', 'Del', 'Del', 'Del', 'Del']
  ],
  [
    ['capslock', 'CapsLock', 'CapsLock', 'CapsLock', 'CapsLock', 'CapsLock', 'CapsLock'],
    ['', 'KeyA', 'ф', 'Ф', 'a', 'A'],
    ['', 'KeyS', 'ы', 'Ы', 's', 'S'],
    ['', 'KeyD', 'в', 'В', 'd', 'D'],
    ['', 'KeyF', 'а', 'А', 'f', 'F'],
    ['', 'KeyG', 'п', 'П', 'g', 'G'],
    ['', 'KeyH', 'р', 'Р', 'h', 'H'],
    ['', 'KeyJ', 'о', 'О', 'j', 'J'],
    ['', 'KeyK', 'л', 'Л', 'k', 'K'],
    ['', 'KeyL', 'д', 'Д', 'l', 'L'],
    ['', 'Semicolon', 'ж', 'Ж', ';', ':'],
    ['', 'Quote', 'э', 'Э', '\'', '"'],
    ['enter', 'Enter', 'Enter', 'Enter', 'Enter', 'Enter']
  ],
  [
    ['shift-left', 'ShiftLeft', 'Shift', 'Shift', 'Shift', 'Shift'],
    ['', 'KeyZ', 'я', 'Я', 'z', 'Z'],
    ['', 'KeyX', 'ч', 'Ч', 'x', 'X'],
    ['', 'KeyC', 'с', 'С', 'c', 'C'],
    ['', 'KeyV', 'м', 'М', 'v', 'V'],
    ['', 'KeyB', 'и', 'И', 'b', 'B'],
    ['', 'KeyN', 'т', 'Т', 'n', 'N'],
    ['', 'KeyM', 'ь', 'Ь', 'm', 'M'],
    ['', 'Comma', 'б', 'Б', '.', '<'],
    ['', 'Period', 'ю', 'Ю', ',', '>'],
    ['', 'Slash', '.', ',', '/', '?'],
    ['arrow', 'ArrowUp', '▲', '▲', '▲', '▲'],
    ['shift-right', 'ShiftRight', 'Shift', 'Shift', 'Shift', 'Shift']
  ],
  [
    ['ctrl-left', 'ControlLeft', 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl'],
    ['win', 'MetaLeft', 'Win', 'Win', 'Win', 'Win'],
    ['alt-left', 'AltLeft', 'Alt', 'Alt', 'Alt', 'Alt'],
    ['space', 'Space', ' ', ' ', ' ', ' '],
    ['alt-right', 'AltRight', 'Alt', 'Alt', 'Alt', 'Alt'],
    ['arrow', 'ArrowLeft', '◄', '◄', '◄', '◄'],
    ['arrow', 'ArrowDown', '▼', '▼', '▼', '▼'],
    ['arrow', 'ArrowRight', '►', '►', '►', '►'],
    ['ctrl-right', 'ControlRight', 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl']
  ]
];

/*  -=== Create wrapper ===-  */
const wrapper = document.createElement('div');
wrapper.className = 'wrapper';
document.body.append(wrapper);

/*  -=== Create textaree ===-  */
const bgTextArea = document.createElement('div');
bgTextArea.className = 'bgTextArea';
wrapper.append(bgTextArea);

const textArea = document.createElement('textarea');
textArea.className = 'textarea';
bgTextArea.append(textArea);
// textArea.setAttribute('type', 'textarea');
textArea.setAttribute('placeholder', 'Используя клавиатуру набирайте текст');
textArea.focus();

/*  -=== Create keyboard ===-  */ 
const keyboard = document.createElement('div');
keyboard.className = 'keyboard';
wrapper.append(keyboard);

/*  -=== Keyboard Language Part I ===-  */
if (localStorage.getItem('keyboardLang') === null) {
  localStorage.setItem('keyboardLang', 'EN');
}

/*  -=== Create buttons ===-  */
const rowNumbers = [14, 15, 13, 13, 9];
for (let i = 0; i < 5; i += 1) {
  const row = document.createElement('div');
  row.className = 'row';
  keyboard.append(row);

  for (let j = 0; j < rowNumbers[i]; j += 1) {
    const key = document.createElement('button');
    key.className = `key ${keyboardKeys[i][j][0]}`;
    row.append(key);

    const spanEn = document.createElement('span');
    const spanEnUp = document.createElement('span');
    const spanEnDown = document.createElement('span');
    const spanRu = document.createElement('span');
    const spanRuUp = document.createElement('span');
    const spanRuDown = document.createElement('span');

    let [langOn, langOff] = [' on', ' off'];
    if (localStorage.getItem('keyboardLang') === 'RU') {
      langOn = ' on';
      langOff = ' off';
    } else {
      langOn = ' off';
      langOff = ' on';
    }

    spanEn.className = keyboardKeys[i][j][1] + langOn;
    spanRu.className = keyboardKeys[i][j][1] + langOff;

    key.append(spanEn);
    key.append(spanRu);

    spanRuDown.className = 'case-shown';
    spanRu.append(spanRuDown);
    spanRuDown.insertAdjacentText('afterbegin', keyboardKeys[i][j][2]);

    spanRuUp.className = 'case-hidden';
    spanRu.append(spanRuUp);
    spanRuUp.insertAdjacentText('afterbegin', keyboardKeys[i][j][3]);

    spanEnDown.className = 'case-shown';
    spanEn.append(spanEnDown);
    spanEnDown.insertAdjacentText('afterbegin', keyboardKeys[i][j][4]);

    spanEnUp.className = 'case-hidden';
    spanEn.append(spanEnUp);
    spanEnUp.insertAdjacentText('afterbegin', keyboardKeys[i][j][5]);
  }
}

/*  -=== Keyboard Language Part II ===-  */
document.addEventListener('keydown', function(lang) {
  if (lang.shiftKey && lang.altKey) {
    if (localStorage.getItem('keyboardLang') === 'EN') {
      localStorage.removeItem('keyboardLang');
      localStorage.setItem('keyboardLang', 'RU');
    } 
    else {
      localStorage.removeItem('keyboardLang');
      localStorage.setItem('keyboardLang', 'EN');
    }
    keyboard.querySelectorAll('.row').forEach(row => {
      row.querySelectorAll('.key').forEach(key => {
        let on = key.querySelector('.on');
        let off = key.querySelector('.off');
        on.classList.remove('on');
        on.classList.add('off');
        off.classList.remove('off');
        off.classList.add('on');
      });
    });
  }
});
/*  -=== button Special ===-  */
let shiftPress = false;                               
let [altLeftPress, altRightPress] = [false, false];
let [ctrlLeftPress, ctrlRightPress] = [false, false];

function caseUp() {
  shiftPress = true;
    document.querySelectorAll('.on').forEach(key => {
    key.children[0].classList.remove('case-shown');
    key.children[0].classList.add('case-hidden');
    key.children[1].classList.add('case-shown');
    key.children[1].classList.remove('case-hidden');
  });
}

function caseDown() {
  shiftPress = false;
  document.querySelectorAll('.on').forEach(key => {
    key.children[0].classList.add('case-shown');
    key.children[0].classList.remove('case-hidden');
    key.children[1].classList.remove('case-shown');
    key.children[1].classList.add('case-hidden');
  });
}

function shiftUpKeyboard(lang) {
  if (lang.shiftKey) {
    caseUp();
  }
}

function shiftDownKeyboard() {
  caseDown();
}

function setCaretPosition(elem, pos) {
  if (elem.setSelectionRange) {
    elem.focus();
    elem.setSelectionRange(pos, pos);
  } else if (elem.createTextRange) {
    let range = elem.createTextRange();
    range.collapse(true);
    range.moveEnd('character', pos);
    range.moveStart('character', pos);
    range.select();
  }
}

function printingInTextArea(event) {
  let symbol = '';
  let targetBtn = event.target.closest('button');
  if (targetBtn) {  //если true
    let targetSpan = targetBtn.querySelector('.on');
    let targetBtnName = targetSpan.className.split(' ')[0];
    let specialBtn = targetBtn.classList[1];

    keyboardKeys.forEach(row => {
      row.forEach(elem => {
        if (elem[1] === targetBtnName && (specialBtn === undefined || specialBtn === 'space' || specialBtn === 'tab' || specialBtn === 'enter')) {
          if (localStorage.getItem('keyboardLang') === 'EN') {
            shiftPress ? (symbol = elem[3]) : (symbol = elem[2]);
          } else {
            shiftPress ? (symbol = elem[5]) : (symbol = elem[4]);
          }

          // if (localStorage.getItem('keyboardLang') === 'RU' && shiftPress) {
          //   symbol = el[3]; 
          // } else if (localStorage.getItem('keyboardLang') === 'RU' && !shiftPress) { 
          //   symbol = el[2];
          // } else if (localStorage.getItem('keyboardLang') === 'EN' && shiftPress) {
          //   symbol = el[5];
          // } else if (localStorage.getItem('keyboardLang') === 'EN' && !shiftPress) {
          //   symbol = el[4];
          // }

        }
      });
    });

    if (specialBtn === 'tab') {
      symbol = '  ';
    }

    if (specialBtn === 'enter') {
      symbol = '\n';
    }
    
    textArea.setRangeText(symbol, textArea.selectionStart, textArea.selectionEnd, 'end' );

    if (specialBtn === 'backspace') {
      if (textArea.selectionStart > 0) {
        let pos = textArea.selectionStart;
        textArea.value = textArea.value.slice(0, pos - 1) + textArea.value.slice(pos, textArea.value.length);
        textArea.setRangeText('', pos - 1, pos - 1, 'end');
      }
    }

    if (specialBtn === 'del') {
      let pos = textArea.selectionStart;
      if (textArea.selectionStart <= textArea.value.length) {
        textArea.value = textArea.value.slice(0, pos) + textArea.value.slice(pos + 1, textArea.value.length);
        textArea.setRangeText('', pos, pos, 'end');
      }
    }
    let specialBtnEl = document.querySelector('.' + specialBtn);
    if (specialBtn === 'shift-left' || specialBtn === 'shift-right' || specialBtn === 'capslock') {
      if (shiftPress === false) {
        specialBtnEl.classList.add('active');
        caseUp();
      } else {
        specialBtnEl.classList.remove('active');
        caseDown();
      }
    }
    if (specialBtn === "arrow") {
      let pos = textArea.selectionStart;

      if (targetBtnName === "ArrowUp") {
        if (textArea.selectionStart > 10) setCaretPosition(textArea, pos - 10);
      } else if (targetBtnName === "ArrowRight") {
        setCaretPosition(textArea, pos + 1);
      } else if (targetBtnName === "ArrowDown") {
        setCaretPosition(textArea, pos + 10);
      } else if (targetBtnName === "ArrowLeft") {
        if (textArea.selectionStart > 0) setCaretPosition(textArea, pos - 1);
      }
    }

    if (specialBtn === 'alt-left') {
      altLeftPress = activeBtnHighlighting(altLeftPress, specialBtnEl);
    }

    if (specialBtn === 'alt-right') {
      altRightPress = activeBtnHighlighting(altRightPress, specialBtnEl);
    }

    if (specialBtn === 'ctrl-left') {
      ctrlLeftPress = activeBtnHighlighting(ctrlLeftPress, specialBtnEl);
    }

    if (specialBtn === 'ctrl-right') {
      ctrlRightPress = activeBtnHighlighting(ctrlRightPress, specialBtnEl);
    }
  }
  textArea.focus();
}


document.addEventListener('keydown', shiftUpKeyboard);
keyboard.addEventListener('click', printingInTextArea);
document.addEventListener('keyup', shiftDownKeyboard);

