import { useParams } from "react-router-dom";

function About() {
  const { name } = useParams()
  
  return (
    <div className="About">
      About {name}
    </div>
  );
}

export default About;