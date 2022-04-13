import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
    showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
    return (
        <Flex align="center" >
            {showProfileData && (
                <Box mr='4' textAlign='right'>
                    <Text>Jhonatan de Sousa</Text>
                    <Text color='gray.300' fontSize='small'>
                        jhow@gmail.com
                    </Text>
                </Box>
            )}

            <Avatar size='md' name='Jhonatan Sousa' src='https://github.com/jhowwn.png' />
        </Flex>
    );
}