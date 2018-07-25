import React, {Component} from 'react'
import {connect} from 'react-redux'

import ItemList from './components/ItemList'

class List extends Component {
    render () {
        return (
            <div>
                {
                    this.props.toDo.map((item, index) => {
                        return (
                            <ItemList
                                key={index}
                                data={{
                                    name: item,
                                    index
                                }}
                            />
                        )
                    })
                }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    toDo: state.toDo
})
const mapActionToProps = dispatch => ({})

export default connect(
    mapStateToProps,
    mapActionToProps
)(List)
