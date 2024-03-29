/** @format */

import Minio from 'minio';

export const minioClient = new Minio.Client({
    endPoint: '121.37.170.193',
    port: 19000,
    useSSL: false,
    accessKey: 'dSn4YFufa2wld5GAFe7l',
    secretKey: 'tsmnt7UBqvWgPzjAGW5TLLVKhPSX4v3eIEhTCe6m',
});

minioClient.getObject;
