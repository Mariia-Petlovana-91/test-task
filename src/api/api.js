import axios from 'axios';
import toast from 'react-hot-toast';

const instance = axios.create({
  baseURL: 'https://67cf27cf823da0212a81a499.mockapi.io',
});

export const postData = async (formData, quizValue) => {
  try {
    const newData = {
      ...formData,
      quiz: [...quizValue],
    };

    const { data } = await instance.post('/quiz', newData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    toast.success('Form sent successfully!');
    return data;
  } catch (error) {
    toast.error(`Error:${error}.Try again later.`);
  }
};
