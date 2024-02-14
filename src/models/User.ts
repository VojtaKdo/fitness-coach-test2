
export const signUp = async (formData: User) => {
  const res = await fetch("http://localhost:3000/api/v1/user", {
     headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
     },
     body: JSON.stringify(formData),
     method: "POST"
  })
  const data = await res.json();
  return {
    status: res.status,
    msg: data.msg,
  }
}

export type User = {
    id?: string,
    name?: string,
    surname?: string,
    email?: string;
    password?: string,
    dateOfBirth?: string,
    weight?: number,
    height?: number,
    bannerImagePath?: string,
    profileImagePath?: string,
    stats?: string,
    verified?: boolean,
    createdAt?: string,
    updatedAt?: string,  
}