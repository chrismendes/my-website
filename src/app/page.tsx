import { fetchHomeData, HomeViewModel, HomeHero } from "@/features/home";
import { withPrismicFieldComponents } from "@/ui";
import { notFound } from "next/navigation";

export default async function Home() {

  const data = await fetchHomeData();
  if (!data) {
    return notFound();
  }
  const viewModel = new HomeViewModel(data);
  const Hero = withPrismicFieldComponents(HomeHero);
  
  return (
    <Hero
      headline={viewModel.headline}
      intro={viewModel.intro}
      keySkills={viewModel.keySkills}
      picture={viewModel.picture}
    />
  );
}