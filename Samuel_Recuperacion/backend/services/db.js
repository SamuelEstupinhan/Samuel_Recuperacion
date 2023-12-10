//Nos conectamos a la base de datos
import { createConnection } from 'mysql2/promise';
import { db } from '../config.js';

export async function query(sql, params) {
	const connection = await createConnection(db)
	const [results] = await connection.execute(sql, params)

	return results
}
