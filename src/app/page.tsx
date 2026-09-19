import { JsonLd } from "@/components/json-ld";
import {
  CtaSection,
  EngagementsSection,
  FaqSection,
  Hero,
  Marquee,
  MarketsSection,
  MethodSection,
  ServicesSection,
  StackSection,
  UseCasesSection,
} from "@/components/sections";

import { FAQ } from "@/constants";
import { faqSchema } from "@/lib/structured-data";

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqSchema(FAQ)} />
      <Hero />
      <Marquee />
      <ServicesSection />
      <MethodSection />
      <EngagementsSection />
      <UseCasesSection />
      <MarketsSection />
      <StackSection />
      <FaqSection />
      <CtaSection />
    </>
  );
}
