import React, { Component } from 'react';
import { getIssue, reportIssue } from '../api';

class ReportIssue extends Component {
  state = {
    issueList: [],
    issueId: null,
    issue: '',
    error: null,
    sucess: null,
  };

  componentDidMount() {
    getIssue()
      .then((issueList) => {
        this.setState({ issueList });
      })
      .catch((error) => {
        console.log('Error occurred while fetching records.');
      });
  }

  handleRadioSelect = (e) => {
    let issueId = e.target.value !== 'other' ? parseInt(e.target.value) : null;
    this.setState({ issueId });
  };

  submitIssue = () => {
    const { issueId, issue } = this.state;
    if (!issueId && !issue) {
      return this.setState({ error: 'Please select issue.' });
    }

    reportIssue({ issueId, issue })
      .then((response) => {
        this.setState({
          issueId: null,
          issue: '',
          error: null,
          success: 'Your issue have been submitted.',
        });
        setTimeout(() => {
          this.props.onDismiss();
        }, 2000);
        // setTimeout(this.props.onDismiss(), 2000);
      })
      .catch((error) => {
        console.log(error);
        this.setState({
          success: null,
          error: 'Someting went wrong. Please contact to site administrator',
        });
      });
  };

  buildIssueList = () => {
    return this.state.issueList.map((issue) => (
      <li key={issue.id}>
        <label>
          <input
            type="radio"
            className="option-input radio"
            name="issue"
            onClick={this.handleRadioSelect}
            value={issue.id}
          />
          {issue.issue}
        </label>
      </li>
    ));
  };

  render() {
    const { success, error } = this.state;
    return (
      <React.Fragment>
        <h2>Report and Issue</h2>
        <p className="mb-24 mt-8">What kind of problem have you encountered?</p>
        {success && <p>{success}</p>}
        {error && <p>{error}</p>}
        <ul>
          {this.buildIssueList()}
          <li>
            <label>
              <input
                type="radio"
                className="option-input radio"
                name="issue"
                value="other"
                onClick={this.handleRadioSelect}
              />
              Other
            </label>
          </li>
          <li>
            <label htmlFor="other">Enter other issues/problems</label>
            <textarea
              name=""
              id="other"
              placeholder=""
              cols="40"
              rows="3"
              onChange={(e) => this.setState({ issue: e.target.value })}
            ></textarea>
          </li>
          <li>
            <label>
              <input
                type="button"
                className="btn mt-16 shine"
                onClick={this.submitIssue}
                value="Send Feedback"
              />
            </label>
          </li>
        </ul>
      </React.Fragment>
    );
  }
}

export default ReportIssue;
