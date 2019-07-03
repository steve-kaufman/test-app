function onReturn (data) {
  console.log(data)
}

function onSubmit (e) {
  e.preventDefault()

  let email = $('#loginFormEmail')[0].value
  let password = $('#loginFormPassword')[0].value

  $.post({
    traditional: true,
    url: '/sign-in/auth',
    contentType: 'application/json',
    data: JSON.stringify({
      email, password
    }),
    dataType: 'json',
    success: onReturn
  })
}

$('#loginForm').submit(onSubmit)
