import type { ComponentStory } from '@storybook/react-native';
import { Avatar } from '@gluestack/ui-compiled';
import { HStack, VStack } from '@gluestack/ui-compiled';
import React from 'react';
import Wrapper from '../Wrapper';

type CustomAvatarStory = ComponentStory<typeof Avatar>;

export const AvatarStory: CustomAvatarStory = ({ size = 'md' }: any) => {
  return (
    <Wrapper>
      <HStack space="md">
        <Avatar size={size}>
          <Avatar.FallbackText>AB</Avatar.FallbackText>
          <Avatar.Image
            source={{
              uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
            }}
          />
          <Avatar.Badge />
        </Avatar>
        <Avatar size={size}>
          <Avatar.FallbackText>AB</Avatar.FallbackText>
          <Avatar.Image
            source={{
              uri: 'https://broken.link',
            }}
          />
          <Avatar.Badge />
        </Avatar>
      </HStack>
    </Wrapper>
  );
};

export { Avatar, HStack, VStack };
