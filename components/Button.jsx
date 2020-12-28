import { Button } from "@chakra-ui/react";

export default function CustomButton({ children }) {
  return (
    <Button
      type="submit"
      bg="headingText"
      color="background"
      borderRadius="none"
    >
      {children}
    </Button>
  );
}
