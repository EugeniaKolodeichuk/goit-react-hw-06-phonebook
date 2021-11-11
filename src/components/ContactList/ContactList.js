import React from 'react';
import PropTypes from 'prop-types';
import styles from '../ContactList/ContactList.module.css';
import { connect } from 'react-redux';
import actions from '../../redux/contacts/actions';

const ContactList = ({ contacts, onDeleteContact }) => (
  <div className={styles.section}>
    <ul className={styles.list}>
      {contacts.map(({ id, name, number }) => (
        <li className={styles.item} key={id}>
          <p className={styles.name}> {name}:</p>
          <p className={styles.number}>{number}</p>
          <button
            className={styles.button}
            type="button"
            onClick={() => onDeleteContact(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  </div>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.any.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
};

const getVisibleContacts = (allContacts, filter) => {
  const normalizedFilter = filter.toLowerCase();

  return allContacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter),
  );
};

const mapStateToProps = ({ contacts: { items, filter } }) => ({
  contacts: getVisibleContacts(items, filter),
});

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(actions.onDeleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
