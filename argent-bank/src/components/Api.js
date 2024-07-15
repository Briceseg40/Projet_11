export async function loginUser(credentials) {
    const response = await fetch('http://localhost:3001/api/v1/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    })
    if (response.ok) {
      const result = await response.json()
      return result.body.token
    } else {
      throw new Error('Email ou mot de passe incorrect.')
    }
}

export async function changeUserName(credentials, token) {
  const response = await fetch('http://localhost:3001/api/v1/user/profile', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify(credentials),
  });

  if (response.ok) {
    const result = await response.json();
    return result.body;
  } else {
    throw new Error('Impossible de changer le pseudo');
  }
}
