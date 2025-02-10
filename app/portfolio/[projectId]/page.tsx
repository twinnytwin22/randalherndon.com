import React from 'react'


type Props = {
    params: Promise<{ projectId: string }>;
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
  };

async function page({params}: Props) {

    const {projectId} =  await params
    return (
    <div>
        <h1>Project {projectId}</h1>

    </div>
  )
}

export default page