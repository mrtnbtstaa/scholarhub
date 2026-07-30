import Card from "@/components/shared/Card/Card";
import FormField from "@/components/ui/FormField/FormField";
import Input from "@/components/ui/Input/Input";
import Label from "@/components/ui/Label/Label";
import TextArea from "@/components/ui/TextArea/TextArea";
import Image from "next/image";

const SeoPublishing = () => {
  return (
    <Card className="p-4">
      <div className="grid lg:grid-cols-2 grid-cols-1 grid-rows-1 gap-4">
        <div>
          <h3 className="text-sm tracking-wider font-semibold">
            Search Engine Optimization
          </h3>
          <FormField>
            <Label htmlFor="Meta Title">Meta Title</Label>
            <Input placeholder="Scholarship Provider" />
          </FormField>
          <FormField>
            <Label htmlFor="Meta Description">Meta Description</Label>
            <TextArea
              className="whitespace-pre-line"
              placeholder="Apply for the prestigious MEXT Undergraduate Scholarship 2026. Fully funded study in Japan for international students. Applications open now."
            />
          </FormField>
          <FormField>
            <Label htmlFor="Seo Keywords">Seo Keywords</Label>
            <Input placeholder="Add keyword..." />
          </FormField>
        </div>
        <Card className="">
          <div className="relative h-full">
            <Image
              src={"/assets/hero.png"}
              alt="Banner Preview Image"
              fill
              priority
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            />
          </div>
          <p>SCHOLARHUB.COM</p>
        </Card>
      </div>
    </Card>
  );
};

export default SeoPublishing;
