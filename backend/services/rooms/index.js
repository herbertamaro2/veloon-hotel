import { rooms } from './room.js';

export const add = async (formData) => {
    const { name, cpf, telefone, email, room } = formData;
    console.log('Processing form data:', { name, cpf, telefone, email });
    return { success: true, message: 'Form processed successfully' };
};


export const listRooms = async (dateFrom, dateTo) => {
    // console.log(rooms, 'test')
    return { success: true, rooms: rooms };
};