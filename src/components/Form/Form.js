import { useState } from 'react';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import styles from '../Form/Form.module.css';
import actions from '../../redux/contacts/actions';

function Form({ onAddContact }) {
  const prodIdName = uuidv4();
  const prodIdNumber = uuidv4();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    /*Before Redux*/
    /* const contacts = {
      name,
      number,
      id: uuidv4(),
    };*/

    onAddContact(name, number);
    resetForm();
  };

  //очистка формы
  const resetForm = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.label} htmlFor={prodIdName}>
        Name
      </label>
      <input
        className={styles.input}
        id={prodIdName}
        type="text"
        name="name"
        value={name}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
        onChange={handleChange}
      />
      <br />
      <label className={styles.label} htmlFor={prodIdNumber}>
        Number
      </label>
      <input
        className={styles.input}
        id={prodIdNumber}
        type="tel"
        name="number"
        value={number}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
        required
        onChange={handleChange}
      />
      <button className={styles.button} type="submit">
        Add contact
      </button>
    </form>
  );
}

Form.propTypes = {
  onAddContact: PropTypes.func.isRequired,
  number: PropTypes.number,
  name: PropTypes.string,
};

const mapDispatchToProps = dispatch => {
  return {
    onAddContact: (name, number) =>
      dispatch(actions.onAddContact(name, number)),
  };
};

export default connect(null, mapDispatchToProps)(Form);
