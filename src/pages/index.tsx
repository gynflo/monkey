import { Seo } from "@/ui/components/Seo";
import { Typography } from "@/ui/design-system/Typography/Typography";

export default function Home() {
  return (
    <>
      <Seo title="Gynflo Project" description="description"></Seo>
      <div className="space-y-5">
        <Typography variant="display" component="div" theme="primary">
          Coders Gynflo
        </Typography>
        <Typography variant="h1" component="div" theme="secondary">
          Coders Gynflo
        </Typography>
        <Typography variant="lead" component="div">
          Coders Gynflo
        </Typography>
        <Typography variant="body-sm" component="div">
          Coders Gynflo
        </Typography>
        <Typography variant="caption4" component="div">
          Coders Gynflo
        </Typography>
        <Typography variant="caption4" weight="medium" component="div">
          Coders Gynflo
        </Typography>
      </div>
    </>
  );
}
