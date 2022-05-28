import login from "../../lib/auth";
import { removeCookies, setCookies } from 'cookies-next';

export default async function handler(req, res) {
    const { method } = req;
    try {
        switch (method) {
            case 'POST':
                const { username, password } = req.body;
                const response = await login(username, password);
                // if (response.data == 'Login gagal') return res.status(404).json('login gagal')
                const oneDay = 60 * 60 * 24;
                console.log('response', response)
                setCookies('token', response, { req, res, maxAge: oneDay });
                res.status(200).json(response)
                break;
            case 'DELETE':
                break;
            case 'PUT':
                break
            default:
                const { logout, verify } = req.query;
                if (logout) {
                    removeCookies('token', { req, res })
                    res.status(200).json({ message: 'logout success' })
                }
                break;
        }
    } catch (error) {
        console.log(error.message)
        res.status(500).json({ message: error.message })
    }
}
