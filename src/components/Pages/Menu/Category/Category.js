import React from 'react'

import Item from './Item.js/Item'

import style from './category.module.css'

function Category(props) {
    const { name, items } = props

    const itemsDisplay = items.map(item => <Item
        key={item.id}
        name={item.name}
        desc={item.desc}
        price={item.price}
        imgLink={item.img}
    />)

    return (
        <div className="mt-4 mb-5">
            <div className={style.Row}>
                <h2 className={style.H2}>{name}</h2>
                <div className={`my-auto ${style.HR}`} />
            </div>
            {itemsDisplay}
        </div>
    )
}

export default Category