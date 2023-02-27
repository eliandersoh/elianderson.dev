import aboutData from "@/data/about-data.json";
import { format, formatDistance } from "date-fns";
import { Anchor, Heading, List, Paragraph } from "dracula-ui";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About me",
};

export default function About() {
  const { career, education, certifications } = aboutData;

  return (
    <div className="pt-4">
      <Heading as="h1" size="2xl" color="cyanGreen">
        About me
      </Heading>
      <div className="flex flex-col-reverse md:flex-row items-center">
        <div className="space-y-4 flex-1">
          <Paragraph as="p" color="greySecondary" size="md">
            {`Greetings! I am a self-taught software engineer based in Brazil with a
        focus on developing innovative solutions that make life simpler for
        people. I have extensive experience in cloud technologies and am
        passionate about staying up-to-date with the latest trends in the field.
        Currently, I'm sharpening my skills in React, Next.js, Node.js, and
        NestJS using Typescript. `}
          </Paragraph>{" "}
        </div>
        <div className="flex-1">
          <Image alt="My photo" src="/me.png" width={320} height={250} />
        </div>
      </div>
      <Paragraph as="p" size="md" color="greySecondary">
        {`I'm also eager to explore the potential
        applications of edge computing and its implications for the future. With
        a solid background in Java and Spring Boot, I'm excited to collaborate
        with other professionals and help bring your ideas to life. Let's
        connect and explore how we can work together to create cutting-edge
        solutions that meet your unique needs!`}
      </Paragraph>

      <Heading className="pt-10 pb-6" color="purpleCyan">
        Career
      </Heading>

      <List className="space-y-8">
        {career.map((item) => {
          const startDate = new Date(item.start_date);
          const endDate = item.end_date ? new Date(item.end_date) : null;

          return (
            <li key={item.start_date}>
              <Heading size="lg">{item.title}</Heading>
              <Paragraph className="mb-1">
                {item.company} · {item.location_type}
              </Paragraph>
              <Paragraph size="sm" className="mb-4">
                {format(startDate, "MMM yyyy")} -{" "}
                {endDate ? format(endDate, "MMM yyyy") : "Present"} ·{" "}
                {formatDistance(startDate, endDate || new Date(), {})}
              </Paragraph>
              <Paragraph
                color="greySecondary"
                size="sm"
                dangerouslySetInnerHTML={{
                  __html: item.description,
                }}
              />
            </li>
          );
        })}
      </List>

      <Heading className="pt-8 pb-6" color="pinkPurple">
        Education
      </Heading>

      <List className="">
        {education.map((item) => {
          const startDate = new Date(item.start_date);
          const endDate = new Date(item.end_date);

          return (
            <li key={item.start_date}>
              <Heading size="lg">{item.degree}</Heading>
              <Paragraph className="mb-1">{item.school}</Paragraph>
              <Paragraph size="sm" className="mb-4">
                {format(startDate, "MMM yyyy")} - {format(endDate, "MMM yyyy")}
              </Paragraph>
              <Paragraph
                size="sm"
                color="greySecondary"
                className="mb-4"
                dangerouslySetInnerHTML={{
                  __html: item.description,
                }}
              ></Paragraph>
            </li>
          );
        })}
      </List>

      <Heading color="yellowPink" className="pt-8 pb-6">
        Licenses & certifications
      </Heading>

      <List className="">
        {certifications.map((item) => {
          const startDate = new Date(item.start_date);
          const endDate = new Date(item.end_date);

          return (
            <li key={item.start_date}>
              <Heading size="lg">
                <Anchor
                  href={item.url}
                  size="lg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.title}
                </Anchor>
              </Heading>
              <Paragraph className="mb-1">{item.authority}</Paragraph>
              <Paragraph size="sm" className="mb-4">
                Issued {format(startDate, "MMM yyyy")} - Expires{" "}
                {format(endDate, "MMM yyyy")}
              </Paragraph>
            </li>
          );
        })}
      </List>
    </div>
  );
}
