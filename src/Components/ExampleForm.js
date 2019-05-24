import React from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import './Example.scss';
import * as webConst from '../utils/WebConstants';
import { connect } from 'react-redux';
import { preLoadingDataRequest } from '../Container/action';
import * as formValidation from '../utils/validation';
let initObj;

class ExampleForm extends React.Component {

    onLoadform = () => {
        initObj = webConst.setDefaultValue(initObj);
        this.props.preLoadingDataRequest(initObj);
    }

    onResetForm = () => {
        initObj = webConst.removeDefaultValue(initObj);
        this.props.preLoadingDataRequest(initObj);
    }

    render() {
        const { invalid, handleSubmit, pristine, reset, submitting } = this.props;
        return (
            <div className="br-exple">
                <form onSubmit={handleSubmit}>

                    <div>
                        <label>Username</label>
                        <div>
                            <Field
                                validate={[formValidation.required]}
                                name={webConst.fielUserName}
                                component={formValidation.renderInputField}
                                type="text"
                                placeholder="First Name" />
                        </div>
                    </div>

                    <div>
                        <label>Email</label>
                        <div>
                            <Field
                                validate={[formValidation.required, formValidation.email]}
                                name={webConst.fielEmail}
                                component={formValidation.renderInputField}
                                type="email"
                                placeholder="Email"
                            />
                        </div>
                    </div>

                    <div>
                        <label>Phone</label>
                        <div>
                            <Field
                                validate={[formValidation.required]}
                                name={webConst.fielPhone}
                                component={formValidation.renderInputField}
                                type="number"
                                placeholder="Mobile"
                            />
                        </div>
                    </div>

                    <div>
                        <label>Sex</label>
                        <div>

                            <label>
                                <Field
                                    validate={[formValidation.required]}
                                    name={webConst.fielGender}
                                    component="input"
                                    type="radio"
                                    value="male"
                                />{' '}
                                Male
                          </label>

                            <label className="pl">
                                <Field
                                    validate={[formValidation.required]}
                                    name={webConst.fielGender}
                                    component="input"
                                    type="radio"
                                    value="female"
                                />{' '}
                                Female
                          </label>

                        </div>
                    </div>

                    <div>
                        <label>Favorite Color</label>
                        <div>
                            <Field
                                name={webConst.fielFavColor}
                                component={formValidation.renderSelectField}>
                                <option >Select any color ...</option>
                                <option value="Red">Red</option>
                                <option value="Green">Green</option>
                                <option value="Blue">Blue</option>
                            </Field>
                        </div>
                    </div>

                    <div className="el-check-row">
                        <div>
                            <Field
                                validate={[formValidation.required]}
                                name={webConst.fielEmployed}
                                id="employed"
                                component="input"
                                type="checkbox"
                            />
                        </div>
                        <label className="pl" htmlFor="employed">Employed</label>

                    </div>

                    <div>
                        <label>Notes</label>
                        <div>
                            <Field
                                validate={[formValidation.required]}
                                name={webConst.fielNotes}
                                component={formValidation.renderTextAreaField} />
                        </div>
                    </div>
                    <div className="btn-group">
                        <button className={invalid ? 'bt-active' : ''} type="submit" disabled={submitting}>Submit</button>
                        <button type="button" onClick={this.onResetForm}>Clear Preload</button>
                        <button type="button" onClick={this.onLoadform}>Preload</button>
                        <button type="button" disabled={pristine || submitting} onClick={reset}>Reset</button>

                    </div>
                </form>
            </div>
        );
    }
}


ExampleForm.defaultProps = {
    handleSubmit: () => { },
    reset: () => { },
    preLoadingDataRequest: () => { },
    pristine: false,
    submitting: false,
};

ExampleForm.propTypes = {
    handleSubmit: PropTypes.func,
    reset: PropTypes.func,
    preLoadingDataRequest: PropTypes.func.isRequired,
    pristine: PropTypes.bool,
    submitting: PropTypes.bool,
    invalid: PropTypes.bool,
    initialValues: PropTypes.any

};


function mapStateToProps(state) {
    return {
        initialValues: state.formReducer.loadData,
    };
}

const mapDispatchToProps = {
    preLoadingDataRequest
};

// eslint-disable-next-line no-class-assign
ExampleForm = reduxForm({
    form: 'exampleform',
    enableReinitialize: true
})(ExampleForm);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ExampleForm);