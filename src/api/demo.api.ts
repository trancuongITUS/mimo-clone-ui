import APIService from "./base.api"

export const demo = async () => {
    const response = await APIService.get("");
    return response.data;
}