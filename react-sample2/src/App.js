
// Important:
// For this project to work on CodeSandbox, image assets ("assets") folder
// must be stored in the public folder (as it's the case by default in this project)
import reactImg from './assets/react-core-concepts.png';

const reactDescriptions= [
  "React is a JavaScript library for building user interfaces",
  "React is declarative",
  "React is component-based",
  "React is learn once, write anywhere",
  "React is fast",
  "React is scalable",
  "React is popular",
  "React is open source"
];

function genRandomInt(max)  { return Math.floor(Math.random() * (max+1)); }

function Header(){

  return (
    <header>
        <img src={reactImg} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {reactDescriptions[genRandomInt(reactDescriptions.length-1)]} , 
          Fundamental React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
  );

}

function App() {
  return (
    <div>
     <Header />

      <main>
        <h2>Time to get started!</h2>
      </main>

      <footer>
        <table>
          <thead>
            <tr>
              <th>Column 1</th>
              <th>Column 2</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Row 1, Cell 1</td>
              <td>Row 1, Cell 2</td>
            </tr>
            <tr>
              <td>Row 2, Cell 1</td>
              <td>Row 2, Cell 2</td>
            </tr>
            <tr>
              <td>Row 3, Cell 1</td>
              <td>Row 3, Cell 2</td>
            </tr>
          </tbody>
        </table>
      </footer>
    </div>
  );
}

export default App;
