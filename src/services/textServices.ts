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

export const getAllTexts = async () => {
    try {
        return await db('text_entries').select('*');
    } catch (error: any) {
        console.log(error);
        throw new Error (error.message)
    }
}

export const getTextById = async (id: number) => {
    try {
        return await db('text_entries').where({id}).first();
    } catch (error: any) {
        console.log(error);
        throw new Error (error.message)
    }
}

export const deleteTextById = async (id: number) => {
    try {
        return await db('text_entries').where({id}).del();
    } catch (error: any) {
        console.log(error);
        throw new Error (error.message)
    }
}   

export const updateTextById = async (id: number, content: string) => {
    try {
        return await db('text_entries').where({id}).update({content});
    } catch (error: any) {
        console.log(error);
        throw new Error (error.message)
    }
}
