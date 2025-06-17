document.addEventListener('DOMContentLoaded', () => {
  const screens = document.querySelectorAll('.screen');
  const loginBtn = document.querySelector('.login-btn');
  const actionButtons = document.querySelectorAll('.action-btn');

  loginBtn.addEventListener('click', () => {
    screens[0].classList.remove('active');
    screens[1].classList.add('active');
  });

  actionButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      if (e.target.textContent === 'Send Money') {
        screens[1].classList.remove('active');
        screens[2].classList.add('active');
      } else if (e.target.textContent === 'Confirm') {
        screens[2].classList.remove('active');
        screens[3].classList.add('active');
      }
    });
  });
});