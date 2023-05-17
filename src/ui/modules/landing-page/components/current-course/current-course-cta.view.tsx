import { Container } from "@/ui/components";
import { Typography } from "@/ui/design-system";
import Image from "next/image";
import { RiPlayCircleLine } from "react-icons/ri";

export function CurrentCourseCtaView() {
  return (
    <Container className="py-24 text-center">
      <div className="">
        <Typography variant="h2" component="h2" className="mb-2.5">
          Formations React.js gratuite
        </Typography>
        <Typography variant="lead" component="h3" className="mb-5">
          Apprends à coder l’app des singes codeurs
        </Typography>
        <Typography
          variant="caption3"
          component="p"
          className="mb-16"
          theme="gray"
        >
          Si tu veux un CV plus sexy que ton ex, suis cette formation complète !
        </Typography>
        <a href="https://youtube.com" target="_blank">
          <div className="relative bg-gray-400 rounded h-[626px]">
            <div className="relative flex flex-col items-center justify-center gap-2 text-white h-full bg-gray z-10 opacity-0 hover:opacity-75 animate duration">
              <RiPlayCircleLine size={42}/>
              <Typography variant="caption2" theme="white" className="uppercase font-medium">Lire la formation</Typography>
            </div>
            <Image
              fill
              src={"/assets/images/coders-monkeys-course-cta.png"}
              alt=""
              className="object-cover object-center rounded"
            />
          </div>
        </a>
      </div>
    </Container>
  );
}
