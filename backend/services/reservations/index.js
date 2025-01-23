import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, './reservations.json');

export const add = async (formData) => {
    const { user, room } = formData;

    const newData = {user, timestamp: new Date().toISOString(), room };
    let existingData = [];
    try {
        const fileContents = fs.readFileSync(filePath, 'utf-8');
        existingData = JSON.parse(fileContents);
    } catch (err) {
        console.log('No existing data or error reading file, starting fresh.');
    }

    existingData.push(newData);


    try {
        fs.writeFileSync(filePath, JSON.stringify(existingData, null, 2));
        console.log('Data successfully written to file.');
    } catch (err) {
        console.error('Error writing to file:', err);
        return { success: false, message: 'Error saving data to file' };
    }

    return { success: true, message: 'Form processed successfully and saved to file', data: newData };
};

export const listReservations = async (dateFrom, dateTo) => {
    try {

        const data = fs.readFileSync(filePath, 'utf8');
        

        const reservations = JSON.parse(data);
        
 
        const filteredReservations = reservations.filter(reservation => {
            const reservationDate = new Date(reservation.date);
            return reservationDate >= new Date(dateFrom) && reservationDate <= new Date(dateTo);
        });

        // Return the filtered reservations
        return { success: true, reservations: reservations };
    } catch (error) {
        console.error("Error reading reservations file:", error);
        return { success: false, message: 'Error reading reservations' };
    }
};