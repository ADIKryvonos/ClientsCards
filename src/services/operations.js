import axios from 'axios';

axios.defaults.baseURL = 'https://643460021c5ed06c95961861.mockapi.io/ADI';

export async function GetUsers(page, per_page) {
  const resp = await axios.get(`/users?page=${page}&limit=${per_page}`);

  return resp;
}

export async function FollowingUser(id, followers, buttonStatus) {
  try {
    const { data } = await axios.put(`/users/${id}`, {
      followers,
      complited: buttonStatus,
    });
    return data;
  } catch (error) {
    console.log(error.message);
  }
}
