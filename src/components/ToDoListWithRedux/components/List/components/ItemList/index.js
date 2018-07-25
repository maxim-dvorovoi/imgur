import React, {Component} from 'react'
import {connect} from 'react-redux'

class ItemList extends Component {
    state = {
        editTumbler: false,
        value: ''
    }
    submitEditedValue = () => {
        const {data} = this.props
        const {value} = this.state
        this.props.EditValue(value, data.index)
        this.setState({editTumbler: false})
    }
    handleEditText = (e) => {
        this.setState({value: e.target.value})
    }
    componentWillMount () {
        this.setState({value: this.props.data.name})
    }
    render () {
        const {data, DeleteElement} = this.props
        const {editTumbler} = this.state
        return (
            <div>
                {
                    editTumbler
                        ? (
                            <input
                                type="text"
                                value={this.state.value}
                                onChange={this.handleEditText}
                            />
                        ) : data.name
                }
                {
                    !editTumbler
                        ? (
                            <div>
                                <button
                                    onClick={() => DeleteElement(data.index)}
                                >
                                    Delete
                                </button>
                                <button
                                    onClick={
                                        () => {
                                            this.setState({editTumbler: true})
                                        }
                                    }
                                >
                                    Edit
                                </button>
                            </div>
                        )
                        : (
                            <button onClick={this.submitEditedValue}>
                                Submit
                            </button>
                        )
                }
            </div>
        )
    }
}

const mapStateToProps = state => ({})
const mapActionToProps = dispatch => ({
    DeleteElement (index) {
        dispatch({type: 'DELETE_ELEMENT', payload: index})
    },
    EditValue (value, index) {
        dispatch({
            type: 'EDIT_VALUE',
            payload: {index, value}
        })
    }
})

export default connect(
    mapStateToProps,
    mapActionToProps
)(ItemList)
