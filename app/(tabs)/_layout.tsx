import { Drawer } from 'expo-router/drawer';
import React from 'react';

import { IconSymbol } from '@/components/ui/icon-symbol';
import { Platform } from 'react-native';

export default function TabLayout() {

  return (
    <Drawer
      screenOptions={{
        drawerType: Platform.OS === 'web' ? 'permanent' : 'front'
      }}>
      <Drawer.Screen
        name="index"
        options={{
          title: 'Home',
          drawerIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
        }}
      />
      <Drawer.Screen
        name="explore"
        options={{
          title: 'Explore',
          drawerIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
        }}
      />
    </Drawer>
  );
}
