import { useState, useEffect } from 'react';
import { getIssueList, reportAnIssue } from '@/api';
import CustomeCheck from '../ui/custome-check/customeCheck';
import Toast from '../toast/toast';
import styles from './report.module.css';

export default function Report({ handleReportModal, onDismiss }) {
  const [state, setState] = useState({
    issueList: [],
    issueId: null,
    issue: null,
    error: null,
    success: null,
  });

  useEffect(() => {
    getIssueList()
      .then((issueList) => {
        setState((prevState) => ({ ...prevState, issueList }));
      })
      .catch((error) => {
        console.log('Something went wrong.');
      });
  }, []);

  const handleRadioSelect = (e) => {
    let issueId = e.target.value !== 'other' ? parseInt(e.target.value) : 0;
    setState((prevState) => ({ ...prevState, issueId }));
  };

  const submitIssue = () => {
    const { issueId, issue } = state;
    if (!issueId && !issue) {
      return setState((prevState) => ({
        ...prevState,
        error: 'Please select issue.',
      }));
    }

    reportAnIssue({ issueId, issue })
      .then((response) => {
        setState((prevState) => ({
          ...prevState,
          error: null,
          issue: null,
          issueId: null,
          success: 'Your issue have been submitted.',
        }));

        setTimeout(() => {
          handleReportModal();
        }, 2000);
      })
      .catch((error) => {
        setState((prevState) => ({
          ...prevState,
          success: null,
          error: 'Someting went wrong. Please contact to site administrator',
        }));
      });
  };

  const buildIssueList = () => {
    return state.issueList.map((issue) => (
      <div className={styles.listCheck} key={issue.id}>
        <CustomeCheck
          inputId={issue.id}
          labelFor={issue.id}
          inputName="issue"
          inputType="radio"
          inputClass="radioCustom"
          labelClass="radioCustomLabel"
          labelText={issue.issue}
          inputValue={issue.id}
          onClick={handleRadioSelect}
        />
      </div>
    ));
  };

  return (
    <>
      <div className={styles.report}>
        <div className={styles.inner}>
          <div className={styles.wrapper}>
            <h1>Report an Issue</h1>
            <p>What kind of problem have you encountered?</p>

            <div className={styles.listSec}>
              <div className={styles.listCheck}>
                <div className={styles.close} onClick={handleReportModal}></div>
              </div>

              {buildIssueList()}

              <div className={styles.listCheck}>
                <CustomeCheck
                  inputId="other"
                  labelFor="other"
                  inputName="issue"
                  inputType="radio"
                  inputClass="radioCustom"
                  labelClass="radioCustomLabel"
                  labelText="Other"
                  inputValue="other"
                  onClick={handleRadioSelect}
                />
              </div>
              {/* <div className={styles.listCheck}>
              <label className={styles.lableText}>
                Enter other issues/problems
              </label>
              <input type="text" className={styles.inputText} />
            </div> */}

              {state.issueId === 0 && (
                <div className={styles.listCheck}>
                  <label htmlFor="other">Enter other issues/problems</label>
                  <textarea
                    name=""
                    id="other"
                    placeholder=""
                    cols="40"
                    rows="3"
                    onChange={(e) =>
                      setState((prevState) => ({
                        ...prevState,
                        issue: e.target.value,
                      }))
                    }
                  ></textarea>
                </div>
              )}
              <div className={styles.listCheck}>
                <button className={styles.reportBtn} onClick={submitIssue}>
                  Send Feedback
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {state.success && <Toast message={state.success} />}
    </>
  );
}
