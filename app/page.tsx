import Header from "@/components/Header";
import FooterCredits from "@/components/index/FooterCredits";

export default function Index() {
  return (
    <div className="flex flex-col justify-between min-h-screen bg-background">
      <div className="flex flex-col items-center justify-center flex-1 pb-16">
        <div className="animate-in-index max-w-4xl px-4 py-8 mx-auto animate-fade-in">
          <Header />
        </div>
      </div>
      <FooterCredits />
    </div>
  );
}
