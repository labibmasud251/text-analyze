import knex from 'knex';
import config from '../../knexfile';

const db = knex(config.development);

export const createText = async(content: string) => {
    try {
        let [id] = await db('text_entries').insert({content});
        return { id, content };

    } catch (error: any) {
        console.log(error);
        throw new Error (error.message)
    }

}
