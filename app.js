const desc = 'I just learned how to create a React node and render it into the DOM.';
// const myTitleID = 'main-title';
// const name = 'Donovan';


// const header = (
//   <header>
//   {/* this is a comment */}
//       <h1 id={myTitleID}>{ name }'s First React Element!</h1>
//       <p className="main-desc">{ desc }</p>
//   </header>
// );

function Header() {
  return (
    <header>
      <h1>Scoreboard</h1>
      <span className='stats'>Player 1:</span>
    </header>
  );
}

ReactDOM.render(
    header,
    document.getElementById('root')
);
