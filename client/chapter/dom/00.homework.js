// querySelector
const idField = document.querySelector('#idField');
const submit = document.querySelector('.btn');

// eventListener
function handleCheckId() {
  //console.log(this); // idField

  if (this.value === 'hello') {
    // 정규표현식과 비교
    console.log('success');
    this.classList.remove('is-active');
  } else {
    console.log('error');
    this.classList.add('is-active');
  }
}
idField.addEventListener('input', handleCheckId);

// preventDefault
function handleSubmit(e) {
  console.log('제출');
  e.preventDefault();
}
submit.addEventListener('click', handleSubmit);

// 상태변수 : 아이디,비번 모두 true가 떨어지면! 이런 조건
// README 신경써서 작성하기
