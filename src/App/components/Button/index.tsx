import React from 'react'

interface IProps {
    children: string
}

const button = (props: IProps) => {
return <button>{props.children}</button>
}

export default button
