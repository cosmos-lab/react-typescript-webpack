function LazzyComponent() {
  return (
    <div>
      <div>I'm lazy</div>
      <input id="input" type="text" />
    </div>
  );
}

function UntestedLazzyComponent2() {
  return (
    <div>
      <div>I'm lazy</div>
      <input id="input" type="text" />
    </div>
  );
}

export { UntestedLazzyComponent2 };

export default LazzyComponent;
