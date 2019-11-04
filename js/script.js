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

/* Creat wrapper */
let wrapper = document.createElement('div');
wrapper.className = 'wrapper';
document.body.append(wrapper);

/* Creat textaree */
let bgTextArea = document.createElement('div');
bgTextArea.className = 'bgTextArea';
wrapper.append(bgTextArea);

let textArea = document.createElement('textarea');
textArea.className = 'textarea';
bgTextArea.append(textArea);
textArea.setAttribute('type', 'textarea');
textArea.focus();

/* Creat keyboard */
let keyboard = document.createElement('div');
keyboard.className = 'keyboard';
wrapper.append(keyboard);

/* Keyboard Language*/
if (localStorage.getItem('keyboardLang') === null) {
  localStorage.setItem('keyboardLang', 'en');
}

/* Creat buttons*/
let rowNumbers = [14, 15, 13, 13, 9];
for (let i = 0; i < 5; i += 1) {
  let row = document.createElement('div');
  row.className = 'row';
  keyboard.append(row);

  for (let j = 0; j < rowNumbers[i]; j += 1) {
    let key = document.createElement('button');
    key.className = 'key ' + keyboardKeys[i][j][0];
    row.append(key);

    let spanEn = document.createElement('span');
    let spanEnUp = document.createElement('span');
    let spanEnDown = document.createElement('span');
    let spanRu = document.createElement('span');
    let spanRuUp = document.createElement('span');
    let spanRuDown = document.createElement('span');

    let [langOn, langOff] = [' on', ' off'];
    if (localStorage.getItem('keyboardLang') === 'en') {
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