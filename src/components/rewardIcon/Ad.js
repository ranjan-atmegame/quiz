'use client';

export default function Ad() {
  return (
    <div id="modal" className="modal">
      <div className="modalDialog">
        <p id="modalMessage"></p>

        <span className="grantButtons">
          <input
            type="button"
            onClick={() => console.log('...')}
            value="Close"
          />
        </span>
        <br />
        <br />
        <br />

        <span className="rewardButtons">
          <div>
            <input type="button" id="watchAdButton" value="Yes" />
          </div>
          <div>
            <input
              type="button"
              onClick={() => console.log('...')}
              value="No"
            />
          </div>
        </span>
      </div>
    </div>
  );
}
