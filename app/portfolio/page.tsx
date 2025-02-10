import { getPortfolio } from "@/lib/providers/sanity/sanity";
export default async function Portfolio() {

  const portfolio = await getPortfolio({projectId: null});
  console.log(portfolio, "PORTFOLIO")
  return (
 
        <section className="flex items-center justify-center h-screen w-full  text-white relative" id="portfolio"> 
          {JSON.stringify(portfolio)}
        </section>
       
  );
}
