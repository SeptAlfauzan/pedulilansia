import axios from 'axios';
import Image from 'next/image';
import React from 'react';
import UserLayout from '../../components/layouts/user';
import Alert from '../../components/micro/alert';
import Input from '../../components/micro/input';
import inputToObjParser from '../../lib/object';

export default function Report(props) {
    const [showalert, setShowalert] = React.useState(false);
    const [alertType, setAlertType] = React.useState(null);
    const [alertText, setAlertText] = React.useState(null);
    const [submited, setSubmited] = React.useState(false)
    const form = React.useRef(null);

    const handlesubmit = async (e) => {
        e.preventDefault();
        setSubmited(true)
        try {
            const obj = inputToObjParser();
            console.log(obj)
            await axios.post('/api/report', obj);
            setAlertType('success');
            setAlertText('Aduan anda berhasil terkirim');
        } catch (error) {
            console.log(error.message)
            setAlertType('fail');
            setAlertText('Aduan anda gagal terkirim');
        }
        form.current.reset()
        setSubmited(false)
        setShowalert(true);
    }
    return (
        <UserLayout>
            <section className='min-h-screen flex items-center justify-center'>
                <div className='relative w-full h-screen'>
                    <div className="bg-gradient-to-r from-transparent to-white h-full w-full absolute z-10"></div>
                    <Image src={'/images/checkup.jpg'} className='saturate-0 opacity-40' layout='fill' objectFit='cover' alt='.' />
                </div>
                <form ref={form} className=' z-30 absolute bg-white md:w-2/5 flex flex-col px-12 py-8 rounded-xl shadow-lg backdrop-blur-md' onSubmit={handlesubmit}>
                    {showalert && (
                        <Alert handleClose={() => setShowalert(false)} text={alertText} type={alertType} />
                    )}
                    <h3 className='text-2xl mb-3 w-3/4'>Isi data diri dan keluhan kesehatan anda</h3>

                    <div className='mt-5'>
                        <Input type='text' required label={'Nama'} name='name' />
                    </div>
                    <div className='mt-5'>
                        <Input type='text' required label={'Alamat'} name='address' />
                    </div>
                    <div className='mt-5'>
                        <Input type='number' required label={'Nomor Telp.'} name='phone' />
                    </div>
                    <div className='mt-5'>
                        <Input type='text' required label={'Keluhan'} name='complaint' />
                    </div>
                    <button disabled={submited} className='bg-blue-700 text-white px-4 py-2 text-sm rounded mt-4 ml-auto hover:bg-blue-600 disabled:bg-blue-300'>Kirim aduan</button>
                </form>
            </section>
        </UserLayout>
    )
}