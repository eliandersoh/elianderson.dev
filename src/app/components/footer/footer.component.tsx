import { Anchor, List, Paragraph } from "dracula-ui";

export const Footer = () => {
  return (
    <footer className="drac-bg-black container mx-auto pt-16 pb-8">
      <List className="flex gap-4 pb-4 justify-center">
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
                https://www.linkedin.com/in/elianderson-oliveira-sousa-963190123/
                "
            color="pinkPurple"
          >
            LinkedIn
          </Anchor>
        </li>
      </List>
      <Paragraph size="md" className="text-center" color="grey">
        Made with ♥ by Elianderson
      </Paragraph>
    </footer>
  );
};
