import React, { Component } from 'react';
import { Select, InputNumber, Button, Empty} from 'antd';
import { connect } from 'react-redux';

import classes from './Generator.module.less';
import * as actions from '../store/actions/index';

import Card from '../components/Card/Card';



class Generator extends Component {

    componentDidMount() {
        this.props.onInitData();
    }
    
    onChangeRegionHandler = (event) => {
        this.props.onSetRegion(event);
    }

    onChangeGenderHandler = (event) => {
        this.props.onSetGender(event);
    }

    onChangeCountHandler = (event) => {
        if (event > 12) {
            this.props.onError('You can only retrieve 12 names at a time.')
        } else {
            this.props.onSuccess();
            this.props.onSetCount(event);
        }
    }

    onSubmitHandler = () => {
        this.props.onSubmit(this.props.form.chosenRegion, this.props.form.chosenGender, this.props.form.count);
        this.props.onSuccess();
    }

    onClearHandler = () => {
        this.props.onClearForm();
        this.props.onClearPersons();
        this.props.onSuccess();
    }

    render () {
        const Option = Select.Option;
        let regionSelect = null, regionOptions = null, genderSelect = null, genderOptions = null;

        if (this.props.form.region) {
            regionOptions = this.props.form.region.map(i => {
                return <Option key={i.id} value={i.value}>{i.value}</Option>
            })

            regionSelect = <Select 
                            defaultValue={ this.props.form.region ? this.props.form.region[0].value : '' } 
                            value={this.props.form.chosenRegion}
                            onChange={this.onChangeRegionHandler}>
                            {regionOptions}
                        </Select>
        }
        if (this.props.form.gender) {
            genderOptions = this.props.form.gender.map(i => {
                return <Option key={i.id} value={i.value}>{i.value}</Option>
            })

            genderSelect = <Select 
                            defaultValue={ this.props.form.gender ? this.props.form.gender[0].value : '' } 
                            value={this.props.form.chosenGender}
                            onChange={this.onChangeGenderHandler}>
                            {genderOptions}
                        </Select>
        }

        let cards = <Empty style={ { margin: 'auto' } }/>;
        if (this.props.persons.persons) {
            cards = this.props.persons.persons.map(person => {
                return <Card 
                        key={person.id} 
                        firstname={person.Firstname} 
                        lastname={person.Lastname} 
                        bday={person.Birthday} 
                        phone={person.number} />
            })
        }

        let contentTitle = <h3>Results {this.props.persons.comment}</h3>;
        let inputStyle = {};
        if (this.props.ui.isError) {
            contentTitle = <h3 style={ { color: 'red' } }>{this.props.ui.error}</h3>;
            inputStyle = { border: '1px solid red' };
        }


        return (
            <div className={classes.Generator}>
                <div className={classes.Form}>
                    <div>
                        <h4>REGION</h4>
                        {regionSelect}
                    </div>
                    <div><br /></div>
                    <div>
                        <h4>GENDER</h4>
                        {genderSelect}
                    </div>
                    <div><br /></div>
                    <div>
                        <InputNumber min={1} defaultValue={1} value={this.props.form.count}
                            onChange={this.onChangeCountHandler} style={inputStyle}/>
                    </div>
                    <div><br /></div>
                    <div>
                        <Button type="primary" onClick={this.onSubmitHandler}>Generate Names</Button>
                    </div>
                    <div><br /></div>
                    <div>
                        <Button onClick={this.onClearHandler}>Clear</Button>
                    </div>
                    <div><br /></div>
                </div>

                <div className={classes.Result}>                
                    {contentTitle}
                    <div className={classes.Content}> 
                        {cards}
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
      form: state.form,
      ui: state.ui,
      persons: state.persons
    };
};
  
const mapDispatchToProps = dispatch => {
    return {
        onInitData: () => dispatch( actions.initForm() ),
        onSetCount: (num) => dispatch( actions.setCount(num) ),
        onSetGender: (gender) => dispatch( actions.setGender(gender) ),
        onSetRegion: (region) => dispatch( actions.setRegion(region) ),
        onSubmit: (gender, region, count) => dispatch( actions.fetchPersons(gender, region, count) ),
        onClearForm: () => dispatch( actions.clearForm() ),
        onClearPersons: () => dispatch( actions.clearPersons() ),
        onError: (err) => dispatch( actions.initError(err) ),
        onSuccess: () => dispatch( actions.initSuccess() )
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Generator);
