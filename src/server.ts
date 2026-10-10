import * as http from "http";
import { getFilterEpisodes, getListEpisodes } from "./controllers/podcast-controller";

const server = http.createServer( 
    async (req: http.IncomingMessage, res: http.ServerResponse) => {

    // Querry String
    const [baseUrl, querryString] = req.url?.split("?") ?? ["", ""];

    // List PodCast
    if(req.method === "GET" && baseUrl === "/api/list"){
        await getListEpisodes(req, res);
    }

    // List PodCast by episode
    if(req.method === "GET" && baseUrl === "/api/episode"){
        await getFilterEpisodes(req, res);
    }


});
const port = process.env.PORT

server.listen(port, () => {
    console.log(`Você acessou a porta ${port}!`)
});