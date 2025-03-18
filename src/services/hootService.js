const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/hoots`;



const index = async () => {
    try {
        const res = await fetch(BASE_URL, {
            //this is what we simulated in Postman
            headers: {Authorization: `Bearer ${localStorage.getItem('token')}`},
        });

        const data = await res.json();
        return data;
    } catch (error) {
        console.log(error);
    }
};


const show = async (hootId) => {
    try {
      const res = await fetch(`${BASE_URL}/${hootId}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      return res.json();
    } catch (error) {
      console.log(error);
    }
  };

const create = async (formData) => {
    try {
        const res = await fetch(BASE_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
            body: JSON.stringify(formData),
        });

        const data = await res.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}



const  createComment = async (hootId,formData) => {
    try {
        const res= await fetch(`${BASE_URL}/${hootId}/comments`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
            body: JSON.stringify(formData),
        });

        const data = await res.json();
        return data;
    } catch (error) {
        console.log(error);
    }
    }

    
export {
    index,
    show,
    create,
    createComment,
}