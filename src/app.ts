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
