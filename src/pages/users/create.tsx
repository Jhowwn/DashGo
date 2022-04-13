import { Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, VStack } from "@chakra-ui/react";
import { Input } from "../../components/Form/input";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";

export default function CraateUser() {
    return (
        <Box>
            <Header />

            <Flex w='100%' my='6' maxWidth={1480} mx='auto' px='6'>
                <Sidebar />

                <Box flex='1' borderRadius={8} bg='gray.800' p={["6",'8']} >
                    <Heading size='lg' fontWeight='normal' >Criar Usuário</Heading>

                    <Divider my='6' borderColor="gray.700" />

                    <VStack spacing="8">
                        <SimpleGrid minChildWidth="240px" spacing={["6",'8']} w="100%" >
                            <Input name="name" label="Nome Completo" />
                            <Input name="email" type="email" label="E-mail" />
                        </SimpleGrid>

                        <SimpleGrid minChildWidth="240px" spacing={["6",'8']} w="100%" >
                            <Input name="password" type="password" label="Senha" />
                            <Input name="" type="password" label="Confirmar Senha" />
                        </SimpleGrid>
                    </VStack>

                    <Flex mt="8" justify='flex-end'>
                        <HStack spacing="4">
                            <Button colorScheme="whiteAlpha">Cancelar</Button>
                            <Button colorScheme="pink">Salvar</Button>
                        </HStack>
                    </Flex>
                </Box>
            </Flex>
        </Box>
    );
}