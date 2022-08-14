export function getForm(){
    return `
    <form class="mui-form" id="auth-form">

            <div class="mui-textfield">
                <input type="text" placeholder="Ваша почта" id="email" required>
                <label for="email">Введите вашу почту</label>
            </div>

            <div class="mui-textfield">
              <input type="password" placeholder="Ваш пароль" id="password" required>
              <label for="password">Введите ваш пароль</label>
            </div>
            
            <button type="submit" class="mui-btn mui-btn--raised mui-btn--danger" id="btn">Отправить</button>
          </form>
    `
}

export function authWithEmailAndPassword(email, password){
  const api_key = 'AIzaSyDZvAYXAlIE2d39WbLNJgFqipHGLWq78v8'
  return fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=[${api_key}]`, {
      method: 'POST',
      body: JSON.stringify({
        email, password,
        returnSecureToken: true
      }),
      headers: {
        'Content-Type': 'application/json'
      }
  })
  .then(response => response.json())
  .then(data => console.log(data))
}