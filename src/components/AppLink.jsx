import { Link } from "@chakra-ui/react";

const AppLink = ({ href, children, key, ...props }) => {
  return (
    <Link {...props} href={href} textDecoration="none" _hover={{ textDecoration: "none" }}>
      {children}
    </Link>
  );
};

export default AppLink;
