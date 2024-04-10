import { fetchHomeData, HomeViewModel, Hero } from "@/features/home";
import { notFound } from "next/navigation";

export default async function Home() {

  const data = await fetchHomeData();
  if (!data) {
    return notFound();
  }
  const viewModel = new HomeViewModel(data);
  
  return (
    <Hero
      headline={viewModel.headline}
      intro={viewModel.intro}
      keySkills={viewModel.keySkills}
      picture={viewModel.picture}
    />
  );
}