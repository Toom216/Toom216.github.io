import { $authHost, $host } from ".";

export const registration = async (email, password) => {
    const responce = await $host.post("api/auth/registration", { email, password, role: "ADMIN" });
    return responce;
};
export const login = async (email, password) => {
    const responce = await $host.post("api/auth/login", { email, password });
    return responce;
};
export const check = async () => {
    const responce = await $host.post("api/auth/registration");
    return responce;
};
