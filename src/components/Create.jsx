import '../cssModules/Create.css';
import { useDisclosure } from '@chakra-ui/react';
import {
  Card,
  CardBody,
  CardHeader,
  FormLabel,
  FormControl,
  Input,
  Button,
  Collapse,
  Textarea,
  Box,
} from '@chakra-ui/react';
export default function Create() {
  const { isOpen, onToggle } = useDisclosure();
  const handleSubmit = () => {};
  return (
    <div className="Create">
      <Button colorScheme="teal" onClick={onToggle}>
        Create a post now!
      </Button>
      <Collapse in={isOpen} animateOpacity>
        <Box bg={'teal.500'}>
          <Card bg={'#011627'}>
            <CardHeader color={'teal.500'}>Create a post</CardHeader>
            <CardBody>
              <FormControl>
                <FormLabel as="legend" color={'teal'}>
                  Post Creation
                </FormLabel>
                <FormLabel color={'teal'}>Title</FormLabel>
                <Input type="text" />
                <FormLabel color={'teal'}>Content</FormLabel>
                <Textarea />
                <Button type="submit">Submit Post</Button>
              </FormControl>
            </CardBody>
          </Card>
        </Box>
      </Collapse>
    </div>
  );
}
