import {Paper, Avatar,SimpleGrid,Box,Title,Text,Group} from '@mantine/core'

export function UserInfo() {
    return (
        <Paper withBorder  p="sm" >
            <Group spacing={40}>

            <Avatar size='lg' mr="md" />

                <Box>
                    <Title order={5} >
                        Name</Title>
                            <Text> User Name </Text>
                    </Box>

                <Box>
                    <Title order={5} >
                        Email</Title>
                            <Text> dummy@email.com </Text>
                    </Box>

                <Box>
                    <Title order={5} >
                        Total Posts</Title>
                            <Text> 45 </Text>
                    </Box>

                <Box>
                    <Title order={5} >
                        Upvots / Downvotes</Title>
                            <Text> 27 / 18 </Text>
                    </Box>

            </Group>

        </Paper>
    )
}