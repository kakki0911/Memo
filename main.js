'use strict';

{
  const text = document.getElementById('text');
  const save = document.getElementById('save');
  const message = document.getElementById('message');
  const clear = document.getElementById('clear');


  if (localStorage.getItem('memo') === null) {
    text.value = '';
  } else {
    text.value = localStorage.getItem('memo');
  }


  save.addEventListener('click', () => {
    message.classList.add('appear');
    setTimeout(() => {
      message.classList.remove('appear');
    }, 1000);
    localStorage.setItem('memo', text.value);
  });

  clear.addEventListener('click', () => {
    if (confirm('森田くん…本当に…いいのかい…？') === true) {
      text.value = '';
      localStorage.removeItem('memo');
    }
 
  });


  function addDate() {
    // 現在の日付と時刻を取得します。
    const now = new Date();
    // 日付を YYYY-MM-DD 形式に変換します。
    const dateString = now.toISOString().substring(0, 10);
    // 時間を HH:MM:SS 形式に変換します。
    const timeString = now.toTimeString().substring(0, 8);
    
    // 日付と時間を結合します。
    const dateTimeString = dateString + ' ' + timeString;
    
    // 日付と時刻を追加するための要素を取得します。
    const dateContainer = document.getElementById('dateContainer');
    
    // 日付と時刻を表示します。
    dateContainer.textContent = dateTimeString;
  }

}