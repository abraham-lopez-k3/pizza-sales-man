import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import * as actions from '../../../store/actions/actions'

import Spinner from '../../UI/Spinner/Spinner'
import Category from './Category/Category'
import Cart from './Cart/Cart'

import style from './menu.module.css'

function Menu(props) {
    const { menu, error, isLoading, initMenu } = props

    useEffect(() => {
        if (menu.length === 0) { initMenu() }
    }, [initMenu, menu])
    // Scroll To Top
    useEffect(() => window.scrollTo(0, 0), [])

    const display = menu.map(categoryData => <Category
        name={categoryData.name}
        items={categoryData.items}
        key={categoryData.name}
    />)

    return (
        <>
            <div className={`container mt-5 pt-2 ${style.Body}`}>
                <h1 className="display-6 mb-0">
                    <strong>MENU</strong>
                </h1>
                <div className={`mt-1 mb-4 ${style.HR}`} />
                <div className="row">
                    <div className="col-lg-8">
                        {error ?
                            <div class="alert alert-danger" role="alert">
                                <strong>{error}</strong>
                            </div>
                            : isLoading ?
                                <Spinner />
                                : display}
                    </div>
                    <div className="col-lg-4 mb-5">
                        <Cart />
                    </div>
                </div>
            </div>
        </>
    )
}


const mapStateToProps = state => ({
    menu: state.menu.menu,
    isLoading: state.menu.isLoading,
    error: state.menu.error
})

const mapDispatchToProps = dispatch => ({
    initMenu: () => dispatch(actions.initMenu())
})

export default connect(mapStateToProps, mapDispatchToProps)(Menu)