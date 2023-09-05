import styles from './customeCheck.module.css';
const CustomeCheck = (props) => {
  const {
    inputId,
    labelFor,
    inputName,
    inputType,
    inputClass,
    labelClass,
    inputValue,
    labelText,
    onClick,
  } = props;
  return (
    //For radio
    // "radioCustom" this is a class for radio
    // "radioCustomLabel" this is a class for label for radio
    //For checkbox
    // "checkboxCustom" this is a class for radio
    // "checkboxCustomLabel" this is a class for label for radio

    <div>
      <div>
        <input
          id={inputId}
          className={styles[inputClass]}
          name={inputName}
          type={inputType}
          value={inputValue}
          onClick={onClick}
        />
        <label htmlFor={labelFor} className={styles[labelClass]}>
          {labelText}
        </label>
      </div>

      {/* <div>
            <input id="checkbox1" className={styles.checkboxCustom} name="checkbox1" type="checkbox" />
            <label htmlFor="checkbox1" className={styles.checkboxCustomLabel}>First Choice</label>
        </div> */}
    </div>
  );
};

export default CustomeCheck;
