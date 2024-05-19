'use client'

import { useParams } from 'next/navigation'
import Button from '@mui/material/Button';
import Link from 'next/link';

import { Layout } from "@/components/admin/layout";
import { InfoBar } from '@/components/admin/in4-bar';
import { usersData } from "@/components/admin/static-data";

export default function Setting() {
    const { id } = useParams() as {id: string};
    // Get user information here
    let userData = usersData.find(user => user.id === id);
    return (
        <div>
            <Layout>
                <div className="flex min-h-screen flex-1 flex-col p-4">
                    <div className="flex items-center mb-8">
                        <h1 className="font-semibold text-lg md:text-2xl">{"Edit user's information"}</h1>
                    </div>
                    <div className="w-full mb-4">
                        <div>
                            <InfoBar label='Name' value={userData?.name}/>
                            <InfoBar label='Email' value={userData?.email}/>
                            <InfoBar label='Username' value={userData?.username}/>
                        </div>
                    </div>
                    <div className='flex space-x-4'>
                        <Button variant='outlined'>Update</Button>
                        <Link href='/admin'>
                            <Button variant='outlined'>Go back</Button>
                        </Link>
                        <Button variant='outlined'>Lock</Button>
                        <Button variant='outlined'>Delete</Button>
                    </div>
                </div>
            </Layout>
        </div>
    )
}