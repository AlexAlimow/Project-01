import { Link } from "react-router-dom";
import RandomDog from "../../components/RandomDog/RandomDog";

export default function NotFound() {
  return (
    <div>
      <h2>Page not found</h2>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link to="/">Back to home</Link>
      <RandomDog />
    </div>
  );
}
