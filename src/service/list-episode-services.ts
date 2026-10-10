import { repositoryPodCast } from "../repository/podcats-repository";

export const serviceListEpisodes = async () =>{
    const data = await repositoryPodCast();
    return data;
};