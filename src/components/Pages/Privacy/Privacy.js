import React, { useEffect } from 'react'

import PageInfo from '../../UI/PageInfo/PageInfo'

function Privacy() {
    // Scroll To Top
    useEffect(() => window.scrollTo(0, 0), [])


    return (
        <>
            <PageInfo>
                PRIVACY POLICY
            </PageInfo>
            <div className="container my-5 py-2">

            </div>
        </>
    )
}

export default Privacy