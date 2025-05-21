export interface User {
    firstName: string,
    lastName: string,
    emailId: string,
    password: string,
    age: number,
    gender: string,
    photoUrl: string,
    about: string,
    skills: [string],
    token?: string
}