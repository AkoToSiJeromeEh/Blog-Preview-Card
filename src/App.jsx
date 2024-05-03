import "./App.css";
import { Card } from "./components";
import { BlogImage, BlogUsrProf } from "./assets";
function App() {
  return (
    <main className=" bg-primary-yellow min-h-dvh flex items-center justify-center ">
      <Card
        BlogImage={BlogImage}
        BlogType="Learning"
        BlogDate="Published 21 Dec 2023"
        BlogTitle="HTML & CSS foundations"
        BlogDesc="These language are the backbone of every website , defining structure , content ,
       and presentation."
        BlogUsrProf={BlogUsrProf}
        BlogUsrName="Greg Hopper"
      />
    </main>
  );
}

export default App;
