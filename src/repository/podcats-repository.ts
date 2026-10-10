import fs from 'fs';
import path from 'path';
import { PodCastModule } from '../module/podcast-module';

const pathData = path.join(__dirname, "../repository/podcast.json");

export const repositoryPodCast = async (podcastname?: string): Promise<PodCastModule[]> => {
    const rawdata = fs.readFileSync(pathData, "utf-8");
    let jsonFile = JSON.parse(rawdata);

   if (podcastname) {
        jsonFile = jsonFile.filter((podcast: PodCastModule) => podcast.podcastName === podcastname);
    }

    return jsonFile;
}

