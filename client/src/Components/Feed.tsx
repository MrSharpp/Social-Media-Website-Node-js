import {Box,TypographyStylesProvider, Paper, Grid, Avatar, Flex, Input, Group, Button , Title} from '@mantine/core';
import {
  IconArrowBigUp,
IconArrowBigDown,
} from '@tabler/icons-react'

import {useState} from 'react';

export const Feed = () => {

  const [status, setStatus] = useState<'' | 'upvoted' | 'downoted'>('');

  return (
    <Paper withBorder radius={'md'} p="sm" >
      <Flex  gap="sm" >
          <Avatar radius={'md'} mr={0} size={44} />


          <Box >
        
        <Title order={5} my='sm' > UserName </Title>

        <TypographyStylesProvider> 
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac metus consequat, gravida Nulla ac sapien eros. Donec ut orci orci. Duis euismod eros nec tortor molestie sollicitudin. </p>
          </TypographyStylesProvider>
  
  
          <Group mt="sm" spacing="xs" >
              <Button size="sm" leftIcon={<IconArrowBigUp size={22} />}  
              color={status === 'upvoted' ? 'blue' : "gray" }
              variant={status === 'upvoted' ? 'light' : "subtle" }
              onClick={() => {
                setStatus(prev => prev === 'upvoted' ? '' : 'upvoted')
              }} > Upvote </Button>
  
              <Button size="sm" leftIcon={<IconArrowBigDown size={22} />} onClick={() => {
                setStatus(prev => prev === 'downvoted' ? '' : 'downvoted')
              }} 
              variant={status === 'downvoted' ? 'light' : "subtle" }
              color={status === 'downvoted' ? 'red' : "gray" }
              > Downvote </Button>
  
              </Group>
            
            </Box>

      </Flex>

    
    </Paper>
  );
};
