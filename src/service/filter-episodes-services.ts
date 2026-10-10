import { IncomingMessage } from "node:http";
import { repositoryPodCast } from "../repository/podcats-repository";

export const serviceFilterEpisode =  async (podCastName: IncomingMessage) => {
    const queryString = podCastName.url?.split("?p=")[1] ?? "";
    const data = await repositoryPodCast(queryString);
    return data;
};