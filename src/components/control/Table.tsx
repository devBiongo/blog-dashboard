/** @format */

interface DataSourceItem {
    key: string;
    [key: string]: any;
}

interface ColumnItem {
    title: string;
    dataIndex: string;
    key: string;
    render?: (content: any, record: any) => React.ReactNode;
}

interface TableProps {
    dataSource: DataSourceItem[];
    columns: ColumnItem[];
}

const Table = ({ dataSource, columns }: TableProps) => {
    return (
        <div className='overflow-x-auto'>
            <table className='table-auto w-full border-collapse rounded font-sans text-sm text-[#2a2929]'>
                <thead>
                    <tr className='bg-[#fafafa] border-b border-[#f8f8f9]  font-medium text-md'>
                        {columns.map((column, index) => (
                            <th key={index} className='p-3 text-left'>
                                {column.title}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {dataSource.map((data) => (
                        <tr key={data.key} className='border-b border-[#eeeaea] hover:bg-[#f5f7fa]'>
                            {columns.map((column) => {
                                return (
                                    <td key={column.key} className='p-3'>
                                        {column.render ? column.render(data[column.dataIndex], data) : data[column.dataIndex]}
                                    </td>
                                );
                            })}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
