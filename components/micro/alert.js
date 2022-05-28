import React from 'react';

export default function Alert({ type, text }) {
    const [visible, setVisible] = React.useState(true);
    const close = () => setVisible(false);

    return (
        <div className={`w-full rounded-lg border ${type == 'sucess' ? 'border-emerald-500 bg-emerald-300' : 'border-red-500 bg-red-300'} ${!visible ? 'hidden' : null} px-3 py-1 flex justify-between`}>
            {text}
            <button onClick={close} className={`border rounded-full w-5 h-5 flex items-center justify-center ${type == 'sucess' ? 'border-emerald-500 bg-emerald-400 text-emerald-800' : 'border-red-500 bg-red-400 text-red-800'} font-bold`}>&times;</button>
        </div>
    )
}