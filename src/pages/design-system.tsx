import { Seo, Container, Navigation } from "@/ui/components";
import { Avatar, Button, Typography, Spinner, Logo } from "@/ui/design-system";

import {
  RiUser6Fill,
  RiBookmarkLine,
  RiAwardFill,
  RiArrowLeftLine,
  RiArrowRightLine,
} from "react-icons/ri";

export default function DesignSystem() {
  return (
    <>
      <Seo title="Design System" description="description"></Seo>
      <Navigation />
      <Container className="space-y-20 py-10">
        {/* Typography */}
        <div className="space-y-2">
          <Typography variant="caption3" className="font-medium mb-2">
            Typography
          </Typography>
          <div className="flex flex-col gap-2 border-gray-400 divide-y-2 divide-gray-400 rounded">
            <div className="pb-5 space-y-2">
              <Typography variant="caption3" className="font-medium">
                Display
              </Typography>
              <Typography variant="display">Nothing is impossible</Typography>
            </div>
            <div className="pb-5 space-y-2">
              <Typography variant="caption3" className="font-medium">
                H1
              </Typography>
              <Typography variant="h1" component="h1">
                Nothing is impossible the world itself says, i&apos;m possible!
              </Typography>
            </div>
            <div className="pb-5 space-y-2">
              <Typography variant="caption3" className="font-medium">
                H2
              </Typography>
              <Typography variant="h2" component="h2">
                Your time is limited, so don&apos;t watse it living someone
                else&apos;s life
              </Typography>
            </div>
            <div className="pb-5 space-y-2">
              <Typography variant="caption3" className="font-medium">
                H3
              </Typography>
              <Typography component="h3">
                Daily Report: Removing Checks to the power of the Internet
                Titans
              </Typography>
            </div>
            <div className="pb-5 space-y-2">
              <Typography variant="caption3" className="font-medium">
                H4
              </Typography>
              <Typography variant="h4" component="h4">
                Daily Report: Removing Checks to the power of the Internet
                Titans
              </Typography>
            </div>
            <div className="pb-5 space-y-2">
              <Typography variant="caption3" className="font-medium">
                H5
              </Typography>
              <Typography variant="h5" component="h5" className="font-medium">
                Daily Report: Removing Checks to the power of the Internet
                Titans
              </Typography>
            </div>
            <div className="pb-5 space-y-2">
              <Typography variant="caption3" className="font-medium">
                Lead
              </Typography>
              <Typography variant="lead" component="p" className="font-normal">
                Nothing is impossible the world itself says, i&apos;m possible!
              </Typography>
              <Typography variant="lead" component="p">
                Nothing is impossible the world itself says, i&apos;m possible!
              </Typography>
            </div>
            <div className="pb-5 space-y-2">
              <Typography variant="caption3" className="font-medium">
                Body-lg
              </Typography>
              <Typography variant="body-lg" component="p">
                When i was 5 years old, my mother always told me that happiness
                was the key to life.When i went to school, they asked me what i
                wanted to be when i grew up.
              </Typography>
            </div>
            <div className="pb-5 space-y-2">
              <Typography variant="caption3" className="font-medium">
                Body-base
              </Typography>
              <Typography variant="body-base" component="p">
                When i was 5 years old, my mother always told me that happiness
                was the key to life.When i went to school, they asked me what i
                wanted to be when i grew up.
              </Typography>
            </div>
            <div className="pb-5 space-y-2">
              <Typography variant="caption3" className="font-medium">
                Body-sm
              </Typography>
              <Typography variant="body-sm" component="p">
                When i was 5 years old, my mother always told me that happiness
                was the key to life.When i went to school, they asked me what i
                wanted to be when i grew up.
              </Typography>
            </div>
            <div className="flex justify-around">
              <div className="space-y-2">
                <Typography variant="caption3" className="font-medium">
                  Caption1
                </Typography>
                <Typography variant="caption1" className="font-medium">
                  Medium
                </Typography>
                <Typography variant="caption1">Regular</Typography>
              </div>
              <div className="pb-5 space-y-2 ml-3">
                <Typography variant="caption3" className="font-medium">
                  Caption2
                </Typography>
                <Typography variant="caption2" className="font-medium">
                  Medium
                </Typography>
                <Typography variant="caption2">Regular</Typography>
              </div>
              <div className="pb-5 space-y-2 ml-3">
                <Typography variant="caption3" className="font-medium">
                  Caption3
                </Typography>
                <Typography variant="caption3" className="font-medium">
                  Medium
                </Typography>
                <Typography variant="caption3">Regular</Typography>
              </div>
              <div className="pb-5 space-y-2 ml-3">
                <Typography variant="caption3" className="font-medium">
                  Caption4
                </Typography>
                <Typography variant="caption4" className="font-medium">
                  Medium
                </Typography>
                <Typography variant="caption4">Regular</Typography>
              </div>
            </div>
          </div>
        </div>

        {/* Spinners */}
        <div className="flex items-start gap-7">
          <div className="space-y-2">
            <Typography variant="caption2" className="font-medium">
              Spinner
            </Typography>
            <div className="flex items-center gap-2 p-5 border border-gray-400 rounded">
              <Spinner size="small" />
              <Spinner />
              <Spinner size="large" />
            </div>
          </div>
        </div>

        {/* Logo */}
        <div className="flex items-start gap-7">
          <div className="space-y-2">
            <Typography variant="caption2" className="font-medium">
              Logo
            </Typography>
            <div className="flex items-center gap-2 p-5 border border-gray-400 rounded">
              <Logo size="very-small" />
              <Logo size="small" />
              <Logo />
              <Logo size="large" />
            </div>
          </div>
        </div>

        {/* Avatar */}
        <div className="flex items-start gap-7">
          <div className="space-y-2">
            <Typography variant="caption2" className="font-medium">
              Avatar
            </Typography>
            <div className="flex items-center gap-2 p-5 border border-gray-400 rounded">
              <Avatar
                src="/assets/images/background.jpg"
                alt="Avatar de Daniel Lincoln"
                size="small"
              />
              <Avatar
                src="/assets/images/avatar.png"
                alt="Avatar de Daniel Lincoln"
              />
              <Avatar
                src="/assets/images/background.jpg"
                alt="Avatar de Daniel Lincoln"
                size="large"
              />
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="space-y-2">
          <Typography variant="caption2" className="font-medium">
            Buttons
          </Typography>
          <div className="p-5 space-y-8 border border-gray-400 rounded">
            <div className="space-y-2">
              <Typography variant="caption3" className="font-medium">
                Small
              </Typography>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Button size="small" variant="accent" isLoading>
                    Accent
                  </Button>
                  <Button
                    size="small"
                    variant="accent"
                    icon={{ icon: RiArrowLeftLine }}
                    iconPosition="left"
                  >
                    Accent
                  </Button>
                  <Button
                    size="small"
                    variant="accent"
                    icon={{ icon: RiArrowRightLine }}
                  >
                    Accent
                  </Button>
                  <Button size="small" variant="secondary" isLoading>
                    Accent
                  </Button>
                  <Button
                    size="small"
                    variant="secondary"
                    icon={{ icon: RiArrowLeftLine }}
                    iconPosition="left"
                  >
                    Accent
                  </Button>
                  <Button
                    size="small"
                    variant="secondary"
                    icon={{ icon: RiArrowRightLine }}
                  >
                    Accent
                  </Button>
                  <Button size="small" variant="outline" isLoading>
                    Accent
                  </Button>
                  <Button
                    size="small"
                    variant="outline"
                    icon={{ icon: RiArrowLeftLine }}
                    iconPosition="left"
                  >
                    Accent
                  </Button>
                  <Button
                    size="small"
                    variant="outline"
                    icon={{ icon: RiArrowRightLine }}
                  >
                    Accent
                  </Button>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <Typography variant="caption3" className="font-medium">
                Medium
              </Typography>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Button variant="accent" isLoading>
                    Accent
                  </Button>
                  <Button
                    size="small"
                    variant="accent"
                    icon={{ icon: RiArrowLeftLine }}
                    iconPosition="left"
                  >
                    Accent
                  </Button>
                  <Button variant="accent" icon={{ icon: RiArrowRightLine }}>
                    Accent
                  </Button>
                  <Button size="small" variant="secondary" isLoading>
                    Accent
                  </Button>
                  <Button
                    variant="secondary"
                    icon={{ icon: RiArrowLeftLine }}
                    iconPosition="left"
                  >
                    Accent
                  </Button>
                  <Button variant="secondary" icon={{ icon: RiArrowRightLine }}>
                    Accent
                  </Button>
                  <Button size="small" variant="outline" isLoading>
                    Accent
                  </Button>
                  <Button
                    variant="outline"
                    icon={{ icon: RiArrowLeftLine }}
                    iconPosition="left"
                  >
                    Accent
                  </Button>
                  <Button variant="outline" icon={{ icon: RiArrowRightLine }}>
                    Accent
                  </Button>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <Typography variant="caption3" className="font-medium">
                Large
              </Typography>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Button size="large" variant="accent" isLoading>
                    Accent
                  </Button>
                  <Button
                    size="large"
                    variant="accent"
                    icon={{ icon: RiArrowLeftLine }}
                    iconPosition="left"
                  >
                    Accent
                  </Button>
                  <Button
                    size="large"
                    variant="accent"
                    icon={{ icon: RiArrowRightLine }}
                  >
                    Accent
                  </Button>
                  <Button size="large" variant="secondary" isLoading>
                    Accent
                  </Button>
                  <Button
                    size="large"
                    variant="secondary"
                    icon={{ icon: RiArrowLeftLine }}
                    iconPosition="left"
                  >
                    Accent
                  </Button>
                  <Button
                    size="large"
                    variant="secondary"
                    icon={{ icon: RiArrowRightLine }}
                  >
                    Accent
                  </Button>
                  <Button size="large" variant="outline" isLoading>
                    Accent
                  </Button>
                  <Button
                    size="large"
                    variant="outline"
                    icon={{ icon: RiArrowLeftLine }}
                    iconPosition="left"
                  >
                    Accent
                  </Button>
                  <Button
                    size="large"
                    variant="outline"
                    icon={{ icon: RiArrowRightLine }}
                  >
                    Accent
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
