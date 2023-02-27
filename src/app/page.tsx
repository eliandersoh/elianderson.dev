import { Anchor, Box, Heading, List, Paragraph } from "dracula-ui";
import Image from "next/image";

export const metadata = {
  title: "Elianderson Oliveira",
};

export default function Home() {
  return (
    <>
      <Box className="flex-1 flex flex-col-reverse md:flex-row items-center">
        <Box className="flex-1 flex flex-col">
          <Heading as="h1" size="2xl" className="pb-4" color="cyanGreen">
            {`Hi, I'm Elianderson`}.
          </Heading>

          <Paragraph as="p" size="md" color="cyan">
            {`I'm`} a software engineer based in Brazil, currently working at{" "}
            <Anchor href="https://moongy.group/pt/" color="cyan">
              MoOngy Group
            </Anchor>
            . {`I'm`} passionate about building things that make {`people's`}{" "}
            lives easier.
          </Paragraph>
          <List className="pt-8 gap-4 hidden md:flex">
            <li>
              <Anchor
                href="
              https://www.linkedin.com/in/elianderson-oliveira-sousa-963190123/
              "
                color="pinkPurple"
              >
                LinkedIn
              </Anchor>
            </li>
            <li>
              <Anchor
                href="
              https://github.com/eliandersoh
              "
                color="pinkPurple"
              >
                Github
              </Anchor>
            </li>
          </List>
        </Box>
        <Box className="flex-1 flex justify-center items-center ">
          <Image alt="My photo" src="/me.png" width={600} height={600} />
        </Box>
      </Box>
    </>
  );
}
