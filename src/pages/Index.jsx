import { Container, VStack, Button, Grid, GridItem, Text } from "@chakra-ui/react";
import { useState } from "react";
import kickSound from '../../public/sounds/kick.wav';
import snareSound from '../../public/sounds/snare.wav';
import hiHatSound from '../../public/sounds/hihat.wav';
import clapSound from '../../public/sounds/clap.wav';
import tomSound from '../../public/sounds/tom.wav';
import cymbalSound from '../../public/sounds/cymbal.wav';

const sounds = [
  { id: 1, name: "Kick", color: "red.400", file: kickSound },
  { id: 2, name: "Snare", color: "blue.400", file: snareSound },
  { id: 3, name: "Hi-Hat", color: "green.400", file: hiHatSound },
  { id: 4, name: "Clap", color: "yellow.400", file: clapSound },
  { id: 5, name: "Tom", color: "purple.400", file: tomSound },
  { id: 6, name: "Cymbal", color: "orange.400", file: cymbalSound },
];

const Index = () => {
  const [playing, setPlaying] = useState(null);

  const playSound = (sound) => {
    setPlaying(sound.name);
    const audio = new Audio(sound.file);
    audio.play();
    setTimeout(() => setPlaying(null), 200); // Reset after 200ms for visual feedback
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">Soundboard</Text>
        <Text>Click on the buttons to play sounds</Text>
        <Grid templateColumns="repeat(3, 1fr)" gap={6}>
          {sounds.map((sound) => (
            <GridItem key={sound.id}>
              <Button
                size="lg"
                height="100px"
                width="100px"
                bg={sound.color}
                onClick={() => playSound(sound)}
                _hover={{ bg: `${sound.color}.600` }}
                _active={{ bg: `${sound.color}.700` }}
              >
                {sound.name}
              </Button>
            </GridItem>
          ))}
        </Grid>
        {playing && <Text fontSize="lg">Playing: {playing}</Text>}
      </VStack>
    </Container>
  );
};

export default Index;