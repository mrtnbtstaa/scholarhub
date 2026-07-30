import Card from "@/components/shared/Card/Card";
import Upload from "@/components/shared/Upload/Upload";
import FormField from "@/components/ui/FormField/FormField";
import Label from "@/components/ui/Label/Label";

const MediaResources = () => {
  return (
    <Card className="p-4">
      <div className="flex items-center gap-4">
        <FormField className="w-full">
          <Label htmlFor="scholarship logo">Scholarship Logo</Label>
          <Upload
            uploadState="uploading"
            title="Upload Logo"
            description="Drag and drop to upload logo and the supported files (PNG, JPG, JPEG,
                SVG) up to 2MB"
          />
        </FormField>
        <FormField className="w-full">
          <Label htmlFor="Banner">Banner</Label>
          <Upload
            uploadState="idle"
            title="Upload Banner"
            description="Drag and drop to upload banner recommended high resolution and
                the supported files (PNG, JPG, JPEG) up to 3MB"
          />
        </FormField>
      </div>
    </Card>
  );
};

export default MediaResources;
