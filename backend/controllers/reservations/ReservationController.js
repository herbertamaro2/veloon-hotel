import { add, listReservations } from '../../services/reservations/index.js';


export async function list(req, res) {
  try {
    const { dateFrom, dateTo } = req.params;
    const result = await listReservations(dateFrom, dateTo);
    if (result.success) {
     // console.log(result, 'test result list')
      return res.status(200).json({ reservations: result.reservations });
    } else {
      return res.status(400).json({ message: 'Error processing form' });
    }
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}


export const addReservation = async (req, res) => {
  try {
    const formData = req.body;
    const result = await add(formData);

    if (result.success) {
      return res.status(200).json({ message: result.message });
    } else {
      return res.status(400).json({ message: 'Error processing form' });
    }
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};
