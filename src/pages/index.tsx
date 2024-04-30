import Posts from "../components/posts";
import Icon from "@mdi/react";
import { mdiTextSearchVariant } from "@mdi/js";

export default function Index() {
  return (
    <div>
      <Hero />
      <Search />
      <Posts />
    </div>
  );
}

function Hero() {
  return (
    <div>
      <div>Find</div>
      <div>Stories</div>
    </div>
  );
}

function Search() {
  return (
    <div>
      <Icon path={mdiTextSearchVariant} size={1} />
      <input type="text" />
    </div>
  );
}
