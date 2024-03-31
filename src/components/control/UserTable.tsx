/** @format */
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { User } from '@prisma/client';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

const UserTable = ({ users }: { users: User[] }) => {
    return (
        <div>
            <Table>
                <TableCaption>A list of your recent invoices.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className='w-[100px]'>头像</TableHead>
                        <TableHead>邮件</TableHead>
                        <TableHead>昵称</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {users.map((item) => (
                        <TableRow key={item.id}>
                            <TableCell className='font-medium'>
                                <Avatar className='w-[50px] h-[50px]'>
                                    <AvatarImage src={item.userProfilePhoto} alt='@biongo' />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                            </TableCell>
                            <TableCell>{item.userEmail}</TableCell>
                            <TableCell>{item.userNickname}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};

export default UserTable;
