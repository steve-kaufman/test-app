function onReturn (data) {
  if (data.success) console.log('Success!')
  else console.log('Unsuccessful')
}

function onSubmit (e) {
  e.preventDefault()

  let email = $('#signupFormEmail')[0].value
  let username = $('#signupFormUsername')[0].value
  let password = $('#signupFormPassword')[0].value

  $.post({
    traditional: true,
    url: '/sign-up/auth',
    contentType: 'application/json',
    data: JSON.stringify({
      email, password, username
    }),
    dataType: 'json',
    success: onReturn
  })
}

$('#signupForm').submit(onSubmit)
