import CustomeCheck from '../ui/custome-check/customeCheck';
import styles from './report.module.css';
export default function ReportAnIssue() {
  return (
    <div className={styles.report}>
      <div className={styles.inner}>
        <div className={styles.wrapper}>
          <h1>Report an Issue</h1>
          <p>What kind of problem have you encountered?</p>
          <div className={styles.listSec}>
            <div className={styles.listCheck}>
              <div className={styles.close}></div>
              <CustomeCheck
                inputId="reportOne"
                labelFor="reportOne"
                inputName="reportOne"
                inputType="radio"
                inputClass="radioCustom"
                labelClass="radioCustomLabel"
                inputValue="It's not responding"
              />
            </div>
            <div className={styles.listCheck}>
              <CustomeCheck
                inputId="reportTwo"
                labelFor="reportTwo"
                inputName="reportOne"
                inputType="radio"
                inputClass="radioCustom"
                labelClass="radioCustomLabel"
                inputValue="It stopped working"
              />
            </div>
            <div className={styles.listCheck}>
              <CustomeCheck
                inputId="reportThree"
                labelFor="reportThree"
                inputName="reportThree"
                inputType="radio"
                inputClass="radioCustom"
                labelClass="radioCustomLabel"
                inputValue="Delayed loading"
              />
            </div>
            <div className={styles.listCheck}>
              <CustomeCheck
                inputId="reportFour"
                labelFor="reportFour"
                inputName="reportFour"
                inputType="radio"
                inputClass="radioCustom"
                labelClass="radioCustomLabel"
                inputValue="Game not responding"
              />
            </div>
            <div className={styles.listCheck}>
              <CustomeCheck
                inputId="reportFive"
                labelFor="reportFive"
                inputName="reportFive"
                inputType="radio"
                inputClass="radioCustom"
                labelClass="radioCustomLabel"
                inputValue="Instruction not clear"
              />
            </div>
            <div className={styles.listCheck}>
              <CustomeCheck
                inputId="reportSix"
                labelFor="reportSix"
                inputName="reportSix"
                inputType="radio"
                inputClass="radioCustom"
                labelClass="radioCustomLabel"
                inputValue="Other"
              />
            </div>
            <div className={styles.listCheck}>
              <label className={styles.lableText}>
                Enter other issues/problems
              </label>
              <input type="text" className={styles.inputText} />
            </div>
            <div className={styles.listCheck}>
              <button className={styles.reportBtn}>Send Feedback</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
