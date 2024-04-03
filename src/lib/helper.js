
// "use client";
import { useRouter } from "next/navigation";
const DOMAIN = "http://localhost:3000";


export const getUser = async () => {
  const response = await fetch(`${DOMAIN}/api/user/dash`);
  const json = await response.json();
  return json;
}
export const catlister = async () => {
  const response = await fetch(`${DOMAIN}/api/dashboard/adduser`);
  const json = await response.json();
  return json;
}
export const getimg = async () => {
  const response = await fetch(`${DOMAIN}/api/uploadimg`)
  const json = await response.json();
  return json;

}

export const viewlist = async (id) => {
  const response = await fetch(`${DOMAIN}/api/jurview/${id}`)
  const json = await response.json();
  return json;
}


//view list
// export const viewlist = async () => {
//   try {

//     const response = await fetch(`${DOMAIN}/api/jurview`, {
//       method: 'GET',
//       body: data,
//     });

//     if (response.ok) {
//       console.log('Image uploaded successfully');
//     } else {
//       const data = await response.json();
//       console.error(data.error);
//     }
//   } catch (error) {
//     console.error('An error occurred:', error);
//   }

// }

export const getJury = async () => {
  const response = await fetch(`${DOMAIN}/api/dashboard/adduser`);
  const json = await response.json();
  return json;
}


//img 
export const userimg = async (data) => {
  try {
    const response = await fetch('/api/uploadimg', {
      method: 'POST',
      body: data,
    });

    if (response.ok) {
      console.log('Image uploaded successfully');
    } else {
      const data = await response.json();
      console.error(data.error);
    }
  } catch (error) {
    console.error('An error occurred:', error);
  }

}

// User add jurylist
export const addjury = async (data) => {
  try {
    const response = await fetch(`${DOMAIN}/api/dashboard/adduser`, {
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



//deleted for jury list api
export const deletjury = async (data) => {
  try {
    const response = await fetch(`${DOMAIN}/api/dashboard/adduser`, {
      method: 'DELETE',
      body: data
    })
    if (response.ok) {
      console.log('Jury List deleted')
    } else {
      const data = await response.json();
      console.error(data.error)
    }
  } catch (error) {
    console.error('An error occurred:', error)
  }
}



//jury list
export const jurilistadd = async () => {
  const response = await fetch(`${DOMAIN}/api/jury/jurlist`)
  const json = await response.json()
  return json;
}

//editejurlist

export const editejury = async (id) => {
  const response = await fetch(`${DOMAIN}/api/jury/juredite/${id}`)
  const json = await response.json();
  return json;
}

//deleted  jury list 

export const deletjur = async (data) => {
  try {
    const response = await fetch(`${DOMAIN}/api/jury/jurlist`, {
      method: 'DELETE',
      body: data
    })
    if (response.ok) {
      console.log('Jury List deleted')
    } else {
      const data = await response.json();
      console.error(data.error)
    }
  } catch (error) {
    console.error('An error occurred:', error)
  }
}


//upadet jury

export const updatedjury = async (id, data) => {
  try {
    const response = await fetch(`${DOMAIN}/api/jury/juredite/${id}`, {
      method: 'PUT',
      body: data,
    })
    console.log("message", response);
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


//email send
export const emailjury = async (data) => {
  try {
    const response = await fetch(`${DOMAIN}/api/emailtem`, {
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
//whatsapp send
export const whatsappjury = async (data) => {
  try {
    const response = await fetch(`${DOMAIN}/api/whatsapp`, {
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


//moblie list get api
export const mobListed = async () => {
  const response = await fetch(`${DOMAIN}/api/products/mobiles`);
  const json = await response.json();
  return json;
}
//paymet moblit
export const mobpaylist = async (data) => {
  try {
    const response = await fetch(`${DOMAIN}/api/products/mobiles`, {
      method: 'POST',
      body: data,
    })
    if (response.ok) {
      console.log('payment successfully');
    } else {
      const data = await response.json();
      console.error(data.error);
    }
  } catch (error) {
    console.error('An error occurred:', error);
  }
}
//mobileview
export const moblieview = async (id) => {
  const response = await fetch(`${DOMAIN}/api/products/mobileview/${id}`)
  const json = await response.json();
  return json;
}

//register
export const register = async (data) => {
  try {
    const response = await fetch(`${DOMAIN}/api/user/register`, {
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

//login
export const login = async (data) => {
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
// logout
export const logout = async () => {
  const response = await fetch(`${DOMAIN}/api/user/logout`);
  const json = await response.json();
  return json;
}
//send otp mail
export const otpsendmail = async (data) => {
  try {
    const response = await fetch(`${DOMAIN}/api/user/password`, {
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

//change password
export const changepassword = async (data) => {
  try {
    const response = await fetch(`${DOMAIN}/api/user/register`, {
      method: 'PUT',
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

//otp get mail
export const otpgetmail = async () => {
  const response = await fetch(`${DOMAIN}/api/user/password`)
  const json = await response.json();
  return json;
}
//user list
export const userList = async () => {
  const response = await fetch(`${DOMAIN}/api/user/login`)
  const json = await response.json();
  return json;
}

