const History = ({ history }) => {
  return (
    <div className="history">
      <h2>History</h2>
      <textarea id="historyList" value={history.join("\n")} readOnly />
    </div>
  );
};

export default History;
