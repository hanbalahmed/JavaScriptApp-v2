import { h1Styles } from "./styles/h1.style.js";
import { textStyle as text, codeStyle } from "./styles/text.style.js";

const App = `
 <h1 style="${h1Styles}">JAVASCRIPT APP</h1>
 <div className="text" style="${text}">
  <h3>Edit <code style="${codeStyle}">./js/main.js</code> to start!</h3>
 </div>
`;

export default App;
