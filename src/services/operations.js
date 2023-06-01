import axios from 'axios';

axios.defaults.baseURL = 'https://643460021c5ed06c95961861.mockapi.io/ADI';

const endpoints = {
  users: '/users',
};

export async function GetUsers(queryLink) {
  const resp = await axios.get(`${endpoints.users}${queryLink}`);
  return resp;
}

export async function FollowingUser(id, followers, buttonStatus) {
  try {
    const { data } = await axios.put(`${endpoints.users}/${id}`, {
      followers,
      complited: buttonStatus,
    });
    return data;
  } catch (error) {
    console.log(error.message);
  }
}
