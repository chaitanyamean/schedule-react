import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import AddSchedule from '../../components/schedule/addSchedule';
import { addSchedule } from '../../actions/schedule.actions';

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

    getScheduleData = (schedule) => {
        console.log(schedule)
        this.toggleModal();
        this.setState({ schedule: schedule });
        this.props.addSchedule(schedule);
    }

    render() {
        console.log('schedules', this.props.schedules)
        return (
            <div>
                <Button
                    variant="contained" color="primary"
                    style={{ alignItems: 'left' }}
                    onClick={() => this.toggleModal()}>
                    Add Schedule
            </Button>
                {this.state.isOpen ? <AddSchedule show={this.state.isOpen} getScheduleCallBack={this.getScheduleData}></AddSchedule> : ''}
                {this.props.schedules.length === 0 ? (
                    <div>
                        <h1>No schedule added</h1>

                    </div>
                ) : (
                        <div>
                            <h1>we have schedule but need to map</h1>
                            {
                                this.props.schedules.map(data => (
                                    <h1 key={data.name}>{data.name}</h1>
                                ))
                            }

                        </div>
                    )}
            </div>
        )
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        addSchedule: schedule => dispatch(addSchedule(schedule))
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        schedules: state.schedule
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ScheduleContainer);