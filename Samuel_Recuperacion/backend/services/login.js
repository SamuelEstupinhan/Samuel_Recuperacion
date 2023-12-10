import { query } from './db.js';
import { emptyOrRows } from '../helper.js';

async function getUserData(user, password) {
	const rows = await query(`
        select nombre, rol
        from usuarios
        where login = '${user}'
        and password = '${password}'
    `)

	const data = emptyOrRows(rows[0])

	return {
		data
	}
}

export {
	getUserData
}
