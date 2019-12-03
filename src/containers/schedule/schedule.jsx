import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import {connect} from 'react-redux';
import AddSchedule from '../../components/schedule/addSchedule';

class ScheduleContainer extends Component {

    constructor(props) {
        super(props)
        console.log(props);
        this.toggleModal = this.toggleModal.bind(this);

        this.state = {
            isOpen: false,
            schedule: {}
        }
    }

    toggleModal = () => {
        this.setState(state => ({
            isOpen: !state.isOpen
        }));
        console.log(this.state)
    }

    getScheduleData = (childData) => {
        console.log(childData)
        this.toggleModal();
    }

    newSchedule = (schedule) => {
        this.setState({ schedule: schedule });
        this.props.createSchedule(schedule);
    }

    render() {
        return (
            <div>
                <Button
                    variant="contained" color="primary"
                    style={{ alignItems: 'left' }}
                    onClick={() => this.toggleModal()}>
                    Add Schedule
            </Button>
                {this.state.isOpen ? <AddSchedule show={this.state.isOpen} getScheduleCallBack={this.getScheduleData}></AddSchedule> : ''}

                <h1>This is schedule container</h1>
            </div>
        )
    }
}


// const mapDispatchToProps = dispatch => {

//     schedule
// }

export default connect()(ScheduleContainer);