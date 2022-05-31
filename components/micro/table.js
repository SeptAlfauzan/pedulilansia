export default function Table({ data, key }) {
    console.log(data)
    return (
        <div className="relative overflow-x-auto shadow-md ">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Nama
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Keluhan
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Nomor Telp.
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Alamat
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Dibuat
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {data && data.map(d => (
                        <tr key={d.id} className="bg-white border-b   hover:bg-gray-50 ">
                            <th
                                scope="row"
                                className="px-6 py-4 font-medium text-gray-900  whitespace-nowrap"
                            >
                                {d.name}
                            </th>
                            <td className="px-6 py-4">
                                {d.complaint}
                            </td>
                            <td className="px-6 py-4">
                                {d.phone}
                            </td>
                            <td className="px-6 py-4">
                                {d.address}
                            </td>
                            <td className="px-6 py-4">
                                {d.created_at}
                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    );
}
