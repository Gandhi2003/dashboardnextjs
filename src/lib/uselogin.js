const DOMAIN = "http://localhost:3000/api/user/register";
export const login= async (data) => {
    try {
      const response = await fetch(`${DOMAIN}/api/user/login`, {
        method: 'POST',
        body: data,
      })
      if (response.ok) {
        console.log('User successfully');
      } else {
        const data = await response.json();
        console.error(data.error);
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  }
