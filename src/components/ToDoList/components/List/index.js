import React, {Component} from 'react'

import EditValue from './components/EditValue'

class List extends Component {
    render () {
        const {
            data,
            editItem,
            edit
        } = this.props
        return (
            <div>
                <ul>
                    {
                        data.map((item, index) => {
                            if (item.editState) {
                                return (
                                    <li
                                        key={index}
                                    >
                                        <EditValue
                                            value={item.value}
                                            submit={edit}
                                            index={index}
                                        />
                                    </li>
                                )
                            } else {
                                return (
                                    <li key={index}>
                                        {item.value}
                                        <button
                                            onClick={() => editItem(index)}
                                        >
                                            Edit
                                        </button>
                                    </li>
                                )
                            }
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default List
