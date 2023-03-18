import {Box, Paper, Grid, Avatar, Flex, Input, Group, Button } from '@mantine/core';
import {
  IconCamera,
IconPhoto,
IconVideo,
IconFiles,
IconMapPin,
} from '@tabler/icons-react'

export const AddFeed = () => {
  return (
    <Paper withBorder radius={'md'}>
      <Flex p="xs"  gap="sm" >
          <Avatar radius={'md'} mr={0} size={44} />


<Box w="100%" >

            <Input variant='filled'
            size="md"
             placeholder="Share or ask something from everyone" 
             style={{ width: '100%' }} 
            styles={theme => ({
              input: {
                background: theme.colors.gray[0], 
                '&:hover': {
                  background: theme.colors.gray[1]
                }
              }
 })} />


          
          <Group mt="sm" >
            <Button size="sm" leftIcon={<IconCamera size={22} />}  color="gray" variant="subtle" > Camera </Button>
            <Button size="sm" leftIcon={<IconPhoto size={22} />} color="gray" variant="subtle" > Images </Button>
            <Button size="sm" leftIcon={<IconVideo size={22} />} color="gray" variant="subtle" > Videos </Button>
            <Button size="sm" leftIcon={<IconFiles size={22} />} color="gray" variant="subtle" > Files </Button>
            <Button size="sm" leftIcon={<IconMapPin size={22} />} color="gray" variant="subtle" > Location </Button>

            </Group>
 </Box>
      </Flex>
    </Paper>
  );
};
