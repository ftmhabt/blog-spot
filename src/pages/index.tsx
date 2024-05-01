import Posts from "../components/posts";
import Icon from "@mdi/react";
import { mdiTextSearchVariant } from "@mdi/js";

export default function Index() {
  return (
    <div className="text-[#2E2E2E]">
      <Hero />
      <Search />
      <Posts />
    </div>
  );
}

function Hero() {
  return (
    <div className="text-5xl p-[1.1rem] font-bold">
      <div>Find</div>
      <div className="pl-[3rem]">stories!</div>
    </div>
  );
}

function Search() {
  return (
    <div className="bg-[#F8F8F8] p-[1rem] flex gap-2 mb-[1rem] rounded-3xl">
      <Icon className="text-[#9CA3AF]" path={mdiTextSearchVariant} size={1} />
      <input className="w-full bg-[#F8F8F8]" type="text" placeholder="Search" />
    </div>
  );
}
