import { Seo } from "@/ui/components/Seo";
import { Button } from "@/ui/design-system/Button/Button";
import { Typography } from "@/ui/design-system/Typography/Typography";
import { RiUser6Fill, RiBookmarkLine, RiAwardFill, RiArrowRightLine } from "react-icons/ri";

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
      <div className="flex items-center gap-4 p-10">
        <Button size="small" variant="accent" icon={{ icon: RiArrowRightLine }}>
          Commencer
        </Button>
        <Button size="small" variant="secondary">
          Commencer
        </Button>
        <Button size="small" variant="outline">
          Commencer
        </Button>
        <Button size="small" variant="disabled" disabled>
          Commencer
        </Button>
        <Button size="small" variant="ico" icon={{ icon: RiUser6Fill }} />
        <Button
          iconTheme="secondary"
          size="small"
          variant="ico"
          icon={{ icon: RiUser6Fill }}
        />
        <Button
          iconTheme="gray"
          size="small"
          variant="ico"
          icon={{ icon: RiUser6Fill }}
        />
      </div>
      <div className="flex items-center gap-4 p-10">
        <Button variant="accent" icon={{ icon: RiArrowRightLine }}>
          Commencer
        </Button>
        <Button variant="secondary">Commencer</Button>
        <Button variant="outline">Commencer</Button>
        <Button variant="disabled" disabled>
          Commencer
        </Button>
        <Button variant="ico" icon={{ icon: RiBookmarkLine }}></Button>
        <Button
          iconTheme="secondary"
          variant="ico"
          icon={{ icon: RiBookmarkLine }}
        ></Button>
        <Button
          iconTheme="gray"
          variant="ico"
          icon={{ icon: RiBookmarkLine }}
        ></Button>
      </div>
      <div className="flex items-center gap-4 p-10">
        <Button size="large" variant="accent" icon={{ icon: RiArrowRightLine }}>
          Commencer
        </Button>
        <Button size="large" variant="secondary">
          Commencer
        </Button>
        <Button size="large" variant="outline">
          Commencer
        </Button>
        <Button size="large" variant="disabled" disabled>
          Commencer
        </Button>
        <Button
          size="large"
          variant="ico"
          icon={{ icon: RiAwardFill }}
        ></Button>
        <Button
          iconTheme="secondary"
          size="large"
          variant="ico"
          icon={{ icon: RiAwardFill }}
        ></Button>
        <Button
          iconTheme="gray"
          size="large"
          variant="ico"
          icon={{ icon: RiAwardFill }}
        ></Button>
      </div>
    </>
  );
}
