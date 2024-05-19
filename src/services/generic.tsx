import axios from 'axios';

const baseURL = ''; // Note: Should get the url from the .env file.

export const configHeader = function (token: String) { // Will add other things if needed
    return {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
    };
};

export const get = function (url: string, token: string) {
    console.log(baseURL + url);
    return new Promise((resolve, reject) =>
      axios
        .get(baseURL + url, configHeader(token))
        .then(res => {
          // return data
          return resolve({data: res.data});
        })
        .catch(err => {
          // return err message
          if (!err.response) {
            return reject(err.message);
          }
          return reject(err.response.data.message);
        }),
    );
};
  
export const post = function (url: string, data: any, token: string) {
    console.log(baseURL + url);
    return new Promise((resolve, reject) =>
      axios
        .post(baseURL + url, data, configHeader(token))
        .then(res => {
          // return data
          return resolve({data: res.data});
        })
        .catch(err => {
          // return err message
          if (!err.response) {
            return reject(err.message);
          }
          return reject(err.response.data.message);
        }),
    );
};

export const put = function (url: string, data: any, token: string) {
    console.log(baseURL + url);
    return new Promise((resolve, reject) =>
      axios
        .put(baseURL + url, data, configHeader(token))
        .then(res => {
          // return data
          return resolve({data: res.data});
        })
        .catch(err => {
          // return err message
          if (!err.response) {
            return reject(err.message);
          }
          return reject(err.response.data.message);
        }),
    );
};
  
export const patch = function (url: string, data: any, token: string) {
    console.log(baseURL + url);
    return new Promise((resolve, reject) =>
      axios
        .patch(baseURL + url, data, configHeader(token))
        .then(res => {
          // return data
          return resolve({data: res.data});
        })
        .catch(err => {
          // return err message
          if (!err.response) {
            return reject(err.message);
          }
          return reject(err.response.data.message);
        }),
    );
};
  
export const remove = function (url: string, token: string) { // As delete is a keyword
    console.log(baseURL + url);
    return new Promise((resolve, reject) =>
      axios
        .delete(baseURL + url, configHeader(token))
        .then(res => {
          // return data
          return resolve({data: res.data});
        })
        .catch(err => {
          // return err message
          if (!err.response) {
            return reject(err.message);
          }
          return reject(err.response.data.message);
        }),
    );
};