

export default function Authenticated(usuario, senha, navigate) {
    

    const token = localStorage.getItem('token');
  if (token) {
    // Se o token estiver presente, retorna true
    return true;
  } else {
    // Se o token não estiver presente, autentica o usuário
    fetch('https://fakestoreapi.com/auth/login', {
      method: 'POST',
      body: JSON.stringify({
        username: usuario,
        password: senha
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Falha na autenticação (usuário não autenticado)');
      }
    })
    .then(data => {
      // Extrai o token da resposta
      const token = data.token;

      console.log('Usuário autenticado!')

      // Salva o token no localStorage
      localStorage.setItem('token', token);

      navigate('/');
      
    })
    .catch(error => {
      console.error('Erro ao autenticar:', error);
    });

  }
  
}