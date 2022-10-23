function sair(){
    localStorage.removeItem('token')
    alert("Você será redirecionado à página de login")
    window.location.href = 'login.html'
  }
