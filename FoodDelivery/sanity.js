import {createClient} from '@sanity/client';
import imageBuilder from '@sanity/image-url';

const client = createClient({
    projectId: 'byvcg14i',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2022-03-07',
    token: "sk4FPxDmbOv2RUJlCryDQLl7vHzXZBDkRNyJ58MeBABWTtdwKBVcnie1NhiK2leY73gzrgjBeA9qfKLbhKqozzrInWKMLUvhcB1MDmlv389uc0AWHqluFc0MBYYmnWQRQbt5BRalKlwjnDfql8elwhfz48WcBoPcg3qmwBhiYRZ4YCz30VgS"

})
const builder = imageBuilder(client);

export const urlFor = source=> builder.image(source);

export default client;