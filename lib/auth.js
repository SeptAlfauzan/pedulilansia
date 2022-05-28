import * as bycrypt from 'bcrypt';
import * as bcrypt from 'bcrypt';
import jsonwebtoken from 'jsonwebtoken';
import { supabase } from './supabase';

export default async function login(username, plainPassword) {
    const { data, error } = await supabase
        .from('admins')
        .select()
        .match({ username });
    if (error) throw error;

    const { password } = data[0]
    const compare = bcrypt.compareSync(plainPassword, password);
    if (!compare) throw { message: 'Password salah' };
    if (compare) return jsonwebtoken.sign({
        data: {
            username
        }
    }, 'secret', { expiresIn: 60 * 60 });
} 