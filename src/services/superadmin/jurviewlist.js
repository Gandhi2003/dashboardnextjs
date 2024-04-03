"use client";
const DOMAIN = "http://localhost:3000";

export const jurviewslist = async (data) => {
  try {

    const response = await fetch(`${DOMAIN}/api/jurview`, {
      method: 'GET',
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


// jury State list
export const addjurstate = async () => {
  const response = await fetch(`${DOMAIN}/api/jury/addjury`)
  const json = await response.json();
  return json;
}

//jury add list
export const addjurlisted = async (data) => {
  try {
    const response = await fetch(`${DOMAIN}/api/jury/jurlist`, {
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



