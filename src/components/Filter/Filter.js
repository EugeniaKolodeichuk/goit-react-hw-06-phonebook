import React from 'react';
import PropTypes from 'prop-types';
import styles from '../Filter/Filter.module.css';
import { connect } from 'react-redux';
import actions from '../../redux/contacts/actions';

const Filter = ({ contacts, onChange }) => (
  <div>
    <label className={styles.label}>
      Find contacts by name
      <input
        className={styles.input}
        type="text"
        value={contacts}
        onChange={onChange}
      />
    </label>
  </div>
);

Filter.propTypes = {
  contacts: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  contacts: state.contacts.filter,
});

const mapDispatchToProps = dispatch => ({
  onChange: event => dispatch(actions.onChangeFilter(event.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
