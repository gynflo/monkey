import { Typography } from "@/ui/design-system";
import clsx from "clsx";
import { useRouter } from "next/router";
import { RiHome3Line } from "react-icons/ri";
import { v4 } from "uuid";
import { Container } from "../Container/container";
import Link from "next/link";



export function Breadcrumbs() {
  const router = useRouter();
  const asPath = router.asPath;
  console.log("🚀 ~ file: bredcrumbs.tsx:12 ~ Breadcrumbs ~ asPath:", asPath);

  const asPathSegment = asPath.split("/");
  const lastAsPathSegment = asPathSegment[asPathSegment.length - 1];
  asPathSegment[0] = "accueil";

  const view = asPathSegment.map((path, index) => (
    <div key={v4()}>
      <Link
        href={
          index > 0 ? `/${asPathSegment.slice(1, index + 1).join("/")}` : "/"
        }
      >
        <Typography
          variant="caption3"
          component="span"
          className={clsx(
            path !== lastAsPathSegment ? "text-gray-600" : "text-gray",
            "capitalize hover:text-gray animate"
          )}
        >
          {path !== asPathSegment[0] ? (
            path.replaceAll(/-/g, " ")
          ) : (
            <RiHome3Line className="inline -mt-1" />
          )}
        </Typography>
        {path !== lastAsPathSegment && (
          <Typography
            variant="caption2"
            component="span"
            className="ml-2 text-gray-600"
          >
            /
          </Typography>
        )}
      </Link>
    </div>
  ));

  return <Container className="flex items-center gap-2 p-7">{view}</Container>;
}
