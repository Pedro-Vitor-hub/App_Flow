import { IncomingMessage, ServerResponse } from "node:http";
import { serviceListEpisodes } from "../service/list-episode-services";
import { serviceFilterEpisode } from "../service/filter-episodes-services";


export const getListEpisodes =  async (req: IncomingMessage, res: ServerResponse) => {
    const content = await serviceListEpisodes();
    res.writeHead(200, {"Content-Type": "application/json"});
    res.end(
        JSON.stringify(content)
    );
};

export const getFilterEpisodes = async (req: IncomingMessage, res: ServerResponse) => {

    const content = await serviceFilterEpisode(req);

    res.writeHead(200, {"Content-Type": "application/json"});
    res.end(
        JSON.stringify(content)
    );
};
