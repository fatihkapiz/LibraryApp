import axios from "axios"
import { config } from "./AuthInfo";

export async function addAuthor(authorName) {
  await axios.post("http://localhost:5025/Author", {
    name: authorName
  }, config()
  )
  .then(response => {
    return response;
  })
  .catch(error => {
    return error;
  });
}

export async function getAuthors() {
  let authors = [];

  await axios.get("http://localhost:5025/Author/list", config())
  .then(response => {
    if (response.statusText === "OK") {
      authors = response.data;
    }
  })
  .catch(error => {
    return error;
  });
  return authors;
}

export async function deleteAuthor(_id) {
  const url = "http://localhost:5025/Author".concat("?id=").concat(_id);
  console.log(url);
  await axios.delete(url, config())
  .then(response => {
    return response;
  })
  .catch(error => {
    return error;
  });
}

export async function editAuthor(author) {
  await axios.put("http://localhost:5025/Author", {id: author.id, name: author.name}, config())
  .then(response => {
    return response;
  })
  .catch(error => {
    return error;
  });
}

export async function getAuthor() {
  await axios.get("http://localhost:5025/Author", config())
  .then(response => {
    return response;
  })
  .catch(error => {
    return error;
  });
}