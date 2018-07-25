import React, {Component} from 'react'

class EditItem extends Component {
    state = {
        editValue: ''
    }
    handleChangeValue = (e) => {
        this.setState({
            editValue: e.target.value
        })
    }
    submitChanges = () => {
        const {
            submit,
            index
        } = this.props
        submit(this.state.editValue, index)
    }
    componentWillMount () {
        this.setState({
            editValue: this.props.value
        })
    }
    render() {
        return (
            <div>
                <input
                    type="text"
                    value={this.state.editValue}
                    onChange={this.handleChangeValue}
                />
                <button
                    onClick={this.submitChanges}
                >
                    Submit
                </button>
            </div>
        )
    }
}

export default EditItem
