import React from 'react'

async function page({params}: {params: {projectId: string}}) {

    const {projectId} = params
    return (
    <div>
        <h1>Project {projectId}</h1>

    </div>
  )
}

export default page