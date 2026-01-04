import React from 'react'

const BaseSection = ({
                         children,
                     }: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <section className="container content-wrapper">
            {children}
        </section>
    )
}
export default BaseSection